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

  // switch (typeEmail) {
  //   case "devis":
  //     emailHtml = await render(
  //       <EmailDevis props={{ ...(data as QuoteRequestEmail) }} />
  //     );
  //     break;
  //   case "contact":
  //     emailHtml = await render(
  //       <EmailContact props={{ ...(data as ContactRequestEmail) }} />
  //     );
  //     break;

  //   default:
  //     break;
  // }

  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    host: "legourmetresto.com",
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
    const sender = {
      address: SMTP_EMAIL!,
      name: "Phoenix Médical",
    };
    const sendResult = await transport.sendMail({
      from: '"Phoenix Medical" <contact@phoenixmedical.fr>',
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
