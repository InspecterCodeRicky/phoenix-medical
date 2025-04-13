"use client";

import { Doc, Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import Image from "next/image";
import {  useState } from "react";

const CardProduct = ({
  product,
  goToDetails,
}: {
  product: Doc<"catalogue">;
  goToDetails?: (catalogueId: Id<"catalogue">) => void;
}) => {
  const [favorite, setFavorite] = useState(false);

  const handleOnClick = () => {
    setFavorite(!favorite);
  };
  return (
    <div className="relative bg-muted p-4 rounded-xl h-full transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div
        role="button"
        aria-label="favorite"
        onClick={handleOnClick}
        className={`p-2 transition-colors duration-500 absolute top-2 right-2 h-8 w-8 rounded-full flex justify-center items-center
            ${favorite ? "bg-primary" : "bg-white"}
        `}
      >
        <Heart
          className={cn(
            `transition-colors duration-300 ${favorite ? "text-white" : "text-black"}`
          )}
          fill={favorite ? "white" : "black"}
        />
      </div>
      <div role="button" onClick={() => {
        if(typeof goToDetails == 'function'){
          goToDetails(product._id)
        } else {
          
        }
      }}>
        <div className="h-44 md:h-72">
          <Image
            src={product.images![0].url}
            width={600}
            height={800}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <p className="text-sm md:text-lg text-primary font-bold truncate">
            {product.title}
          </p>
          {product.shortDescription && (
            <p className="text-xs md:text-base line-clamp-1">
              {product.shortDescription}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
