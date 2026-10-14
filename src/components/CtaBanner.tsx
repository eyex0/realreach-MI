import React from 'react';

interface CtaBannerProps {
  onOpenCampaignModal: () => void;
  onOpenDistributorModal: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  onOpenCampaignModal,
  onOpenDistributorModal,
}) => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
      <div
        className="relative overflow-hidden rounded-3xl bg-cover bg-center px-6 py-10 sm:px-10 sm:py-14 md:px-16 shadow-sm border border-red-100"
        style={{ backgroundImage: 'url("/images/bg/Gradient.svg")' }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
          <div className="max-w-lg text-center md:text-left">
            <h2 className="section-heading text-gray-900 mb-4 !text-2xl sm:!text-4xl lg:!text-5xl !leading-tight">
              Ready to run a campaign you can actually prove?
            </h2>
            <p className="card-subtext !text-sm sm:!text-base">
              Join the businesses, distributors, and agencies already using Marketize to make leaflet distribution trustworthy for the first time.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 sm:gap-4 shrink-0 w-full md:w-auto">
            <button
              type="button"
              onClick={onOpenCampaignModal}
              className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-8 sm:py-4 sm:px-10 rounded-full text-sm sm:text-base text-center transition-colors duration-300 transform whitespace-nowrap cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Start Your Campaign Today
            </button>
            <button
              type="button"
              onClick={onOpenDistributorModal}
              className="bg-white hover:bg-gray-50 border border-gray-200 text-red-500 font-medium py-3 px-8 sm:py-4 sm:px-10 rounded-full text-sm sm:text-base text-center transition-colors duration-300 transform whitespace-nowrap cursor-pointer shadow-xs hover:shadow-sm"
            >
              Become a Distributor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
