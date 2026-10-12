import React, { useState } from 'react';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribeSuccess: (email: string) => void;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({
  isOpen,
  onClose,
  onSubscribeSuccess
}) => {
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'all-access'>('basic');
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalEmail = email.trim() || 'subscriber@nytimes.com';
    onSubscribeSuccess(finalEmail);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-white border border-[#121212] shadow-2xl rounded-sm z-10 p-6 space-y-6">
        <div className="flex items-center justify-between border-b border-[#e2e2e2] pb-3">
          <div className="text-center w-full">
            <h2
              className="text-2xl font-bold font-serif"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Independent Journalism.
            </h2>
            <p className="text-xs text-[#666666] mt-0.5">Support truth and fearless reporting.</p>
          </div>
          <button
            onClick={onClose}
            className="text-xs uppercase font-bold text-[#666666] hover:text-[#121212] absolute right-4 top-4 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Plan options */}
        <div className="space-y-3">
          <label
            onClick={() => setSelectedPlan('basic')}
            className={`block p-4 border rounded cursor-pointer transition-colors ${
              selectedPlan === 'basic'
                ? 'border-[#121212] bg-[#fafafa] shadow-xs'
                : 'border-[#e2e2e2] hover:border-neutral-400'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-[#121212]">International Introductory</span>
              <span className="bg-[#567b95] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                SPECIAL OFFER
              </span>
            </div>
            <p className="text-xl font-bold font-serif text-[#121212] mt-1">
              0,50 € <span className="text-xs font-sans font-normal text-[#666666]">/ week</span>
            </p>
            <p className="text-xs text-[#666666] mt-1">
              Unlimited access to nytimes.com and The New York Times app for 1 year.
            </p>
          </label>

          <label
            onClick={() => setSelectedPlan('all-access')}
            className={`block p-4 border rounded cursor-pointer transition-colors ${
              selectedPlan === 'all-access'
                ? 'border-[#121212] bg-[#fafafa] shadow-xs'
                : 'border-[#e2e2e2] hover:border-neutral-400'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-[#121212]">All Access Bundle</span>
              <span className="text-[10px] text-[#666666] font-semibold">ALL PRODUCTS</span>
            </div>
            <p className="text-xl font-bold font-serif text-[#121212] mt-1">
              2,00 € <span className="text-xs font-sans font-normal text-[#666666]">/ week</span>
            </p>
            <p className="text-xs text-[#666666] mt-1">
              Includes News, Games (Wordle &amp; Strands), NYT Cooking, Wirecutter, and The Athletic.
            </p>
          </label>
        </div>

        {/* Subscribe Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#121212] mb-1">
              Your Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2.5 text-sm border border-[#e2e2e2] rounded focus:outline-none focus:border-[#121212]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#567b95] hover:bg-[#254e6d] text-white text-xs font-bold py-3 rounded uppercase tracking-wider transition-colors cursor-pointer"
          >
            Activate Subscription (Instant Demo)
          </button>
        </form>

        <p className="text-[10px] text-center text-[#888888]">
          Cancel anytime. You will receive an email confirmation upon activation.
        </p>
      </div>
    </div>
  );
};
