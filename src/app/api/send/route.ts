import Email from "@components/Email/Email";
import { IContactForm } from "@interfaces/IContactForm";
import { NextResponse } from "next/server";
import { ReactElement } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const formData: IContactForm = await request.json();
  const { phone } = formData;
  try {
    const data = await resend.emails.send({
      from: "Sitio Web María Lorencez <onboarding@resend.dev>",
      to: ["negan1303@gmail.com"],
      subject: !phone
        ? "Contacto de mis servicios"
        : "Contacto de mis productos",
      react: Email(formData) as ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
