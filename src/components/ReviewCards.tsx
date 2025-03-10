import { Star } from 'lucide-react';

const ReviewCards = () => {
  const reviews = [
    {
      platform: 'Yelp',
      rating: 5,
      totalRating: 5,
      logo: '/logos/yelp-logo.png',
      starColor: 'text-red-500',
      linkColor: 'text-red-600 hover:text-red-700',
    },
    {
      platform: 'Google',
      rating: 4.9,
      totalRating: 5,
      logo: '/logos/Google__G__logo.svg.png',
      starColor: 'text-yellow-400',
      linkColor: 'text-blue-600 hover:text-blue-700',
    },
    {
      platform: 'Facebook',
      rating: 5,
      totalRating: 5,
      logo: '/logos/facebook-logo.png',
      starColor: 'text-blue-500',
      linkColor: 'text-blue-600 hover:text-blue-700',
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {reviews.map((review) => (
        <div key={review.platform} className="bg-white rounded-lg p-4 md:p-3 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col items-center">
            <img
              src={review.logo}
              alt={`${review.platform} logo`}
              className="h-6 md:h-5 mb-2"
            />
            <div className="flex items-center mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 md:w-3 md:h-3 fill-current ${review.starColor}`}
                />
              ))}
            </div>
            <p className="text-lg md:text-base font-bold text-gray-800 mb-2">
              {review.rating}/{review.totalRating}
            </p>
            <a
              href="#"
              className={`text-xs md:text-[10px] font-medium ${review.linkColor}`}
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewCards;