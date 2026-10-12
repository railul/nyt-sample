import React, { useState, useEffect, useRef } from 'react';
import { Article } from '../types';
import { ARTICLES } from '../data/newsData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (article: Article) => void;
  initialQuery?: string;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectArticle,
  initialQuery = ''
}) => {
  const [query, setQuery] = useState(initialQuery);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery(initialQuery);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen, initialQuery]);

  if (!isOpen) return null;

  const normalized = query.trim().toLowerCase();
  const results = normalized
    ? ARTICLES.filter(
        (a) =>
          a.headline.toLowerCase().includes(normalized) ||
          a.summary.toLowerCase().includes(normalized) ||
          a.byline.toLowerCase().includes(normalized) ||
          (a.kicker && a.kicker.toLowerCase().includes(normalized)) ||
          a.paragraphs.some((p) => p.toLowerCase().includes(normalized))
      )
    : [];

  const quickPicks = ['Middle East', 'Aviation', 'Tariffs', 'Venice Biennale', 'Energy', 'Architecture'];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white border border-[#121212] shadow-2xl rounded-sm z-10 p-6 space-y-6">
        {/* Top input bar */}
        <div className="flex items-center justify-between border-b-2 border-[#121212] pb-3">
          <div className="flex items-center space-x-2 flex-1">
            <svg className="w-5 h-5 text-[#666666] fill-current" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search news, topics, writers, or archival reports..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full text-base sm:text-lg font-serif focus:outline-none placeholder:text-neutral-400 placeholder:italic"
            />
          </div>

          <button
            onClick={onClose}
            className="text-xs uppercase font-bold text-[#666666] hover:text-[#121212] ml-3 cursor-pointer"
          >
            Esc / Close
          </button>
        </div>

        {/* Quick query chips */}
        <div className="flex items-center flex-wrap gap-2 text-xs">
          <span className="text-[#888888] font-bold uppercase tracking-wider text-[10px]">Trending:</span>
          {quickPicks.map((pick) => (
            <button
              key={pick}
              onClick={() => setQuery(pick)}
              className="px-2.5 py-1 bg-neutral-100 hover:bg-neutral-200 text-[#363636] rounded-full text-xs cursor-pointer transition-colors"
            >
              {pick}
            </button>
          ))}
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto space-y-4 divide-y divide-[#e2e2e2]">
          {normalized && results.length === 0 && (
            <div className="py-8 text-center text-[#666666]">
              <p className="font-serif">No articles matched “{query}”.</p>
              <p className="text-xs text-[#888888] mt-1">Try another search term or check spelling.</p>
            </div>
          )}

          {results.map((article) => (
            <article
              key={article.id}
              onClick={() => {
                onSelectArticle(article);
                onClose();
              }}
              className="pt-3 first:pt-0 cursor-pointer group space-y-1"
            >
              {article.kicker && (
                <span className="text-[10px] uppercase font-bold tracking-widest text-red-800">
                  {article.kicker}
                </span>
              )}
              <h4
                className="text-[16px] font-bold leading-snug group-hover:text-[#666666] transition-colors"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                {article.headline}
              </h4>
              <p
                className="text-[12px] text-[#363636] line-clamp-2"
                style={{ fontFamily: '"Merriweather", Georgia, serif' }}
              >
                {article.summary}
              </p>
              <div className="text-[10px] text-[#888888]">
                {article.byline} • {article.date} • {article.readTime}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
