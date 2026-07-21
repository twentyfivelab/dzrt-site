import { NextResponse } from "next/server";
import { Resend } from "resend";
import { devisSchema } from "@/components/forms/formSchemas";
import { CONTACT_EMAIL } from "@/lib/constants";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, errors: "Corps de requête JSON invalide." },
      { status: 400 },
    );
  }

  const parsed = devisSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten() },
      { status: 400 },
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.warn(
      "[api/devis] RESEND_API_KEY manquante — e-mail non envoyé. Configurez la clé avant la mise en production.",
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: `DZRT. <devis@dzrt.com>`,
      to: CONTACT_EMAIL,
      replyTo: parsed.data.email,
      subject: `Nouvelle demande de devis — ${parsed.data.nom}`,
      text: [
        `Nom : ${parsed.data.nom}`,
        `Entreprise : ${parsed.data.entreprise || "—"}`,
        `Téléphone : ${parsed.data.telephone || "—"}`,
        `Email : ${parsed.data.email}`,
        `Projet : ${parsed.data.projet}`,
        `Budget : ${parsed.data.budget}`,
        "",
        parsed.data.message,
      ].join("\n"),
    });
    return NextResponse.json({ ok: true, delivered: true });
  } catch (error) {
    console.error("[api/devis] Échec de l'envoi de l'e-mail", error);
    return NextResponse.json({ ok: true, delivered: false });
  }
}
