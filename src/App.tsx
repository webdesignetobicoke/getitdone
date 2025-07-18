import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Footer from './components/Footer';
import LatestOffers from './components/LatestOffers';
import Services from './components/Services';
import Breadcrumbs from './components/Breadcrumbs';
import TeamSection from './components/TeamSection';
import MeetOurTeam from './components/MeetOurTeam';
import CosmeticDentistry from './components/CosmeticDentistry';
import TeethWhitening from './components/TeethWhitening';
import BeforeAfter from './components/BeforeAfter';
import RequestQuote from './components/RequestQuote';
import SaleBanner from './components/SaleBanner';
import ReviewsSection from './components/ReviewsSection';
import ResidentialCleaning from './components/ResidentialCleaning';
import MoveInOutCleaning from './components/MoveInOutCleaning';
import { useState } from 'react';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black">
        <Navbar setCurrentPage={() => {}} />
        <TrustBar />
        <Routes>
          <Route path="/" element={
            <>
              <div className="container mx-auto px-4 space-y-12 py-8">
                <Hero />
                <RequestQuote />
                <Services setCurrentPage={() => {}} />
                <LatestOffers />
                <ReviewsSection />
                <TeamSection setCurrentPage={() => {}} />
              </div>
              <div className="py-16" style={{ backgroundColor: '#144964' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-bold mb-8 text-center text-white">Real Results from Our Clients</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    <BeforeAfter
                      beforeImage="/before-after/carpet-before.png"
                      afterImage="/before-after/carpet-after.png"
                      beforeLabel="Before Cleaning"
                      afterLabel="After Cleaning"
                      title="Carpet Cleaning | Stain Removal"
                    />
                    <BeforeAfter
                      beforeImage="/before-after/kitchen-before.jpg"
                      afterImage="/before-after/kitchen-after.jpg"
                      beforeLabel="Before Cleaning"
                      afterLabel="After Cleaning"
                      title="Kitchen Deep Clean"
                    />
                    <BeforeAfter
                      beforeImage="/before-after/shower-before.png"
                      afterImage="/before-after/shower-after.png"
                      beforeLabel="Before Cleaning"
                      afterLabel="After Cleaning"
                      title="Shower Deep Clean"
                    />
                  </div>
                </div>
              </div>
            </>
          } />
          <Route path="/residential-cleaning" element={<ResidentialCleaning />} />
          <Route path="/move-in-out-cleaning" element={<MoveInOutCleaning />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;