import { X } from 'lucide-react';
import { useState } from 'react';

interface ContactFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactFormModal = ({ isOpen, onClose }: ContactFormModalProps) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            // Here you would typically send the data to your backend
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating API call
            setIsSuccess(true);
            setTimeout(() => {
                onClose();
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    date: '',
                    time: '',
                    message: ''
                });
                setIsSuccess(false);
            }, 2000);
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-[#81C5C6] w-full max-w-md p-8 relative shadow-[0_20px_50px_rgba(0,0,0,0.4)] border-2 border-white/30 backdrop-blur-sm transform transition-all duration-300 animate-fadeIn">
                <div className="absolute -top-2 -right-2 -left-2 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
                <div className="absolute -bottom-2 -right-2 -left-2 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
                
                <button 
                    onClick={onClose}
                    className="absolute right-4 top-4 text-black hover:text-white p-2 rounded-full hover:bg-black/10 transition-colors"
                >
                    <X size={24} />
                </button>

                <h2 className="text-2xl font-semibold text-black mb-4 text-center">Schedule Your Dental Visit</h2>
                
                {isSuccess ? (
                    <div className="text-center py-8">
                        <div className="text-black text-lg font-medium mb-2">
                            Appointment request submitted successfully!
                        </div>
                        <p className="text-black">
                            We'll contact you shortly to confirm your appointment.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                id="name"
                                placeholder="Full Name"
                                required
                                className="w-full px-4 py-3 text-gray-900 bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 text-left shadow-inner border border-white/30"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                required
                                className="w-full px-4 py-3 text-gray-900 bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 text-left shadow-inner border border-white/30"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>

                        <div>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="Phone Number"
                                required
                                className="w-full px-4 py-3 text-gray-900 bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 text-left shadow-inner border border-white/30"
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            />
                        </div>

                        <div>
                            <input
                                type="date"
                                id="date"
                                placeholder="Preferred Date"
                                required
                                min={new Date().toISOString().split('T')[0]}
                                className="w-full px-4 py-3 text-gray-900 bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 text-left shadow-inner border border-white/30"
                                value={formData.date}
                                onChange={(e) => setFormData({...formData, date: e.target.value})}
                            />
                        </div>

                        <div>
                            <select
                                id="time"
                                required
                                className="w-full px-4 py-3 text-gray-900 bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 text-left shadow-inner border border-white/30"
                                value={formData.time}
                                onChange={(e) => setFormData({...formData, time: e.target.value})}
                            >
                                <option value="">Select Time</option>
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

                        <div>
                            <textarea
                                id="message"
                                rows={3}
                                placeholder="Additional Notes"
                                className="w-full px-4 py-3 text-gray-900 bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 text-left shadow-inner border border-white/30"
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full ${
                                isSubmitting 
                                ? 'bg-gray-400' 
                                : 'bg-[#32A2CD] hover:bg-opacity-90'
                            } text-white py-4 text-center font-semibold hover:bg-opacity-90 flex items-center justify-center gap-2 transform hover:translate-y-[-2px] transition-all duration-300 shadow-lg hover:shadow-xl border border-white/30`}
                        >
                            {isSubmitting ? 'Submitting...' : 'REQUEST AN APPOINTMENT'}
                        </button>
                    </form>
                )}
                
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1/2 h-8 bg-[#81C5C6]/30 blur-xl"></div>
            </div>
        </div>
    );
};

export default ContactFormModal;