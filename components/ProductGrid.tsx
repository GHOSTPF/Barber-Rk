import React from 'react';
import ProductItem from './ProductItem';
import ProductListItem from './ProductListItem';
import { ProductType, CategoryType } from '../types/index';
import { Star } from 'lucide-react';

interface ProductGridProps {
  items: ProductType[];
  addToCart: (item: ProductType) => void;
  activeCategory: string;
  categories: CategoryType[];
  viewMode: 'grid' | 'list';
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  items, 
  addToCart, 
  activeCategory,
  categories,
  viewMode
}) => {
  // Get the active category object
  const activeCategoryObj = categories.find(cat => cat.id === activeCategory);
  const categoryTitle = activeCategory === 'all' ? 'Todos os Produtos' : activeCategoryObj?.name;
  const categoryDescription = activeCategoryObj?.description || 'Explore nossa seleção completa de produtos para cuidados masculinos.';
  
  // Get popular items for this category
  const popularItems = items.filter(item => item.popular);
  
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-display font-bold text-barber-900">{categoryTitle}</h2>
        <p className="text-barber-600 mt-2">{categoryDescription}</p>
      </div>
      
      {popularItems.length > 0 && activeCategory === 'all' && (
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Star size={24} className="text-yellow-500 mr-2" />
            <h3 className="text-2xl font-display font-bold text-barber-800">
              Produtos em Destaque
            </h3>
          </div>
          
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {popularItems.map(item => (
                <ProductItem key={item.id} item={item} addToCart={addToCart} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {popularItems.map(item => (
                <ProductListItem key={item.id} item={item} addToCart={addToCart} />
              ))}
            </div>
          )}
        </div>
      )}
      
      {items.length > 0 ? (
        viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map(item => (
              <ProductItem key={item.id} item={item} addToCart={addToCart} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {items.map(item => (
              <ProductListItem key={item.id} item={item} addToCart={addToCart} />
            ))}
          </div>
        )
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-barber-100">
          <p className="text-barber-600 text-lg">
            Nenhum produto encontrado nesta categoria.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;