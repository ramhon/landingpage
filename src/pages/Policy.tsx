import React, { useEffect, useState, useRef, useCallback } from 'react';
import { createClient } from '@supabase/supabase-js';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const supabaseUrl = 'https://whwymlolluhkacslhuru.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indod3ltbG9sbHVoa2Fjc2xodXJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwMTc1MTUsImV4cCI6MjA1ODU5MzUxNX0.soa4alBf9SOXQ2qxuXfYa2evlDIPbUOfUy9AGgZ3rPI';
const supabase = createClient(supabaseUrl, supabaseKey);

function Policy() {
  const [media, setMedia] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const loader = useRef(null);
  const modalRef = useRef(null);

  const fetchMedia = useCallback(async () => {
    const pageSize = 12;
    const offset = page * pageSize;

    const { data: fotos, error } = await supabase.storage.from('galeria').list('politica/fotos', {
      limit: pageSize,
      offset,
      sortBy: { column: 'name', order: 'asc' },
    });

    if (error) {
      console.error('Erro ao buscar imagens:', error);
      setHasMore(false);
      return;
    }

    if (fotos.length === 0) {
      setHasMore(false);
      return;
    }

    const imageUrls = fotos.map(file => ({
      type: 'image',
      url: `${supabaseUrl}/storage/v1/object/public/galeria/politica/fotos/${file.name}`,
    }));

    setMedia(prev => [...prev, ...imageUrls]);
  }, [page]);

  useEffect(() => {
    fetchMedia();
  }, [fetchMedia]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prev => prev + 1);
      }
    }, { threshold: 1 });

    if (loader.current) observer.observe(loader.current);
    return () => loader.current && observer.unobserve(loader.current);
  }, [hasMore]);

  const openModal = (index) => {
    setCurrentIndex(index);
    const elem = document.documentElement;
    if (elem.requestFullscreen) elem.requestFullscreen();
  };
  const closeModal = () => {
    setCurrentIndex(null);
    if (document.fullscreenElement) document.exitFullscreen();
  };
  const prevItem = () => setCurrentIndex((i) => (i > 0 ? i - 1 : media.length - 1));
  const nextItem = () => setCurrentIndex((i) => (i < media.length - 1 ? i + 1 : 0));

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentIndex !== null) {
        if (e.key === 'ArrowLeft') prevItem();
        if (e.key === 'ArrowRight') nextItem();
        if (e.key === 'Escape') closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  useEffect(() => {
    let startX = 0;
    const handleTouchStart = (e) => startX = e.touches[0].clientX;
    const handleTouchEnd = (e) => {
      const endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) nextItem();
      if (endX - startX > 50) prevItem();
    };
    const modal = modalRef.current;
    if (modal) {
      modal.addEventListener('touchstart', handleTouchStart);
      modal.addEventListener('touchend', handleTouchEnd);
    }
    return () => {
      if (modal) {
        modal.removeEventListener('touchstart', handleTouchStart);
        modal.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [currentIndex]);

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
              <img
                src={item.url}
                alt="galeria"
                className="w-full aspect-square object-cover rounded-md scale-90 opacity-0 group-hover:scale-105 transition-transform duration-700 ease-out animate-fade-in"
                style={{ animation: 'zoomIn 0.8s forwards' }}
              />
            </div>
          ))}
        </div>
      )}

      <div ref={loader} className="py-10 text-center text-white/50">
        {hasMore ? 'Carregando mais...' : 'Todas as imagens foram carregadas.'}
      </div>

      {currentIndex !== null && (
        <div ref={modalRef} className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button className="absolute top-6 right-6 text-white" onClick={closeModal}>
            <X size={32} />
          </button>
          <button className="absolute left-6 text-white" onClick={prevItem}>
            <ChevronLeft size={32} />
          </button>
          <div className="max-w-4xl w-full px-4">
            <img
              src={media[currentIndex].url}
              className="w-full max-h-[80vh] object-contain animate-fade-in"
              alt="media"
            />
          </div>
          <button className="absolute right-6 text-white" onClick={nextItem}>
            <ChevronRight size={32} />
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes zoomIn {
          0% {
            transform: scale(0.9);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default Policy;
