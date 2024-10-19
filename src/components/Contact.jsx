import React, { forwardRef, useState } from 'react';

const Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    alert('Thanks for reaching out! We\'ll get back to you faster than you can say "artificial intelligence"!');
  };

  return (
    <section ref={ref} id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Get in Touch... Technically</h2>
        <p className="text-xl mb-12 text-center text-gray-700 max-w-3xl mx-auto">
          Ready to make your business technically awesome? Drop us a line, or maybe even a joke! We're here to answer your questions, brainstorm ideas, or enjoy a good laugh.
        </p>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name (or your favorite AI's name)</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              placeholder="John Doe (or ChatGPT, we don't judge)"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email (no spam, we promise)</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              placeholder="you@example.com (or you@skynet.com)"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message (tech jokes welcome)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              placeholder="Tell us about your project, or your best tech pun!"
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
              Send It (to the Cloud)!
            </button>
          </div>
        </form>
      </div>
    </section>
  );
});

export default Contact;