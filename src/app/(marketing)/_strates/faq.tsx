import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { motion } from "framer-motion";
import fadeIn from "@/lib/variants-motion";

const FAQ = () => {
  const ListFAQ = [
    {
      question: "Quels sont les délais de livraison ?",
      answer:
        "Nos délais de livraison varient selon le produit et la personnalisation. En général, comptez entre 2 à 4 semaines pour les équipements sur mesure.",
    },
    {
      question: "Proposez-vous des essais avant l'achat ?",
      answer:
        "Oui, nous proposons des périodes d'essai pour certains produits afin de vous assurer qu'ils répondent à vos attentes.",
    },
    {
      question: "Comment obtenir un devis personnalisé ?",
      answer:
        "Remplissez notre formulaire en ligne ou contactez-nous directement par téléphone pour recevoir un devis gratuit et sans engagement.",
    },
    {
      question: "Quels modes de paiement acceptez-vous ?",
      answer:
        "Nous acceptons les paiements par carte bancaire, virement, et PayPal pour plus de flexibilité.",
    },
  ];

  return (
    <div className="container mt-36">
      <motion.p
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className="text-5xl font-semibold md:text-center mb-2"
      >
        FAQ ?
      </motion.p>
      <motion.p
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className="text-3xl md:text-center font-semibold relative"
      >
        Les questions les plus fréquentes 🤔
      </motion.p>
      <motion.p
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className="text-base md:text-center text-muted-foreground mt-3"
      >
        Vous avez une question ? nous sommes là pour vous aider
      </motion.p>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className="mt-5"
      >
        <Accordion type="single" collapsible className="w-full">
          {ListFAQ.map((faq, index) => (
            <AccordionItem value={`faq-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
};

export default FAQ;
