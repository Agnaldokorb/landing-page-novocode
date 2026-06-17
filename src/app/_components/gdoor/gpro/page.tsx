import {
  Car,
  CircleDollarSign,
  Footprints,
  Hammer,
  Hamburger,
  Shirt,
  ShoppingCart,
  Ham,
  Glasses,
  Truck,
  UtensilsCrossed,
  Wrench,
  Receipt,
  FileText,
  BrainCircuit,
  LaptopMinimal,
  type LucideIcon,
} from "lucide-react";
import MeuVideoYouTube from "./video";

const pillars = [
  {
    title: (
      <>
        <Receipt /> Gestao financeira completa
      </>
    ),
    description:
      "Ferramentas que centralizam informações financeiras para suporte à tomada de decisão e operação diária.",
  },
  {
    title: (
      <>
        <FileText /> Emissao fiscal segura
      </>
    ),
    description:
      "Atendendo diferentes modelos de operação, com foco em conformidade e sem limite mensal.",
  },
  {
    title: (
      <>
        <LaptopMinimal /> Vendas ágeis e precisas
      </>
    ),
    description:
      "Integração com TEF, PIX, PDV móvel e balanças — reduzindo erros de caixa e acelerando o atendimento no PDV.",
  },
  {
    title: (
      <>
        <BrainCircuit /> Controle total do estoque
      </>
    ),
    description:
      "Recursos que permitem visibilidade e controle sobre os níveis de estoque de forma prática e integrada.",
  },
];

const modules = [
  "Cadastros",
  "Compras",
  "Estoque",
  "PDV",
  "NF-e",
  "NFS-e",
  "CT-e",
  "Orçamento",
  "Financeiro",
  "Relatórios",
  "Usuários",
  "Backup",
  "Pedidos de vendas",
  "Fiscal",
  "Usuários",
  "DAV",
  "Ordem de serviço*",
];

const segments: { name: string; icon: LucideIcon }[] = [
  { name: "Mercados", icon: ShoppingCart },
  { name: "Autopecas", icon: Car },
  { name: "Lanchonetes", icon: Hamburger },
  { name: "Restaurantes", icon: UtensilsCrossed },
  { name: "Roupas", icon: Shirt },
  { name: "Calcados", icon: Footprints },
  { name: "Materiais de construcao", icon: Hammer },
  { name: "Transportadoras", icon: Truck },
  { name: "Mecanicas", icon: Wrench },
  { name: "Açougues", icon: Ham },
  { name: "Oticas", icon: Glasses },
  { name: "Vendas externas", icon: CircleDollarSign },
];

export function GproPage() {
  return (
    <article className="mt-8 text-left text-gray-900">
      <section className="rounded-2xl bg-orange-500 px-6 py-12 md:px-10 md:py-16">
        <p className="mb-4 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-[0.12em] text-white/90 uppercase">
          Sistema Gpro
        </p>
        <h3 className="max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl">
          Uma solucao integrada para acelerar a gestao do varejo
        </h3>
        <p className="mt-5 max-w-2xl text-base text-white/90 md:text-lg">
          O Gpro conecta compras, estoque, fiscal, financeiro e vendas em um
          unico ambiente para dar mais ritmo e previsibilidade a operacao.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://gdoor.com.br/gpro/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-orange-700 transition hover:bg-orange-50"
          >
            Ver pagina oficial
          </a>
          <a
            href="https://wa.me/5547988815799"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Falar com especialista
          </a>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        {pillars.map((pillar) => (
          <div
            key={pillar.title.props.children[1]}
            className="rounded-xl border border-orange-100 bg-white p-6 shadow-sm"
          >
            <h4 className="text-lg font-semibold text-orange-700">
              {pillar.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              {pillar.description}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm md:p-8">
        <h4 className="text-2xl font-bold text-gray-900">
          Recursos do sistema
        </h4>
        <p className="mt-2 max-w-3xl text-sm text-gray-600 md:text-base">
          Modulos integrados para padronizar processos, manter dados
          consistentes e facilitar a tomada de decisao em toda a operacao.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {modules.map((module, index) => (
            <span
              key={`${module}-${index}`}
              className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-medium text-orange-700 md:text-sm"
            >
              {module}
            </span>
          ))}
        </div>
        <span className="text-red-500"><span className="text-2xl font-bold">*</span> Módulo adicional</span>
      </section>

      <section className="mt-8 rounded-2xl bg-slate-900 p-6 text-white md:p-8">
        <h4 className="text-2xl font-bold">Segmentos atendidos</h4>
        <p className="mt-2 text-sm text-slate-300 md:text-base">
          Estrutura flexivel para diferentes perfis de loja e modelos de
          operacao.
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
          {segments.map((segment) => (
            <div
              key={segment.name}
              className="flex flex-col items-center gap-2"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-slate-700 bg-white">
                <segment.icon
                  className="h-8 w-8 text-orange-300"
                  aria-hidden="true"
                />
              </div>
              <span className="text-center text-xs text-slate-200 md:text-sm">
                {segment.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="flex justify-center items-center mt-8 rounded-2xl border border-orange-200 bg-orange-50 p-6 md:p-8">
        <MeuVideoYouTube />
      </section>

      <section
        id="contato-gpro"
        className="mt-8 rounded-2xl border border-orange-200 bg-orange-50 p-6 md:p-8"
      >
        <h4 className="text-2xl font-bold text-orange-800">
          Gpro na pratica para sua operacao
        </h4>
        <p className="mt-2 max-w-2xl text-sm text-orange-900/80 md:text-base">
          Agende uma demonstracao e veja como organizar processos, reduzir erros
          e acelerar o atendimento com uma plataforma pronta para o varejo.
        </p>
        <div className="mt-5">
          <a
            href="https://wa.me/5547988815799"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
          >
            Solicitar contato
          </a>
        </div>
      </section>
    </article>
  );
}
