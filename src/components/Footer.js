// src/components/Footer.js
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 text-center">
      <p>&copy; {new Date().getFullYear()} Mistress X. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
