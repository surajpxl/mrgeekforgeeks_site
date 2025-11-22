import React, { useState } from "react";

const Contact = () => {
  const [toast, setToast] = useState(false);

  const showToast = () => {
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 relative" 
    >
    
      {toast && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg animate-slide-in z-50">
          Message sent successfully!
        </div>
      )}

      <div className="w-[80%] max-w-4xl mx-auto bg-gray-800 rounded-2xl shadow-lg p-8 md:p-16 text-gray-200">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8 text-center">
          Contact Us
        </h2>

        {/* Hidden iframe to avoid redirect */}
        <iframe name="hiddenFrame" style={{ display: "none" }}></iframe>

        <form
          action="https://formsubmit.co/contact@mrgeekforgeeks.com"
          method="POST"
          target="hiddenFrame"
          onSubmit={showToast}
          className="space-y-6"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 
              focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600
              focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600
            focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600
            focus:outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>

          <button
            type="submit"
            className="w-full md:w-auto bg-cyan-400 hover:bg-cyan-500 
            text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300 text-center md:text-left">
          <div>
            <h3 className="font-semibold text-cyan-400 mb-2">Email</h3>
            <p>contact@mrgeekforgeeks.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-cyan-400 mb-2">Phone</h3>
            <p>+91 888888888</p>
          </div>
          <div>
            <h3 className="font-semibold text-cyan-400 mb-2">Location</h3>
            <p>India</p>
          </div>
        </div>
      </div>

      {/* Toast Animation */}
      <style>
        {`
          .animate-slide-in {
            animation: slide-in 0.4s ease-out forwards;
          }
          @keyframes slide-in {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
