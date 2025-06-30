// Navbar.js
import React from "react";

function Navbar() {
  return (
    <nav className="bg-white px-6 py-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold text-red-600">Hiba's Foodfolio</h1>
      <ul className="flex space-x-6 text-gray-700">
        <li><a href="#projects">Projects</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
