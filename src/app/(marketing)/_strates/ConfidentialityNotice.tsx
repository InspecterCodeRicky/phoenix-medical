"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useClient } from "@/hooks/useClient";
import { useAppStore } from "@/store/app.store";
import { useEffect, useState } from "react";

const ConfidentialityNotice = () => {
  const [open, setOpen] = useState(false);

  const isClient = useClient();

  const { confidentialityNotice, setConfidentialityNotice } = useAppStore();
  
  useEffect(() => {
    if (confidentialityNotice == false && isClient) {
     
      setOpen(true);
    }
  }, [isClient, confidentialityNotice]);

  const handleAcceptConfidentialityNotice = () => {};

  const handleChange = (open: boolean) => {
    if (!open) {
      setConfidentialityNotice(true);
    }
    setOpen(open,);
  };

  return (
    <div>
      <AlertDialog open={open} onOpenChange={handleChange}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              PARAMÈTRES DE CONFIDENTIALITÉ DE PHOENIX MÉDICAL
            </AlertDialogTitle>
            <AlertDialogDescription>
              En poursuivant votre nagivation, vous acceptez l'utilisation de la
              part du site https://phoenixmedical.fr et de tiers, de cookies et
              autres traceurs a des fins de mesure d'audience, profilage,
              personnalisation des contenus sur nos services.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction asChild>
              <Button onClick={() => handleAcceptConfidentialityNotice}>
                J'ai compris
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ConfidentialityNotice;
