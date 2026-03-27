import { ShoppingBag, Gift, Sparkles } from 'lucide-react';

export default function FeaturedProducts() {
  const scrollToOrder = () => {
    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      icon: ShoppingBag,
      title: 'Custom Stadium Bags',
      description: 'Clear, stylish bags perfect for games, concerts, and events. Personalized with your choice of colors, monograms, and designs.',
      gradient: 'from-pink-500 to-pink-400',
    },
    {
      icon: Gift,
      title: 'Personalized Gifts',
      description: 'Thoughtful, one-of-a-kind gifts for any occasion. From birthdays to holidays, create something truly special.',
      gradient: 'from-beige-400 to-beige-300',
    },
    {
      icon: Sparkles,
      title: 'Event Creations',
      description: 'Custom accessories and decor for weddings, parties, and special celebrations. Make your event unforgettable.',
      gradient: 'from-gold-400 to-gold-300',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What We Create
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each item is handcrafted with love and attention to detail
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-pink-200"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${product.gradient} mb-6`}>
                <product.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {product.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>

              <button
                onClick={scrollToOrder}
                className="w-full bg-gradient-to-r from-pink-500 to-pink-400 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
