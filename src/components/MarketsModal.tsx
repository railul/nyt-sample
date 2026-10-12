import React from 'react';

interface MarketsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MarketsModal: React.FC<MarketsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const weatherData = [
    { city: 'Paris', temp: '16°C', condition: 'Sunny / Mild', icon: '☀️' },
    { city: 'New York', temp: '19°C', condition: 'Partly Cloudy', icon: '⛅' },
    { city: 'London', temp: '14°C', condition: 'Light Mist', icon: '🌧️' },
    { city: 'Tokyo', temp: '22°C', condition: 'Clear Skies', icon: '☀️' }
  ];

  const marketData = [
    { index: 'S&P 500', value: '5,815.20', change: '+0.32%', positive: true },
    { index: 'Dow Jones', value: '42,863.86', change: '+0.47%', positive: true },
    { index: 'Nasdaq Composite', value: '18,342.94', change: '+0.18%', positive: true },
    { index: 'Euro Stoxx 50', value: '5,003.11', change: '-0.12%', positive: false },
    { index: 'Nikkei 225', value: '39,605.89', change: '+0.57%', positive: true },
    { index: 'Brent Crude Oil', value: '$78.29', change: '+1.42%', positive: true }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white border border-[#121212] shadow-2xl rounded-sm z-10 p-6 space-y-6">
        <div className="flex items-center justify-between border-b-2 border-[#121212] pb-2">
          <div>
            <h3
              className="text-xl font-bold font-serif text-[#121212]"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Weather &amp; Global Markets
            </h3>
            <p className="text-[11px] text-[#666666]">Live financial &amp; atmospheric telemetry</p>
          </div>
          <button
            onClick={onClose}
            className="text-xs uppercase font-bold text-[#666666] hover:text-[#121212] cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Weather section */}
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#121212] mb-3">
            International Weather
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            {weatherData.map((w) => (
              <div key={w.city} className="p-3 bg-[#fafafa] border border-[#e2e2e2] rounded">
                <span className="text-xl block">{w.icon}</span>
                <span className="text-xs font-bold block text-[#121212] mt-1">{w.city}</span>
                <span className="text-sm font-serif font-bold text-[#121212]">{w.temp}</span>
                <span className="text-[10px] text-[#888888] block">{w.condition}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Markets section */}
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#121212] mb-3">
            Major Indices &amp; Commodities
          </h4>
          <div className="divide-y divide-[#e2e2e2] border border-[#e2e2e2] rounded text-xs">
            {marketData.map((m) => (
              <div key={m.index} className="flex items-center justify-between p-2.5">
                <span className="font-semibold text-[#121212]">{m.index}</span>
                <div className="space-x-3 tabular-nums">
                  <span className="text-[#363636] font-mono">{m.value}</span>
                  <span className={`font-mono font-bold ${m.positive ? 'text-emerald-700' : 'text-red-700'}`}>
                    {m.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-[10px] text-right text-[#888888]">
          Quotes delayed by 15 minutes • New York Times Business Desk
        </div>
      </div>
    </div>
  );
};
