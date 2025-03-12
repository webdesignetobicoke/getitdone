import { Star, Clock, Shield } from 'lucide-react';

const TrustBar = () => {
    const trustPoints = [
        {
            icon: Star,
            text: "Over 2000+ Happy Patients"
        },
        {
            icon: Clock,
            text: "Same Day Emergency Appointments"
        },
        {
            icon: Shield,
            text: "Top-Rated Dental Practice"
        }
    ];

    return (
        <div className="bg-black text-white py-3">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-around items-center">
                    {trustPoints.map((point, index) => {
                        const IconComponent = point.icon;
                        return (
                            <div key={index} className="flex items-center gap-2">
                                <IconComponent size={20} />
                                <span className="text-sm font-medium">{point.text}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default TrustBar;