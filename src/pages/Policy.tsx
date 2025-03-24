import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const supabaseUrl = 'https://ezwzjnvasgpzsjgwjesq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6d3pqbnZhc2dwenNqZ3dqZXNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4MjM2MjcsImV4cCI6MjA1ODM5OTYyN30.cSWLb7taf4D6fepe2oKk5oZsNYehoclmerDllQ1P5xw';
const supabase = createClient(supabaseUrl, supabaseKey);

function Policy() {
  const [media, setMedia] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const { data: imageFiles, error: imgError } = await supabase.storage.from('galeria').list('fotos', { limit: 100 });
        if (imgError) throw imgError;

        const { data: videoFiles, error: vidError } = await supabase.storage.from('galeria').list('videos', { limit: 100 });
        if (vidError) throw vidError;

        console.log('Imagens:', imageFiles);
        console.log('Vídeos:', videoFiles);

        const imageUrls = imageFiles.map(file => ({
          type: 'image',
          url: `${supabaseUrl}/storage/v1/object/public/galeria/fotos/${file.name}`
        }));

        const videoUrls = videoFiles.map(file => ({
          type: 'video',
          url: `${supabaseUrl}/storage/v1/object/public/galeria/videos/${file.name}`
        }));

        setMedia([...imageUrls, ...videoUrls]);
      } catch (error) {
        console.error('Erro ao carregar mídia:', error);
      }
    };

    fetchMedia();
  }, []);

  const openModal = (index) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);
  const prevItem = () => setCurrentIndex((i) => (i > 0 ? i - 1 : media.length - 1));
  const nextItem = () => setCurrentIndex((i) => (i < media.length - 1 ? i + 1 : 0));

  return (
    <div className="min-h-screen bg-[#121212] px-6 py-24 text-white">
      <h1 className="text-4xl font-light mb-12">Galeria<span className="text-red-500">.</span></h1>
      {media.length === 0 ? (
        <p className="text-white/60 text-center text-sm mb-12">
          Nenhuma mídia encontrada. Verifique o Supabase ou as permissões.
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {media.map((item, idx) => (
            <div
              key={idx}
              className="cursor-pointer group relative overflow-hidden"
              onClick={() => openModal(idx)}
            >
              {item.type === 'image' ? (
                <img
                  src={item.url}
                  alt="galeria"
                  className="w-full h-48 object-cover rounded-md group-hover:scale-105 transition-transform"
                />
              ) : (
                <video
                  src={item.url}
                  className="w-full h-48 object-cover rounded-md"
                  muted
                  playsInline
                />
              )}
            </div>
          ))}
        </div>
      )}

      {currentIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            className="absolute top-6 right-6 text-white"
            onClick={closeModal}
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-6 text-white"
            onClick={prevItem}
          >
            <ChevronLeft size={32} />
          </button>

          <div className="max-w-4xl w-full px-4">
            {media[currentIndex].type === 'image' ? (
              <img
                src={media[currentIndex].url}
                className="w-full max-h-[80vh] object-contain animate-fade-in"
                alt="media"
              />
            ) : (
              <video
                src={media[currentIndex].url}
                controls
                autoPlay
                className="w-full max-h-[80vh] object-contain animate-fade-in"
              />
            )}
          </div>

          <button
            className="absolute right-6 text-white"
            onClick={nextItem}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
}

export default Policy;
