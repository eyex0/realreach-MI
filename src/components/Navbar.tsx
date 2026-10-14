import React, { useState } from 'react';
import { Menu, X, ChevronDown, PhoneCall, PlusCircle, UserPlus, Building2 } from 'lucide-react';

interface NavbarProps {
  onOpenCampaignModal: () => void;
  onOpenDistributorModal: () => void;
  onOpenSignInModal: () => void;
  onOpenContactModal: () => void;
  onNavigate: (sectionId: string) => void;
  currentSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCampaignModal,
  onOpenDistributorModal,
  onOpenSignInModal,
  onOpenContactModal,
  onNavigate,
  currentSection = 'home',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAddMenuOpen, setIsAddMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <nav className="border-b border-gray-100 fixed top-0 left-0 right-0 w-full z-[200] transition-colors duration-300 bg-white h-16">
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo & Main Nav Links */}
          <div className="flex items-center gap-10">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, 'home')}
              className="flex flex-shrink-0 items-center gap-2"
            >
              <img src="/images/Logo.png" alt="Marketize Logo" className="h-[36px] w-auto object-contain" />
            </a>
            <div className="hidden items-center gap-6 lg:flex">
              <a
                href="#home"
                onClick={(e) => handleLinkClick(e, 'home')}
                className={`font-normal text-[14px] leading-[21px] tracking-[0.0025em] transition-colors hover:text-red-500 ${
                  currentSection === 'home' ? 'text-red-500 font-medium' : 'text-black'
                }`}
              >
                Home
              </a>
              <a
                href="#services"
                onClick={(e) => handleLinkClick(e, 'services')}
                className={`font-normal text-[14px] leading-[21px] tracking-[0.0025em] transition-colors hover:text-red-500 ${
                  currentSection === 'services' ? 'text-red-500 font-medium' : 'text-black'
                }`}
              >
                Services
              </a>
              <a
                href="#campaigns"
                onClick={(e) => handleLinkClick(e, 'campaigns')}
                className={`font-normal text-[14px] leading-[21px] tracking-[0.0025em] transition-colors hover:text-red-500 ${
                  currentSection === 'campaigns' ? 'text-red-500 font-medium' : 'text-black'
                }`}
              >
                Campaigns
              </a>
              <a
                href="#how-it-works"
                onClick={(e) => handleLinkClick(e, 'how-it-works')}
                className={`font-normal text-[14px] leading-[21px] tracking-[0.0025em] transition-colors hover:text-red-500 ${
                  currentSection === 'how-it-works' ? 'text-red-500 font-medium' : 'text-black'
                }`}
              >
                How it works
              </a>
              <a
                href="#contact-us"
                onClick={(e) => handleLinkClick(e, 'contact-us')}
                className={`font-normal text-[14px] leading-[21px] tracking-[0.0025em] transition-colors hover:text-red-500 ${
                  currentSection === 'contact-us' ? 'text-red-500 font-medium' : 'text-black'
                }`}
              >
                Contact us
              </a>
            </div>
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-4">
            {/* Phone Call link */}
            <a
              href="tel:03330154160"
              className="nav-action hidden md:flex items-center gap-2 rounded-full border border-red-100 px-4 py-1.5 hover:bg-red-50 transition-colors"
            >
              <img src="/images/PhoneCall.svg" alt="Phone" className="h-5 w-5" />
              <span className="flex flex-col leading-tight">
                <span className="text-xs text-gray-500">Call us</span>
                <span className="text-sm font-medium text-black">0333 015 4160</span>
              </span>
            </a>

            <a
              href="tel:03330154160"
              className="flex md:hidden items-center justify-center h-9 w-9 rounded-full border border-red-100 hover:bg-red-50 transition-colors"
              aria-label="Call us 0333 015 4160"
            >
              <PhoneCall className="w-4.5 h-4.5 text-red-500" />
            </a>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-4 lg:flex">
              {/* + Add Yours Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsAddMenuOpen(!isAddMenuOpen)}
                  className="nav-action inline-flex items-center justify-center gap-1.5 rounded-full border border-red-300 bg-red-50 px-[24px] py-2 text-sm font-medium text-red-500 transition-all duration-300 hover:bg-red-100 cursor-pointer"
                >
                  <span className="text-base leading-none">+</span> Add Yours
                  <ChevronDown className={`w-3.5 h-3.5 text-red-400 transition-transform ${isAddMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {isAddMenuOpen && (
                  <div
                    className="absolute right-0 mt-2 w-56 rounded-2xl bg-white p-2 shadow-xl border border-gray-100 z-50 animate-in fade-in zoom-in-95 duration-150"
                    onMouseLeave={() => setIsAddMenuOpen(false)}
                  >
                    <button
                      onClick={() => {
                        setIsAddMenuOpen(false);
                        onOpenCampaignModal();
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2.5 text-left text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors cursor-pointer"
                    >
                      <PlusCircle className="w-4 h-4 text-red-500" />
                      <div>
                        <div className="font-medium">Post a Campaign</div>
                        <div className="text-xs text-gray-500">For businesses & marketers</div>
                      </div>
                    </button>
                    <button
                      onClick={() => {
                        setIsAddMenuOpen(false);
                        onOpenDistributorModal();
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2.5 text-left text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors cursor-pointer"
                    >
                      <UserPlus className="w-4 h-4 text-red-500" />
                      <div>
                        <div className="font-medium">Distributor Account</div>
                        <div className="text-xs text-gray-500">Deliver & earn flexibly</div>
                      </div>
                    </button>
                    <button
                      onClick={() => {
                        setIsAddMenuOpen(false);
                        onOpenDistributorModal();
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2.5 text-left text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors cursor-pointer"
                    >
                      <Building2 className="w-4 h-4 text-red-500" />
                      <div>
                        <div className="font-medium">Agency Onboarding</div>
                        <div className="text-xs text-gray-500">Free CRM & multi-crew GPS</div>
                      </div>
                    </button>
                  </div>
                )}
              </div>

              <span className="text-gray-300 text-lg">|</span>

              <button
                type="button"
                onClick={onOpenSignInModal}
                className="nav-action inline-flex items-center justify-center px-[24px] text-sm font-medium text-gray-800 transition-colors hover:text-red-500 cursor-pointer"
              >
                Log in
              </button>

              <button
                type="button"
                onClick={onOpenCampaignModal}
                className="nav-action inline-flex items-center justify-center rounded-full bg-red-500 px-[25px] py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-red-600 cursor-pointer shadow-xs"
              >
                Sign up
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 transition-colors text-gray-700 hover:bg-gray-100 cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bg-white border-b border-gray-200 px-5 py-6 space-y-4 shadow-xl z-50">
          <div className="flex flex-col space-y-3 text-sm font-medium text-gray-800">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, 'home')}
              className="py-2 hover:text-red-500 border-b border-gray-100"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={(e) => handleLinkClick(e, 'services')}
              className="py-2 hover:text-red-500 border-b border-gray-100"
            >
              Services
            </a>
            <a
              href="#campaigns"
              onClick={(e) => handleLinkClick(e, 'campaigns')}
              className="py-2 hover:text-red-500 border-b border-gray-100"
            >
              Campaigns
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => handleLinkClick(e, 'how-it-works')}
              className="py-2 hover:text-red-500 border-b border-gray-100"
            >
              How it works
            </a>
            <a
              href="#contact-us"
              onClick={(e) => handleLinkClick(e, 'contact-us')}
              className="py-2 hover:text-red-500 border-b border-gray-100"
            >
              Contact us
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCampaignModal();
              }}
              className="w-full text-center py-3 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-full"
            >
              Start Your Campaign
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDistributorModal();
              }}
              className="w-full text-center py-3 text-sm font-medium text-red-500 bg-red-50 hover:bg-red-100 border border-red-200 rounded-full"
            >
              Become a Distributor
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSignInModal();
              }}
              className="w-full text-center py-2.5 text-sm font-medium text-gray-700 hover:text-red-500"
            >
              Log in to Account
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
