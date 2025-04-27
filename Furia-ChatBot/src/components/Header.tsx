const Header = () => {
    return (
        <header className="w-full bg-zinc-900 px-6 py-4 flex justify-between items-center fixed top-0 left-0 z-50 shadow-md">
        <h1 className="text-xl font-bold text-white-500">Fã FURIOSO</h1>
        <nav className="space-x-6 text-sm">
          <a href="#sobre" className="hover:text-white-400 transition">Lineup Furia CS</a>
          <a href="#video" className="hover:text-white-400 transition">Vídeo Demonstração</a>
          <a href="#contato" className="hover:text-white-400 transition">Contato Furioso</a>
          <a href="#docs" className="hover:text-white-400 transition">Documentação</a>
        </nav>
      </header>
    );
}
export default Header;