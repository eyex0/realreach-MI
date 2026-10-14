import React from 'react';

export const WhyMarketizeExists: React.FC = () => {
  return (
    <section className="sm:py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-red-500 badge-text bg-red-50 px-3 py-1 rounded-full mb-4 inline-block">
            Why Marketize Exists
          </span>
          <h2 className="section-heading mt-3 max-w-3xl mx-auto !text-2xl sm:!text-4xl lg:!text-5xl !leading-tight text-gray-900">
            Leaflet distribution has a decades-long trust problem. We fixed it.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Decades-long trust problems */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-md bg-red-50 border border-red-200 flex items-center justify-center mt-0.5">
                <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
              <div>
                <p className="home-card-text-sm text-gray-900">Distributors disappeared with your leaflets</p>
                <p className="card-subtext">No way to verify if a single door was knocked. Your budget - gone.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-md bg-red-50 border border-red-200 flex items-center justify-center mt-0.5">
                <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
              <div>
                <p className="home-card-text-sm text-gray-900">Partial deliveries claimed as full</p>
                <p className="card-subtext">Completing 40% of a route and billing for 100% was commonplace.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-md bg-red-50 border border-red-200 flex items-center justify-center mt-0.5">
                <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
              <div>
                <p className="home-card-text-sm text-gray-900">No proof. No recourse. No trust.</p>
                <p className="card-subtext">Without independent evidence, every dispute ended in a stalemate.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-md bg-red-50 border border-red-200 flex items-center justify-center mt-0.5">
                <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
              <div>
                <p className="home-card-text-sm text-gray-900">Honest distributors went unpaid</p>
                <p className="card-subtext">Distrustful clients withheld payment despite completed work - with no neutral arbiter.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-md bg-red-50 border border-red-200 flex items-center justify-center mt-0.5">
                <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
              <div>
                <p className="home-card-text-sm text-gray-900">No tools for planning or measuring ROI</p>
                <p className="card-subtext">Guesswork on volumes, areas, and response - with nothing to show for it.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Marketize solves this */}
          <div className="bg-gray-100 rounded-2xl p-8">
            <span className="inline-block bg-red-500 text-white badge-text px-4 py-1.5 rounded-full mb-4">
              Marketize solves this
            </span>
            <p className="card-header mb-6 text-gray-900">One platform. Every problem addressed.</p>
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-md border border-green-200 bg-green-100 flex items-center justify-center mt-0.5">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <p className="home-card-text-sm text-gray-900">Live GPS tracking</p>
                  <p className="card-subtext">Every street walked is logged in near real time. No more blind faith.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-md border border-green-200 bg-green-100 flex items-center justify-center mt-0.5">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <p className="home-card-text-sm text-gray-900">Escrow-like payments</p>
                  <p className="card-subtext">Funds only release when delivery is verified. Both parties protected.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-md border border-green-200 bg-green-100 flex items-center justify-center mt-0.5">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <p className="home-card-text-sm text-gray-900">Independent dispute resolution</p>
                  <p className="card-subtext">Marketize reviews GPS data, photos, and logs as a neutral third party.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-md border border-green-200 bg-green-100 flex items-center justify-center mt-0.5">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <p className="home-card-text-sm text-gray-900">Geo-tagged photo evidence</p>
                  <p className="card-subtext">Timestamped, location-stamped, visible on your live map.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-md border border-green-200 bg-green-100 flex items-center justify-center mt-0.5">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <p className="home-card-text-sm text-gray-900">Letterbox counting &amp; campaign planning</p>
                  <p className="card-subtext">Forecast volumes accurately, target the right areas.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-md border border-green-200 bg-green-100 flex items-center justify-center mt-0.5">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <p className="home-card-text-sm text-gray-900">QR code response tracking</p>
                  <p className="card-subtext">Finally measure what your leaflets actually achieve.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
