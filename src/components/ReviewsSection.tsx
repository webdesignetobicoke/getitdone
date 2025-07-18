import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Jane Smith',
    platform: 'Google',
    rating: 5,
    text: 'Amazing cleaning service! My carpets look brand new. Highly recommend Get It Done Cleaning.',
    location: 'Toronto, ON',
  },
  {
    name: 'Mike Johnson',
    platform: 'Yelp',
    rating: 5,
    text: 'Prompt, professional, and very thorough. Will use again for my office cleaning needs.',
    location: 'Mississauga, ON',
  },
  {
    name: 'Emily Chen',
    platform: 'Trustpilot',
    rating: 4,
    text: 'Great value and friendly staff. Booking was easy and the results were fantastic.',
    location: 'Hamilton, ON',
  },
  {
    name: 'Carlos Rivera',
    platform: 'Google',
    rating: 5,
    text: 'The team was on time and did a wonderful job. My home feels so much fresher!',
    location: 'Brampton, ON',
  },
  {
    name: 'Samantha Lee',
    platform: 'Yelp',
    rating: 5,
    text: 'Best cleaning company I have ever used. Highly recommend to anyone!',
    location: 'Oakville, ON',
  },
  {
    name: 'Raj Patel',
    platform: 'Trustpilot',
    rating: 5,
    text: 'Very professional and efficient. Will definitely book again.',
    location: 'Etobicoke, ON',
  },
];

const platformColors: Record<string, string> = {
  Google: 'bg-[#4285F4] text-white',
  Yelp: 'bg-[#D32323] text-white',
  Trustpilot: 'bg-[#00B67A] text-white',
};

const ReviewsSection = () => (
  <section className="w-full py-16 bg-[#FFFBEA]">
    <div className="max-w-5xl mx-auto px-4">
      <div className="mb-10 text-center">
        <div className="inline-block px-4 py-1 mb-4 bg-yellow-200 rounded font-bold text-xs tracking-widest uppercase">Get It Done Cleaning</div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-black">What Our Clients Say</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">Read what clients are saying about Get It Done Cleaning’s exceptional service and reliability.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, idx) => (
          <div key={idx} className={`bg-white border border-gray-300 p-6 flex flex-col justify-between h-full shadow-sm ${idx === 1 ? 'border-2 border-yellow-400' : ''}`}>
            <div className="flex items-center gap-3 mb-2">
              <div className={`px-3 py-1 rounded font-bold text-xs ${platformColors[review.platform]}`}>{review.platform}</div>
              <span className="font-semibold text-black">{review.name}</span>
            </div>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className={i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} />
              ))}
            </div>
            <div className="text-gray-800 text-sm mb-4 flex-1">{review.text}</div>
            <div className="flex justify-end">
              <span className="bg-yellow-200 text-black text-xs font-bold px-3 py-1 rounded">{review.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection; 