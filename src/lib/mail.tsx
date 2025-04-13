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

const { MailtrapTransport } = require("mailtrap");

const TOKEN = "74a753a96283d807cd077307cc19e289";

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

  const { SMTP_EMAIL, SMTP_PASSWORD , SMTP_HOST} = process.env;

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
    const sendResult = await transport.sendMail({
      from: '"Ideal Conception" <service@ideal-conception.fr>',
      to,
      subject,
      html: emailHtml,
    });
    console.log(sendResult, emailHtml);
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
