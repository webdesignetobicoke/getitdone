import Navbar from './Navbar';
import Hero from './Hero';
import SaleBanner from './SaleBanner';
import TrustBar from './TrustBar';
import Footer from './Footer';
import LatestOffers from './LatestOffers';
import Services from './Services';
import Breadcrumbs from './Breadcrumbs';
import CosmeticDentistry from './CosmeticDentistry';
import TeamSection from './TeamSection';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page: string) => {
    console.log('Setting current page to:', page);
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="block md:hidden">
        <SaleBanner />
      </div>
      <Navbar setCurrentPage={handlePageChange} />
      <TrustBar />
      {currentPage !== 'home' && <Breadcrumbs currentPage={currentPage} setCurrentPage={handlePageChange} />}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <div className="hidden md:block">
              <SaleBanner />
            </div>
            <div className="container mx-auto px-4 space-y-12 py-8">
              <Hero />
              <Services setCurrentPage={handlePageChange} />
              <LatestOffers />
              <TeamSection />
            </div>
          </>
        )}
        
        {currentPage === 'cosmetic-dentistry' && (
          <div className="container mx-auto px-4 py-8">
            <CosmeticDentistry setCurrentPage={handlePageChange} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;