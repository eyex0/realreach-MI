import React, { useState } from 'react';
import { X, ShieldCheck, Check, ArrowRight, Building, Mail, Phone, Calendar, MapPin, Calculator } from 'lucide-react';
import { POSTCODE_SECTORS } from '../data/sectors';

interface CampaignModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSector?: string;
}

export const CampaignModal: React.FC<CampaignModalProps> = ({
  isOpen,
  onClose,
  initialSector,
}) => {
  const [selectedPostcode, setSelectedPostcode] = useState(initialSector || 'IP1 1');
  const [distributionType, setDistributionType] = useState<'solus' | 'shared'>('solus');
  const [quantity, setQuantity] = useState(4000);
  const [businessName, setBusinessName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [targetDate, setTargetDate] = useState('2026-10-24');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  if (!isOpen) return null;

  const currentSector = POSTCODE_SECTORS.find((s) => s.code === selectedPostcode) || POSTCODE_SECTORS[0];
  const ratePer1000 = distributionType === 'solus' ? 65.0 : 42.0;
  const escrowAmount = Math.round(((quantity / 1000) * ratePer1000 + 19.5) * 100) / 100;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setReferenceCode(`MKT-ESC-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 700);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white border border-gray-200 max-w-xl w-full rounded-3xl overflow-hidden shadow-2xl my-8">
        {/* Header */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-gray-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-red-500">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900">
                {isSuccess ? 'Campaign Booked via Escrow' : 'Start Your Leaflet Campaign'}
              </h3>
              <p className="text-xs text-gray-500">GPS-Tracked • Stripe Escrow Hold • Zero Upfront Risk</p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-500 text-green-600 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900">Campaign Brief Published</h4>
              <p className="text-xs text-gray-600 mt-1.5 max-w-md mx-auto leading-relaxed">
                Your campaign brief for <strong>{currentSector.name} ({currentSector.code})</strong> has been routed to vetted couriers. Funds are held safely in Stripe escrow until full GPS verification.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 text-xs text-left space-y-2 max-w-md mx-auto">
              <div className="flex justify-between text-gray-600">
                <span>Escrow Hold Ref:</span>
                <span className="font-mono font-bold text-red-600">{referenceCode}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Target Volume:</span>
                <span className="text-gray-900 font-medium">{quantity.toLocaleString()} households</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Type:</span>
                <span className="text-gray-900 font-medium capitalize">{distributionType} Drop</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Total Escrow Deposit:</span>
                <span className="text-gray-900 font-bold text-sm">£{escrowAmount.toFixed(2)}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleReset}
                className="w-full py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-full text-sm transition-colors cursor-pointer shadow-md"
              >
                Close &amp; Track Campaign
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            {/* Quick Sector & Type Picker */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Target Sector</label>
                <select
                  value={selectedPostcode}
                  onChange={(e) => setSelectedPostcode(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                >
                  {POSTCODE_SECTORS.map((sec) => (
                    <option key={sec.code} value={sec.code}>
                      {sec.code} - {sec.name} ({sec.letterboxes.toLocaleString()} homes)
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Distribution Type</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setDistributionType('solus')}
                    className={`py-2 px-2 text-center rounded-xl border font-medium transition-all ${
                      distributionType === 'solus'
                        ? 'border-red-500 bg-red-50 text-red-600 font-bold'
                        : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    Solus (Solo)
                  </button>
                  <button
                    type="button"
                    onClick={() => setDistributionType('shared')}
                    className={`py-2 px-2 text-center rounded-xl border font-medium transition-all ${
                      distributionType === 'shared'
                        ? 'border-red-500 bg-red-50 text-red-600 font-bold'
                        : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    Shared (Budget)
                  </button>
                </div>
              </div>
            </div>

            {/* Quantity Slider */}
            <div>
              <div className="flex justify-between items-center mb-1 text-xs">
                <span className="font-medium text-gray-700">Leaflet Volume:</span>
                <span className="font-bold text-red-600 text-sm">{quantity.toLocaleString()} leaflets</span>
              </div>
              <input
                type="range"
                min={500}
                max={Math.min(15000, currentSector.letterboxes)}
                step={500}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full accent-red-500 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-gray-400 mt-0.5">
                <span>Min: 500</span>
                <span>Sector Max: {currentSector.letterboxes.toLocaleString()}</span>
              </div>
            </div>

            {/* Escrow Quote Summary Bar */}
            <div className="p-3.5 bg-red-50/50 rounded-2xl border border-red-100 flex items-center justify-between">
              <div>
                <div className="text-[11px] text-gray-500 uppercase tracking-wider">Protected Escrow Total</div>
                <div className="text-lg font-bold text-gray-900">£{escrowAmount.toFixed(2)}</div>
              </div>
              <div className="text-right text-[11px] text-green-700 bg-green-50 px-2.5 py-1 rounded-full border border-green-200 font-medium">
                ✓ Held by Stripe via Marketize
              </div>
            </div>

            {/* Client Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Company / Brand Name</label>
                <input
                  type="text"
                  required
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Acme Estate Agency"
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Contact Name</label>
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Work Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sarah@acme.co.uk"
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="07700 900123"
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Desired Drop Start Date</label>
              <input
                type="date"
                required
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-medium rounded-full text-sm transition-all shadow-md cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'Verifying with Stripe Escrow...' : `Lock in Escrow (£${escrowAmount.toFixed(2)}) & Broadcast`}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
