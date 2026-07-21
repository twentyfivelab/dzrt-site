"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { SuccessBadge } from "@/components/ui/illustrations/SuccessBadge";
import { contactSchema, type ContactFormValues } from "@/components/forms/formSchemas";
import { CONTACT_EMAIL } from "@/lib/constants";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-3xl border border-ink-900/5 bg-white/80 p-10 text-center shadow-card dark:border-white/8 dark:bg-white/4"
      >
        <SuccessBadge className="mx-auto h-16 w-16" />
        <h3 className="mt-5 font-display text-2xl font-semibold text-ink-900 dark:text-ink-50">
          Votre message a bien été envoyé
        </h3>
        <p className="mt-2 text-ink-500 dark:text-ink-300">
          Merci de nous avoir écrit ! Nous vous répondons sous 24 à 48h ouvrées.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <FormField label="Nom complet" htmlFor="contact-nom" required error={errors.nom?.message}>
        <Input id="contact-nom" hasError={!!errors.nom} autoComplete="name" {...register("nom")} />
      </FormField>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField label="E-mail" htmlFor="contact-email" required error={errors.email?.message}>
          <Input
            id="contact-email"
            type="email"
            hasError={!!errors.email}
            autoComplete="email"
            {...register("email")}
          />
        </FormField>
        <FormField label="Téléphone" htmlFor="contact-telephone" error={errors.telephone?.message}>
          <Input
            id="contact-telephone"
            type="tel"
            hasError={!!errors.telephone}
            autoComplete="tel"
            {...register("telephone")}
          />
        </FormField>
      </div>
      <FormField label="Votre message" htmlFor="contact-message" required error={errors.message?.message}>
        <Textarea id="contact-message" rows={5} hasError={!!errors.message} {...register("message")} />
      </FormField>

      {status === "error" && (
        <p role="alert" className="text-sm text-rose-600 dark:text-rose-400">
          Une erreur est survenue lors de l&apos;envoi. Merci de réessayer ou de nous
          écrire directement à {CONTACT_EMAIL}.
        </p>
      )}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        Envoyer mon message
      </Button>
    </form>
  );
}
