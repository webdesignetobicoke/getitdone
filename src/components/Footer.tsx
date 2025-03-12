import { Instagram, Facebook, Linkedin, Youtube, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import ContactFormModal from './ContactFormModal';

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <footer className="bg-white">
            <div className="border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="py-8 grid grid-cols-1 md:grid-cols-5 gap-8">
                        <div>
                            <h3 className="text-base font-bold text-black mb-4">Contact Information</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-gray-600 text-sm">
                                
                                    <span>(905) 277-2872</span>
                                </li>
                                <li className="flex items-center gap-2 text-gray-600 text-sm">
                               
                                    <span>info@curadental.ca</span>
                                </li>
                                <li className="flex items-center gap-2 text-gray-600 text-sm">
                                 
                                    <span>250 Dundas St W, Mississauga, ON L5B 1J2</span>
                                </li>
                                <li className="flex items-center gap-2 text-gray-600 text-sm">
                              
                                    <span>Opening Hours:</span>
                                </li>
                                <li className="text-gray-600 text-sm pl-6">Monday: Closed</li>
                                <li className="text-gray-600 text-sm pl-6">Tue: 10AM-5PM</li>
                                <li className="text-gray-600 text-sm pl-6">Wed: 11AM-6PM</li>
                                <li className="text-gray-600 text-sm pl-6">Thu: 10AM-5PM</li>
                                <li className="text-gray-600 text-sm pl-6">Fri: 10AM-5PM</li>
                                <li className="text-gray-600 text-sm pl-6">Sat: 9AM-2:30PM</li>
                                <li className="text-gray-600 text-sm pl-6">Sunday: Closed</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-base font-bold text-black mb-4">Our Services</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 hover:text-secondary text-sm">General Dentistry</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-secondary text-sm">Cosmetic Dentistry</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-secondary text-sm">Orthodontics</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-secondary text-sm">Dental Implants</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-secondary text-sm">Emergency Care</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-base font-bold text-black mb-4">Patient Resources</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 hover:text-secondary text-sm">New Patient Forms</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-secondary text-sm">Insurance Information</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-secondary text-sm">Payment Options</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-secondary text-sm">Patient Education</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-secondary text-sm">FAQs</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-base font-bold text-black mb-4">About Us</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 hover:text-secondary text-sm">Our Team</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-secondary text-sm">Our Mission</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-secondary text-sm">Technology</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-secondary text-sm">Office Tour</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-base font-bold text-black mb-4">Connect With Us</h3>
                            <div className="mb-6">
                                <button 
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full bg-[#32A2CD] hover:bg-opacity-90 text-white px-6 py-2 rounded flex items-center justify-center gap-2"
                                >
                                    REQUEST AN APPOINTMENT <ArrowRight size={16} />
                                </button>
                            </div>
                            <div className="flex space-x-4">
                                <a href="#" className="w-9 h-9 bg-[#32A2CD] text-white rounded-full flex items-center justify-center hover:bg-opacity-90">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="w-9 h-9 bg-[#32A2CD] text-white rounded-full flex items-center justify-center hover:bg-opacity-90">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className="w-9 h-9 bg-[#32A2CD] text-white rounded-full flex items-center justify-center hover:bg-opacity-90">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="w-9 h-9 bg-[#32A2CD] text-white rounded-full flex items-center justify-center hover:bg-opacity-90">
                                    <Youtube size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-200 py-8">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} Dental Clinic. All rights reserved.</p>
                            <button 
                                className="flex items-center space-x-2 bg-[#32A2CD] hover:bg-opacity-90 text-white px-6 py-2 rounded"
                                onClick={() => window.open('https://maps.google.com')}
                            >
                                <MapPin size={20} />
                                <span>Find Our Location</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <ContactFormModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </footer>
    );
};

export default Footer;