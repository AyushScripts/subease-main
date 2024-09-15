import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const addSubscription = mutation({
    args: {
        userId: v.string(),
        name: v.string(),
        category: v.string(),
        price: v.number(),
        currency: v.string(),
        renewalDate: v.number(),
        billingCycle: v.string(),
        notes: v.optional(v.string()), // Make notes optional
    },
    handler: async (ctx, args) => {
        const user = await ctx.auth.getUserIdentity();

        // Check if user is authenticated
        if (!user || !user.subject) {
            throw new Error("User is not authenticated.");
        }

        await ctx.db.insert("subscriptions", {
            name: args.name,
            userId: user.subject, // Now we can safely assign user.subject
            category: args.category,
            price: args.price,
            currency: args.currency,
            renewalDate: args.renewalDate,
            billingCycle: args.billingCycle,
            notes: args.notes, // Include notes if provided
        });
    }
});

export const getSubscription = query({
    args: {},
    handler: async (ctx, args) => {
        const user = await ctx.auth.getUserIdentity();

        if(!user) {
            throw new Error("You must be signed in")
        }

        await ctx.db
        .query("subscriptions")
        .filter((q)=> q.eq(q.field("userId"), user.subject))
    }
})