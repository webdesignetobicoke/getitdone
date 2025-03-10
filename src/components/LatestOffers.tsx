const LatestOffers = () => {
    return (
        <div className="py-8 md:py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* First Column - Promo Info */}
                    <div className="bg-gradient-to-br from-white via-white to-[#8b9e5b]/20 p-6 flex flex-col justify-center border border-gray-200">
                        {/* Arrows */}
                       
                        <h2 className="text-4xl font-bold text-[#8b9e5b] mb-4">
                            Special Offers
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Exclusive deals on our vertical blinds collection
                        </p>
                        
                        {/* Terms and Conditions */}
                        <div className="text-sm text-gray-500 space-y-2 mt-2">
                        
                            <p className="italic">Terms and conditions apply. See in store for details.</p>
                        </div>
                    </div>
                    {/* Second Column - First Offer */}
                    <div className="bg-[#8b9e5b] flex flex-col items-center justify-center text-white p-8 border border-gray-200">
                        <div className="text-2xl md:text-3xl font-bold mb-2">3 Vertical Blinds*</div>
                        <div className="text-lg text-center mb-4">Up to 6' wide, any drop†</div>
                        <div className="text-4xl md:text-5xl font-bold mb-2">£119</div>
                        <div className="text-sm">(including VAT)</div>
                    </div>
                    {/* Third Column - Second Offer */}
                    <div className="bg-[#748a41] flex flex-col items-center justify-center text-white p-8 border border-gray-200">
                        <div className="text-2xl md:text-3xl font-bold mb-2">7 Vertical Blinds*</div>
                        <div className="text-lg text-center mb-4">Up to 6' wide, any drop†</div>
                        <div className="text-4xl md:text-5xl font-bold mb-2">£239</div>
                        <div className="text-sm">(including VAT)</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestOffers;
