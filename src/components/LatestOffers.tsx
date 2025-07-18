const LatestOffers = () => {
    return (
        <div className="py-8 md:py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:h-[400px] rounded-xl overflow-hidden border border-gray-200 shadow-lg">
                    {/* Left side - Promo Info */}
                    <div className="w-full md:w-1/2 relative bg-gradient-to-br from-white via-white to-secondary/20 p-6 md:p-10 flex flex-col justify-center">
                        {/* Arrows */}
                        <div className="flex mb-6">
                            <div className="w-0 h-0 border-t-[15px] border-b-[15px] border-l-0 border-r-[25px] border-t-transparent border-b-transparent border-r-primary mr-3"></div>
                            <div className="w-0 h-0 border-t-[15px] border-b-[15px] border-l-0 border-r-[25px] border-t-transparent border-b-transparent border-r-secondary"></div>
                        </div>
                        
                        <h2 className="text-4xl font-bold text-primary mb-4">
                            New Client Special
                        </h2>
                        <p className="text-xl font-bold text-secondary mb-6">
                            Limited Time Cleaning Offer
                        </p>
                        
                        {/* Terms and Conditions */}
                        <div className="text-sm text-gray-500 space-y-2 mt-2">
                            <p className="italic">*First cleaning only</p>
                            <p className="italic">Terms and conditions apply. Contact us for details.</p>
                        </div>
                    </div>

                    {/* Right side - Offers */}
                    <div className="w-full md:w-1/2 flex flex-col">
                        {/* Top Offer */}
                        <div className="flex-1 bg-primary flex flex-col items-center justify-center text-white relative py-8 md:py-0">
                            <div className="text-4xl md:text-5xl font-bold mb-2">$99</div>
                            <div className="text-lg md:text-xl font-semibold">Deep Clean Special</div>
                            <div className="text-base mt-2">Includes all rooms</div>
                            {/* Plus Circle */}
                            <div className="absolute -bottom-4 w-8 h-8 bg-secondary rounded-full flex items-center justify-center z-10">
                                <div className="relative w-full h-full">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-4 h-0.5 bg-white"></div>
                                        <div className="absolute w-0.5 h-4 bg-white"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Offer */}
                        <div className="flex-1 bg-secondary flex flex-col items-center justify-center text-white py-8 md:py-0">
                            <div className="text-4xl md:text-5xl font-bold mb-2">20% Off</div>
                            <div className="text-lg md:text-xl font-semibold text-center">
                                Carpet & Upholstery Cleaning
                            </div>
                            <div className="text-base mt-2">For New Clients</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestOffers;
