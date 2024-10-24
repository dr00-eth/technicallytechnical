import React, { forwardRef, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Swal from 'sweetalert2';

const Contact = forwardRef((props, ref) => {
  const [state, handleSubmit] = useForm("xjkvklre");

  useEffect(() => {
    if (state.succeeded) {
      Swal.fire({
        title: 'Success!',
        text: "Thanks for reaching out! We'll get back to you faster than you can say 'artificial intelligence'!",
        icon: 'success',
        confirmButtonText: 'Cool'
      });
    }
  }, [state.succeeded]);

  return (
    <section ref={ref} id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Get in Touch... Technically</h2>
        <p className="text-xl mb-12 text-center text-gray-700 max-w-3xl mx-auto">
          Ready to make your business technically awesome? Drop us a line, or maybe even a joke! We're here to answer your questions, brainstorm ideas, or enjoy a good laugh.
        </p>
        {state.succeeded ? (
          <div className="text-center">
            <svg
              className="w-16 h-16 mx-auto mb-4 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '64px', height: '64px' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m0 0a9 9 0 11-6.32 2.906L9 12l2 2 4-4z"
              ></path>
            </svg>
            <p className="text-xl text-gray-700">Your message has been received!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name (or your favorite AI's name)</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                placeholder="John Doe (or ChatGPT, we don't judge)"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email (no spam, we promise)</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                placeholder="you@example.com (or you@skynet.com)"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message (tech jokes welcome)</label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                placeholder="Tell us about your project, or your best tech pun!"
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <div className="text-center">
              <button type="submit" disabled={state.submitting} className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                Send It (to the Cloud)!
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
});

export default Contact;
