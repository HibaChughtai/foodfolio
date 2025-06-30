// Hero.js
import React from "react";

function Hero() {
  return (
    <section className="text-center py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg')" }}>
      <h2 className="text-white text-5xl font-bold mb-4">A Taste of Pakistan</h2>
      <p className="text-white text-xl mb-6">Delicious food meets digital creativity</p>
      <a href="#projects" className="bg-yellow-500 text-black px-6 py-2 rounded font-semibold">Check Out My Work</a>
    </section>
  );
}

export default Hero;