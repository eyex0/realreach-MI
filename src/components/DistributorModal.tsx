import React, { useState } from 'react';
import { X, Check, Smartphone, MapPin, User, Mail, Phone, ArrowRight } from 'lucide-react';

interface DistributorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DistributorModal: React.FC<DistributorModalProps> = ({ isOpen, onClose }) => {
  const [role, setRole] = useState<'distributor' | 'agency'>('distributor');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [postcodeArea, setPostcodeArea] = useState('London (Central)');
  const [transportType, setTransportType] = useState('walking');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white border border-gray-200 max-w-lg w-full rounded-3xl overflow-hidden shadow-2xl my-8">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-gray-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-red-500">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900">
                {role === 'distributor' ? 'Become a Verified Distributor' : 'Agency Onboarding'}
              </h3>
              <p className="text-xs text-gray-500">Free to join • No equipment fees • Guaranteed Escrow Payouts</p>
            </div>
          </div>
          <button onClick={handleReset} className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-500 text-green-600 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-gray-900">Application Received!</h4>
            <p className="text-xs text-gray-600 leading-relaxed max-w-md mx-auto">
              Thank you, <strong>{fullName}</strong>. We've sent your free Marketize GPS App activation instructions to <strong>{email}</strong>. Our local courier operations team will verify your territory in <strong>{postcodeArea}</strong>.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 bg-red-500 text-white rounded-full text-sm font-medium hover:bg-red-600 transition-colors shadow-md cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            {/* Role switch */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-2xl">
              <button
                type="button"
                onClick={() => setRole('distributor')}
                className={`py-2 text-center rounded-xl font-medium transition-all ${
                  role === 'distributor'
                    ? 'bg-white text-gray-900 font-bold shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Sole Trader / Courier
              </button>
              <button
                type="button"
                onClick={() => setRole('agency')}
                className={`py-2 text-center rounded-xl font-medium transition-all ${
                  role === 'agency'
                    ? 'bg-white text-gray-900 font-bold shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Distribution Agency
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label htmlFor="distributor-full-name" className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  id="distributor-full-name"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Mike Davies"
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="distributor-email" className="block text-xs font-medium text-gray-700 mb-1">Email</label>
                  <input
                    id="distributor-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="mike@example.com"
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label htmlFor="distributor-phone" className="block text-xs font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    id="distributor-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="07123 456789"
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="distributor-location" className="block text-xs font-medium text-gray-700 mb-1">Preferred Location</label>
                  <select
                    id="distributor-location"
                    value={postcodeArea}
                    onChange={(e) => setPostcodeArea(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                  >
                    <option value="London (Central)">London (Greater London)</option>
                    <option value="Manchester">Manchester &amp; Salford</option>
                    <option value="Bristol">Bristol &amp; Bath</option>
                    <option value="Birmingham">Birmingham &amp; West Mids</option>
                    <option value="Leeds">Leeds &amp; Yorkshire</option>
                    <option value="Edinburgh">Edinburgh &amp; Lothian</option>
                    <option value="Cardiff">Cardiff &amp; South Wales</option>
                    <option value="Ipswich & East Anglia">Ipswich &amp; East Anglia</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="distributor-method" className="block text-xs font-medium text-gray-700 mb-1">Delivery Method</label>
                  <select
                    id="distributor-method"
                    value={transportType}
                    onChange={(e) => setTransportType(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                  >
                    <option value="walking">On Foot / Push Cart</option>
                    <option value="bicycle">Bicycle / Cargo Bike</option>
                    <option value="van">Car / Van (Multi-route)</option>
                    <option value="team">Agency Team Fleet</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="p-3 bg-red-50/50 rounded-2xl border border-red-100 text-xs text-gray-700 space-y-1">
              <div className="font-semibold text-gray-900">Why deliver with Marketize?</div>
              <p className="text-[11px] text-gray-600 leading-snug">
                • 100% Escrow security — money is locked before you take your first step.
                <br />
                • Offline GPS recording on the free iOS/Android app.
                <br />
                • No hardware purchase or platform subscription fees.
              </p>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-full text-sm transition-colors cursor-pointer shadow-md disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting Application...' : 'Submit Application & Get App Access'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
