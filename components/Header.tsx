import { Search, ShoppingCart, Scissors } from 'lucide-react';
import Link from 'next/link';

interface HeaderProps {
  cartItemCount: number;
  setIsCartOpen: (isOpen: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Header({
  cartItemCount,
  setIsCartOpen,
  searchQuery,
  setSearchQuery
}: HeaderProps) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Scissors size={28} className="mr-2 text-barber-600" />
            <h1 className="text-2xl font-display font-bold text-barber-900">BarberShop</h1>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-barber-200 focus:outline-none focus:ring-2 focus:ring-barber-500 text-barber-900"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 text-barber-400" size={20} />
            </div>
          </div>

          {/* Cart Button */}
          <button 
            className="relative p-2 text-barber-600 hover:text-barber-800 transition-colors"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart size={24} />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-barber-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>

        {/* Search Bar - Mobile */}
        <div className="mt-4 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-barber-200 focus:outline-none focus:ring-2 focus:ring-barber-500 text-barber-900"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-barber-400" size={20} />
          </div>
        </div>
      </div>
    </header>
  );
}