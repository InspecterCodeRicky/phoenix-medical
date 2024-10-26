"use client";
import { MessageStatus } from "@/app/types/message";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { cn, getColorBadge } from "@/lib/utils";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { usePaginatedQuery } from "convex/react";
import { File } from "lucide-react";

const DemandeList = ({
  selectedId,
  callback,
}: {
  selectedId?: string;
  callback?: (id: string) => void;
}) => {
  const PAGE_SIZE = 1000;

  const { results, status, loadMore } = usePaginatedQuery(
    api.devis.listDemandes,
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
          <div className="flex flex-col gap-2">
            {results.map((demande, index) => {
              return (
                <button
                  key={demande._id}
                  className={cn(
                    "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
                    selectedId === demande._id && "bg-muted"
                  )}
                  onClick={() => callback!(demande._id)}
                >
                  <div className="flex w-full flex-col gap-1">
                    <div className="flex items-center">
                      <div className="flex items-center gap-2">
                        <div className="font-semibold">{demande.name}</div>
                        {(demande.status as MessageStatus) ==
                          MessageStatus.New && (
                          <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                        )}
                      </div>
                      <div
                        className={cn(
                          "ml-auto text-xs",
                          selectedId === demande._id
                            ? "text-foreground"
                            : "text-muted-foreground"
                        )}
                      >
                        {isToday(demande._creationTime)
                          ? new Date(demande._creationTime).toLocaleTimeString(
                              [],
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                              }
                            )
                          : new Date(demande._creationTime).toLocaleDateString(
                              "fr-FR",
                              {
                                day: "numeric",
                                month: "short",
                              }
                            )}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs font-medium">
                    {demande.email}
                  </p>
                  {demande.message && (
                    <p className="line-clamp-2 text-xs text-muted-foreground">
                      {demande.message.substring(0, 300)}
                    </p>
                  )}
                  {(demande.status as MessageStatus) !== MessageStatus.New && (
                    <Badge className={getColorBadge(demande.status)}>
                      {demande.status}
                    </Badge>
                  )}
                </button>
              );
            })}
            {!!!results.length && (
              <div className="border rounded-lg p-4 h-full w-full flex flex-col gap-3 items-center justify-center">
                <File />
                <p>Aucun message disponible pour l'instant</p>
              </div>
            )}
          </div>
        </ScrollArea>
      )}
    </div>
  );
};

export default DemandeList;
