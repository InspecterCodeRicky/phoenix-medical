import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import fadeIn from "@/lib/variants-motion";

const Amenagement = () => {
  return (
    <div className="relative mt-36">
      <div className="py-20 before:content-[''] before:absolute before:top-0 before:left-0 before:z-0 before:h-full before:w-full max-w-full lg:before:max-w-[70%] before:bg-card-foreground">
        <div className="container relative grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="flex flex-col justify-center"
          >
            <p className="text-primary text-3xl font-medium xs:w-4/5">
              😍 Aménager votre espace de travail 
            </p>
            <p className="text-muted-foreground mt-5">
              L’ergonomie au travail c’est concevoir et aménager les postes de
              travail, les équipements et les environnements pour qu’ils soient
              adaptés aux capacités, et aux besoins des utilisateurs. Son
              objectif est d’améliorer le bien-être, la sécurité et l’efficacité
              des employés en réduisant notamment les risques de blessures et de
              fatigue.
            </p>
            <div className="flex gap-5 items-center mt-5">
              <Button className="md:w-fit w-full">
                <Link
                  href="/catalogue"
                  className="flex items-center gap-2 hover:gap-5 transition-all"
                >
                  Voir notre catalogue
                  <MoveRight />
                </Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="flex justify-center items-center"
          >
            <Image
              className="rounded-xl w-fit lg:h-4/5"
              src="/img/amenagement.png"
              width={1200}
              height={1200}
              alt="amenagement"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Amenagement;
