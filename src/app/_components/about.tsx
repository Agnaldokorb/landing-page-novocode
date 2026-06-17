import Image from "next/image";
import image from "../../../public/logo-abolt.png";
import image2 from "../../../public/meet.jpg";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center m-8">
        <div className="container px-4 mx-auto">
          <div className="relative">
            <div className="relative w-full h-100 rounded-4xl overflow-hidden">
              <Image
                src={image2}
                alt="About Image"
                fill
                quality={100}
                className="object-cover hover:scale-120 transition-transform duration-300"
                priority
              />
            </div>
            <div className="absolute w-40 h-40 right-4 -bottom-20 border-4 overflow-hidden rounded-full border-[#FDF6ec]">
              <Image
                src={image}
                alt="About Image"
                fill
                quality={100}
                priority
              />
            </div>
          </div>
        </div>

        <div className="space-y-6 mt-12">
          <h2 className="text-3xl font-bold">SOBRE</h2>
          <p className="text-xl mb-4">
            A NovoCode é uma empresa de tecnologia especializada em
            desenvolvimento de software e soluções digitais. Fundada por{" "}
            <strong>Agnaldo Korb</strong>, a NovoCode tem como missão
            transformar ideias em realidade através de inovação e excelência
            técnica. Com uma equipe talentosa e dedicada, a NovoCode oferece
            serviços personalizados para atender às necessidades específicas de
            cada cliente, garantindo resultados de alta qualidade e satisfação
            total.
          </p>

          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <Check className="inline-block mr-2 text-green-500" />
              Fundada em 2025
            </li>
            <li className="flex items-center gap-2">
              <Check className="inline-block mr-2 text-green-500" />
              Desenvolvimento de Software web Personalizado
            </li>
            <li className="flex items-center gap-2">
              <Check className="inline-block mr-2 text-green-500" />
              Consultoria em Transformação Digital
            </li>
            <li className="flex items-center gap-2">
              <Check className="inline-block mr-2 text-green-500" />
              Licenciamento de Software sob demanda
            </li>
          </ul>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#"
              className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2
                        hover:bg-green-700 transition-colors duration-300"
            >
              <WhatsappLogoIcon className="size-5" />
              Contato via WhatsApp
            </a>
            <a
              href="#"
              className="bg-gray-300 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2
                        hover:bg-gray-400 transition-colors duration-300"
            >
              Endereço da Empresa
              <MapPin className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
