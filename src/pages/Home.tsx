import React, { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';

function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [animateContent, setAnimateContent] = useState(false);

  useEffect(() => {
    document.documentElement.lang = 'pt-BR';
    const timerBg = setTimeout(() => setShowBackground(true), 300); // delay do fundo
    const timerContent = setTimeout(() => setAnimateContent(true), 1600); // delay do conteúdo
    return () => {
      clearTimeout(timerBg);
      clearTimeout(timerContent);
    };
  }, []);

  const backgroundImageUrl = window.innerWidth <= 768
    ? "https://img.playbook.com/sDRF-hyk3YQOIV5qNwTP-M8YB0Hy6_xPkiP7D9OPu2k/s:391:845/exp:1742428799/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvOGI1MDI3/NzUtODM3YS00YmQ2/LWI4YTctNDAyYTBk/NTc2N2Ji.webp"
    : "https://img.playbook.com/l4ES4VK7dOaxJhucsSneeaQczkA6vqKhXihuJOTTVB8/w:1800/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy85Y2UwY2E2NS02/MjUyLTQzOWMtOTE1/ZC0xZTRkMzI3NDA4/Yzk.webp";

  return (
    <div className="relative w-full h-screen pt-20 overflow-hidden">
      {/* Imagem de fundo com fade + zoom usando Tailwind */}
      {showBackground && (
        <div
          className="absolute inset-0 z-0 opacity-0 scale-110 animate-zoomFade bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundPosition: "70% 10%",
            filter: "grayscale(50%)"
          }}
        />
      )}

      {/* Overlay escura */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Conteúdo com animação fade-in */}
      <div className={`relative z-20 flex flex-col items-start space-y-4 px-6 pb-6 h-full justify-center transition-all duration-1000 ease-out ${animateContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <button
          onClick={() => setIsVideoOpen(true)}
          aria-label="Assistir vídeo de apresentação"
          className="group relative inline-flex items-center justify-center p-6 overflow-hidden font-medium text-white transition duration-300 ease-out border-4 border-white rounded-full shadow-md"
        >
          <Play size={48} />
        </button>

        <p className="text-sm font-light text-white/80">Videomaker + Fotógrafo</p>

        <h1 className="text-6xl md:text-8xl font-light tracking-wider">
          Ramhon<span className="text-red-500">.</span>
        </h1>

        <p className="text-base font-light text-white/70 text-left max-w-md">
          Capturando momentos com um olhar único, transformando cada cena em uma memória inesquecível.
        </p>
      </div>

      {/* Modal de vídeo */}
      {isVideoOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              <X size={24} />
            </button>
            <iframe
              className="w-screen h-screen"
              src="https://player.vimeo.com/video/1067821979?h=db40bddbb1&badge=0&autoplay=1&autopause=0&player_id=0&app_id=58479"
              title="Apresentação"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Estilo personalizado para animação da imagem de fundo */}
      <style>
        {`
          @keyframes zoomFade {
            0% { opacity: 0; transform: scale(1.2); }
            100% { opacity: 0.6; transform: scale(1); }
          }
          .animate-zoomFade {
            animation: zoomFade 1.2s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}

export default Home;
