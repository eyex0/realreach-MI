import React from 'react';

interface WhoItsForProps {
  onSelectRole?: (role: 'client' | 'distributor' | 'agency') => void;
}

export const WhoItsFor: React.FC<WhoItsForProps> = ({ onSelectRole }) => {
  return (
    <section className="sm:py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-14">
          <span className="inline-block text-red-500 badge-text bg-red-50 px-3 py-1 rounded-full mb-4">
            Who It's For
          </span>
          <h2 className="section-heading !text-2xl sm:!text-4xl lg:!text-5xl !leading-tight text-gray-900">
            Everyone wins - for the first time
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1: Businesses & Clients */}
          <div
            onClick={() => onSelectRole?.('client')}
            className="border border-gray-200 rounded-2xl p-5 sm:p-8 flex flex-col gap-4 sm:gap-6 hover:bg-red-50/40 cursor-pointer transition-all hover:scale-105 group bg-white shadow-xs"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/images/home/who-its-for/business.svg" alt="Businesses & Clients" className="w-12 h-12 object-contain" />
            </div>
            <div>
              <p className="home-card-text mb-3 text-gray-900 group-hover:text-red-600 transition-colors">
                Businesses &amp; Clients
              </p>
              <p className="card-subtext leading-relaxed">
                Whether you're a local takeaway, a trades company, a gym, a real estate agent, or a national brand - Realreach gives you accountable, affordable, measurable leaflet marketing.
              </p>
            </div>
            <ul className="space-y-2 mt-auto">
              <li className="flex items-start gap-2 card-subtext leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"></span>
                Launch targeted campaigns from 500 leaflets
              </li>
              <li className="flex items-start gap-2 card-subtext leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"></span>
                Watch every delivery live on a GPS map
              </li>
              <li className="flex items-start gap-2 card-subtext leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"></span>
                Pay only on verified completion via an escrow-like system
              </li>
              <li className="flex items-start gap-2 card-subtext leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"></span>
                Measure response rates with QR code tracking
              </li>
              <li className="flex items-start gap-2 card-subtext leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"></span>
                Plan repeat drops with real campaign data
              </li>
            </ul>
          </div>

          {/* Card 2: Sole Traders & Distributors */}
          <div
            onClick={() => onSelectRole?.('distributor')}
            className="border border-gray-200 rounded-2xl p-5 sm:p-8 flex flex-col gap-4 sm:gap-6 hover:bg-red-50/40 cursor-pointer transition-all hover:scale-105 group bg-white shadow-xs"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/images/home/who-its-for/person.svg" alt="Sole Traders & Distributors" className="w-12 h-12 object-contain" />
            </div>
            <div>
              <p className="home-card-text mb-3 text-gray-900 group-hover:text-red-600 transition-colors">
                Sole Traders &amp; Distributors
              </p>
              <p className="card-subtext leading-relaxed">
                Earn money walking your neighbourhood. Prove your work beyond doubt. Build a verified reputation that gets you repeat business - without buying expensive kit.
              </p>
            </div>
            <ul className="space-y-2 mt-auto">
              <li className="flex items-start gap-2 card-subtext leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"></span>
                No trackers to buy, no subscription fees
              </li>
              <li className="flex items-start gap-2 card-subtext leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"></span>
                Get paid securely - payment system guarantees your income
              </li>
              <li className="flex items-start gap-2 card-subtext leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"></span>
                GPS app works online/offline - no dropped coverage
              </li>
              <li className="flex items-start gap-2 card-subtext leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"></span>
                Build a verified review-based reputation
              </li>
              <li className="flex items-start gap-2 card-subtext leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"></span>
                Accept jobs that fit your schedule and area
              </li>
            </ul>
          </div>

          {/* Card 3: Distribution Agencies */}
          <div
            onClick={() => onSelectRole?.('agency')}
            className="border border-gray-200 rounded-2xl p-5 sm:p-8 flex flex-col gap-4 sm:gap-6 hover:bg-red-50/40 cursor-pointer transition-all hover:scale-105 group bg-white shadow-xs"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/images/home/who-its-for/agency.svg" alt="Distribution Agencies" className="w-12 h-12 object-contain" />
            </div>
            <div>
              <p className="home-card-text mb-3 text-gray-900 group-hover:text-red-600 transition-colors">
                Distribution Agencies
              </p>
              <p className="card-subtext leading-relaxed">
                Manage your entire operation - teams, clients, campaigns - from a single platform. Offer first-class GPS-verified services without buying expensive enterprise software.
              </p>
            </div>
            <ul className="space-y-2 mt-auto">
              <li className="flex items-start gap-2 card-subtext leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"></span>
                Full CRM for all clients — on and off Realreach
              </li>
              <li className="flex items-start gap-2 card-subtext leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"></span>
                Multi-distributor live GPS dashboard
              </li>
              <li className="flex items-start gap-2 card-subtext leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"></span>
                Automated proof-of-delivery client reports
              </li>
              <li className="flex items-start gap-2 card-subtext leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"></span>
                Scale to county or country-wide campaigns
              </li>
              <li className="flex items-start gap-2 card-subtext leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"></span>
                Neutral dispute resolution protects your reputation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
