import { useState } from 'react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, color: string, size: string, quantity: number) => void;
}

export default function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const handleAddToCart = () => {
    onAddToCart(product, selectedColor, selectedSize, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
        >
          <i className="fas fa-times text-gray-600"></i>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 md:h-full object-cover"
            />
            {product.discount > 0 && (
              <div className="absolute top-4 left-4 bg-green-500 text-white text-sm font-bold px-3 py-1.5 rounded-lg">
                {product.discount}% OFF
              </div>
            )}
          </div>

          {/* Details */}
          <div className="p-6 md:p-8">
            {/* Store badge */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-[#3483FA] rounded flex items-center justify-center">
                <span className="text-white text-[8px] font-black">U7</span>
              </div>
              <span className="text-xs text-gray-500">Vendido por <strong>Uva7</strong> | Loja Oficial</span>
            </div>

            {/* Title */}
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 leading-snug">
              {product.name}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`fas fa-star text-sm ${
                      i < Math.floor(product.rating) ? 'text-green-500' : 'text-gray-200'
                    }`}
                  ></i>
                ))}
              </div>
              <span className="text-sm text-gray-500">{product.rating}</span>
              <span className="text-sm text-gray-400">|</span>
              <span className="text-sm text-gray-500">{product.sold} vendidos</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              {product.originalPrice > product.price && (
                <span className="text-sm text-gray-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              <div className="text-3xl font-light text-gray-800">
                {formatPrice(product.price)}
              </div>
              <p className="text-sm text-green-600 font-medium mt-1">
                em 4x de {formatPrice(product.price / 4)} sem juros
              </p>
              <p className="text-sm text-gray-600 mt-1">
                <i className="fas fa-qrcode mr-1"></i>
                <strong>
                  {(product.price * 0.9).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </strong> no Pix (10% de desconto)
              </p>
            </div>

            {/* Shipping */}
            {product.freeShipping && (
              <div className="flex items-center gap-2 mb-6 p-3 bg-green-50 rounded-lg">
                <i className="fas fa-truck text-green-600"></i>
                <span className="text-sm text-green-700 font-medium">Frete Grátis</span>
              </div>
            )}

            {/* Color selection */}
            <div className="mb-5">
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Cor: <span className="text-gray-500">{selectedColor}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1.5 text-xs rounded-full border transition-all ${
                      selectedColor === color
                        ? 'border-[#3483FA] bg-blue-50 text-[#3483FA] font-medium'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size selection */}
            <div className="mb-5">
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Tamanho: <span className="text-gray-500">{selectedSize}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 text-sm rounded-lg border transition-all flex items-center justify-center ${
                      selectedSize === size
                        ? 'border-[#3483FA] bg-blue-50 text-[#3483FA] font-medium'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700 mb-2 block">Quantidade:</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <i className="fas fa-minus text-xs text-gray-600"></i>
                </button>
                <span className="text-lg font-medium w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <i className="fas fa-plus text-xs text-gray-600"></i>
                </button>
                <span className="text-xs text-gray-400 ml-2">({product.sold > 50 ? '50+' : product.sold} disponíveis)</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleAddToCart}
                className="w-full bg-[#3483FA] hover:bg-[#2968c8] text-white font-semibold py-3 rounded-md transition-colors shadow-md"
              >
                <i className="fas fa-shopping-cart mr-2"></i>
                Adicionar ao carrinho
              </button>
              <button className="w-full bg-[#FFE600] hover:bg-yellow-300 text-gray-800 font-semibold py-3 rounded-md transition-colors">
                Comprar agora
              </button>
            </div>

            {/* Guarantee */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <i className="fas fa-shield-alt text-green-500"></i>
                  Compra Garantida
                </span>
                <span className="flex items-center gap-1">
                  <i className="fas fa-undo text-blue-500"></i>
                  30 dias para devolver
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
