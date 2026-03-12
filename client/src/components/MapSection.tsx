/**
 * MapSection — Seção com localização da empresa em Penha
 * Design: Warm Corporate / Boutique Imobiliária
 * Informações de contato e localização
 */

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export function MapSection() {
  return (
    <section id="localizacao" className="py-24 bg-gradient-to-br from-green-50 to-amber-50">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3 block">
            Localização
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4 font-sora">
            Visite-nos em Penha
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Localize nossa empresa e entre em contato conosco para agendar uma avaliação gratuita.
          </p>
        </motion.div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-800 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start gap-4">
              <MapPin size={28} className="text-green-800 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-green-900 mb-2 font-sora text-lg">Endereço</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Penha<br />
                  Santa Catarina, Brasil
                </p>
              </div>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-amber-500 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start gap-4">
              <Phone size={28} className="text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-green-900 mb-2 font-sora text-lg">Telefone</h3>
                <p className="text-gray-600 text-sm">
                  <a href="tel:+554731703721" className="hover:text-green-800 transition-colors font-medium">
                    (47) 3170-3721
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-700 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start gap-4">
              <Mail size={28} className="text-green-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-green-900 mb-2 font-sora text-lg">Email</h3>
                <p className="text-gray-600 text-sm">
                  <a href="mailto:contato@agilitaregularizacao.com.br" className="hover:text-green-800 transition-colors font-medium">
                    contato@agilitaregularizacao.com.br
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-amber-600 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start gap-4">
              <Clock size={28} className="text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-green-900 mb-2 font-sora text-lg">Horário</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Seg-Sex: 8h às 18h<br />
                  Sábado: 8h às 12h
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-gradient-to-r from-green-900 via-green-800 to-green-700 rounded-2xl p-10 text-center text-white shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-3 font-sora">Pronto para regularizar seu imóvel?</h3>
          <p className="mb-8 text-green-100 text-lg">
            Entre em contato conosco agora mesmo e agende sua avaliação gratuita. Nossa equipe está pronta para ajudar!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/554799228573"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-all hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5 font-sora"
            >
              <span>Enviar Mensagem via WhatsApp</span>
              <ArrowRight size={18} />
            </a>
            <a
              href="tel:+554731703721"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-xl transition-all border-2 border-white/30 font-sora"
            >
              <span>Ligar Agora</span>
              <Phone size={18} />
            </a>
          </div>
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 bg-white rounded-xl p-8 shadow-lg border-2 border-green-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-800 mb-2 font-sora">4+</div>
              <p className="text-gray-700 font-medium">Regiões Atendidas</p>
              <p className="text-gray-500 text-sm mt-1">Litoral catarinense, interior e zona urbana</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2 font-sora">24h</div>
              <p className="text-gray-700 font-medium">Resposta Garantida</p>
              <p className="text-gray-500 text-sm mt-1">Retorno rápido em suas solicitações</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-700 mb-2 font-sora">100%</div>
              <p className="text-gray-700 font-medium">Satisfação</p>
              <p className="text-gray-500 text-sm mt-1">Clientes satisfeitos com nossos serviços</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
