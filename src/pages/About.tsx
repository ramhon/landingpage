import React from 'react';

function SobreMim() {
  return (
    <div className="min-h-screen pt-24 px-6 md:px-12 max-w-5xl mx-auto text-white">
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <img
            src="https://ramhon.com.br/imagens/perfil.jpg"
            alt="Ramhon Peixoto"
            className="w-64 h-64 object-cover rounded-full shadow-xl"
          />
          <div className="space-y-6">
            <h1 className="text-4xl font-light">
              Ramhon Peixoto<span className="text-red-500">.</span>
            </h1>
            <p className="text-white/80 leading-relaxed">
              Ramhon Peixoto é fotógrafo e videomaker com atuação em Brasília desde 2011. Iniciou sua trajetória no audiovisual como fotógrafo, ampliando sua atuação para vídeo e edição a partir de 2013. Atualmente, trabalha na Câmara dos Deputados como fotógrafo, cinegrafista e editor de vídeo, com vasta experiência em projetos institucionais e eventos sociais.
            </p>
            <p className="text-white/80 leading-relaxed">
              Em seu portfólio, destacam-se produções como trailers de casamento, vídeos institucionais, clipes de debutantes e coberturas de eventos políticos e sociais. Seu objetivo é sempre capturar momentos com um olhar único, transformando cada cena em uma memória inesquecível.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-light">Estilo e Técnica</h2>
            <p className="text-white/80 leading-relaxed">
              Seu estilo fotográfico valoriza a espontaneidade, o detalhe e a emoção. Ramhon busca registrar cada sorriso de forma autêntica, misturando técnicas de reportagem com uma edição cinematográfica. Utiliza câmeras Canon, Sony e Blackmagic, adaptando o equipamento conforme a necessidade do projeto.
            </p>
            <p className="text-white/80 leading-relaxed">
              Além da captação, ele cuida da edição de vídeo, correção de cor e design de som, garantindo que o material final conte uma história visual com ritmo e identidade.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-light">Projetos Notáveis</h2>
            <p className="text-white/80 leading-relaxed">
              Ramhon foi responsável pelo registro de eventos políticos importantes, como a recepção do deputado alemão Peter Beyer pelo PSDB-Mulher. Também atuou em parceria com produtoras como a Omni Vídeo e participou de projetos musicais e religiosos, sempre trazendo profissionalismo e sensibilidade para cada produção.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-light">Presença Online</h2>
            <ul className="list-disc list-inside text-white/80 space-y-2">
              <li>📸 Instagram profissional: <a href="https://instagram.com/ramhonpeixoto" className="text-red-500 underline">@ramhonpeixoto</a></li>
              <li>🎥 YouTube: <a href="https://youtube.com/@ramhonpeixoto" className="text-red-500 underline">Ramhon Peixoto</a></li>
              <li>📘 Facebook: <a href="https://facebook.com/ramhonfotografia" className="text-red-500 underline">Ramhon Fotografia</a></li>
              <li>🔗 LinkedIn: <a href="https://br.linkedin.com/in/ramhonpeixoto" className="text-red-500 underline">/in/ramhonpeixoto</a></li>
              <li>🌐 Site: <a href="https://ramhon.com.br" className="text-red-500 underline">ramhon.com.br</a></li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-light">Contato</h2>
            <p className="text-white/80 leading-relaxed">
              Para agendar um ensaio, cobertura de evento ou produção de vídeo com Ramhon Peixoto, entre em contato pelo site ou envie um e-mail para:
            </p>
            <p className="text-white font-medium">📧 contato@ramhon.com.br</p>
            <p className="text-white/70 text-sm">CNPJ 50.894.832/0001-77</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default SobreMim;
