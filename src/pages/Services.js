// src/pages/Services.js
import React from "react";

function Services() {
  return (
    <section id="services" className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-brand mb-6">
        Services &amp; Sessions
      </h2>
      <div className="space-y-6">
        {/* Example service */}
        <div className="bg-brand-dark bg-opacity-30 p-5 rounded border border-brand-dark hover:bg-opacity-50 transition">
          <h3 className="text-2xl font-semibold text-brand-light">
            Velit leo aliquam
          </h3>
          <p className="text-gray-300 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Another service */}
        <div className="bg-brand-dark bg-opacity-30 p-5 rounded border border-brand-dark hover:bg-opacity-50 transition">
          <h3 className="text-2xl font-semibold text-brand-light">
            Lorem ipsum odor amet
          </h3>
          <p className="text-gray-300 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
