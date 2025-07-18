import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import { Link } from 'react-router-dom';

const services = [
  'Basic / Regular House Cleaning',
  'Deep Cleaning',
  'Spring Cleaning',
  'Move-In & Move-Out Cleaning',
  'Green/Eco-Friendly Cleaning',
  'Laundry Services',
  'Upholstery Cleaning',
  'Carpet & Rug Cleaning',
  'Curtain & Blind Cleaning',
  'Window Cleaning',
];

const ResidentialCleaning = () => (
  <section className="w-full min-h-screen bg-[#F8FAFC] pb-16">
    <div className="max-w-6xl mx-auto px-4 pt-6">
      <Breadcrumbs currentPage="residential-cleaning" setCurrentPage={() => {}} />
    </div>
    <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-8 mt-8">
      {/* Main Content */}
      <div className="flex-1">
        <div className="bg-[#FFFBEA] p-6 md:p-10 rounded shadow mb-8">
          <div className="inline-block px-4 py-1 mb-4 bg-primary text-white rounded font-bold text-xs tracking-widest uppercase">Residential Cleaning</div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-black">Residential Cleaning Services</h1>
          <p className="text-gray-700 mb-6">Enjoy a spotless home with our professional cleaning services. Our experienced team uses eco-friendly products and proven methods to deliver a healthier, fresher environment for you and your family.</p>
          <button className="bg-[#F78E3B] hover:bg-[#144966] text-white px-8 py-4 font-semibold shadow transition-colors flex items-center gap-2 text-lg">
            Request a Quote
            <svg className="text-white" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="15" y2="12" /><polyline points="12 9 15 12 12 15" /></svg>
          </button>
        </div>
        <div className="bg-white p-6 rounded shadow mb-8">
          <h2 className="text-xl font-bold text-[#144965] mb-4">Why Choose Professional Cleaning?</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Save time and energy for what matters most to you</li>
            <li>Consistent, high-quality results every visit</li>
            <li>Reduce allergens, dust, and germs for a healthier home</li>
            <li>Flexible scheduling to fit your lifestyle</li>
            <li>Eco-friendly products safe for kids and pets</li>
            <li>Trusted, background-checked cleaning professionals</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold text-[#144965] mb-4">What’s Included?</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>All rooms: Dusting, vacuuming, mopping, and surface cleaning</li>
            <li>Kitchen: Countertops, sinks, appliance exteriors, and floors</li>
            <li>Bathrooms: Toilets, showers, tubs, sinks, and mirrors</li>
            <li>Bedrooms & Living Areas: Dusting, vacuuming, and tidying</li>
            <li>Custom requests and add-ons available</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded shadow mt-8">
          <h2 className="text-xl font-bold text-[#144965] mb-4">Frequently Asked Questions</h2>
          <div className="mb-4">
            <h3 className="font-semibold text-black mb-1">How do I book a cleaning?</h3>
            <p className="text-gray-700">You can request a quote online or call us at (365) 336-3744. We’ll help you schedule a cleaning that fits your needs.</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-black mb-1">Do I need to provide cleaning supplies?</h3>
            <p className="text-gray-700">No, our team brings all necessary supplies and equipment. If you have special requests, just let us know!</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-black mb-1">Are your products safe for pets and children?</h3>
            <p className="text-gray-700">Yes, we use eco-friendly, non-toxic products that are safe for your whole family.</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-black mb-1">Can I customize my cleaning?</h3>
            <p className="text-gray-700">Absolutely! We offer custom cleaning plans and add-ons to fit your unique needs.</p>
          </div>
        </div>
      </div>
      {/* Services Menu */}
      <aside className="w-full lg:w-80">
        <div className="bg-[#144965] text-white rounded shadow p-6 mb-6">
          <h3 className="text-lg font-bold mb-4">Residential Services</h3>
          <ul className="space-y-2 list-none pl-0">
            {services.map((service, idx) => (
              <li key={idx} className="flex items-center gap-2">
                {service === 'Move-In & Move-Out Cleaning' ? (
                  <Link to="/move-in-out-cleaning" className="underline hover:text-[#F78E3B] transition-colors">{service}</Link>
                ) : (
                  <span>{service}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded shadow p-6 flex flex-col items-center">
          <div className="text-3xl font-bold text-[#144965] mb-2">33,600+</div>
          <div className="text-gray-700 text-sm text-center">Completed Cleaning Projects</div>
        </div>
      </aside>
    </div>
  </section>
);

export default ResidentialCleaning; 