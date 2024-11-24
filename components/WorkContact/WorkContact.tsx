"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { AlertCircle } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  resume: z
    .custom<FileList>()
    .transform((files) => files as FileList)
    .refine((files) => files.length > 0, "Currículo é obrigatório")
    .transform((files) => files[0])
    .refine(
      (file) => file.size <= MAX_FILE_SIZE,
      `Tamanho máximo do arquivo é ${MAX_FILE_SIZE / 1024 / 1024}MB`
    )
    .refine(
      (file) =>
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(file.type),
      "Arquivo deve ser PDF, DOC ou DOCX"
    ),
});

type FormValues = z.infer<typeof formSchema>;

export default function WorkContact() {
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true);
      setSubmitError("");

      // Aqui você adicionaria a lógica para enviar os dados para o servidor
      // Por exemplo, usando FormData para enviar o arquivo
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("resume", data.resume);

      // Simular envio para o servidor
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form submitted:", data);
      form.reset();
      alert("Obrigado pela sua candidatura!");
    } catch (error) {
      setSubmitError(
        "Ocorreu um erro ao enviar o formulário. Tente novamente."
      );
      console.error("Submit error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between bg-secondary">
        <div className="flex-1 aspect-square relative">
          <Image
            src="/contact.jpg"
            alt="logotipo essencial enfermagem"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex-1 flex flex-col gap-8 px-6 py-12">
          <div className="flex flex-col gap-4">
            <span className="title-section">Trabalhe Conosco</span>
            <h2 className="text-3xl font-bold">Junte-se à nossa equipe!</h2>
            <p className="text-lg text-gray-600">
              Envie seu currículo agora e faça parte da nossa história de
              sucesso.
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Seu nome completo"
                        {...field}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="seu.email@exemplo.com"
                        {...field}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="resume"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Currículo</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        onChange={(e) => {
                          const files = e.target.files;
                          if (files?.length) {
                            field.onChange(files);
                          }
                        }}
                        onBlur={field.onBlur}
                        name={field.name}
                        ref={field.ref}
                        accept=".pdf,.doc,.docx"
                        className="cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {submitError && (
                <div className="flex items-center gap-2 text-red-500">
                  <AlertCircle size={16} />
                  <span className="text-sm">{submitError}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-blue-950 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="w-full inline-flex h-12 translate-y-0 items-center justify-center bg-blue-700 px-6 text-blue-50 transition group-hover:-translate-y-[150%] disabled:group-hover:translate-y-0">
                  {isSubmitting ? "Enviando..." : "Contratar cuidador"}
                </div>
                <div className="absolute w-full inline-flex h-12 translate-y-[100%] items-center justify-center bg-blue-50 px-6 text-blue-950 transition duration-300 group-hover:translate-y-0">
                  {isSubmitting ? "Enviando..." : "Contratar cuidador"}
                </div>
              </button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
