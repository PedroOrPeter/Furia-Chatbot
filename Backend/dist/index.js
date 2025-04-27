"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const node_fetch_1 = __importDefault(require("node-fetch"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// const allowedOrigins =  [
//   'https://furia-chatbot-rho.vercel.app',
//   'https://furia-chatbot-frontend-jade.vercel.app',
// ];
// const allowedMethods = ['GET', 'POST', 'PUT', 'DELETE'];
// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error('Not allowed by CORS'));
//       }
//     },
//     methods: allowedMethods,
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true,
//   })
// );
app.use((0, cors_1.default)()); // Permite todas as origens
app.use(body_parser_1.default.json());
// Simulação de estatísticas manualmente
const furiaStats = {
    victories: 25,
    defeats: 5,
    totalRounds: 1500,
    players: {
        Rifler: "KSCERTO",
        IGL: "Fallen",
        EntryFragger: "Yekindar",
        Support: "Yuurih",
        AWPer: "Molodoy",
    },
    lastMatch: {
        date: "2025-04-09",
        league: "PGL Bucharest 2025",
        opponent: "The Mongolz",
        result: "Derrota",
        score: "0-2",
    },
    coach: "Sid 'Sidde' Macedo",
    lastfiveMatches: [
        { opponent: "The MongolZ", result: "Derrota", score: "0-2" },
        { opponent: "Virtus Pro", result: "Derrota", score: "0-2" },
        { opponent: "Complexity", result: "Derrota", score: "1-2" },
        { opponent: "Betclic", result: "Vitoria", score: "2-0" },
        { opponent: "M80", result: "Derrota", score: "1-2" },
    ],
    lastfiveMatchesResults: {
        wins: 1,
        losses: 4,
    },
    mapsWinRate: {
        "Dust2": 53.8,
        "Mirage": 44.4,
        "Train": 40,
        "Anubis": 37.5,
        "Nuke": 33.3,
        "Inferno": 28.6
    },
    upComingEvent: "BLAST.tv Austin Major 2025 Stage 2",
    last6months: {
        tournements: 12,
        matches: 38,
        winrate: 45,
        mapsPlayed: 83,
        roundsPlayed: 1782,
        roundsWinRate: 52
    },
};
app.get("/", (req, res) => {
    res.send("API do FURIA Chatbot está rodando!");
});
app.get("/stats", (req, res) => {
    res.json(furiaStats);
});
app.post("/chat", async (req, res) => {
    const { message } = req.body;
    try {
        // Buscar estatísticas atuais
        const statsResponse = await (0, node_fetch_1.default)("https://furia-chatbot-rho.vercel.app/stats");
        const stats = await statsResponse.json();
        const prompt = `
    Você é um bot da FURIA esports sobre Counter Strike 2. 
    Só responda perguntas relacionadas ao time de eSports FURIA e seus jogadores.
    Você se baseia na HLTV para responder perguntas sobre estatísticas, jogadores e partidas.
    Você é um bot de chat e deve responder de forma amigável e informativa.
    Se a pergunta não for sobre a FURIA, diga "Só respondo perguntas sobre o time da FURIA 😎".

    Algumas estatísticas atuais que você pode usar:
    - Vitórias: ${stats.victories}
    - Derrotas: ${stats.defeats}
    - Total de Rounds: ${stats.totalRounds}
    - Jogadores:
      - Rifler: ${stats.players.Rifler}
      - IGL: ${stats.players.IGL}
      - Entry Fragger: ${stats.players.EntryFragger}
      - Support: ${stats.players.Support}
      - AWPer: ${stats.players.AWPer}
    - Último jogo: ${stats.lastMatch.date} contra ${stats.lastMatch.opponent} na ${stats.lastMatch.league}. Resultado: ${stats.lastMatch.result} (${stats.lastMatch.score}).
    - Últimos 5 jogos: ${stats.lastfiveMatches.map(match => `${match.opponent} (${match.result})`).join(", ")}
    - Últimos 5 resultados: ${stats.lastfiveMatchesResults.wins} vitórias e ${stats.lastfiveMatchesResults.losses} derrotas.
    - Mapas e Win Rate: ${Object.entries(stats.mapsWinRate).map(([map, rate]) => `${map}: ${rate}%`).join(", ")}
    - Próximo evento: ${stats.upComingEvent}
    - Ultimo evento: ${stats.lastMatch.league}
    - Últimos 6 meses: ${stats.last6months.tournements} torneios, ${stats.last6months.matches} partidas, ${stats.last6months.winrate}% de winrate, ${stats.last6months.mapsPlayed} mapas jogados, ${stats.last6months.roundsPlayed} rounds jogados e ${stats.last6months.roundsWinRate}% de winrate nos rounds.
    - Coach: ${stats.coach}


    Além disso, você pode usar informações sobre o time FURIA, como:
    ${stats}

    Pergunta: ${message}
    `;
        const response = await (0, node_fetch_1.default)("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "openai/gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }]
            })
        });
        const data = await response.json();
        console.log(data);
        const reply = data.choices?.[0]?.message?.content || "Não consegui entender. Tenta de novo!";
        res.json({ reply });
    }
    catch (error) {
        console.error("Erro ao chamar a API:", error);
        res.status(500).json({ reply: "Ocorreu um erro ao processar sua pergunta. Tenta novamente mais tarde." });
    }
});
app.listen(PORT, () => {
    console.log(`Servidor rodando: ${PORT}`);
});
