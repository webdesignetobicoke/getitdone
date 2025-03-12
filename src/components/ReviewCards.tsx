import { Star } from 'lucide-react';

const ReviewCards = () => {
  const reviews = [
    {
      platform: 'Google',
      rating: 4.8,
      totalRating: 5,
      starColor: 'text-yellow-400',
      linkColor: 'text-primary hover:text-secondary',
      logo: '/logos/Google__G__logo.svg.png'
    },
    {
      platform: 'Facebook',
      rating: 4.9,
      totalRating: 5,
      starColor: 'text-yellow-400',
      linkColor: 'text-primary hover:text-secondary',
      logo: '/logos/facebook-logo.png'
    },
    {
      platform: 'Yelp',
      rating: 4.7,
      totalRating: 5,
      starColor: 'text-yellow-400',
      linkColor: 'text-primary hover:text-secondary',
      logo: '/logos/yelp-logo.png'
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {reviews.map((review) => (
        <div key={review.platform} className="bg-white p-4 md:p-3 shadow-sm hover:shadow-md transition-shadow">
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