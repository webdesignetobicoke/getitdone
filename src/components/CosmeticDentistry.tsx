import { ArrowRight, Smile, Star } from 'lucide-react';
import { useState } from 'react';
import ContactFormModal from './ContactFormModal';
import AppointmentForm from './AppointmentForm';

interface CosmeticDentistryProps {
  setCurrentPage?: (page: string) => void;
}

const CosmeticDentistry = ({ setCurrentPage }: CosmeticDentistryProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderStars = (rating: number): JSX.Element => (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className={`${i < rating ? 'text-primary fill-primary' : 'text-gray-300'}`} />
      ))}
    </div>
  );

  const testimonials = [
    {
      name: "David R.",
      rating: 5,
      text: "Amazing results with my smile makeover!"
    },
    {
      name: "Emily S.",
      rating: 5,
      text: "The veneers look completely natural"
    },
    {
      name: "Robert K.",
      rating: 4,
      text: "Professional and caring team"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="px-4 py-8">
            <h1 className="text-4xl font-bold mb-4 text-black">Carpet & Upholstery Cleaning</h1>
            <p className="text-lg mb-6 text-gray-800">
              Our professional carpet and upholstery cleaning services remove dirt, stains, and allergens, leaving your home or office fresh and healthy. We use eco-friendly products and advanced equipment for outstanding results.
            </p>
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-black">Special Offers</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-black">Free Cleaning Consultation</h4>
                    <p className="text-gray-600">Book your complimentary cleaning assessment today!</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-black">10% Off First Service</h4>
                    <p className="text-gray-600">Enjoy a discount on your first cleaning appointment</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-black">Stain Removal Special</h4>
                    <p className="text-gray-600">Get tough stains removed at a special rate</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-primary text-white px-8 py-4 font-semibold hover:bg-secondary flex items-center gap-2 justify-center transition-colors"
              >
                REQUEST AN APPOINTMENT <ArrowRight size={16} style={{ color: 'white' }} />
              </button>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-auto">
            <img 
              src="/carpet-cleaning-hero.jpg" 
              alt="Carpet & Upholstery Cleaning"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Content Area */}
          <div className="lg:col-span-2 prose max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-black">Our Cleaning Services</h2>
            <p className="text-gray-600 mb-6">
              We offer a full range of cleaning solutions for carpets, sofas, chairs, and more. Our team is trained to handle all types of fabrics and stains, ensuring a deep clean every time.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div 
                className="bg-gray-50 px-6 py-3 rounded-xl flex items-center justify-between cursor-pointer hover:bg-gray-100"
                onClick={() => setCurrentPage?.('carpet-upholstery-cleaning')}
              >
                <Star size={24} style={{ color: '#F78E3B' }} />
                <div className="flex-1 mx-4">
                  <h3 className="font-semibold mb-2">Carpet Cleaning</h3>
                  <p className="text-sm text-gray-600">Deep cleaning for all carpet types</p>
                </div>
                <ArrowRight size={16} style={{ color: '#F78E3B' }} />
              </div>
              <div className="bg-gray-50 px-6 py-3 rounded-xl flex items-center justify-between">
                <Star size={24} style={{ color: '#F78E3B' }} />
                <div className="flex-1 mx-4">
                  <h3 className="font-semibold mb-2">Upholstery Cleaning</h3>
                  <p className="text-sm text-gray-600">Safe and effective for sofas, chairs, and more</p>
                </div>
                <ArrowRight size={16} style={{ color: '#F78E3B' }} />
              </div>
              <div className="bg-gray-50 px-6 py-3 rounded-xl flex items-center justify-between">
                <Star size={24} style={{ color: '#F78E3B' }} />
                <div className="flex-1 mx-4">
                  <h3 className="font-semibold mb-2">Stain & Odor Removal</h3>
                  <p className="text-sm text-gray-600">Remove tough stains and odors</p>
                </div>
                <ArrowRight size={16} style={{ color: '#F78E3B' }} />
              </div>
              <div className="bg-gray-50 px-6 py-3 rounded-xl flex items-center justify-between">
                <Star size={24} style={{ color: '#F78E3B' }} />
                <div className="flex-1 mx-4">
                  <h3 className="font-semibold mb-2">Rug Cleaning</h3>
                  <p className="text-sm text-gray-600">Specialized care for area rugs</p>
                </div>
                <ArrowRight size={16} style={{ color: '#F78E3B' }} />
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-gray-50 p-8 rounded-xl mt-12">
              <h3 className="text-2xl font-bold mb-6">Customer Reviews</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg">
                  {renderStars(5)}
                  <p className="text-gray-600 my-3 text-sm">"Our carpets look brand new! Highly recommend GetItDone Cleaning."</p>
                  <p className="font-medium">Jessica T.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  {renderStars(5)}
                  <p className="text-gray-600 my-3 text-sm">"Prompt, professional, and very thorough. Will use again."</p>
                  <p className="font-medium">Brian L.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  {renderStars(4)}
                  <p className="text-gray-600 my-3 text-sm">"Stains gone, house smells fresh!"</p>
                  <p className="font-medium">Samantha R.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <AppointmentForm 
                title="Book Your Cleaning Appointment"
                description="Ready for a cleaner home or office? Schedule your carpet & upholstery cleaning today."
              />
              <div className="bg-gray-50 p-6">
                <h3 className="font-semibold mb-4 text-black">Why Choose Our Cleaning Services</h3>
                <ul className="space-y-3">
                  {[
                    '• Removes dirt, stains, and allergens',
                    '• Eco-friendly and safe products',
                    '• Fast drying times',
                    '• Experienced, friendly staff',
                    '• Satisfaction guaranteed',
                    '• Flexible scheduling',
                    '• Affordable pricing',
                    '• Free consultation'
                  ].map((item, index) => (
                    <li key={index} className="text-black">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default CosmeticDentistry;