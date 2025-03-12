import { ArrowRight, Star, UserPlus, Search, HeartPulse, Syringe, Baby, Smile } from 'lucide-react';

interface QuickServicesPreviewProps {
    setCurrentPage: (page: string) => void;
}

const QuickServicesPreview = ({ setCurrentPage }: QuickServicesPreviewProps) => {
    const handleServiceClick = (page: string) => {
        setCurrentPage(page);
    };

    const services = [
        {
            title: "New Patient",
            description: "Comprehensive care for first-time visitors",
            icon: <UserPlus size={28} style={{ color: '#81c5c6' }} />,
            page: "new-patient"
        },
        {
            title: "Examination",
            description: "Thorough dental check-up and assessment",
            icon: <Search size={28} style={{ color: '#81c5c6' }} />,
            page: "examination"
        },
        {
            title: "Emergency Exams",
            description: "Immediate care for dental emergencies",
            icon: <HeartPulse size={28} style={{ color: '#81c5c6' }} />,
            page: "emergency-exams"
        },
        {
            title: "Dental Hygiene",
            description: "Professional cleaning and maintenance",
            icon: <Star size={28} style={{ color: '#81c5c6' }} />,
            page: "dental-hygiene"
        },
        {
            title: "Endodontics",
            description: "Root Canal Procedures",
            icon: <Syringe size={28} style={{ color: '#81c5c6' }} />,
            page: "endodontics"
        },
        {
            title: "Teeth Whitening",
            description: "Professional teeth brightening treatment",
            icon: <Smile size={28} style={{ color: '#81c5c6' }} />,
            page: "teeth-whitening"
        },
        {
            title: "Crowns and Bridges",
            description: "Custom-made dental restorations",
            icon: <Star size={28} style={{ color: '#81c5c6' }} />,
            page: "crowns-bridges"
        },
        {
            title: "Pediatric Dentistry",
            description: "Specialized care for children",
            icon: <Baby size={28} style={{ color: '#81c5c6' }} />,
            page: "pediatric"
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
                                <ArrowRight size={20} className="text-white" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <button 
                        onClick={() => handleServiceClick('all-services')}
                        className="border-2 border-secondary text-black hover:bg-secondary hover:text-white px-8 py-4 font-semibold transition-colors flex items-center gap-2"
                    >
                        ALL SERVICES <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default QuickServicesPreview;