"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { Id } from "@/convex/_generated/dataModel";

import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { useCallback, useEffect } from "react";
import { MessageStatus } from "@/app/types/message";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormSchema = z.object({
  body: z.string({ message: "Veuillez écrire votre message" }),
});

const MessageDetails = ({ messageId }: { messageId: string }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  var document = useQuery(api.messages.getMessage, {
    messageId: messageId as Id<"messages">,
  });

  const updateStatus = useMutation(api.messages.updateStatus);
  const replyTo = useMutation(api.messages.replyTo);

  // const handleupdateStatus = (newStatus: string) => {
  //   updateStatus({
  //     messageId: messageId as Id<"messages">,
  //     newStatus: newStatus,
  //   });
  // };

  const handleupdateStatus = useCallback(
    (newStatus: string) => {
      updateStatus({
        messageId: messageId as Id<"messages">,
        newStatus: newStatus,
      });
    },
    [messageId, updateStatus]
  );

  useEffect(() => {
    if ((document?.message?.status as MessageStatus) == MessageStatus.New) {
      handleupdateStatus(MessageStatus.InProgress);
    }
  }, [handleupdateStatus, document?.message?.status]);

  const handleReplyTo = (data: z.infer<typeof FormSchema>) => {
    replyTo({
      body: data.body,
      messageId: messageId as Id<"messages">,
    }).finally(() => {
      form.reset({ body: "" });
    });
  };

  if (document?.message == null) {
    return (
      <div className="space-y-2 m-10">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    );
  }

  return (
    <div className="h-screen overflow-clip flex flex-col">
      <div className="flex justify-between items-start p-4">
        <div className="flex items-start gap-4 text-sm">
          <Avatar>
            {/* <AvatarImage alt={mail.name} /> */}
            <AvatarFallback>
              {document?.message.name
                .split(" ")
                .map((chunk) => chunk[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <div className="font-semibold">{document.message.name}</div>
            <div className="line-clamp-1 text-xs">{document.message.motif}</div>
            <div className="line-clamp-1 text-xs">
              {document.message.email}
              {document.message.phone && (
                <span> - {document.message.phone}</span>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-xs text-muted-foreground text-end">
            {new Date(document.message._creationTime).toLocaleDateString(
              "fr-FR",
              {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
              }
            )}
          </div>
          <Select onValueChange={handleupdateStatus}>
            <SelectTrigger className="h-7">
              <SelectValue placeholder={document.message.status} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={MessageStatus.Replied}>
                {MessageStatus.Replied}
              </SelectItem>
              <SelectItem value={MessageStatus.InProgress}>
                {MessageStatus.InProgress}
              </SelectItem>
              <SelectItem value={MessageStatus.Closed}>
                {MessageStatus.Closed}
              </SelectItem>
              <SelectItem value={MessageStatus.Rejected}>
                {MessageStatus.Rejected}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Separator />
      <ScrollArea className="relative flex-1">
        <div className="relative p-4 mb-60">
          <p className="whitespace-pre-wrap text-sm">{document.message.body}</p>
          <div className="mt-2 flex flex-col gap-3 justify-end items-end max-w-96 ml-auto">
            {document.childMessages.map((childMessage) => (
              <div
                key={childMessage._id}
                className="p-2 bg-primary text-white rounded-xl w-fit"
              >
                <p>{childMessage.body}</p>
                <p className="text-xs text-right">
                  {new Date(childMessage._creationTime).toLocaleDateString(
                    "fr-FR",
                    {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                    }
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-12 left-0 right-0 bg-white">
          <Separator />

          <div className="p-4 ">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleReplyTo)}>
                <div className="grid gap-4">
                  {/* <ScrollArea className="max-h-52"> */}
                  <FormField
                    control={form.control}
                    name="body"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder={`Répondre à ${document?.message.name}...`}
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* </ScrollArea> */}
                  <div className="flex items-center">
                    <Button type="submit" size="sm" className="ml-auto">
                      Send
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default MessageDetails;
