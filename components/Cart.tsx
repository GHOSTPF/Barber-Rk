import React from 'react';
import { X, Plus, Minus, ShoppingBag, CreditCard } from 'lucide-react';
import { CartItemType } from '@/types';

interface CartProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  cart: CartItemType[];
  addToCart: (item: CartItemType) => void;
  removeFromCart: (id: number) => void;
  total: number;
}

const Cart: React.FC<CartProps> = ({ 
  isOpen, 
  setIsOpen, 
  cart, 
  addToCart, 
  removeFromCart, 
  total 
}) => {
  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />
      
      {/* Cart Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-30 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Cart Header */}
          <div className="flex items-center justify-between p-4 border-b bg-primary-600 text-barber-900">
            <h2 className="text-xl font-semibold flex items-center">
              <ShoppingBag size={20} className="mr-2" />
              Seu Carrinho
            </h2>
            <button 
              className="text-barber-900 hover:text-primary-200"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4 cart-scrollbar">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <ShoppingBag size={64} className="mb-4 opacity-30" />
                <p className="text-lg font-medium">Seu carrinho está vazio</p>
                <p className="text-sm mt-2 text-center">Adicione produtos para começar seu pedido</p>
              </div>
            ) : (
              <ul className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <li key={item.id} className="py-4">
                    <div className="flex items-center">
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                        <p className="text-sm text-primary-600 font-semibold">R$ {item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center">
                        <button 
                          className="p-1 text-gray-500 hover:text-primary-600 bg-gray-100 rounded-l-md hover:bg-gray-200 transition-colors"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-3 py-1 text-gray-700 font-medium">{item.quantity}</span>
                        <button 
                          className="p-1 text-gray-500 hover:text-primary-600 bg-gray-100 rounded-r-md hover:bg-gray-200 transition-colors"
                          onClick={() => addToCart(item)}
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {/* Cart Footer */}
          <div className="p-4 border-t bg-gray-50">
            <div className="flex justify-between mb-4">
              <span className="text-lg font-semibold text-barber-900">Total</span>
              <span className="text-lg font-bold text-barber-900">R$ {total.toFixed(2)}</span>
            </div>
            
            <div className="space-y-2">
              <button 
                className="w-full py-3 bg-primary-600 text-barber-900 rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center"
                disabled={cart.length === 0}
              >
                <CreditCard size={18} className="mr-2" />
                {cart.length === 0 ? 'Carrinho Vazio' : 'Finalizar Compra'}
              </button>
              
              <button 
                className="w-full py-2 border border-barber-900 text-barber-900 rounded-lg font-medium hover:bg-primary-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Continuar Comprando
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;