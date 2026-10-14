import React from 'react';
import { MapPin, ShieldCheck, Navigation, CheckCircle2, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenCampaignModal: () => void;
  onScrollToCalculator: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({
  onOpenCampaignModal,
  onScrollToCalculator,
}) => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
            The Marketize Methodology
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            How GPS-Verified Leaflet Distribution Works
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Marketize replaces blind trust with real-time verification and Stripe escrow protection. From campaign planning to verified doorstep delivery, every stage is fully trackable.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between relative group hover:border-slate-300 hover:shadow-md transition-all shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 text-emerald-800 font-mono-numbers font-black text-sm flex items-center justify-center">
                  01
                </span>
                <MapPin className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2">
                Set Target & Count Letterboxes
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Select your target CAP sectors (from 500 leaflets upwards). Our Italian postal registry counts exact deliverable doors, filtering out commercial units and inaccessible buildings.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-200/80 text-[11px] font-semibold text-emerald-700">
              PAF-Verified Doorstep Data
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between relative group hover:border-slate-300 hover:shadow-md transition-all shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 text-emerald-800 font-mono-numbers font-black text-sm flex items-center justify-center">
                  02
                </span>
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2">
                Deposit into Stripe Escrow
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Your campaign funds are deposited into an independent Stripe escrow hold. Couriers cannot touch funds upfront. You only pay for verified letterbox deliveries.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-200/80 text-[11px] font-semibold text-emerald-700">
              100% Financial Protection
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between relative group hover:border-slate-300 hover:shadow-md transition-all shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 text-emerald-800 font-mono-numbers font-black text-sm flex items-center justify-center">
                  03
                </span>
                <Navigation className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2">
                Live GPS & Geo-Photo Proof
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Distributors track their route in real time. Breadcrumbs are recorded every 3 seconds locally on the phone (zero dead zones), and timestamped photos are pinned to your live map.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-200/80 text-[11px] font-semibold text-emerald-700">
              Offline Route Recording
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between relative group hover:border-slate-300 hover:shadow-md transition-all shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 text-emerald-800 font-mono-numbers font-black text-sm flex items-center justify-center">
                  04
                </span>
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2">
                Audit & Release Funds
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Once the delivery route is completed, an audit report is generated. Escrow releases payout to the courier. If streets were skipped, you are protected with independent arbitration.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-200/80 text-[11px] font-semibold text-emerald-700">
              Independent Dispute Resolution
            </div>
          </div>
        </div>

        {/* Process Action Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-white border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-slate-900">
              Ready to launch your first GPS-verified campaign?
            </h4>
            <p className="text-xs text-slate-600">
              Minimum campaign size starting from just 500 leaflets anywhere in Milan, Italy.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onScrollToCalculator}
              className="px-4 py-2.5 text-xs font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              Count Letterboxes
            </button>
            <button
              onClick={onOpenCampaignModal}
              className="px-4.5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm shadow-emerald-600/20 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Post a Campaign</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
