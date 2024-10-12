import Image from "next/image";
import CounterText from "../_components/counter";
import { motion } from "framer-motion";
import fadeIn from "@/lib/variants-motion";
import { useMediaQuery } from "usehooks-ts";

const Exosquelette = () => {
  const matches = useMediaQuery('(min-width: 768px)')

  return (
    <div className="relative mt-36 bg-muted">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="container xl:px-32 py-10 xl:py-24 flex flex-col justify-center gap-5 ">
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl font-medium"
          >
            A chacun son exosquelette
          </motion.p>
          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-muted-foreground"
          >
            Les exosquelettes s’adaptent à chaque besoin, offrant des solutions
            personnalisées pour améliorer la performance et réduire la fatigue.
            Que ce soit pour l’industrie, la santé ou le quotidien, il existe un
            exosquelette pour chaque situation.
          </motion.p>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-5"
          >
            <p className="text-xl font-semibold text-muted-foreground">
              Les TMS les plus fréquents 🤕
            </p>
            <div className="grid grid-cols-2 gap-5 mt-5">
              <div>
                <CounterText start={0} end={58} suffix="%" height={40} />
                <p className="text-muted-foreground tracking-[.2rem]">Nuque</p>
              </div>
              <div>
                <CounterText start={0} end={69} suffix="%" height={40} />
                <p className="text-muted-foreground tracking-[.2rem]">Dos</p>
              </div>
              <div>
                <CounterText start={0} end={15} suffix="%" height={40} />
                <p className="text-muted-foreground tracking-[.2rem]">Coudes</p>
              </div>
              <div>
                <CounterText start={0} end={38} suffix="%" height={40} />
                <p className="text-muted-foreground tracking-[.2rem]">Genoux</p>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn(matches ? "left" : "up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="w-full flex justify-center items-center bg-[#E6E6E6]"
        >
          <Image
            className="rounded-xl object-contain h-full"
            src="/img/products/exosquelette.png"
            width={500}
            height={500}
            alt="exosquelette"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Exosquelette;
