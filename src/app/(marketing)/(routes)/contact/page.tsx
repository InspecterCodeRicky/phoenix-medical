import MainContact from "./_components/main";

import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contact",
  description: "Envoyez-nous vos coordonnées via le formulaire et on se chargera de revenir vers vous dans les plus bref délais 🕦"
};


const contactPage = () => {
  return (
    <div>
      <MainContact />
    </div>
  );
};

export default contactPage;
