import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Informatica } from './components/Informatica';
import { CodeGame } from './components/CodeGame';
import { AboutIFCE } from './components/AboutIFCE';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#090D16] text-[#F8FAFC] flex flex-col selection:bg-[#2F9E41] selection:text-white overflow-x-hidden antialiased">
      {/* Skip link for keyboard accessibility */}
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-xl focus:bg-[#2F9E41] focus:text-white focus:font-semibold focus:text-sm focus:shadow-xl"
      >
        Pular para o conteúdo principal
      </a>

      <Navbar />

      <main id="conteudo-principal" className="flex-1 w-full overflow-hidden">
        <Hero />
        <Informatica />
        <CodeGame />
        <AboutIFCE />
        <Process />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
