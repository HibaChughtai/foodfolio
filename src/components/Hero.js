import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[90vh] flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/pizza-bg.jpg')" }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-xl text-center max-w-xl">
        <h2 className="text-lg text-orange-300 font-semibold tracking-widest uppercase">
          Love At First Bite
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold my-4 leading-tight">
          Your Belly Knows Best
        </h1>
        <p className="text-xl mb-6 font-medium">
          Welcome to Sizzle & Slice – A Multinational Food Chain
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold">
            Order
          </button>
          <button className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-full font-semibold">
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
