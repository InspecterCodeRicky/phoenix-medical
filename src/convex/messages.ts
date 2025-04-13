import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { paginationOptsValidator } from "convex/server";
import { MessageStatus } from "@/app/types/message";

export const listMessages = query({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (identity === null) {
      throw new Error("Not authenticated");
    }

    const messages = await ctx.db
      .query("messages")
      //   mettre un filter ici pour avoir que les messages sans parentMessage
      .filter((q) => q.eq(q.field("parentMessage"), undefined))
      .order("desc")
      .paginate(args.paginationOpts);
    return messages;
  },
});
export const send = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    motif: v.string(),
    body: v.string(),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("messages", { ...args });
    return "success";
  },
});

export const getMessage = query({
  args: { messageId: v.id("messages") },
  handler: async (ctx, args) => {
    try {
      const message = await ctx.db.get(args.messageId);
      if (message == null) {
        throw new Error("Not found");
      }

      const childMessages = await ctx.db
        .query("messages")
        .filter((q) => q.eq(q.field("parentMessage"), args.messageId))
        .collect(); 

      return { message, childMessages };
    } catch (error) {
      throw new Error("Not found");
    }
  },
});

export const updateStatus = mutation({
  args: { messageId: v.id("messages"), newStatus: v.string() },
  handler: async (ctx, args) => {
    try {
      const message = await ctx.db.get(args.messageId);
      if (message == null) {
        throw new Error("Not found");
      }
      await ctx.db.patch(args.messageId, { status: args.newStatus });

      return message;
    } catch (error) {
      throw new Error("Not found");
    }
  },
});

export const replyTo = mutation({
  args: { messageId: v.id("messages"), body: v.string() },
  handler: async (ctx, args) => {
    const message = await ctx.db.get(args.messageId);
    if (message == null) {
      throw new Error("Not found");
    }

    const newMessageId = await ctx.db.insert("messages", {
      name: "Admin",
      phone: "",
      email: "",
      motif: "Re: " + message.motif,
      body: args.body,
      status: MessageStatus.Replied,
      parentMessage: args.messageId,
    });

    return newMessageId;
  },
});
