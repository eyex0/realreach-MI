import React, { useState } from 'react';
import { Smartphone, Banknote, CalendarCheck, ShieldCheck, ArrowRight, Check } from 'lucide-react';

interface BecomeDistributorProps {
  onOpenDistributorModal: () => void;
}

export const BecomeDistributor: React.FC<BecomeDistributorProps> = ({ onOpenDistributorModal }) => {
  const [weeklyHours, setWeeklyHours] = useState<number>(20);
  const hourlyRate = 17.5;

  const weeklyEarnings = Math.round(weeklyHours * hourlyRate);
  const monthlyEarnings = Math.round(weeklyEarnings * 4.33);

  return (
    <section id="for-distributors" className="py-16 md:py-24 bg-white text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Content & Interactive Calculator */}
          <div className="lg:col-span-7 space-y-7">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Distributor Careers & Agency Partners
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
              Distribute Leaflets Locally. Get Paid Reliably via Escrow.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              No registration fees or expensive hardware. All you need is a smartphone and comfortable walking shoes. Pick up verified rounds in your local postal sectors, prove your delivery route with our free GPS app, and receive guaranteed weekly payouts directly to your bank.
            </p>

            {/* Perks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <Banknote className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-900 block font-bold">Weekly Direct Payouts</strong>
                  <span className="text-slate-500">Escrow funds auto-released upon verified GPS completion.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <Smartphone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-900 block font-bold">Free GPS Tracker App</strong>
                  <span className="text-slate-500">Simple street map navigation with offline route caching.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <CalendarCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-900 block font-bold">Complete Schedule Freedom</strong>
                  <span className="text-slate-500">Choose the rounds, hours, and postal sectors you prefer.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-900 block font-bold">Reputation & Repeat Rounds</strong>
                  <span className="text-slate-500">Build 5-star ratings and secure exclusive contracted rounds.</span>
                </div>
              </div>
            </div>

            {/* Earnings Simulator */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-900 uppercase tracking-wider">
                  Distributor Earnings Calculator
                </span>
                <span className="text-slate-500 font-medium">Average Milan Rate: ~€14.50/hr</span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-700">
                  <span className="font-medium">Walking Hours per Week:</span>
                  <span className="font-mono-numbers font-bold text-emerald-700 text-sm">
                    {weeklyHours} hrs / week
                  </span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={40}
                  step={1}
                  value={weeklyHours}
                  onChange={(e) => setWeeklyHours(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
              </div>

              <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[11px] text-slate-500 block">Estimated Weekly Take-Home</span>
                  <span className="font-mono-numbers text-xl sm:text-2xl font-black text-slate-900">
                    €{weeklyEarnings.toLocaleString()}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">Estimated Monthly Earnings</span>
                  <span className="font-mono-numbers text-xl sm:text-2xl font-black text-emerald-700">
                    €{monthlyEarnings.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Application CTA */}
            <div>
              <button
                onClick={onOpenDistributorModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold rounded-xl text-sm shadow-md shadow-emerald-600/20 active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Apply to Become a Distributor</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="mt-2 text-xs text-slate-500">
                Milan residents aged 18+ · Quick 2-minute identity verification
              </div>
            </div>
          </div>

          {/* Right: Distributor Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl relative">
              <img
                src="/images/home/who-its-for/person.svg"
                alt="Realreach verified delivery professional"
                className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 text-xs shadow-lg">
                <div className="flex items-center gap-2 text-emerald-800 font-bold mb-1">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>No Registration Fees · No Hidden Cuts</span>
                </div>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  Realreach charges clients a transparent 7.5% verification fee. You receive 100% of your agreed delivery rate directly into your bank via Stripe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
