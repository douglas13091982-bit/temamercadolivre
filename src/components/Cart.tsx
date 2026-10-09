import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onClose: () => void;
  onRemove: (index: number) => void;
  onUpdateQuantity: (index: number, quantity: number) => void;
  total: number;
}

export default function Cart({ items, onClose, onRemove, onUpdateQuantity, total }: CartProps) {
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      {/* Sidebar */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="bg-[#3483FA] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <i className="fas fa-shopping-cart text-xl"></i>
            <h2 className="text-lg font-bold">Meu Carrinho</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 p-8">
              <i className="fas fa-shopping-bag text-6xl mb-4"></i>
              <p className="text-lg font-medium">Seu carrinho está vazio</p>
              <p className="text-sm mt-2">Adicione produtos para continuar</p>
              <button
                onClick={onClose}
                className="mt-6 bg-[#3483FA] text-white px-6 py-2 rounded-md hover:bg-[#2968c8] transition-colors"
              >
                Ver produtos
              </button>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {items.map((item, index) => (
                <div key={index} className="flex gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {item.selectedColor} | Tam: {item.selectedSize}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                          className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors text-xs"
                        >
                          -
                        </button>
                        <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                          className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors text-xs"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm font-bold text-gray-800">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemove(index)}
                    className="text-gray-400 hover:text-red-500 transition-colors self-start"
                  >
                    <i className="fas fa-trash-alt text-sm"></i>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t bg-white p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Subtotal:</span>
              <span className="text-lg font-bold text-gray-800">{formatPrice(total)}</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500">Ou no Pix (10% off):</span>
              <span className="text-sm font-bold text-green-600">
                {formatPrice(total * 0.9)}
              </span>
            </div>
            {total >= 79 && (
              <div className="flex items-center gap-2 mb-4 p-2 bg-green-50 rounded text-sm text-green-700">
                <i className="fas fa-truck"></i>
                <span>Frete grátis para este pedido!</span>
              </div>
            )}
            <button className="w-full bg-[#3483FA] hover:bg-[#2968c8] text-white font-bold py-3.5 rounded-md transition-colors shadow-md mb-2">
              Finalizar Compra
            </button>
            <button
              onClick={onClose}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 rounded-md transition-colors"
            >
              Continuar comprando
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
