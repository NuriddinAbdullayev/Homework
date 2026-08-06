import { NextResponse } from 'next/server';

interface RouteProps {
  params: Promise<{ id: string }>;
}

export async function GET(
  request: Request,
  { params }: RouteProps
) {
  const { id } = await params;

  const user = { id, name: `User ${id}` };

  return NextResponse.json(user, { status: 200 });
}