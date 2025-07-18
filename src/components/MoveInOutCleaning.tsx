import React, { useState } from 'react';
import { Home, Truck, CalendarCheck, CheckCircle, Leaf, Users, Star, Trash2, ShieldCheck, UserCheck, Package } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import ContactFormModal from './ContactFormModal';
import ReviewCards from './ReviewCards';
import BeforeAfter from './BeforeAfter';

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

// Sidebar step-by-step form (adapted from RequestQuote)
const sidebarSteps = [
  'Contact Info',
  'Service Details',
  'Address & Date',
  'Review & Submit',
];
const sidebarServiceOptions = [
  'Carpet Cleaning',
  'Upholstery Cleaning',
  'Home Cleaning',
  'Office Cleaning',
  'Window Cleaning',
  'Move In/Out Cleaning',
  'Stain & Odor Removal',
  'Laundry',
  'Organization',
  'Pet Odor Removal',
];
const sidebarInitialForm = {
  name: '',
  email: '',
  phone: '',
  services: [],
  notes: '',
  address: '',
  date: '',
  time: '',
};

function SidebarRequestQuoteForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(sidebarInitialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleServiceChange = (service) => {
    setForm((prev) => {
      const services = prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
  };
  const next = () => setStep((s) => Math.min(s + 1, sidebarSteps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-primary p-6 shadow text-center mb-8">
        <h2 className="text-2xl font-bold text-black mb-4">Thank you!</h2>
        <p className="text-black">We've received your quote request and will contact you soon.</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow p-6 mb-8">
      <h3 className="text-lg font-bold text-black mb-2 text-center lg:text-left">Request a Quote</h3>
      <div className="mb-4 text-gray-700 text-sm text-center lg:text-left">Fill out the form below and our team will get back to you with a personalized cleaning quote.</div>
      {/* Progress Bar */}
      <div className="flex items-center mb-6">
        {sidebarSteps.map((label, idx) => (
          <React.Fragment key={label}>
            <div className={`flex-1 h-2 ${idx <= step ? 'bg-[#F78E3B]' : 'bg-gray-200'}`}></div>
            {idx < sidebarSteps.length - 1 && <div className="w-2" />}
          </React.Fragment>
        ))}
      </div>
      <h2 className="text-base font-bold text-black mb-4 text-center">{sidebarSteps[step]}</h2>
      <form onSubmit={handleSubmit}>
        {step === 0 && (
          <div className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F78E3B] bg-white text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F78E3B] bg-white text-black"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F78E3B] bg-white text-black"
            />
          </div>
        )}
        {step === 1 && (
          <div className="space-y-3">
            <div className="mb-1 font-semibold text-sm">Select Service(s):</div>
            <div className="grid grid-cols-1 gap-2">
              {sidebarServiceOptions.map((service) => (
                <label key={service} className="flex items-center gap-2 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    checked={form.services.includes(service)}
                    onChange={() => handleServiceChange(service)}
                    className="accent-[#F78E3B]"
                  />
                  <span>{service}</span>
                </label>
              ))}
            </div>
            <textarea
              name="notes"
              placeholder="Additional notes (optional)"
              value={form.notes}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F78E3B] bg-white text-black"
            />
          </div>
        )}
        {step === 2 && (
          <div className="space-y-3">
            <input
              type="text"
              name="address"
              placeholder="Service Address"
              value={form.address}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F78E3B] bg-white text-black"
            />
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F78E3B] bg-white text-black"
            />
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F78E3B] bg-white text-black"
            />
          </div>
        )}
        {step === 3 && (
          <div className="space-y-3 text-black text-sm">
            <div><b>Name:</b> {form.name}</div>
            <div><b>Email:</b> {form.email}</div>
            <div><b>Phone:</b> {form.phone}</div>
            <div><b>Services:</b> {form.services.join(', ')}</div>
            <div><b>Notes:</b> {form.notes}</div>
            <div><b>Address:</b> {form.address}</div>
            <div><b>Date:</b> {form.date}</div>
            <div><b>Time:</b> {form.time}</div>
          </div>
        )}
        <div className="flex justify-between mt-6 gap-2">
          {step > 0 && (
            <button
              type="button"
              onClick={prev}
              className="w-full px-4 py-2 bg-[#144966] text-white font-semibold hover:bg-[#F78E3B] transition-colors"
            >
              Back
            </button>
          )}
          {step < sidebarSteps.length - 1 && (
            <button
              type="button"
              onClick={next}
              className="w-full ml-auto px-4 py-2 bg-[#F78E3B] text-white font-semibold hover:bg-[#144966] transition-colors"
              disabled={
                (step === 0 && (!form.name || !form.email || !form.phone)) ||
                (step === 1 && form.services.length === 0) ||
                (step === 2 && (!form.address || !form.date || !form.time))
              }
            >
              Next
            </button>
          )}
          {step === sidebarSteps.length - 1 && (
            <button
              type="submit"
              className="w-full ml-auto px-4 py-2 bg-[#F78E3B] text-white font-semibold hover:bg-[#144966] transition-colors"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

// FAQ data
const faqs = [
  {
    question: 'What is included in a move-in/move-out cleaning?',
    answer: 'Our service includes deep cleaning of all rooms, kitchen appliances, bathrooms, inside cabinets, drawers, closets, and more. We tailor our cleaning to your needs.'
  },
  {
    question: 'Do I need to be present during the cleaning?',
    answer: 'No, you do not need to be present. As long as we have access to the property, our team can complete the cleaning and notify you when finished.'
  },
  {
    question: 'How long does a move-in/move-out cleaning take?',
    answer: 'Most cleanings take between 3-6 hours depending on the size and condition of the home.'
  },
  {
    question: 'Are your cleaning products safe for kids and pets?',
    answer: 'Yes! We use eco-friendly, non-toxic products that are safe for your family and pets.'
  },
  {
    question: 'Can I book same-day or next-day service?',
    answer: 'We do our best to accommodate urgent requests. Please contact us for availability.'
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="bg-white shadow p-8 mt-10">
      <h2 className="text-2xl font-bold text-[#144966] mb-6">Frequently Asked Questions</h2>
      <div className="divide-y divide-gray-200">
        {faqs.map((faq, idx) => (
          <div key={idx}>
            <button
              className="w-full text-left py-4 px-0 font-semibold text-black flex justify-between items-center focus:outline-none"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span>{faq.question}</span>
              <span className={`ml-4 transition-transform ${openIndex === idx ? 'rotate-90' : ''}`}>▶</span>
            </button>
            {openIndex === idx && (
              <div className="py-2 px-0 text-gray-700 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

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
          {/* Reviews below CTA in Hero */}
          <div className="w-full mt-8">
            <ReviewCards />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-[#F78E3B] hover:bg-[#144966] text-white px-8 py-4 font-semibold shadow transition-colors flex items-center gap-2 text-lg"
            >
              Request a Quote
              <svg className="text-white" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="15" y2="12" /><polyline points="12 9 15 12 12 15" /></svg>
            </button>
            <a
              href="tel:+13653363744"
              className="font-bold text-lg text-white bg-[#144964] px-6 py-4 hover:bg-[#F78E3B] transition-colors"
              style={{ whiteSpace: 'nowrap', display: 'inline-block' }}
            >
              Call us (365) 336-3744
            </a>
          </div>
          <ContactFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
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
      </div>
      {/* Main Content + Sidebar */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-8 mt-12">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Pricing Table - moved to top */}
          <div className="bg-white p-8 shadow mb-10">
            <h2 className="text-2xl font-bold text-[#144966] mb-6">Move-In & Move-Out Cleaning Pricing</h2>
            <table className="w-full text-left border-separate border-spacing-y-2">
              <thead>
                <tr>
                  <th className="py-3 px-4 font-semibold text-[#144966] bg-[#F8FAFC]">Home Size</th>
                  <th className="py-3 px-4 font-semibold text-[#144966] bg-[#F8FAFC]">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#FFFBEA]">
                  <td className="py-3 px-4">Studio / 1 Bedroom</td>
                  <td className="py-3 px-4">$179 - $229</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4">2 Bedrooms</td>
                  <td className="py-3 px-4">$229 - $279</td>
                </tr>
                <tr className="bg-[#FFFBEA]">
                  <td className="py-3 px-4">3 Bedrooms</td>
                  <td className="py-3 px-4">$279 - $349</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4">4+ Bedrooms</td>
                  <td className="py-3 px-4">$349+</td>
                </tr>
              </tbody>
            </table>
            <div className="text-xs text-gray-500 mt-3 italic">*Final pricing may vary based on home condition, size, and specific requests. Contact us for a personalized quote.</div>
          </div>
          {/* Mobile: Step-by-step Request a Quote Form below pricing */}
          <div className="block lg:hidden">
            <SidebarRequestQuoteForm />
          </div>
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
          {/* Before & After Section (replaces Gallery) */}
          <div className="bg-white p-8 shadow">
            <h2 className="text-2xl font-bold text-[#144966] mb-6">Before & After: Real Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <BeforeAfter
                beforeImage="/before-after/carpet-before.png"
                afterImage="/before-after/carpet-after.png"
                beforeLabel="Before Cleaning"
                afterLabel="After Cleaning"
                title="Carpet Cleaning | Stain Removal"
              />
              <BeforeAfter
                beforeImage="/before-after/kitchen-before.jpg"
                afterImage="/before-after/kitchen-after.jpg"
                beforeLabel="Before Cleaning"
                afterLabel="After Cleaning"
                title="Kitchen Deep Clean"
              />
              <BeforeAfter
                beforeImage="/before-after/shower-before.png"
                afterImage="/before-after/shower-after.png"
                beforeLabel="Before Cleaning"
                afterLabel="After Cleaning"
                title="Shower Deep Clean"
              />
            </div>
          </div>
          {/* FAQ Section */}
          <FAQAccordion />
          {/* Features Section at Bottom */}
          <div className="mt-12 bg-[#FFFBEA] py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
              <div className="flex items-center gap-3 bg-white shadow p-6 font-bold text-lg text-black">
                <ShieldCheck className="text-[#F78E3B]" size={32} />
                Fully Insured
              </div>
              <div className="flex items-center gap-3 bg-white shadow p-6 font-bold text-lg text-black">
                <UserCheck className="text-[#F78E3B]" size={32} />
                Background Checked
              </div>
              <div className="flex items-center gap-3 bg-white shadow p-6 font-bold text-lg text-black">
                <Package className="text-[#F78E3B]" size={32} />
                Supplies Included
              </div>
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <aside className="w-full lg:w-80 lg:sticky lg:top-28 h-fit hidden lg:block">
          {/* Desktop: Step-by-step Request a Quote Form in sidebar */}
          <SidebarRequestQuoteForm />
          <div className="bg-[#144965] text-white shadow p-8 mb-8">
            <h3 className="text-lg font-bold mb-4">Residential Services</h3>
            <ul className="space-y-3 list-none pl-0">
              <li><span>Basic / Regular House Cleaning</span></li>
              <li><span>Deep Cleaning</span></li>
              <li><span>Spring Cleaning</span></li>
              <li><span className="font-bold text-[#F78E3B]">Move-In & Move-Out Cleaning</span></li>
              <li><span>Green/Eco-Friendly Cleaning</span></li>
              <li><span>Laundry Services</span></li>
              <li><span>Upholstery Cleaning</span></li>
              <li><span>Carpet & Rug Cleaning</span></li>
              <li><span>Curtain & Blind Cleaning</span></li>
              <li><span>Window Cleaning</span></li>
            </ul>
          </div>
          <div className="bg-white shadow p-8 flex flex-col items-center mb-8">
            <div className="text-3xl font-bold text-[#144965] mb-2">33,600+</div>
            <div className="text-gray-700 text-sm text-center">Completed Cleaning Projects</div>
          </div>
          <div className="bg-white shadow p-8">
            <h3 className="text-lg font-bold text-[#144966] mb-4">What Our Clients Say</h3>
            <ReviewCards />
            <a href="#" className="block mt-4 text-primary hover:text-[#144966] text-center font-semibold underline">Read More Reviews</a>
          </div>
          {/* Features Row Below Reviews */}
          <div className="bg-white shadow p-6 mt-8">
            <div className="text-lg font-bold text-black mb-4">Why Choose Us?</div>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-3 bg-white shadow p-4">
                <Truck className="text-[#F78E3B]" size={28} />
                <span className="font-bold text-lg text-black">Flexible Scheduling</span>
              </div>
              <div className="flex items-center gap-3 bg-white shadow p-4">
                <CheckCircle className="text-[#F78E3B]" size={28} />
                <span className="font-bold text-lg text-black">100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center gap-3 bg-white shadow p-4">
                <Leaf className="text-[#F78E3B]" size={28} />
                <span className="font-bold text-lg text-black">Eco-Friendly Products</span>
              </div>
              <div className="flex items-center gap-3 bg-white shadow p-4">
                <Users className="text-[#F78E3B]" size={28} />
                <span className="font-bold text-lg text-black">Trusted, Vetted Cleaners</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default MoveInOutCleaning; 