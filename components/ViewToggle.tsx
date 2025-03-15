import React from 'react';
import { LayoutGrid, List } from 'lucide-react';

interface ViewToggleProps {
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ viewMode, setViewMode }) => {
  return (
    <div className="inline-flex bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <button
        className={`flex items-center justify-center p-2 ${
          viewMode === 'grid' 
            ? 'bg-primary-100 text-primary-700' 
            : 'bg-white text-gray-500 hover:bg-gray-50'
        }`}
        onClick={() => setViewMode('grid')}
        aria-label="Grid view"
      >
        <LayoutGrid size={20} />
      </button>
      <button
        className={`flex items-center justify-center p-2 ${
          viewMode === 'list' 
            ? 'bg-primary-100 text-primary-700' 
            : 'bg-white text-gray-500 hover:bg-gray-50'
        }`}
        onClick={() => setViewMode('list')}
        aria-label="List view"
      >
        <List size={20} />
      </button>
    </div>
  );
};

export default ViewToggle;