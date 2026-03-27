export default function Gallery() {
  const galleryItems = [
    { emoji: '👜', label: 'Custom Stadium Bag', color: 'from-pink-200 to-pink-100' },
    { emoji: '🎀', label: 'Gift Set', color: 'from-beige-200 to-beige-100' },
    { emoji: '💝', label: 'Personalized Box', color: 'from-gold-200 to-gold-100' },
    { emoji: '🛍️', label: 'Tote Bag', color: 'from-pink-200 to-pink-100' },
    { emoji: '🎁', label: 'Birthday Gift', color: 'from-beige-200 to-beige-100' },
    { emoji: '✨', label: 'Event Decor', color: 'from-gold-200 to-gold-100' },
    { emoji: '💐', label: 'Floral Accessories', color: 'from-pink-200 to-pink-100' },
    { emoji: '🎨', label: 'Custom Design', color: 'from-beige-200 to-beige-100' },
  ];

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Creations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse of what we can create for you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} transition-transform duration-300 group-hover:scale-110`}></div>

              <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                <div className="text-6xl sm:text-7xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {item.emoji}
                </div>
                <p className="font-semibold text-gray-700 text-sm sm:text-base">
                  {item.label}
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-pink-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
