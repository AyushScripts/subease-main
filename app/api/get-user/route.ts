import { getAuth, clerkClient } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";

export async function GET(req: NextRequest) {
  const { userId } = getAuth(req);
  
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const user = await clerkClient().users.getUser(userId);
  return NextResponse.json(user)

}
