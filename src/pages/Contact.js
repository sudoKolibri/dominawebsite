// src/pages/Contact.js
import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 px-4 max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-brand mb-6">
        Contact Me
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block mb-2 text-gray-200" htmlFor="name">
            Name
          </label>
          <input
            className="w-full p-3 rounded bg-brand-dark bg-opacity-30 border border-brand-dark text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-light"
            type="text"
            id="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            required
          />
        </div>
        {/* Email */}
        <div>
          <label className="block mb-2 text-gray-200" htmlFor="email">
            Email
          </label>
          <input
            className="w-full p-3 rounded bg-brand-dark bg-opacity-30 border border-brand-dark text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-light"
            type="email"
            id="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            required
          />
        </div>
        {/* Message */}
        <div>
          <label className="block mb-2 text-gray-200" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full p-3 rounded bg-brand-dark bg-opacity-30 border border-brand-dark text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-light"
            id="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, message: e.target.value }))
            }
            required
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="bg-brand hover:bg-brand-light transition-colors text-white font-bold py-2 px-4 rounded"
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
