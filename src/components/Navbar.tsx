import { useState } from 'react';
import {
  Menu, X, Phone, ArrowRight, Info, Briefcase, DollarSign, Mail, CalendarCheck, Home as HomeIcon, ChevronDown, Building, Layers, ShoppingBag, PawPrint, Leaf, Store, Sparkles, Wand2, ClipboardList
} from 'lucide-react';
import ContactFormModal from './ContactFormModal';

interface NavbarProps {
  setCurrentPage: (page: string) => void;
}

const Navbar = ({ setCurrentPage }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const navItems = [
    {
      key: 'home',
      label: 'Home',
      icon: <HomeIcon size={20} />, page: 'home'
    },
    {
      key: 'services',
      label: 'Services',
      icon: <Briefcase size={20} />, mega: true, items: [
        {
          label: 'Residential Cleaning', icon: <Building size={18} />, children: [
            { label: 'House Cleaning', icon: <HomeIcon size={16} />, page: 'house-cleaning' },
            { label: 'Deep Cleaning', icon: <Sparkles size={16} />, page: 'deep-cleaning' },
            { label: 'Move-In/Out Cleaning', icon: <Layers size={16} />, page: 'move-in-out-cleaning' },
            { label: 'Eco-Friendly Cleaning', icon: <Leaf size={16} />, page: 'eco-cleaning' },
          ]
        },
        {
          label: 'Commercial Cleaning', icon: <Store size={18} />, children: [
            { label: 'Offices', icon: <Building size={16} />, page: 'office-cleaning' },
            { label: 'Retail', icon: <ShoppingBag size={16} />, page: 'retail-cleaning' },
            { label: 'Medical', icon: <Briefcase size={16} />, page: 'medical-cleaning' },
            { label: 'Industrial', icon: <Layers size={16} />, page: 'industrial-cleaning' },
          ]
        },
        {
          label: 'Specialty Services', icon: <Wand2 size={18} />, children: [
            { label: 'Carpet Cleaning', icon: <Briefcase size={16} />, page: 'carpet-upholstery-cleaning' },
            { label: 'Upholstery Cleaning', icon: <Building size={16} />, page: 'upholstery-cleaning' },
            { label: 'Window Cleaning', icon: <Briefcase size={16} />, page: 'window-cleaning' },
            { label: 'Pressure Washing', icon: <Sparkles size={16} />, page: 'pressure-washing' },
          ]
        },
        {
          label: 'Add-Ons', icon: <ClipboardList size={18} />, children: [
            { label: 'Laundry', icon: <ShoppingBag size={16} />, page: 'laundry' },
            { label: 'Organization', icon: <Layers size={16} />, page: 'organization' },
            { label: 'Pet Odor Removal', icon: <PawPrint size={16} />, page: 'pet-odor-removal' },
          ]
        },
      ]
    },
    {
      key: 'pricing',
      label: 'Pricing',
      icon: <DollarSign size={20} />, page: 'pricing'
    },
    {
      key: 'contact',
      label: 'Contact',
      icon: <Mail size={20} />, page: 'contact'
    },
    {
      key: 'about',
      label: 'About Us',
      icon: <Info size={20} />, page: 'about-us'
    },
  ];

  return (
    <nav className="bg-white">
      {/* Main Header with Logo & CTA */}
      <div className="hidden md:block bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-8">
              <img 
                src="/getitdone-logo.png"
                alt="Get It Done Cleaning Logo"
                className="h-24 w-auto hover:opacity-90 cursor-pointer"
                onClick={() => handleNavigation('home')}
              />
              <div className="flex items-center gap-6 ml-8">
                {navItems.map((item) => (
                  item.items ? (
                    <div
                      key={item.key}
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.key)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        className="text-black hover:text-[#144966] cursor-pointer flex items-center gap-2 text-lg font-medium"
                      >
                        {item.label}
                        <ChevronDown size={16} />
                      </button>
                      {activeDropdown === item.key && (
                        <div className="absolute top-full left-0 w-max bg-white border border-gray-200 rounded-lg shadow-lg py-4 px-6 z-50 flex gap-8">
                          {item.items.map((col) => (
                            <div key={col.label}>
                              <div className="font-bold text-black mb-2">{col.label}</div>
                              <div className="space-y-1">
                                {col.children.map((sub) => (
                                  <button
                                    key={sub.page}
                                    onClick={() => handleNavigation(sub.page)}
                                    className="w-full px-2 py-1 text-left text-black hover:text-[#F78E3B] hover:bg-gray-50 rounded"
                                  >
                                    {sub.label}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      key={item.key}
                      onClick={() => handleNavigation(item.page)}
                      className="text-black hover:text-[#144966] cursor-pointer flex items-center gap-2 text-lg font-medium"
                    >
                      {item.label}
                    </button>
                  )
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4 border-r border-gray-200 pr-6">
                <Phone className="text-primary h-8 w-8" />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Call us on</p>
                  <p className="font-bold text-lg text-gray-800 hover:text-[#144966]">(365) 336-3744</p>
                </div>
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#F78E3B] hover:bg-[#144966] text-white px-8 py-4 font-semibold shadow transition-colors flex items-center gap-2 text-lg"
              >
                Request a Quote
                <svg className="text-white" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="15" y2="12" /><polyline points="12 9 15 12 12 15" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile header */}
      <div className="md:hidden flex items-center justify-between h-24 px-4">
        <img 
          src="/getitdone-logo.png"
          alt="Get It Done Cleaning Logo"
          className="h-10 w-auto cursor-pointer"
          onClick={() => handleNavigation('home')}
        />
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-gray-700 hover:text-primary transition-colors duration-200 p-2 hover:bg-gray-100"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b shadow-lg">
          <div className="px-4 py-3 space-y-4">
            <div className="border-b border-gray-200 pb-3">
              <div className="flex items-center gap-2 mb-3">
                <Phone className="text-primary h-5 w-5" />
                <p className="text-primary font-bold hover:opacity-80 transition-opacity">(365) 336-3744</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-[#F78E3B] hover:bg-[#144966] text-white px-8 py-4 font-semibold shadow transition-colors flex items-center justify-center gap-2 text-lg"
              >
                Request a Quote
                <svg className="text-white" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="15" y2="12" /><polyline points="12 9 15 12 12 15" /></svg>
              </button>
            </div>
            {/* Mobile navigation items */}
            <div className="space-y-2">
              {navItems.map((item) => (
                item.items ? (
                  <div key={item.key} className="space-y-1">
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.key ? null : item.key)}
                      className="w-full py-2 text-black hover:text-[#144966] hover:bg-gray-50 flex items-center justify-between"
                    >
                      <span className="flex items-center gap-2">
                        {item.label}
                      </span>
                      <ChevronDown size={16} className={`transform transition-transform ${activeDropdown === item.key ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === item.key && (
                      <div className="pl-8 space-y-2">
                        {item.items.map((col) => (
                          <div key={col.label}>
                            <div className="font-bold text-black mb-2">{col.label}</div>
                            <div className="space-y-1">
                              {col.children.map((sub) => (
                                <button
                                  key={sub.page}
                                  onClick={() => handleNavigation(sub.page)}
                                  className="w-full py-2 text-black hover:text-[#F78E3B] hover:bg-gray-50"
                                >
                                  {sub.label}
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={item.key}
                    onClick={() => handleNavigation(item.page)}
                    className="w-full py-2 text-black hover:text-[#144966] hover:bg-gray-50"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
          </div>
        </div>
      )}

      <ContactFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </nav>
  );
};

export default Navbar;