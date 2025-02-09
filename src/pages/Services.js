// src/pages/Services.js
import React from "react";

function Services() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold  mb-6">
        Services &amp; Sessions
      </h2>
      <div className="space-y-6">
        {/* Example service */}
        <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
          <h3 className="text-2xl font-semibold ">Velit leo aliquam</h3>
          <p className="text-gray-300 mt-2">
            Description, session length, pricing, etc.
          </p>
        </div>

        {/* Another service */}
        <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
          <h3 className="text-2xl font-semibold ">Lorem ipsum odor amet</h3>
          <p className="text-gray-300 mt-2">
            Description, disclaimers, experience level, etc.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
