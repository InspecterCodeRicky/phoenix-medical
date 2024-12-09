"use client";

// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
// } from "@/components/ui/alert-dialog";
// import { Button } from "@/components/ui/button";
import { useClient } from "@/hooks/useClient";
// import { useAppStore } from "@/store/app.store";
// import { useEffect, useState } from "react";

// const ConfidentialityNotice = () => {
//   const [open, setOpen] = useState(false);

  // const isClient = useClient();

//   const { confidentialityNotice, setConfidentialityNotice } = useAppStore();

//   useEffect(() => {
//     if (confidentialityNotice == false && isClient) {

//       setOpen(true);
//     }
//   }, [isClient, confidentialityNotice]);

//   const handleAcceptConfidentialityNotice = () => {};

//   const handleChange = (open: boolean) => {
//     if (!open) {
//       setConfidentialityNotice(true);
//     }
//     setOpen(open,);
//   };

//   return (
//     <div>
//       <AlertDialog open={open} onOpenChange={handleChange}>
//         <AlertDialogContent>
//           <AlertDialogHeader>
//             <AlertDialogTitle>
//               PARAMÈTRES DE CONFIDENTIALITÉ DE PHOENIX MÉDICAL
//             </AlertDialogTitle>
//             <AlertDialogDescription>
//               En poursuivant votre nagivation, vous acceptez l'utilisation de la
//               part du site https://phoenixmedical.fr et de tiers, de cookies et
//               autres traceurs a des fins de mesure d'audience, profilage,
//               personnalisation des contenus sur nos services.
//             </AlertDialogDescription>
//           </AlertDialogHeader>
//           <AlertDialogFooter>
//             <AlertDialogAction asChild>
//               <Button onClick={() => handleAcceptConfidentialityNotice}>
//                 J'ai compris
//               </Button>
//             </AlertDialogAction>
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialog>
//     </div>
//   );
// };

// export default ConfidentialityNotice;

import Link from "next/link";
import { CookieModal } from "@schlomoh/react-cookieConsent";

function ConfidentialityNotice() {
  const isClient = useClient();

  return (
    <>
    {isClient && <CookieModal
      infoContent={
        <div className="space-y-2">
          <p className="text-sm font-semibold">
            PARAMÈTRES DE CONFIDENTIALITÉ DE PHOENIX MÉDICAL
          </p>
          <p className="text-xs">
            Pour offrir les meilleures expériences, nous utilisons des
            technologies telles que les cookies pour stocker et/ou accéder aux
            informations des appareils. Le fait de consentir à ces technologies
            nous permettra de traiter des données telles que le comportement de
            navigation ou les ID uniques sur ce site. Le fait de ne pas
            consentir ou de retirer son consentement peut avoir un effet négatif
            sur certaines caractéristiques et fonctions.
          </p>
        </div>
      }
      acceptButtonText="Accepter"
      declineButtonText="Refuser"
      accentColor="#232E5A"
      secondaryButtonStyle={{
        background: "none",
        border: "1px solid grey",
        color: "grey"
      }}
    />}
    </>
  );
}

export default ConfidentialityNotice;
