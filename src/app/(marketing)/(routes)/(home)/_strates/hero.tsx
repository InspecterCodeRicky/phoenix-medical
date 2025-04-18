import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CounterText from "../../../_components/counter";

import { fadeIn } from "@/lib/variants-motion";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative">
      <div className="py-20 md:py-32 before:content-[''] before:absolute before:top-0 before:z-0 before:h-full before:w-full  before:max-w-full lg:before:max-w-[70%] before:bg-card-foreground">
        <div className="container relative grid lg:grid-cols-2 gap-x-5 gap-y-10">
          <div>
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="uppercase text-primary text-3xl font-bold md:w-2/3"
            >
              Nos solutions ergonomiques
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="text-muted-foreground mt-5"
            >
              Découvrez un large choix de solutions ergonomiques 👍, conçues
              pour conjuguer travail et plaisir ✌️. Que ce soit pour le bureau
              ou pour les tâches physiques, vous trouverez des solutions
              innovantes au service de votre santé
            </motion.p>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="flex flex-wrap gap-5 items-center mt-5"
            >
              <Button className="md:w-fit w-full" asChild>
                <Link href="/devis">Demandez un devis</Link>
              </Button>

              <Button className="md:w-fit w-full" variant="outline">
                <Link
                  href="/catalogue"
                  className="flex items-center gap-2 hover:gap-5 transition-all"
                >
                  Voir notre catalogue
                  <MoveRight />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="grid grid-cols-2 gap-5 mt-10"
            >
              <div>
                <CounterText start={0} end={50} prefix="+" height={40} />
                <p className="text-muted-foreground tracking-[.2rem]">
                  Produits
                </p>
              </div>
              <div>
                <CounterText start={0} end={100} suffix="%" height={40} />
                <p className="text-muted-foreground tracking-[.2rem]">
                  Personnalisable
                </p>
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="p-0 w-full flex justify-center items-center max-h-fit"
          >
            <Image
              className="rounded-xl w-full h-full object-contain"
              src="/img/hero.jpeg"
              priority={false}
              quality={75}
              width={500}
              height={300}
              alt="hero"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
