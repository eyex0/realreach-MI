import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedIn } from './components/FeaturedIn';
import { WhyRealreachExists } from './components/WhyRealreachExists';
import { CoreAdvantages } from './components/CoreAdvantages';
import { ComparisonTable } from './components/ComparisonTable';
import { SimpleProcess } from './components/SimpleProcess';
import { OperatingSystem } from './components/OperatingSystem';
import { WhoItsFor } from './components/WhoItsFor';
import { NumbersAndTrust } from './components/NumbersAndTrust';
import { TrustedCities } from './components/TrustedCities';
import { RealreachAppSection } from './components/RealreachAppSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';

import { CampaignModal } from './components/CampaignModal';
import { DistributorModal } from './components/DistributorModal';
import { SignInModal } from './components/SignInModal';
import { GpsModal } from './components/GpsModal';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [isCampaignModalOpen, setIsCampaignModalOpen] = useState(false);
  const [isDistributorModalOpen, setIsDistributorModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isGpsModalOpen, setIsGpsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  const handleNavigate = (sectionId: string) => {
    setCurrentSection(sectionId);
    if (sectionId === 'contact-us') {
      setIsContactModalOpen(true);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-red-500 selection:text-white">
      {/* Fixed Header / Navigation matching realreach.biz exactly */}
      <Navbar
        onOpenCampaignModal={() => setIsCampaignModalOpen(true)}
        onOpenDistributorModal={() => setIsDistributorModalOpen(true)}
        onOpenSignInModal={() => setIsSignInModalOpen(true)}
        onOpenContactModal={() => setIsContactModalOpen(true)}
        onNavigate={handleNavigate}
        currentSection={currentSection}
      />

      <main className="flex-1">
        {/* Section 0: Exact Hero with Screenshot background, value proposition, and 3 telemetry cards */}
        <Hero
          onOpenCampaignModal={() => setIsCampaignModalOpen(true)}
          onOpenDistributorModal={() => setIsDistributorModalOpen(true)}
          onOpenGpsDemo={() => setIsGpsModalOpen(true)}
        />

        {/* Section 1: As featured in Printweek */}
        <FeaturedIn />

        {/* Section 2: Why Realreach Exists - Decades-long trust problem vs Realreach Solves This */}
        <WhyRealreachExists />

        {/* Section 3: Six reasons Realreach is in a category of its own */}
        <CoreAdvantages onCardClick={() => setIsCampaignModalOpen(true)} />

        {/* Section 4: Honest Comparison - How we stack up */}
        <ComparisonTable />

        {/* Section 5: Simple Process - Up and running in four steps */}
        <SimpleProcess
          onOpenCampaignModal={() => setIsCampaignModalOpen(true)}
          onOpenGpsDemo={() => setIsGpsModalOpen(true)}
        />

        {/* Section 6: Everything Included - A complete operating system for leaflet distribution */}
        <OperatingSystem onCardClick={() => setIsCampaignModalOpen(true)} />

        {/* Section 7: Who It's For - Everyone wins for the first time */}
        <WhoItsFor
          onSelectRole={(role) => {
            if (role === 'client') setIsCampaignModalOpen(true);
            else setIsDistributorModalOpen(true);
          }}
        />

        {/* Section 8: Results & Trust - Numbers that speak for themselves */}
        <NumbersAndTrust />

        {/* Section 9: Trusted by BUSINESSES in - City buttons */}
        <TrustedCities />

        {/* Section 10: The Realreach App - Your smartphone is the only supervisor you need */}
        <RealreachAppSection />

        {/* Section 11: Got questions? Frequently asked questions */}
        <FaqSection />

        {/* Section 12: Ready to run a campaign you can actually prove? */}
        <CtaBanner
          onOpenCampaignModal={() => setIsCampaignModalOpen(true)}
          onOpenDistributorModal={() => setIsDistributorModalOpen(true)}
        />
      </main>

      {/* Footer matching realreach.biz exactly */}
      <Footer
        onOpenCampaignModal={() => setIsCampaignModalOpen(true)}
        onOpenDistributorModal={() => setIsDistributorModalOpen(true)}
        onOpenContactModal={() => setIsContactModalOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Interactive Modals */}
      <CampaignModal
        isOpen={isCampaignModalOpen}
        onClose={() => setIsCampaignModalOpen(false)}
      />

      <DistributorModal
        isOpen={isDistributorModalOpen}
        onClose={() => setIsDistributorModalOpen(false)}
      />

      <SignInModal
        isOpen={isSignInModalOpen}
        onClose={() => setIsSignInModalOpen(false)}
      />

      <GpsModal
        isOpen={isGpsModalOpen}
        onClose={() => setIsGpsModalOpen(false)}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
