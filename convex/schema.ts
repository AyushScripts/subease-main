// convex/schema.ts
import { v } from "convex/values";
import { defineSchema, defineTable } from "convex/server";

export default defineSchema({
  subscriptions: defineTable({
    userId: v.string(),
    name: v.string(),
    price: v.number(),
    category: v.string(),
    currency: v.string(),
    renewalDate: v.number(),
    billingCycle: v.string(),
    notes: v.optional(v.string()),
  }),
});
