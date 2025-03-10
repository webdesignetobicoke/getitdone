const Services = () => {
    const services = [
        {
            title: "Blinds",
            description: "Exceptional range of roller, venetian, and vertical blinds with custom fitting service.",
            imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80"
        },
        {
            title: "Shutters",
            description: "Premium quality plantation shutters for timeless elegance and light control.",
            imageUrl: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&auto=format&fit=crop&q=80"
        },
        {
            title: "Awnings",
            description: "Stylish outdoor shading solutions perfect for patios and commercial spaces.",
            imageUrl: "https://images.unsplash.com/photo-1597294303765-c8ec8184aa5b?w=800&auto=format&fit=crop&q=80"
        },
        {
            title: "Curtains",
            description: "Bespoke curtains tailored to your windows with professional measuring and installation.",
            imageUrl: "https://images.unsplash.com/photo-1585517920927-93c2aa2fa63c?w=800&auto=format&fit=crop&q=80"
        }
    ];

    return (
        <div className="bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="max-w-7xl mx-auto pt-[20px]">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 px-2 sm:px-4">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className="bg-white shadow-md overflow-hidden"
                        >
                            <div className="relative h-32 sm:h-48 overflow-hidden">
                                <img
                                    src={service.imageUrl}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                            </div>
                            <div className="p-2 sm:p-4 text-center">
                                <h3 className="text-lg sm:text-xl font-bold text-[#8b9e5b] mb-1 sm:mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
                                    {service.description}
                                </p>
                                <button className="px-4 sm:px-6 py-1 sm:py-2 bg-[#8b9e5b] text-white text-xs sm:text-sm font-medium">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;