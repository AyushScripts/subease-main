import {dbConnect} from "@/lib/dbConnect";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const {clerkId, email} = await req.json();

  await dbConnect();
  const user = await User.findOne({ clerkId });

  if(!user) {
    const newUser = new User({ clerkId, email });
    await newUser.save();
    return NextResponse.json({ message: 'User created' }, { status: 201 });
  } else {
    return NextResponse.json({ message: 'User already exists' }, { status: 400 });
  }
}