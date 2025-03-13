import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Footer from './components/Footer';
import LatestOffers from './components/LatestOffers';
import Services from './components/Services';
import Breadcrumbs from './components/Breadcrumbs';
import TeamSection from './components/TeamSection';
import AboutUs from './components/AboutUs';
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
              <BeforeAfter />
              <div className="px-4 space-y-12 py-8">
                <LatestOffers />
                <TeamSection setCurrentPage={setCurrentPage} />
              </div>
            </div>
          </>
        )}
        {currentPage === 'about-us' && (
          <div className="container mx-auto">
            <AboutUs />
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