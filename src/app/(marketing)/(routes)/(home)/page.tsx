"use client";

import BenefitsErgo from "@/app/(marketing)/(routes)/(home)/_strates/benefitsErgo";
import Exosquelette from "@/app/(marketing)/(routes)/(home)/_strates/exosquelette";
import Hero from "@/app/(marketing)/(routes)/(home)/_strates/hero";
import Catalogue from "@/app/(marketing)/_strates/catalogue";
import Amenagement from "@/app/(marketing)/(routes)/(home)/_strates/amenagement";
import FAQ from "@/app/(marketing)/(routes)/(home)/_strates/faq";

function Page() {
  return (
    <div>
      <div className="overflow-hidden">
        <Hero />
        <BenefitsErgo />
        <Exosquelette />
        <Catalogue DontSavedScrollPosition={true}/>
        <Amenagement />
        <FAQ />
      </div>
    </div>
  );
}

export default Page;
