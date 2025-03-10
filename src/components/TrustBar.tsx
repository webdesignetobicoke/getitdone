import { Star, Shield, Award } from 'lucide-react';

const TrustBar = () => {
  return (
    <div className="bg-[#1E4D2B] text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-2 md:gap-8 items-center justify-items-center">
          <div className="flex flex-col md:flex-row items-center justify-center md:gap-3 text-center md:text-left">
            <Award className="w-5 h-5 mb-1 md:mb-0" />
            <span className="text-xs md:text-sm font-medium">5+ Years of Excellence</span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center md:gap-3 text-center md:text-left">
            <Star className="w-5 h-5 mb-1 md:mb-0" />
            <span className="text-xs md:text-sm font-medium">4.7 Ratings</span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center md:gap-3 text-center md:text-left">
            <Shield className="w-5 h-5 mb-1 md:mb-0" />
            <span className="text-xs md:text-sm font-medium">Price Match Guarantee</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustBar;