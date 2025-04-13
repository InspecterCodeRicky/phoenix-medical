"use client";

import { tags } from "@/data/products";
import CardProduct from "@/app/(marketing)/_components/cardProduct";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useEffect, useState } from "react";

import fadeIn from "@/lib/variants-motion";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";

const ListCatalogue = ({ displayAll = false, DontSavedScrollPosition = false }: { displayAll?: Boolean, DontSavedScrollPosition?: Boolean }) => {
  const products = useQuery(api.catalogue.list);
  const [selectedTag, setSelectedTag] = useState("Tout");

  const handleSelectTag = (tag: string) => {
    setSelectedTag(tag);
  };

  const router = useRouter();

  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem("scrollPosition");
    if (savedScrollPosition && !DontSavedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
    }
  }, [products, DontSavedScrollPosition]);

  const handleProductClick = (productId: Id<"catalogue">) => {
    // Sauvegarde la position de défilement
    sessionStorage.setItem("scrollPosition", `${window.scrollY}`);
    router.push(`/catalogue/${productId}`);
  };

  return (
    <>
      {displayAll && (
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex gap-5 mt-5"
        >
          <ScrollArea className="w-full whitespace-nowrap h-16">
            <div className="flex gap-5 mt-5">
              {tags.map((tag, index) => (
                <div
                  key={`tag-${index}`}
                  role="button"
                  aria-label={tag}
                  onClick={() => handleSelectTag(tag)}
                  className={cn(
                    `select-none transition duration-300 rounded-full px-4 py-1 ${selectedTag == tag ? "bg-primary text-white" : "hover:bg-muted"}`
                  )}
                >
                  {tag}
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </motion.div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7">
        {(products || [])
          .filter(
            (el) => selectedTag == "Tout" || el.tags.includes(selectedTag)
          )
          .map((p, index) => {
            if ((!displayAll && index < 4) || displayAll) {
              return <CardProduct key={p.ref} product={p} goToDetails={handleProductClick}/>;
            }
          })}
      </div>
    </>
  );
};

export default ListCatalogue;
