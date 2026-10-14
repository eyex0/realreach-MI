import React from 'react';

interface FooterProps {
  onOpenCampaignModal: () => void;
  onOpenDistributorModal: () => void;
  onOpenContactModal: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCampaignModal,
  onOpenDistributorModal,
  onOpenContactModal,
  onNavigate,
}) => {
  return (
    <footer className="mt-10 lg:mt-20 bg-color border-t border-gray-200">
      <div className="text-gray-600 py-5 px-5">
        <div className="max-w-7xl mx-auto pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
            {/* Column 1: Brand & Social */}
            <div>
              <a href="/" className="inline-block mb-5">
                <span className="flex items-center gap-2" aria-label="Realreach">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-lg font-black text-white shadow-sm">R</span>
                  <span className="text-[22px] font-extrabold tracking-[-0.04em] text-gray-900">Real<span className="text-red-500">reach</span></span>
                </span>
              </a>
              <p className="text-gray-500 text-sm leading-6 mb-6">
                Milan's first GPS-verified leaflet distribution marketplace. Bringing trust, transparency, and technology to an industry that needed all three.
              </p>
              <p className="text-sm font-medium text-gray-600 mb-3">Follow us</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center border border-red-200">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                </div>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-800 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="https://x.com/RealreachBiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-800 transition-colors"
                  aria-label="X / Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-800 transition-colors"
                  aria-label="YouTube"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"></path>
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/realreach.biz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-800 transition-colors"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Platform */}
            <div>
              <h3 className="text-gray-900 font-semibold text-[14px] leading-[21px] tracking-[0.0025em] mb-6">
                PLATFORM
              </h3>
              <ul className="space-y-3 text-gray-500 font-normal text-[14px] leading-[21px] tracking-[0.0025em]">
                <li>
                  <button onClick={() => onNavigate('how-it-works')} className="hover:text-red-500 transition-colors cursor-pointer text-left">
                    How it Works
                  </button>
                </li>
                <li>
                  <button onClick={onOpenCampaignModal} className="hover:text-red-500 transition-colors cursor-pointer text-left">
                    QR Code Studio
                  </button>
                </li>
                <li>
                  <button onClick={onOpenDistributorModal} className="hover:text-red-500 transition-colors cursor-pointer text-left">
                    For Distributors
                  </button>
                </li>
                <li>
                  <button onClick={onOpenDistributorModal} className="hover:text-red-500 transition-colors cursor-pointer text-left">
                    For Agencies
                  </button>
                </li>
                <li>
                  <button onClick={onOpenContactModal} className="hover:text-red-500 transition-colors cursor-pointer text-left">
                    Career
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div>
              <h3 className="text-gray-900 font-semibold text-[14px] leading-[21px] tracking-[0.0025em] mb-6">
                RESOURCES
              </h3>
              <ul className="space-y-3 text-gray-500 font-normal text-[14px] leading-[21px] tracking-[0.0025em]">
                <li>
                  <button onClick={() => onNavigate('services')} className="hover:text-red-500 transition-colors cursor-pointer text-left">
                    Blog
                  </button>
                </li>
                <li>
                  <button onClick={onOpenContactModal} className="hover:text-red-500 transition-colors cursor-pointer text-left">
                    Help Centre
                  </button>
                </li>
                <li>
                  <button onClick={onOpenCampaignModal} className="hover:text-red-500 transition-colors cursor-pointer text-left">
                    Campaign Planning
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('home')} className="hover:text-red-500 transition-colors cursor-pointer text-left">
                    Coverage
                  </button>
                </li>
                <li>
                  <a
                    href="https://realreach.biz/the-complete-guide-book.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-500 transition-colors"
                  >
                    The Complete Guide Book
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Legal */}
            <div>
              <h3 className="text-gray-900 font-semibold text-[14px] leading-[21px] tracking-[0.0025em] mb-6">
                LEGAL
              </h3>
              <ul className="space-y-3 text-gray-500 font-normal text-[14px] leading-[21px] tracking-[0.0025em]">
                <li>
                  <button onClick={onOpenContactModal} className="hover:text-red-500 transition-colors cursor-pointer text-left">
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button onClick={onOpenContactModal} className="hover:text-red-500 transition-colors cursor-pointer text-left">
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button onClick={onOpenContactModal} className="hover:text-red-500 transition-colors cursor-pointer text-left">
                    Dispute Policy
                  </button>
                </li>
                <li>
                  <button onClick={onOpenContactModal} className="hover:text-red-500 transition-colors cursor-pointer text-left">
                    Cookies Policy
                  </button>
                </li>
                <li>
                  <button onClick={onOpenContactModal} className="hover:text-red-500 transition-colors cursor-pointer text-left">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar: Copyright and Mobile App Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-t border-gray-200">
            <span className="text-gray-500 text-sm">
              © 2026 Realreach Systems Limited. All rights reserved.
            </span>
            <div className="flex items-center gap-3">
              <span className="text-gray-700 text-sm font-medium">Download mobile app</span>
              <a
                href="https://apps.apple.com/us/app/realreach/id6769349834"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <img src="/images/appstore.svg" alt="Download on the App Store" className="h-9 w-auto" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.realreachltd.realreach&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <img src="/images/googleplay.svg" alt="Get it on Google Play" className="h-9 w-auto" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
