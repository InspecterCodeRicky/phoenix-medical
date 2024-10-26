"use client";
import { usePaginatedQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { cn, getColorBadge } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { MessageStatus } from "@/app/types/message";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessagesSquare } from "lucide-react";


const MessageList = ({
  selectedId,
  callback,
}: {
  selectedId?: string;
  callback?: (id: string) => void;
}) => {
  
  const PAGE_SIZE = 1000;

  const { results, status, loadMore } = usePaginatedQuery(
    api.messages.listMessages,
    {},
    { initialNumItems: PAGE_SIZE }
  );

  const isToday = (_creationTime: number) => {
    const messageDate = new Date(_creationTime);
    const today = new Date();
    return (
      messageDate.getDate() === today.getDate() &&
      messageDate.getMonth() === today.getMonth() &&
      messageDate.getFullYear() === today.getFullYear()
    );
  };

  return (
    <div>
      {status == "LoadingFirstPage" ? (
        <>
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </>
      ) : (
        <ScrollArea className="h-screen pb-28">
          <div className="flex flex-col gap-2 pt-0">
            {results.map((message, index) => {
              return (
                <button
                  key={message._id}
                  className={cn(
                    "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
                    selectedId === message._id && "bg-muted"
                  )}
                  onClick={() => callback!(message._id)}
                >
                  <div className="flex w-full flex-col gap-1">
                    <div className="flex items-center">
                      <div className="flex items-center gap-2">
                        <div className="font-semibold">{message.name}</div>
                        {(message.status as MessageStatus) ==
                          MessageStatus.New && (
                          <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                        )}
                      </div>
                      <div
                        className={cn(
                          "ml-auto text-xs",
                          selectedId === message._id
                            ? "text-foreground"
                            : "text-muted-foreground"
                        )}
                      >
                        {isToday(message._creationTime)
                          ? new Date(message._creationTime).toLocaleTimeString(
                              [],
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                              }
                            )
                          : new Date(message._creationTime).toLocaleDateString(
                              "fr-FR",
                              {
                                day: "numeric",
                                month: "short",
                              }
                            )}
                      </div>
                    </div>
                    <div className="text-xs font-medium">{message.motif}</div>
                  </div>
                  <div className="line-clamp-2 text-xs text-muted-foreground">
                    {message.body.substring(0, 300)}
                  </div>
                  {(message.status as MessageStatus) !== MessageStatus.New && (
                    <Badge className={getColorBadge(message.status)}>
                      {message.status}
                    </Badge>
                  )}
                </button>
              );
            })}
            {!!!results.length && (
              <div className="border rounded-lg p-4 h-full w-full flex flex-col gap-3 items-center justify-center">
                <MessagesSquare />
                <p>Aucun message disponible pour l'instant</p>
              </div>
            )}
          </div>
        </ScrollArea>
      )}
    </div>
  );
};

export default MessageList;
