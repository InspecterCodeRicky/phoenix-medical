"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Hero from "./_strates/hero";
import Catalogue from "@/app/(marketing)/_strates/catalogue";

const CataloguePage = () => {
    return ( 
       <div>
        <Hero/>
        <Catalogue displayAll={true}/>
       </div>
     );
}
 
export default CataloguePage;