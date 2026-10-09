import { useState } from 'react';
import './index.css';

// ==================== TYPES ====================
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  category: string;
  colors: string[];
  sizes: string[];
  freeShipping: boolean;
  rating: number;
  sold: number;
}

interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

// ==================== DATA ====================
const products: Product[] = [
  {
    id: 1,
    name: "Kit 5 Blusinhas Feminina Camiseta Algodão Básica Uva7",
    price: 123.21,
    originalPrice: 149.90,
    discount: 11,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    category: "Feminino",
    colors: ["Branco", "Preto", "Cinza", "Rosa", "Azul"],
    sizes: ["P", "M", "G", "GG"],
    freeShipping: true,
    rating: 4.8,
    sold: 1523
  },
  {
    id: 2,
    name: "Kit 10pçs Blusa Camiseta Básica Feminina Uva7",
    price: 189.90,
    originalPrice: 249.90,
    discount: 24,
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop",
    category: "Feminino",
    colors: ["Sortidas"],
    sizes: ["P", "M", "G", "GG"],
    freeShipping: true,
    rating: 4.9,
    sold: 2847
  },
  {
    id: 3,
    name: "Kit 2 Calça Moletom Masculina Jogger Slim Premium Uva7",
    price: 159.90,
    originalPrice: 199.90,
    discount: 20,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
    category: "Masculino",
    colors: ["Preto", "Cinza", "Azul Marinho"],
    sizes: ["P", "M", "G", "GG", "XG"],
    freeShipping: true,
    rating: 4.7,
    sold: 987
  },
  {
    id: 4,
    name: "Camiseta Feminina Leveza Kit Algodão Uva7",
    price: 119.22,
    originalPrice: 139.45,
    discount: 14,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=400&fit=crop",
    category: "Feminino",
    colors: ["Branco", "Bege", "Caramelo", "Verde"],
    sizes: ["P", "M", "G"],
    freeShipping: true,
    rating: 4.6,
    sold: 654
  },
  {
    id: 5,
    name: "Kit 3 Camisetas Masculinas Algodão Premium Uva7",
    price: 89.90,
    originalPrice: 119.90,
    discount: 25,
    image: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=400&h=400&fit=crop",
    category: "Masculino",
    colors: ["Branco", "Preto", "Cinza Mescla"],
    sizes: ["P", "M", "G", "GG", "XG"],
    freeShipping: true,
    rating: 4.8,
    sold: 3201
  },
  {
    id: 6,
    name: "Baby Look Feminina Algodão Uva7 - Várias Cores",
    price: 39.90,
    originalPrice: 54.90,
    discount: 27,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop",
    category: "Feminino",
    colors: ["Rosa", "Lilás", "Branco", "Preto", "Vermelho"],
    sizes: ["PP", "P", "M", "G"],
    freeShipping: false,
    rating: 4.5,
    sold: 4521
  },
  {
    id: 7,
    name: "Kit 5 Camisetas Masculinas Gola V Algodão Uva7",
    price: 109.90,
    originalPrice: 149.90,
    discount: 27,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    category: "Masculino",
    colors: ["Branco", "Preto", "Cinza", "Azul"],
    sizes: ["P", "M", "G", "GG"],
    freeShipping: true,
    rating: 4.7,
    sold: 1876
  },
  {
    id: 8,
    name: "Camiseta Oversized Unissex Algodão Uva7",
    price: 59.90,
    originalPrice: 79.90,
    discount: 25,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
    category: "Unissex",
    colors: ["Preto", "Branco", "Bege", "Verde Militar"],
    sizes: ["M", "G", "GG", "XG"],
    freeShipping: true,
    rating: 4.9,
    sold: 2103
  },
  {
    id: 9,
    name: "Kit 3 Shorts Moletom Masculino Uva7",
    price: 99.90,
    originalPrice: 139.90,
    discount: 29,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop",
    category: "Masculino",
    colors: ["Preto", "Cinza", "Azul Marinho"],
    sizes: ["P", "M", "G", "GG"],
    freeShipping: true,
    rating: 4.6,
    sold: 743
  },
  {
    id: 10,
    name: "Regata Feminina Básica Algodão Uva7",
    price: 29.90,
    originalPrice: 39.90,
    discount: 25,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop",
    category: "Feminino",
    colors: ["Branco", "Preto", "Rosa", "Azul"],
    sizes: ["PP", "P", "M", "G"],
    freeShipping: false,
    rating: 4.4,
    sold: 5672
  },
  {
    id: 11,
    name: "Kit 7 Camisetas Coloridas Femininas Uva7",
    price: 169.90,
    originalPrice: 219.90,
    discount: 23,
    image: "https://images.unsplash.com/photo-1554575856-a9a619c49fac?w=400&h=400&fit=crop",
    category: "Feminino",
    colors: ["Sortidas"],
    sizes: ["P", "M", "G", "GG"],
    freeShipping: true,
    rating: 4.8,
    sold: 1342
  },
  {
    id: 12,
    name: "Moletom Canguru Unissex Premium Uva7",
    price: 129.90,
    originalPrice: 179.90,
    discount: 28,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    category: "Unissex",
    colors: ["Preto", "Cinza", "Azul Marinho", "Verde"],
    sizes: ["P", "M", "G", "GG", "XG"],
    freeShipping: true,
    rating: 4.9,
    sold: 892
  }
];

const categories = ["Todos", "Feminino", "Masculino", "Unissex"];

// ==================== HELPERS ====================
const formatPrice = (price: number) => {
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

// ==================== STYLES ====================
const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#ebebeb',
  } as React.CSSProperties,
  header: {
    backgroundColor: '#FFE600',
    position: 'sticky' as const,
    top: 0,
    zIndex: 100,
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  } as React.CSSProperties,
  headerInner: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '12px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  } as React.CSSProperties,
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexShrink: 0,
  } as React.CSSProperties,
  logoBox: {
    width: '40px',
    height: '40px',
    backgroundColor: '#3483FA',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 900,
    fontSize: '18px',
  } as React.CSSProperties,
  searchBox: {
    flex: 1,
    maxWidth: '600px',
    position: 'relative' as const,
  } as React.CSSProperties,
  searchInput: {
    width: '100%',
    padding: '10px 45px 10px 16px',
    borderRadius: '4px',
    border: 'none',
    fontSize: '14px',
    outline: 'none',
    boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
  } as React.CSSProperties,
  searchBtn: {
    position: 'absolute' as const,
    right: '0',
    top: '0',
    height: '100%',
    padding: '0 14px',
    backgroundColor: '#f5f5f5',
    border: 'none',
    borderLeft: '1px solid #ddd',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer',
    fontSize: '16px',
    color: '#666',
  } as React.CSSProperties,
  cartBtn: {
    position: 'relative' as const,
    padding: '8px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '24px',
    color: '#333',
  } as React.CSSProperties,
  cartBadge: {
    position: 'absolute' as const,
    top: '-2px',
    right: '-2px',
    backgroundColor: '#3483FA',
    color: 'white',
    fontSize: '11px',
    fontWeight: 700,
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as React.CSSProperties,
  storeBar: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    padding: '6px 0',
  } as React.CSSProperties,
  storeBarInner: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 16px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    fontSize: '12px',
    color: '#666',
    overflowX: 'auto' as const,
  } as React.CSSProperties,
  banner: {
    background: 'linear-gradient(135deg, #3483FA 0%, #2968c8 50%, #1a4f9e 100%)',
    padding: '48px 16px',
  } as React.CSSProperties,
  bannerInner: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
    flexWrap: 'wrap' as const,
    justifyContent: 'center',
  } as React.CSSProperties,
  bannerText: {
    flex: 1,
    minWidth: '280px',
  } as React.CSSProperties,
  bannerBadge: {
    display: 'inline-block',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: '20px',
    padding: '4px 16px',
    marginBottom: '16px',
    color: 'rgba(255,255,255,0.9)',
    fontSize: '14px',
    fontWeight: 500,
  } as React.CSSProperties,
  bannerTitle: {
    fontSize: 'clamp(28px, 5vw, 48px)',
    fontWeight: 900,
    color: 'white',
    lineHeight: 1.2,
    marginBottom: '16px',
  } as React.CSSProperties,
  bannerHighlight: {
    color: '#FFE600',
  } as React.CSSProperties,
  bannerDesc: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: '18px',
    marginBottom: '24px',
    maxWidth: '400px',
  } as React.CSSProperties,
  bannerBtns: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap' as const,
  } as React.CSSProperties,
  bannerBtnPrimary: {
    backgroundColor: '#FFE600',
    color: '#333',
    fontWeight: 700,
    padding: '12px 24px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
  } as React.CSSProperties,
  bannerBtnSecondary: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: 'white',
    fontWeight: 700,
    padding: '12px 24px',
    borderRadius: '4px',
    border: '1px solid rgba(255,255,255,0.3)',
    cursor: 'pointer',
    fontSize: '14px',
    backdropFilter: 'blur(4px)',
  } as React.CSSProperties,
  discountCircle: {
    width: '200px',
    height: '200px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(255,255,255,0.2)',
    textAlign: 'center' as const,
    position: 'relative' as const,
  } as React.CSSProperties,
  discountText: {
    fontSize: '56px',
    fontWeight: 900,
    color: '#FFE600',
    lineHeight: 1,
  } as React.CSSProperties,
  discountLabel: {
    color: 'white',
    fontSize: '18px',
    fontWeight: 700,
  } as React.CSSProperties,
  categories: {
    backgroundColor: 'white',
    borderBottom: '1px solid #eee',
    padding: '12px 0',
  } as React.CSSProperties,
  categoriesInner: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 16px',
    display: 'flex',
    gap: '12px',
    overflowX: 'auto' as const,
  } as React.CSSProperties,
  categoryBtn: (active: boolean) => ({
    padding: '8px 20px',
    borderRadius: '20px',
    border: 'none',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    whiteSpace: 'nowrap' as const,
    backgroundColor: active ? '#3483FA' : '#f0f0f0',
    color: active ? 'white' : '#555',
    transition: 'all 0.2s',
  }) as React.CSSProperties,
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '24px 16px',
  } as React.CSSProperties,
  mainHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  } as React.CSSProperties,
  mainTitle: {
    fontSize: '22px',
    fontWeight: 700,
    color: '#333',
  } as React.CSSProperties,
  mainCount: {
    fontSize: '13px',
    color: '#999',
  } as React.CSSProperties,
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '16px',
  } as React.CSSProperties,
  card: {
    backgroundColor: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
    cursor: 'pointer',
    transition: 'all 0.3s',
    border: '1px solid #eee',
  } as React.CSSProperties,
  cardImage: {
    width: '100%',
    aspectRatio: '1',
    objectFit: 'cover' as const,
    display: 'block',
  } as React.CSSProperties,
  cardImageWrapper: {
    position: 'relative' as const,
    overflow: 'hidden',
  } as React.CSSProperties,
  cardDiscount: {
    position: 'absolute' as const,
    top: '8px',
    left: '8px',
    backgroundColor: '#00a650',
    color: 'white',
    fontSize: '12px',
    fontWeight: 700,
    padding: '3px 8px',
    borderRadius: '3px',
  } as React.CSSProperties,
  cardShipping: {
    position: 'absolute' as const,
    bottom: '8px',
    left: '8px',
    backgroundColor: '#00a650',
    color: 'white',
    fontSize: '10px',
    fontWeight: 700,
    padding: '2px 6px',
    borderRadius: '3px',
  } as React.CSSProperties,
  cardBody: {
    padding: '14px',
  } as React.CSSProperties,
  cardRating: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    marginBottom: '8px',
  } as React.CSSProperties,
  cardName: {
    fontSize: '14px',
    color: '#333',
    lineHeight: 1.4,
    marginBottom: '10px',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical' as const,
    overflow: 'hidden',
    minHeight: '40px',
  } as React.CSSProperties,
  cardOldPrice: {
    fontSize: '12px',
    color: '#999',
    textDecoration: 'line-through',
  } as React.CSSProperties,
  cardPrice: {
    fontSize: '22px',
    fontWeight: 400,
    color: '#333',
    marginBottom: '2px',
  } as React.CSSProperties,
  cardInstallment: {
    fontSize: '13px',
    color: '#00a650',
    fontWeight: 500,
  } as React.CSSProperties,
  cardPix: {
    fontSize: '12px',
    color: '#666',
    marginTop: '6px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  } as React.CSSProperties,
  // Modal
  modalOverlay: {
    position: 'fixed' as const,
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 200,
    padding: '16px',
    animation: 'fadeIn 0.2s ease',
  } as React.CSSProperties,
  modal: {
    backgroundColor: 'white',
    borderRadius: '12px',
    maxWidth: '900px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto' as const,
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
    position: 'relative' as const,
  } as React.CSSProperties,
  modalClose: {
    position: 'absolute' as const,
    top: '12px',
    right: '12px',
    width: '32px',
    height: '32px',
    backgroundColor: '#f0f0f0',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    zIndex: 10,
  } as React.CSSProperties,
  modalGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 0,
  } as React.CSSProperties,
  modalImage: {
    width: '100%',
    height: '100%',
    minHeight: '300px',
    objectFit: 'cover' as const,
  } as React.CSSProperties,
  modalBody: {
    padding: '24px',
  } as React.CSSProperties,
  // Cart
  cartOverlay: {
    position: 'fixed' as const,
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    zIndex: 200,
    animation: 'fadeIn 0.2s ease',
  } as React.CSSProperties,
  cartSidebar: {
    position: 'fixed' as const,
    right: 0,
    top: 0,
    height: '100%',
    width: '100%',
    maxWidth: '400px',
    backgroundColor: 'white',
    boxShadow: '-4px 0 20px rgba(0,0,0,0.2)',
    display: 'flex',
    flexDirection: 'column' as const,
    animation: 'slideIn 0.3s ease',
    zIndex: 201,
  } as React.CSSProperties,
  cartHeader: {
    backgroundColor: '#3483FA',
    color: 'white',
    padding: '16px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  } as React.CSSProperties,
  cartClose: {
    width: '32px',
    height: '32px',
    backgroundColor: 'rgba(255,255,255,0.2)',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    color: 'white',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as React.CSSProperties,
  cartItems: {
    flex: 1,
    overflowY: 'auto' as const,
    padding: '16px',
  } as React.CSSProperties,
  cartItem: {
    display: 'flex',
    gap: '12px',
    padding: '12px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    marginBottom: '12px',
    border: '1px solid #eee',
  } as React.CSSProperties,
  cartItemImage: {
    width: '70px',
    height: '70px',
    objectFit: 'cover' as const,
    borderRadius: '6px',
  } as React.CSSProperties,
  cartFooter: {
    borderTop: '1px solid #eee',
    padding: '20px',
  } as React.CSSProperties,
  checkoutBtn: {
    width: '100%',
    backgroundColor: '#3483FA',
    color: 'white',
    fontWeight: 700,
    padding: '14px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '15px',
    marginBottom: '8px',
  } as React.CSSProperties,
  continueBtn: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    color: '#333',
    fontWeight: 500,
    padding: '12px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
  } as React.CSSProperties,
  // Footer
  footer: {
    backgroundColor: 'white',
    borderTop: '1px solid #eee',
    marginTop: '40px',
  } as React.CSSProperties,
  footerInner: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '32px 16px',
  } as React.CSSProperties,
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '32px',
    marginBottom: '24px',
  } as React.CSSProperties,
  footerTitle: {
    fontWeight: 700,
    fontSize: '14px',
    color: '#333',
    marginBottom: '12px',
  } as React.CSSProperties,
  footerText: {
    fontSize: '13px',
    color: '#666',
    lineHeight: 1.8,
  } as React.CSSProperties,
  footerBottom: {
    borderTop: '1px solid #eee',
    paddingTop: '16px',
    textAlign: 'center' as const,
    fontSize: '12px',
    color: '#999',
  } as React.CSSProperties,
  // Benefits
  benefits: {
    backgroundColor: 'white',
    padding: '32px 0',
    borderTop: '1px solid #eee',
  } as React.CSSProperties,
  benefitsInner: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 16px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
  } as React.CSSProperties,
  benefitItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  } as React.CSSProperties,
  benefitIcon: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    flexShrink: 0,
  } as React.CSSProperties,
  // Notification
  notification: {
    position: 'fixed' as const,
    top: '80px',
    right: '16px',
    backgroundColor: '#00a650',
    color: 'white',
    padding: '12px 20px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    zIndex: 300,
    animation: 'bounceIn 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
  } as React.CSSProperties,
  // Select buttons
  selectBtn: (active: boolean) => ({
    padding: '6px 14px',
    borderRadius: '20px',
    border: active ? '2px solid #3483FA' : '1px solid #ddd',
    backgroundColor: active ? '#e8f0fe' : 'white',
    color: active ? '#3483FA' : '#555',
    fontSize: '12px',
    fontWeight: active ? 600 : 400,
    cursor: 'pointer',
    transition: 'all 0.2s',
  }) as React.CSSProperties,
  sizeBtn: (active: boolean) => ({
    width: '38px',
    height: '38px',
    borderRadius: '8px',
    border: active ? '2px solid #3483FA' : '1px solid #ddd',
    backgroundColor: active ? '#e8f0fe' : 'white',
    color: active ? '#3483FA' : '#555',
    fontSize: '13px',
    fontWeight: active ? 600 : 400,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
  }) as React.CSSProperties,
};

// ==================== APP ====================
function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [notification, setNotification] = useState('');

  const addToCart = (product: Product, color: string, size: string, quantity: number) => {
    setCartItems(prev => {
      const existing = prev.find(
        item => item.product.id === product.id && item.selectedColor === color && item.selectedSize === size
      );
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id && item.selectedColor === color && item.selectedSize === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity, selectedColor: color, selectedSize: size }];
    });
    setNotification(`${product.name.substring(0, 30)}... adicionado!`);
    setTimeout(() => setNotification(''), 3000);
  };

  const removeFromCart = (index: number) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const updateQuantity = (index: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(index);
      return;
    }
    setCartItems(prev => prev.map((item, i) => i === index ? { ...item, quantity } : item));
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const cartTotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={styles.container}>
      {/* NOTIFICATION */}
      {notification && (
        <div style={styles.notification}>
          <span>✓</span>
          <span>{notification}</span>
        </div>
      )}

      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.logo}>
            <div style={styles.logoBox}>U7</div>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: '#333', lineHeight: 1.2 }}>Uva7</div>
              <div style={{ fontSize: '10px', color: '#666' }}>Loja Oficial</div>
            </div>
          </div>

          <div style={styles.searchBox}>
            <input
              type="text"
              placeholder="Buscar produtos na Uva7..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={styles.searchInput}
            />
            <button style={styles.searchBtn}>🔍</button>
          </div>

          <button style={styles.cartBtn} onClick={() => setIsCartOpen(true)}>
            🛒
            {cartCount > 0 && (
              <span style={styles.cartBadge}>{cartCount}</span>
            )}
          </button>
        </div>

        <div style={styles.storeBar}>
          <div style={styles.storeBarInner}>
            <span>⭐ Loja Oficial</span>
            <span>🏆 MercadoLíder Platinum</span>
            <span>🚚 Frete Grátis</span>
            <span>🛡️ Compra Garantida</span>
          </div>
        </div>
      </header>

      {/* BANNER */}
      <section style={styles.banner}>
        <div style={styles.bannerInner}>
          <div style={styles.bannerText}>
            <div style={styles.bannerBadge}>🔥 OFERTAS DA SEMANA</div>
            <h2 style={styles.bannerTitle}>
              Moda Básica<br />
              <span style={styles.bannerHighlight}>Algodão Premium</span>
            </h2>
            <p style={styles.bannerDesc}>
              Camisetas, blusinhas e kits com até <strong style={{ color: '#FFE600' }}>30% OFF</strong>.
              Conforto e estilo para o dia a dia.
            </p>
            <div style={styles.bannerBtns}>
              <button style={styles.bannerBtnPrimary}>Ver Ofertas</button>
              <button style={styles.bannerBtnSecondary}>Novidades</button>
            </div>
          </div>
          <div style={styles.discountCircle}>
            <div>
              <div style={styles.discountText}>30%</div>
              <div style={styles.discountLabel}>DE DESCONTO</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', marginTop: '4px' }}>em kits selecionados</div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <div style={styles.categories}>
        <div style={styles.categoriesInner}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={styles.categoryBtn(selectedCategory === cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCTS */}
      <main style={styles.main}>
        <div style={styles.mainHeader}>
          <h2 style={styles.mainTitle}>
            {selectedCategory === 'Todos' ? 'Todos os Produtos' : selectedCategory}
          </h2>
          <span style={styles.mainCount}>{filteredProducts.length} produtos encontrados</span>
        </div>

        <div style={styles.grid}>
          {filteredProducts.map(product => (
            <div
              key={product.id}
              style={styles.card}
              onClick={() => setSelectedProduct(product)}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <div style={styles.cardImageWrapper}>
                <img src={product.image} alt={product.name} style={styles.cardImage} />
                {product.discount > 0 && (
                  <div style={styles.cardDiscount}>{product.discount}% OFF</div>
                )}
                {product.freeShipping && (
                  <div style={styles.cardShipping}>FRETE GRÁTIS</div>
                )}
              </div>
              <div style={styles.cardBody}>
                <div style={styles.cardRating}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: i < Math.floor(product.rating) ? '#00a650' : '#ddd', fontSize: '12px' }}>★</span>
                  ))}
                  <span style={{ fontSize: '12px', color: '#999', marginLeft: '4px' }}>({product.sold})</span>
                </div>
                <div style={styles.cardName}>{product.name}</div>
                {product.originalPrice > product.price && (
                  <div style={styles.cardOldPrice}>{formatPrice(product.originalPrice)}</div>
                )}
                <div style={styles.cardPrice}>{formatPrice(product.price)}</div>
                <div style={styles.cardInstallment}>
                  em 4x de {formatPrice(product.price / 4)} sem juros
                </div>
                <div style={styles.cardPix}>
                  💳 {(product.price * 0.9).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} no Pix
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#999' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
            <p style={{ fontSize: '18px' }}>Nenhum produto encontrado</p>
          </div>
        )}
      </main>

      {/* BENEFITS */}
      <section style={styles.benefits}>
        <div style={styles.benefitsInner}>
          <div style={styles.benefitItem}>
            <div style={{ ...styles.benefitIcon, backgroundColor: '#e8f5e9', color: '#2e7d32' }}>🚚</div>
            <div>
              <div style={{ fontWeight: 700, color: '#333', fontSize: '14px' }}>Frete Grátis</div>
              <div style={{ fontSize: '13px', color: '#666' }}>Para compras acima de R$ 79</div>
            </div>
          </div>
          <div style={styles.benefitItem}>
            <div style={{ ...styles.benefitIcon, backgroundColor: '#e3f2fd', color: '#1565c0' }}>🛡️</div>
            <div>
              <div style={{ fontWeight: 700, color: '#333', fontSize: '14px' }}>Compra Garantida</div>
              <div style={{ fontSize: '13px', color: '#666' }}>Receba o produto ou devolvemos seu dinheiro</div>
            </div>
          </div>
          <div style={styles.benefitItem}>
            <div style={{ ...styles.benefitIcon, backgroundColor: '#f3e5f5', color: '#7b1fa2' }}>↩️</div>
            <div>
              <div style={{ fontWeight: 700, color: '#333', fontSize: '14px' }}>30 dias para devolução</div>
              <div style={{ fontSize: '13px', color: '#666' }}>Conte a partir da data de entrega</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div style={styles.footerGrid}>
            <div>
              <div style={styles.footerTitle}>Formas de pagamento</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {['Visa', 'Master', 'Elo', 'Pix', 'Boleto', 'Amex'].map(m => (
                  <span key={m} style={{ backgroundColor: '#f0f0f0', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', color: '#555' }}>{m}</span>
                ))}
              </div>
            </div>
            <div>
              <div style={styles.footerTitle}>Atendimento</div>
              <div style={styles.footerText}>
                🕐 Seg a Sex: 9h às 18h<br />
                ✉️ contato@uva7.com.br<br />
                📱 (47) 99999-9999
              </div>
            </div>
            <div>
              <div style={styles.footerTitle}>Redes Sociais</div>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '8px' }}>
                {['📷', '👍', '🐦', '▶️'].map((icon, i) => (
                  <span key={i} style={{ width: '36px', height: '36px', backgroundColor: '#f0f0f0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', cursor: 'pointer' }}>{icon}</span>
                ))}
              </div>
              <div style={{ fontSize: '12px', color: '#999' }}>@uva7online</div>
            </div>
          </div>
          <div style={styles.footerBottom}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
              <div style={{ ...styles.logoBox, width: '28px', height: '28px', fontSize: '12px' }}>U7</div>
              <span>© 2024 Uva7 - Todos os direitos reservados</span>
            </div>
            <div>CNPJ: 00.000.000/0001-00 | Joinville - SC | Loja Oficial no Mercado Livre</div>
          </div>
        </div>
      </footer>

      {/* PRODUCT MODAL */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
        />
      )}

      {/* CART */}
      {isCartOpen && (
        <CartSidebar
          items={cartItems}
          onClose={() => setIsCartOpen(false)}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
          total={cartTotal}
        />
      )}
    </div>
  );
}

// ==================== PRODUCT MODAL ====================
function ProductModal({ product, onClose, onAddToCart }: {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, color: string, size: string, quantity: number) => void;
}) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    onAddToCart(product, selectedColor, selectedSize, quantity);
    onClose();
  };

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button style={styles.modalClose} onClick={onClose}>✕</button>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div style={{ position: 'relative' }}>
            <img src={product.image} alt={product.name} style={styles.modalImage} />
            {product.discount > 0 && (
              <div style={{ ...styles.cardDiscount, top: '16px', left: '16px', fontSize: '14px', padding: '4px 10px' }}>
                {product.discount}% OFF
              </div>
            )}
          </div>
          <div style={styles.modalBody}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <div style={{ ...styles.logoBox, width: '24px', height: '24px', fontSize: '10px' }}>U7</div>
              <span style={{ fontSize: '12px', color: '#666' }}>Vendido por <strong>Uva7</strong> | Loja Oficial</span>
            </div>

            <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#333', marginBottom: '12px', lineHeight: 1.4 }}>
              {product.name}
            </h2>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: i < Math.floor(product.rating) ? '#00a650' : '#ddd', fontSize: '14px' }}>★</span>
              ))}
              <span style={{ fontSize: '14px', color: '#666' }}>{product.rating}</span>
              <span style={{ color: '#ccc' }}>|</span>
              <span style={{ fontSize: '14px', color: '#666' }}>{product.sold} vendidos</span>
            </div>

            <div style={{ marginBottom: '20px' }}>
              {product.originalPrice > product.price && (
                <div style={{ fontSize: '14px', color: '#999', textDecoration: 'line-through' }}>
                  {formatPrice(product.originalPrice)}
                </div>
              )}
              <div style={{ fontSize: '32px', color: '#333', fontWeight: 300 }}>
                {formatPrice(product.price)}
              </div>
              <div style={{ fontSize: '14px', color: '#00a650', fontWeight: 500, marginTop: '4px' }}>
                em 4x de {formatPrice(product.price / 4)} sem juros
              </div>
              <div style={{ fontSize: '14px', color: '#666', marginTop: '4px' }}>
                💳 <strong>{formatPrice(product.price * 0.9)}</strong> no Pix (10% off)
              </div>
            </div>

            {product.freeShipping && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', backgroundColor: '#e8f5e9', borderRadius: '8px', marginBottom: '20px' }}>
                <span>🚚</span>
                <span style={{ fontSize: '14px', color: '#2e7d32', fontWeight: 500 }}>Frete Grátis</span>
              </div>
            )}

            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '14px', fontWeight: 500, color: '#333', display: 'block', marginBottom: '8px' }}>
                Cor: <span style={{ color: '#666', fontWeight: 400 }}>{selectedColor}</span>
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {product.colors.map(color => (
                  <button key={color} onClick={() => setSelectedColor(color)} style={styles.selectBtn(selectedColor === color)}>
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '14px', fontWeight: 500, color: '#333', display: 'block', marginBottom: '8px' }}>
                Tamanho: <span style={{ color: '#666', fontWeight: 400 }}>{selectedSize}</span>
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {product.sizes.map(size => (
                  <button key={size} onClick={() => setSelectedSize(size)} style={styles.sizeBtn(selectedSize === size)}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '14px', fontWeight: 500, color: '#333', display: 'block', marginBottom: '8px' }}>
                Quantidade:
              </label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #ddd', background: 'white', cursor: 'pointer', fontSize: '14px' }}
                >−</button>
                <span style={{ fontSize: '16px', fontWeight: 500, width: '24px', textAlign: 'center' }}>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #ddd', background: 'white', cursor: 'pointer', fontSize: '14px' }}>+</button>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button onClick={handleAdd} style={{ ...styles.checkoutBtn, backgroundColor: '#3483FA' }}>
                🛒 Adicionar ao carrinho
              </button>
              <button style={{ ...styles.checkoutBtn, backgroundColor: '#FFE600', color: '#333' }}>
                Comprar agora
              </button>
            </div>

            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #eee', display: 'flex', gap: '16px', fontSize: '12px', color: '#666' }}>
              <span>🛡️ Compra Garantida</span>
              <span>↩️ 30 dias para devolver</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== CART SIDEBAR ====================
function CartSidebar({ items, onClose, onRemove, onUpdateQuantity, total }: {
  items: CartItem[];
  onClose: () => void;
  onRemove: (index: number) => void;
  onUpdateQuantity: (index: number, quantity: number) => void;
  total: number;
}) {
  return (
    <>
      <div style={styles.cartOverlay} onClick={onClose} />
      <div style={styles.cartSidebar}>
        <div style={styles.cartHeader}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '20px' }}>🛒</span>
            <h2 style={{ fontSize: '18px', fontWeight: 700 }}>Meu Carrinho</h2>
          </div>
          <button style={styles.cartClose} onClick={onClose}>✕</button>
        </div>

        <div style={styles.cartItems}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#999' }}>
              <div style={{ fontSize: '56px', marginBottom: '16px' }}>🛍️</div>
              <p style={{ fontSize: '16px', fontWeight: 500 }}>Seu carrinho está vazio</p>
              <p style={{ fontSize: '14px', marginTop: '8px' }}>Adicione produtos para continuar</p>
              <button
                onClick={onClose}
                style={{ marginTop: '20px', backgroundColor: '#3483FA', color: 'white', padding: '10px 24px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 500 }}
              >
                Ver produtos
              </button>
            </div>
          ) : (
            items.map((item, index) => (
              <div key={index} style={styles.cartItem}>
                <img src={item.product.image} alt={item.product.name} style={styles.cartItemImage} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '13px', fontWeight: 500, color: '#333', marginBottom: '4px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {item.product.name}
                  </div>
                  <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px' }}>
                    {item.selectedColor} | Tam: {item.selectedSize}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <button
                        onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                        style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid #ddd', background: 'white', cursor: 'pointer', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >−</button>
                      <span style={{ fontSize: '13px', fontWeight: 500 }}>{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                        style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid #ddd', background: 'white', cursor: 'pointer', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#333' }}>
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(index)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#999', fontSize: '14px', alignSelf: 'flex-start', padding: '4px' }}
                >🗑️</button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div style={styles.cartFooter}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: '#666' }}>Subtotal:</span>
              <span style={{ fontSize: '18px', fontWeight: 700, color: '#333' }}>{formatPrice(total)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ fontSize: '13px', color: '#666' }}>No Pix (10% off):</span>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#00a650' }}>{formatPrice(total * 0.9)}</span>
            </div>
            {total >= 79 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', backgroundColor: '#e8f5e9', borderRadius: '6px', marginBottom: '12px', fontSize: '13px', color: '#2e7d32' }}>
                🚚 Frete grátis para este pedido!
              </div>
            )}
            <button style={styles.checkoutBtn}>Finalizar Compra</button>
            <button style={styles.continueBtn} onClick={onClose}>Continuar comprando</button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
