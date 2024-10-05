import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  const { clerkId, email } = await req.json();

  if (!clerkId) {
    return NextResponse.json({ message: "clerkId is required" }, { status: 400 });
  }

  await dbConnect();

  try {
    const updateFields: any = {};
    if (email !== undefined) updateFields.email = email;

    const updatedUser = await User.findOneAndUpdate(
      { clerkId },
      { $set: updateFields },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "User updated", user: updatedUser }, { status: 200 });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
