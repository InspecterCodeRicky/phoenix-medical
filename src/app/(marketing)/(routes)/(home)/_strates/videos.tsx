import PlayBtn from "@/app/(marketing)/_components/playBtn";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Card,
  CardDescription,
  CardHeader
} from "@/components/ui/card";

import fadeIn from "@/lib/variants-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export interface PostModel {
  type: "youtube" | "video";
  thumbnail: string;
  url: string;
  title: string;
  author: string;
}

const Videos = () => {
  const [openVideo, setOpenVideo] = useState(false);
  const [post, setPost] = useState<PostModel | undefined>();


  const DialogVideo = () => {
    return (
      <Dialog open={openVideo} onOpenChange={setOpenVideo}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle> {post?.title} </DialogTitle>
            <DialogDescription className="hidden"></DialogDescription>
          </DialogHeader>
          <div>
            {post?.type == "video" ? (
              <video controls autoPlay className="rounded-lg">
                <source src={post?.url} type="video/mp4" />
              </video>
            ) : (
              <iframe
                className="rounded-lg"
                width="100%"
                height="300"
                src={post?.url}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            )}
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  const blog: PostModel[] = [
    {
      type: "youtube",
      thumbnail: "/img/posts/1.png",
      url: "https://www.youtube.com/embed/iY6R5Wbvtag",
      title: "Prévetion santé",
      author: "SOS ECOUTE",
    },
    {
      type: "video",
      thumbnail: "/img/posts/2.png",
      url: "https://wandering-sardine-131.convex.cloud/api/storage/9cda9800-2df4-4187-891d-613f68b8c8d0",
      title: "HAPO BACK",
      author: "Phoenix Médical",
    },
    {
      type: "video",
      thumbnail: "/img/posts/3.png",
      url: "https://wandering-sardine-131.convex.cloud/api/storage/a1ddcfd7-5804-4a78-bb86-36ea179b214b",
      title: "Utilisation de l'application Léa",
      author: "Phoenix Médical",
    },
  ];

  return (
    <div className="container mt-36">
      <motion.h2
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className="text-primary text-3xl font-medium md:text-center mb-2"
      >
        Santé et bien-être
      </motion.h2>
      <motion.p
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className="text-base md:text-center text-muted-foreground mt-3"
      >
        Les Troubles Musculo-Squelettiques 🤕 et la présentation du HAPO BACK
      </motion.p>
      <div className="mt-5 grid md:grid-cols-3 gap-5">
        {blog.map((post, index) => (
          <motion.div
            key={`post-${index}`}
            variants={fadeIn("up", index *0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="relative group h-full"
            onClick={() => {
              setPost(post)
              setOpenVideo(true)
            }}
            role="button"
          >
            <Card className="h-full border-none shadow-none bg-muted p-2 transition-transform duration-300 hover:scale-105">
              <CardHeader className="p-1">
                <div className="relative mb-2 overflow-hidden rounded-lg">
                  <Image
                    className="rounded-lg w-full transition-transform duration-300 transform group-hover:scale-105" // effet zoom
                    src={post.thumbnail}
                    width={500}
                    height={800}
                    alt="TMS"
                  />
                  <div className="p-2 size-2 flex items-center justify-center absolute bottom-4 right-4">
                    <PlayBtn />
                  </div>
                </div>
                <p className="font-semibold text-lg leading-none">
                  {post.title}
                </p>
                <CardDescription>{post.author}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
      <DialogVideo/>
    </div>
  );
};

export default Videos;
