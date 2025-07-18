import React, { useState } from 'react';
import { User, Leaf, Clock, Star, ShieldCheck } from 'lucide-react';

const steps = [
  'Contact Info',
  'Service Details',
  'Address & Date',
  'Review & Submit',
];

interface QuoteForm {
  name: string;
  email: string;
  phone: string;
  services: string[];
  notes: string;
  address: string;
  date: string;
  time: string;
}

const initialForm: QuoteForm = {
  name: '',
  email: '',
  phone: '',
  services: [],
  notes: '',
  address: '',
  date: '',
  time: '',
};

const serviceOptions = [
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

const RequestQuote: React.FC = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (service: string) => {
    setForm((prev) => {
      const services = prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
  };

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-primary p-8 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-bold text-black mb-4">Thank you!</h2>
        <p className="text-black">We've received your quote request and will contact you soon.</p>
      </div>
    );
  }

  return (
    <div className="w-full my-12 shadow-lg p-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
        {/* Left: Call-to-action */}
        <div className="bg-[#144965] flex flex-col justify-center p-8 md:p-12 text-white h-full">
          <h3 className="text-2xl font-bold mb-4">Would you prefer to <span className="text-primary">talk with an expert now?</span></h3>
          <p className="mb-6">Speak with our cleaning team:</p>
          <a href="tel:+13653363744" className="block text-2xl md:text-3xl font-bold bg-primary text-black rounded-lg px-6 py-4 mb-6 text-center tracking-wide shadow-lg hover:bg-secondary hover:text-white transition-colors">
            Call us: (365) 336-3744
          </a>
          <div className="mt-auto pt-8">
            <div className="mb-2 font-semibold">Why Choose Us?</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white/10 p-4 flex flex-col items-center shadow">
                <User className="text-primary mb-2" size={32} />
                <span className="text-center text-sm font-medium">Professional, friendly staff</span>
              </div>
              <div className="bg-white/10 p-4 flex flex-col items-center shadow">
                <Leaf className="text-primary mb-2" size={32} />
                <span className="text-center text-sm font-medium">Eco-friendly cleaning products</span>
              </div>
              <div className="bg-white/10 p-4 flex flex-col items-center shadow">
                <Star className="text-primary mb-2" size={32} />
                <span className="text-center text-sm font-medium">Top-rated cleaning service</span>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Form Card */}
        <div className="flex items-center justify-center bg-gray-50 p-4 md:p-8">
          <div className="w-full max-w-lg bg-white shadow-lg p-6 md:p-8">
            {/* Progress Bar */}
            <div className="flex items-center mb-8">
              {steps.map((label, idx) => (
                <React.Fragment key={label}>
                  <div className={`flex-1 h-2 rounded ${idx <= step ? 'bg-primary' : 'bg-gray-200'}`}></div>
                  {idx < steps.length - 1 && <div className="w-4" />}
                </React.Fragment>
              ))}
            </div>
            <h2 className="text-xl font-bold text-black mb-6 text-center">{steps[step]}</h2>
            <form onSubmit={handleSubmit}>
              {step === 0 && (
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary bg-white text-black"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary bg-white text-black"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary bg-white text-black"
                  />
                </div>
              )}
              {step === 1 && (
                <div className="space-y-4">
                  <div className="mb-2 font-semibold">Select Service(s):</div>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceOptions.map((service) => (
                      <label key={service} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={form.services.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className="accent-primary"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary bg-white text-black"
                  />
                </div>
              )}
              {step === 2 && (
                <div className="space-y-4">
                  <input
                    type="text"
                    name="address"
                    placeholder="Service Address"
                    value={form.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary bg-white text-black"
                  />
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary bg-white text-black"
                  />
                  <input
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary bg-white text-black"
                  />
                </div>
              )}
              {step === 3 && (
                <div className="space-y-4 text-black">
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
              <div className="flex justify-between mt-8 gap-4">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={prev}
                    className="w-full md:w-auto px-6 py-3 bg-secondary text-white rounded font-semibold hover:bg-primary transition-colors"
                  >
                    Back
                  </button>
                )}
                {step < steps.length - 1 && (
                  <button
                    type="button"
                    onClick={next}
                    className="w-full md:w-auto ml-auto px-6 py-3 bg-primary text-white rounded font-semibold hover:bg-secondary transition-colors"
                    disabled={
                      (step === 0 && (!form.name || !form.email || !form.phone)) ||
                      (step === 1 && form.services.length === 0) ||
                      (step === 2 && (!form.address || !form.date || !form.time))
                    }
                  >
                    Next
                  </button>
                )}
                {step === steps.length - 1 && (
                  <button
                    type="submit"
                    className="w-full md:w-auto ml-auto px-6 py-3 bg-primary text-white rounded font-semibold hover:bg-secondary transition-colors"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestQuote; 