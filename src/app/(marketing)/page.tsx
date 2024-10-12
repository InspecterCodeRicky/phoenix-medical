"use client";

import BenefitsErgo from "./_strates/benefitsErgo";
import Exosquelette from "./_strates/exosquelette";
import Header from "./_components/header";
import Hero from "./_strates/hero";
import Catalogue from "./_strates/catalogue";
import Amenagement from "./_strates/amenagement";
import FAQ from "./_strates/faq";

function Page() {
  return (
    <div>
     
      <div className="overflow-hidden">
        <Hero />
        <BenefitsErgo />
        <Exosquelette />
        <Catalogue />
        <Amenagement />
        <FAQ />
      </div>
    </div>
  );
}

export default Page;
