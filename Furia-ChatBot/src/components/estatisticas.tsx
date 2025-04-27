const estatisticas = () => {
    return (
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Estatística 1 */}
          <div className="stat-card bg-[#0f0f0f] p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold mb-2">Torneios Disputados</h3>
            <p className="text-3xl font-bold text-green-500">12</p>
          </div>

          {/* Estatística 2 */}
          <div className="stat-card bg-[#0f0f0f] p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold mb-2">Partidas Disputadas</h3>
            <p className="text-3xl font-bold text-red-500">38</p>
          </div>

          {/* Estatística 3 */}
          <div className="stat-card bg-[#0f0f0f] p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold mb-2">Vitórias</h3>
            <p className="text-3xl font-bold text-yellow-500">17</p>
          </div>

          {/* Estatística 4 */}
          <div className="stat-card bg-[#0f0f0f] p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold mb-2">Total de Rounds</h3>
            <p className="text-3xl font-bold text-blue-500">1782</p>
          </div>

        </div>
    )
}

export default estatisticas;