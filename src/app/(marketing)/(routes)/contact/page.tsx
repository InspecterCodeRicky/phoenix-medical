"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants-motion";
import ContactForm from "./_forms/contactForm";
import { CircleCheckBig} from "lucide-react";


const DevisPage = () => {

  const points = [
    {
      title: "Temps de réponse rapide",
      description:
        "Nous répondons à vos demandes en moins de 24 heures ouvrées.",
    },
    {
      title: "Accompagnement personnalisé",
      description:
        "Nos experts vous conseillent selon vos besoins spécifiques.",
    },
    {
      title: "Suivi dédié",
      description:
        "Un conseiller vous accompagne du début à la fin de votre projet.",
    },
    {
      title: "Devis gratuit",
      description: "Recevez un devis sur mesure gratuitement, sans engagement.",
    },
    {
      title: "Contact facile",
      description:
        "Disponible par téléphone, email ou formulaire en ligne pour toutes vos questions.",
    },
  ];
 
  return (
    <div className="md:container">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="px-10 py-20 flex flex-col gap-5 justify-center bg-muted">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="flex items-start gap-3"
          >
            <p className="uppercase font-semibold">📍</p>
            <div className="flex flex-col gap-1">
              <p className="uppercase font-semibold">Adresse</p>
              <p className="text-sm">
                Immeuble groupama grand camp la rocade 97139 les Abymes
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="flex items-start gap-3"
          >
            <p className="uppercase font-semibold"> 🕦</p>
            <div className="flex flex-col gap-1">
              <p className="uppercase font-semibold">Horaire d'ouverture</p>
              <p className="text-sm">Lundi - Dimanche</p>
              <p className="text-sm">09h30 - 17h30</p>
            </div>
          </motion.div>
          {points.map((point, index) => (
            <motion.div
              variants={fadeIn("up", 0.1 * index)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              key={`point-${index}`}
              className="flex items-start gap-3"
            >
              <CircleCheckBig className="h-4 w-4 text-primary mt-1" />
              <div className="flex-1 flex flex-col gap-1">
                <p className="font-semibold">{point.title}</p>
                <p className="text-muted-foreground">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col gap-5 p-10 md:p-0 lg:p-10">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="uppercase text-3xl font-bold text-center"
          >
            📤 Prendre contact avec nous
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="text-muted-foreground text-center"
          >
            Envoyez-nous vos coordonnées via le formulaire et on se chargera de
            revenir vers vous dans les plus bref délais 🕦.
          </motion.p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default DevisPage;
