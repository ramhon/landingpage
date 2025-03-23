import React from 'react';

function About() {
  return (
    <div className="min-h-screen pt-24 px-6 md:px-12 max-w-4xl mx-auto">
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400"
            alt="Profile"
            className="w-64 h-64 object-cover rounded-lg shadow-xl"
          />
          <div className="space-y-6">
            <h1 className="text-4xl font-light">
              Sobre Nós<span className="text-red-500">.</span>
            </h1>
            <p className="text-white/80 leading-relaxed">
              Somos uma equipe dedicada à <span className="text-red-500">inovação</span> e 
              <span className="text-red-500"> excelência</span> em design e desenvolvimento. 
              Nossa missão é criar experiências digitais únicas que inspiram e transformam.
              Com mais de uma década de experiência, nos especializamos em 
              <span className="text-red-500"> soluções criativas</span> que atendem às 
              necessidades específicas de cada cliente.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-light">Nossa Missão</h2>
            <p className="text-white/80 leading-relaxed">
              Buscamos constantemente a excelência em cada projeto, combinando 
              criatividade com tecnologia de ponta para entregar resultados 
              excepcionais que superam as expectativas dos nossos clientes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-light">Nossos Valores</h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <li className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl mb-2">Inovação</h3>
                <p className="text-white/70">Buscamos sempre as soluções mais criativas e eficientes.</p>
              </li>
              <li className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl mb-2">Qualidade</h3>
                <p className="text-white/70">Comprometimento com a excelência em cada detalhe.</p>
              </li>
              <li className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl mb-2">Transparência</h3>
                <p className="text-white/70">Comunicação clara e honesta em todas as interações.</p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;