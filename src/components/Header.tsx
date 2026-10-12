import React from 'react';
import { Edition } from '../types';

interface HeaderProps {
  currentEdition: Edition;
  onSelectEdition: (edition: Edition) => void;
  onOpenSections: () => void;
  onOpenSearch: () => void;
  onOpenSubscribe: () => void;
  onOpenLogin: () => void;
  onOpenMarkets: () => void;
  onOpenTodaysPaper: () => void;
  onOpenSaved: () => void;
  savedCount: number;
  userEmail: string | null;
  onLogout: () => void;
  onGoHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentEdition,
  onSelectEdition,
  onOpenSections,
  onOpenSearch,
  onOpenSubscribe,
  onOpenLogin,
  onOpenMarkets,
  onOpenTodaysPaper,
  onOpenSaved,
  savedCount,
  userEmail,
  onLogout,
  onGoHome
}) => {
  const editions: Edition[] = ['U.S.', 'INTERNATIONAL', 'CANADA', 'ESPAÑOL', '中文'];

  return (
    <header className="w-full max-w-[1280px] mx-auto px-5" data-purpose="site-header">
      {/* Top utility bar */}
      <div className="flex items-center justify-between text-[11px] font-sans py-2 border-b border-[#e2e2e2] text-[#363636]">
        {/* Left side controls: Hamburger & Search, Editions */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onOpenSections}
            aria-label="Open Sections Menu"
            className="flex items-center space-x-1.5 hover:text-black font-semibold uppercase tracking-wider text-[10px] cursor-pointer transition-colors"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
            <span className="tracking-widest">SECTIONS</span>
          </button>

          <button
            onClick={onOpenSearch}
            aria-label="Search"
            className="flex items-center space-x-1 hover:text-black uppercase tracking-wider text-[10px] pl-2 border-l border-[#e2e2e2] cursor-pointer transition-colors"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
            <span className="tracking-widest">SEARCH</span>
          </button>

          {/* Edition Switcher Links */}
          <nav aria-label="Language Editions" className="flex items-center space-x-2 pl-3 text-[11px] text-[#666666] font-medium">
            {editions.map((edition, idx) => {
              const isSelected = currentEdition === edition;
              return (
                <React.Fragment key={edition}>
                  {idx > 0 && <span className="select-none">•</span>}
                  <button
                    onClick={() => onSelectEdition(edition)}
                    className={`hover:underline cursor-pointer transition-colors ${
                      isSelected
                        ? 'text-[#121212] font-bold underline underline-offset-2'
                        : 'hover:text-[#121212]'
                    }`}
                  >
                    {edition}
                  </button>
                </React.Fragment>
              );
            })}
          </nav>
        </div>

        {/* Right side actions: Saved, Subscribe & Log In */}
        <div className="flex items-center space-x-3">
          {savedCount > 0 && (
            <button
              onClick={onOpenSaved}
              className="text-[11px] font-semibold text-[#363636] hover:text-[#121212] flex items-center space-x-1 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 fill-current text-[#326891]" viewBox="0 0 24 24">
                <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
              </svg>
              <span>SAVED ({savedCount})</span>
            </button>
          )}

          {userEmail ? (
            <div className="flex items-center space-x-2 text-[11px]">
              <span className="text-[#326891] font-bold uppercase tracking-wider">SUBSCRIBER</span>
              <span className="text-[#666666] truncate max-w-[140px]">{userEmail}</span>
              <button
                onClick={onLogout}
                className="text-[10px] text-[#888888] hover:text-[#121212] underline ml-1 cursor-pointer"
              >
                Log Out
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={onOpenSubscribe}
                className="bg-[#567b95] hover:bg-[#254e6d] text-white text-[11px] font-bold py-1.5 px-3 rounded uppercase tracking-wider transition-colors cursor-pointer"
              >
                SUBSCRIBE FOR 0,50 €/WEEK
              </button>
              <button
                onClick={onOpenLogin}
                className="border border-[#e2e2e2] hover:border-[#121212] text-[#121212] text-[11px] font-semibold py-1.5 px-3 rounded uppercase tracking-wider transition-colors cursor-pointer"
              >
                LOG IN
              </button>
            </>
          )}
        </div>
      </div>

      {/* Masthead Area */}
      <div className="grid grid-cols-12 items-baseline pt-4 pb-2">
        {/* Left: Date */}
        <div className="col-span-3 text-[11px] font-medium text-[#363636]">
          <p className="font-bold text-[12px] text-[#121212]">Monday, October 13, 2025</p>
          <button
            onClick={onOpenTodaysPaper}
            className="text-[11px] text-[#666666] hover:text-[#121212] hover:underline mt-0.5 text-left cursor-pointer transition-colors block"
          >
            Today’s Paper
          </button>
        </div>

        {/* Center: NYT Historic Masthead */}
        <div className="col-span-6 text-center">
          <button
            onClick={onGoHome}
            aria-label="The New York Times Logo"
            className="inline-block cursor-pointer focus:outline-none"
          >
            <h1
              className="text-[62px] tracking-normal leading-none font-normal text-[#121212] select-none scale-y-110 transform"
              style={{ fontFamily: '"UnifrakturMaguntia", Georgia, serif' }}
            >
              The New York Times
            </h1>
          </button>
        </div>

        {/* Right: Weather / Markets mini widget */}
        <div className="col-span-3 text-right text-[11px] text-[#666666] flex flex-col items-end">
          <button
            onClick={onOpenMarkets}
            className="flex items-center space-x-1.5 font-semibold text-[#121212] hover:text-[#326891] cursor-pointer transition-colors"
            title="Click to view full weather and markets snapshot"
          >
            <span>Paris 16°C</span>
            <svg className="w-3.5 h-3.5 text-amber-500 fill-current inline" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
            </svg>
          </button>
          <button
            onClick={onOpenMarkets}
            className="text-[10px] mt-0.5 hover:text-[#326891] cursor-pointer transition-colors"
          >
            S&amp;P 500 <span className="text-emerald-700 font-medium">+0.32%</span>
          </button>
        </div>
      </div>
    </header>
  );
};
