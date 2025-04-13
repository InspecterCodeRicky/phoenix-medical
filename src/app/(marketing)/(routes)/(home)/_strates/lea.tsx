import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import fadeIn from "@/lib/variants-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import PlayBtn from "@/app/(marketing)/_components/playBtn";

const LogoGooglePlaystore = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5rem"
    height="1.5rem"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="currentColor"
      d="M48 59.49v393a4.33 4.33 0 0 0 7.37 3.07L260 256L55.37 56.42A4.33 4.33 0 0 0 48 59.49ZM345.8 174L89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32ZM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95ZM449.38 231l-71.65-39.46L310.36 256l67.37 64.43L449.38 281c19.49-10.77 19.49-39.23 0-50Z"
    ></path>
  </svg>
);

const AppstoreLine = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5rem"
    height="1.5rem"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="none">
      <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"></path>
      <path
        fill="currentColor"
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2Zm0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16Zm.5 9a1 1 0 0 1 .117 1.993L12.5 15H9.106l-.833 1.489a1 1 0 0 1-1.797-.872l.052-.106l.286-.51H6.3a1 1 0 0 1-.117-1.994L6.3 13h6.2Zm1.893-2.988L16.066 13H17.7a1 1 0 1 1 0 2h-.514l.287.512a1 1 0 0 1-1.745.977l-3.08-5.5a1 1 0 0 1 1.745-.977Zm-2.52-4.5l.127.227l.127-.227a1 1 0 0 1 1.746.977l-3.08 5.5a1 1 0 0 1-1.745-.977l1.806-3.226l-.726-1.297a1 1 0 1 1 1.745-.977Z"
      ></path>
    </g>
  </svg>
);

const Lea = () => {
  const [openDialogVideo, setOpenDialogVideo] = useState(false);

  const DialogVideo = () => {
    return (
      <Dialog open={openDialogVideo} onOpenChange={setOpenDialogVideo}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Utilisation de l'application Léa</DialogTitle>
            <DialogDescription className="hidden"></DialogDescription>
          </DialogHeader>
          <div>
            <video controls autoPlay className="rounded-lg">
              <source src="https://wandering-sardine-131.convex.cloud/api/storage/a1ddcfd7-5804-4a78-bb86-36ea179b214b" type="video/mp4" />
            </video>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className="relative bg-muted">
      <div className="grid md:grid-cols-2">
        <div className="bg-[#E6E6E6] flex justify-center items-center pb-5">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex gap-5 justify-center items-center max-h-fit relative group"
            role="button"
            onClick={() => {
              setOpenDialogVideo(true);
            }}
          >
            <Image
              className="rounded-xl w-fit max-h-80"
              src="/img/lea-2.webp"
              width={500}
              height={500}
              alt="lea"
            />
            <Image
              className="rounded-xl w-fit max-h-80"
              src="/img/lea.png"
              width={500}
              height={500}
              alt="lea"
            />
            <div className="p-2 size-14 flex items-center justify-center absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
              <PlayBtn />
            </div>
          </motion.div>
        </div>
        <div className="container xl:px-32 py-10 xl:py-24 flex flex-col justify-center gap-5 ">
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-primary text-3xl font-medium"
          >
            Application Léa
          </motion.p>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-5"
          >
            <p>
              L'outil d'analyse posturale LEA est conçu pour évaluer et analyser
              la posture des individus. Il permet de détecter les déséquilibres
              et d'identifier les zones de tension ou de douleur. Grâce à des
              mesures précises et des observations détaillées, LEA aide à mieux
              comprendre la posture et à proposer des solutions adaptées, que ce
              soit par des exercices, des ajustements ergonomiques ou d'autres
              interventions. Si vous avez des questions spécifiques sur son
              utilisation ou ses bénéfices, n'hésitez pas à demander !
            </p>
            <div className="flex gap-5 items-center mt-5">
              <Button variant="outline" className="md:w-fit w-full">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.ergosante.lea&hl=fr&pli=1"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <LogoGooglePlaystore />
                  PlayStore
                </Link>
              </Button>
              <Button variant="default" className="md:w-fit w-full">
                <Link
                  href="https://apps.apple.com/fr/app/lea-ergosant%C3%A9/id1615980204?platform=iphone"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <AppstoreLine />
                  AppStore
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      <DialogVideo />
    </div>
  );
};

export default Lea;
