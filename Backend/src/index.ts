import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import fetch from "node-fetch";
import mailjet from 'node-mailjet';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

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

app.get("/stats", (req: Request, res: Response) => {
  res.json(furiaStats);
});

app.post("/chat", async (req: Request, res: Response) => {
  const { message } = req.body;

  try {
    // Buscar estatísticas atuais
    const statsResponse = await fetch("http://localhost:3000/stats");
    const stats = await statsResponse.json() as typeof furiaStats;

    const prompt = `
    Você é um bot da FURIA esports sobre Counter Strike 2. 
    Só responda perguntas relacionadas ao time de eSports FURIA e seus jogadores.
    Você se baseia na HLTV para responder perguntas sobre estatísticas, jogadores e partidas.
    Você é um bot de chat e deve responder de forma amigável e informativa.
    Se a pergunta não for sobre a FURIA, diga "Só respondo perguntas sobre o time da FURIA 😎".
    
    Pergunta: ${message}
    `;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
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

    const data = await response.json() as { choices?: { message?: { content?: string } }[] };
    const reply = data.choices?.[0]?.message?.content || "Não consegui entender. Tenta de novo!";
    res.json({ reply });
  } catch (error) {
    console.error("Erro ao chamar a API:", error);
    res.status(500).json({ reply: "Ocorreu um erro ao processar sua pergunta. Tenta novamente mais tarde." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando: ${PORT}`);
});
