"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants-motion";
import DevisForm from "../_forms/devisForm";

const MainDevis = () => {
  return (
    <div className="container mt-10">
      <div className="flex flex-col gap-5 justify-center items-center md:w-2/3 m-auto">
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="uppercase text-primary text-3xl font-bold text-center"
        >
          Il y a un produit qui vous intéresse 👈
        </motion.h1>
        <motion.p
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="text-muted-foreground text-center"
        >
          Veuillez remplir ce formulaire, notre équipe se fera un plaisir de
          vous accompagner dans le choix de votre solution ergonomique sur
          mesure 👌
        </motion.p>
      </div>
      <DevisForm />
    </div>
  );
};

export default MainDevis;
