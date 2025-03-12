import { ArrowRight, Smile, Star } from 'lucide-react';
import { useState } from 'react';
import ContactFormModal from './ContactFormModal';

interface CosmeticDentistryProps {
  setCurrentPage?: (page: string) => void;
}

const CosmeticDentistry = ({}: CosmeticDentistryProps) => {
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
            <h1 className="text-4xl font-bold mb-4 text-black">Cosmetic Services in Mississauga</h1>
            <p className="text-lg mb-6 text-gray-800">
              Cosmetic dental services focus on the overall appearance of your smile, including your teeth and gums, and include treatments that try and improve the aesthetic quality of your smile.
            </p>
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-black">Special Offers</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#32A2CD] pl-4">
                    <h4 className="font-semibold text-black">Free Cosmetic Consultation</h4>
                    <p className="text-gray-600">Book your complimentary cosmetic consultation today!</p>
                  </div>
                  <div className="border-l-4 border-[#32A2CD] pl-4">
                    <h4 className="font-semibold text-black">$500 Off Veneers</h4>
                    <p className="text-gray-600">Limited time offer on veneer treatments</p>
                  </div>
                  <div className="border-l-4 border-[#32A2CD] pl-4">
                    <h4 className="font-semibold text-black">Teeth Whitening Special</h4>
                    <p className="text-gray-600">20% off professional teeth whitening</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#32A2CD] text-white px-8 py-4 font-semibold hover:bg-opacity-90 flex items-center gap-2"
              >
                REQUEST AN APPOINTMENT <ArrowRight size={16} />
              </button>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-auto">
            <img 
              src="/cosmetic dental hero.jpg" 
              alt="Cosmetic Dentistry"
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
            <h2 className="text-3xl font-bold mb-6 text-black">Premium Cosmetic Dental Services</h2>
            <p className="text-gray-600 mb-6">
              Our comprehensive cosmetic dentistry solutions combine artistic excellence 
              with cutting-edge technology. From professional teeth whitening to complete 
              smile makeovers, we offer customized treatments to help you achieve the 
              confident smile you deserve.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 px-6 py-3 rounded-xl flex items-center justify-between">
                <Smile className="text-primary" size={24} />
                <div className="flex-1 mx-4">
                  <h3 className="font-semibold mb-2">Teeth Whitening</h3>
                  <p className="text-sm text-gray-600"></p>
                </div>
                <ArrowRight size={16} className="text-primary" />
              </div>
              <div className="bg-gray-50 px-6 py-3 rounded-xl flex items-center justify-between">
                <Smile className="text-primary" size={24} />
                <div className="flex-1 mx-4">
                  <h3 className="font-semibold mb-2">Dental Veneers</h3>
                  <p className="text-sm text-gray-600"></p>
                </div>
                <ArrowRight size={16} className="text-primary" />
              </div>
              <div className="bg-gray-50 px-6 py-3 rounded-xl flex items-center justify-between">
                <Smile className="text-primary" size={24} />
                <div className="flex-1 mx-4">
                  <h3 className="font-semibold mb-2">Dental Bonding</h3>
                  <p className="text-sm text-gray-600"></p>
                </div>
                <ArrowRight size={16} className="text-primary" />
              </div>
              <div className="bg-gray-50 px-6 py-3 rounded-xl flex items-center justify-between">
                <Smile className="text-primary" size={24} />
                <div className="flex-1 mx-4">
                  <h3 className="font-semibold mb-2">Dental Crowns</h3>
                  <p className="text-sm text-gray-600"></p>
                </div>
                <ArrowRight size={16} className="text-primary" />
              </div>
              <div className="bg-gray-50 px-6 py-3 rounded-xl flex items-center justify-between">
                <Smile className="text-primary" size={24} />
                <div className="flex-1 mx-4">
                  <h3 className="font-semibold mb-2">Inlays and Onlays</h3>
                  <p className="text-sm text-gray-600"></p>
                </div>
                <ArrowRight size={16} className="text-primary" />
              </div>
              <div className="bg-gray-50 px-6 py-3 rounded-xl flex items-center justify-between">
                <Smile className="text-primary" size={24} />
                <div className="flex-1 mx-4">
                  <h3 className="font-semibold mb-2">Dental Implants</h3>
                  <p className="text-sm text-gray-600"></p>
                </div>
                <ArrowRight size={16} className="text-primary" />
              </div>
              <div className="bg-gray-50 px-6 py-3 rounded-xl flex items-center justify-between">
                <Smile className="text-primary" size={24} />
                <div className="flex-1 mx-4">
                  <h3 className="font-semibold mb-2">Dental Bridges</h3>
                  <p className="text-sm text-gray-600"></p>
                </div>
                <ArrowRight size={16} className="text-primary" />
              </div>
              <div className="bg-gray-50 px-6 py-3 rounded-xl flex items-center justify-between">
                <Smile className="text-primary" size={24} />
                <div className="flex-1 mx-4">
                  <h3 className="font-semibold mb-2">Gum Contouring</h3>
                  <p className="text-sm text-gray-600"></p>
                </div>
                <ArrowRight size={16} className="text-primary" />
              </div>
              <div className="bg-gray-50 px-6 py-3 rounded-xl flex items-center justify-between">
                <Smile className="text-primary" size={24} />
                <div className="flex-1 mx-4">
                  <h3 className="font-semibold mb-2">Tooth Reshaping</h3>
                  <p className="text-sm text-gray-600"></p>
                </div>
                <ArrowRight size={16} className="text-primary" />
              </div>
              <div className="bg-gray-50 px-6 py-3 rounded-xl flex items-center justify-between">
                <Smile className="text-primary" size={24} />
                <div className="flex-1 mx-4">
                  <h3 className="font-semibold mb-2">Clear Aligners/Invisalign</h3>
                  <p className="text-sm text-gray-600"></p>
                </div>
                <ArrowRight size={16} className="text-primary" />
              </div>
              <div className="bg-gray-50 px-6 py-3 rounded-xl flex items-center justify-between">
                <Smile className="text-primary" size={24} />
                <div className="flex-1 mx-4">
                  <h3 className="font-semibold mb-2">Composite Restorations</h3>
                  <p className="text-sm text-gray-600"></p>
                </div>
                <ArrowRight size={16} className="text-primary" />
              </div>
              <div className="bg-gray-50 px-6 py-3 rounded-xl flex items-center justify-between">
                <Smile className="text-primary" size={24} />
                <div className="flex-1 mx-4">
                  <h3 className="font-semibold mb-2">Smile Makeovers</h3>
                  <p className="text-sm text-gray-600"></p>
                </div>
                <ArrowRight size={16} className="text-primary" />
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-gray-50 p-8 rounded-xl mt-12">
              <h3 className="text-2xl font-bold mb-6">Patient Reviews</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg">
                    {renderStars(testimonial.rating)}
                    <p className="text-gray-600 my-3 text-sm">{testimonial.text}</p>
                    <p className="font-medium">{testimonial.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#81C5C6] text-white p-8">
                <p className="mb-6 text-black">To schedule a consultation with our cosmetic dental experts, please fill out the form below or call us at 905-277-2872 to book an appointment.</p>
                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  setIsModalOpen(true);
                }}>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-4 py-2 text-gray-900"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full px-4 py-2 text-gray-900"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Your Phone" 
                      className="w-full px-4 py-2 text-gray-900"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="date" 
                      className="w-full px-4 py-2 text-gray-900"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="time" 
                      className="w-full px-4 py-2 text-gray-900"
                      required
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-[#32A2CD] text-white py-4 font-semibold hover:bg-opacity-90 flex items-center justify-center gap-2"
                  >
                    REQUEST AN APPOINTMENT <ArrowRight size={16} />
                  </button>
                </form>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold mb-4">Why Choose Cosmetic Services</h3>
                <ul className="space-y-3">
                  {[
                    '• Enhances Your Smile',
                    '• Improves Oral Health',
                    '• Boosts Self-Confidence',
                    '• Long-Lasting Results',
                    '• Functional Improvements',
                    '• Prevents Further Damage',
                    '• Improves Overall Health',
                    '• Enhances Quality of Life'
                  ].map((item, index) => (
                    <li key={index} className="text-gray-600">
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