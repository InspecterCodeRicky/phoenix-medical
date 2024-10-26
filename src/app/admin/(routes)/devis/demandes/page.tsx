"use client";

import { useState } from "react";
import { MousePointerClick } from "lucide-react";
import DemandeList from "../_components/demandes/demande-list";
import DetailsQuoteRequest from "../_components/demandes/details";

const DemandesPage = () => {
  const [quoteRequestId, setQuoteRequestId] = useState("");
  return (
    <div className="bg-white h-full">
      <div className="grid grid-cols-12 h-full">
        <div className="col-span-4 border-r overflow-hidden px-4">
          <p className="text-lg font-bold mb-3 pt-2">Demande de devis</p>
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

export default DemandesPage;
