import { products } from "@/data/products";
import CardProduct from "../_components/cardProduct";
import fadeIn from "@/lib/variants-motion";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const Catalogue = () => {
  return (
    <div className="container mt-36">
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full flex flex-col items-center justify-center gap-5"
      >
        <Link href="/catalogue" className="group flex items-center gap-4">
          <p className="text-3xl font-semibold relative  w-fit transition-all block after:block after:content-[''] after:rounded-full after:absolute after:scale-x-50 after:h-[3px] after:bg-primary after:w-full after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            Nos Produits 😎
          </p>
          <MoveRight className="transition-all duration-300 opacity-0 group-hover:opacity-100" />
        </Link>
        <p className="text-sm md:text-base text-center text-muted-foreground md:w-1/2">
          L’ergonomie au travail favorise une meilleure posture et réduit les
          risques de blessures, contribuant ainsi à une vie professionnelle
        </p>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        {products.map((p) => (
          <CardProduct key={p.ref} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
