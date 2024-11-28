import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: { target: { name: unknown; value: unknown; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating form submission (replace with your actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Contact Us
        </h1>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-900"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-900"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email address"
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-900"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message here"
                rows="6"
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full mt-2 ${isSubmitting ? 'bg-gray-400' : 'bg-sky-600'} text-white px-4 py-3 rounded-md text-sm font-medium hover:bg-sky-700 transition-colors`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
