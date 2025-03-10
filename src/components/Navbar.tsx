import { useState } from 'react';
import { 
  Menu, X, Phone, ArrowRight, Blinds, Warehouse, 
  Umbrella, BookOpen, Building2, Sofa, PanelTop,
  RotateCw, Rows, 
  Square, SlidersHorizontal, Store, ChevronsUpDown,
  Building, Users, BedDouble, Bath, UmbrellaIcon, Ruler
} from 'lucide-react';

interface NavbarProps {
  setCurrentPage: (page: string) => void;
}

const Navbar = ({ setCurrentPage }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white">
      {/* Top Header - Opening Hours & Secondary Navigation */}
      <div className="hidden md:block bg-white py-2 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-sm text-gray-600">535 The East Mall, Toronto, Ontario M9B 4A4, Canada</p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-sm">
              {['About', 'Areas Covered', 'Gallery', 'Inspiration', 'Blog', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  onClick={() => handleNavigation(item.toLowerCase().replace(' ', '-'))}
                  className="text-gray-700 cursor-pointer"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Company Logo, Phone, CTA */}
      <div className="hidden md:block bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h1 className="text-2xl font-bold text-[#1E4D2B]">MODERN BLINDS & SHUTTERS</h1>
            <p className="text-sm text-gray-500">shades, office blinds and shutters</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="text-[#a8bf4c]" />
              <div>
                <p className="text-xs text-gray-600">Call us on</p>
                <p className="font-bold">0808 196 5284</p>
              </div>
            </div>
            <button className="bg-[#a8bf4c] text-white px-4 py-2 flex items-center gap-2 font-semibold">
              REQUEST A FREE QUOTATION
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex items-center gap-10 py-4">
            <a 
              onClick={() => handleNavigation('home')} 
              className="text-gray-700"
            >
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </a>
            <div className="relative group">
              <a 
                className="text-gray-700 flex items-center gap-2 font-medium cursor-pointer"
              >
                <Blinds className="w-5 h-5" />
                Blinds
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-2 w-48 z-10">
                <a 
                  onClick={() => handleNavigation('roller-blinds')}
                  className="block px-4 py-2 text-gray-700 rounded-md cursor-pointer flex items-center gap-2"
                >
                  <RotateCw className="w-5 h-5" />
                  Roller Blinds
                </a>
                <a 
                  onClick={() => handleNavigation('venetian-blinds')}
                  className="block px-4 py-2 text-gray-700 rounded-md cursor-pointer flex items-center gap-2"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                  Venetian Blinds
                </a>
                <a className="block px-4 py-2 text-gray-700 rounded-md cursor-pointer flex items-center gap-2">
                  <Rows className="w-5 h-5" />
                  Vertical Blinds
                </a>
              </div>
            </div>
            <div className="relative group">
              <a 
                className="text-gray-700 flex items-center gap-2 font-medium cursor-pointer"
              >
                <Warehouse className="w-5 h-5" />
                Shutters
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-2 w-48 z-10">
                <a 
                  onClick={() => handleNavigation('full-height-shutters')}
                  className="block px-4 py-2 text-gray-700 rounded-md cursor-pointer flex items-center gap-2"
                >
                  <Square className="w-5 h-5" />
                  Full Height
                </a>
                <a 
                  onClick={() => handleNavigation('tier-on-tier-shutters')}
                  className="block px-4 py-2 text-gray-700 rounded-md cursor-pointer flex items-center gap-2"
                >
                  <ChevronsUpDown className="w-5 h-5" />
                  Tier on Tier
                </a>
              </div>
            </div>
            <div className="relative group">
              <a 
                className="text-gray-700 flex items-center gap-2 font-medium cursor-pointer"
              >
                <Umbrella className="w-5 h-5" />
                Awnings
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-2 w-48 z-10">
                <a 
                  onClick={() => handleNavigation('patio-awnings')}
                  className="block px-4 py-2 text-gray-700 rounded-md cursor-pointer flex items-center gap-2"
                >
                  <UmbrellaIcon className="w-5 h-5" />
                  Patio Awnings
                </a>
                <a 
                  onClick={() => handleNavigation('commercial-awnings')}
                  className="block px-4 py-2 text-gray-700 rounded-md cursor-pointer flex items-center gap-2"
                >
                  <Store className="w-5 h-5" />
                  Commercial Awnings
                </a>
              </div>
            </div>
            <a 
              className="text-gray-700 flex items-center gap-2 font-medium cursor-pointer"
            >
              <BookOpen className="w-5 h-5" />
              Buying Guides
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a 
              onClick={() => handleNavigation('measuring-guide')}
              className="text-gray-700 flex items-center gap-2 font-medium cursor-pointer"
            >
              <Ruler className="w-5 h-5" />
              Measuring Guide
            </a>
            <div className="relative group">
              <a 
                className="text-gray-700 flex items-center gap-2 font-medium cursor-pointer"
              >
                <Building2 className="w-5 h-5" />
                Commercial
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-2 w-64 z-10">
                <a 
                  onClick={() => handleNavigation('office-blinds')}
                  className="block px-4 py-2 text-gray-700 rounded-md cursor-pointer flex items-center gap-2"
                >
                  <Building className="w-5 h-5" />
                  Office Blinds & Shutters
                </a>
                <a 
                  onClick={() => handleNavigation('school-blinds')}
                  className="block px-4 py-2 text-gray-700 rounded-md cursor-pointer flex items-center gap-2"
                >
                  <Users className="w-5 h-5" />
                  School Blinds & Shutters
                </a>
                <a 
                  onClick={() => handleNavigation('hospital-blinds')}
                  className="block px-4 py-2 text-gray-700 rounded-md cursor-pointer flex items-center gap-2"
                >
                  <Building2 className="w-5 h-5" />
                  Hospital & Doctor's Surgery
                </a>
                <a 
                  onClick={() => handleNavigation('restaurant-blinds')}
                  className="block px-4 py-2 text-gray-700 rounded-md cursor-pointer flex items-center gap-2"
                >
                  <Store className="w-5 h-5" />
                  Restaurant & Bar
                </a>
              </div>
            </div>
            <div className="relative group">
              <a className="text-gray-700 flex items-center gap-2 font-medium cursor-pointer">
                <Sofa className="w-5 h-5" />
                Soft Furnishings
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-2 w-48 z-10">
                <a 
                  onClick={() => handleNavigation('bedding')}
                  className="block px-4 py-2 text-gray-700 rounded-md cursor-pointer flex items-center gap-2"
                >
                  <BedDouble className="w-5 h-5" />
                  Bedding
                </a>
                <a 
                  onClick={() => handleNavigation('bathroom-textiles')}
                  className="block px-4 py-2 text-gray-700 rounded-md cursor-pointer flex items-center gap-2"
                >
                  <Bath className="w-5 h-5" />
                  Bathroom Textiles
                </a>
              </div>
            </div>
            <a className="text-gray-700 flex items-center gap-2 font-medium cursor-pointer">
              <PanelTop className="w-5 h-5" />
              Curtains
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center justify-between h-16">
            <h1 className="text-xl font-bold text-[#1E4D2B]">MODERN BLINDS</h1>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-b bg-gray-50">
          <div className="px-4 py-3 space-y-2">
            <div className="px-4 py-2">
              <div className="flex items-center gap-2 font-medium mb-2">
                <Blinds className="w-5 h-5" />
                Blinds
              </div>
              <a 
                onClick={() => handleNavigation('roller-blinds')}
                className="block pl-4 py-1 text-gray-700 rounded-md cursor-pointer"
              >
                Roller Blinds
              </a>
              <a 
                onClick={() => handleNavigation('venetian-blinds')}
                className="block pl-4 py-1 text-gray-700 rounded-md cursor-pointer"
              >
                Venetian Blinds
              </a>
              <a 
                onClick={() => handleNavigation('vertical-blinds')}
                className="block pl-4 py-1 text-gray-700 rounded-md cursor-pointer"
              >
                Vertical Blinds
              </a>
            </div>
            <div className="px-4 py-2">
              <div className="flex items-center gap-2 font-medium mb-2">
                <Warehouse className="w-5 h-5" />
                Shutters
              </div>
              <a 
                onClick={() => handleNavigation('full-height-shutters')}
                className="block pl-4 py-1 text-gray-700 rounded-md cursor-pointer"
              >
                Full Height
              </a>
              <a 
                onClick={() => handleNavigation('tier-on-tier-shutters')}
                className="block pl-4 py-1 text-gray-700 rounded-md cursor-pointer"
              >
                Tier on Tier
              </a>
            </div>
            <div className="px-4 py-2">
              <div className="flex items-center gap-2 font-medium mb-2">
                <Umbrella className="w-5 h-5" />
                Awnings
              </div>
              <a 
                onClick={() => handleNavigation('patio-awnings')}
                className="block pl-4 py-1 text-gray-700 rounded-md cursor-pointer"
              >
                Patio Awnings
              </a>
              <a 
                onClick={() => handleNavigation('commercial-awnings')}
                className="block pl-4 py-1 text-gray-700 rounded-md cursor-pointer"
              >
                Commercial Awnings
              </a>
            </div>
            <a 
              onClick={() => handleNavigation('buying-guides')}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 rounded-md cursor-pointer"
            >
              <BookOpen className="w-5 h-5" />
              Buying Guides
            </a>
            <div className="px-4 py-2">
              <div className="flex items-center gap-2 font-medium mb-2">
                <Building2 className="w-5 h-5" />
                Commercial
              </div>
              <a className="block pl-4 py-1 text-gray-700 rounded-md cursor-pointer">
                Office Blinds & Shutters
              </a>
              <a className="block pl-4 py-1 text-gray-700 rounded-md cursor-pointer">
                School Blinds & Shutters
              </a>
              <a className="block pl-4 py-1 text-gray-700 rounded-md cursor-pointer">
                Hospital & Doctor's Surgery
              </a>
              <a className="block pl-4 py-1 text-gray-700 rounded-md cursor-pointer">
                Restaurant & Bar
              </a>
            </div>
            <a 
              onClick={() => handleNavigation('soft-furnishings')}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 rounded-md cursor-pointer"
            >
              <Sofa className="w-5 h-5" />
              Soft Furnishings
            </a>
            <a 
              onClick={() => handleNavigation('curtains')}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 rounded-md cursor-pointer"
            >
              <PanelTop className="w-5 h-5" />
              Curtains
            </a>
            <div className="mt-4 space-y-3 px-4 pb-4">
              <p className="text-[#A4C639] font-bold text-xl">0808 196 5284</p>
              <button className="w-full bg-[#A4C639] text-white px-4 py-3 font-semibold">
                REQUEST A FREE QUOTATION
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;