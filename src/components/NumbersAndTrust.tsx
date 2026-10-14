import React from 'react';
import { Star } from 'lucide-react';

export const NumbersAndTrust: React.FC = () => {
  return (
    <section className="feedback-bg sm:py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-14">
          <span className="inline-block text-red-500 badge-text bg-red-50 px-3 py-1 rounded-full mb-4">
            Results &amp; Trust
          </span>
          <h2 className="section-heading !text-2xl sm:!text-4xl lg:!text-5xl !leading-tight text-gray-900">
            Numbers that speak for themselves
          </h2>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-10">
          <div className="bg-white rounded-2xl p-4 sm:p-6 text-center shadow-xs border border-gray-100">
            <p className="text-2xl sm:text-4xl font-medium text-gray-900 mb-1 sm:mb-2">
              64<span className="text-red-500"> yrs</span>
            </p>
            <p className="card-subtext leading-snug !text-xs sm:!text-base">
              Combined industry experience behind the platform
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-6 text-center shadow-xs border border-gray-100">
            <p className="text-2xl sm:text-4xl font-medium text-gray-900 mb-1 sm:mb-2">
              0.5–4<span className="text-red-500">%</span>
            </p>
            <p className="card-subtext leading-snug !text-xs sm:!text-base">
              Typical conversion rate - up to 4% with strong offers
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-6 text-center shadow-xs border border-gray-100">
            <p className="text-2xl sm:text-4xl font-medium text-gray-900 mb-1 sm:mb-2">
              500<span className="text-red-500">+</span>
            </p>
            <p className="card-subtext leading-snug !text-xs sm:!text-base">
              Businesses and distributors already on platform
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-6 text-center shadow-xs border border-gray-100">
            <p className="text-2xl sm:text-4xl font-medium text-gray-900 mb-1 sm:mb-2">
              5-10<span className="text-red-500">%</span>
            </p>
            <p className="card-subtext leading-snug !text-xs sm:!text-base">
              Natural wastage buffer accounted for in every plan
            </p>
          </div>
        </div>

        {/* 2 Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl bg-white p-6 gap-4 border border-gray-100 shadow-xs">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4.5 h-4.5 fill-amber-500 stroke-amber-500" />
              ))}
            </div>
            <p className="flex-1 text-sm text-gray-700 leading-relaxed italic">
              "As a sole trader this platform changed everything. I can now prove every delivery I do. Clients trust me, I get paid on time, every time. No more arguments."
            </p>
            <div className="flex items-center gap-3 mt-2">
              <div className="w-10 h-10 flex-shrink-0 rounded-full bg-red-100 flex items-center justify-center text-sm font-bold text-red-500">
                MD
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Mike D.</p>
                <p className="text-xs text-gray-500">Freelance Distributor, Manchester</p>
              </div>
            </div>
          </div>

          <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl bg-white p-6 gap-4 border border-gray-100 shadow-xs">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4.5 h-4.5 fill-amber-500 stroke-amber-500" />
              ))}
            </div>
            <p className="flex-1 text-sm text-gray-700 leading-relaxed italic">
              "We run campaigns for 20+ clients. The CRM, live tracking, and automated reports have saved us hours every week. Our clients love the transparency."
            </p>
            <div className="flex items-center gap-3 mt-2">
              <div className="w-10 h-10 flex-shrink-0 rounded-full bg-red-100 flex items-center justify-center text-sm font-bold text-red-500">
                RP
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Rachel P.</p>
                <p className="text-xs text-gray-500">Leaflet Distribution Agency, Bristol</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
