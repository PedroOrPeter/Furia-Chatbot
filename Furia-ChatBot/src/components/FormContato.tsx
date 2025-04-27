import { useState } from "react";

const FormContato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const response = await fetch("http://localhost:3000/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", message: "" }); // Limpa o formulário
      } else {
        setStatus("Erro ao enviar a mensagem. Tente novamente.");
      }
    } catch (error) {
      setStatus("Erro ao enviar a mensagem. Tente novamente.");
    }
  };

  return (
    <div className="relative z-10 max-w-xl mx-auto">
      <h3 className="text-2xl font-bold mb-2">Contato Furioso</h3>
      <form
        onSubmit={handleSubmit}
        className="text-left space-y-4 bg-grey bg-opacity-90 backdrop-blur-md p-6 rounded-xl shadow-lg"
      >
        <div>
          <label htmlFor="name" className="block font-semibold mb-1">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-semibold mb-1">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 h-32 resize-none"
          />
        </div>

        <button
          type="submit"
          className="bg-white text-black font-semibold py-2 px-6 rounded-md hover:bg-gray-800 transition"
        >
          Enviar
        </button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
};

export default FormContato;