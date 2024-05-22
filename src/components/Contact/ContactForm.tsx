"use client";
import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Button, Textarea } from "@nextui-org/react";
import { contactSchema } from "@schemas/ContactSchema";
import { IContactForm } from "@interfaces/IContactForm";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

interface Props {
  isProduct?: boolean;
}

const ContactForm: FC<Props> = ({ isProduct }) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IContactForm>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IContactForm> = async (formData) => {
    setIsLoading(true);
    try {
      await axios.post("/api/send", formData);
      reset();
      toast("Correo enviado exitosamente.", { type: "success" });
    } catch (error) {
      toast("Ha ocurrido un error, inténtelo mas tarde.", { type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="w-full max-w-screen-sm"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="flex flex-col gap-6">
        <Input
          fullWidth
          isRequired
          color="primary"
          size="lg"
          placeholder="Nombre*"
          variant="faded"
          {...register("name")}
          className="rounded-none"
          isInvalid={Boolean(errors.name)}
          errorMessage={errors.name?.message}
        />
        {isProduct && (
          <Input
            fullWidth
            isRequired
            color="primary"
            size="lg"
            placeholder="Teléfono"
            variant="faded"
            {...register("phone")}
            className="rounded-none"
            isInvalid={Boolean(errors.phone)}
            errorMessage={errors.phone?.message}
          />
        )}
        <Input
          fullWidth
          color="primary"
          size="lg"
          type="email"
          placeholder="Correo Electrónico*"
          variant="faded"
          {...register("email")}
          className="rounded-none"
          isInvalid={Boolean(errors.email)}
          errorMessage={errors.email?.message}
        />
        <Textarea
          fullWidth
          color="secondary"
          size="lg"
          placeholder="Mensaje*"
          variant="faded"
          {...register("message")}
          className="rounded-none"
          isInvalid={Boolean(errors.message)}
          errorMessage={errors.message?.message}
        />
        <div className="text-center">
          <Button
            isLoading={isLoading}
            type="submit"
            color={!isProduct ? "secondary" : "primary"}
            variant="ghost"
            size="lg"
            className="rounded-none"
          >
            Enviar
          </Button>
        </div>
      </div>
      <ToastContainer />
    </form>
  );
};

export default ContactForm;
