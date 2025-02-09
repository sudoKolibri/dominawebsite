// src/pages/Gallery.js
import React from "react";

function Gallery() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-brand mb-8">
        Gallery
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Example image */}
        <div className="relative bg-brand-dark bg-opacity-30 p-2 rounded group">
          <img
            src="/images/gallery1.jpg"
            alt="Gallery 1"
            className="w-full h-auto rounded transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        {/* Repeat for other images */}
        <div className="relative bg-brand-dark bg-opacity-30 p-2 rounded group">
          <img
            src="/images/gallery2.jpg"
            alt="Gallery 2"
            className="w-full h-auto rounded transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="relative bg-brand-dark bg-opacity-30 p-2 rounded group">
          <img
            src="/images/gallery3.jpg"
            alt="Gallery 3"
            className="w-full h-auto rounded transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
