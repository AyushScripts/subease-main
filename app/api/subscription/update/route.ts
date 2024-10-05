import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  const {
    clerkId,
    subscriptionId, 
    name,
    category,
    price,
    currency,
    renewalDate,
    billingCycle,
    note,
  } = await req.json();

  await dbConnect();

  const user = await User.findOne({ clerkId });
  if (!user) {
    return NextResponse.json({ message: "Invalid user" }, { status: 400 });
  }

  const updateFields: any = {};
  if (name !== undefined) updateFields["subscriptions.$.name"] = name;
  if (category !== undefined) updateFields["subscriptions.$.category"] = category;
  if (price !== undefined) updateFields["subscriptions.$.price"] = price;
  if (currency !== undefined) updateFields["subscriptions.$.currency"] = currency;
  if (renewalDate !== undefined) updateFields["subscriptions.$.renewalDate"] = renewalDate;
  if (billingCycle !== undefined) updateFields["subscriptions.$.billingCycle"] = billingCycle;
  if (note !== undefined) updateFields["subscriptions.$.note"] = note;

  if (Object.keys(updateFields).length === 0) {
    return NextResponse.json({ message: "No fields provided to update" }, { status: 400 });
  }

  try {
    const updatedUser = await User.findOneAndUpdate(
      { clerkId, "subscriptions._id": subscriptionId }, 
      {
        $set: updateFields,
      },
      { new: true }
    );
 
    if (!updatedUser) {
      return NextResponse.json({ message: "Subscription not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Subscription Updated", subscriptions: updatedUser.subscriptions }, { status: 200 });
  } catch (error) {
    console.error("Error updating subscription:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
