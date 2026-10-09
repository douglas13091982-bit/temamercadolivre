export default function Banner() {
  return (
    <section className="relative overflow-hidden">
      {/* Main Banner */}
      <div className="bg-gradient-to-r from-[#3483FA] via-[#2968c8] to-[#1a4f9e] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 mb-4">
                <span className="text-white/90 text-sm font-medium">🔥 OFERTAS DA SEMANA</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                Moda Básica<br />
                <span className="text-[#FFE600]">Algodão Premium</span>
              </h2>
              <p className="text-white/80 text-lg mb-6 max-w-md">
                Camisetas, blusinhas e kits com até <strong className="text-[#FFE600]">30% OFF</strong>. 
                Conforto e estilo para o dia a dia.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <button className="bg-[#FFE600] hover:bg-yellow-300 text-gray-800 font-bold px-6 py-3 rounded-md transition-colors shadow-lg">
                  Ver Ofertas
                </button>
                <button className="bg-white/20 hover:bg-white/30 text-white font-bold px-6 py-3 rounded-md transition-colors backdrop-blur-sm border border-white/30">
                  Novidades
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <div className="text-center">
                    <div className="text-6xl md:text-7xl font-black text-[#FFE600]">30%</div>
                    <div className="text-white text-xl font-bold">DE DESCONTO</div>
                    <div className="text-white/70 text-sm mt-1">em kits selecionados</div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full animate-pulse">
                  LIMITADO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub banner */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-tshirt text-blue-600"></i>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">Camisetas</p>
                <p className="text-xs text-gray-500">A partir de R$ 29</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-female text-pink-600"></i>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">Feminino</p>
                <p className="text-xs text-gray-500">Kits especiais</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-male text-green-600"></i>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">Masculino</p>
                <p className="text-xs text-gray-500">Moletom & Jogger</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-boxes text-purple-600"></i>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">Kits</p>
                <p className="text-xs text-gray-500">Economia garantida</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
