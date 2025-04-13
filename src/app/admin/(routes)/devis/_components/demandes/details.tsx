"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Id } from "@/convex/_generated/dataModel";

import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { useCallback, useEffect } from "react";
import { MessageStatus } from "@/app/types/message";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const DetailsQuoteRequest = ({ quoteId }: { quoteId: string }) => {
  var document = useQuery(api.devis.getQuoteRequest, {
    quoteId: quoteId as Id<"quoteRequest">,
  });

  const updateStatus = useMutation(api.devis.updateStatusQuoteRequest);

  // const handleupdateStatus = (newStatus: string) => {
  //   updateStatus({
  //     quoteId: quoteId as Id<"quoteRequest">,
  //     newStatus: newStatus,
  //   });
  // };
  const handleupdateStatus = useCallback((newStatus: string) => {
    updateStatus({
      quoteId: quoteId as Id<"quoteRequest">,
      newStatus: newStatus,
    });
  }, [quoteId, updateStatus]); 

  useEffect(() => {
    if ((document?.status as MessageStatus) == MessageStatus.New) {
      handleupdateStatus(MessageStatus.InProgress);
    }
  }, [handleupdateStatus, document?.status]);

 

  if (document == null) {
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
              {document?.name
                .split(" ")
                .map((chunk) => chunk[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <div className="font-semibold">{document.name}</div>
            <div className="line-clamp-1 text-xs">
              {document.email}
              {document.phone && <span> - {document.phone}</span>}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-xs text-muted-foreground text-end">
            {new Date(document._creationTime).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "short",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
          </div>
          <Select onValueChange={handleupdateStatus}>
            <SelectTrigger className="h-7">
              <SelectValue placeholder={document.status} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={MessageStatus.Replied}>
                {" "}
                {MessageStatus.Replied}{" "}
              </SelectItem>
              <SelectItem value={MessageStatus.InProgress}>
                {" "}
                {MessageStatus.InProgress}{" "}
              </SelectItem>
              <SelectItem value={MessageStatus.Closed}>
                {" "}
                {MessageStatus.Closed}{" "}
              </SelectItem>
              <SelectItem value={MessageStatus.Rejected}>
                {" "}
                {MessageStatus.Rejected}{" "}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Separator />
      <ScrollArea className="relative flex-1">
        <div className="flex flex-col gap-5 p-4 mb-60">
          {document.message && (
            <div>
              <p className="font-semibold">Informations complémentaires</p>
              <p className="whitespace-pre-wrap text-sm text-muted-foreground">{document.message}</p>
            </div>
          )}
          <div className="border rounded-lg p-2">
            <p className="font-semibold">📍Localisation de l'aménagement</p>
            <div className="grid grid-cols-2 gap-3 mt-3">
              <div>
                <h3 className="font-semibold text-sm">Adresse</h3>
                <p className="text-muted-foreground">{document.address}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Code postal</h3>
                <p className="text-muted-foreground">{document.cp}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Ville</h3>
                <p className="text-muted-foreground">{document.city}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Pays</h3>
                <p className="text-muted-foreground">{document.country}</p>
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-2">
            <div className="flex justify-between items-center">
              <p className="font-semibold">Les produits souhaités</p>
              <Button size="sm" variant="outline">
                Faire le devis
              </Button>
            </div>
            <div className="flex flex-col items-center justify-center gap-5 min-h-40">
              <p className="text-sm">Pas de produits</p>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default DetailsQuoteRequest;
