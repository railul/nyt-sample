import React from 'react';
import { Category } from '../types';
import { NAVIGATION_CATEGORIES } from '../data/newsData';

interface NavigationProps {
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  return (
    <nav aria-label="Main Navigation" className="border-double-top border-double-bottom py-1.5 my-2 max-w-[1280px] mx-auto px-5">
      <ul className="flex items-center justify-between text-[11px] font-sans tracking-tight text-[#121212] overflow-x-auto no-scrollbar whitespace-nowrap gap-3">
        {NAVIGATION_CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <li key={cat}>
              <button
                onClick={() => onSelectCategory(cat)}
                className={`hover:underline font-semibold cursor-pointer transition-colors py-0.5 ${
                  isActive ? 'underline underline-offset-4 text-[#326891] font-bold' : 'text-[#121212]'
                }`}
              >
                {cat}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
