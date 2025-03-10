import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SaleBanner from './components/SaleBanner';
import TrustBar from './components/TrustBar';
import Footer from './components/Footer';
import LatestOffers from './components/LatestOffers';
import RollerBlinds from './components/RollerBlinds';
import VenetianBlinds from './components/VenetianBlinds';
import Shutters from './components/Shutters';
import Services from './components/Services';
import Breadcrumbs from './components/Breadcrumbs';
import MeasuringGuide from './components/MeasuringGuide';
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
      {currentPage !== 'home' && (
        <Breadcrumbs currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <div className="hidden md:block">
              <SaleBanner />
            </div>
            <div className="container mx-auto">
              <Hero />
              <Services />
              <div className="px-4 space-y-12 py-8">
                <LatestOffers />
              </div>
            </div>
          </>
        )}
        
        {currentPage === 'roller-blinds' && (
          <div className="container mx-auto px-4 py-8">
            <RollerBlinds setCurrentPage={setCurrentPage} />
          </div>
        )}
        
        {currentPage === 'venetian-blinds' && (
          <div className="container mx-auto px-4 py-8">
            <VenetianBlinds />
          </div>
        )}

        {currentPage === 'shutters' && (
          <div className="container mx-auto px-4 py-8">
            <Shutters />
          </div>
        )}

        {currentPage === 'measuring-guide' && (
          <div className="container mx-auto px-4 py-8">
            <MeasuringGuide />
          </div>
        )}

        {currentPage === 'awnings' && (
          <div className="container mx-auto px-4 py-8">
            <p>Coming Soon: Awnings section is under development</p>
          </div>
        )}

        {currentPage === 'curtains' && (
          <div className="container mx-auto px-4 py-8">
            <p>Coming Soon: Curtains section is under development</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;