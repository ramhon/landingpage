import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

function Obrigado() {
  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col items-center justify-center px-6 py-24 text-center">
      <CheckCircle size={64} className="text-green-500 mb-6" />
      <h1 className="text-4xl font-light mb-4">Mensagem enviada com sucesso!</h1>
      <p className="text-white/80 mb-8">
        Obrigado por entrar em contato. Em breve retornarei com uma resposta.
      </p>
      <Link
        to="/"
        className="px-6 py-3 border-2 border-white text-white rounded-full hover:bg-red-500 hover:border-red-500 transition-colors"
      >
        Voltar para o início
      </Link>
    </div>
  );
}

export default Obrigado;
