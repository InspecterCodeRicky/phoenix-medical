"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { setCookie, getCookie } from "cookies-next";
import { useEffect, useState } from "react";

function ConfidentialityNotice() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const localConsent = getCookie("localConsent");
    setOpen(localConsent == null);
  }, []);

  const acceptCookie = (value: "Accept" | "Refuse") => {
    setOpen(false);
    setCookie("localConsent", value, {});
  };

  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              PARAMÈTRES DE CONFIDENTIALITÉ DE PHOENIX MÉDICAL
            </AlertDialogTitle>
            <AlertDialogDescription>
              Pour offrir les meilleures expériences, nous utilisons des
              technologies telles que les cookies pour stocker et/ou accéder aux
              informations des appareils. Le fait de consentir à ces
              technologies nous permettra de traiter des données telles que le
              comportement de navigation ou les ID uniques sur ce site. Le fait
              de ne pas consentir ou de retirer son consentement peut avoir un
              effet négatif sur certaines caractéristiques et fonctions.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-col gap-y-2">
            <Button
              variant="destructive"
              onClick={() => acceptCookie("Refuse")}
            >
              Refuser
            </Button>
            <AlertDialogAction asChild>
              <Button onClick={() => acceptCookie("Accept")}>Accepter</Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {!open && (
        <div
          onClick={() => setOpen(true)}
          role="button"
          className="transition-all size-10 fixed flex justify-center items-center bottom-20 md:bottom-2 right-2 bg-white drop-shadow-xl mt-5 rounded-full"
        >
          <p className="text-lg">🍪</p>
        </div>
      )}
    </>
  );
}

export default ConfidentialityNotice;
