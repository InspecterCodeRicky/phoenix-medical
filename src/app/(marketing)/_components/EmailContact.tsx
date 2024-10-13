import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

import { Tailwind } from "@react-email/tailwind";

export interface ContactRequestEmail {
  name: string;
  email: string;
  phone?: string;
  motif: string;
  message: string;
}

const EmailContact = ({ props }: { props: ContactRequestEmail }) => {
  return (
    <Html>
      <Head />
      <Preview>Demande de Contact - {props.name}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                primary: "#2F85FF",
                offwhite: "#fafbfb",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Body className="bg-offwhite text-base font-sans">
          <Container className="max-w-xl mx-auto p-4 bg-white rounded shadow">
            <Img
              src="https://phoenix-medical.vercel.app/_next/image?url=%2Fimg%2Flogo.png&w=128&q=75"
              alt="Phoenix Médical"
              className="my-20"
            />
            <Heading className="text-lg font-semibold text-primary">
              Demande de contact - {props.name}
            </Heading>
            <Text className="text-gray-600">
              Un utilisateur a soumis une demande de contact sur votre site :
            </Text>

            <Hr className="my-4" />
            <Text className="text-base font-bold">
              ℹ️ Informations personnelles
            </Text>
            <Text className="text-gray-800">
              <strong>Motif :</strong> {props.motif}
            </Text>
            <Text className="text-gray-800">
              <strong>Nom :</strong> {props.name}
            </Text>
            <Text className="text-gray-800">
              <strong>Email :</strong> {props.email}
            </Text>
            <Text className="text-gray-800">
              <strong>Message :</strong> {props.message}
            </Text>

            <Hr className="my-4" />

            <Button
              href={`mailto:${props.email}`}
              className="bg-primary text-white rounded py-2 px-4"
            >
              Répondre à cet email
            </Button>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailContact;
