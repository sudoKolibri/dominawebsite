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
      <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-6">
        Contact Me
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block mb-2 text-gray-200" htmlFor="name">
            Name
          </label>
          <input
            className="w-full p-3 rounded bg-opacity-40 border border-sky-800 text-gray-100 placeholder-gray-400"
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
            className="w-full p-3 rounded bg-opacity-40 border border-sky-800 text-gray-100 placeholder-gray-400"
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
            className="w-full p-3 rounded bg-opacity-40 border border-sky-800 text-gray-100 placeholder-gray-400"
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
          className="bg-red-600 hover:bg-red-500 transition-colors text-white font-bold py-2 px-4 rounded"
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
