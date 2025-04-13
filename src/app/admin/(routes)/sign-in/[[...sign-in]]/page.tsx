"use client";
import { useSignIn } from "@clerk/clerk-react";
import Image from "next/image";

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

import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useConvexAuth } from "convex/react";
import { Eye, EyeOff } from "lucide-react";

const formSchema = z.object({
  email: z.string({ message: "Ce champs est requis" }).email({ message: "Cette adresse email est invalide" }),
  password: z.string({ message: "Ce champs est requis" }).min(2, { message: "Doit avoir au moins 2 caractères" }),
});

const Page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { isLoaded, signIn, setActive } = useSignIn();
  const [errorConnexion, setErrorConnexion] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { isAuthenticated, isLoading } = useConvexAuth();

  if (!isLoading && isAuthenticated) {
    redirect(process.env.NEXT_PUBLIC_APP_PATH_ADMIN!);
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setErrorConnexion("");
    if (!isLoaded) {
      return;
    }

    const { email, password } = values;

    try {
      const signInAttempt = await signIn?.create({
        identifier: email,
        password,
      });

      if (signInAttempt?.status === "complete") {
        await setActive!({ session: signInAttempt.createdSessionId });
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      setErrorConnexion("Oups! vos identifiants ne sont pas correctes");
      console.error(JSON.stringify(err, null, 2));
    }
  }

  const HandleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative h-screen w-full p-5 bg-cover bg-center bg-no-repeat object-cover"  style={{ backgroundImage: `url(/img/bg-login.png)` }}>
      {/* <Image src="/img/bg-login.png" width={1200} height={1200} alt="bg-login" /> */}
      <div className="relative h-full">
        <div className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:-translate-x-0 md:-translate-y-0 md:top-0 md:right-0 rounded-xl md:h-full w-full md:w-1/2 bg-white">
          <div className="w-full p-10 xl:p-40">
            <div className="flex justify-center">
              <Image src="/img/logo.png" width={200} height={200} alt="logo" />
            </div>
            <p className="text-2xl md:text-3xl font-bold mt-20">
              Content de te revoir 👌
            </p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 mt-10"
              >
                {errorConnexion && (
                  <p className="text-red-500">{errorConnexion}</p>
                )}
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
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mote de passe</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="**********"
                            {...field}
                          />
                          <div
                            role="button"
                            aria-label="hide and show password"
                            onClick={HandleShowPassword}
                            className="absolute top-1/2 right-[.2rem] -translate-y-1/2 p-2 hover:bg-muted-foreground/15 bg-muted rounded"
                          >
                            {showPassword ? <EyeOff className="h-5 w-5"/> : <Eye  className="h-5 w-5"/>}
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="justify-end flex">
                  <Link
                    href="/"
                    className="underline underline-offset-4 text-muted-foreground"
                  >
                    Mot de passe oublié ?
                  </Link>
                </div>
                <Button className="w-full" type="submit">
                  Se connecter
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
