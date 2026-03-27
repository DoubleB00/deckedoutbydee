import { Heart } from 'lucide-react';

export default function Header() {
  const scrollToOrder = () => {
    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">
              Decked Out by Dee
            </span>
          </div>

          <button
            onClick={scrollToOrder}
            className="bg-gradient-to-r from-pink-500 to-pink-400 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Order Now
          </button>
        </div>
      </div>
    </header>
  );
}
