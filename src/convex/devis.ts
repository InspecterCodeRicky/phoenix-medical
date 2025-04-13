import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { paginationOptsValidator } from "convex/server";
import { MessageStatus } from "@/app/types/message";

export const listDemandes = query({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (identity === null) {
      throw new Error("Not authenticated");
    }

    const list = await ctx.db
      .query("quoteRequest")
      .order("desc")
      .paginate(args.paginationOpts);
    return list;
  },
});

export const getQuoteRequest = query({
  args: { quoteId: v.id("quoteRequest") },
  handler: async (ctx, args) => {
    try {
      const quoteRequest = await ctx.db.get(args.quoteId);
      if (quoteRequest == null) {
        throw new Error("Not found");
      }

      return quoteRequest;
    } catch (error) {
      throw new Error("Not found");
    }
  },
});

export const updateStatusQuoteRequest = mutation({
  args: { quoteId: v.id("quoteRequest"), newStatus: v.string() },
  handler: async (ctx, args) => {
    try {
      const quoteRequest = await ctx.db.get(args.quoteId);
      if (quoteRequest == null) {
        throw new Error("Not found");
      }
      await ctx.db.patch(args.quoteId, { status: args.newStatus });

      return quoteRequest;
    } catch (error) {
      throw new Error("Not found");
    }
  },
});

export const sendRequest = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    message: v.optional(v.string()),
    environnement: v.string(),
    address: v.string(),
    cp: v.string(),
    city: v.string(),
    country: v.string(),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("quoteRequest", { ...args });
    return "success";
  },
});
