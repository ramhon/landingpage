import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from 'react-router-dom';
import {
  Instagram,
  MessageCircleMore,
  Menu,
  X
} from 'lucide-react';

// Import pages
import About from './pages/About';
import Projects from './pages/Projects';
import Kids from './pages/Kids';
import Policy from './pages/Policy';
import Videos from './pages/Videos';
import Contact from './pages/Contact';
import Home from './pages/Home';
import LinkBio from './pages/LinkBio';

// =========================
// Header e Navigation
// =========================
function Header({ isMenuOpen, setIsMenuOpen }) {
  const location = useLocation();
  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/politica', label: 'Politica' },
    { path: '/videos', label: 'Videos' },
    { path: '/infantil', label: 'Infantil' },
    { path: '/contato', label: 'Contato' },
//    { path: '/LinkBio', label: 'LinkBio' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#0d0d0d] z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-light text-white">
          Ramhon<span className="text-red-500">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-light tracking-wider transition-colors
                ${location.pathname === item.path ? 'text-red-500' : 'text-white/80 hover:text-white'}`}
            >
              {item.label.toUpperCase()}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center text-white gap-2"
        >
          <span className="text-sm uppercase tracking-wider">Menu</span>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

function Navigation({ isMenuOpen, setIsMenuOpen }) {
  const location = useLocation();
  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/politica', label: 'Politica' },
    { path: '/videos', label: 'Videos' },
    { path: '/infantil', label: 'Infantil' },
    { path: '/contato', label: 'Contato' },
    { path: '/LinkBio', label: 'LinkBio' },
  ];

  return (
    <nav
      className={`
      fixed top-20 left-0 right-0 bg-black/90 backdrop-blur-lg md:hidden
      transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}
      transition-transform duration-300 ease-in-out z-40
    `}
    >
      <div className="px-6 py-8 space-y-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setIsMenuOpen(false)}
            className={`block text-sm font-light tracking-wider transition-colors
              ${location.pathname === item.path ? 'text-red-500' : 'text-white/80 hover:text-white'}`}
          >
            {item.label.toUpperCase()}
          </Link>
        ))}
      </div>
    </nav>
  );
}

// =========================
// Novo componente que usa useLocation pra esconder redes
// =========================
function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#121212] text-white relative">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Social Icons - some em /LinkBio */}
      ({location.pathname !== '/LinkBio' && location.pathname !== '/contato' && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
          <a
            href="https://www.instagram.com/ramhon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <Instagram size={32} />
          </a>
          <a
            href="https://www.ramhon.com.br/contato"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <MessageCircleMore size={32} />
          </a>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/politica" element={<Policy />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/infantil" element={<Kids />} />
          <Route path="/contato" element={<Contact />} />
{/*        <Route path="/linkbio" element={<LinkBio />} />*/}
        </Routes>
      </main>
    </div>
  );
}

// =========================
// APP principal com <Router> e chamando AppContent
// =========================
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
