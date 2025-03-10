import { Check, Star, ArrowRight, PanelTopOpen, Ruler, PlayCircle } from 'lucide-react';
import SaleBanner from './SaleBanner';

interface Testimonial {
  name: string;
  rating: number;
  text: string;
}

interface Feature {
  title: string;
  description: string;
}

const Shutters: React.FC = () => {
  const testimonials: Testimonial[] = [
    { 
      name: 'Jennifer H.',
      rating: 5,
      text: 'The plantation shutters transformed our living room. Exceptional quality!'
    },
    { 
      name: 'Robert M.',
      rating: 5,
      text: 'Perfect light control and added great value to our home.'
    },
    { 
      name: 'Catherine L.',
      rating: 5,
      text: 'Beautiful craftsmanship and excellent installation service.'
    }
  ];

  const features: Feature[] = [
    { title: 'Custom Made', description: 'Perfectly fitted to your windows' },
    { title: 'Premium Materials', description: 'High-quality wood & alternatives' },
    { title: 'Light Control', description: 'Adjustable louvres for perfect light' },
    { title: 'Added Value', description: 'Increases property value' },
  ];

  const renderStars = (rating: number): JSX.Element => (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
      ))}
    </div>
  );

  const productFeatures = [
    "Custom-made to fit any window",
    "Available in real wood or composite materials",
    "Multiple louvre sizes available",
    "Moisture-resistant options",
    "Various frame styles and configurations",
    "Full-height, tier-on-tier, or café style options"
  ];

  const products = [
    {
      name: "Plantation Shutters",
      description: "Classic elegance with adjustable louvres",
      image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&auto=format&fit=crop&q=80",
      price: "From $299"
    },
    {
      name: "Café Style Shutters",
      description: "Perfect for street-level privacy",
      image: "https://images.unsplash.com/photo-1632829882891-5047ccc421bc?w=800&auto=format&fit=crop&q=80",
      price: "From $249"
    },
    {
      name: "Tier-on-Tier Shutters",
      description: "Maximum flexibility for light control",
      image: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?w=800&auto=format&fit=crop&q=80",
      price: "From $349"
    }
  ];

  return (
    <div className="min-h-screen">
      <SaleBanner />
      
      {/* Hero Section with Split Design */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-0">
          <div className="p-8 lg:p-16 flex items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 text-gray-900">Interior Shutters</h1>
              <p className="text-lg text-gray-600 mb-8">Transform your windows with our premium shutters. Combining timeless elegance with modern functionality for the perfect balance of light control and privacy.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#A4C639] text-white px-8 py-3 rounded-full font-semibold">
                  Get Free Quote
                </button>
                <div className="flex items-center gap-4">
                  <PlayCircle size={24} className="text-[#A4C639]" />
                  <span className="text-gray-600 font-medium">Watch Style Guide</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&auto=format&fit=crop&q=80" 
              alt="Interior Shutters" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 shadow-sm">
                <div className="w-12 h-12 bg-[#A4C639] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <Check className="text-[#A4C639]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Content Area */}
          <div className="lg:col-span-2 prose max-w-none">
            <h2 className="text-3xl font-bold mb-6">Premium Interior Shutters</h2>
            <p className="text-gray-600 mb-6">
              Our premium shutters offer the perfect blend of style and functionality. 
              Whether you choose classic plantation shutters, café style, or tier-on-tier, 
              each is custom-made to your exact specifications. Available in premium hardwoods 
              or moisture-resistant materials, our shutters are built to last and enhance your home's value.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <PanelTopOpen className="text-[#A4C639] mb-4" size={24} />
                <h3 className="font-semibold mb-2">Style Guide</h3>
                <p className="text-sm text-gray-600 mb-4">Explore different shutter styles and configurations</p>
                <button className="text-[#A4C639] font-medium flex items-center gap-2">
                  View Styles <ArrowRight size={16} />
                </button>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <Ruler className="text-[#A4C639] mb-4" size={24} />
                <h3 className="font-semibold mb-2">Measuring Guide</h3>
                <p className="text-sm text-gray-600 mb-4">Get the perfect fit for your windows</p>
                <button className="text-[#A4C639] font-medium flex items-center gap-2">
                  Watch Guide <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-gray-50 p-8 rounded-xl mt-12">
              <h3 className="text-2xl font-bold mb-6">Customer Reviews</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg">
                    {renderStars(testimonial.rating)}
                    <p className="text-gray-600 my-3 text-sm">{testimonial.text}</p>
                    <p className="font-medium">{testimonial.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#A4C639] text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Ready to Order?</h3>
                <p className="mb-6">Get expert advice on the perfect shutters for your space</p>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 placeholder-white/60"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 placeholder-white/60"
                  />
                  <button type="button" className="w-full bg-white text-[#A4C639] py-2 rounded-full font-semibold">
                    Book Consultation
                  </button>
                </form>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold mb-4">Why Choose Our Shutters</h3>
                <ul className="space-y-3">
                  {[
                    'Made-to-Measure',
                    'Premium Materials',
                    'Expert Installation',
                    'Long-term Warranty'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <Check size={16} className="text-[#A4C639]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Features Section */}
      <div className="px-4">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Features & Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 flex items-center">
                <svg className="w-6 h-6 text-[#A4C639] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Shutter Range</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white shadow">
                <div className="h-64">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#A4C639] font-bold">{product.price}</span>
                    <button className="bg-[#A4C639] text-white px-4 py-2">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Measuring Guide */}
        <div className="bg-gray-50 p-8 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help Measuring?</h2>
            <p className="text-gray-600 mb-6">
              Download our easy-to-follow measuring guide or schedule a free measurement service with our experts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#A4C639] text-white px-6 py-3">
                Download Measuring Guide
              </button>
              <button className="bg-white text-[#A4C639] border-2 border-[#A4C639] px-6 py-3">
                Book Measurement Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shutters;