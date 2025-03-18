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
     { name: 'Politica', link: 'https://www.ramhon.com.br/portifolio' },
      { name: 'Videos', link: 'https://www.ramhon.com.br/video' },
     { name: 'Infantil', link: 'https://www.ramhon.com.br/infantil' },
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
 
       <main className="relative h-screen flex flex-col items-start justify-end px-6 pb-10">
         <div className="relative z-20 text-left ml-10 mb-10 flex flex-col items-center space-y-6">
           <button 
                onClick={() => setIsVideoOpen(true)}
                className="group relative inline-flex items-center justify-center p-12 overflow-hidden font-medium text-white transition duration-300 ease-out border-8 border-white rounded-full shadow-md"
           >
             <Play size={48} />
           </button>
 
           <h1 className="text-6xl md:text-8xl font-light tracking-wider">
             Ramhon<span className="text-red-500">.</span>
           </h1>
         </div>
       </main>
     </div>
   );
 }
 
 export default App;
