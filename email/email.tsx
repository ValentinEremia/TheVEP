import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

type ContactFormEmailProps = {
  senderEmail: string;
  subject: string;
  message: string;
};

export default function ContactFormEmail({
  senderEmail,
  subject,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />

      <Preview>Message from "www.the-vep.vercel.app"</Preview>
      <Tailwind>
        <Body className=" bg-gray-100 text-black">
          <Container>
            <Section className="bg-white border-violet-600 border-2 my-10 px-10 py-4 rounded-md sectiune">
              <Text className="leading-tight text-lg">Subject: <strong>{subject}</strong></Text>
              <Hr />

              <Heading className="text-xl">{message}</Heading>

              <Hr />
              <Text className="leading-tight text-lg">
                You received the following message from: <strong>{senderEmail}</strong>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
