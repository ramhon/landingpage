import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import ReactPlayer from 'react-player';

const supabaseUrl = 'https://whwymlolluhkacslhuru.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indod3ltbG9sbHVoa2Fjc2xodXJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwMTc1MTUsImV4cCI6MjA1ODU5MzUxNX0.soa4alBf9SOXQ2qxuXfYa2evlDIPbUOfUy9AGgZ3rPI';
const supabase = createClient(supabaseUrl, supabaseKey);

function Kids() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const { data, error } = await supabase.storage
        .from('galeria')
        .list('infantil/videos', {
          limit: 100,
          sortBy: { column: 'name', order: 'asc' }
        });

      if (error) {
        console.error('Erro ao carregar vídeos:', error);
        return;
      }

      const videoUrls = data.map(file => ({
        title: file.name.split('.')[0].replace(/_/g, ' '),
        description: '',
        url: `${supabaseUrl}/storage/v1/object/public/galeria/infantil/videos/${file.name}`
      }));

      setVideos(videoUrls);
    };

    fetchVideos();
  }, []);

  return (
    <div className="min-h-screen pt-24 px-6 md:px-12 bg-gradient-to-b from-purple-100 to-pink-100">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-light text-purple-800 mb-12">
          Espaço Infantil<span className="text-pink-500">.</span>
        </h1>

        {videos.length === 0 ? (
          <p className="text-center text-purple-600">Nenhum vídeo encontrado ou ainda carregando...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-video">
                  <ReactPlayer
                    url={video.url}
                    width="100%"
                    height="100%"
                    controls
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-purple-800 mb-2">{video.title}</h3>
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
