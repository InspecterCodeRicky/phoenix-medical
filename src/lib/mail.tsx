"use server";
import nodemailer from "nodemailer";
import React from "react";
import { render } from "@react-email/components";
import EmailDevis, {
  QuoteRequestEmail,
} from "@/app/(marketing)/_components/EmailDevis";
import EmailContact, {
  ContactRequestEmail,
} from "@/app/(marketing)/_components/EmailContact";


export async function sendMail({
  to,
  subject,
  data,
  typeEmail,
}: {
  to: string;
  subject: string;
  data: object;
  typeEmail: "devis" | "contact";
}) {
  // let emailHtml = "";
  const emailHtml = await createEmailHtml(typeEmail, data);

  const { SMTP_EMAIL, SMTP_PASSWORD , SMTP_HOST, EMAIL_SEND_REQUEST} = process.env;

  const transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port: 465,
    secure: true, 
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.error({ error });
    return;
  }

  try {
    const payload = {
      from: '"Ideal Conception" <service@ideal-conception.fr>',
      to : EMAIL_SEND_REQUEST,
      subject,
      html: emailHtml,
    }
    const sendResult = await transport.sendMail(payload);
    console.log(payload, sendResult);
  } catch (error) {
    console.log(error);
  }
}


async function createEmailHtml(typeEmail : "devis" | "contact", data : Object) {
  switch (typeEmail) {
    case "devis":
      return await render(<EmailDevis props={{ ...(data as QuoteRequestEmail) }} />);
    case "contact":
      return await render(<EmailContact props={{ ...(data as ContactRequestEmail) }} />);
    default:
      return "<p>Type d'email inconnu.</p>";
  }
}
