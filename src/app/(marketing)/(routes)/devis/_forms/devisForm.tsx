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
import { sendMail } from "@/lib/mail";
import SuccessModal from "../_components/succes";
import { useState } from "react";
import { useRouter } from "next/navigation";
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
  phone: z.string({ message: "Ce champs est requis" }),
  message: z.string().optional(),
  environnement: z.string({ message: "Ce champs est requis" }),
  address: z.string({ message: "Ce champs est requis" }),
  cp: z.string({ message: "Ce champs est requis" }),
  city: z.string({ message: "Ce champs est requis" }),
  country: z.string({ message: "Ce champs est requis" }),
});

const DevisForm = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isLoaded, setiIsLoaded] = useState(false);

  const sendRequest = useMutation(api.devis.sendRequest);

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
    await sendRequest({...values, status : MessageStatus.New}).then(() => {
      HandleChangeModal(true);
    });

    await sendMail({
      to: "",
      subject: "Demande de devis",
      data: values,
      typeEmail: "devis",
    })
    setiIsLoaded(false);
  };

  return (
    <div className="xl:w-1/2 m-auto">
      <SuccessModal open={openModal} onOpenChange={HandleChangeModal} />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 mt-10"
        >
          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-3">
              <p className="font-semibold">ℹ️ Informations personnelles</p>
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
                        placeholder="exemple@test.com"
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
                      <Input
                        type="text"
                        placeholder="0690 12 34 56"
                        {...field}
                      />
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
                    <FormLabel>Informations complémentaires</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Écrivez ici ..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-semibold">📍 Localisation de l'aménagement</p>
              <FormField
                control={form.control}
                name="environnement"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Environnement</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Bureau" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Adresse</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="1 rue de la place"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="cp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Code postal</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="97100" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ville</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Pointe-à-pitre"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pays</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Guadeloupe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
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

export default DevisForm;
