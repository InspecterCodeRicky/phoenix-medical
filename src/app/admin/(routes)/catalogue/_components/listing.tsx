"use client";

import DataTable from "@/app/admin/_components/data-table";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { useState } from "react";
import FormCatalogue from "../_forms/formCatalogue";
import { Plus } from "lucide-react";

const Listing = () => {
  const data = useQuery(api.catalogue.list);

  const [catalogue, setCatalogue] = useState<Doc<"catalogue"> | undefined>(
    undefined
  );

  if (data == undefined && data == null) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    );
  }

  const handleSelectLine = (line?: any) => {
    if (line) {
      setCatalogue(line);
    } else {
      const newLine: any = {
        title: "",
        status: "",
        ref: "",
        carateristics: "",
        description: "",
        images: [],
        price: 0,
        ugc: 0,
        shortDescription: "",
        tags: [],
      };
      setCatalogue(newLine);
    }
  };
  const handleCallback = () => {
    setCatalogue(undefined);
  };

  return (
    <div className="bg-white h-full ">
      <ScrollArea className="h-screen pb-16">
        <div className="m-4">
          <div className="flex gap-5 justify-between items-center">
            <p className="text-lg font-semibold mb-5">Catalogue</p>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleSelectLine()}
            >
              <Plus />
            </Button>
          </div>
          {data && (
            <DataTable
              data={
                data?.map((item) => {
                  return {
                    ...item,
                    image: (item.images[0] || {}).url || "",
                  };
                }) || []
              }
              canSearch={true}
              theadTable={[
                "Image",
                "Référence",
                "Titre",
                "Statut",
                "Catégories",
                "Prix",
              ]}
              detailedProperties={[
                {
                  name: "image",
                  type: "image",
                },
                {
                  name: "ref",
                  type: "text",
                },
                {
                  name: "title",
                  type: "text",
                },
                {
                  name: "status",
                  type: "status",
                },
                {
                  name: "tags",
                  type: "text",
                },
                {
                  name: "price",
                  type: "text",
                },
              ]}
              tabColSearching={["ref", "title", "status", "tags", "price"]}
              CallbackLine={handleSelectLine}
            />
          )}

          {catalogue !== undefined ? (
            <FormCatalogue
              catalogue={catalogue!}
              isModal={true}
              callback={handleCallback}
            />
          ) : null}
          <div className="h-44"></div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Listing;
