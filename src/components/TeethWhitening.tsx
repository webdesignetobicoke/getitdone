import { ArrowRight, Star } from 'lucide-react';
import { useState } from 'react';
import ContactFormModal from './ContactFormModal';
import AppointmentForm from './AppointmentForm';
import BeforeAfter from './BeforeAfter';

interface TeethWhiteningProps {
  setCurrentPage?: (page: string) => void;
}

const TeethWhitening = ({ setCurrentPage }: TeethWhiteningProps) => {
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

  const pricingTable = [
    { service: 'In-Office Whitening', price: '$299' },
    { service: 'Take-Home Whitening Kit', price: '$199' },
    { service: 'Whitening Pen', price: '$49' }
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
              <div className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 p-8 rounded-xl shadow-xl">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/20 rounded-full"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/20 rounded-full"></div>
                <h3 className="text-2xl font-bold mb-6 text-black relative z-10">Special Offers</h3>
                <div className="space-y-4 relative z-10">
                  <div className="bg-white p-4 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform duration-300 border-l-4 border-yellow-400">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-base text-black">20% Off Professional Whitening</h4>
                      <div className="bg-yellow-400 text-black font-bold rounded-full w-14 h-14 flex flex-col items-center justify-center text-center ml-2">
                        <span className="text-base">20%</span>
                        <span className="text-[10px]">OFF</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform duration-300 border-l-4 border-blue-400">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-base text-black">Free Consultation</h4>
                      <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-full ml-2">Value: $75</span>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform duration-300 border-l-4 border-green-400">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-base text-black">Take-Home Kit Special</h4>
                      <div className="bg-green-500 text-white font-bold rounded-full w-14 h-14 flex flex-col items-center justify-center text-center ml-2">
                        <span className="text-base">$100</span>
                        <span className="text-[10px]">OFF</span>
                      </div>
                    </div>
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

            {/* Pricing Table Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <h2 className="text-3xl font-bold mb-6 text-black">Teeth Whitening Pricing</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg">
                  <thead>
                    <tr>
                      <th className="py-3 px-6 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Service</th>
                      <th className="py-3 px-6 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingTable.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                        <td className="py-3 px-6 border-b border-gray-200 text-sm text-gray-700">{item.service}</td>
                        <td className="py-3 px-6 border-b border-gray-200 text-sm text-gray-700">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Before After Section */}
            <div className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#81C5C6' }}>
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Real Results from Our Patients</h2>
              <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
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
                  title="Take-Home Kit | 4+ Shade Jump"
                />
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
              <AppointmentForm 
                title="Schedule Your Dental Visit"
                description="Ready for a brighter smile? Schedule your teeth whitening consultation today."
              />
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