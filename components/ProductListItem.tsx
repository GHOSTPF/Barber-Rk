import React from 'react';
import { Plus, Star, Info } from 'lucide-react';
import { ProductType } from '../types/index';
import Link from 'next/link';

interface ProductListItemProps {
  item: ProductType;
  addToCart: (item: ProductType) => void;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ item, addToCart }) => {
  const { id, name, description, price, popular } = item;
  
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 border border-barber-100">
      <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-start">
        <div className="flex-grow mb-4 sm:mb-0 sm:mr-6">
          <div className="flex items-center mb-2">
            {popular && (
              <div className="flex items-center text-yellow-500 text-sm mr-2">
                <Star size={16} className="fill-current mr-1" />
                <span className="font-medium">Popular</span>
              </div>
            )}
          </div>
          
          <h3 className="text-lg font-semibold text-barber-900 mb-2">{name}</h3>
          <p className="text-barber-600 text-sm line-clamp-2">{description}</p>
        </div>
        
        <div className="w-full sm:w-auto flex flex-col sm:items-end">
          <div className="flex items-baseline mb-3">
            <span className="text-barber-900 font-bold text-xl">
              R$ {price.toFixed(2)}
            </span>
            <span className="ml-2 text-xs text-barber-500">
              em até 12x
            </span>
          </div>
          
          <div className="flex space-x-2 w-full sm:w-auto">
            <button
              className="flex-1 sm:flex-initial sm:w-32 flex items-center justify-center px-4 py-2 bg-barber-600 text-white rounded-lg hover:bg-barber-700 transition-colors"
              onClick={() => addToCart(item)}
            >
              <Plus size={18} className="mr-1" />
              Adicionar
            </button>
            
            <Link 
              href={`/produto/${id}`}
              className="px-3 py-2 border border-barber-600 text-barber-600 rounded-lg hover:bg-barber-50 transition-colors flex items-center justify-center"
            >
              <Info size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;