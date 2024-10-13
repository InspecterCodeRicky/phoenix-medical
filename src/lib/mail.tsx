"use server";
import fs from "fs";
import nodemailer from "nodemailer";
import React from "react";
import { render } from "@react-email/components";
import EmailDevis, {
  QuoteRequestEmail,
} from "@/app/(marketing)/_components/EmailDevis";
import EmailContact, { ContactRequestEmail } from "@/app/(marketing)/_components/EmailContact";

export async function sendMail({
  from,
  subject,
  data,
  typeEmail,
}: {
  from: string;
  subject: string;
  data: object;
  typeEmail: "devis" | "contact";
}) {
  let emailHtml = "";

  switch (typeEmail) {
    case "devis":
      emailHtml = await render(
        <EmailDevis props={{ ...(data as QuoteRequestEmail) }} />
      );
      break;
    case "contact":
      emailHtml = await render(
        <EmailContact props={{ ...(data as ContactRequestEmail) }} />
      );
      break;

    default:
      break;
  }

  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
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
      from: from,
      to: SMTP_EMAIL,
      subject,
      html: emailHtml,
      sender: "Phoenix Médical",
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}
