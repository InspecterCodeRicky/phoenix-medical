"use client";

import { products, tags } from "@/data/products";
import CardProduct from "@/app/(marketing)/_components/cardProduct";
import fadeIn from "@/lib/variants-motion";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const Catalogue = ({ displayAll = false }: { displayAll?: Boolean }) => {
  const [selectedTag, setSelectedTag] = useState("Tout");

  const handleSelectTag = (tag: string) => {
    setSelectedTag(tag);
  };

  return (
    <div className="container mt-36">
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full flex flex-col items-center justify-center gap-5"
      >
        {!displayAll ? (
          <Link
            aria-disabled
            href="/catalogue"
            className="group flex items-center gap-4"
          >
            <p className="text-3xl font-semibold relative  w-fit transition-all block after:block after:content-[''] after:rounded-full after:absolute after:scale-x-50 after:h-[3px] after:bg-primary after:w-full after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
              Nos Produits 😎
            </p>
            <MoveRight className="transition-all duration-300 opacity-0 group-hover:opacity-100" />
          </Link>
        ) : (
          <p className="text-3xl font-semibold relative  w-fit transition-all block after:block after:content-[''] after:rounded-full after:absolute after:scale-x-50 after:h-[3px] after:bg-primary after:w-full after:transition after:duration-300 after:origin-center">
            Nos Produits 😎
          </p>
        )}

        <p className="text-sm md:text-base text-center text-muted-foreground md:w-1/2">
          L’ergonomie au travail favorise une meilleure posture et réduit les
          risques de blessures, contribuant ainsi à une vie professionnelle
        </p>
      </motion.div>
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
            <ScrollBar orientation="horizontal"/>
          </ScrollArea>
        </motion.div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7">
        {products.filter(el=> selectedTag== "Tout" || el.tags.includes(selectedTag)).map((p, index) => {
          if ((!displayAll && index < 4) || displayAll) {
            return <CardProduct key={p.ref} product={p} />;
          }
        })}
      </div>
    </div>
  );
};

export default Catalogue;
