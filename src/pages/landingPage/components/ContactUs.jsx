import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to backend)
    console.log(formData);
  };

  return (
    <section className="bg-white text-gray-800 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-semibold mb-6">Contact Us</h1>
        <p className="text-lg mb-10">
          We would love to hear from you! If you have any questions, feedback, or need assistance, feel free to reach out.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-4 bg-gray-200 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-4 bg-gray-200 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-4 bg-gray-200 border border-gray-300 rounded-md"
              rows="6"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
