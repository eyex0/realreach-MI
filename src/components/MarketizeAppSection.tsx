import React from 'react';

export const MarketizeAppSection: React.FC = () => {
  return (
    <section className="sm:py-12 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="inline-block text-red-500 badge-text bg-red-50 px-3 py-1 rounded-full mb-4">
              The Marketize App
            </span>
            <h2 className="section-heading mb-6 sm:mb-10 !text-2xl sm:!text-4xl lg:!text-5xl !leading-tight text-gray-900">
              Your smartphone is the only supervisor you need.
            </h2>

            <div className="space-y-5 sm:space-y-7">
              {/* Feature 1 */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center">
                  <img src="/images/home/app/gps.svg" alt="Offline-first GPS recording" className="mt-3 w-8 h-8 object-contain" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <p className="home-card-text !text-base sm:!text-xl lg:!text-[20px] lg:!font-medium lg:!leading-[30px] text-gray-900">
                      Offline-first GPS recording
                    </p>
                  </div>
                  <p className="card-subtext leading-relaxed !text-sm sm:!text-base">
                    The app captures your full route even without mobile data. Everything syncs automatically once signal is restored - no gaps in coverage.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center">
                  <img src="/images/home/app/photo.svg" alt="One-tap geo-tagged photos" className="mt-3 w-8 h-8 object-contain" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <p className="home-card-text !text-base sm:!text-xl lg:!text-[20px] lg:!font-medium lg:!leading-[30px] text-gray-900">
                      One-tap geo-tagged photos
                    </p>
                  </div>
                  <p className="card-subtext leading-relaxed !text-sm sm:!text-base">
                    Take timestamped, location-stamped photos en route in a single tap. They appear as pins on your client's live GPS map instantly on sync.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center">
                  <img src="/images/home/app/route.svg" alt="Route Assignment" className="mt-3 w-8 h-8 object-contain" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <p className="home-card-text !text-base sm:!text-xl lg:!text-[20px] lg:!font-medium lg:!leading-[30px] text-gray-900">
                      Route Assignment
                    </p>
                  </div>
                  <p className="card-subtext leading-relaxed !text-sm sm:!text-base">
                    Distributors view assigned postcode sectors and optimized street routes directly on their mobile screen. Clear boundaries, no overlapping or missed streets.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center">
                  <img src="/images/home/app/chat.svg" alt="Direct client communication" className="mt-3 w-8 h-8 object-contain" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <p className="home-card-text !text-base sm:!text-xl lg:!text-[20px] lg:!font-medium lg:!leading-[30px] text-gray-900">
                      Direct client communication
                    </p>
                  </div>
                  <p className="card-subtext leading-relaxed !text-sm sm:!text-base">
                    Message clients directly through the app. Update them on progress, flag issues, and confirm completion - all in one place.
                  </p>
                </div>
              </div>
            </div>

            {/* App Store / Google Play buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8 sm:mt-10">
              <a
                href="https://play.google.com/store/apps/details?id=com.marketizeltd.marketize&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-opacity hover:opacity-80"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-10 sm:h-12 w-auto"
                />
              </a>
              <a
                href="https://apps.apple.com/us/app/marketize/id6769349834"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-opacity hover:opacity-80"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on the App Store"
                  className="h-10 sm:h-12 w-auto"
                />
              </a>
            </div>
          </div>

          {/* Right Phone Visual */}
          <div className="self-stretch flex bg-[#F5F4F4] rounded-2xl overflow-hidden mt-6 lg:mt-0 p-4 sm:p-8 items-center justify-center">
            <img
              src="/images/home/phone.avif"
              alt="Marketize mobile tracking app interface"
              className="w-full max-w-md rounded-3xl object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
