export const fetchapigpt = async (prompt: string) => {
    const response = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: prompt }),
    });
    const data = await response.json();
    return data.reply;
}