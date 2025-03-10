import { useState } from 'react';

const SaleBanner = () => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="bg-[#A4C639] text-white py-2 px-4 text-center">
        <p className="font-bold">SPECIAL OFFER: 20% OFF ALL BLINDS</p>
      </div>
    );
  }

  return (
    <div className="relative">
      <img 
        src="/sales-banner.png" 
        alt="Sale Banner" 
        className="w-full h-auto"
        onError={() => setImageError(true)}
      />
    </div>
  );
}

export default SaleBanner;