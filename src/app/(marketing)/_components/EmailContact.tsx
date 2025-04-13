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
      <Preview>Demande de contact - {props.name}</Preview>
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
              Un utilisateur a soumis une demande de contact sur votre site.
              Nous vous invitons à le contacter dès que possible.
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

export default EmailContact;
