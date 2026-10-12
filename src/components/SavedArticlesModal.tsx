import React from 'react';
import { Article } from '../types';
import { ARTICLES } from '../data/newsData';

interface SavedArticlesModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedIds: string[];
  onSelectArticle: (article: Article) => void;
  onRemoveSaved: (id: string) => void;
}

export const SavedArticlesModal: React.FC<SavedArticlesModalProps> = ({
  isOpen,
  onClose,
  savedIds,
  onSelectArticle,
  onRemoveSaved
}) => {
  if (!isOpen) return null;

  const savedArticles = ARTICLES.filter((a) => savedIds.includes(a.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white border border-[#121212] shadow-2xl rounded-sm z-10 p-6 space-y-4">
        <div className="flex items-center justify-between border-b-2 border-[#121212] pb-2">
          <div>
            <h3
              className="text-xl font-bold font-serif text-[#121212]"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Saved For Later
            </h3>
            <p className="text-[11px] text-[#666666]">
              {savedArticles.length} article{savedArticles.length === 1 ? '' : 's'} in your personal archive
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-xs uppercase font-bold text-[#666666] hover:text-[#121212] cursor-pointer"
          >
            ✕
          </button>
        </div>

        {savedArticles.length === 0 ? (
          <div className="py-12 text-center text-[#666666] space-y-2">
            <svg className="w-8 h-8 mx-auto text-neutral-400 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
            </svg>
            <p className="font-serif text-sm">No articles saved yet.</p>
            <p className="text-[11px] text-[#888888]">
              Click the bookmark icon on any article to save it to your reading list.
            </p>
          </div>
        ) : (
          <div className="max-h-96 overflow-y-auto divide-y divide-[#e2e2e2]">
            {savedArticles.map((article) => (
              <div key={article.id} className="py-3 flex items-start justify-between space-x-3">
                <div
                  onClick={() => {
                    onSelectArticle(article);
                    onClose();
                  }}
                  className="cursor-pointer group flex-1"
                >
                  {article.kicker && (
                    <span className="text-[9px] uppercase font-bold tracking-widest text-red-800 block">
                      {article.kicker}
                    </span>
                  )}
                  <h4
                    className="text-[15px] font-bold leading-snug group-hover:text-[#666666] transition-colors"
                    style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                  >
                    {article.headline}
                  </h4>
                  <p className="text-[11px] text-[#888888] mt-0.5">
                    {article.byline} • {article.readTime}
                  </p>
                </div>

                <button
                  onClick={() => onRemoveSaved(article.id)}
                  className="text-xs text-[#888888] hover:text-red-700 p-1 cursor-pointer"
                  title="Remove from saved"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
