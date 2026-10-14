import React, { useState } from 'react';
import { POSTCODE_SECTORS, CAPSector } from '../data/sectors';
import { Search, MapPin, Check, ArrowRight, Info, ShieldCheck } from 'lucide-react';

interface LetterboxCalculatorProps {
  onBookCampaign: (campaignData: CampaignCalculationResult) => void;
}

export interface CampaignCalculationResult {
  sector: CAPSector;
  distributionType: 'solus' | 'shared' | 'hand' | 'b2b';
  distributionTypeName: string;
  quantity: number;
  printOption: string;
  distributionCost: number;
  printCost: number;
  platformFee: number;
  totalEscrow: number;
  estimatedDays: number;
}

export const LetterboxCalculator: React.FC<LetterboxCalculatorProps> = ({ onBookCampaign }) => {
  const [selectedSectorCode, setSelectedSectorCode] = useState<string>('20121');
  const [distributionType, setDistributionType] = useState<'solus' | 'shared' | 'hand' | 'b2b'>('solus');
  const [quantity, setQuantity] = useState<number>(3840);
  const [printOption, setPrintOption] = useState<'none' | 'a5_silk' | 'a6_heavy'>('none');
  const [includeDesign, setIncludeDesign] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const currentSector = POSTCODE_SECTORS.find((s) => s.code === selectedSectorCode) || POSTCODE_SECTORS[0];

  const handleSelectSector = (sector: CAPSector) => {
    setSelectedSectorCode(sector.code);
    setQuantity(sector.letterboxes);
  };

  const rateMap = {
    solus: { name: 'Solus Distribution (Solo)', rate: 65, desc: 'Your leaflet delivered exclusively. Highest engagement & conversion.' },
    shared: { name: 'Shared Distribution (1 of 3)', rate: 38, desc: 'Bundled with up to 3 non-competing businesses. Maximum cost efficiency.' },
    hand: { name: 'Hand-to-Hand Distribution', rate: 75, desc: 'High-density pedestrian handoffs at transit hubs, malls, and high streets.' },
    b2b: { name: 'B2B Commercial Drop', rate: 85, desc: 'Targeted direct delivery to commercial properties, offices, and retailers.' },
  };

  const printRateMap = {
    none: { name: 'I have my own printed leaflets', ratePerThousand: 0 },
    a5_silk: { name: 'A5 Double-Sided 170gsm Silk Print', ratePerThousand: 19.5 },
    a6_heavy: { name: 'A6 Postcard 350gsm Silk Print', ratePerThousand: 24.0 },
  };

  const distributionCost = (quantity / 1000) * rateMap[distributionType].rate;
  const printCost = (quantity / 1000) * printRateMap[printOption].ratePerThousand + (includeDesign ? 65 : 0);
  const subtotal = distributionCost + printCost;
  const platformFee = Math.round(subtotal * 0.075 * 100) / 100;
  const totalEscrow = Math.round((subtotal + platformFee) * 100) / 100;
  const estimatedDays = Math.max(1, Math.ceil(quantity / 2500));

  const filteredSectors = POSTCODE_SECTORS.filter(
    (s) =>
      s.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.region.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProceed = () => {
    onBookCampaign({
      sector: currentSector,
      distributionType,
      distributionTypeName: rateMap[distributionType].name,
      quantity,
      printOption: printRateMap[printOption].name,
      distributionCost: Math.round(distributionCost * 100) / 100,
      printCost: Math.round(printCost * 100) / 100,
      platformFee,
      totalEscrow,
      estimatedDays,
    });
  };

  return (
    <section id="calculator" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
            Instant Area Intelligence & Quote
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Letterbox Counting & Transparent Campaign Pricing
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Specify your delivery area to query real deliverable letterboxes, demographic profile, and distribution cost. All campaigns include GPS route recording and Stripe escrow protection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Step 1 & 2: Postal Sector & Config */}
          <div className="lg:col-span-7 space-y-7 bg-slate-50/70 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  Step 1: Select CAP Sector
                </label>
                <span className="text-xs text-slate-500 font-medium">Milan CAP Registry</span>
              </div>

              <div className="relative mb-3">
                <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter by CAP or city (e.g. IP1, NR1, Milan, Como)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 transition-colors shadow-xs"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-56 overflow-y-auto pr-1">
                {filteredSectors.map((s) => {
                  const isSelected = s.code === selectedSectorCode;
                  return (
                    <button
                      key={s.code}
                      onClick={() => handleSelectSector(s)}
                      className={`text-left p-3 rounded-xl border text-xs transition-all cursor-pointer ${
                        isSelected
                          ? 'border-emerald-600 bg-emerald-50 text-slate-900 shadow-xs ring-1 ring-emerald-600'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900'
                      }`}
                    >
                      <div className="font-bold flex items-center justify-between">
                        <span>{s.code}</span>
                        <span className="font-mono-numbers text-slate-500">{s.letterboxes.toLocaleString()}</span>
                      </div>
                      <div className="text-[11px] text-slate-500 truncate mt-1">{s.name}</div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 p-4 rounded-xl bg-white border border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs shadow-xs">
                <div>
                  <span className="text-slate-500 block text-[11px]">Selected Sector</span>
                  <span className="font-bold text-slate-900 text-sm">{currentSector.code} — {currentSector.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <span className="text-slate-500 block text-[11px]">Deliverable Doors</span>
                    <span className="font-mono-numbers font-bold text-emerald-700 text-sm">
                      {currentSector.letterboxes.toLocaleString()} doors
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Homeowner Rate</span>
                    <span className="font-mono-numbers font-bold text-slate-800 text-sm">
                      {currentSector.homeownerPercent}%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-bold text-slate-900 block mb-3">
                Step 2: Distribution Service Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(['solus', 'shared', 'hand', 'b2b'] as const).map((typeKey) => {
                  const info = rateMap[typeKey];
                  const isSelected = distributionType === typeKey;
                  return (
                    <button
                      key={typeKey}
                      onClick={() => setDistributionType(typeKey)}
                      className={`text-left p-4 rounded-xl border text-xs transition-all cursor-pointer ${
                        isSelected
                          ? 'border-emerald-600 bg-emerald-50/80 text-slate-900 ring-1 ring-emerald-600'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 shadow-xs'
                      }`}
                    >
                      <div className="flex items-center justify-between font-bold mb-1">
                        <span>{info.name}</span>
                        <span className="font-mono-numbers text-emerald-700 font-extrabold">€{info.rate}/1k</span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-snug">{info.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <label className="font-bold text-slate-900">Step 3: Target Letterboxes</label>
                <span className="font-mono-numbers text-emerald-700 font-extrabold text-base">
                  {quantity.toLocaleString()} leaflets
                </span>
              </div>
              <input
                type="range"
                min={1000}
                max={Math.max(10000, currentSector.letterboxes * 2)}
                step={500}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono-numbers">
                <span>1,000 (Min drop)</span>
                <span>Sector capacity: {currentSector.letterboxes.toLocaleString()}</span>
                <span>Max: {Math.max(10000, currentSector.letterboxes * 2).toLocaleString()}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200">
              <label className="text-sm font-bold text-slate-900 block mb-3">
                Optional: Print & Artwork Supply
              </label>
              <div className="space-y-2">
                {(['none', 'a5_silk', 'a6_heavy'] as const).map((pKey) => {
                  const pInfo = printRateMap[pKey];
                  return (
                    <label
                      key={pKey}
                      className={`flex items-center justify-between p-3 rounded-xl border text-xs cursor-pointer transition-colors ${
                        printOption === pKey
                          ? 'border-emerald-600 bg-white text-slate-900 shadow-xs'
                          : 'border-slate-200 bg-white/70 text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="printOption"
                          checked={printOption === pKey}
                          onChange={() => setPrintOption(pKey)}
                          className="accent-emerald-600"
                        />
                        <span className="font-medium">{pInfo.name}</span>
                      </div>
                      <span className="font-mono-numbers font-semibold text-slate-700">
                        {pInfo.ratePerThousand > 0 ? `+€${pInfo.ratePerThousand}/1k` : '€0.00'}
                      </span>
                    </label>
                  );
                })}
              </div>

              {printOption !== 'none' && (
                <label className="mt-3 flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-white text-xs text-slate-700 cursor-pointer shadow-xs">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeDesign}
                      onChange={(e) => setIncludeDesign(e.target.checked)}
                      className="accent-emerald-600 rounded"
                    />
                    <span className="font-medium">Include Professional Direct-Mail Artwork Design</span>
                  </div>
                  <span className="font-mono-numbers font-semibold text-slate-900">+€65.00</span>
                </label>
              )}
            </div>
          </div>

          {/* Right Column: Live Escrow Quote */}
          <div className="lg:col-span-5 sticky top-24 space-y-6">
            <div className="bg-slate-900 text-white p-6 sm:p-7 rounded-2xl border border-slate-800 shadow-xl">
              <div className="border-b border-slate-800 pb-4 mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Campaign Quote Breakdown</h3>
                  <span className="text-xs text-slate-400">Escrow-Secured Estimate</span>
                </div>
                <div className="p-2 bg-emerald-950/60 border border-emerald-800/80 rounded-xl text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Distribution ({quantity.toLocaleString()} leaflets @ {rateMap[distributionType].name})</span>
                  <span className="font-mono-numbers font-semibold text-white">
                    €{distributionCost.toFixed(2)}
                  </span>
                </div>

                {printCost > 0 && (
                  <div className="flex justify-between text-slate-300">
                    <span>Print & Artwork Service</span>
                    <span className="font-mono-numbers font-semibold text-white">
                      €{printCost.toFixed(2)}
                    </span>
                  </div>
                )}

                <div className="flex justify-between text-slate-300">
                  <span className="flex items-center gap-1">
                    Marketize Escrow & GPS Verification Fee (7.5%)
                    <Info className="w-3.5 h-3.5 text-slate-400" />
                  </span>
                  <span className="font-mono-numbers font-semibold text-white">
                    €{platformFee.toFixed(2)}
                  </span>
                </div>

                <div className="pt-3 border-t border-slate-800 flex justify-between items-baseline">
                  <div>
                    <span className="text-sm font-bold text-white block">Total Escrow Deposit</span>
                    <span className="text-[11px] text-slate-400">Held in Stripe escrow until GPS verified</span>
                  </div>
                  <span className="font-mono-numbers text-2xl font-black text-emerald-400">
                    €{totalEscrow.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="mt-5 p-3.5 bg-slate-950/80 rounded-xl border border-slate-800 text-[11px] text-slate-300 space-y-1.5">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  Zero Upfront Payment to Distributors
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Your funds are held safely in escrow. Distributors are only compensated once second-by-second GPS logs and photo evidence verify the delivery.
                </p>
              </div>

              <button
                onClick={handleProceed}
                className="mt-6 w-full py-3.5 px-4 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-slate-950 font-bold rounded-xl text-sm shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Distribution Round</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-4 text-center text-[11px] text-slate-400">
                Estimated turnaround: {estimatedDays} business {estimatedDays === 1 ? 'day' : 'days'} · Instant booking confirmation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
