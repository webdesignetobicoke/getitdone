import { ArrowRight, Home, Users, Star, Trash2 } from 'lucide-react';

interface QuickServicesPreviewProps {
    setCurrentPage: (page: string) => void;
}

const QuickServicesPreview = ({ setCurrentPage }: QuickServicesPreviewProps) => {
    const handleServiceClick = (page: string) => {
        setCurrentPage(page);
    };

    const services = [
        {
            title: "Carpet & Upholstery Cleaning",
            description: "Deep cleaning for carpets, sofas, and more",
            icon: <Home size={28} style={{ color: '#F78E3B' }} />, // Safe icon
            page: "carpet-upholstery-cleaning"
        },
        {
            title: "Home Cleaning",
            description: "Comprehensive cleaning for your home",
            icon: <Home size={28} style={{ color: '#F78E3B' }} />, // Safe icon
            page: "home-cleaning"
        },
        {
            title: "Office Cleaning",
            description: "Professional cleaning for offices and workspaces",
            icon: <Users size={28} style={{ color: '#F78E3B' }} />, // Safe icon
            page: "office-cleaning"
        },
        {
            title: "Move In/Out Cleaning",
            description: "Thorough cleaning for moving day",
            icon: <Trash2 size={28} style={{ color: '#F78E3B' }} />, // Safe icon
            page: "move-in-out-cleaning"
        },
        {
            title: "Window Cleaning",
            description: "Crystal clear windows, inside and out",
            icon: <Star size={28} style={{ color: '#F78E3B' }} />, // Safe icon
            page: "window-cleaning"
        },
        {
            title: "Rug Cleaning",
            description: "Specialized care for area rugs",
            icon: <Star size={28} style={{ color: '#F78E3B' }} />, // Safe icon
            page: "rug-cleaning"
        },
        {
            title: "Stain & Odor Removal",
            description: "Remove tough stains and odors from any surface",
            icon: <Star size={28} style={{ color: '#F78E3B' }} />, // Safe icon
            page: "stain-odor-removal"
        },
        {
            title: "Commercial Cleaning",
            description: "Custom cleaning solutions for businesses",
            icon: <Users size={28} style={{ color: '#F78E3B' }} />, // Safe icon
            page: "commercial-cleaning"
        }
    ];

    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            onClick={() => handleServiceClick(service.page)}
                            className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between cursor-pointer hover:shadow-lg"
                        >
                            <div className="flex items-center gap-6">
                                {service.icon}
                                <div>
                                    <h3 className="text-xl font-semibold text-black">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mt-1">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                            <div className="h-10 w-10 bg-secondary rounded-full flex items-center justify-center">
                                <ArrowRight size={20} style={{ color: 'white' }} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <button 
                        onClick={() => handleServiceClick('all-services')}
                        className="group border-2 border-primary text-black hover:bg-primary hover:text-white px-8 py-4 font-semibold transition-colors flex items-center gap-2"
                    >
                        ALL SERVICES <ArrowRight size={16} className="text-black group-hover:text-white transition-colors" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default QuickServicesPreview;