// About.js
import React from "react";

function About() {
  return (
    <section className="flex flex-col md:flex-row items-center px-6 py-16 bg-white">
      <div className="md:w-1/2">
        <img src="https://cdn.pixabay.com/photo/2017/06/02/18/24/pakistani-food-2362957_960_720.jpg" alt="Pakistani food" className="rounded shadow-md" />
      </div>
      <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
        <h3 className="text-3xl font-bold text-red-700 mb-4">Why Foodfolio?</h3>
        <p className="text-gray-700 text-lg">From spicy biryanis to juicy burgers — I design digital flavors that reflect authentic Pakistani cuisine and branding that stands out.</p>
      </div>
    </section>
  );
}

export default About;