import React, { useState } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (email: string) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalEmail = email.trim() || 'reader@nytimes.com';
    onLoginSuccess(finalEmail);
    onClose();
  };

  const handleQuickDemoLogin = () => {
    onLoginSuccess('royongyt123@gmail.com');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-sm bg-white border border-[#121212] shadow-2xl rounded-sm z-10 p-6 space-y-6">
        <div className="flex items-center justify-between border-b border-[#e2e2e2] pb-3">
          <div>
            <h2
              className="text-2xl font-bold font-serif"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Log In
            </h2>
            <p className="text-xs text-[#666666]">Access your digital subscription</p>
          </div>
          <button
            onClick={onClose}
            className="text-xs uppercase font-bold text-[#666666] hover:text-[#121212] cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#121212] mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="e.g. name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2.5 text-sm border border-[#e2e2e2] rounded focus:outline-none focus:border-[#121212]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#121212] mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2.5 text-sm border border-[#e2e2e2] rounded focus:outline-none focus:border-[#121212]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#121212] hover:bg-neutral-800 text-white text-xs font-bold py-3 rounded uppercase tracking-wider transition-colors cursor-pointer"
          >
            Log In
          </button>
        </form>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#e2e2e2]" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-[#888888] text-[10px]">Or</span>
          </div>
        </div>

        <button
          onClick={handleQuickDemoLogin}
          type="button"
          className="w-full border border-[#e2e2e2] hover:border-[#121212] py-2.5 px-3 rounded text-xs font-semibold flex items-center justify-center space-x-2 text-[#121212] cursor-pointer transition-colors"
        >
          <span>Continue as royongyt123@gmail.com</span>
        </button>
      </div>
    </div>
  );
};
