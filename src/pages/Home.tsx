import React, { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ezwzjnvasgpzsjgwjesq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6d3pqbnZhc2dwenNqZ3dqZXNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4MjM2MjcsImV4cCI6MjA1ODM5OTYyN30.cSWLb7taf4D6fepe2oKk5oZsNYehoclmerDllQ1P5xw';
const supabase = createClient(supabaseUrl, supabaseKey);

function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [animateContent, setAnimateContent] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    document.documentElement.lang = 'pt-BR';
    const timerBg = setTimeout(() => setShowBackground(true), 300);
    const timerContent = setTimeout(() => setAnimateContent(true), 1600);
    return () => {
      clearTimeout(timerBg);
      clearTimeout(timerContent);
    };
  }, []);

  useEffect(() => {
    const fetchVideo = async () => {
      const { data, error } = await supabase.storage
        .from('galeria')
        .list('videos/projetos', { limit: 1 });

      if (data && data.length > 0) {
        const videoPath = data[0].name;
        const fullUrl = `${supabaseUrl}/storage/v1/object/public/galeria/videos/projetos/${videoPath}`;
        setVideoUrl(fullUrl);
      }

      if (error) {
        console.error('Erro ao buscar vídeo:', error.message);
      }
    };

    fetchVideo();
  }, []);

  const backgroundImageUrl = window.innerWidth <= 768
    ? "https://img.playbook.com/sDRF-hyk3YQOIV5qNwTP-M8YB0Hy6_xPkiP7D9OPu2k/s:391:845/exp:1742428799/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvOGI1MDI3/NzUtODM3YS00YmQ2/LWI4YTctNDAyYTBk/NTc2N2Ji.webp"
    : "https://img.playbook.com/l4ES4VK7dOaxJhucsSneeaQczkA6vqKhXihuJOTTVB8/w:1800/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy85Y2UwY2E2NS02/MjUyLTQzOWMtOTE1/ZC0xZTRkMzI3NDA4/Yzk.webp";

  return (
    <div className="relative w-full h-screen pt-20 overflow-hidden">
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

      <div className="absolute inset-0 bg-black/50 z-10" />

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

      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 text-white z-50"
            >
              <X size={32} />
            </button>
            {videoUrl ? (
              <video
                className="w-full h-full object-contain"
                src={videoUrl}
                controls
                autoPlay
              />
            ) : (
              <p className="text-white">Carregando vídeo...</p>
            )}
          </div>
        </div>
      )}

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
