import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const clerkId = searchParams.get("clerkId");
  
  if (!clerkId) {
    return NextResponse.json(
      { message: "clerkId is required" },
      { status: 400 }
    );
  }

  await dbConnect();
  try {
    const user = await User.findOne({ clerkId });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      { subscriptions: user.subscriptions },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error retrieving subscriptions:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
