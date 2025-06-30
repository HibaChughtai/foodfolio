// Testimonials.js
import React from "react";

function Testimonials() {
  const reviews = [
    { text: "Hiba brought our restaurant website to life — we loved her creativity!", client: "Lahori BBQ" },
    { text: "The site is spicy, just like our food. Loved the experience!", client: "Karachi Khaas" },
    { text: "Smooth, tasty and full of flavor. Just like our biryani.", client: "Biryani Master" }
  ];

  return (
    <section id="testimonials" className="bg-black text-white px-6 py-16">
      <h3 className="text-3xl font-bold text-center mb-10">Love for Hiba</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded shadow-md">
            <p className="mb-4">“{r.text}”</p>
            <p className="font-semibold">— {r.client}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;