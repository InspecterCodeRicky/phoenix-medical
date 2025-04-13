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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { Doc } from "@/convex/_generated/dataModel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { ScrollArea } from "@/components/ui/scroll-area";
import { tags } from "@/data/products";
import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Spinner } from "@/components/spinner";

const formSchema = z.object({
  ref: z
    .string({ message: "Ce champs est requis" })
    .min(2, { message: "Doit avoir au moins 2 caractères" }),
  images: z
    .array(
      z.object({
        url: z.string(),
      })
    )
    .min(1, {message : "Téléversez au moins une image"}),
  title: z
    .string({ message: "Ce champs est requis" })
    .min(2, { message: "Doit avoir au moins 2 caractères" }),
  shortDescription: z
    .string({ message: "Ce champs est requis" })
    .max(25, { message: "Ne doit pas avoir plus de 25 caractères" }),
  description: z
    .string({ message: "Ce champs est requis" })
    .min(2, { message: "Doit avoir au moins 2 caractères" }),
  carateristics: z.string().optional(),
  price: z
    .preprocess(
      (value) => parseFloat(String(value)),
      z.number({ message: "Le prix doit être un nombre valide" })
    )
    .refine((value) => !isNaN(value) && value >= 0, {
      message: "Le montant doit être un nombre positif",
    }),
  ugc: z
    .preprocess(
      (value) => parseFloat(String(value)),
      z.number({ message: "Le stock doit être un nombre valide" })
    )
    .refine((value) => !isNaN(value), {
      message: "Le stock doit être un nombre valide, positif ou négatif",
    }),
  tags: z.array(z.string({ message: "Ce champs est requis" })),
  status: z.string({ message: "Ce champs est requis" }),
});

const FormCatalogue = ({
  catalogue,
  isModal = false,
  callback,
}: {
  catalogue?: Doc<"catalogue">;
  isModal?: boolean;
  callback?: () => void;
}) => {
  const [openSheet, setOpenSheet] = useState(false);
  const [isLoaded, setiIsLoaded] = useState(false);

  const update = useMutation(api.catalogue.update);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const DynamicQuill = useMemo(
    () =>
      dynamic(() => import("@/app/admin/_components/react-quill-field"), {
        ssr: false,
      }),
    []
  );

  useEffect(() => {
    setOpenSheet(isModal);
    form.reset({
      ...catalogue
    });
    console.log("form", form.control.getFieldState("images"))
  }, [catalogue, form, isModal]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("onSubmit")
    if (isLoaded) return;
    setiIsLoaded(true);
    if (catalogue?._id) {
      await update({
        catalogueId: catalogue!._id,
        ...values,
        carateristics: values.carateristics!,
      }).then((res) => {
        if (typeof callback == "function") {
          console.log("function");
          callback();
        }
        form.reset();
      });
    }
    setiIsLoaded(false);
  };

  const handleOpenChange = (open: boolean) => {
    setOpenSheet(open);
    if (typeof callback == "function") {
      console.log("function");
      callback();
    }
  };

  const FormComponent = () => {
    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="relative max-h-full flex flex-col"
        >
          <p className="mx-4 my-2 text-xl font-bold">
            {catalogue?._id ? catalogue.ref : "Nouveau produit"}
          </p>
          <ScrollArea className="min-h-0 h-full flex-1">
            <div className="space-y-4 m-4">
              <FormField
                control={form.control}
                name="images"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Images {field.value.length} </FormLabel>
                    <FormControl>
                      {/* <Input type="text" placeholder="Référence" {...field} /> */}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ref"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Référence</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Référence" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Titre</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Titre" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="shortDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Courte description</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Courte description"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="carateristics"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Carateristics</FormLabel>
                    <FormControl>
                      <DynamicQuill
                        value={field.value!}
                        onChange={field.onChange}
                        placeholder="Carateristics"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Prix (€)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Prix" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ugc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stock</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Stock" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tags</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        // Ajoute ou retire le tag de la liste actuelle
                        if (field.value.includes(value)) {
                          field.onChange(
                            field.value.filter((tag) => tag !== value)
                          );
                        } else {
                          field.value = [...field.value, value];
                          field.onChange([...field.value, value]);
                        }
                        console.log("field", field);
                      }}
                      defaultValue={field.value.join(", ")}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Tags" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {tags.map((tag) => (
                          <SelectItem key={tag} value={tag}>
                            {tag}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="h-20"></div>
          </ScrollArea>

          <div className="absolute bottom-0 right-0 left-0 p-2 bg-white">
            <Button type="submit" className="w-full focus-visible:ring-0">
              {isLoaded ? <Spinner size="lg" color="white" /> : "Enregistrer"}
            </Button>
          </div>
        </form>
      </Form>
    );
  };

  return (
    <>
      {isModal ? (
        <Sheet open={openSheet} onOpenChange={handleOpenChange}>
          <SheetContent
            className="flex flex-col p-0"
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <SheetHeader className="hidden h-0">
              <SheetTitle>#{catalogue?.ref}</SheetTitle>
            </SheetHeader>
            <FormComponent />
          </SheetContent>
        </Sheet>
      ) : (
        <div>
          <FormComponent />
        </div>
      )}
    </>
  );
};

export default FormCatalogue;
