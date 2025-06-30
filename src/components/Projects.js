// Projects.js
import React from "react";

function Projects() {
  const projects = [
    {
      name: "Biryani Junction",
      description: "A complete food ordering app with spicy theme.",
      imageUrl: "https://cdn.pixabay.com/photo/2020/01/07/16/29/rice-4746172_960_720.jpg"
    },
    {
      name: "Tandoori Tales",
      description: "Showcasing rich Pakistani tandoori dishes.",
      imageUrl: "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg"
    },
    {
      name: "Desi Diner",
      description: "Landing page for desi snacks and recipes.",
      imageUrl: "https://cdn.pixabay.com/photo/2018/01/20/20/40/samosa-3090085_960_720.jpg"
    },
  ];

  return (
    <section id="projects" className="px-6 py-16 bg-gray-100">
      <h3 className="text-3xl font-bold text-center mb-10">Flavors of Pakistan</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-md">
            <img src={project.imageUrl} alt={project.name} className="rounded mb-4" />
            <h4 className="text-xl font-semibold mb-2">{project.name}</h4>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
