import React from 'react';

interface OperatingSystemProps {
  onCardClick?: (index: number) => void;
}

export const OperatingSystem: React.FC<OperatingSystemProps> = ({ onCardClick }) => {
  const items = [
    {
      icon: '/images/home/included/Icon.svg',
      title: 'Real-Time GPS Tracking',
      desc: 'Offline-first GPS captures every step even without signal. Routes sync automatically when connection is restored - no blind spots, ever.',
      comingSoon: false,
    },
    {
      icon: '/images/home/included/cam.svg',
      title: 'Geo-Tagged Photo Evidence',
      desc: 'Distributors take timestamped, location-stamped photos along their route. These appear as interactive pins on your live GPS map.',
      comingSoon: false,
    },
    {
      icon: '/images/home/included/lock.svg',
      title: 'Escrow-like Payment System',
      desc: 'Funds are held securely by Marketize via Stripe until GPS-verified completion. Payment releases automatically - no chasing, no disputes.',
      comingSoon: false,
    },
    {
      icon: '/images/home/included/letterbox.svg',
      title: 'Letterbox Counting',
      desc: 'Draw your delivery area on a map and instantly know how many letterboxes it contains. Plan volumes accurately, not from guesswork.',
      comingSoon: false,
    },
    {
      icon: '/images/home/included/demographic.svg',
      title: 'Demographic Targeting',
      desc: 'Filter CAP sectors by household profile - young families, homeowners, renters, income bands, etc. Focus your budget where it converts.',
      comingSoon: false,
    },
    {
      icon: '/images/home/included/qr.svg',
      title: 'QR Code Response Tracking',
      desc: 'Unique QR codes on each campaign let you measure real response rates - turning leaflets from a cost into a measurable revenue driver. Especially coupled with other tracking methods as well.',
      comingSoon: false,
    },
    {
      icon: '/images/home/included/crm.svg',
      title: 'Full CRM for Agencies',
      desc: 'Campaign milestones, client communication hub, progress dashboards, and automated reporting - the full stack, included at no extra cost.',
      comingSoon: true,
    },
    {
      icon: '/images/home/included/chat.svg',
      title: 'Instant Messaging',
      desc: 'Built-in direct messaging between clients and distributors. Real-time campaign updates, change requests, and confirmations in one thread.',
      comingSoon: false,
    },
    {
      icon: '/images/home/included/bell.svg',
      title: 'Smart Notifications',
      desc: 'Automated lifecycle alerts for clients, distributors, and staff - so every party knows the status of every campaign without asking.',
      comingSoon: false,
    },
    {
      icon: '/images/home/included/dispute.svg',
      title: 'Dispute Resolution',
      desc: "If a dispute arises, Marketize's team reviews all GPS data, photo evidence, and communication logs as an independent, neutral third party.",
      comingSoon: false,
    },
    {
      icon: '/images/home/included/shared.svg',
      title: 'Shared Distribution Engine',
      desc: 'Run cost-efficient shared campaigns alongside up to 3 non-competing businesses - a fully managed split-delivery system with transparent reporting per client.',
      comingSoon: true,
    },
    {
      icon: '/images/home/included/consult.svg',
      title: 'Consultation Distribution',
      desc: 'High-accuracy, guaranteed-delivery drops for planning consultations and electoral campaigns - with electoral ward mapping and administrative division targeting.',
      comingSoon: true,
    },
  ];

  return (
    <section id="campaigns" className="sm:py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-14">
          <span className="inline-block text-red-500 badge-text bg-red-50 px-3 py-1 rounded-full mb-4">
            Everything Included
          </span>
          <h2 className="section-heading max-w-2xl mx-auto !text-2xl sm:!text-4xl lg:!text-5xl !leading-tight text-gray-900">
            A complete operating system for leaflet distribution
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onCardClick?.(idx)}
              className="relative border border-gray-200 rounded-2xl p-7 flex flex-col gap-5 hover:bg-red-50/40 cursor-pointer transition-all hover:scale-105 group bg-white shadow-xs"
            >
              <div className="flex items-center justify-between">
                <div className="items-center justify-center">
                  <img src={item.icon} alt={item.title} className="w-10 h-10 object-contain" />
                </div>
                {item.comingSoon && (
                  <span className="bg-[#FF22290F] text-[#FF2229] border border-[#FF22291A] text-[14px] px-2.5 py-0.5 rounded-full whitespace-nowrap font-medium">
                    Coming Soon
                  </span>
                )}
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <p className="home-card-text text-gray-900 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </p>
                </div>
                <p className="card-subtext leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
