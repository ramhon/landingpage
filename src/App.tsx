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
  const [activeTab, setActiveTab] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('PT');

  const navItems = [
    'Inicio', 'Sobre', 'Politica', 'Videos', 'Infantil', 'Contato'
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
            <button
              key={item}
              onClick={() => {
                if (item.toLowerCase() === 'Politica') {
                  window.location.href = 'https://www.ramhon.com.br/portifolio';
                } else {
                  setActiveTab(item.toLowerCase());
                }
              }}
              className={`block md:inline-block text-sm font-light tracking-wider transition-colors
                ${activeTab === item.toLowerCase() ? 'text-red-500' : 'text-white/80 hover:text-white'}`}
            >
              {item.toUpperCase()}
            </button>
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

        {/* Social Icons */}
        <div className="fixed left-6 top-1/2 -translate-y-1/2 z-30 flex flex-col space-y-6">
          <a href="instagram.com/ramhon" className="text-white/70 hover:text-white transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-white/70 hover:text-white transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-white/70 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
        </div>

        {/* Central Content */}
        <div className="relative z-20 text-center">
          <h1 className="text-6xl md:text-8xl font-light tracking-wider mb-8">
            Ramhon<span className="text-red-500">.</span>
          </h1>
          
          <button className="group relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
              <Play size={20} />
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
              Ver Apresentação
            </span>
            <span className="relative invisible">Ver Apresentação</span>
          </button>
        </div>

        {/* Language Selector */}
        <div className="fixed bottom-6 right-6 z-30">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-transparent border border-white/20 text-white/70 text-sm rounded-full px-4 py-2 appearance-none cursor-pointer hover:border-white/40 transition-colors focus:outline-none"
          >
            <option value="PT" className="bg-[#121212]">PT</option>
            <option value="EN" className="bg-[#121212]">EN</option>
            <option value="ES" className="bg-[#121212]">ES</option>
          </select>
          <Globe size={16} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/70" />
        </div>
      </main>
    </div>
  );
}

export default App;
