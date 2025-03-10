import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SaleBanner from './components/SaleBanner';
import TrustBar from './components/TrustBar';
import Footer from './components/Footer';
import LatestOffers from './components/LatestOffers';
import RollerBlinds from './components/RollerBlinds';
import VenetianBlinds from './components/VenetianBlinds';
import Services from './components/Services';
import Breadcrumbs from './components/Breadcrumbs';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="block md:hidden">
        <SaleBanner />
      </div>
      <Navbar setCurrentPage={setCurrentPage} />
      <TrustBar />
      {currentPage !== 'home' && <Breadcrumbs currentPage={currentPage} />}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <div className="hidden md:block">
              <SaleBanner />
            </div>
            <div className="container mx-auto px-4 space-y-12 py-8">
              <Hero />
              <Services />
              <LatestOffers />
              <ProductShowcase />
            </div>
          </>
        )}
        
        {currentPage === 'roller-blinds' && (
          <div className="container mx-auto px-4 py-8">
            <RollerBlinds />
          </div>
        )}
        
        {currentPage === 'venetian-blinds' && (
          <div className="container mx-auto px-4 py-8">
            <VenetianBlinds />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;