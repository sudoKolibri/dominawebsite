// src/components/Footer.js
import React from "react";

function Footer() {
  return (
    <footer className="bg-black py-6 border-t border-gray-700">
      <div className="container mx-auto text-center text-gray-400">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Insert Name Here. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
