import { useState } from "react";
import { X } from "lucide-react";
import { fetchapigpt } from "./ApiGPT";

export default function ChatBot({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState([
    { from: "bot", text: "E aí, FURIOSO! Quer saber as últimas do time?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const botReply = await fetchapigpt(input);
      setMessages((prev) => [...prev, { from: "bot", text: botReply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "❌ Ocorreu um erro ao buscar a resposta. Tente novamente mais tarde." }
      ]);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-20 right-6 w-80 bg-white text-black rounded-2xl shadow-lg overflow-hidden flex flex-col z-40">
      <div className="bg-white text-black p-3 font-semibold flex justify-between items-center">
        FURIA Bot
        <button onClick={onClose} className="text-black">
          <X size={24} />
        </button>
      </div>
      <div className="flex-1 p-3 space-y-2 overflow-y-auto max-h-60">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg text-sm max-w-[80%] ${
              msg.from === "bot"
                ? "bg-zinc-200 text-left"
                : "bg-black text-white self-end text-right"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="p-2 border-t flex items-center gap-2">
        <input
          type="text"
          placeholder="Digite aqui..."
          className="flex-1 text-sm p-2 rounded-lg border"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend} className="bg-black text-white px-3 py-1 rounded-lg text-sm">
          Enviar
        </button>
      </div>
    </div>
  );
}