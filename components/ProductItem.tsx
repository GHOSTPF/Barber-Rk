import React from 'react';
import { Plus, Star, Info } from 'lucide-react';
import { ProductType } from '../types/index';
import Link from 'next/link';
import Image from 'next/image'; // Importe o componente Image do Next.js

interface ProductItemProps {
  item: ProductType;
  addToCart: (item: ProductType) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ item, addToCart }) => {
  const { id, name, description, price, popular, image } = item;
  
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 border border-barber-100 flex flex-col h-full group">
      {/* Container da imagem */}
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        {popular && (
          <div className="flex items-center text-yellow-500 text-sm mb-3">
            <Star size={16} className="fill-current mr-1" />
            <span className="font-medium">Popular</span>
          </div>
        )}
        
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-barber-900 group-hover:text-barber-700 transition-colors">
            {name}
          </h3>
        </div>
        
        <p className="text-barber-600 text-sm flex-grow line-clamp-2">{description}</p>
        
        <div className="mt-4 pt-4 border-t border-barber-100">
          <div className="flex items-baseline mb-3">
            <span className="text-barber-900 font-bold text-xl">
              R$ {price.toFixed(2)}
            </span>
            <span className="ml-2 text-xs text-barber-500">
              em até 12x
            </span>
          </div>
          
          <div className="flex space-x-2">
            <button
              className="flex-1 flex items-center justify-center px-4 py-2 bg-barber-600 text-white rounded-lg hover:bg-barber-700 transition-colors"
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

export default ProductItem;