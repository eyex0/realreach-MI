import React from 'react';

export const FeaturedIn: React.FC = () => {
  return (
    <section className="py-6 sm:py-10 sm:pb-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <p className="text-center text-lg font-medium text-gray-900 uppercase mb-3 sm:mb-4 tracking-normal leading-[27px]">
          As featured in
        </p>
        <a
          href="https://www.printweek.com/content/news/platform-launch-aims-to-bring-trust-to-leaflet-distribution"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-85 transition-opacity"
        >
          <img
            src="/images/home/image37.svg"
            alt="Printweek"
            className="h-7 sm:h-9 w-auto object-contain"
          />
        </a>
      </div>
    </section>
  );
};
