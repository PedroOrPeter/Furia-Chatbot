const Doc = () => {
    return (
        <>
            <h3 className="text-2xl font-bold mb-2 text-white">Documentação</h3>
            <p className="text-gray-300">Link para o README.md e documentação do projeto.</p>

            <div className="mt-4 flex justify-center">
                <iframe
                    src="/doc/documentacaoChatbot.pdf"
                    className="w-80 h-80 border-2 border-gray-700"
                    title="Documentação PDF"
                />
            </div>

            <div className="mt-6 flex justify-center">
                <a
                    href="https://github.com/PedroOrPeter/Furia-Chatbot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                    README
                </a>
            </div>
        </>
    );
}

export default Doc;