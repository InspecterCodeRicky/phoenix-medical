"use client";

import { useState } from "react";
import DemandeList from "./demande-list";
import { MousePointerClick } from "lucide-react";
import DetailsQuoteRequest from "./details";

const MainDemandes = () => {
  const [quoteRequestId, setQuoteRequestId] = useState("");
  return (
    <div className="bg-white h-full mt-4">
      <div className="grid grid-cols-12 h-full">
        <div className="col-span-4 border-r overflow-hidden pr-4">
          <DemandeList
            callback={setQuoteRequestId}
            selectedId={quoteRequestId}
          />
        </div>
        <div className="col-span-8 h-full">
          {!quoteRequestId ? (
            <div className="h-full w-full flex items-center justify-center">
              <MousePointerClick />
              <p>Veuillez sélectionner une demande pour voir les détails</p>
            </div>
          ) : (
            <DetailsQuoteRequest quoteId={quoteRequestId} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainDemandes;
