/**
 * ContactSection — Seção de contato
 * Design: Warm Corporate / Boutique Imobiliária
 * Fundo verde escuro, cards de contato, botão WhatsApp destacado
 */

import React, { useState } from 'react';
import { useEdit } from '@/contexts/EditContext';
import { EditableField } from './EditableField';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

export function ContactSection() {
  const { content } = useEdit();
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const whatsappUrl = `https://wa.me/${content.whatsapp}?text=Olá! Gostaria de solicitar uma avaliação gratuita para regularização do meu imóvel.`;

  const handleWhatsApp = () => {
    const msg = formData.name 
      ? `Olá! Meu nome é ${formData.name}. ${formData.message || 'Gostaria de solicitar uma avaliação gratuita.'}`
      : 'Olá! Gostaria de solicitar uma avaliação gratuita para regularização do meu imóvel.';
    const url = `https://wa.me/${content.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const contactCards = [
    {
      icon: <Phone size={22} />,
      title: 'Telefone',
      lines: [
        <EditableField key="p1" field="phone1" tag="span" className="text-white font-semibold" />,
        <EditableField key="p2" field="phone2" tag="span" className="text-green-300" />,
      ],
    },
    {
      icon: <Mail size={22} />,
      title: 'E-mail',
      lines: [
        <a key="email" href={`mailto:${content.email}`} className="text-amber-400 hover:text-amber-300 transition-colors font-semibold break-all">
          <EditableField field="email" tag="span" />
        </a>,
      ],
    },
    {
      icon: <MapPin size={22} />,
      title: 'Endereço',
      lines: [
        <EditableField key="addr" field="address" tag="span" className="text-white font-semibold" />,
        <EditableField key="city" field="city" tag="span" className="text-green-300" />,
      ],
    },
    {
      icon: <Clock size={22} />,
      title: 'Horário',
      lines: [
        <span key="h1" className="text-white font-semibold">Seg–Sex: 8h às 18h</span>,
        <span key="h2" className="text-green-300">Sáb: 8h às 12h</span>,
      ],
    },
  ];

  return (
    <section id="contato" className="py-24 bg-green-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(184,134,11,0.8) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 block">
            Fale conosco
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-sora">
            Entre em Contato
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-green-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Gostaríamos muito de ouvir de você! Nossa equipe está pronta para ajudar com a regularização do seu imóvel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Left — Contact Cards + WhatsApp CTA */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {contactCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-green-900/50 border border-green-800/60 rounded-xl p-3 sm:p-5 hover:border-amber-500/40 transition-all"
                >
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3">
                    {card.icon}
                  </div>
                  <div className="text-green-400 text-xs font-semibold uppercase tracking-wider mb-2">{card.title}</div>
                  <div className="space-y-1">
                    {card.lines.map((line, j) => (
                      <div key={j} className="text-xs sm:text-sm">{line}</div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA Card */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl border-2 border-green-500/30 hover:border-green-400/60 transition-all group"
              style={{ background: 'linear-gradient(135deg, rgba(37,162,68,0.15), rgba(37,162,68,0.05))' }}
            >
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform"
                style={{ backgroundColor: '#25D366' }}>
                <svg viewBox="0 0 24 24" fill="white" width="24" height="24" className="sm:w-7 sm:h-7">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div className="min-w-0">
                <div className="text-white font-bold text-base sm:text-lg font-sora">Fale pelo WhatsApp</div>
                <div className="text-green-300 text-xs sm:text-sm">Resposta rápida!</div>
                <div className="text-green-400 text-xs sm:text-sm font-medium mt-1 break-all">
                  <EditableField field="phone2" tag="span" />
                </div>
              </div>
            </motion.a>
          </div>

          {/* Right — Quick Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-green-900/30 border border-green-800/50 rounded-2xl p-8"
          >
            <h3 className="text-white font-bold text-2xl mb-2 font-sora">Solicite uma Avaliação Gratuita</h3>
            <p className="text-green-400 text-sm mb-6">Preencha os dados e entraremos em contato pelo WhatsApp.</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-green-300 text-sm font-medium mb-1.5">Seu nome</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                  placeholder="Como posso te chamar?"
                  className="w-full bg-green-900/50 border border-green-700/60 rounded-xl px-4 py-3 text-white placeholder-green-600 focus:outline-none focus:border-amber-500 transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-green-300 text-sm font-medium mb-1.5">Telefone / WhatsApp</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
                  placeholder="(47) 99999-9999"
                  className="w-full bg-green-900/50 border border-green-700/60 rounded-xl px-4 py-3 text-white placeholder-green-600 focus:outline-none focus:border-amber-500 transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-green-300 text-sm font-medium mb-1.5">Mensagem</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                  placeholder="Descreva brevemente o que precisa..."
                  rows={4}
                  className="w-full bg-green-900/50 border border-green-700/60 rounded-xl px-4 py-3 text-white placeholder-green-600 focus:outline-none focus:border-amber-500 transition-colors text-sm resize-none"
                />
              </div>
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-white transition-all hover:shadow-xl hover:-translate-y-0.5 font-sora"
                style={{ backgroundColor: '#25D366' }}
              >
                <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Enviar pelo WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
