import React from 'react';
import { Camera, Video, Mail, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl font-bold mb-4">Ramhon Peixoto Filmes</h1>
          <p className="text-xl mb-8">Transformando momentos em memórias eternas</p>
          <ChevronDown className="w-8 h-8 mx-auto animate-bounce" />
        </div>
      </header>

      {/* Photography Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Camera className="w-8 h-8 text-gray-800" />
            <h2 className="text-4xl font-bold text-gray-800">Photography</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1533747732305-d2bb7495c318?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1524863479829-916d8e77f114?auto=format&fit=crop&q=80",
            ].map((url, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
                <img src={url} alt={`Photography ${index + 1}`} className="w-full h-64 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Video className="w-8 h-8 text-gray-800" />
            <h2 className="text-4xl font-bold text-gray-800">Videography</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video rounded-lg shadow-lg bg-gray-200 flex items-center justify-center">
              <div className="text-center p-8">
                <Video className="w-12 h-12 mx-auto mb-4 text-gray-600" />
                <p className="text-gray-600">Wedding Highlights Reel</p>
              </div>
            </div>
            <div className="aspect-video rounded-lg shadow-lg bg-gray-200 flex items-center justify-center">
              <div className="text-center p-8">
                <Video className="w-12 h-12 mx-auto mb-4 text-gray-600" />
                <p className="text-gray-600">Commercial Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Create Something Amazing</h2>
          <p className="text-xl mb-12">Ready to start your project? We'd love to hear from you.</p>
          <button 
            onClick={() => window.location.href = '/contact'}
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;