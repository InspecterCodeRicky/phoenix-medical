import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import fadeIn from "@/lib/variants-motion";
import { motion } from "framer-motion";
import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

const Sponsors = () => {
  const ListSponsors = [
    "/img/sponsors/region-guadeloupe.jpeg",
    "/img/sponsors/europe-sengage-gp.jpeg",
    "/img/sponsors/conseil-depatemental-gp.jpeg",
    "/img/sponsors/bpi-france.jpeg",
    "/img/sponsors/union-eroupenne.jpeg",
  ];

  return (
    <div className="container mt-36">
        <motion.h2
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="text-primary text-3xl font-medium md:text-center mb-2"
        >
          🤝 Nos partenaires de confiance
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="text-base md:text-center text-muted-foreground mt-3"
        >
          Ensemble, nous créons des solutions ergonomiques durables et sur
          mesure 🛠️✨
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="mt-10"
        >
          <Carousel
            plugins={[Autoplay({ delay: 2500, stopOnInteraction: false })]}
            opts={{
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="mx-10">
              {ListSponsors.map((logo, index) => (
                <CarouselItem key={index} className="basis-1/2 md:basis-1/4">
                  <Image
                    src={logo}
                    alt={`Sponsor ${index + 1}`}
                    width={500}
                    height={500}
                    className="max-h-20 w-auto object-contain"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
    </div>
  );
};

export default Sponsors;
