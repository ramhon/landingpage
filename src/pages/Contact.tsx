import React from 'react';
import { Phone, Mail, MapPin, Instagram, Send } from 'lucide-react';

function Contact() {
  const backgroundImageUrl = window.innerWidth <= 768
    ? "https://img.playbook.com/sDRF-hyk3YQOIV5qNwTP-M8YB0Hy6_xPkiP7D9OPu2k/s:391:845/exp:1742428799/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvOGI1MDI3/NzUtODM3YS00YmQ2/LWI4YTctNDAyYTBk/NTc2N2Ji.webp"
    : "https://img.playbook.com/l4ES4VK7dOaxJhucsSneeaQczkA6vqKhXihuJOTTVB8/w:1800/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy85Y2UwY2E2NS02/MjUyLTQzOWMtOTE1/ZC0xZTRkMzI3NDA4/Yzk.webp";

  return (
    <div className="relative w-full min-h-screen pt-24 px-6 md:px-12">
      <div
        className="absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "grayscale(50%)",
        }}
      />

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20 max-w-4xl mx-auto">
        <h1 className="text-4xl font-light mb-12">
          Entre em Contato<span className="text-red-500">.</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4 text-white/90">
              <div className="flex items-center space-x-3">
                <Phone className="text-red-500" />
                <span>+55 (61) 9.8383-2325</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-red-500" />
                <span>contato@ramhon.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-red-500" />
                <span>Brasília-DF</span>
              </div>
            </div>

            <a
              href="https://wa.me/5561983832325"
              target="_blank"
              className="inline-flex items-center px-6 py-3 border-2 border-green-500 text-green-500 rounded-full hover:bg-green-500 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.54 2 2.07 6.48 2.04 11.98c-.01 2.1.55 4.13 1.6 5.91L2 22l4.25-1.55a10.05 10.05 0 005.78 1.75h.01c5.5 0 9.97-4.48 9.99-9.97.01-2.66-1.03-5.17-2.9-7.06A9.95 9.95 0 0012.04 2zm-.01 18c-1.69 0-3.35-.47-4.78-1.36l-.34-.2-2.52.91.86-2.45-.22-.36a8.04 8.04 0 01-1.26-4.32c.02-4.43 3.63-8.04 8.07-8.04a8.05 8.05 0 015.69 2.35 7.96 7.96 0 012.34 5.66c-.02 4.44-3.63 8.03-8.08 8.03zm4.45-6.2c-.24-.12-1.41-.7-1.63-.78-.22-.08-.38-.12-.54.12s-.62.78-.76.94c-.14.16-.28.18-.52.06a6.53 6.53 0 01-1.9-1.17 7.1 7.1 0 01-1.31-1.62c-.14-.24-.01-.37.11-.49.12-.12.26-.3.39-.44.13-.14.17-.24.25-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.28-.74-1.75-.2-.48-.4-.41-.55-.42l-.47-.01a.9.9 0 00-.65.3c-.22.24-.86.84-.86 2.04s.88 2.36 1 2.52c.12.16 1.74 2.66 4.2 3.73.59.26 1.05.42 1.41.54.59.19 1.13.16 1.56.1.47-.07 1.41-.58 1.61-1.14.2-.55.2-1.02.14-1.14-.06-.12-.22-.18-.46-.3z"/></svg>
              Fale comigo no WhatsApp
            </a>
          </div>

          {/* Formulário com FormSubmit */}
          <form
            action="https://formsubmit.co/contato@ramhon.com.br"
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://ramhon.com.br/obrigado" />

            <div>
              <label htmlFor="name" className="block text-sm mb-2">Nome</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-red-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-red-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm mb-2">Telefone</label>
              <input
                type="tel"
                name="phone"
                required
                pattern="\(?\d{2}\)?\s?\d{4,5}-?\d{4}"
                title="Formato esperado: (61) 91234-5678"
                className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-red-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-2">Mensagem</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white resize-none focus:outline-none focus:border-red-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-full hover:bg-red-500 hover:border-red-500 transition-colors"
            >
              <Send className="mr-2" size={20} />
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
