import React, { useEffect, useState } from 'react';

const supabaseUrl = 'https://whwymlolluhkacslhuru.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // sua chave pública completa
const folderPath = 'galeria/infantil/videos';

function Kids() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const { createClient } = await import('@supabase/supabase-js');
      const supabase = createClient(supabaseUrl, supabaseKey);

      const { data, error } = await supabase
        .storage
        .from('galeria')
        .list(folderPath, {
          limit: 100,
          sortBy: { column: 'name', order: 'asc' },
        });

      if (error) {
        console.error('Erro ao buscar vídeos:', error);
        return;
      }

      const urls = data.map((file) => ({
        name: file.name,
        url: `${supabaseUrl}/storage/v1/object/public/${folderPath}/${file.name}`,
      }));

      setVideos(urls);
    };

    fetchVideos();
  }, []);

  const openFullscreen = (videoUrl) => {
    const videoEl = document.createElement('video');
    videoEl.src = videoUrl;
    videoEl.controls = true;
    videoEl.autoplay = true;
    videoEl.style.position = 'fixed';
    videoEl.style.top = '0';
    videoEl.style.left = '0';
    videoEl.style.width = '100vw';
    videoEl.style.height = '100vh';
    videoEl.style.zIndex = '9999';
    videoEl.style.backgroundColor = 'black';

    videoEl.addEventListener('ended', () => document.body.removeChild(videoEl));
    videoEl.addEventListener('click', () => document.body.removeChild(videoEl));

    document.body.appendChild(videoEl);
    videoEl.requestFullscreen?.();
  };

  return (
    <div className="relative min-h-screen pt-24 px-6 md:px-12 overflow-x-hidden">

      {/* 🖼️ Fundo fixo com opacidade */}
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url(https://www.panetteria.com.br/images/festainfantil.jpg)' }}
      />
      <div className="fixed inset-0 bg-black/60 z-0" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-12">Espaço Infantil<span className="text-pink-400">.</span></h1>

        {videos.length === 0 ? (
          <p className="text-white/70">Nenhum vídeo encontrado.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, idx) => (
              <div key={idx} className="bg-white/20 backdrop-blur-md rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-video relative cursor-pointer" onClick={() => openFullscreen(video.url)}>
                  <video
                    src={video.url}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                    preload="metadata"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-xl font-bold opacity-0 hover:opacity-100 transition-opacity">
                    ▶ Assistir
                  </div>
                </div>
                <div className="p-4 text-white">
                  <p className="text-sm truncate">{video.name}</p>
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
