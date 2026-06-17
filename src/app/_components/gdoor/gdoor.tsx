"use client";

import { useState } from "react";

import { GproPage } from "./gpro/page";

type MenuItem = "gpro" | "gmicro" | "gweb" | "zweb" | "ajatus";

export function Gdoor() {
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);

  const labels: Record<MenuItem, string> = {
    gpro: "Gpro",
    gmicro: "Gmicro",
    gweb: "Gweb",
    zweb: "Zweb",
    ajatus: "Ajatus",
  };

  const renderContent = () => {
    if (activeItem === "gpro") {
      return <GproPage />;
    }

    if (activeItem) {
      return (
        <div className="bg-white text-gray-800 rounded-lg p-6 mt-6">
          <h3 className="text-2xl font-semibold mb-2">{labels[activeItem]}</h3>
          <p>Esta pagina sera exibida aqui quando o conteudo for adicionado.</p>
        </div>
      );
    }

    return (
      <div className="bg-white text-gray-800 rounded-lg p-6 mt-6">
        <p>Selecione um item no menu para visualizar a pagina.</p>
      </div>
    );
  };

  return (
    <header>
      <div className="py-8 text-center mb-8 bg-orange-500 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Conheça os sistemas Gdoor Zuchetti
        </h2>
        <nav className="flex justify-center space-x-4">
          <button
            type="button"
            onClick={() => setActiveItem("gpro")}
            className="text-white hover:underline"
          >
            Gpro
          </button>
          <button
            type="button"
            onClick={() => setActiveItem("gmicro")}
            className="text-white hover:underline"
          >
            Gmicro
          </button>
          <button
            type="button"
            onClick={() => setActiveItem("gweb")}
            className="text-white hover:underline"
          >
            Gweb
          </button>
          <button
            type="button"
            onClick={() => setActiveItem("zweb")}
            className="text-white hover:underline"
          >
            Zweb
          </button>
          <button
            type="button"
            onClick={() => setActiveItem("ajatus")}
            className="text-white hover:underline"
          >
            Ajatus
          </button>
        </nav>
        <section className="p-8">{renderContent()}</section>
      </div>
    </header>
  );
}
