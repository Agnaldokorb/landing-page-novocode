import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import logoImg from "../../../public/logo.png";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-linear-to-r w-full h-screen from-orange-500 to-blue-500 text-white relative overflow-hidden">
      <div>
        <Image
          src={logoImg}
          alt="NovoCode Logo"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-40 lg:hidden"
        />
        <div className="absolute inset-0 bg-black opacity-40 lg:hidden"></div>
      </div>

      <div className="container mx-auto py-16 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10 text-gray-200">
              Sua empresa merece o melhor, escolha{" "}
              <span className="text-blue-600">Novo</span>
              <span className="text-orange-600">Code</span>!
            </h1>
            <p className="lg:text-xl font-bold">
              Transforme sua presença digital com a NovoCode, a agência de
              desenvolvimento web que entrega soluções personalizadas e
              inovadoras para impulsionar o sucesso do seu negócio online.
            </p>

            <div>
              <a
                href="#"
                className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2
                        hover:bg-green-600 transition-colors duration-300"
              >
                <WhatsappLogoIcon className="size-5" />
                Contato via WhatsApp
              </a>
            </div>
            <div className="mt-8">
              <p className="text-xl mb-4 font-bold">
                Na NovoCode, entendemos que cada empresa é única, por isso
                oferecemos serviços de desenvolvimento web sob medida para
                atender às suas necessidades específicas. Nossa equipe de
                especialistas em design e desenvolvimento trabalha em estreita
                colaboração com você para criar um site que não apenas
                impressiona visualmente, mas também oferece uma experiência de
                usuário excepcional.
              </p>
            </div>
          </div>

          <div className="hidden md:block h-full relative hover:scale-190 transition-transform duration-1000">
            <Image
              src={logoImg}
              alt="NovoCode Logo"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}
