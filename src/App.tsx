import React, { useState } from 'react'; 
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

  const navItems = [
    { name: 'Inicio', link: 'https://www.ramhon.com.br/' },
    { name: 'Sobre', link: 'https://www.ramhon.com.br/sobre' },
    // { name: 'Projetos', link: 'https://www.ramhon.com.br/projetos' },
    { name: 'Politica', link: 'https://www.ramhon.com.br/portifolio' },
     { name: 'Videos', link: 'https://www.ramhon.com.br/video' },
    { name: 'Infantil', link: 'https://www.ramhon.com.br/infantil' },
    // { name: 'Blog', link: 'https://www.ramhon.com.br/blog' }
    { name: 'Contato', link: 'https://www.ramhon.com.br/contato', target: '_blank', rel: 'noopener noreferrer' }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white relative overflow-hidden">
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden fixed top-6 right-6 z-50 text-white"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

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

      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-30 flex flex-col space-y-6">
        <a href="https://www.instagram.com/ramhon" className="text-white/70 hover:text-white transition-colors">
          <Instagram size={20} />
        </a>
        <a href="https://www.ramhon.com.br/contato', target: '_blank', rel: 'noopener noreferrer' className="text-white/70 hover:text-white transition-colors">
          <MessageCircleMore size={20} />
        </a>
      </div>

     <main className="relative h-screen flex items-center justify-center px-6 mt-60">
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

        <div className="relative z-20 text-right mr-20">
                   
           <button 
            onClick={() => setIsVideoOpen(true)}
            className="group relative inline-flex items-center justify-center p-4 w-16 h-16 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md bg-black hover:bg-gray-800"
          > setIsVideoOpen(true)}
            className="group relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md"
          >
            <Play size={24} />
          </button>

          <h1 className="text-6xl md:text-8xl font-light tracking-wider mb-8">
               RamhonPeixoto<span className="text-red-500">.</span>
          </h1>
        </div>

        {isVideoOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
            <div className="relative w-3/4 max-w-3xl bg-black rounded-lg overflow-hidden">
              <button 
            onClick={() => setIsVideoOpen(true)}
            className="group relative inline-flex items-center justify-center p-4 w-16 h-16 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md bg-black hover:bg-gray-800"
          > setIsVideoOpen(false)}
                className="absolute top-2 right-2 text-white text-2xl"
              >
                <X size={24} />
              </button>
              <iframe 
                className="w-full h-96"
                src="https://www.youtube.com/embed/RCGnf-1YvQs" 
                title="Apresentação"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
