"use client";

import MessageList from "./_components/messages-list";
import MessageDetails from "./_components/message-details";
import { useState } from "react";

import { MousePointerClick } from "lucide-react";

const Page = () => {

  const [messageId, setMessageId] = useState("");

  return (
    <div className="bg-white h-full">
      <div className="grid grid-cols-12 h-full">
        <div className="col-span-4 border-r overflow-hidden px-4">
          <p className="text-lg font-bold mb-3 pt-2">Messages</p>
          <MessageList callback={setMessageId} selectedId={messageId} />
        </div>
        <div className="col-span-8 h-full">
          {!messageId ? (
            <div className="h-full w-full flex items-center justify-center">
              <MousePointerClick />
              <p>Veuillez sélectionner un message pour voir les détails</p>
            </div>
          ) : (
            <MessageDetails messageId={messageId} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
