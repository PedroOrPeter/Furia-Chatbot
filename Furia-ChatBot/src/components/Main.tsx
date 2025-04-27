const Main = ({ onStartChat }: { onStartChat: () => void }) => {
  return (
    <main className="flex flex-col items-center justify-center p-4 text-center">
      <img src="../furia_logo.png" alt="Logo FURIA" className="w-40 mb-3" />
      <h2 className="text-5xl font-bold mb-4">Bem-vindo ao Bot do Fã FURIOSO</h2>
      <p className="text-lg mb-6 max-w-xl">
        Converse com o bot da FURIA e descubra curiosidades, resultados e desafios sobre seu time favorito de CS!
      </p>
      <button
        onClick={onStartChat}
        className="bg-white hover:bg-gray-100 px-6 py-3 rounded-2xl text-black font-semibold shadow-md"
      >
        Iniciar Conversa
      </button>
    </main>
  );
};

export default Main;