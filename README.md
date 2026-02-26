This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


This is a Next.js backend + frontend server that displays real-time parking status.

It works together with:

Telegram Parking Bot – writes parking data to MongoDB

MongoDB – central database storing users, balances, and parking slots

The server reads data from MongoDB and renders live parking occupancy in the browser.

Telegram-Bot source: https://github.com/Yaroslav-Repos/Telegram-Parking-Bot

Examples:


<img width="1899" height="965" alt="image" src="https://github.com/user-attachments/assets/3a0628c1-f4a4-4fb9-8e7f-3c5771ffb198" />


<img width="1893" height="954" alt="image" src="https://github.com/user-attachments/assets/6257d69c-7827-4bfb-ad65-85e8f329dbea" />


<img width="1893" height="950" alt="image" src="https://github.com/user-attachments/assets/b8ed0230-d9b5-4a21-ba73-be2ffab3794e" />
