'use client';

import { useState } from 'react';
import Header from '../components/Header';
import CategorySection from '../components/CategorySection';
import ProductGrid from '../components/ProductGrid';
import Cart from '../components/Cart';
import ViewToggle from '../components/ViewToggle';
import Hero from '../components/Hero';
import Footer from 'components/Footer';
import CarrosselMarcas from 'components/Brands';
import BenefitsCarousel from '../components/BenefitsCarousel';
import { products, categories } from '../data/items';
import { CartItemType,ProductType } from '../types'; // Ajuste o caminho conforme necessário


export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredItems = products.filter(item => 
    (activeCategory === 'all' || item.category === activeCategory) && 
    (searchQuery === '' || item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
     item.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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
    <div className="min-h-screen bg-barber-50">
      <Header 
        cartItemCount={cartItemCount}
        setIsCartOpen={setIsCartOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <Hero />
      <BenefitsCarousel />
      <main className="container mx-auto px-4 py-8 pb-24">
        <CategorySection 
          categories={categories} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />

        <div className="mb-6 flex justify-end">
          <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />
        </div>

        <ProductGrid 
          items={filteredItems} 
          addToCart={addToCart} 
          activeCategory={activeCategory}
          categories={categories}
          viewMode={viewMode}
        />
      </main>

      <Cart 
        isOpen={isCartOpen} 
        setIsOpen={setIsCartOpen} 
        cart={cart} 
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        total={cartTotal}
      />
      <CarrosselMarcas />
      <Footer />
    </div>
  );
}