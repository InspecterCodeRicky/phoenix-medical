import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

import { filter } from "convex-helpers/server/filter";

export const list = query({
  handler: async (ctx) => {
    const list = ctx.db.query("catalogue").collect();
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
    const catalogue = await ctx.db.get(catalogueId);
    return catalogue;
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
    const catalogue = await ctx.db.get(args.catalogueId);
    if (catalogue == null) {
      throw new Error("Not found");
    }
    await ctx.db.patch(args.catalogueId, { ...args });

    return catalogue;
  },
});

export const getById = query({
  args: { catalogueId: v.id("catalogue") },
  handler: async (ctx, args) => {
    try {
      const catalogue = await ctx.db.get(args.catalogueId);
      return catalogue;
    } catch (error) {}
    return null;
  },
});

export const getSimilarProdByTags = query({
  args: { catalogueId: v.id("catalogue") },
  handler: async (ctx, args) => {
    try {
      const catalogue = await ctx.db.get(args.catalogueId);
      const tags = catalogue?.tags;
      const cataloguesSimilars = filter(
        ctx.db.query("catalogue"),
        (q) =>
          q._id != args.catalogueId && q.tags.some((tag) => tags?.includes(tag))
      ).take(4);
      return cataloguesSimilars;
    } catch (error) {}
    return [];
  },
});
