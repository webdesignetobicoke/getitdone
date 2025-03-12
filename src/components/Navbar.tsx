import { useState } from 'react';
import { 
  Menu, X, Phone, ArrowRight, Info, 
  Briefcase, Smile, Star, Users,
  ChevronDown, Flame, Stethoscope,
  FileText, Clock, Calendar, Heart,
  ClipboardList, UserPlus, Building
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

  const navItems = {
    about: {
      label: 'About',
      icon: <Info size={20} />,
      items: [
        { label: 'About Us', icon: <Users size={18} />, page: 'about-us' },
        { label: 'Our Story', icon: <Building size={18} />, page: 'our-story' },
        { label: 'Our Team', icon: <Users size={18} />, page: 'our-team' },
        { label: 'Technology', icon: <Stethoscope size={18} />, page: 'technology' },
        { label: 'Office Tour', icon: <Building size={18} />, page: 'office-tour' }
      ]
    },
    services: {
      label: 'Services',
      icon: <Briefcase size={20} />,
      items: [
        { label: 'General Dentistry', icon: <Flame size={18} />, page: 'general-dentistry' },
        { label: 'Cosmetic Dentistry', icon: <Smile size={18} />, page: 'cosmetic-dentistry' },
        { label: 'Emergency Care', icon: <Heart size={18} />, page: 'emergency-care' }
      ]
    },
    invisalign: {
      label: 'Invisalign®',
      icon: <Smile size={20} />,
      items: [
        { label: 'How It Works', icon: <FileText size={18} />, page: 'invisalign-process' },
        { label: 'Treatment Timeline', icon: <Clock size={18} />, page: 'invisalign-timeline' },
        { label: 'Book Consultation', icon: <Calendar size={18} />, page: 'invisalign-consultation' }
      ]
    },
    specialties: {
      label: 'Specialties',
      icon: <Star size={20} />,
      items: [
        { label: 'Dental Implants', icon: <Flame size={18} />, page: 'dental-implants' },
        { label: 'Orthodontics', icon: <Smile size={18} />, page: 'orthodontics' },
        { label: 'Oral Surgery', icon: <Stethoscope size={18} />, page: 'oral-surgery' }
      ]
    },
    patients: {
      label: 'Patients',
      icon: <Users size={20} />,
      items: [
        { label: 'Patient Forms', icon: <ClipboardList size={18} />, page: 'patient-forms' },
        { label: 'New Patients', icon: <UserPlus size={18} />, page: 'new-patients' },
        { label: 'Insurance', icon: <FileText size={18} />, page: 'insurance' }
      ]
    }
  };

  return (
    <nav className="bg-white">
      {/* Top Header - Location & Secondary Navigation */}
      <div className="hidden md:block bg-gradient-to-r from-gray-100 to-gray-50 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-sm text-gray-600 flex items-center gap-2 hover:text-[#32A2CD] transition-colors">
              <Phone size={14} /> 250 Dundas St W, Mississauga, ON L5B 1J2
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm font-medium">
              {['About', 'Services', 'Patient Forms', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  onClick={() => handleNavigation(item.toLowerCase().replace(' ', '-'))}
                  className="text-gray-600 hover:text-[#32A2CD] transition-colors duration-200 cursor-pointer hover:underline"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Header with Logo & CTA */}
      <div className="hidden md:block bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-8">
              <img 
                src="/logos/cura-dental-logo.png" 
                alt="Cura Dental Logo" 
                className="h-16 w-auto hover:opacity-90"
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4 border-r border-gray-200 pr-6">
                <Phone className="text-[#32A2CD] h-8 w-8" />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Call us on</p>
                  <p className="font-bold text-lg text-gray-800 hover:text-[#32A2CD]">(905) 277-2872</p>
                </div>
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#32A2CD] hover:bg-opacity-90 text-white px-6 py-3 flex items-center gap-2 font-medium"
              >
                REQUEST AN APPOINTMENT
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-t border-b border-gray-200 shadow-sm bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex items-center gap-8 py-4">
            {/* Navigation menu items */}
            <div className="flex items-center gap-6">
              {Object.entries(navItems).map(([key, item]) => (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className="text-gray-700 hover:text-primary cursor-pointer flex items-center gap-2 text-lg font-medium"
                  >
                    {item.icon}
                    {item.label}
                    <ChevronDown size={16} />
                  </button>
                  
                  {activeDropdown === key && (
                    <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                      {item.items.map((subItem) => (
                        <button
                          key={subItem.page}
                          onClick={() => handleNavigation(subItem.page)}
                          className="w-full px-4 py-2 text-left text-gray-700 hover:text-primary hover:bg-gray-50 flex items-center gap-3"
                        >
                          {subItem.icon}
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile header */}
      <div className="md:hidden flex items-center justify-between h-16 px-4">
        <img 
          src="/logos/cura-dental-logo.png" 
          alt="Cura Dental Logo" 
          className="h-10 w-auto"
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
                <p className="text-primary font-bold hover:opacity-80 transition-opacity">(905) 277-2872</p>
              </div>
            </div>
            {/* Mobile navigation items */}
            <div className="space-y-2">
              {Object.entries(navItems).map(([key, item]) => (
                <div key={key} className="space-y-1">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === key ? null : key)}
                    className="w-full py-2 text-gray-700 hover:text-primary hover:bg-gray-50 flex items-center justify-between"
                  >
                    <span className="flex items-center gap-2">
                      {item.icon}
                      {item.label}
                    </span>
                    <ChevronDown size={16} className={`transform transition-transform ${activeDropdown === key ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {activeDropdown === key && (
                    <div className="pl-8 space-y-1">
                      {item.items.map((subItem) => (
                        <button
                          key={subItem.page}
                          onClick={() => handleNavigation(subItem.page)}
                          className="w-full py-2 text-gray-600 hover:text-primary hover:bg-gray-50 flex items-center gap-2"
                        >
                          {subItem.icon}
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
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