import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Validate form data here (optional)

    try {
      // Example using Formspree
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        throw new Error('Failed to send message.');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>
      {isSubmitted ? (
        <p className="text-green-500 text-center">Thank you for your message!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
