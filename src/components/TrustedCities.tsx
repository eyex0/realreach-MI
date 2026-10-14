import React, { useState } from 'react';

export const TrustedCities: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>('London');

  const cities = [
    { name: 'London', households: '3,800,000+', activeCouriers: '140+' },
    { name: 'Manchester', households: '1,200,000+', activeCouriers: '68+' },
    { name: 'Bristol', households: '470,000+', activeCouriers: '35+' },
    { name: 'Birmingham', households: '1,150,000+', activeCouriers: '52+' },
    { name: 'Leeds', households: '810,000+', activeCouriers: '41+' },
    { name: 'Edinburgh', households: '530,000+', activeCouriers: '29+' },
    { name: 'Cardiff', households: '365,000+', activeCouriers: '24+' },
  ];

  return (
    <section className="py-6 sm:py-8 md:mt-6 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium text-gray-500 uppercase mb-4 sm:mb-6 tracking-wider">
          Trusted by BUSINESSES in
        </p>

        <div className="flex flex-nowrap overflow-x-auto items-center gap-2 sm:gap-3 pb-2 lg:justify-center no-scrollbar">
          {cities.map((city) => {
            const isSelected = selectedCity === city.name;
            return (
              <button
                key={city.name}
                type="button"
                onClick={() => setSelectedCity(city.name)}
                className={`px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex-shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-red-500 text-white border-red-500 shadow-sm'
                    : 'bg-gray-100 text-gray-700 border border-gray-200 hover:border-red-400 hover:bg-red-50 hover:text-red-600'
                }`}
              >
                {city.name}
              </button>
            );
          })}
        </div>

        {/* Dynamic City Info Subtext */}
        <div className="text-center mt-3 text-xs text-gray-500">
          Showing active verified distributors & letterbox coverage across{' '}
          <span className="font-semibold text-gray-900">{selectedCity}</span>
          {' • '}
          <span className="text-red-500 font-medium">
            {cities.find((c) => c.name === selectedCity)?.households} letterboxes mapped
          </span>
        </div>
      </div>
    </section>
  );
};
