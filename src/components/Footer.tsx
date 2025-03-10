import { Instagram, Facebook, Linkedin, Youtube, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="py-8 grid grid-cols-1 md:grid-cols-5 gap-8">
                        <div>
                            <h3 className="text-base font-semibold text-gray-800 mb-4">Blinds Services</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 text-sm">Roller Blinds</a></li>
                                <li><a href="#" className="text-gray-600 text-sm">Venetian Blinds</a></li>
                                <li><a href="#" className="text-gray-600 text-sm">Vertical Blinds</a></li>
                                <li><a href="#" className="text-gray-600 text-sm">Shutters</a></li>
                                <li><a href="#" className="text-gray-600 text-sm">Awnings</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-base font-semibold text-gray-800 mb-4">Get To Know Us</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 text-sm">About BlindsBolt</a></li>
                                <li><a href="#" className="text-gray-600 text-sm">Leadership</a></li>
                                <li><a href="#" className="text-gray-600 text-sm">Our Guarantees</a></li>
                                <li><a href="#" className="text-gray-600 text-sm">Careers</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-base font-semibold text-gray-800 mb-4">Accessibility & Legal</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 text-sm">Accessibility</a></li>
                                <li><a href="#" className="text-gray-600 text-sm">Privacy Policy</a></li>
                                <li><a href="#" className="text-gray-600 text-sm">Terms of Service</a></li>
                                <li><a href="#" className="text-gray-600 text-sm">Legal</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-base font-semibold text-gray-800 mb-4">Offers & Rebates</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 text-sm">Special Offers</a></li>
                                <li><a href="#" className="text-gray-600 text-sm">Government Rebates</a></li>
                                <li><a href="#" className="text-gray-600 text-sm">Bulk Orders</a></li>
                                <li><a href="#" className="text-gray-600 text-sm">Commercial Projects</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-base font-semibold text-gray-800 mb-4">Customer Service</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 text-sm">Support</a></li>
                                <li><a href="#" className="text-gray-600 text-sm">My Account</a></li>
                            </ul>
                            <div className="mt-6 flex space-x-4">
                                <a href="#" className="w-9 h-9 bg-gray-800 text-white rounded-full flex items-center justify-center">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="w-9 h-9 bg-gray-800 text-white rounded-full flex items-center justify-center">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className="w-9 h-9 bg-gray-800 text-white rounded-full flex items-center justify-center">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="w-9 h-9 bg-gray-800 text-white rounded-full flex items-center justify-center">
                                    <Youtube size={20} />
                                </a>
                            </div>
                            <div className="mt-6">
                                <a href="#" className="text-gray-600 text-sm">Media Inquiries</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-200 py-8">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="w-full md:w-auto">
                                <select className="w-full md:w-48 px-3 py-2 border border-gray-300 rounded-md text-gray-700">
                                    <option>Areas We Serve</option>
                                    <option>Toronto</option>
                                    <option>Ottawa</option>
                                    <option>Hamilton</option>
                                    <option>Mississauga</option>
                                </select>
                            </div>
                            <button className="flex items-center space-x-2 bg-[#A4C639] text-white px-6 py-2 rounded-full">
                                <MapPin size={20} />
                                <span>Find a Location</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;