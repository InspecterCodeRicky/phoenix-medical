import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Heading,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";

import { Tailwind } from "@react-email/tailwind";

export interface QuoteRequestEmail {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  environnement?: string;
  address?: string;
  cp?: number;
  city?: string;
  country?: string;
}

const EmailDevis = ({ props }: { props: QuoteRequestEmail }) => {
  return (
    <Html>
      <Head />
      <Preview>Demande de devis - {props.name}</Preview>
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
              Nouvelle Demande de Devis
            </Heading>
            <Text className="text-gray-600">
              Un utilisateur a soumis une demande de devis sur votre site et
              souhaite recevoir une estimation personnalisée.
            </Text>

            <Button
              href="https://www.phoenixmedical.fr/admin"
              className="bg-primary text-white rounded py-2 px-4"
            >
              Traiter cette demande
            </Button>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailDevis;
