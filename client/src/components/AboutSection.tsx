/**
 * AboutSection — Seção "Por que nos escolher"
 * Design: Warm Corporate / Boutique Imobiliária
 * Layout assimétrico: texto à esquerda, imagem à direita com overlay
 */

import React from 'react';
import { useEdit } from '@/contexts/EditContext';
import { EditableField } from './EditableField';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const URBAN_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663407591151/cjeRypioBkeuyiGMwLUAZi/urban-aerial-nVazmHV8FvtRJEr2L4Qhty.webp';

const reasons = [
  'Equipe técnica altamente qualificada',
  'Equipamentos de última geração',
  'Atendimento em todo litoral catarinense',
  'Processos transparentes e sem burocracia',
  'Suporte jurídico especializado',
  'Prazos cumpridos com agilidade',
];

export function AboutSection() {
  const { content } = useEdit();

  const whatsappUrl = `https://wa.me/${content.whatsapp}?text=Olá! Gostaria de saber mais sobre a Agilita Regularização.`;

  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={URBAN_IMG}
                alt="Vista aérea de Penha - SC"
                className="w-full h-80 lg:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/50 to-transparent" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-amber-500/10 rounded-2xl border border-amber-500/20 -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-green-800/10 rounded-full border border-green-700/20 -z-10" />
            
            {/* Location badge */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
              <div className="text-xs text-gray-500 font-medium">Atendemos em</div>
              <div className="text-green-800 font-bold text-sm font-sora">Todo Litoral Catarinense</div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3 block">
              Sobre nós
            </span>
            <h2 className="text-4xl font-bold text-green-900 mb-4 font-sora leading-tight">
              <EditableField field="aboutTitle" tag="span" />
            </h2>
            <div className="gold-divider mb-6" />
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              <EditableField field="aboutText" tag="span" />
            </p>

            {/* Reasons list */}
            <ul className="space-y-3 mb-10">
              {reasons.map((reason, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <CheckCircle2 size={18} className="text-green-600 flex-shrink-0" />
                  <span className="font-medium">{reason}</span>
                </motion.li>
              ))}
            </ul>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-800 hover:bg-green-700 text-white font-bold rounded-xl transition-all hover:shadow-xl hover:shadow-green-800/30 hover:-translate-y-0.5 font-sora"
            >
              Fale com um Especialista
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
