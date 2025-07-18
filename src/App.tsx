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
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar setCurrentPage={setCurrentPage} />
      <TrustBar />
      {currentPage !== 'home' && (
        <Breadcrumbs currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <div className="container mx-auto px-4 space-y-12 py-8">
              <Hero />
              <RequestQuote />
              <Services setCurrentPage={setCurrentPage} />
              
              {/* Before After Section */}
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

              <div className="px-4 space-y-12 py-8">
                <LatestOffers />
                <ReviewsSection />
                <TeamSection setCurrentPage={setCurrentPage} />
              </div>
            </div>
          </>
        )}
        {currentPage === 'about-us' && (
          <div className="container mx-auto">
            <MeetOurTeam />
          </div>
        )}
        {currentPage === 'cosmetic-dentistry' && (
          <div className="container mx-auto">
            <CosmeticDentistry setCurrentPage={setCurrentPage} />
          </div>
        )}
        {currentPage === 'teeth-whitening' && (
          <div className="container mx-auto">
            <TeethWhitening setCurrentPage={setCurrentPage} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;