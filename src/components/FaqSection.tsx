import React, { useState } from 'react';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: 1,
    question: 'How does the escrow-like payment system work?',
    answer:
      "When a client books a campaign, they pay the agreed amount into Stripe's secure escrow-like system via Marketize. The funds are held there - untouched - until the distributor completes the campaign and it is GPS-verified as done. At that point, the funds can be released to the distributor. Neither party can access the money until the job is confirmed complete. This significantly mitigates payment disputes. For those clients/distributors who require special payment arrangements, be it anything from very large campaigns to cashflow considerations - a different system is being implemented which would allow staggered payment/milestone payment or payment upon completion.",
  },
  {
    id: 2,
    question: "What if a distributor doesn't distribute everything?",
    answer:
      'If delivery is incomplete, the GPS data will go a long way in the investigation. Marketize steps in as a neutral third party, reviews all evidence - GPS routes, timestamps, photos, and communication logs - and resolves the dispute fairly. Payment is only released for what was verified as delivered. No he-said-she-said.',
  },
  {
    id: 3,
    question: 'What is the minimum campaign size?',
    answer:
      'With Marketize, campaigns start from as few as 500 leaflets - far below the traditional industry minimum of 5,000. This lets businesses test their message and offers in a small area before scaling. For more reliable data and measurable response, 5,000–10,000 leaflets is the recommended starting point for a full local campaign.',
  },
  {
    id: 4,
    question: 'What is the 5-10% wastage rule I should know about?',
    answer:
      'Around 5-10% of homes in any delivery area cannot be reached due to "No Junk Mail" signs, refusal, dangerous access, or no letterbox. This is an industry-wide reality. Marketize factors this natural buffer into every campaign calculation so you have realistic expectations and fair outcomes from day one.',
  },
  {
    id: 5,
    question: 'Can I track responses from my leaflet campaign?',
    answer:
      'Yes. Marketize includes QR code tracking tools that let you measure exactly how many recipients scanned your leaflet. You can also use unique discount codes or dedicated phone numbers to track response. This turns leaflet distribution from a "spray and pray" activity into genuine, data-backed direct marketing.',
  },
  {
    id: 6,
    question: "I'm a distributor, does it cost anything to join?",
    answer:
      "No. Joining Marketize as a distributor or agency is free. There are no tracker hardware costs, no monthly subscription fees, and no setup charges. You use the free Marketize mobile app to record your GPS routes and submit photo evidence. You only earn, you don't pay to participate.",
  },
  {
    id: 7,
    question: 'I run a distribution agency, how does Marketize help me?',
    answer:
      "Marketize gives agencies a complete operating platform: a full whitelabel CRM (usable for all your clients, not just those on Marketize), live multi-distributor GPS dashboards, automated proof-of-delivery reports, and built-in dispute resolution. Previously, tools of this quality required expensive enterprise software subscriptions. On Marketize, they're free.",
  },
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1); // 1st FAQ open by default as on marketize.biz

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="sm:py-12 sm:py-16 lg:py-20 bg-white">
      <div className="mx-auto flex max-w-4xl flex-col px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <span className="inline-block text-red-500 badge-text bg-red-50 px-3 py-1 rounded-full mb-4">
            Got questions?
          </span>
          <h2 className="font-medium text-gray-900 text-2xl sm:text-4xl lg:text-[60px] lg:leading-[64px] tracking-[-0.005em] text-center">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                style={{ '--motion-delay': `${(faq.id - 1) * 70}ms` } as React.CSSProperties}
                className={`marketize-fade-up overflow-hidden rounded-xl border border-gray-200 transition-all duration-200 faq-item ${
                  isOpen ? 'bg-gray-50 shadow-xs' : 'bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="flex w-full items-center justify-between px-4 sm:px-6 py-3 sm:py-4 transition-colors hover:bg-gray-50 cursor-pointer text-left"
                >
                  <h3
                    className={`font-medium text-base sm:text-lg transition-colors ${
                      isOpen ? 'text-gray-900' : 'text-gray-600'
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <div className="ml-3 sm:ml-4 flex-shrink-0 transition-transform duration-300">
                    <img
                      src={isOpen ? '/images/cancel-circle.svg' : '/images/add-circle.svg'}
                      alt="toggle"
                      className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="marketize-expand-down px-4 sm:px-6 py-4 pt-0 bg-gray-50">
                    <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
