interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  cartCount: number;
  onCartClick: () => void;
}

export default function Header({ searchTerm, setSearchTerm, cartCount, onCartClick }: HeaderProps) {
  return (
    <header className="bg-[#FFE600] sticky top-0 z-40">
      {/* Top bar */}
      <div className="bg-[#FFE600] border-b border-yellow-300/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-xs text-gray-600">
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline">Vender</span>
              <span className="hidden sm:inline">|</span>
              <span className="hidden sm:inline">Ajuda</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline">Crie sua conta</span>
              <span className="hidden sm:inline">|</span>
              <span className="hidden sm:inline">Entrar</span>
              <i className="fas fa-shopping-cart"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 bg-[#3483FA] rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-lg">U7</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-800 leading-tight">Uva7</h1>
              <p className="text-[10px] text-gray-500 leading-tight">Loja Oficial</p>
            </div>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar produtos na Uva7..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2.5 pl-4 pr-12 rounded-md border-0 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#3483FA] placeholder-gray-400"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-gray-100 hover:bg-gray-200 rounded-r-md border-l border-gray-200 transition-colors">
                <i className="fas fa-search text-gray-500"></i>
              </button>
            </div>
          </div>

          {/* Cart Button */}
          <button
            onClick={onCartClick}
            className="relative p-2 hover:bg-yellow-400/50 rounded-lg transition-colors shrink-0"
          >
            <i className="fas fa-shopping-cart text-2xl text-gray-700"></i>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#3483FA] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Store info bar */}
      <div className="bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-1.5">
          <div className="flex items-center gap-4 text-xs text-gray-600 overflow-x-auto">
            <span className="flex items-center gap-1 whitespace-nowrap">
              <i className="fas fa-star text-yellow-500"></i>
              Loja Oficial
            </span>
            <span className="flex items-center gap-1 whitespace-nowrap">
              <i className="fas fa-medal text-green-500"></i>
              MercadoLíder Platinum
            </span>
            <span className="flex items-center gap-1 whitespace-nowrap">
              <i className="fas fa-truck text-blue-500"></i>
              Frete Grátis
            </span>
            <span className="flex items-center gap-1 whitespace-nowrap">
              <i className="fas fa-shield-alt text-purple-500"></i>
              Compra Garantida
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
