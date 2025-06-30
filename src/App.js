import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero
        title="Crafting Delicious Code"
        subtitle="I'm Hiba, a passionate developer turning food dreams into digital magic."
        buttonText="Explore My Projects"
        imageUrl="https://cdn.pixabay.com/photo/2017/05/07/08/56/cooking-2292485_960_720.jpg"
      />
      <About
        heading="Why Foodfolio?"
        description="Combining tech with taste to create stunning, user-friendly food websites."
        imageUrl="https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg"
      />
      <Projects
        heading="Featured Projects"
        projects={[
          {
            name: "Pizza Paradise",
            description: "A modern pizza delivery site with animated UI and cart system.",
            imageUrl: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg"
          },
          {
            name: "Burger Bliss",
            description: "A responsive burger site with custom CMS integration.",
            imageUrl: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg"
          },
          {
            name: "Crispy Fries Hub",
            description: "Landing page for a fries brand with testimonials and animations.",
            imageUrl: "https://cdn.pixabay.com/photo/2016/03/05/20/07/french-fries-1238249_960_720.jpg"
          }
        ]}
      />
      <Testimonials
        heading="What Clients Say"
        testimonials={[
          {
            text: "Working with Hiba was a treat! She brought our burger brand to life online!",
            client: "Client A"
          },
          {
            text: "Clean code, spicy design — Hiba delivered more than we expected!",
            client: "Client B"
          }
        ]}
      />
      <Contact
        heading="Get in Touch"
        message="Have a food project or idea in mind? Let's cook it together!"
        contactLink="https://wa.me/923001234567"
      />
      <Footer text="© 2025 Hiba Irfan — Foodfolio 🍕 All rights reserved." />
    </>
  );
}

export default App;
