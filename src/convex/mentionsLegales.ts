import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { Id } from "./_generated/dataModel";

export const list = query({
  handler: async (ctx) => {
    const list = ctx.db.query("mentionsLegales").collect();
    return list;
  },
});

export const update = mutation({
  args: {
    mentionsId: v.id("mentionsLegales"),
    text: v.string(),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const data = await ctx.db.get(args.mentionsId);
    if (data == null) {
      throw new Error("Not found");
    }
    await ctx.db.patch(args.mentionsId, {
      title: args.title,
      text: args.text,
    });
    return data;
  },
});

export const getById = query({
  args: { mentionsId: v.string() },
  handler: async (ctx, args) => {
    try {
      const isValidId = /^[a-z0-9]{32}$/i.test(args.mentionsId);

      if (!isValidId) {
        console.warn(`Invalid data ID format: ${args.mentionsId}`);
        return null;
      }

      const id = args.mentionsId as Id<"mentionsLegales">;
      const data = await ctx.db.get(id);

      if (!data) {
        console.warn(`Data not found for ID: ${args.mentionsId}`);
        return null;
      }
      return data;
    } catch (error) {
      console.error("Error fetching data by ID:", error);
      return null;
    }
  },
});
