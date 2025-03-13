import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Breadcrumbs = ({ currentPage, setCurrentPage }: BreadcrumbsProps) => {
  const pageCategories: Record<string, { parent: string; display: string }> = {
    'home': { parent: '', display: 'Home' },
    
    // About section
    'about-us': { parent: 'about', display: 'Meet Our Team' },
    'our-story': { parent: 'about', display: 'Our Story' },
    'our-team': { parent: 'about', display: 'Our Team' },
    'technology': { parent: 'about', display: 'Technology' },
    'office-tour': { parent: 'about', display: 'Office Tour' },
    
    // Services section
    'general-dentistry': { parent: 'services', display: 'General Dentistry' },
    'cosmetic-dentistry': { parent: 'services', display: 'Cosmetic Dentistry' },
    'teeth-whitening': { parent: 'cosmetic-dentistry', display: 'Teeth Whitening' },
    'emergency-care': { parent: 'services', display: 'Emergency Care' },
    
    // Invisalign section
    'invisalign-process': { parent: 'invisalign', display: 'How It Works' },
    'invisalign-timeline': { parent: 'invisalign', display: 'Treatment Timeline' },
    'invisalign-consultation': { parent: 'invisalign', display: 'Book Consultation' },
    
    // Specialties section
    'dental-implants': { parent: 'specialties', display: 'Dental Implants' },
    'orthodontics': { parent: 'specialties', display: 'Orthodontics' },
    'oral-surgery': { parent: 'specialties', display: 'Oral Surgery' },
    
    // Patients section
    'patient-forms': { parent: 'patients', display: 'Patient Forms' },
    'new-patients': { parent: 'patients', display: 'New Patients' },
    'insurance': { parent: 'patients', display: 'Insurance' },
    
    // Main sections
    'about': { parent: 'home', display: 'About' },
    'services': { parent: 'home', display: 'Services' },
    'invisalign': { parent: 'home', display: 'Invisalign®' },
    'specialties': { parent: 'home', display: 'Specialties' },
    'patients': { parent: 'home', display: 'Patients' },
    'contact': { parent: 'home', display: 'Contact' }
  };
  
  // Function to get breadcrumb trail
  const getBreadcrumbTrail = (page: string): { id: string; display: string }[] => {
    const trail = [];
    
    // Add current page
    trail.push({
      id: page,
      display: pageCategories[page]?.display || page.split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    });
    
    // Add parent categories
    let currentParent = pageCategories[page]?.parent;
    while (currentParent && currentParent !== 'home') {
      trail.unshift({
        id: currentParent,
        display: pageCategories[currentParent]?.display || currentParent
      });
      currentParent = pageCategories[currentParent]?.parent;
    }
    
    return trail;
  };
  
  const breadcrumbTrail = getBreadcrumbTrail(currentPage);
  
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-4 text-sm overflow-x-auto whitespace-nowrap">
          <button 
            onClick={() => setCurrentPage('home')}
            className="text-gray-600 hover:text-[#32A2CD] flex items-center"
            aria-label="Home"
          >
            <Home size={16} />
          </button>
          
          {breadcrumbTrail.map((item, index) => (
            <div key={item.id} className="flex items-center">
              <ChevronRight size={16} className="text-gray-400 mx-2" />
              {index === breadcrumbTrail.length - 1 ? (
                <span className="text-[#32A2CD] font-medium">{item.display}</span>
              ) : (
                <button 
                  onClick={() => setCurrentPage(item.id)}
                  className="text-gray-600 hover:text-[#32A2CD]"
                >
                  {item.display}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;