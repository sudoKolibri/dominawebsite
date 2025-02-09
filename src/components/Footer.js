// src/components/Footer.js
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 py-4">
      <div className="container mx-auto text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Inser name here. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
