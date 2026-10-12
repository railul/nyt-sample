import React from 'react';
import { Category } from '../types';

interface FooterProps {
  onSelectCategory: (category: Category) => void;
  onGoHome: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onGoHome }) => {
  const quickLinks: Category[] = ['World', 'U.S.', 'Politics', 'Business', 'Tech', 'Opinion'];

  return (
    <footer
      className="w-full border-t border-double-top max-w-[1280px] mx-auto px-5 pt-6 pb-12 text-[#363636] text-[11px] font-sans"
      data-purpose="site-footer"
    >
      {/* Footer Masthead and Navigation Matrix */}
      <div className="flex flex-col sm:flex-row items-center justify-between pb-4 border-b border-[#e2e2e2] gap-4">
        <button
          onClick={onGoHome}
          className="text-[28px] text-[#121212] select-none text-left cursor-pointer"
          style={{ fontFamily: '"UnifrakturMaguntia", Georgia, serif' }}
        >
          The New York Times
        </button>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] font-semibold text-[#121212]">
          <button onClick={onGoHome} className="hover:underline cursor-pointer">
            Home
          </button>
          {quickLinks.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className="hover:underline cursor-pointer"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Legal and Links Row */}
      <div className="pt-6 flex flex-wrap justify-between items-center text-[#666666] gap-4">
        <nav aria-label="Footer links" className="flex flex-wrap gap-x-4 gap-y-2">
          <span>© 2025 The New York Times Company</span>
          <a className="hover:underline" href="#">NYTCo</a>
          <a className="hover:underline" href="#">Contact Us</a>
          <a className="hover:underline" href="#">Accessibility</a>
          <a className="hover:underline" href="#">Work with us</a>
          <a className="hover:underline" href="#">Advertise</a>
          <a className="hover:underline" href="#">T Brand Studio</a>
          <a className="hover:underline" href="#">Your Ad Choices</a>
          <a className="hover:underline" href="#">Privacy Policy</a>
          <a className="hover:underline" href="#">Terms of Service</a>
          <a className="hover:underline" href="#">Terms of Sale</a>
          <a className="hover:underline" href="#">Site Map</a>
          <a className="hover:underline" href="#">Subscriptions</a>
        </nav>
        <div className="text-right">
          <span>International Edition</span>
        </div>
      </div>
    </footer>
  );
};
