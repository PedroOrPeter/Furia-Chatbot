export const fetchapigpt = async (prompt: string) => {
    const response = await fetch("https://furia-chatbot-rho.vercel.app/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: prompt }),
    });
    const data = await response.json();
    return data.reply;
}