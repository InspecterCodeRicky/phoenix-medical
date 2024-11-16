import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import fadeIn from "@/lib/variants-motion";

const BenefitsErgo = () => {
  return (
    <div className="relative mt-36">
      <div className="py-20 before:content-[''] before:absolute before:top-0 before:right-0 before:z-0 before:h-full before:w-full max-w-full  md:before:max-w-[70%] before:bg-card-foreground">
        <div className="container relative grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="flex justify-center items-center"
          >
            <Image
              className="rounded-xl w-fit md:h-4/5"
              src="/img/benefits-ergo.png"
              width={1200}
              height={1200}
              alt="benefits-ergo"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="flex flex-col justify-center"
          >
            <p className="text-primary text-3xl font-medium md:w-4/5">
              🤩 Les bienfaits de l’ergonomie sur la santé
            </p>
            <p className="text-muted-foreground mt-5">
              L’ergonomie au travail favorise une meilleure posture et réduit
              les risques de blessures, contribuant ainsi à une vie
              professionnelle plus saine et plus productive
            </p>
            <div className="flex gap-5 items-center mt-5">
              <Button variant="outline" className="md:w-fit w-full">
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
        </div>
      </div>
    </div>
  );
};

export default BenefitsErgo;
