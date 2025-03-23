import React, { useState, useEffect, useRef } from 'react';

function Policy() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const startX = useRef(null);

  const images = [
    "https://images.unsplash.com/photo-1558980664-10ea72d4c5f8",
    "https://images.unsplash.com/photo-1602526218853-b3c5cb43e2a6",
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    "https://images.unsplash.com/photo-1589712235273-5b92e8b84847",
    "https://images.unsplash.com/photo-1549921296-3a6bfb7a9f32",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    "https://images.unsplash.com/photo-1530023367847-a683933f417d",
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    "https://images.unsplash.com/photo-1579546929518-9e396f3cc809"
  ];

  const showModal = currentIndex !== null;

  const goPrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!showModal) return;
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'Escape') setCurrentIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showModal]);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX.current - endX > 50) goNext();
    if (endX - startX.current > 50) goPrev();
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white pt-20 px-6 pb-12">
      <h1 className="text-3xl md:text-5xl font-light mb-10 text-center">
        Galeria de Política<span className="text-red-500">.</span>
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md cursor-pointer" onClick={() => setCurrentIndex(index)}>
            <img
              src={`${src}?auto=format&fit=crop&w=800&q=80`}
              alt={`Imagem ${index + 1}`}
              className="w-full h-48 object-cover transition-transform duration-300 ease-out hover:scale-105 hover:brightness-110"
            />
          </div>
        ))}
      </div>

      {/* Modal com navegação e zoom suave */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative max-w-5xl w-full p-4 animate-zoomFade">
            <button
              onClick={() => setCurrentIndex(null)}
              className="absolute top-4 right-4 text-white text-2xl z-50"
            >
              &times;
            </button>
            <button
              onClick={goPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-50"
            >
              ❮
            </button>
            <button
              onClick={goNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-50"
            >
              ❯
            </button>
            <img
              src={`${images[currentIndex]}?auto=format&fit=contain&w=1200&q=90`}
              alt="Imagem ampliada"
              className="w-full max-h-[90vh] object-contain rounded-lg shadow-lg transition-transform duration-500 scale-100"
            />
          </div>
        </div>
      )}

      <style>
        {`
          .animate-zoomFade {
            animation: zoomFade 0.6s ease-out forwards;
          }
          @keyframes zoomFade {
            0% { opacity: 0; transform: scale(1.1); }
            100% { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
}

export default Policy;
