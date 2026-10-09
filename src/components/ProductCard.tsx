import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100 hover:border-[#3483FA]/30"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.discount > 0 && (
          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            {product.discount}% OFF
          </div>
        )}
        {product.freeShipping && (
          <div className="absolute bottom-2 left-2 bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
            FRETE GRÁTIS
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-[#3483FA] text-white px-4 py-2 rounded-md text-sm font-medium shadow-lg hover:bg-[#2968c8] transition-colors">
              Ver detalhes
            </button>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={`fas fa-star text-[10px] ${
                  i < Math.floor(product.rating) ? 'text-green-500' : 'text-gray-200'
                }`}
              ></i>
            ))}
          </div>
          <span className="text-xs text-gray-400">({product.sold})</span>
        </div>

        {/* Name */}
        <h3 className="text-sm text-gray-700 line-clamp-2 mb-3 leading-snug min-h-[2.5rem]">
          {product.name}
        </h3>

        {/* Price */}
        <div className="mb-2">
          {product.originalPrice > product.price && (
            <span className="text-xs text-gray-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
          <div className="text-xl font-semibold text-gray-800">
            {formatPrice(product.price)}
          </div>
          <p className="text-xs text-green-600 font-medium mt-0.5">
            em 4x de {formatPrice(product.price / 4)} sem juros
          </p>
        </div>

        {/* Pix discount */}
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <i className="fas fa-qrcode"></i>
          <span>
            {(product.price * 0.9).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} no Pix
          </span>
        </div>
      </div>
    </div>
  );
}
