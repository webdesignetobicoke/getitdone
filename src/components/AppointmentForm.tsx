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
      <div className={`bg-[#81C5C6] p-8 shadow-[0_20px_50px_rgba(129,197,198,0.3)] border-2 border-white/20 backdrop-blur-sm transform hover:translate-y-[-2px] transition-all duration-300 text-center ${className}`}>
        <div className="py-8">
          <h3 className="text-2xl font-semibold mb-4 text-black">Thank You!</h3>
          <p className="text-black">We've received your appointment request and will contact you shortly to confirm your appointment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-[#81C5C6] p-8 shadow-[0_20px_50px_rgba(129,197,198,0.3)] border-2 border-white/20 backdrop-blur-sm transform hover:translate-y-[-2px] transition-all duration-300 text-center ${className}`}>
      <h3 className="text-2xl font-semibold mb-4 text-black">{title}</h3>
      <p className="mb-6 text-black">{description} Call us at <a href="tel:905-277-2872" className="font-bold hover:underline">905-277-2872</a> or fill out the form below.</p>
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
          className="w-full bg-[#32A2CD] text-white py-4 text-center font-semibold hover:bg-opacity-90 flex items-center justify-center gap-2 transform hover:translate-y-[-2px] transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <span className="text-center">REQUEST AN APPOINTMENT</span> 
          <ArrowRight size={16} style={{ color: 'white' }} />
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;