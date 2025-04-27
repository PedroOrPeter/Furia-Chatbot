const Footer = () => {
    return( <footer className="bg-black text-white py-8 px-4 mt-1">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
      <div>
        <h4 className="text-lg font-bold">FURIA Bot</h4>
        <p className="text-sm text-zinc-400">
          Projeto desenvolvido para o desafio técnico da FURIA Tech.
        </p>
        <p className="text-sm text-zinc-600 mt-2">
          Feito com 💙 por mais um furioso.
        </p>
      </div>

      <div>
        <h5 className="font-semibold mb-1">Redes da FURIA</h5>
        <ul className="flex gap-4 justify-center md:justify-start">
          <li>
            <a href="https://twitter.com/furia" target="_blank" rel="noopener noreferrer" className="hover:underline text-sm">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/furiagg" target="_blank" rel="noopener noreferrer" className="hover:underline text-sm">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.twitch.tv/furiatv" target="_blank" rel="noopener noreferrer" className="hover:underline text-sm">
              Twitch
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h5 className="font-semibold mb-1">Links</h5>
        <ul className="text-sm">
          <li>
            <a href="https://github.com/PedroOrPeter/Furia-Chatbot" target="_blank" rel="noopener noreferrer" className="hover:underline">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="text-center text-zinc-600 text-xs mt-6">
      &copy; {new Date().getFullYear()} FURIA FanBot. Todos os direitos reservados.
    </div>
  </footer>
);
}
export default Footer;