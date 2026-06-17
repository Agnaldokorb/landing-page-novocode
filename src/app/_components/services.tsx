

export function Services() {
  return (
    <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8">Nossos Serviços</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-orange-400 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                    <h3 className="text-3xl font-semibold mb-4">Desenvolvimento Web</h3>
                    <p className="text-black text-xl">Criamos sites, landing pages, sistemas web e aplicações personalizadas com tecnologias modernas, como <span className="underline"><strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>Node.js</strong>, <strong>React</strong>, <strong>Next.js</strong> e <strong>Tailwind CSS</strong></span>. Desenvolvemos soluções rápidas, responsivas e escaláveis, focadas em desempenho, segurança e na melhor experiência para seus usuários.</p>
                </div>
                <div className="bg-orange-400 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                    <h3 className="text-3xl font-semibold mb-4">Licenciamento de Softwares</h3>
                    <p className="text-black text-xl">Disponibilizamos soluções de software sob demanda para gestão empresarial, comercial e de serviços, oferecendo implantação, configuração e suporte especializado. Trabalhamos com as linhas <strong>GDOOR</strong> <span className="underline">(GPRO, GMICRO, GWEB, ZWEB e AJATUS)</span>, <strong>CERVANTES</strong> <span className="underline ">(LINKPRO)</span> e <strong>NOVOCODE</strong> <span className="underline">(PDVNOVOCODE)</span>. Nossos sistemas são desenvolvidos para otimizar processos e aumentar a produtividade, sendo que apenas o AJATUS não possui integração fiscal.</p>        
                </div>
            </div>
        </div>
    </section>
    );
}