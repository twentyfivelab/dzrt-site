"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { SuccessBadge } from "@/components/ui/illustrations/SuccessBadge";
import {
  devisSchema,
  projetOptions,
  budgetOptions,
  type DevisFormValues,
} from "@/components/forms/formSchemas";
import { DEVIS_RESPONSE_DELAY } from "@/lib/constants";

export function DevisForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DevisFormValues>({
    resolver: zodResolver(devisSchema),
  });

  const onSubmit = async (values: DevisFormValues) => {
    setStatus("idle");
    try {
      const response = await fetch("/api/devis", {
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
          Votre demande a bien été envoyée
        </h3>
        <p className="mt-2 text-ink-500 dark:text-ink-300">
          Merci ! Nous revenons vers vous sous {DEVIS_RESPONSE_DELAY} avec des
          recommandations concrètes pour votre projet.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField label="Nom complet" htmlFor="nom" required error={errors.nom?.message}>
          <Input id="nom" hasError={!!errors.nom} autoComplete="name" {...register("nom")} />
        </FormField>
        <FormField label="Entreprise" htmlFor="entreprise" error={errors.entreprise?.message}>
          <Input
            id="entreprise"
            hasError={!!errors.entreprise}
            autoComplete="organization"
            {...register("entreprise")}
          />
        </FormField>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField label="Téléphone" htmlFor="telephone" error={errors.telephone?.message}>
          <Input
            id="telephone"
            type="tel"
            hasError={!!errors.telephone}
            autoComplete="tel"
            {...register("telephone")}
          />
        </FormField>
        <FormField label="E-mail" htmlFor="email" required error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            hasError={!!errors.email}
            autoComplete="email"
            {...register("email")}
          />
        </FormField>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField label="Type de projet" htmlFor="projet" required error={errors.projet?.message}>
          <Select id="projet" hasError={!!errors.projet} defaultValue="" {...register("projet")}>
            <option value="" disabled>
              Sélectionnez une option
            </option>
            {projetOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField label="Budget indicatif" htmlFor="budget" required error={errors.budget?.message}>
          <Select id="budget" hasError={!!errors.budget} defaultValue="" {...register("budget")}>
            <option value="" disabled>
              Sélectionnez une option
            </option>
            {budgetOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </FormField>
      </div>
      <FormField
        label="Votre projet en quelques mots"
        htmlFor="message"
        required
        error={errors.message?.message}
      >
        <Textarea id="message" rows={5} hasError={!!errors.message} {...register("message")} />
      </FormField>

      {status === "error" && (
        <p role="alert" className="text-sm text-rose-600 dark:text-rose-400">
          Une erreur est survenue lors de l&apos;envoi. Merci de réessayer ou de nous
          écrire directement à contact@dzrt.com.
        </p>
      )}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        Envoyer ma demande
      </Button>
    </form>
  );
}
