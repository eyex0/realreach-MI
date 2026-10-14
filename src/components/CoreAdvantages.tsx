import React from 'react';

interface CoreAdvantagesProps {
  onCardClick?: (index: number) => void;
}

export const CoreAdvantages: React.FC<CoreAdvantagesProps> = ({ onCardClick }) => {
  const advantages = [
    {
      icon: '/images/home/advantages/gps.svg',
      title: 'Real-Time GPS - Not a Gimmick',
      desc: "Unlike basic GPS loggers that can be tampered with or lose signal, Realreach stores GPS data locally on the distributor's device even without internet and syncs when connection is restored. No blank spots. No manipulation. Indisputable proof.",
    },
    {
      icon: '/images/home/advantages/lock.svg',
      title: 'Escrow-like System That Protects Both Sides',
      desc: "Clients pay upfront into a secure escrow-like system. Funds only release after GPS-verified completion. Distributors always receive fair payment for work done. Clients never pay for work that wasn't. Close to zero risk - for everyone.",
    },
    {
      icon: '/images/home/advantages/dispute.svg',
      title: 'Neutral Dispute Resolution',
      desc: 'If things go wrong, Realreach steps in as a trusted, independent third party - reviewing GPS data, photo evidence, and communication logs. Disputes resolved with evidence rather than arguments. Fast, fair and final.',
    },
    {
      icon: '/images/home/advantages/letterbox.svg',
      title: 'Letterbox Counting & Route Planning',
      desc: 'Know exactly how many homes are in your delivery area before you spend a penny. Our tools give clients and agencies highly accurate volume forecasting and demographic filtering - targeting young families, homeowners, high earners.',
    },
    {
      icon: '/images/home/advantages/qr.svg',
      title: 'Measurable ROI via QR Codes',
      desc: 'Embed unique, traceable QR codes in your leaflets. See exactly how many recipients took action, when and where. For the first time, analogue door-drop marketing becomes genuinely measurable - campaign by campaign, area by area.',
    },
    {
      icon: '/images/home/advantages/marketplace.svg',
      title: 'Open Marketplace - Lower Costs',
      desc: 'Unlike traditional distribution companies with high overheads and rigid minimums, Realreach lets any verified sole trader or agency take on work. More competition means better prices. Campaigns from just 500 leaflets.',
    },
  ];

  return (
    <section id="services" className="sm:py-12 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10 lg:mb-12 text-center flex flex-col items-center">
          <span className="inline-block text-red-500 badge-text bg-red-50 px-3 py-1 rounded-full mb-4">
            Our Core Advantages
          </span>
          <h2 className="section-heading max-w-lg !text-2xl sm:!text-4xl lg:!text-5xl !leading-tight text-gray-900">
            Six reasons Realreach is in a category of its own
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {advantages.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onCardClick?.(idx)}
              className="border border-gray-200 rounded-2xl p-7 flex flex-col gap-5 hover:bg-red-50/40 cursor-pointer transition-all hover:scale-105 group bg-white shadow-xs"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={item.icon} alt={item.title} className="w-10 h-10 object-contain" />
              </div>
              <div>
                <p className="home-card-text mb-2 text-gray-900 group-hover:text-red-600 transition-colors">
                  {item.title}
                </p>
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
