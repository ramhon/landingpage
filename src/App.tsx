import React, { useState } from 'react';
import { 
  Play, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Globe,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('PT');

  const navItems = [
    { name: 'Inicio', link: 'https://www.ramhon.com.br/' },
    { name: 'Sobre', link: 'https://www.ramhon.com.br/sobre' },
    { name: 'Projetos', link: 'https://www.ramhon.com.br/projetos' },
    { name: 'Politica', link: 'https://www.ramhon.com.br/politica' },
    { name: 'Videos', link: 'https://www.ramhon.com.br/videos' },
    { name: 'Infantil', link: 'https://www.ramhon.com.br/infantil' },
    { name: 'Blog', link: 'https://www.ramhon.com.br/blog' },
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
      </main>
    </div>
  );
}

export default App;
