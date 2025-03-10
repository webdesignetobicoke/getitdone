import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Breadcrumbs = ({ currentPage, setCurrentPage }: BreadcrumbsProps) => {
  // Define page categories and their parent relationships
  const pageCategories: Record<string, { parent: string; display: string }> = {
    'roller-blinds': { parent: 'blinds', display: 'Roller Blinds' },
    'venetian-blinds': { parent: 'blinds', display: 'Venetian Blinds' },
    'blinds': { parent: 'home', display: 'Blinds' },
    'shutters': { parent: 'home', display: 'Shutters' },
    'awnings': { parent: 'home', display: 'Awnings' },
    'curtains': { parent: 'home', display: 'Curtains' },
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
    <div className="bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-4 text-sm overflow-x-auto whitespace-nowrap">
          <button 
            onClick={() => setCurrentPage('home')}
            className="text-gray-600 hover:text-[#A4C639] flex items-center"
            aria-label="Home"
          >
            <Home size={16} />
          </button>
          
          {breadcrumbTrail.map((item, index) => (
            <div key={item.id} className="flex items-center">
              <ChevronRight size={16} className="text-gray-400 mx-2" />
              {index === breadcrumbTrail.length - 1 ? (
                <span className="text-[#A4C639] font-medium">{item.display}</span>
              ) : (
                <button 
                  onClick={() => setCurrentPage(item.id)}
                  className="text-gray-600 hover:text-[#A4C639]"
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