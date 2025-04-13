"use client";

import Catalogue from "@/app/(marketing)/_strates/catalogue";
import Hero from "./hero";

const MainCatalogue = () => {
  return (
    <div>
      <Hero />
      <Catalogue displayAll={true} />
    </div>
  );
};

export default MainCatalogue;
