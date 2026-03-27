import { Instagram, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
              <span className="text-xl font-bold">Decked Out by Dee</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Creating custom accessories and gifts that make every occasion special.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#gallery" className="hover:text-pink-400 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#order-form" className="hover:text-pink-400 transition-colors">
                  Order Now
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <div className="space-y-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-gray-800 group-hover:bg-pink-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <span>Follow on Instagram</span>
              </a>
              <a
                href="mailto:hello@deckedoutbydee.com"
                className="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-gray-800 group-hover:bg-pink-500 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>hello@deckedoutbydee.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Decked Out by Dee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
