import { ArrowRight, Instagram, Facebook } from 'lucide-react';
import { useState } from 'react';
import ContactFormModal from './ContactFormModal';

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <footer className="bg-white">
            <div className="border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
                    <div className="py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
                        <div className="space-y-2">
                            <h3 className="text-base font-bold text-black mb-2">Contact Information</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-gray-600 text-sm">
                                    <span>info@getitdone.ca</span>
                                </li>
                                <li className="flex items-center gap-2 text-gray-600 text-sm">
                                    <span>+1 (365) 336-3744</span>
                                </li>
                                <li className="flex items-center gap-2 text-gray-600 text-sm">
                                    <span>Hamilton, Ontario</span>
                                </li>
                                <li>
                                    <h4 className="font-bold text-black text-sm mb-2">Opening Hours:</h4>
                                    <ul className="space-y-1 pl-0">
                                        <li className="text-gray-600 text-sm text-left">Monday: Closed</li>
                                        <li className="text-gray-600 text-sm text-left">Tue: 10AM-5PM</li>
                                        <li className="text-gray-600 text-sm text-left">Wed: 11AM-6PM</li>
                                        <li className="text-gray-600 text-sm text-left">Thu: 10AM-5PM</li>
                                        <li className="text-gray-600 text-sm text-left">Fri: 10AM-5PM</li>
                                        <li className="text-gray-600 text-sm text-left">Sat: 9AM-2:30PM</li>
                                        <li className="text-gray-600 text-sm text-left">Sunday: Closed</li>
                                    </ul>
                                </li>
                                <li className="pt-2">
                                    <button 
                                        onClick={() => setIsModalOpen(true)}
                                        className="w-full bg-primary hover:bg-secondary text-white px-6 py-3 flex items-center justify-center gap-2 font-medium"
                                    >
                                        REQUEST A QUOTE <ArrowRight size={16} />
                                    </button>
                                </li>
                                <li>
                                    <div className="flex space-x-4 pt-2">
                                        <a href="#" className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary">
                                            <Instagram size={18} />
                                        </a>
                                        <a href="#" className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary">
                                            <Facebook size={18} />
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="space-y-2">
                            <h3 className="text-base font-bold text-black mb-2">Our Services</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 hover:text-secondary text-sm">Carpet & Upholstery Cleaning</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-secondary text-sm">Home Cleaning</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-secondary text-sm">Office Cleaning</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-secondary text-sm">Window Cleaning</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-secondary text-sm">Move In/Out Cleaning</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-secondary text-sm">Stain & Odor Removal</a></li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-base font-bold text-black mb-2">Add-Ons</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 hover:text-secondary text-sm">Laundry</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-secondary text-sm">Organization</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-secondary text-sm">Pet Odor Removal</a></li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-base font-bold text-black mb-2">About Us</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 hover:text-secondary text-sm">Our Team</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-secondary text-sm">Our Mission</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-secondary text-sm">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-200 py-4">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} GetItDone Cleaning. All rights reserved.</p>
                            <div className="flex items-center space-x-6">
                                <a href="#" className="text-gray-600 hover:text-primary text-sm">Privacy Policy</a>
                                <a href="#" className="text-gray-600 hover:text-primary text-sm">Sitemap</a>
                                <a href="#" className="text-gray-600 hover:text-primary text-sm">Terms of Use</a>
                            </div>
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