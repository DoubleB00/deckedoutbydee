import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function OrderForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    orderType: '',
    customDetails: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('order_requests').insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          order_type: formData.orderType,
          custom_details: formData.customDetails,
        },
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        orderType: '',
        customDetails: '',
      });
    } catch (error) {
      console.error('Error submitting order:', error);
      setSubmitStatus('error');
      setErrorMessage('There was an error submitting your order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="order-form" className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Start Your Custom Order
          </h2>
          <p className="text-lg text-gray-600">
            Tell us about your vision and we'll bring it to life
          </p>
        </div>

        {submitStatus === 'success' && (
          <div className="mb-8 bg-green-50 border border-green-200 rounded-2xl p-6 flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-green-900 mb-1">Order Request Submitted!</h3>
              <p className="text-green-700">
                Thank you! We'll review your request and text you within 24 hours to discuss your custom creation.
              </p>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-8 bg-red-50 border border-red-200 rounded-2xl p-6 flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-900 mb-1">Oops! Something went wrong</h3>
              <p className="text-red-700">{errorMessage}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-pink-50 to-beige-50 rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100">
          <div className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                placeholder="Jane Smith"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                placeholder="jane@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number *
                <span className="text-xs font-normal text-gray-500 ml-2">
                  (we'll text you to confirm your order)
                </span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="orderType" className="block text-sm font-semibold text-gray-700 mb-2">
                What are you looking for? *
              </label>
              <select
                id="orderType"
                name="orderType"
                required
                value={formData.orderType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all bg-white"
              >
                <option value="">Select an option</option>
                <option value="Stadium Bag">Stadium Bag</option>
                <option value="Gift">Gift</option>
                <option value="Event">Event</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="customDetails" className="block text-sm font-semibold text-gray-700 mb-2">
                Custom Details *
              </label>
              <textarea
                id="customDetails"
                name="customDetails"
                required
                value={formData.customDetails}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all resize-none"
                placeholder="Tell us about your vision... What colors do you like? Any specific designs or themes? When do you need it by?"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-pink-500 to-pink-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Submitting...
                </>
              ) : (
                <>
                  Submit Order Request
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
