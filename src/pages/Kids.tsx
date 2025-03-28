import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

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
    const video = document.createElement('video');
    video.src = url;
    video.controls = true;
    video.autoplay = true;
    video.style.position = 'fixed';
    video.style.top = 0;
    video.style.left = 0;
    video.style.width = '100vw';
    video.style.height = '100vh';
    video.style.zIndex = 9999;
    video.style.backgroundColor = 'black';

    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '10px';
    closeBtn.style.right = '10px';
    closeBtn.style.zIndex = 10000;
    closeBtn.style.fontSize = '24px';
    closeBtn.style.color = 'white';
    closeBtn.style.background = 'transparent';
    closeBtn.style.border = 'none';
    closeBtn.style.cursor = 'pointer';

    closeBtn.addEventListener('click', () => {
      if (document.fullscreenElement) document.exitFullscreen();
      document.body.removeChild(video);
      document.body.removeChild(closeBtn);
    });

    video.addEventListener('ended', () => {
      if (document.fullscreenElement) document.exitFullscreen();
      document.body.removeChild(video);
      document.body.removeChild(closeBtn);
    });

    document.body.appendChild(video);
    document.body.appendChild(closeBtn);
    video.requestFullscreen?.();
  };

  return (
    <div
      className="min-h-screen pt-24 px-6 md:px-12 relative"
      style={{
        backgroundImage: 'url(https://www.panetteria.com.br/images/festainfantil.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
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
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-lg font-bold opacity-0 hover:opacity-100 transition">
                    ▶ Assistir
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
