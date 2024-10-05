import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const {
    clerkId,
    name,
    category,
    price,
    currency,
    renewalDate,
    billingCycle,
    note,
  } = await req.json();

  await dbConnect();

  try {
    const user = await User.findOne({ clerkId });
    if (!user) {
      return NextResponse.json({ message: "Invalid user" }, { status: 400 });
    } else {
      const updatedUser = await User.findOneAndUpdate(
        { clerkId: clerkId },
        {
          $push: {
            subscriptions: {
              name,
              category,
              price,
              currency,
              renewalDate,
              billingCycle,
              note,
            },
          },
        },
        { new: true }
      );

      console.log(updatedUser);
      return NextResponse.json(
        { message: "Subscription Added", subscriptions: updatedUser.subscriptions },
        { status: 201 }
      );
    }
  } catch (error) {
    console.error("Error adding subscription:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
