import { getAuth } from '@clerk/nextjs/server';
import {dbConnect} from '@/lib/dbConnect';
import User from '@/models/User';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await dbConnect();
  const userData = await User.findOne({ clerkId: userId });

  return NextResponse.json(userData, { status: 200 });
}
