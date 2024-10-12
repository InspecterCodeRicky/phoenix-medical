"use client";

import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const CardProduct = ({ product }: { product: ProductType }) => {
  const [favorite, setFavorite] = useState(false);

  const handleOnClick = () => {
    setFavorite(!favorite);
  };
  return (
    <div className="relative bg-muted p-4 rounded-xl h-full">
      <div
        role="button"
        onClick={handleOnClick}
        className={`p-2 transition-colors duration-500 absolute top-2 right-2 h-8 w-8 rounded-full flex justify-center items-center
            ${favorite ? "bg-primary" : "bg-white"}
        `}
      >
        <Heart
          className={cn(`transition-colors duration-300 ${favorite ? "text-white" : "text-black"}`)}
          fill={favorite ? "white" : "black"}
        />
      </div>
      <Image
        src={product.images![0].url}
        width={1000}
        height={1000}
        alt={product.title}
      />
      <div>
        <p className="text-sm md:text-lg font-bold"> {product.title} </p>
        {product.shortDescription && (
          <p className="text-xs md:text-base text-muted-foreground line-clamp-1">
            {product.shortDescription}{" "}
          </p>
        )}
      </div>
    </div>
  );
};

export default CardProduct;
