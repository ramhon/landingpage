import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Mail, Image } from 'lucide-react';

function LinkBio() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="min-h-screen bg-[#121212] flex items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://img.playbook.com/4ZrRFH-9qG13FHxEScVy23U2WwNhwgw1iL-m_MMTjyA/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8xNzQ5/YWZmOC00MDBlLTRh/Y2UtYjJkZC1kYzM5/MTczZDU0ZDc.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08,
          filter: 'grayscale(100%)',
        }}
      />

      <div
        className={`max-w-md w-full space-y-12 transition-all duration-1000 z-10 relative ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Profile Section */}
        <div className="flex flex-col items-center space-y-6">
          <div className="relative group">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-white/10">
              <img
                src="https://img.playbook.com/BwNWLWlSFfCFzWQ1v5Dgx5ne6T09Cp473qjqD6hmt2c/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9iNjdh/ZjEwYy0zMWI5LTQz/YWItOTY0ZC00YzE3/ODQxZmQyY2M.png"
                alt="Ramhon Profile"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          <div className="text-center space-y-2">
            <h1 className="text-3xl font-light text-white">
              Ramhon<span className="text-red-500">.</span>
            </h1>
            <p className="text-sm text-white/60 font-light tracking-wide">
              Videomaker & Fotógrafo
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {[
            {
              to: '/',
              label: 'Site',
              icon: Play,
              delay: '100ms',
            },
            {
              to: '/contato',
              label: 'Contato',
              icon: Mail,
              delay: '200ms',
            },
            {
              to: '/whatsapp',
              label: 'Whatsapp',
              icon: Image,
              delay: '300ms',
            },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="group relative block w-full"
              style={{ transitionDelay: link.delay }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-white/5 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative flex items-center justify-between px-6 py-4 bg-white/5 rounded-xl border border-white/10 group-hover:border-white/20 transition duration-300">
                <span className="text-white/80 group-hover:text-white transition-colors">
                  {link.label}
                </span>
                <link.icon
                  size={20}
                  className="text-white/60 group-hover:text-white transition-colors"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LinkBio;
