type Player = {
  name: string;
  role: string;
  description: string;
  image: string;
};

const players: Player[] = [
  {
    name: "KSCERATO",
    role: "Rifler",
    description: "Jogador estável e clutch master da FURIA.",
    image: "/players/kscerato.png",
  },
  {
    name: "yuurih",
    role: "Rifler",
    description: "Versátil, confiável e com ótima mira.",
    image: "/players/yuurih.png",
  },
  {
    name: "Molodoy",
    role: "AWPer",
    description: "Conhecido pelo estilo de jogo agressivo.",
    image: "/players/molodoy.png",
  },
  {
    name: "Yekindar",
    role: "Entry Fragger",
    description: "Faz o trabalho sujo e mantém o time unido.",
    image: "/players/yekeander.png",
  },
  {
    name: "fallen",
    role: "IGL",
    description: "Lenda brasileira e líder dentro e fora do servidor.",
    image: "/players/fallen.png",
  },
];

const TeamLineup = () => {
  return (
    <section className="p-8 bg-zinc-900 text-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Lineup Atual de CS:GO</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16">
        {players.map((player, index) => (
          <div key={index} className="bg-zinc-800 rounded-2xl shadow-lg p-4 text-center">
            <img
              src={player.image}
              alt={player.name}
              className="rounded-xl h-40 w-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{player.name}</h3>
            <p className="text-sm text-yellow-400">{player.role}</p>
            <p className="text-sm mt-2">{player.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamLineup;
