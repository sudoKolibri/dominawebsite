// src/pages/Home.js
import React from "react";

function Home() {
  return (
    <section className="bg-gradient-to-br from-black via-brand-dark to-black text-center py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-brand mb-4">
          Velit leo aliquam, auctor blandit torquent turpis.
        </h1>
        <p className="mt-4 text-xl text-gray-300 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit leo
          aliquam, auctor blandit torquent turpis
        </p>
        <a
          href="#services"
          className="inline-block bg-brand hover:bg-brand-light transition-colors text-white font-semibold px-6 py-3 rounded"
        >
          Lorem ipsum
        </a>
      </div>
    </section>
  );
}

export default Home;
