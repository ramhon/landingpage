import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { X } from 'lucide-react';

const supabaseUrl = 'https://whwymlolluhkacslhuru.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indod3ltbG9sbHVoa2Fjc2xodXJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwMTc1MTUsImV4cCI6MjA1ODU5MzUxNX0.soa4alBf9SOXQ2qxuXfYa2evlDIPbUOfUy9AGgZ3rPI';
const supabase = createClient(supabaseUrl, supabaseKey);

function Kids() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const { data, error } = await supabase.storage.from('galeria').list('infantil/videos', {
        limit: 100,
        sortBy: { column: 'name', order: 'asc' }
      });

      if (error) {
        console.error('Erro ao carregar vídeos:', error);
        return;
      }

      const videoUrls = data.map(file => {
        const name = file.name.split('.')[0];
        return {
          title: name.replace(/_/g, ' '),
          videoUrl: `${supabaseUrl}/storage/v1/object/public/galeria/infantil/videos/${file.name}`,
          thumbUrl: `${supabaseUrl}/storage/v1/object/public/galeria/infantil/capa/${name}.png`
        };
      });

      setVideos(videoUrls);
    };

    fetchVideos();
  }, []);

  const openFullscreen = (e, url) => {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.zIndex = 9999;
    overlay.style.backgroundColor = 'black';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';

    const video = document.createElement('video');
    video.src = url;
    video.controls = true;
    video.autoplay = true;
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.maxWidth = '100vw';
    video.style.maxHeight = '100vh';
    video.style.objectFit = 'contain';

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '✕';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '80px';
    closeBtn.style.left = '50%';
    closeBtn.style.transform = 'translateX(-50%)';
    closeBtn.style.zIndex = 10000;
    closeBtn.style.background = 'transparent';
    closeBtn.style.border = 'none';
    closeBtn.style.color = 'white';
    closeBtn.style.fontSize = '3rem';
    closeBtn.style.cursor = 'pointer';

    closeBtn.addEventListener('click', () => {
      document.body.removeChild(overlay);
    });

    video.addEventListener('ended', () => {
      document.body.removeChild(overlay);
    });

    overlay.appendChild(video);
    overlay.appendChild(closeBtn);
    document.body.appendChild(overlay);
  };

  return (
    <div
      className="min-h-screen pt-24 px-6 md:px-12 relative"
      style={{
        backgroundImage: 'url(https://www.panetteria.com.br/images/festainfantil.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="fixed inset-0 bg-black/60 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-12">
          Espaço Infantil<span className="text-pink-400">.</span>
        </h1>

        {videos.length === 0 ? (
          <p className="text-center text-white/70">Nenhum vídeo encontrado.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, idx) => (
              <div key={idx} className="bg-white/20 backdrop-blur-md rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-video relative cursor-pointer" onClick={(e) => openFullscreen(e, video.videoUrl)}>
                  <img
                    src={video.thumbUrl}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-4 text-white">
                  <p className="text-sm truncate">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Kids;
