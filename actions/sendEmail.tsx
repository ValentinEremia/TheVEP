"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/email";
import React  from "react";

const resend = new Resend(process.env.RESEND_API_KEY);




export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const subject = formData.get("subject");
  const message = formData.get("message");

  
  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      to: "licanianul@gmail.com",
      from: "My_Portfolio_Blog <onboarding@resend.dev>",
      reply_to: senderEmail as string,
      subject: subject as string,
      react: React.createElement(ContactFormEmail, {
        senderEmail: senderEmail as string,
        subject: subject as string,
        message: message as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return { data };
};

// https://youtu.be/sUKptmUVIBM?t=19780
