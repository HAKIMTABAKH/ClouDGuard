import React, { useState } from 'react';

const GetStarted = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Your details have been submitted!');
      setFormData({
        name: '',
        email: '',
        company: '',
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Get Started with a Free Security Assessment
        </h1>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
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
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
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
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-lg font-medium text-gray-900"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full mt-2 ${isSubmitting ? 'bg-gray-400' : 'bg-sky-600'} text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-sky-700`}
            >
              {isSubmitting ? 'Submitting...' : 'Get Started'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
