import { Truck, Package } from 'lucide-react';

export default function DeliveryInfo() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-beige-50 to-pink-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Delivery Options
          </h2>
          <p className="text-lg text-gray-600">
            We make it easy to get your custom creations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-pink-500 to-pink-400 mb-6">
              <Truck className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Free Local Delivery
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Enjoy complimentary delivery for all orders within our local area. We'll coordinate a convenient time to bring your custom creation right to your door.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-gold-400 to-gold-300 mb-6">
              <Package className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Shipping Available
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Need your items shipped? We carefully package and ship nationwide. Shipping costs are calculated based on your location and order size.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
