import { paginationOptsValidator } from "convex/server";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  handler: async (ctx) => {
    const list = ctx.db
      .query("catalogue")
      .order("desc")
      .collect()
    return list;
  },
});

export const create = mutation({
  args: {
    ref: v.string(),
    images: v.array(
      v.object({
        url: v.string(),
      })
    ),
    title: v.string(),
    shortDescription: v.string(),
    description: v.string(),
    carateristics: v.string(),
    price: v.number(),
    ugc: v.number(),
    tags: v.array(v.string()),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    const catalogueId = await ctx.db.insert("catalogue", { ...args });
    const catalague = await ctx.db.get(catalogueId);
    return catalague;
  },
});

export const update = mutation({
  args: {
    catalogueId: v.id("catalogue"),
    ref: v.string(),
    images: v.array(
      v.object({
        url: v.string(),
      })
    ),
    title: v.string(),
    shortDescription: v.string(),
    description: v.string(),
    carateristics: v.string(),
    price: v.number(),
    ugc: v.number(),
    tags: v.array(v.string()),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    const catalague = await ctx.db.get(args.catalogueId);
    if (catalague == null) {
      throw new Error("Not found");
    }
    await ctx.db.patch(args.catalogueId, { ...args });

    return catalague;
  },
});

export const getById = query({
  args: { catalogueId: v.id("catalogue") },
  handler: async (ctx, args) => {
    const catalague = await ctx.db.get(args.catalogueId);
    if (catalague == null) {
      throw new Error("Not found");
    }

    return catalague;
  },
});
