import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/components/forms/formSchemas";
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

  const parsed = contactSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten() },
      { status: 400 },
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.error(
      "[api/contact] RESEND_API_KEY manquante. Configurez la clé avant la mise en production.",
    );
    return NextResponse.json(
      { ok: false, error: "Configuration e-mail manquante." },
      { status: 500 },
    );
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: `DZRT. <${CONTACT_EMAIL}>`,
      to: CONTACT_EMAIL,
      replyTo: parsed.data.email,
      subject: `Nouveau message de contact de ${parsed.data.nom}`,
      text: [
        `Nom : ${parsed.data.nom}`,
        `Téléphone : ${parsed.data.telephone || "Non renseigné"}`,
        `Email : ${parsed.data.email}`,
        "",
        parsed.data.message,
      ].join("\n"),
    });

    if (error) {
      console.error("[api/contact] Resend a refusé l'envoi", error);
      return NextResponse.json(
        { ok: false, error: "L'envoi de l'e-mail a échoué." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[api/contact] Échec de l'envoi de l'e-mail", error);
    return NextResponse.json(
      { ok: false, error: "L'envoi de l'e-mail a échoué." },
      { status: 502 },
    );
  }
}
