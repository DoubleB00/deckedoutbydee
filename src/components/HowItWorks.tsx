import { ClipboardList, Palette, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: ClipboardList,
      number: '01',
      title: 'Submit Your Order Request',
      description: 'Fill out our simple form with your custom item details, preferences, and any reference images.',
    },
    {
      icon: Palette,
      number: '02',
      title: 'We Design Your Custom Item',
      description: 'Our team brings your vision to life with personalized designs tailored to your specifications.',
    },
    {
      icon: CheckCircle,
      number: '03',
      title: 'You Approve + Receive',
      description: 'Review your custom creation, approve the final design, and receive your beautiful item.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-beige-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three simple steps to get your custom creation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-pink-300 to-transparent"></div>
              )}

              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-pink-400 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-5xl font-bold text-pink-100">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
