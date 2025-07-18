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
            <h1 className="text-4xl font-bold mb-4 text-black">Rug Cleaning Services</h1>
            <p className="text-lg mb-6 text-gray-800">
              Our professional rug cleaning services restore the beauty and freshness of your area rugs. We use gentle, effective methods to remove dirt, stains, and odors, extending the life of your rugs.
            </p>
            <div className="space-y-6">
              <div className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 p-8 rounded-xl shadow-xl">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/20 rounded-full"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/20 rounded-full"></div>
                <h3 className="text-2xl font-bold mb-6 text-black relative z-10">Special Offers</h3>
                <div className="space-y-4 relative z-10">
                  <div className="bg-white p-4 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform duration-300 border-l-4 border-yellow-400">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-base text-black">15% Off Rug Cleaning</h4>
                      <div className="bg-yellow-400 text-black font-bold rounded-full w-14 h-14 flex flex-col items-center justify-center text-center ml-2">
                        <span className="text-base">15%</span>
                        <span className="text-[10px]">OFF</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform duration-300 border-l-4 border-blue-400">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-base text-black">Free Pickup & Delivery</h4>
                      <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-full ml-2">On all area rugs</span>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform duration-300 border-l-4 border-green-400">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-base text-black">Stain Removal Special</h4>
                      <div className="bg-green-500 text-white font-bold rounded-full w-14 h-14 flex flex-col items-center justify-center text-center ml-2">
                        <span className="text-base">$50</span>
                        <span className="text-[10px]">OFF</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-primary text-white px-8 py-4 font-semibold hover:bg-secondary flex items-center gap-2 justify-center transition-colors"
              >
                BOOK YOUR WHITENING SESSION <ArrowRight size={16} style={{ color: 'white' }} />
              </button>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-auto">
            <img 
              src="/rug-cleaning-hero.jpg" 
              alt="Rug Cleaning"
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
            <h2 className="text-3xl font-bold mb-6 text-black">Our Rug Cleaning Process</h2>
            <p className="text-gray-600 mb-6">
              We carefully inspect, dust, wash, and dry your rugs using industry-leading techniques. Our process is safe for all rug types, including wool, silk, and synthetics.
            </p>

            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Inspection & Dusting</h3>
                <p className="text-gray-600">
                  We start by inspecting your rug for stains and damage, then remove dust and debris with specialized equipment.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Gentle Washing</h3>
                <p className="text-gray-600">
                  Our gentle washing process uses safe, effective cleaning solutions to lift dirt and stains without harming fibers.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Drying & Finishing</h3>
                <p className="text-gray-600">
                  Rugs are dried in a controlled environment and finished with a final inspection to ensure quality.
                </p>
              </div>
            </div>

            {/* Pricing Table Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <h2 className="text-3xl font-bold mb-6 text-black">Rug Cleaning Pricing</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg">
                  <thead>
                    <tr>
                      <th className="py-3 px-6 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Service</th>
                      <th className="py-3 px-6 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="py-3 px-6 border-b border-gray-200 text-sm text-gray-700">Rug Cleaning (per sq. ft.)</td>
                      <td className="py-3 px-6 border-b border-gray-200 text-sm text-gray-700">$2.50</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="py-3 px-6 border-b border-gray-200 text-sm text-gray-700">Stain Removal</td>
                      <td className="py-3 px-6 border-b border-gray-200 text-sm text-gray-700">$25</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="py-3 px-6 border-b border-gray-200 text-sm text-gray-700">Pickup & Delivery</td>
                      <td className="py-3 px-6 border-b border-gray-200 text-sm text-gray-700">Free</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Before After Section */}
            <div className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F78E3B' }}>
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Real Results from Our Clients</h2>
              <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
                <BeforeAfter
                  beforeImage="/before-after/rug-cleaning-before.jpg"
                  afterImage="/before-after/rug-cleaning-after.jpg"
                  beforeLabel="Before Cleaning"
                  afterLabel="After Cleaning"
                  title="Persian Rug | Deep Clean"
                />
                <BeforeAfter
                  beforeImage="/before-after/rug-cleaning-before.jpg"
                  afterImage="/before-after/rug-cleaning-after.jpg"
                  beforeLabel="Before Cleaning"
                  afterLabel="After Cleaning"
                  title="Wool Rug | Stain Removal"
                />
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-gray-50 p-8 rounded-xl mt-12">
              <h3 className="text-2xl font-bold mb-6">Customer Reviews</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg">
                  {renderStars(5)}
                  <p className="text-gray-600 my-3 text-sm">"My rugs look and smell amazing! Great service."</p>
                  <p className="font-medium">Olga V.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  {renderStars(5)}
                  <p className="text-gray-600 my-3 text-sm">"Fast pickup and delivery, very professional team."</p>
                  <p className="font-medium">David S.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  {renderStars(4)}
                  <p className="text-gray-600 my-3 text-sm">"Stains are gone, colors are bright again!"</p>
                  <p className="font-medium">Nina P.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <AppointmentForm 
                title="Book Your Rug Cleaning"
                description="Ready to refresh your rugs? Schedule your professional rug cleaning today."
              />
              <div className="bg-gray-50 p-6">
                <h3 className="font-semibold mb-4 text-black">Why Choose Our Rug Cleaning</h3>
                <ul className="space-y-3">
                  {[
                    '• Removes dirt, stains, and odors',
                    '• Safe for all rug types',
                    '• Free pickup & delivery',
                    '• Experienced, friendly staff',
                    '• Satisfaction guaranteed',
                    '• Affordable pricing',
                    '• Eco-friendly cleaning',
                    '• Detailed inspection & care'
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