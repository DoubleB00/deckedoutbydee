import { Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: 'Sarah M.',
      text: 'Absolutely love my custom stadium bag! Perfect for game days and the personalization is stunning. Dee was so easy to work with!',
      rating: 5,
    },
    {
      name: 'Jennifer K.',
      text: 'Ordered custom gifts for my bridesmaids and they were PERFECT! The quality exceeded my expectations. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Ashley R.',
      text: 'The attention to detail is amazing. My event decorations were exactly what I envisioned. Will definitely order again!',
      rating: 5,
    },
    {
      name: 'Michelle L.',
      text: 'Fast turnaround and beautiful work! The custom bag I ordered got so many compliments. Thank you Dee!',
      rating: 5,
    },
    {
      name: 'Katie B.',
      text: 'Best custom gifts ever! Dee is so talented and really listens to what you want. The final product is always beyond expectations.',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Loved by our customers 💕
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what others are saying about their custom creations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-gold-400 fill-gold-400"
                  />
                ))}
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed italic">
                "{review.text}"
              </p>

              <p className="font-semibold text-gray-900">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
