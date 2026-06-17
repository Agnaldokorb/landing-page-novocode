"use client";

import { About } from "./_components/about";
import { Footer } from "./_components/footer";
import { Gdoor } from "./_components/gdoor/gdoor";
import { Hero } from "./_components/hero";
import { Services } from "./_components/services";
import { Tecnologies } from "./_components/tecnologies";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white flex flex-col">
        <Hero />
        <About />
        <Services />
        <Tecnologies />
        <Gdoor />
        <Footer />
      </main>
    </>
  );
}
