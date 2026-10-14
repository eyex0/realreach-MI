import React from 'react';

export const ComparisonTable: React.FC = () => {
  const rows = [
    {
      feature: 'Real-time GPS tracking',
      marketize: { text: 'Live & stored locally', status: 'check' },
      traditional: { text: 'Retrospective / none', status: 'cross' },
      directMail: { text: '', status: 'cross' },
      royalMail: { text: '', status: 'cross' },
    },
    {
      feature: 'Photo evidence with location',
      marketize: { text: 'One-tap en route', status: 'check' },
      traditional: { text: 'Rare / unverified', status: 'cross' },
      directMail: { text: '', status: 'cross' },
      royalMail: { text: '', status: 'cross' },
    },
    {
      feature: 'Escrow-like payment protection',
      marketize: { text: 'Stripe via Marketize', status: 'check' },
      traditional: { text: 'Paid upfront, unreturned', status: 'cross' },
      directMail: { text: '', status: 'cross' },
      royalMail: { text: '', status: 'cross' },
    },
    {
      feature: 'Neutral dispute resolution',
      marketize: { text: 'Evidence-backed', status: 'check' },
      traditional: { text: 'No arbiter', status: 'cross' },
      directMail: { text: '', status: 'cross' },
      royalMail: { text: '', status: 'cross' },
    },
    {
      feature: 'Letterbox counting tools',
      marketize: { text: 'Included free', status: 'check' },
      traditional: { text: 'Some agencies-pending approval', status: 'plain' },
      directMail: { text: '', status: 'cross' },
      royalMail: { text: '', status: 'cross' },
    },
    {
      feature: 'Demographic targeting',
      marketize: { text: 'Postcode-level', status: 'check' },
      traditional: { text: 'Limited, some postcode level', status: 'plain' },
      directMail: { text: 'Address-level', status: 'check' },
      royalMail: { text: '', status: 'cross' },
    },
    {
      feature: 'QR code response tracking',
      marketize: { text: 'Included', status: 'check' },
      traditional: { text: '', status: 'cross' },
      directMail: { text: '', status: 'cross' },
      royalMail: { text: '', status: 'cross' },
    },
    {
      feature: 'Minimum campaign size',
      marketize: { text: '500 leaflets', status: 'check' },
      traditional: { text: '5,000+ typical', status: 'plain' },
      directMail: { text: 'High (cost-prohibitive)', status: 'plain' },
      royalMail: { text: 'High + long lead times', status: 'plain' },
    },
    {
      feature: 'CRM & client tools for agencies',
      marketize: { text: 'Full CRM, free', status: 'check' },
      traditional: { text: '', status: 'cross' },
      directMail: { text: '', status: 'cross' },
      royalMail: { text: '', status: 'cross' },
    },
    {
      feature: 'Cost per 1,000 homes',
      marketize: { text: 'Market-competitive', status: 'check' },
      traditional: { text: 'Higher', status: 'plain' },
      directMail: { text: 'Significantly higher', status: 'plain' },
      royalMail: { text: 'Highest', status: 'plain' },
    },
    {
      feature: 'Campaign cancellation risk',
      marketize: { text: 'Very low', status: 'check' },
      traditional: { text: 'Low–medium', status: 'plain' },
      directMail: { text: 'Medium', status: 'plain' },
      royalMail: { text: 'High (internal constraints)', status: 'plain' },
    },
  ];

  return (
    <section className="relative overflow-hidden feedback-bg sm:py-12 lg:py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <span className="inline-block text-red-500 badge-text bg-red-50 px-3 py-1 rounded-full mb-4">
            Honest Comparison
          </span>
          <h2 className="section-heading mb-4 !text-2xl sm:!text-4xl lg:!text-5xl !leading-tight text-gray-900">
            How we stack up
          </h2>
          <p className="card-subtext max-w-md mx-auto">
            See exactly what sets Marketize apart from traditional distribution companies, direct mail, and Royal Mail drops.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-0 min-w-[640px]">
              <thead>
                <tr className="border-b border-gray-200 bg-[#F5F4F4]">
                  <th className="text-left p-3 sm:p-5 text-sm sm:text-[18px] leading-[27px] font-medium tracking-normal text-gray-600 w-36 sm:w-52">
                    Features
                  </th>
                  <th className="p-3 sm:p-5 text-sm sm:text-[18px] leading-[27px] font-medium tracking-normal text-red-500 bg-[#FF22290F] text-center w-36 sm:w-44 border-t border-l border-r border-red-300 rounded-t-xl">
                    Marketize
                  </th>
                  <th className="p-3 sm:p-5 text-sm sm:text-[18px] leading-[27px] font-medium tracking-normal text-gray-600 text-center w-36 sm:w-44">
                    Traditional Distribution
                  </th>
                  <th className="p-3 sm:p-5 text-sm sm:text-[18px] leading-[27px] font-medium tracking-normal text-gray-600 text-center w-36 sm:w-44">
                    Direct Mail
                  </th>
                  <th className="p-3 sm:p-5 text-sm sm:text-[18px] leading-[27px] font-medium tracking-normal text-gray-600 text-center w-36 sm:w-44">
                    Royal Mail Door to Door
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => {
                  const isLast = idx === rows.length - 1;
                  return (
                    <tr key={idx} className="group transition-colors cursor-default border-t border-gray-100">
                      <td className="p-3 sm:p-5 text-xs sm:text-sm text-gray-500 transition-colors group-hover:bg-gray-50 border-t border-gray-100">
                        {row.feature}
                      </td>

                      {/* Marketize column */}
                      <td
                        className={`p-3 sm:p-5 text-center border-l border-r border-red-300 transition-colors bg-[#FF22290F] group-hover:bg-red-100/60 ${
                          isLast ? 'border-b-2 border-red-300 rounded-b-xl' : 'border-t border-red-200'
                        }`}
                      >
                        <span className="text-xs sm:text-sm text-gray-800 font-medium inline-flex items-center justify-center">
                          <span className="text-green-600 mr-1 font-bold">✓</span>
                          {row.marketize.text}
                        </span>
                      </td>

                      {/* Traditional Distribution */}
                      <td className="p-3 sm:p-5 text-center transition-colors group-hover:bg-gray-50 border-t border-gray-100">
                        {row.traditional.status === 'cross' ? (
                          <span className="text-xs sm:text-sm text-gray-600 inline-flex items-center justify-center">
                            <span className="text-red-400 mr-1 font-bold">✗</span>
                            {row.traditional.text}
                          </span>
                        ) : (
                          <span className="text-xs sm:text-sm text-gray-500">{row.traditional.text}</span>
                        )}
                      </td>

                      {/* Direct Mail */}
                      <td className="p-3 sm:p-5 text-center transition-colors group-hover:bg-gray-50 border-t border-gray-100">
                        {row.directMail.status === 'check' ? (
                          <span className="text-xs sm:text-sm text-gray-700 inline-flex items-center justify-center">
                            <span className="text-green-600 mr-1 font-bold">✓</span>
                            {row.directMail.text}
                          </span>
                        ) : row.directMail.status === 'cross' ? (
                          <span className="text-xs sm:text-sm text-gray-600 inline-flex items-center justify-center">
                            <span className="text-red-400 mr-1 font-bold">✗</span>
                            {row.directMail.text}
                          </span>
                        ) : (
                          <span className="text-xs sm:text-sm text-gray-500">{row.directMail.text}</span>
                        )}
                      </td>

                      {/* Royal Mail Door to Door */}
                      <td className="p-3 sm:p-5 text-center transition-colors group-hover:bg-gray-50 border-t border-gray-100">
                        {row.royalMail.status === 'cross' ? (
                          <span className="text-xs sm:text-sm text-gray-600 inline-flex items-center justify-center">
                            <span className="text-red-400 mr-1 font-bold">✗</span>
                            {row.royalMail.text}
                          </span>
                        ) : (
                          <span className="text-xs sm:text-sm text-gray-500">{row.royalMail.text}</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
