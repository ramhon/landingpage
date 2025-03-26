import React from 'react';
import ReactPlayer from 'react-player';

const videos = [
  {
    id: 1,
    title: 'Aprendendo Cores',
    description: 'Uma aventura colorida para crianças',
    url: 'https://drive.google.com/file/d/1-jsl7CDvLxCYghHMpzKxB6W8UHaREQL_/view?t=3'
  },
  {
    id: 2,
    title: 'Números Divertidos',
    description: 'Matemática básica de forma lúdica',
    url: 'https://www.youtube.com/watch?v=example2'
  },
  {
    id: 3,
    title: 'Animais da Fazenda',
    description: 'Conhecendo os animais e seus sons',
    url: 'https://www.youtube.com/watch?v=example3'
  },
  {
    id: 4,
    title: 'Música e Movimento',
    description: 'Dança e expressão corporal',
    url: 'https://www.youtube.com/watch?v=example4'
  }
];

function Kids() {
  return (
    <div className="min-h-screen pt-24 px-6 md:px-12 bg-gradient-to-b from-purple-100 to-pink-100">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-light text-purple-800 mb-12">
          Espaço Infantil<span className="text-pink-500">.</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div 
              key={video.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="aspect-video relative">
                <ReactPlayer
                  url={video.url}
                  width="100%"
                  height="100%"
                  light={true}
                  controls={true}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-purple-800 mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Kids;
