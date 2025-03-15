'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { examItems } from '../../../data/items';
import Header from '../../../components/Header';
import { ShoppingCart, ArrowLeft, Star, Clock, FileText, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { products, categories } from '../../../data/items';
import Cart from '../../../components/Cart';
import { CartItemType,ExamItemType } from '@/types';
import { ProductType } from '../../../types';

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [product, setProduct] = useState<ExamItemType | null>(null);
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  

  useEffect(() => {
    const productId = parseInt(params.id);
    const foundProduct = examItems.find(item => item.id === productId);
    
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      router.push('/');
    }
  }, [params.id, router]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  const addToCart = (item: ProductType) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 } 
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id: number) => {
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem && existingItem.quantity > 1) {
      setCart(cart.map(item => 
        item.id === id 
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      ));
    } else {
      setCart(cart.filter(item => item.id !== id));
    }
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        cartItemCount={cartItemCount}
        setIsCartOpen={setIsCartOpen}
        searchQuery=""
        setSearchQuery={() => {}}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-primary-700 hover:text-primary-800">
            <ArrowLeft size={18} className="mr-1" />
            Voltar para os produtos
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-2">
                {product.popular && (
                  <div className="flex items-center text-yellow-500 text-sm mr-3">
                    <Star size={16} className="fill-current mr-1" />
                    <span className="font-medium">Popular</span>
                  </div>
                )}
                <div className="text-sm text-gray-500">
                  Código: #{product.id.toString().padStart(4, '0')}
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-barber-900 mb-4">{product.name}</h1>
              
              <div className="mb-6">
                <p className="text-barber-900">{product.description}</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg text-barber-900 font-semibold mb-3">Informações do Produto</h3>
                {/* <div className="space-y-3">
                  <div className="flex items-start">
                    <Clock size={20} className="text-barber-900 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-barber-900">Tempo de Entrega</p>
                      <p className="text-sm text-black">Resultados em até 48 horas após a coleta</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FileText size={20} className="text-barber-900 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Documentação Necessária</p>
                      <p className="text-sm text-black">Documento de identidade com foto e cartão do convênio (se aplicável)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertCircle size={20} className="text-barber-900 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-barber-900">Preparo</p>
                      <p className="text-sm text-black">Jejum de 8 horas. Evitar consumo de álcool nas 24h anteriores.</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="mb-4">
                  <p className="text-sm text-barber-900">Preço</p>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-primary-700">
                      R$ {product.price.toFixed(2)}
                    </span>
                    <span className="ml-2 text-sm text-barber-900">à vista</span>
                  </div>
                  <p className="text-sm text-barber-900 mt-1">
                    ou em até 12x de R$ {(product.price / 12).toFixed(2)}
                  </p>
                </div>
                
                <button
                  onClick={() => addToCart(product)}
                  
                  className="w-full py-3 bg-barber-500 text-white rounded-lg font-medium hover:bg-barber-600 transition-colors flex items-center justify-center"
                >
                  <ShoppingCart size={18} className="mr-2 text-white" />
                  Adicionar ao Carrinho
                </button>
              </div>
              
              <div className="bg-barber-50 p-5 rounded-lg border border-barber-900">
                <h3 className="font-semibold text-barber-900 mb-2">Informações Importantes</h3>
                <p className="text-sm text-barber-900">
                  Este exame requer agendamento prévio. Após a compra, nossa equipe entrará em contato para agendar a coleta ou o procedimento.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-barber-900 mb-4">Produtos Relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {examItems
              .filter(item => item.category === product.category && item.id !== product.id)
              .slice(0, 3)
              .map(item => (
                <Link href={`/produto/${item.id}`} key={item.id} className="block">
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 border border-gray-100 p-5">
                    <h3 className="text-lg font-semibold text-black mb-2">{item.name}</h3>
                    <p className="text-barber-900 text-sm mb-3 line-clamp-2">{item.description}</p>
                    <span className="text-barber-600 font-bold">
                      R$ {item.price.toFixed(2)}
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>
      <Cart 
        isOpen={isCartOpen} 
        setIsOpen={setIsCartOpen} 
        cart={cart} 
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        total={cartTotal}
      />
    </div>
  );
}