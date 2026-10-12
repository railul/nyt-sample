import React, { useState } from 'react';
import { Article } from '../types';
import { ARTICLES } from '../data/newsData';

interface TodaysPaperModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (article: Article) => void;
}

export const TodaysPaperModal: React.FC<TodaysPaperModalProps> = ({
  isOpen,
  onClose,
  onSelectArticle
}) => {
  const [activeSection, setActiveSection] = useState<'A' | 'B' | 'C' | 'D'>('A');

  if (!isOpen) return null;

  const sectionMap = {
    A: { title: 'Section A: Main News & International', articles: ARTICLES.slice(0, 5) },
    B: { title: 'Section B: Business Day & Tech', articles: ARTICLES.filter((a) => a.section === 'Business' || a.section === 'Tech') },
    C: { title: 'Section C: Arts & Leisure', articles: ARTICLES.filter((a) => a.section === 'Arts' || a.section === 'Books') },
    D: { title: 'Section D: Editorial & Opinion', articles: ARTICLES.filter((a) => a.section === 'Opinion') }
  };

  const currentData = sectionMap[activeSection];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Broadsheet Container */}
      <div className="relative w-full max-w-3xl bg-[#fafafa] border-2 border-[#121212] shadow-2xl rounded-sm z-10 p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
        <div className="border-b-2 border-[#121212] pb-4 text-center relative">
          <button
            onClick={onClose}
            className="text-xs uppercase font-bold text-[#666666] hover:text-[#121212] absolute right-0 top-0 cursor-pointer"
          >
            ✕ Close
          </button>
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#666666] block">
            THE PRINT EDITION • VOL. CLXXV . . . NO. 60,650
          </span>
          <h2
            className="text-4xl sm:text-5xl font-normal mt-1 text-[#121212]"
            style={{ fontFamily: '"UnifrakturMaguntia", Georgia, serif' }}
          >
            The New York Times
          </h2>
          <p className="text-[11px] font-sans text-[#363636] mt-2">
            Monday, October 13, 2025 • International Edition • Broadsheet Page A1
          </p>
        </div>

        {/* Section Tabs */}
        <div className="flex items-center justify-center space-x-2 border-b border-[#e2e2e2] pb-3 text-xs font-bold uppercase tracking-wider">
          {(['A', 'B', 'C', 'D'] as const).map((sec) => (
            <button
              key={sec}
              onClick={() => setActiveSection(sec)}
              className={`px-3 py-1 rounded cursor-pointer transition-colors ${
                activeSection === sec
                  ? 'bg-[#121212] text-white'
                  : 'bg-white text-[#666666] hover:text-[#121212] border border-[#e2e2e2]'
              }`}
            >
              Section {sec}
            </button>
          ))}
        </div>

        <div>
          <h3
            className="text-lg font-bold font-serif border-b border-[#121212] pb-1 mb-4 text-[#121212]"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            {currentData.title}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {currentData.articles.map((art, idx) => (
              <article
                key={art.id}
                onClick={() => {
                  onSelectArticle(art);
                  onClose();
                }}
                className={`space-y-1.5 cursor-pointer group pb-4 border-b border-[#e2e2e2] ${
                  idx === 0 ? 'sm:col-span-2' : ''
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-sans text-[#888888]">
                  <span className="uppercase font-bold tracking-wider text-red-800">
                    {art.kicker || 'REPORT'}
                  </span>
                  <span>Page {activeSection}{idx + 1}</span>
                </div>
                <h4
                  className="text-lg font-bold leading-snug group-hover:text-[#666666] transition-colors"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {art.headline}
                </h4>
                <p
                  className="text-xs text-[#363636] line-clamp-2"
                  style={{ fontFamily: '"Merriweather", Georgia, serif' }}
                >
                  {art.summary}
                </p>
                <div className="text-[10px] text-[#888888]">
                  {art.byline} • {art.readTime}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="text-center pt-2 border-t border-[#e2e2e2]">
          <button
            onClick={() => window.print()}
            className="text-[11px] font-bold uppercase tracking-wider text-[#326891] hover:underline cursor-pointer"
          >
            🖨️ Print Broadsheet PDF Digest
          </button>
        </div>
      </div>
    </div>
  );
};
