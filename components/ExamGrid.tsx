import React from 'react';
import ExamItem from './ExamItem';
import ExamListItem from './ExamListItem';
import { ExamItemType, CategoryType } from '@/types';

interface ExamGridProps {
  items: ExamItemType[];
  addToCart: (item: ExamItemType) => void;
  activeCategory: string;
  categories: CategoryType[];
  viewMode: 'grid' | 'list';
}

const ExamGrid: React.FC<ExamGridProps> = ({ 
  items, 
  addToCart, 
  activeCategory,
  categories,
  viewMode
}) => {
  // Get the active category object
  const activeCategoryObj = categories.find(cat => cat.id === activeCategory);
  const categoryTitle = activeCategory === 'all' ? 'Todos os Produtos' : activeCategoryObj?.name;
  const categoryDescription = activeCategoryObj?.description || 'Explore todos os nossos produtos e serviços disponíveis.';
  
  // Get popular items for this category
  const popularItems = items.filter(item => item.popular);
  
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">{categoryTitle}</h2>
        <p className="text-gray-600 mt-1">{categoryDescription}</p>
      </div>
      
      {popularItems.length > 0 && activeCategory === 'all' && (
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
            Produtos Populares
          </h3>
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {popularItems.map(item => (
                <ExamItem key={item.id} item={item} addToCart={addToCart} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {popularItems.map(item => (
                <ExamListItem key={item.id} item={item} addToCart={addToCart} />
              ))}
            </div>
          )}
        </div>
      )}
      
      {items.length > 0 ? (
        viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map(item => (
              <ExamItem key={item.id} item={item} addToCart={addToCart} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {items.map(item => (
              <ExamListItem key={item.id} item={item} addToCart={addToCart} />
            ))}
          </div>
        )
      ) : (
        <div className="text-center py-10 bg-white rounded-lg shadow-sm">
          <p className="text-gray-500 text-lg">Nenhum produto encontrado nesta categoria.</p>
        </div>
      )}
    </div>
  );
};

export default ExamGrid;