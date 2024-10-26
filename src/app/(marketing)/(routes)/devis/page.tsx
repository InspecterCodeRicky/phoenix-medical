import MainDevis from "./_components/main";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Devis",
  description: "Veuillez remplir ce formulaire, notre équipe se fera un plaisir de vous accompagner dans le choix de votre solution ergonomique sur mesure 👌"
};

const DevisPage = () => {
  return (
    <div> 
      <MainDevis/>
    </div>
  );
};

export default DevisPage;
