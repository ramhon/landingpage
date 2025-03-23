import React, { useState } from 'react';
import { Play } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Modern Architecture Design',
    description: 'Contemporary architectural solutions for urban living',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Sustainable Living Spaces',
    description: 'Eco-friendly residential developments',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Urban Planning Innovation',
    description: 'Smart city solutions for tomorrow',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop'
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <div className="min-h-screen pt-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light mb-12">
          Nossos Projetos<span className="text-red-500">.</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
              />
              
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-xl font-light mb-2">{project.title}</h3>
                  <p className="text-sm text-white/70 mb-4">{project.description}</p>
                  <button className="px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors">
                    Saiba Mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;