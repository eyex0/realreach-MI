import React from 'react';

interface SimpleProcessProps {
  onOpenCampaignModal: () => void;
  onOpenGpsDemo: () => void;
}

export const SimpleProcess: React.FC<SimpleProcessProps> = ({
  onOpenCampaignModal,
  onOpenGpsDemo,
}) => {
  return (
    <section id="how-it-works" className="sm:py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="inline-block text-red-500 badge-text bg-red-50 px-3 py-1 rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="section-heading !text-2xl sm:!text-4xl lg:!text-5xl !leading-tight text-gray-900">
            Up and running in four steps
          </h2>
        </div>

        <div className="relative">
          <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gray-200 hidden md:block"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-red-100 text-red-500 relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 text-xl sm:text-2xl font-bold shadow-xs">
                1
              </div>
              <p className="home-card-text mb-2 text-center text-gray-900">Brief &amp; Plan</p>
              <p className="card-subtext leading-relaxed !text-xs sm:!text-base">
                Define your goal, target area, and volume using our letterbox counting and demographic tools. Know exactly what you're paying for before you commit.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-100 text-gray-500 relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 text-xl sm:text-2xl font-bold shadow-xs">
                2
              </div>
              <p className="home-card-text mb-2 text-center text-gray-900">Book &amp; Pay Securely</p>
              <p className="card-subtext leading-relaxed !text-xs sm:!text-base">
                Choose your distribution type and a verified distributor. Funds go into an escrow-like system - no one touches them until the job is done and confirmed.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div
                onClick={onOpenGpsDemo}
                className="bg-gray-100 hover:bg-red-50 text-gray-500 hover:text-red-500 relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 text-xl sm:text-2xl font-bold shadow-xs cursor-pointer transition-colors"
                title="Click to view live GPS demo"
              >
                3
              </div>
              <p className="home-card-text mb-2 text-center text-gray-900">Watch It Live</p>
              <p className="card-subtext leading-relaxed !text-xs sm:!text-base">
                Follow your distributor's GPS route in near real time. Every street, every timestamp. Photo evidence appears as pins on your campaign map.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-100 text-gray-500 relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 text-xl sm:text-2xl font-bold shadow-xs">
                4
              </div>
              <p className="home-card-text mb-2 text-center text-gray-900">Measure &amp; Scale</p>
              <p className="card-subtext leading-relaxed !text-xs sm:!text-base">
                Receive your GPS completion report. Track responses via QR codes. Use real data to plan your next drop and grow your reach with confidence.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 sm:mt-14">
          <button
            type="button"
            onClick={onOpenCampaignModal}
            className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-8 sm:py-4 sm:px-10 rounded-full transition-colors text-sm sm:text-base cursor-pointer shadow-md hover:shadow-lg"
          >
            See the Full Process
          </button>
        </div>
      </div>
    </section>
  );
};
