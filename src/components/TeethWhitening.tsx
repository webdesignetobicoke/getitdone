import { ArrowRight, Star } from 'lucide-react';
import { useState } from 'react';
import ContactFormModal from './ContactFormModal';

interface TeethWhiteningProps {
  setCurrentPage?: (page: string) => void;
}

const TeethWhitening = ({}: TeethWhiteningProps) => {
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
      name: "Sarah M.",
      rating: 5,
      text: "Amazing results! My teeth are several shades whiter!"
    },
    {
      name: "Michael P.",
      rating: 5,
      text: "Professional service and outstanding results"
    },
    {
      name: "Lisa K.",
      rating: 4,
      text: "Very happy with my brighter smile"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="px-4 py-8">
            <h1 className="text-4xl font-bold mb-4 text-black">Professional Teeth Whitening in Mississauga</h1>
            <p className="text-lg mb-6 text-gray-800">
              Transform your smile with our professional teeth whitening services. We use advanced whitening techniques to help you achieve a brighter, more confident smile safely and effectively.
            </p>
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-black">Special Offers</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#32A2CD] pl-4">
                    <h4 className="font-semibold text-black">20% Off Professional Whitening</h4>
                    <p className="text-gray-600">Limited time offer on all whitening treatments!</p>
                  </div>
                  <div className="border-l-4 border-[#32A2CD] pl-4">
                    <h4 className="font-semibold text-black">Free Consultation</h4>
                    <p className="text-gray-600">Book your complimentary whitening consultation</p>
                  </div>
                  <div className="border-l-4 border-[#32A2CD] pl-4">
                    <h4 className="font-semibold text-black">Take-Home Kit Special</h4>
                    <p className="text-gray-600">Save $100 on take-home whitening kits</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-[#32A2CD] text-white px-8 py-4 font-semibold hover:bg-opacity-90 flex items-center gap-2 justify-center"
              >
                BOOK YOUR WHITENING SESSION <ArrowRight size={16} style={{ color: 'white' }} />
              </button>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-auto">
            <img 
              src="/cosmetic dental hero.jpg" 
              alt="Teeth Whitening"
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
            <h2 className="text-3xl font-bold mb-6 text-black">Professional Teeth Whitening Services</h2>
            <p className="text-gray-600 mb-6">
              Our professional teeth whitening services provide dramatic results that you can't achieve with over-the-counter products. We offer both in-office and take-home whitening options to suit your lifestyle and preferences.
            </p>

            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">In-Office Whitening</h3>
                <p className="text-gray-600">
                  Our in-office whitening treatment uses professional-grade whitening agents and specialized light technology to achieve maximum results in just one visit. This treatment is perfect for those wanting immediate results.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <ArrowRight size={16} className="text-[#81C5C6]" />
                    <span>Results in just one hour</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight size={16} className="text-[#81C5C6]" />
                    <span>Up to 8 shades whiter</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight size={16} className="text-[#81C5C6]" />
                    <span>Long-lasting results</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Take-Home Whitening Kits</h3>
                <p className="text-gray-600">
                  Our custom-fitted take-home whitening trays allow you to whiten your teeth in the comfort of your home. These professional-grade kits provide superior results compared to over-the-counter options.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <ArrowRight size={16} className="text-[#81C5C6]" />
                    <span>Custom-fitted trays for optimal results</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight size={16} className="text-[#81C5C6]" />
                    <span>Flexible treatment schedule</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight size={16} className="text-[#81C5C6]" />
                    <span>Professional-strength whitening gel</span>
                  </li>
                </ul>
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
              <div className="bg-[#81C5C6] p-8 shadow-[0_20px_50px_rgba(129,197,198,0.3)] border-2 border-white/20 backdrop-blur-sm transform hover:translate-y-[-2px] transition-all duration-300 text-center">
                <h3 className="text-2xl font-semibold mb-4 text-black">Book Your Whitening Session</h3>
                <p className="mb-6 text-black">Ready for a brighter smile? Schedule your teeth whitening consultation today. Call us at <a href="tel:905-277-2872" className="font-bold hover:underline">905-277-2872</a> or fill out the form below.</p>
                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  setIsModalOpen(true);
                }}>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-4 py-3 text-gray-900 bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                      required
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full px-4 py-3 text-gray-900 bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                      required
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="tel" 
                      placeholder="Your Phone" 
                      className="w-full px-4 py-3 text-gray-900 bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                      required
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="date" 
                      className="w-full px-4 py-3 text-gray-900 bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                      required
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="time" 
                      className="w-full px-4 py-3 text-gray-900 bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                      required
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-[#32A2CD] text-white py-4 text-center font-semibold hover:bg-opacity-90 flex items-center justify-center gap-2 transform hover:translate-y-[-2px] transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <span className="text-center">BOOK NOW</span> <ArrowRight size={16} style={{ color: 'white' }} />
                  </button>
                </form>
              </div>
              <div className="bg-gray-50 p-6">
                <h3 className="font-semibold mb-4 text-black">Benefits of Professional Whitening</h3>
                <ul className="space-y-3">
                  {[
                    '• Safe and Monitored Treatment',
                    '• Immediate, Visible Results',
                    '• Long-lasting Effects',
                    '• Professional-grade Materials',
                    '• Customized Treatment Plans',
                    '• Minimal Sensitivity',
                    '• Even, Natural-looking Results',
                    '• Expert Care and Support'
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

export default TeethWhitening;