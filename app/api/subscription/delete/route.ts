import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  const { clerkId, subscriptionId } = await req.json();

  await dbConnect();

  const user = await User.findOne({ clerkId });
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  try {
    const updatedUser = await User.findOneAndUpdate(
      { clerkId },
      {
        $pull: { subscriptions: { _id: subscriptionId } },
      },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json({ message: "Subscription not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Subscription deleted", subscriptions: updatedUser.subscriptions }, { status: 200 });
  } catch (error) {
    console.error("Error deleting subscription:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
