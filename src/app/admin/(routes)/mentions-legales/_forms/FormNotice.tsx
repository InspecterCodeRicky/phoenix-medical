"use client";

import { debounce } from "lodash";

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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
  title: z
    .string({ message: "Ce champs est requis" })
    .min(2, { message: "Doit avoir au moins 2 caractères" }),
  text: z
    .string({ message: "Ce champs est requis" })
    .min(2, { message: "Doit avoir au moins 2 caractères" }),
});

const FormNotice = ({
  notice,
  isModal = false,
  callback,
}: {
  notice?: Doc<"mentionsLegales">;
  isModal?: boolean;
  callback?: () => void;
}) => {
  const [openSheet, setOpenSheet] = useState(false);
  const [loading, setLoding] = useState(false);

  const update = useMutation(api.mentionsLegales.update);

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

  // Débounce l'appel pour éviter les déclenchements trop fréquents
  const debouncedOnChange = useMemo(
    () =>
      debounce((value: string) => {
        if (value !== form.getValues("text")) {
          form.setValue("text", value);
        }
      }, 300),
    [form]
  );

  // Nettoyer le debounce à la destruction
  useEffect(() => {
    return () => debouncedOnChange.cancel();
  }, [debouncedOnChange]);

  useEffect(() => {
    setOpenSheet(isModal);
    form.reset({
      ...notice,
    });
  }, [notice, form, isModal]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (loading) return;
    setLoding(true);
    if (notice?._id) {
      await update({
        mentionsId: notice!._id,
        ...values,
      }).then((res) => {
        if (typeof callback == "function") {
          callback();
        }
        form.reset();
      });
    }
    setLoding(false);
  };

  const handleOpenChange = (open: boolean) => {
    setOpenSheet(open);
    if (typeof callback == "function") {
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
            {notice?._id
              ? "Éditer la mention légale"
              : "Nouvelle mention légale"}
          </p>
          <ScrollArea className="min-h-0 h-full flex-1">
            <div className="space-y-4 m-4">
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
                name="text"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mention</FormLabel>
                    <FormControl>
                      <DynamicQuill
                        value={field.value!}
                        onChange={debouncedOnChange}
                        placeholder="Mention"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="h-20"></div>
          </ScrollArea>

          <div className="absolute bottom-0 right-0 left-0 p-2 bg-white rounded-b-lg">
            <Button type="submit" className="w-full focus-visible:ring-0">
              {loading ? <Spinner size="lg" color="white" /> : "Enregistrer"}
            </Button>
          </div>
        </form>
      </Form>
    );
  };

  return (
    <>
      {isModal ? (
        <Dialog open={openSheet} onOpenChange={handleOpenChange}>
          <DialogContent
            className="flex flex-col sm:max-w-[90%] h-[90vh] p-0 focus-visible:outline-none"
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <DialogHeader className="hidden p-0">
              <DialogTitle>
                {notice?._id
                  ? "Éditer la mention légale"
                  : "Nouvelle mention légale"}
              </DialogTitle>
            </DialogHeader>
            <FormComponent />
          </DialogContent>
        </Dialog>
      ) : (
        <div>
          <FormComponent />
        </div>
      )}
    </>
  );
};

export default FormNotice;
