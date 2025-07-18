import ReviewCards from '../components/ReviewCards';
import { useState } from 'react';
import ContactFormModal from './ContactFormModal';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="relative bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row relative">
          <div className="relative z-10 w-full lg:w-1/2 px-4 sm:px-6 lg:px-8 py-8 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
              Fresh, Clean Spaces Start Here
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              GetItDone Cleaning Services has been providing professional carpet and upholstery cleaning for homes and businesses since 2017. Experience a healthier, fresher environment with our expert team and eco-friendly solutions.
            </p>
            {/* Hero image after description on mobile, on right on desktop */}
            <div 
              className="relative w-full h-64 mb-6 lg:hidden"
              style={{
                backgroundImage: 'url(/main-page-hero.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-primary bg-opacity-20"></div>
            </div>
            <div className="w-full">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-primary text-white px-8 py-4 font-semibold hover:bg-secondary flex items-center gap-2 justify-center transition-colors"
              >
                REQUEST A QUOTE <ArrowRight size={16} />
              </button>
            </div>
            <div className="mt-6">
              <ReviewCards />
            </div>
          </div>
          {/* Desktop hero image on right */}
          <div 
            className="absolute right-0 top-0 w-1/2 h-full hidden lg:block"
            style={{
              backgroundImage: 'url(/main-page-hero.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-primary bg-opacity-20"></div>
          </div>
        </div>
      </div>
      <ContactFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Hero;