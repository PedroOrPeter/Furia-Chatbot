import ChatBot from "./components/ChatBot";
import TeamLineup from "./components/TeamLineUp";
import Sobre from "./components/Sobre";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Video from "./components/Video";
import Estatisticas from "./components/estatisticas";
import { useState } from "react";

export default function App() {
  const [isChatBotOpen, setIsChatBotOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <Header />
      {/* Espaço para compensar o header fixo */}
      <div className="h-40" />

      {/* Conteúdo principal */}
      <Main onStartChat={() => setIsChatBotOpen(true)} />

      {/* Sobre */}
      <section id="sobre" className="items-center flex flex-col py-16 px-4 text-center">
        <TeamLineup />
        <Sobre />
      </section>

      {/* Estatisticas */}
      <section id="stats" className="bg-zinc-900 py-16 px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Estatísticas da FURIA nos últimos 6 meses</h2>
        <Estatisticas />
      </section>


      {/* Video */}
      <section id="video" className="bg-black py-16 px-4 text-center text-white relative overflow-hidden">
      <div
          className="absolute inset-0 opacity-30 bg-center bg-no-repeat bg-contain z-0"
          style={{ backgroundImage: 'url(../furia_logo.png)' }}
      />
      <Video />
      </section>

      {/* Documentação */}
      <section id="docs" className="bg-zinc-900 py-16 px-4 text-center">
        <h3 className="text-2xl font-bold mb-2 text-white">Documentação</h3>
        <p className="text-gray-300">Link para o README.md e documentação do projeto.</p>

        <div className="mt-4 flex justify-center">
          <iframe
            src="/doc/documentacaoChatbot.pdf"
            className="w-80 h-80 border-2 border-gray-700"
            title="Documentação PDF"
          />
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="https://github.com/PedroOrPeter/Furia-Chatbot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition-colors duration-300"
          >
            README
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Imagem Fallen Animação */}
      <img
        src="../fallen_sem_fundo.png"
        alt="Fallen Furia"
        className="fixed bottom-4 left-4 w-52 opacity-20 pointer-events-none select-none"
      />

      {/* ChatBot */}
      <ChatBot open={isChatBotOpen} onClose={() => setIsChatBotOpen(false)} />
    </div>
  );
}