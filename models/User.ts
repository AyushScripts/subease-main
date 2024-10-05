import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  subscriptions: [
    {
      name: { type: String, required: false },
      category: { type: String, required: false },
      price: { type: Number, required: false },
      currency: { type: String, required: false },
      renewalDate: { type: Date, required: false },
      billingCycle: { type: String, required: false },
      note: { type: String, required: false },
    }
  ]
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
