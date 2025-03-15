import React from 'react';
import { 
  SprayCan, 
  Scissors, 
  MemoryStick, 
  ClipboardCheck, 
  Activity,
  LayoutGrid
} from 'lucide-react';
import { CategoryType } from '@/types';

interface CategorySectionProps {
  categories: CategoryType[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({ 
  categories, 
  activeCategory, 
  setActiveCategory 
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'spray':
        return <SprayCan size={20} />;
      case 'scissors':
        return <Scissors size={20} />;
      case 'razor':
        return <MemoryStick size={20} />;
      case 'clipboard-check':
        return <ClipboardCheck size={20} />;
      case 'activity':
        return <Activity size={20} />;
      default:
        return <LayoutGrid size={20} />;
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Categorias</h2>
      
      <div className="bg-white rounded-lg shadow-sm p-2 mb-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
          <button
            className={`flex flex-col items-center p-3 rounded-lg transition-all ${
              activeCategory === 'all'
                ? 'bg-primary-100 text-primary-800'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setActiveCategory('all')}
          >
            <LayoutGrid size={24} className={`mb-2 ${activeCategory === 'all' ? 'text-primary-600' : 'text-gray-500'}`} />
            <span className="font-medium text-sm">Todos</span>
          </button>
          
          {categories.map((category) => (
            <button
              key={category.id}
              className={`flex flex-col items-center p-3 rounded-lg transition-all ${
                activeCategory === category.id
                  ? 'bg-primary-100 text-primary-800'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className={`mb-2 ${activeCategory === category.id ? 'text-primary-600' : 'text-gray-500'}`}>
                {getIcon(category.icon)}
              </span>
              <span className="font-medium text-center text-xs">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;