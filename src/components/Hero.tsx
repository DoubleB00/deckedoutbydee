import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToOrder = () => {
    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-br from-pink-50 via-white to-beige-50 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-100/40 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Custom Creations for Every Occasion{' '}
              <span className="inline-block">💕</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Personalized gifts, stadium bags, and accessories made just for you
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToOrder}
                className="group bg-gradient-to-r from-pink-500 to-pink-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Start Your Order
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToGallery}
                className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-pink-200 hover:border-pink-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                View Examples
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-3xl p-6 h-48 flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="text-4xl mb-2">👜</div>
                    <p className="font-semibold text-gray-700">Stadium Bags</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-beige-100 to-beige-50 rounded-3xl p-6 h-64 flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🎁</div>
                    <p className="font-semibold text-gray-700">Custom Gifts</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-gradient-to-br from-gold-100 to-gold-50 rounded-3xl p-6 h-64 flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="text-4xl mb-2">✨</div>
                    <p className="font-semibold text-gray-700">Event Items</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-3xl p-6 h-48 flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🎨</div>
                    <p className="font-semibold text-gray-700">Personalized</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
