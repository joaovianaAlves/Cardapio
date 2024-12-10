import Link from "next/link";
import React from "react";
export default function Home() {
  const activities = [
    {
      name: "Atividades Meta",
      href: "/meta",
      description:
        "Explore soluções de inteligência artificial para aprendizado interativo.",
    },
    {
      name: "Atividades NAO",
      href: "/nao",
      description:
        "Descubra experiências imersivas de realidade virtual na educação.",
    },
  ];

  return (
    <main className="flex flex-col">
      <header className="text-center py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-semibold mb-4">
            Tecnologia Educacional
          </h1>
          <p className="text-2xl opacity-80 font-light max-w-2xl mx-auto">
            Transformando a educação através de experiências tecnológicas de
            ponta
          </p>
        </div>
      </header>

      <div className="mx-auto px-6 py-12">
        <div className="text-center space-y-8 mb-16">
          <h2 className="text-4xl font-semibold">Sobre o Projeto</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl opacity-80 font-light mx-auto">
              Nosso projeto utiliza as mais avançadas tecnologias educacionais
              para criar ambientes de aprendizado revolucionários. Combinamos
              inteligência artificial, realidade virtual e ferramentas
              interativas para tornar o conhecimento acessível, envolvente e
              transformador.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-4xl font-semibold text-center mb-12">
            Navegue pelas Atividades
          </h2>
          <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
            {activities.map(({ name, href, description }) => (
              <Link
                key={name}
                href={href}
                className="group p-6 bg-white/10 backdrop-blur-sm rounded-xl 
                           border border-black/40 hover:border-black/60 
                           transition transform hover:-translate-y-2 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <h3 className="ml-4 text-2xl font-bold">{name}</h3>
                </div>
                <p className="font-light">{description}</p>
                <div className="mt-8 text-start opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition duration-700">
                  <span className="text-lg font-medium">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
