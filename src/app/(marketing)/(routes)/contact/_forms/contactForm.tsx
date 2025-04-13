"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SuccessModal from "../_components/succes";
import { sendMail } from "@/lib/mail";
import { Spinner } from "@/components/spinner";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { MessageStatus } from "@/app/types/message";

const formSchema = z.object({
  name: z
    .string({ message: "Ce champs est requis" })
    .min(2, { message: "Doit avoir au moins 2 caractères" }),
  email: z
    .string({ message: "Ce champs est requis" })
    .email({ message: "Cette adresse email est invalide" }),
  phone: z.string().optional(),
  motif: z
    .string({ message: "Ce champs est requis" })
    .min(2, { message: "Doit avoir au moins 2 caractères" }),
  message: z
    .string({ message: "Ce champs est requis" })
    .min(2, { message: "Doit avoir au moins 2 caractères" }),
});

const ContactForm = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isLoaded, setiIsLoaded] = useState(false);

  const sendMessage = useMutation(api.messages.send);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const HandleChangeModal = (open: boolean) => {
    setOpenModal(open);
    if (!open) {
      router.push("/");
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (isLoaded) return;
    setiIsLoaded(true);

    await sendMessage({
      body : values.message,
      email: values.email,
      motif : values.motif,
      name: values.name!,
      phone: values.phone!,
      status: MessageStatus.New,
    }).then(()=> {
      HandleChangeModal(true);
    })
    

    await sendMail({
      to: "",
      subject: "Demande de contact",
      data: values,
      typeEmail: "contact",
    })
    setiIsLoaded(false);
  };

  return (
    <div>
      <SuccessModal open={openModal} onOpenChange={HandleChangeModal} />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 mt-10"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Jean Dupont" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="exemple@tes.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Téléphone</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="0690 12 34 56" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="motif"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Objet</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Le motif" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Écrivez ici ..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full group" type="submit">
            {!isLoaded ? (
              <p className="flex items-center gap-2 group-hover:gap-5 transition-all">
                Envoyer ma demande <MoveRight />
              </p>
            ) : (
              <Spinner size="lg" color="white" />
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
