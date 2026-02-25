import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const dbName = process.env.MONGODB_DB!;

if (!uri) {
    throw new Error("Please define MONGODB_URI in .env.local");
}

let client: MongoClient | null = null;

async function connectToDB() {
    if (!client) {
        client = new MongoClient(uri);
        await client.connect();
    }
    return client.db(dbName);
}

export async function GET() {
    try {
        const db = await connectToDB();
        const parkingCollection = db.collection('parking');

        const lots = [1, 2, 3];
        const allParkingData = [];

        for (const lot of lots) {
            const places = await parkingCollection.find({ lot }).toArray();

            let maxSlots = 0;
            if (lot === 1) maxSlots = 32;
            else if (lot === 2) maxSlots = 20;
            else if (lot === 3) maxSlots = 26;

            const occupiedSlots = new Map(places.map(p => [p.slot, p]));

            const fullSlots = [];
            for (let slot = 1; slot <= maxSlots; slot++) {
                if (occupiedSlots.has(slot)) {
                    fullSlots.push(occupiedSlots.get(slot));
                } else {
                    fullSlots.push({ lot, slot, user_id: null });
                }
            }

            allParkingData.push({ lot, slots: fullSlots });
        }

        return NextResponse.json(allParkingData);

    } catch (error) {
        console.error("MongoDB connection error:", error);
        return NextResponse.json({ error: 'Failed to load parking data' }, { status: 500 });
    }
}