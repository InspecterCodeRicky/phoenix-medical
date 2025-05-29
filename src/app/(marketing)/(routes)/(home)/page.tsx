"use client";

import BenefitsErgo from "@/app/(marketing)/(routes)/(home)/_strates/benefitsErgo";
import Exosquelette from "@/app/(marketing)/(routes)/(home)/_strates/exosquelette";
import Hero from "@/app/(marketing)/(routes)/(home)/_strates/hero";
import Catalogue from "@/app/(marketing)/_strates/catalogue";
import Amenagement from "@/app/(marketing)/(routes)/(home)/_strates/amenagement";
import FAQ from "@/app/(marketing)/(routes)/(home)/_strates/faq";
import Lea from "./_strates/lea";
import Videos from "./_strates/videos";
import Sponsors from "./_strates/sponsors";

function Page() {
  return (
    <div className="max-w-screen-2xl xl:m-auto">
      <div className="overflow-hidden">
        <Hero />
        <BenefitsErgo />
        <Videos />
        <Exosquelette />
        <Lea />
        <Catalogue DontSavedScrollPosition={true}/>
        <Amenagement />
        <Sponsors />
        <FAQ />
      </div>
    </div>
  );
}

export default Page;
