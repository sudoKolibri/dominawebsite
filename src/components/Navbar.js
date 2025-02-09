// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <Link to="/" className="text-xl font-bold ">
          Insert Name here
        </Link>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link
            to="/"
            className="text-gray-300 hover:text-red-500 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-gray-300 hover:text-red-500 transition-colors"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="text-gray-300 hover:text-red-500 transition-colors"
          >
            About
          </Link>
          <Link
            to="/gallery"
            className="text-gray-300 hover:text-red-500 transition-colors"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 hover:text-red-500 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
