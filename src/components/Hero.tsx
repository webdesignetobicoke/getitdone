import ReviewCards from '../components/ReviewCards';

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex mb-5">
      <div className="w-full lg:w-1/2 bg-[#F5F5F0] relative z-10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E4D2B] leading-tight mb-6">
            Blinds & Shutters<br />
            in Toronto
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            For 5 years, we've been transforming Toronto's spaces with premium window treatments. Celebrating our 5th anniversary with exceptional service and craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#A4C639] text-white px-8 py-4 font-semibold">
              ARRANGE A FREE HOME VISIT
            </button>
            <button className="border-2 border-[#A4C639] text-[#A4C639] px-8 py-4 font-semibold">
              GET A FREE QUOTE
            </button>
          </div>
         
          <div className="mt-8">
            <ReviewCards />
          </div>
        </div>
      </div>

      <div 
        className="hidden lg:block absolute right-0 top-0 w-1/2 h-full"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
    </div>
  );
};

export default Hero;