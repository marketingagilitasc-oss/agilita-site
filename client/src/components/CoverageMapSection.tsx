/**
 * CoverageMapSection — Seção de mapa interativo com regiões de atuação
 * Design: Warm Corporate / Boutique Imobiliária
 * Mapa com pins interativos e fotos das regiões
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const regions = [
  {
    id: 'litoral',
    name: 'Litoral Catarinense',
    description: 'Região costeira com propriedades à beira-mar',
    coordinates: { lat: -26.8917, lng: -48.6506 },
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663407591151/cjeRypioBkeuyiGMwLUAZi/3WzBG0bwNmXo_bb975287.jpg',
    services: 'Regularização, Georreferenciamento, Escrituras',
  },
  {
    id: 'vale-itajai',
    name: 'Vale do Itajaí',
    description: 'Região industrial e comercial de Itajaí',
    coordinates: { lat: -26.9211, lng: -48.8763 },
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663407591151/cjeRypioBkeuyiGMwLUAZi/vx9aouyDFNlz_cd13d715.jpg',
    services: 'Regularização, Escrituras, Desmembramentos',
  },
  {
    id: 'zona-portuaria',
    name: 'Zona Portuária',
    description: 'Região portuária de Navegantes',
    coordinates: { lat: -26.8917, lng: -48.6506 },
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663407591151/cjeRypioBkeuyiGMwLUAZi/yw3gTzfBTgHr_c099e05d.jpg',
    services: 'Regularização, Georreferenciamento, Assessoria Imobiliária',
  },
  {
    id: 'zona-rural',
    name: 'Zona Rural e Urbana',
    description: 'Propriedades rurais e imóveis mistos no interior',
    coordinates: { lat: -26.8500, lng: -48.7500 },
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663407591151/cjeRypioBkeuyiGMwLUAZi/W8o6K4SMc4F5_e8238b9c.jpg',
    services: 'Levantamento Topográfico, REURB, Abertura de Rumos',
  },
];

export function CoverageMapSection() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>('litoral');
  const [expandedRegion, setExpandedRegion] = useState<string | null>(null);

  const selected = regions.find(r => r.id === selectedRegion);

  return (
    <section id="cobertura" className="py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 block">
            Área de Atuação
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-900 mb-4 font-sora">
            Regiões Atendidas
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Atendemos em diversas regiões de Santa Catarina, cobrindo zona urbana, rural, litoral e interior.
          </p>
        </motion.div>

        {/* Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left — Regions List */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-3"
          >
            {regions.map((region, i) => (
              <div key={region.id}>
                <button
                  onClick={() => {
                    setSelectedRegion(region.id);
                    setExpandedRegion(expandedRegion === region.id ? null : region.id);
                  }}
                  className={`w-full text-left p-3 sm:p-4 rounded-xl border-2 transition-all ${
                    selectedRegion === region.id
                      ? 'border-amber-500 bg-amber-50'
                      : 'border-gray-200 bg-white hover:border-green-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin size={14} className="text-green-700 flex-shrink-0" />
                        <h3 className="font-bold text-green-900 font-sora text-sm sm:text-base">{region.name}</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600">{region.description}</p>
                    </div>
                    {expandedRegion === region.id ? (
                      <ChevronUp size={20} className="text-amber-600" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-400" />
                    )}
                  </div>

                  {/* Expanded Details */}
                  {expandedRegion === region.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 pt-3 border-t border-gray-200"
                    >
                      <p className="text-xs text-gray-500 mb-2">Serviços:</p>
                      <p className="text-xs sm:text-sm text-green-700 font-medium">{region.services}</p>
                    </motion.div>
                  )}
                </button>
              </div>
            ))}
          </motion.div>

          {/* Right — Map + Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            {selected && (
              <div className="space-y-4">
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl h-48 sm:h-64 lg:h-96">
                  <img
                    src={selected.image}
                    alt={selected.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-950/60 to-transparent" />
                  
                  {/* Region Label */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <motion.div
                      key={selected.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <h3 className="text-4xl font-bold text-white mb-2 font-sora">{selected.name}</h3>
                      <p className="text-green-200 text-sm">{selected.description}</p>
                    </motion.div>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-6 right-6 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    📍 Atendimento
                  </div>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="bg-green-50 border border-green-200 rounded-xl p-4"
                  >
                    <div className="text-xs text-green-600 font-semibold uppercase mb-1">Região</div>
                    <div className="text-sm text-green-900 font-medium">
                      {selected.name}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="bg-amber-50 border border-amber-200 rounded-xl p-4"
                  >
                    <div className="text-xs text-amber-600 font-semibold uppercase mb-1">Cobertura</div>
                    <div className="text-sm text-amber-900 font-medium">
                      Completa
                    </div>
                  </motion.div>
                </div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="bg-gradient-to-r from-green-50 to-amber-50 border border-green-200 rounded-xl p-4"
                >
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong className="text-green-800">Atendemos na região {selected.name.toLowerCase()}</strong> com todos os nossos serviços de regularização imobiliária, topografia e documentação. Clique no botão abaixo para solicitar uma avaliação gratuita.
                  </p>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Coverage Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-green-900/5 to-amber-500/5 border border-green-200/50 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-800 mb-2 font-sora">4+</div>
              <p className="text-gray-700">Regiões Atendidas</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2 font-sora">100%</div>
              <p className="text-gray-700">Santa Catarina</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-700 mb-2 font-sora">24h</div>
              <p className="text-gray-700">Resposta Garantida</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
