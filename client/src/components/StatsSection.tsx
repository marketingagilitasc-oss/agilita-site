/**
 * StatsSection — Seção de estatísticas e diferenciais
 * Design: Warm Corporate / Boutique Imobiliária
 * Fundo verde escuro com números dourados em destaque
 */

import React, { useEffect, useRef, useState } from 'react';
import { useEdit } from '@/contexts/EditContext';
import { EditableField } from './EditableField';
import { motion } from 'framer-motion';
import { Shield, Clock, Award, Users } from 'lucide-react';

const differentials = [
  {
    icon: <Shield size={28} />,
    title: 'Segurança Jurídica',
    desc: 'Todos os processos com conformidade legal garantida',
  },
  {
    icon: <Clock size={28} />,
    title: 'Agilidade',
    desc: 'Processos otimizados para o menor prazo possível',
  },
  {
    icon: <Award size={28} />,
    title: 'Expertise Técnica',
    desc: 'Equipe especializada com equipamentos modernos',
  },
  {
    icon: <Users size={28} />,
    title: 'Atendimento Humano',
    desc: 'Acompanhamento personalizado em cada etapa',
  },
];

export function StatsSection() {
  const { content } = useEdit();

  const stats = [
    { value: content.stat1Value, label: content.stat1Label, field1: 'stat1Value' as const, field2: 'stat1Label' as const },
    { value: content.stat2Value, label: content.stat2Label, field1: 'stat2Value' as const, field2: 'stat2Label' as const },
    { value: content.stat3Value, label: content.stat3Label, field1: 'stat3Value' as const, field2: 'stat3Label' as const },
  ];

  return (
    <section className="bg-green-950 py-20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(45deg, #B8860B 25%, transparent 25%), linear-gradient(-45deg, #B8860B 25%, transparent 25%)',
          backgroundSize: '60px 60px',
        }}
      />
      
      <div className="container relative z-10">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-amber-400 font-sora mb-2 stat-number">
                <EditableField field={stat.field1} tag="span" />
              </div>
              <div className="text-green-300 text-lg font-medium">
                <EditableField field={stat.field2} tag="span" />
              </div>
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-green-700" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px bg-green-800" />
          <div className="gold-divider w-16" />
          <div className="flex-1 h-px bg-green-800" />
        </div>

        {/* Differentials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((diff, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-green-900/40 border border-green-800/50 hover:border-amber-500/40 transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                {diff.icon}
              </div>
              <h3 className="text-white font-bold mb-2 font-sora">{diff.title}</h3>
              <p className="text-green-400 text-sm leading-relaxed">{diff.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
