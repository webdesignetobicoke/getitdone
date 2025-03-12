import ReviewCards from '../components/ReviewCards';
import { useState } from 'react';
import ContactFormModal from './ContactFormModal';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="relative bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 lg:w-1/2 px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
              Smile with Confidence
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Cura Dental Clinic has been dedicated to providing comprehensive dental care to patients of all ages since approximately 2017, offering a wide range of services to ensure optimal oral health and well-being.
            </p>
            <div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#32A2CD] text-white px-8 py-4 font-semibold hover:bg-opacity-90 flex items-center gap-2"
              >
                REQUEST AN APPOINTMENT <ArrowRight size={16} />
              </button>
            </div>
           
            <div className="mt-6">
              <ReviewCards />
            </div>
          </div>
        </div>
        <div 
          className="hidden lg:block absolute right-0 top-0 w-1/2 h-full"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2668&ixlib=rb-4.0.3)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-primary bg-opacity-20"></div>
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