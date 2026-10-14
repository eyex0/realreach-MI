import React from 'react';

interface HeroProps {
  onOpenCampaignModal: () => void;
  onOpenDistributorModal: () => void;
  onOpenGpsDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenCampaignModal,
  onOpenDistributorModal,
  onOpenGpsDemo,
}) => {
  return (
    <section id="home" className="relative overflow-hidden pt-16">
      {/* Background Screenshot with soft overlay */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center pointer-events-none scale-105"
        style={{ backgroundImage: 'url(/images/bg/Screenshot.avif)' }}
      ></div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'rgba(255,255,255,0.95)' }}
      ></div>

      <div className="relative mx-auto px-4 sm:px-6 py-10 lg:py-18 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Glass Card with Value Proposition */}
          <div className="realreach-fade-up space-y-5 sm:space-y-8 w-full backdrop-blur-[19px] rounded-3xl p-5 sm:p-8 bg-[#FFFFFF6E]/43 shadow-xs">
            <div className="inline-flex items-center gap-2 bg-red-500 border border-red-500 rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
              <span className="w-2 h-2 bg-white rounded-full shrink-0 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-medium text-white">
                Milan's First GPS-Verified Distribution Marketplace
              </span>
            </div>

            <h1 className="font-medium text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-tight lg:leading-20 tracking-[-0.015em]">
              Leaflet distribution <br /> you can finally trust
            </h1>

            <p className="text-gray-700 text-base sm:text-[18px] leading-7">
              Realreach is the only platform that puts live GPS tracking, escrow-like payments, and independent dispute resolution between every client and every distributor - eliminating decades of industry dishonesty in one place.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={onOpenCampaignModal}
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 sm:py-3.5 sm:px-9 rounded-full text-sm sm:text-[17px] leading-5.5 tracking-[0.43px] text-center transition-colors duration-300 whitespace-nowrap cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5 transform"
              >
                Start Your Campaign
              </button>
              <button
                type="button"
                onClick={onOpenDistributorModal}
                className="bg-red-50 hover:bg-red-100/70 border border-red-300 font-medium py-3 px-6 sm:py-3.5 sm:px-9 rounded-full text-sm sm:text-[17px] leading-5.5 tracking-[0.43px] text-center transition-colors duration-300 whitespace-nowrap text-red-500 cursor-pointer"
              >
                Become a Distributor
              </button>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2 shrink-0">
                <img
                  src="/images/home/icons/AvatarGroup.png"
                  alt="Trusted users across Milan, Italy"
                  className="w-36 sm:w-50 h-auto"
                />
              </div>
              <p className="text-sm text-gray-700 font-medium max-w-50 leading-snug">
                Trusted by 500+ businesses and distributors across Milan, Italy
              </p>
            </div>
          </div>

          {/* Right Column: 3 Live Telemetry Cards */}
          <div className="relative flex flex-col gap-4 lg:pl-8 h-full self-stretch">
            {/* Card 1: Live Delivery Tracking */}
            <div className="realreach-fade-up flex-1 bg-[#FFFFFF6E]/43 backdrop-blur-[5px] rounded-2xl shadow-sm p-4 sm:p-6 w-full lg:max-w-md lg:ml-auto border border-white/60 [--motion-delay:120ms]">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex h-10 w-10 sm:h-13 sm:w-13 items-center justify-center shrink-0">
                  <img src="/images/home/icons/icon.svg" alt="Live Delivery Tracking" className="h-10 w-10" />
                </div>
                <div>
                  <p className="font-normal text-xs sm:text-[14px] leading-5.25 tracking-[0.0025em] text-gray-500 uppercase">
                    Live Delivery Tracking
                  </p>
                  <p className="font-medium text-lg sm:text-[20px] leading-7.5 tracking-[0] text-gray-900">
                    Route 78% Complete
                  </p>
                </div>
              </div>

              <div className="flex justify-between font-medium text-xs sm:text-[14px] leading-5.25 tracking-[0.0025em] text-gray-500 mb-1">
                <span>Progress</span>
                <span>78%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-3 overflow-hidden">
                <div className="bg-red-500 h-2 rounded-full transition-all duration-1000" style={{ width: '78%' }}></div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="border border-green-200 text-[#4CAF50] text-xs px-3 py-1 rounded-full bg-[#4CAF50]/10 font-medium">
                  ✓ 7,842 delivered
                </span>
                <span className="bg-white border border-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
                  2,158 remaining
                </span>
                <button
                  onClick={onOpenGpsDemo}
                  className="border border-green-200 text-[#4CAF50] text-xs px-3 py-1 rounded-full bg-[#4CAF50]/10 font-medium hover:bg-[#4CAF50]/20 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  GPS Active (Click to Demo)
                </button>
              </div>
            </div>

            {/* Card 2: Escrow-like Payment */}
            <div className="realreach-fade-up flex-1 bg-[#FFFFFF6E]/43 backdrop-blur-[5px] rounded-2xl shadow-sm p-4 sm:p-6 w-full lg:max-w-md lg:ml-auto border border-white/60 [--motion-delay:240ms]">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex h-10 w-10 sm:h-13 sm:w-13 items-center justify-center shrink-0">
                  <img src="/images/home/icons/lock.svg" alt="Escrow Payment" className="h-10 w-10" />
                </div>
                <div>
                  <p className="font-normal text-xs sm:text-[14px] leading-5.25 tracking-[0.0025em] text-gray-500 uppercase">
                    ESCROW-LIKE PAYMENT
                  </p>
                  <p className="font-medium text-lg sm:text-[20px] leading-7.5 tracking-[0] text-gray-900">
                    €480 protected
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="border border-green-200 text-[#4CAF50] text-xs px-3 py-1 rounded-full bg-[#4CAF50]/10 font-medium">
                  ✓ Funds held by Stripe via Realreach
                </span>
                <span className="bg-white border border-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
                  Releases on completion
                </span>
              </div>
            </div>

            {/* Card 3: Photo Evidence */}
            <div className="realreach-fade-up flex-1 bg-[#FFFFFF6E]/43 backdrop-blur-[5px] rounded-2xl shadow-sm p-4 sm:p-6 w-full lg:max-w-md lg:ml-auto border border-white/60 [--motion-delay:360ms]">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex h-10 w-10 sm:h-13 sm:w-13 items-center justify-center shrink-0">
                  <img src="/images/home/icons/photo.svg" alt="Photo Evidence" className="h-10 w-10" />
                </div>
                <div>
                  <p className="font-normal text-xs sm:text-[14px] leading-5.25 tracking-[0.0025em] text-gray-500 uppercase">
                    Photo Evidence
                  </p>
                  <p className="font-medium text-lg sm:text-[20px] leading-7.5 tracking-[0] text-gray-900">
                    14 geo-tagged photos
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="border border-green-200 text-[#4CAF50] text-xs px-3 py-1 rounded-full bg-[#4CAF50]/10 font-medium">
                  ✓ Timestamped
                </span>
                <span className="border border-green-200 text-[#4CAF50] text-xs px-3 py-1 rounded-full bg-[#4CAF50]/10 font-medium">
                  ✓ Location-stamped
                </span>
                <span className="border border-green-200 text-[#4CAF50] text-xs px-3 py-1 rounded-full bg-[#4CAF50]/10 font-medium">
                  ✓ On map
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
