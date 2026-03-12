/**
 * ServicesSection — Seção de serviços oferecidos
 * Design: Warm Corporate / Boutique Imobiliária
 * Grid de cards com borda dourada esquerda, ícones verdes, hover suave
 */

import React, { useState } from 'react';
import { useEdit } from '@/contexts/EditContext';
import { motion } from 'framer-motion';
import { 
  Compass, Home, Leaf, Scissors, FileText, Map, BarChart2,
  Building, Scale, Wrench, Mountain, CheckSquare, Users2,
  RotateCcw, Merge, ArrowRight, ChevronDown, ChevronUp
} from 'lucide-react';

const TOPO_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663407591151/cjeRypioBkeuyiGMwLUAZi/topography-field-5wo2CkdGvfFCgb5BnzogRR.webp';
const DOCS_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663407591151/cjeRypioBkeuyiGMwLUAZi/DWHRGU5BG4SJ_9d1f5aa5.jpg';
const URBAN_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663407591151/cjeRypioBkeuyiGMwLUAZi/urban-aerial-nVazmHV8FvtRJEr2L4Qhty.webp';

const services = [
  {
    icon: <Compass size={22} />,
    title: 'Abertura de Rumos',
    desc: 'Identificação correta das divisas de propriedades rurais e urbanas com equipamentos modernos, garantindo precisão e segurança jurídica.',
  },
  {
    icon: <Home size={22} />,
    title: 'Assessoria Imobiliária',
    desc: 'Assessoria completa para compra ou venda de imóvel com segurança. Análise documental, avaliação de riscos e orientação em cada etapa.',
  },
  {
    icon: <Leaf size={22} />,
    title: 'Cadastro Ambiental Rural (CAR)',
    desc: 'Registro obrigatório para imóveis rurais. Essencial para regularização, licenças, crédito agrícola e benefícios tributários.',
  },
  {
    icon: <Scissors size={22} />,
    title: 'Desmembramentos',
    desc: 'Desmembramento completo de imóveis, desde o levantamento técnico até a regularização final no cartório.',
  },
  {
    icon: <FileText size={22} />,
    title: 'Escrituras',
    desc: 'Escritura Pública para compra e venda, doação, permuta, usufruto e inventários com segurança e transparência.',
  },
  {
    icon: <Map size={22} />,
    title: 'Georreferenciamento',
    desc: 'Georreferenciamento conforme a Lei 10.267, atendendo às exigências de cartórios e órgãos públicos.',
  },
  {
    icon: <BarChart2 size={22} />,
    title: 'Levantamento Topográfico',
    desc: 'Ponto de partida para projetos de engenharia e arquitetura. Medição, detalhamento e demarcação do terreno com exatidão.',
  },
  {
    icon: <Building size={22} />,
    title: 'Loteamentos e Condomínios',
    desc: 'Planejamento de loteamentos, condomínios e incorporações com foco em aproveitamento inteligente e valorização.',
  },
  {
    icon: <Scale size={22} />,
    title: 'Projeto de Usucapião',
    desc: 'Levantamento topográfico georreferenciado para o processo de usucapião, definindo com precisão a área ocupada.',
  },
  {
    icon: <Wrench size={22} />,
    title: 'Projetos de Engenharia e Arquitetura',
    desc: 'Projetos completos para residências, comércios, indústrias e reformas com redução de custos e otimização de espaços.',
  },
  {
    icon: <Mountain size={22} />,
    title: 'Projetos de Terraplanagem',
    desc: 'Planejamento técnico de terraplanagem com base em estudos topográficos para garantir segurança e estabilidade.',
  },
  {
    icon: <CheckSquare size={22} />,
    title: 'Regularização de Imóveis',
    desc: 'Regularização junto à Prefeitura e órgãos competentes para construir, averbar, desmembrar ou legalizar edificações.',
  },
  {
    icon: <Users2 size={22} />,
    title: 'Regularização Fundiária (REURB)',
    desc: 'Transformação de áreas informais em bairros regularizados, garantindo escritura, moradia digna e serviços essenciais.',
  },
  {
    icon: <RotateCcw size={22} />,
    title: 'Retificação de Área',
    desc: 'Quando as medidas do terreno não conferem com a matrícula, realizamos a retificação completa com segurança jurídica.',
  },
  {
    icon: <Merge size={22} />,
    title: 'Unificações',
    desc: 'Unificação de imóveis contíguos em uma única matrícula, reduzindo taxas e impostos como IPTU e ITBI.',
  },
];

export function ServicesSection() {
  const { content } = useEdit();
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, 6);

  const whatsappUrl = `https://wa.me/${content.whatsapp}?text=Olá! Tenho interesse em saber mais sobre os serviços da Agilita.`;

  return (
    <section id="servicos" className="py-24 bg-gray-50">
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
            O que fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-900 mb-4 font-sora">
            Nossos Serviços
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Soluções completas em regularização imobiliária, topografia e documentação para imóveis rurais e urbanos.
          </p>
        </motion.div>

        {/* Feature Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {[
            { img: TOPO_IMG, title: 'Topografia & Georreferenciamento', desc: 'Precisão técnica no campo com equipamentos de última geração' },
            { img: DOCS_IMG, title: 'Documentação Imobiliária', desc: 'Escrituras, matrículas e registros com segurança jurídica' },
            { img: URBAN_IMG, title: 'Regularização Urbana', desc: 'REURB e regularização fundiária para toda a região' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden h-40 sm:h-56 group cursor-pointer"
            >
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 via-green-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
                <h3 className="text-white font-bold text-base sm:text-lg font-sora mb-1">{item.title}</h3>
                <p className="text-green-200 text-xs sm:text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {visibleServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.08, duration: 0.5 }}
              className="service-card bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-700 flex-shrink-0 mt-0.5">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-bold text-green-900 mb-2 font-sora text-sm sm:text-base">{service.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More / Less */}
        <div className="text-center mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-semibold rounded-xl transition-all text-sm sm:text-base w-full sm:w-auto"
          >
            {showAll ? (
              <><ChevronUp size={16} /> Ver menos</>
            ) : (
              <><ChevronDown size={16} /> Ver todos ({services.length})</>
            )}
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-green-800 hover:bg-green-700 text-white font-semibold rounded-xl transition-all hover:shadow-lg text-sm sm:text-base w-full sm:w-auto"
          >
            Solicitar Serviço
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
