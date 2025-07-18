import React, { useState } from 'react';
import { Home, Truck, CalendarCheck, CheckCircle, Leaf, Users, Star, Trash2 } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import ContactFormModal from './ContactFormModal';
import ReviewCards from './ReviewCards';

const galleryImages = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
];

const features = [
  {
    icon: <Truck className="text-[#F78E3B]" size={32} />,
    title: 'Flexible Scheduling',
    desc: 'Book at your convenience, including weekends.'
  },
  {
    icon: <CheckCircle className="text-[#F78E3B]" size={32} />,
    title: '100% Satisfaction Guarantee',
    desc: 'We’re not done until you’re happy.'
  },
  {
    icon: <Leaf className="text-[#F78E3B]" size={32} />,
    title: 'Eco-Friendly Products',
    desc: 'Safe for families, pets, and the environment.'
  },
  {
    icon: <Users className="text-[#F78E3B]" size={32} />,
    title: 'Vetted Cleaners',
    desc: 'Trusted, background-checked professionals.'
  },
];

const MoveInOutCleaning = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="w-full min-h-screen bg-[#F8FAFC] pb-16">
      {/* Breadcrumbs */}
      <div className="max-w-6xl mx-auto px-4 pt-6">
        <Breadcrumbs currentPage="move-in-out-cleaning" setCurrentPage={() => {}} />
      </div>
      {/* Hero Section */}
      <div className="relative max-w-6xl mx-auto px-4 mt-8 overflow-hidden shadow-lg flex flex-col md:flex-row items-center bg-gradient-to-br from-[#FFFBEA] to-[#F8FAFC]">
        <div className="flex-1 py-10 md:py-16 pr-0 md:pr-10 z-10">
          <div className="inline-block px-4 py-1 mb-4 bg-primary text-white font-bold text-xs tracking-widest uppercase">Move-In & Move-Out Cleaning</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#144966]">Move-In & Move-Out Cleaning in Hamilton, Ontario</h1>
          <p className="text-lg text-gray-700 mb-6 max-w-xl">Start fresh or leave spotless. Flexible, eco-friendly, and trusted. Our expert team ensures every corner is cleaned, sanitized, and ready for the next chapter.</p>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-[#F78E3B] hover:bg-[#144966] text-white px-8 py-4 font-semibold shadow transition-colors flex items-center gap-2 text-lg"
          >
            Request a Quote
            <svg className="text-white" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="15" y2="12" /><polyline points="12 9 15 12 12 15" /></svg>
          </button>
          <div className="mt-8 hidden md:block">
            <ReviewCards />
          </div>
        </div>
        {/* Hero Image */}
        <div className="w-full md:w-1/2 h-64 md:h-[400px] relative">
          <img
            src="/main-page-hero.jpg"
            alt="Move-In/Out Cleaning Hero"
            className="object-cover w-full h-full shadow-lg"
            style={{ filter: 'brightness(0.96)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-transparent to-transparent opacity-80"></div>
        </div>
        <ContactFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
      {/* Main Content + Sidebar */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-8 mt-12">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* What's Included */}
          <div className="bg-white p-8 shadow mb-10">
            <h2 className="text-2xl font-bold text-[#144966] mb-6">What’s Included in Move-In & Move-Out Cleaning?</h2>
            <ul className="list-none space-y-5">
              <li className="flex items-start gap-4">
                <Home className="text-[#144966] mt-1" size={28} />
                <span><b>All Rooms:</b> Dusting, vacuuming, mopping, and surface cleaning</span>
              </li>
              <li className="flex items-start gap-4">
                <Star className="text-[#144966] mt-1" size={28} />
                <span><b>Kitchen:</b> Countertops, sinks, appliance exteriors/interiors, cabinets, and floors</span>
              </li>
              <li className="flex items-start gap-4">
                <Trash2 className="text-[#144966] mt-1" size={28} />
                <span><b>Bathrooms:</b> Toilets, showers, tubs, sinks, mirrors, and fixtures</span>
              </li>
              <li className="flex items-start gap-4">
                <CalendarCheck className="text-[#144966] mt-1" size={28} />
                <span><b>Move-Ready:</b> Inside cabinets, drawers, closets, and appliances</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="text-[#144966] mt-1" size={28} />
                <span><b>Custom Requests:</b> We tailor our cleaning to your needs</span>
              </li>
            </ul>
          </div>
          {/* Pricing Table */}
          <div className="bg-white p-8 shadow mb-10">
            <h2 className="text-2xl font-bold text-[#144966] mb-6">Move-In & Move-Out Cleaning Pricing</h2>
            <table className="w-full text-left border-separate border-spacing-y-2">
              <thead>
                <tr>
                  <th className="py-3 px-4 font-semibold text-[#144966] bg-[#F8FAFC] rounded-l-lg">Home Size</th>
                  <th className="py-3 px-4 font-semibold text-[#144966] bg-[#F8FAFC] rounded-r-lg">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#FFFBEA]">
                  <td className="py-3 px-4 rounded-l-lg">Studio / 1 Bedroom</td>
                  <td className="py-3 px-4 rounded-r-lg">$179 - $229</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4">2 Bedrooms</td>
                  <td className="py-3 px-4">$229 - $279</td>
                </tr>
                <tr className="bg-[#FFFBEA]">
                  <td className="py-3 px-4 rounded-l-lg">3 Bedrooms</td>
                  <td className="py-3 px-4 rounded-r-lg">$279 - $349</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4">4+ Bedrooms</td>
                  <td className="py-3 px-4">$349+</td>
                </tr>
              </tbody>
            </table>
            <div className="text-xs text-gray-500 mt-3 italic">*Final pricing may vary based on home condition, size, and specific requests. Contact us for a personalized quote.</div>
          </div>
          {/* Gallery */}
          <div className="bg-white p-8 shadow">
            <h2 className="text-2xl font-bold text-[#144966] mb-6">Gallery: Our Move-In & Move-Out Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {galleryImages.map((img, idx) => (
                <div key={idx} className="overflow-hidden rounded-xl shadow hover:scale-105 transition-transform cursor-pointer">
                  <img src={img} alt="Move-In/Out Cleaning Example" className="w-full h-48 object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <aside className="w-full lg:w-80 lg:sticky lg:top-28 h-fit">
          <div className="bg-[#144965] text-white rounded-2xl shadow p-8 mb-8">
            <h3 className="text-lg font-bold mb-4">Other Residential Services</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full inline-block"></span>
                <a href="/residential-cleaning" className="underline hover:text-[#F78E3B] transition-colors">Residential Cleaning</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full inline-block"></span>
                <span>Deep Cleaning</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full inline-block"></span>
                <span>Spring Cleaning</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full inline-block"></span>
                <span>Laundry Services</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full inline-block"></span>
                <span>Upholstery Cleaning</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full inline-block"></span>
                <span>Carpet & Rug Cleaning</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full inline-block"></span>
                <span>Window Cleaning</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center mb-8">
            <div className="text-3xl font-bold text-[#144965] mb-2">33,600+</div>
            <div className="text-gray-700 text-sm text-center">Completed Cleaning Projects</div>
          </div>
          <div className="bg-white rounded-2xl shadow p-8">
            <h3 className="text-lg font-bold text-[#144966] mb-4">What Our Clients Say</h3>
            <ReviewCards />
            <a href="#" className="block mt-4 text-primary hover:text-[#144966] text-center font-semibold underline">Read More Reviews</a>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default MoveInOutCleaning; 