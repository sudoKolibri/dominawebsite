// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-black shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Brand / Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-brand hover:opacity-90 transition-opacity"
        >
          Insert Name Here
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6">
          {[
            { to: "/", label: "Home" },
            { to: "/services", label: "Services" },
            { to: "/about", label: "About" },
            { to: "/gallery", label: "Gallery" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-gray-300 hover:text-brand transition-colors hover:scale-105 inline-block"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
