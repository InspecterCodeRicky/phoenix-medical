"use client";

import DataTable from "@/app/admin/_components/data-table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

const Listing = () => {
  const data = useQuery(api.catalogue.list);

  if (data == undefined && data == null) {
    <div className="space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
    </div>;
  }

  console.log("data", data);

  return (
    <div className="bg-white h-full p-4">
      <ScrollArea className="h-screen pb-16">
        <p className="text-lg font-semibold mb-5">
            Catalogue
        </p>
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
                type: "text",
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
          />
        )}
        <div className="h-44"></div>
      </ScrollArea>
    </div>
  );
};

export default Listing;
