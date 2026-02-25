'use client';

import React, { useEffect, useState } from 'react';

type ParkingSlot = {
  lot: number;
  slot: number;
  user_id: number | null;
};

type ParkingLot = {
  lot: number;
  slots: ParkingSlot[];
};

export default function ParkingPage() {
  const [parkingData, setParkingData] = useState<ParkingLot[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchParkingData() {
      try {
        const res = await fetch('/api/parking');
        if (!res.ok) throw new Error('Не вдалося отримати дані');
        const data = await res.json();
        setParkingData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchParkingData();
  }, []);

  if (loading) return <div style={{ padding: 20 }}>Завантаження...</div>;
  if (error) return <div style={{ padding: 20, color: 'red' }}>Помилка: {error}</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Стан паркувальних майданчиків</h1>
      {parkingData.map(({ lot, slots }) => (
        <div key={lot} style={{ marginBottom: 40 }}>
          <h2>Паркувальний майданчик №{lot}</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(40px, 1fr))',
            gap: 10,
            maxWidth: 600
          }}>
            {slots.map(({ slot, user_id }) => (
              <div
                key={slot}
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: user_id ? '#e74c3c' : '#2ecc71',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  borderRadius: 4,
                  userSelect: 'none'
                }}
                title={`Місце №${slot} — ${user_id ? 'Зайняте' : 'Вільне'}`}
              >
                {slot}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}