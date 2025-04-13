import { motion } from "framer-motion";
import fadeIn from "@/lib/variants-motion";
import Image from "next/image";
import PlayBtn from "@/app/(marketing)/_components/playBtn";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Videos = () => {
  const [openDialogTMS, setOpenDialogTMS] = useState(false);
  const [openDialogHapoBack, setOpenDialogHapoBack] = useState(false);

  const DialogHapoBack = () => {
    return (
      <Dialog open={openDialogHapoBack} onOpenChange={setOpenDialogHapoBack}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>HAPO BACK</DialogTitle>
            <DialogDescription className="hidden"></DialogDescription>
          </DialogHeader>
          <div>
            <video controls autoPlay className="rounded-lg">
              <source src="https://wandering-sardine-131.convex.cloud/api/storage/9cda9800-2df4-4187-891d-613f68b8c8d0" type="video/mp4"/>
            </video>
          </div>
        </DialogContent>
      </Dialog>
    );
  };
  const DialogTMS = () => {
    return (
      <Dialog open={openDialogTMS} onOpenChange={setOpenDialogTMS}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Prévetion santé</DialogTitle>
            <DialogDescription className="hidden"></DialogDescription>
          </DialogHeader>
          <div>
            <iframe
              className="rounded-lg"
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/iY6R5Wbvtag"
              title="Episode 1 : Les Troubles Musculo-Squelettiques #tms #travail #accompagnemenr"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className="container mt-36">
      <motion.h2
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className="text-primary text-5xl font-semibold md:text-center mb-2"
      >
        Santé et bien-être
      </motion.h2>
      <motion.p
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className="text-base md:text-center text-muted-foreground mt-3"
      >
        Les Troubles Musculo-Squelettiques 🤕 et la présentation du HAPO BACK
      </motion.p>
      <div className="mt-5 grid md:grid-cols-2 gap-5">
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="relative"
          onClick={() => setOpenDialogTMS(true)}
          role="button"
        >
          <Image
            className="rounded-xl w-full"
            src="/img/illustration-TMS.png"
            width={800}
            height={500}
            alt="TMS"
          />
          <div className="p-2 size-14 flex items-center justify-center absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <PlayBtn />
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="relative"
          onClick={() => setOpenDialogHapoBack(true)}
          role="button"
        >
          <Image
            className="rounded-xl w-full"
            src="/img/illustation-hapo-back.png"
            width={800}
            height={500}
            alt="TMS"
          />
          <div className="p-2 size-14 flex items-center justify-center absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <PlayBtn />
          </div>
        </motion.div>
      </div>
      <DialogTMS />
      <DialogHapoBack />
    </div>
  );
};

export default Videos;
