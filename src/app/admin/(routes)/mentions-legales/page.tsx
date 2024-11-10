"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { useState } from "react";
import { Doc } from "@/convex/_generated/dataModel";
import FormNotice from "./_forms/FormNotice";

const MentionsLegales = () => {
  const data = useQuery(api.mentionsLegales.list);

  const [notice, setNotice] = useState<Doc<"mentionsLegales"> | undefined>(
    undefined
  );

  if (data == undefined || data == null) {
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
      setNotice(line);
    } else {
      const newLine: any = {
        title: "",
        text: "",
      };
      setNotice(newLine);
    }
  };
  const handleCallback = () => {
    setNotice(undefined);
  };

  return (
    <div className="m-4">
      <p className="text-lg font-semibold mb-5">Mentions legales</p>
      <div className="flex flex-col gap-5">
        {data.map((mention) => (
          <div
            role="button"
            key={mention._id}
            className="flex flex-col gap-2 border rounded-lg p-2 hover:border-primary"
            onClick={() => handleSelectLine(mention)}
          >
            <p className="font-bold text-sm">{mention.title}</p>
            <div
              className="line-clamp-5 text-sm"
              dangerouslySetInnerHTML={{ __html: mention.text }}
            />
          </div>
        ))}
      </div>
      {notice !== undefined ? (
        <FormNotice notice={notice!} isModal={true} callback={handleCallback} />
      ) : null}
    </div>
  );
};

export default MentionsLegales;
