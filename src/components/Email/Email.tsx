import { IContactForm } from "@interfaces/IContactForm";
import {
  Head,
  Html,
  Link,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";
import { FC } from "react";
import config from "tailwind.config";

const Email: FC<Readonly<IContactForm>> = ({ email, message, name, phone }) => {
  return (
    <Html>
      <Head />
      <Preview>{`Tiene un mensaje de ${name}`}</Preview>
      <Tailwind config={config}>
        <div className="bg-primary-500 py-2">
          <Text className="text-lg text-center">
            Contacto desde el sitio web{" "}
            <Link href="https://www.marialorencez.com" className="font-bold">
              María Lorencez
            </Link>
          </Text>
        </div>
        <div className="p-5">
          <Text className="block mb-2">
            <b>Nombre:</b> {name}
          </Text>
          {phone && (
            <Text className="block mb-2">
              <b>Teléfono:</b> {phone}
            </Text>
          )}
          <Text className="block mb-2">
            <b>Email:</b> {email}
          </Text>
          <Text className="block mb-4">
            <b>Mensaje:</b>
          </Text>
          <Text className="block mb-4">{message}</Text>
        </div>
        <div className="bg-secondary text-white flex justify-center">
          <Text className="text-center py-4">
            © Copyright 2019 María Lorencez - All Rights Reserved
          </Text>
        </div>
      </Tailwind>
    </Html>
  );
};

export default Email;
