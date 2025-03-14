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
            <div className="container mx-auto">
              <Hero />
              <Services setCurrentPage={setCurrentPage} />
              
              {/* Before After Section */}
              <div className="py-16" style={{ backgroundColor: '#81C5C6' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-bold mb-8 text-center text-white">Real Results from Our Patients</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    <BeforeAfter
                      beforeImage="/before-after/teeth-whitening-before.webp"
                      afterImage="/before-after/teeth-whitening-after.webp"
                      beforeLabel="Before Whitening"
                      afterLabel="After Whitening"
                      title="60-Min Whitening | 3+ Shade Jump"
                    />
                    <BeforeAfter
                      beforeImage="/before-after/teeth-whitening-before.webp"
                      afterImage="/before-after/teeth-whitening-after.webp"
                      beforeLabel="Before Whitening"
                      afterLabel="After Whitening"
                      title="45-Min Express | 2+ Shade Jump"
                    />
                    <BeforeAfter
                      beforeImage="/before-after/teeth-whitening-before.webp"
                      afterImage="/before-after/teeth-whitening-after.webp"
                      beforeLabel="Before Whitening"
                      afterLabel="After Whitening"
                      title="Take-Home Kit | 4+ Shade Jump"
                    />
                  </div>
                </div>
              </div>

              <div className="px-4 space-y-12 py-8">
                <LatestOffers />
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