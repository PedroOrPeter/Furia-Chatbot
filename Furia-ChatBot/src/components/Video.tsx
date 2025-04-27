const Video = () => {
    return (
        <div>
        <h3 className="text-2xl font-bold mb-2">Vídeo Demonstração</h3>
        <p className="mb-6">Veja o chatbot furioso em ação!</p>

        <div className="flex justify-center">
          <video controls className="w-full max-w-3xl rounded-lg shadow-lg">
            <source src="/demo-furia.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo HTML5.
          </video>
        </div>
      </div>
    );
}

export default Video;