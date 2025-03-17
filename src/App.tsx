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
    { name: 'Contato', link: 'https://www.ramhon.com.br/contato' }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white relative overflow-hidden">
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden fixed top-6 right-6 z-50 text-white"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation */}
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

      {/* Social Icons */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-30 flex flex-col space-y-6">
        <a href="https://www.instagram.com/ramhon" className="text-white/70 hover:text-white transition-colors">
          <Instagram size={20} />
        </a>
        <a href="https://www.ramhon.com.br/contato" className="text-white/70 hover:text-white transition-colors">
          <MessageCircleMore size={20} />
        </a>
      </div>

      {/* Main Content */}
      <main className="relative h-screen flex items-center justify-center px-6">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 opacity-60"
          style={{
            backgroundImage: 'url("https://lh3.googleusercontent.com/pw/AP1GczPsBGnad7lr3Oi5HgA-TuU58VF9JdYIrQoubIR1loBDmLiwWHA03oQLcX1yaFqi9R1UNhBrNh9JDXFZAPcyVLSoScoA5SETdHBhFdF8yaeFzWGlwCyb21WB7IqefMRxiTgDaNUAg9cifk1n_v7G7Sa74A=w627-h954-s-no")',
            backgroundSize: 'cover',
            backgroundPosition: '50% 20%',
            filter: 'grayscale(50%)'
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Central Content */}
         <div className="relative z-20 text-left ml-10">
          <h1 className="text-6xl md:text-8xl font-light tracking-wider mb-8">
            Ramhon<span className="text-red-500">.</span>
          </h1>
          
          <button 
            onClick={() => setIsVideoOpen(true)}
            className="group relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
              <Play size={20} />
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
              Ver Apresentação
            </span>
            <span className="relative invisible">Ver Apresentação</span>
          </button>
        </div>

        {/* Video Modal */}
        {isVideoOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
            <div className="relative w-3/4 max-w-3xl bg-black rounded-lg overflow-hidden">
              <button 
                onClick={() => setIsVideoOpen(false)}
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
