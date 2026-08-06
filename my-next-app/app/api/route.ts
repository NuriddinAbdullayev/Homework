import { NextResponse } from 'next/server';

export async function GET() {
  const users = [
    { id: '1', name: 'Ali' },
    { id: '2', name: 'Vali' },
    { id: '3', name: 'Sali' },
  ];

  return NextResponse.json(users, { status: 200 });
}