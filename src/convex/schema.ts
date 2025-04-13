import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  messages: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    motif: v.string(),
    body: v.string(),
    status: v.string(),
    parentMessage: v.optional(v.id("messages")),
  }).index("by_user", ["email", "phone", "name"]),
  quoteRequest: defineTable({
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
  }).index("by_user", ["email", "phone", "name"]),
  catalogue: defineTable({
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
  }).index("by_user", ["ref"]),
  mentionsLegales: defineTable({
    title: v.string(),
    text: v.string(),
  }),
});
