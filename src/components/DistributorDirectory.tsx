import React, { useState } from 'react';
import { VERIFIED_DISTRIBUTORS, VerifiedDistributor } from '../data/sectors';
import { ShieldCheck, Star, MapPin, ArrowRight } from 'lucide-react';

interface DistributorDirectoryProps {
  onSelectDistributor: (distributor: VerifiedDistributor) => void;
}

export const DistributorDirectory: React.FC<DistributorDirectoryProps> = ({ onSelectDistributor }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');

  const regions = ['All', 'Lombardy', 'Brianza', 'Como', 'Milan Metropolitan Area'];

  const filteredDistributors = VERIFIED_DISTRIBUTORS.filter((d) => {
    if (selectedRegion === 'All') return true;
    return d.location.toLowerCase().includes(selectedRegion.toLowerCase());
  });

  return (
    <section id="distributors" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
              Vetted Delivery Network
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
              Verified GPS Distributors & Local Delivery Teams
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Every distributor on Realreach has undergone identity verification, DBS screening, and GPS accuracy qualification. Review verifiable track records, completed round histories, and client ratings.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200 shadow-xs shrink-0 overflow-x-auto">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedRegion === region
                    ? 'bg-emerald-600 text-white font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Distributor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDistributors.map((dist) => (
            <div
              key={dist.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all shadow-xs group"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-bold text-base text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {dist.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{dist.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-1 rounded-lg shrink-0">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span className="font-mono-numbers">{dist.rating.toFixed(2)}</span>
                  </div>
                </div>

                {/* Badge text */}
                <div className="text-[11px] font-bold text-emerald-700 flex items-center gap-1.5 mb-4">
                  <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>{dist.badge}</span>
                </div>

                {/* Performance stats row */}
                <div className="grid grid-cols-3 gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200 text-center mb-5">
                  <div>
                    <div className="font-mono-numbers text-sm font-bold text-slate-900">
                      {dist.completedJobs}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">Completed</div>
                  </div>
                  <div>
                    <div className="font-mono-numbers text-sm font-bold text-emerald-700">
                      {dist.gpsAccuracyRate}%
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">GPS Match</div>
                  </div>
                  <div>
                    <div className="font-mono-numbers text-sm font-bold text-slate-900">
                      {(dist.letterboxesDelivered / 1000).toFixed(0)}k
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">Doors</div>
                  </div>
                </div>

                {/* Attributes */}
                <div className="space-y-1.5 text-xs text-slate-600 mb-6">
                  <div className="flex items-center justify-between">
                    <span>Base Delivery Rate:</span>
                    <span className="font-mono-numbers font-semibold text-slate-900">
                      From €{dist.ratePerThousand}/1,000
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Experience:</span>
                    <span className="font-mono-numbers text-slate-700">{dist.experienceYears} Years</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Availability:</span>
                    <span className={`font-semibold ${dist.availableNextWeek ? 'text-emerald-700' : 'text-slate-500'}`}>
                      {dist.availableNextWeek ? 'Available This Week' : 'Booked 7 Days Out'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectDistributor(dist)}
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-emerald-600 active:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
              >
                <span>Assign to Campaign</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Claim-to-Proof Client Feedback */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-1 text-amber-500 text-xs">
              {'★'.repeat(5)}
            </div>
            <p className="text-xs text-slate-600 italic leading-relaxed">
              "We dropped 15,000 property valuation leaflets across IP1 and IP4 with Sarah Miller's team. Watching the live GPS route and seeing photo pins at letterboxes gave us 100% confidence. Booked 18 valuations in 14 days."
            </p>
            <div className="pt-2 border-t border-slate-100 text-xs">
              <strong className="text-slate-900 block">Marcus Vance</strong>
              <span className="text-slate-500 text-[11px]">Senior Partner, Lombardy Prestige Properties</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-1 text-amber-500 text-xs">
              {'★'.repeat(5)}
            </div>
            <p className="text-xs text-slate-600 italic leading-relaxed">
              "With previous leaflet distributors we had complaints of dumped boxes in park bins. With Realreach, funds didn't leave escrow until GPS tracks were reviewed. We achieved 142 gym member sign-ups from our Monza drop."
            </p>
            <div className="pt-2 border-t border-slate-100 text-xs">
              <strong className="text-slate-900 block">Chloe Bennett</strong>
              <span className="text-slate-500 text-[11px]">Marketing Director, Zenith Fitness Club</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-1 text-amber-500 text-xs">
              {'★'.repeat(5)}
            </div>
            <p className="text-xs text-slate-600 italic leading-relaxed">
              "The QR Code Studio combined with the CAP letterbox counting meant we could test two distinct offers in Como. Real scans spiked on the exact days our distributor walked those specific roads."
            </p>
            <div className="pt-2 border-t border-slate-100 text-xs">
              <strong className="text-slate-900 block">Dr. Alistair Ross</strong>
              <span className="text-slate-500 text-[11px]">Commercial Lead, BioComo Diagnostics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
