import MainCatalogue from "./_strates/main";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Catalogue",
  description: "Découvrez un large choix de solutions ergonomiques 👍, conçues pour conjuguer travail et plaisir ✌️. Que ce soit pour le bureau ou pour les tâches physiques, vous trouverez des solutions innovantes au service de votre santé"
};

const CataloguePage = () => {
  return (
    <div>
      <MainCatalogue/>
    </div>
  );
};

export default CataloguePage;
