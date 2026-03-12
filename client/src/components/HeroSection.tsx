/**
 * HeroSection — Seção principal do site
 * Design: Warm Corporate / Boutique Imobiliária
 * Imagem aérea de bairro brasileiro com overlay verde escuro
 * Texto branco à esquerda, imagem de profissional à direita
 */

import React, { useEffect, useRef, useState } from 'react';
import { useEdit } from '@/contexts/EditContext';
import { EditableField } from './EditableField';
import { CheckCircle2, ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const HERO_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663407591151/cjeRypioBkeuyiGMwLUAZi/hero-bg-7p6tGMkPfhcEpcJhJqAZ7S.webp';
const TEAM_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663407591151/cjeRypioBkeuyiGMwLUAZi/fgfhgg_5f0ddb08.jpeg';

const benefits = [
  'Atendimento personalizado',
  'Análise documental completa',
  'Acompanhamento até a regularização final',
];

export function HeroSection() {
  const { content } = useEdit();

  const whatsappUrl = `https://wa.me/${content.whatsapp}?text=Olá! Gostaria de solicitar uma avaliação gratuita para regularização do meu imóvel.`;

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 via-green-950/85 to-green-950/40" />
      
      {/* Decorative pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600/20 border border-amber-500/30 rounded-full text-amber-300 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              Especialistas em Regularização Imobiliária
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 font-sora"
            >
              <EditableField field="heroTitle" className="text-white" tag="span" />
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-base sm:text-lg md:text-xl text-green-200 mb-4 font-medium"
            >
              <EditableField field="heroSubtitle" className="italic" tag="span" />
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-green-300 mb-8 text-sm sm:text-base md:text-lg leading-relaxed"
            >
              <EditableField field="heroDescription" tag="span" />
            </motion.p>

            {/* Benefits */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="space-y-3 mb-10"
            >
              {benefits.map((benefit, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 text-green-100"
                >
                  <CheckCircle2 size={20} className="text-amber-400 flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-xl transition-all hover:shadow-xl hover:shadow-amber-600/30 hover:-translate-y-0.5 text-base sm:text-lg font-sora w-full sm:w-auto"
              >
                <EditableField field="heroCta" tag="span" />
                <ArrowRight size={20} />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-green-600 text-green-200 hover:border-white hover:text-white font-semibold rounded-xl transition-all text-base sm:text-lg w-full sm:w-auto"
              >
                Nossos Serviços
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Professional Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Image frame */}
              <div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-500/30">
                <img
                  src={TEAM_IMG}
                  alt="Especialista em regularização de imóveis"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/60 to-transparent" />
              </div>
              
              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="absolute -bottom-6 -left-8 bg-white rounded-2xl p-4 shadow-2xl border border-green-100"
              >
                <div className="text-3xl font-bold text-green-800 font-sora">500+</div>
                <div className="text-sm text-gray-600 font-medium">Imóveis Regularizados</div>
              </motion.div>
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="absolute -top-4 -right-6 bg-amber-500 rounded-2xl p-3 shadow-xl"
              >
                <div className="text-white text-center">
                  <div className="text-2xl font-bold font-sora">10+</div>
                  <div className="text-xs font-medium">Anos de<br/>Experiência</div>
                </div>
              </motion.div>
              
              {/* Decorative circle */}
              <div className="absolute -z-10 inset-4 rounded-full border-2 border-amber-400/20 scale-110" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-green-400 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-wider uppercase">Rolar</span>
        <ChevronDown size={20} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
