import React from 'react';
import { Category } from '../types';
import { ALL_SECTIONS_LIST } from '../data/newsData';

interface SectionsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (category: Category) => void;
}

export const SectionsDrawer: React.FC<SectionsDrawerProps> = ({
  isOpen,
  onClose,
  onSelectCategory
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer content */}
      <div className="absolute inset-y-0 left-0 max-w-full flex">
        <aside
          aria-label="New York Times Sections Menu"
          className="w-screen max-w-md bg-white border-r border-[#e2e2e2] shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-200"
        >
          {/* Header */}
          <div className="p-4 border-b border-[#e2e2e2] flex items-center justify-between">
            <h2
              className="text-2xl font-bold font-serif"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Sections
            </h2>
            <button
              onClick={onClose}
              className="p-1 text-[#666666] hover:text-[#121212] cursor-pointer"
              aria-label="Close sections"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>

          {/* Section columns */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {ALL_SECTIONS_LIST.map((group) => (
              <div key={group.heading} className="border-b border-[#e2e2e2] pb-4 last:border-none">
                <h3 className="text-[11px] font-black uppercase tracking-wider text-[#121212] mb-3">
                  {group.heading}
                </h3>
                <ul className="grid grid-cols-2 gap-2 text-[13px] font-sans">
                  {group.items.map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => {
                          onSelectCategory(item as Category);
                          onClose();
                        }}
                        className="text-left text-[#363636] hover:text-[#121212] hover:underline cursor-pointer py-0.5"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer inside drawer */}
          <div className="p-4 bg-[#fafafa] border-t border-[#e2e2e2] text-xs text-[#666666] flex justify-between items-center">
            <span className="font-serif italic">The New York Times</span>
            <span className="text-[11px]">International Edition</span>
          </div>
        </aside>
      </div>
    </div>
  );
};
