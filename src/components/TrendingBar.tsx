import React from 'react';
import { TRENDING_TOPICS } from '../data/newsData';

interface TrendingBarProps {
  onSelectTopic: (topic: string) => void;
}

export const TrendingBar: React.FC<TrendingBarProps> = ({ onSelectTopic }) => {
  return (
    <div className="max-w-[1280px] mx-auto px-5 mb-6">
      <div className="flex items-center space-x-3 text-[11px] py-1 border-b border-[#e2e2e2] text-[#363636] overflow-x-auto no-scrollbar whitespace-nowrap">
        <span className="font-bold uppercase tracking-wider text-[10px] text-red-700 flex items-center gap-1.5 shrink-0 select-none">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse inline-block" />
          TRENDING
        </span>
        <span className="text-[#e2e2e2] select-none">|</span>
        {TRENDING_TOPICS.map((topic, idx) => (
          <React.Fragment key={topic}>
            {idx > 0 && <span className="select-none text-[#888888]">•</span>}
            <button
              onClick={() => onSelectTopic(topic)}
              className="hover:underline hover:text-[#121212] transition-colors cursor-pointer text-[#363636] font-medium shrink-0"
            >
              {topic}
            </button>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
