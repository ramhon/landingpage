import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Instagram, 
  MessageCircleMore, 
  Linkedin, 
  Globe,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('PT');
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = 'pt-BR';
  }, []);

  const navItems = [
    { name: 'Inicio', link: 'https://www.ramhon.com.br/' },
    { name: 'Sobre', link: 'https://www.ramhon.com.br/sobre' },
    { name: 'Politica', link: 'https://www.ramhon.com.br/portifolio' },
    { name: 'Videos', link: 'https://www.ramhon.com.br/video' },
    { name: 'Infantil', link: 'https://www.ramhon.com.br/infantil' },
    { name: 'Contato', link: 'https://www.ramhon.com.br/contato', target: '_blank', rel: 'noopener noreferrer' }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white relative overflow-hidden">
      <div className="fixed top-6 left-6 z-50 flex items-center space-x-4">
        <h1 className="text-xl font-semibold tracking-wide">Ramhon Peixoto<span className="text-red-500">.</span></h1>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav className={`
        fixed w-full md:w-auto md:relative z-40 
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        transition-transform duration-300 ease-in-out
      `}>
        <div className="md:flex items-center justify-center py-8 px-6 md:px-16 space-y-6 md:space-y-0 md:space-x-8
                      bg-black/90 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="block md:inline-block text-sm font-light tracking-wider transition-colors text-white/80 hover:text-white"
            >
              {item.name.toUpperCase()}
            </a>
          ))}
        </div>
      </nav>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
        <a href="https://www.instagram.com/ramhon" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <Instagram size={32} />
        </a>
        <a href="https://www.ramhon.com.br/contato" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <MessageCircleMore size={32} />
        </a>
      </div>

      <main className="relative h-screen flex flex-col items-start justify-end px-6 pb-6">
        <div 
          className="absolute inset-0 z-0 opacity-60"
          style={{
            backgroundImage: `url(${window.innerWidth <= 768
              ? "https://img.playbook.com/sDRF-hyk3YQOIV5qNwTP-M8YB0Hy6_xPkiP7D9OPu2k/s:391:845/exp:1742428799/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvOGI1MDI3/NzUtODM3YS00YmQ2/LWI4YTctNDAyYTBk/NTc2N2Ji.webp"
              : "https://img.playbook.com/l4ES4VK7dOaxJhucsSneeaQczkA6vqKhXihuJOTTVB8/w:1800/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy85Y2UwY2E2NS02/MjUyLTQzOWMtOTE1/ZC0xZTRkMzI3NDA4/Yzk.webp"})`,
            backgroundSize: "cover",
            backgroundPosition: "50% 20%",
            filter: "grayscale(50%)"
          }}
        />

        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative z-20 text-left fixed bottom-52 left-6 flex flex-col items-start space-y-4">
          <button 
               onClick={() => setIsVideoOpen(true)}
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
      </main>

      {isVideoOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="relative w-4/4 max-w-3xl bg-black rounded-lg overflow-hidden">
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-2 right-2 text-white text-2x2"
            >
              <X size={24} />
            </button>
            <iframe 
              className="w-full h-96"
              src="https://player.vimeo.com/video/1067821979?h=db40bddbb1&badge=0&autoplay=1&autopause=0&player_id=0&app_id=58479" 
              title="Apresentação"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
