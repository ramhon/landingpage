import React, { useState } from 'react';
import { Play } from 'lucide-react';

const categories = ['Todos', 'Educacional', 'Entretenimento', 'Documentários', 'Tutoriais'];

const videos = [
  {
    id: 1,
    title: 'Design Thinking Process',
    category: 'Educacional',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Creative Workflow',
    category: 'Tutoriais',
    thumbnail: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2940&auto=format&fit=crop'
  },
  // Add more videos as needed
];

function Videos() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredVideos = selectedCategory === 'Todos'
    ? videos
    : videos.filter(video => video.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light mb-12">
          Galeria de Vídeos<span className="text-red-500">.</span>
        </h1>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full border-2 transition-colors ${
                selectedCategory === category
                  ? 'border-red-500 text-red-500'
                  : 'border-white/20 text-white/70 hover:border-white hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredVideos.map((video) => (
            <div 
              key={video.id}
              className="break-inside-avoid-column group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-auto"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Play className="w-16 h-16 text-white" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-xl font-light">{video.title}</h3>
                <p className="text-sm text-white/70">{video.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Videos;