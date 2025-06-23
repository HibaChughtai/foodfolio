import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-red-600">Foodies</h1>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li className="hover:text-red-600 cursor-pointer">Home</li>
        <li className="hover:text-red-600 cursor-pointer">Menu</li>
        <li className="hover:text-red-600 cursor-pointer">About</li>
        <li className="hover:text-red-600 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
