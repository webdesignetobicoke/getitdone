import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface AppointmentFormProps {
  title?: string;
  description?: string;
  className?: string;
}

const AppointmentForm = ({
  title = "Schedule Your Dental Visit",
  description = "Ready for a consultation? Schedule your appointment today.",
  className = ""
}: AppointmentFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the form data to your backend
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className={`bg-primary p-8 shadow-[0_20px_50px_rgba(247,142,59,0.1)] border-2 border-white/20 backdrop-blur-sm transform hover:translate-y-[-2px] transition-all duration-300 text-left ${className}`}>
        <div className="py-8">
          <h3 className="text-2xl font-semibold mb-4 text-black text-center">Thank You!</h3>
          <p className="text-black text-center">We've received your quote request and will contact you shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-primary p-8 shadow-[0_20px_50px_rgba(247,142,59,0.1)] border-2 border-white/20 backdrop-blur-sm transform hover:translate-y-[-2px] transition-all duration-300 text-left ${className}`}>
      <h3 className="text-2xl font-semibold mb-4 text-black text-center">Request a Quote</h3>
      <p className="mb-6 text-black text-center">Ready for a quote? Call us at <a href="tel:+13653363744" className="font-bold hover:underline">(365) 336-3744</a> or fill out the form below.</p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="relative">
          <label htmlFor="name" className="block text-sm font-medium text-black mb-1">
            Full Name
          </label>
          <input 
            type="text" 
            id="name"
            className="w-full px-4 py-3 text-gray-900 bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
            required
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div className="relative">
          <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
            Email
          </label>
          <input 
            type="email"
            id="email"
            className="w-full px-4 py-3 text-gray-900 bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div className="relative">
          <label htmlFor="phone" className="block text-sm font-medium text-black mb-1">
            Phone Number
          </label>
          <input 
            type="tel"
            id="phone"
            className="w-full px-4 py-3 text-gray-900 bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
            required
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
        <div className="relative">
          <label htmlFor="date" className="block text-sm font-medium text-black mb-1">
            Preferred Date
          </label>
          <input 
            type="date"
            id="date"
            className="w-full px-4 py-3 text-gray-900 bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
            required
            min={new Date().toISOString().split('T')[0]}
            value={formData.date}
            onChange={(e) => setFormData({...formData, date: e.target.value})}
          />
        </div>
        <div className="relative">
          <label htmlFor="time" className="block text-sm font-medium text-black mb-1">
            Preferred Time
          </label>
          <select
            id="time"
            className="w-full px-4 py-3 text-gray-900 bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
            required
            value={formData.time}
            onChange={(e) => setFormData({...formData, time: e.target.value})}
          >
            <option value="">Select a time</option>
            <option value="09:00">9:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="14:00">2:00 PM</option>
            <option value="15:00">3:00 PM</option>
            <option value="16:00">4:00 PM</option>
            <option value="17:00">5:00 PM</option>
          </select>
        </div>
        <button 
          type="submit"
          className="w-full bg-primary hover:bg-secondary text-white py-4 font-semibold flex items-center justify-center gap-2 transform hover:translate-y-[-2px] transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <span>REQUEST A QUOTE</span> 
          <ArrowRight size={16} style={{ color: 'black' }} />
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;