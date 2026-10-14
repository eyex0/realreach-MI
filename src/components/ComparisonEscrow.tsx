import React from 'react';
import { ShieldCheck, Check, X, Lock, ArrowRight } from 'lucide-react';

interface ComparisonEscrowProps {
  onOpenCampaignModal: () => void;
}

export const ComparisonEscrow: React.FC<ComparisonEscrowProps> = ({ onOpenCampaignModal }) => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
            The Marketize Escrow Guarantee
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Ending Dishonesty in Leaflet Distribution
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            For decades, door-drop marketing suffered from zero accountability, blind faith, and dumped flyers. Marketize was built with an escrow-first architecture where distributors only get paid when independent GPS evidence confirms delivery.
          </p>
        </div>

        {/* 4-Step Escrow Workflow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs space-y-3 relative">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center font-mono-numbers font-bold text-emerald-800 text-base">
              01
            </div>
            <h3 className="font-bold text-base text-slate-900">Select Sector & Escrow Deposit</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Define your delivery sector and transfer campaign funds into a segregated Stripe escrow account. Funds are locked safely.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs space-y-3 relative">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center font-mono-numbers font-bold text-emerald-800 text-base">
              02
            </div>
            <h3 className="font-bold text-base text-slate-900">Live GPS-Tracked Round</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              A vetted local distributor executes the delivery using the Marketize mobile app, logging footsteps every 3 seconds even in offline zones.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs space-y-3 relative">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center font-mono-numbers font-bold text-emerald-800 text-base">
              03
            </div>
            <h3 className="font-bold text-base text-slate-900">Geo-Photo Evidence Pins</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Distributors capture mandatory timestamped geo-tagged photos throughout the round, which appear in real time on your dashboard.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs space-y-3 relative">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center font-mono-numbers font-bold text-emerald-800 text-base">
              04
            </div>
            <h3 className="font-bold text-base text-slate-900">Audit & Funds Released</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Once GPS path integrity is verified and confirmed, escrow releases payment to the distributor. If streets were skipped, you are protected.
            </p>
          </div>
        </div>

        {/* Comparison Matrix: Marketize vs Traditional */}
        <div id="escrow-guarantee" className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="p-6 sm:p-8 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4 bg-slate-50/50">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Marketize vs Traditional Leaflet Delivery</h3>
              <p className="text-xs text-slate-500">Direct structural comparison of safety, tracking, and pricing</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-lg">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Independent Third-Party Arbitration</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100/70 text-slate-600 uppercase text-[11px] font-bold border-b border-slate-200">
                <tr>
                  <th className="py-4 px-6">Feature & Safeguard</th>
                  <th className="py-4 px-6 text-emerald-800 font-extrabold bg-emerald-50/60">Marketize Platform</th>
                  <th className="py-4 px-6 text-slate-600">Legacy Leaflet Agencies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900">Payment Architecture</td>
                  <td className="py-4 px-6 bg-emerald-50/30 font-semibold text-slate-900 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Funds locked in Stripe Escrow until GPS verified</span>
                  </td>
                  <td className="py-4 px-6 text-slate-500 flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500 shrink-0" />
                    <span>100% upfront payment with zero financial protection</span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900">Live Route Verification</td>
                  <td className="py-4 px-6 bg-emerald-50/30 font-semibold text-slate-900 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Real-time live map + 3-sec interval offline caching</span>
                  </td>
                  <td className="py-4 px-6 text-slate-500 flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500 shrink-0" />
                    <span>No tracking or post-hoc exported manual sheets</span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900">Photo Delivery Proof</td>
                  <td className="py-4 px-6 bg-emerald-50/30 font-semibold text-slate-900 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Timestamped EXIF geo-tagged pins directly on client map</span>
                  </td>
                  <td className="py-4 px-6 text-slate-500 flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500 shrink-0" />
                    <span>Rarely provided; prone to spoofed camera photos</span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900">Letterbox Count Source</td>
                  <td className="py-4 px-6 bg-emerald-50/30 font-semibold text-slate-900 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Italian postal registry dataset filtered for deliverable doors</span>
                  </td>
                  <td className="py-4 px-6 text-slate-500 flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500 shrink-0" />
                    <span>Rough manual estimates or inflated round sizes</span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900">Dispute & Refund Recourse</td>
                  <td className="py-4 px-6 bg-emerald-50/30 font-semibold text-slate-900 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Marketize acts as independent neutral arbitrator with GPS logs</span>
                  </td>
                  <td className="py-4 px-6 text-slate-500 flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500 shrink-0" />
                    <span>Agency denies faults; no refund or contract recourse</span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900">Response Attribution</td>
                  <td className="py-4 px-6 bg-emerald-50/30 font-semibold text-slate-900 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Built-in QR Studio & CAP UTM Tracking</span>
                  </td>
                  <td className="py-4 px-6 text-slate-500 flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500 shrink-0" />
                    <span>Zero attribution tools or analytics provided</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bottom Callout */}
          <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-slate-600 font-medium">
              <Lock className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>All payments handled via PCI-DSS Level 1 compliant Stripe escrow infrastructure.</span>
            </div>
            <button
              onClick={onOpenCampaignModal}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center gap-2 cursor-pointer transition-colors shadow-xs"
            >
              <span>Post Your Campaign Safely</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
