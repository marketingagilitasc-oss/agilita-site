/**
 * Footer — Rodapé do site
 * Design: Warm Corporate / Boutique Imobiliária
 * Verde muito escuro com logo, links e informações de contato
 */

import React from 'react';
import { useEdit } from '@/contexts/EditContext';
import { EditableField } from './EditableField';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const LOGO_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663407591151/cjeRypioBkeuyiGMwLUAZi/Icone-Dourado-Sem-Fundo(1)_0462a54b.png';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

const serviceLinks = [
  'Georreferenciamento',
  'Levantamento Topográfico',
  'Regularização de Imóveis',
  'Escrituras',
  'Desmembramentos',
  'REURB',
];

export function Footer() {
  const { content } = useEdit();
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#0a1f12' }} className="text-green-300">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-green-800/50 flex items-center justify-center overflow-hidden border border-green-700/50">
                <img 
                  src={LOGO_URL} 
                  alt="Agilita Logo"
                  className="w-8 h-8 object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              <div>
                <div className="text-white font-bold text-sm font-sora">AGILITÁ</div>
                <div className="text-amber-400 text-xs tracking-wider">REGULARIZAÇÃO</div>
              </div>
            </div>
            <p className="text-green-500 text-sm leading-relaxed mb-6">
              Especialistas em regularização de imóveis, topografia e documentação imobiliária em Penha, Santa Catarina.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-green-800/50 border border-green-700/50 flex items-center justify-center text-green-400 hover:text-white hover:border-green-500 transition-all">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-green-800/50 border border-green-700/50 flex items-center justify-center text-green-400 hover:text-white hover:border-green-500 transition-all">
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-4 font-sora text-sm uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-green-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4 font-sora text-sm uppercase tracking-wider">Serviços</h4>
            <ul className="space-y-2">
              {serviceLinks.map(s => (
                <li key={s}>
                  <a href="#servicos" className="text-green-400 hover:text-white transition-colors text-sm">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 font-sora text-sm uppercase tracking-wider">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone size={14} className="text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <div className="text-green-300"><EditableField field="phone1" tag="span" /></div>
                  <div className="text-green-400"><EditableField field="phone2" tag="span" /></div>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={14} className="text-amber-400 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${content.email}`} className="text-sm text-green-300 hover:text-white transition-colors break-all">
                  <EditableField field="email" tag="span" />
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <div className="text-green-300"><EditableField field="address" tag="span" /></div>
                  <div className="text-green-400"><EditableField field="city" tag="span" /></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-green-900/80">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-green-600 text-xs">
            © {year} <EditableField field="companyName" tag="span" className="text-green-500" />. Todos os direitos reservados.
          </p>
          <p className="text-green-700 text-xs">
            Penha — Santa Catarina — Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
