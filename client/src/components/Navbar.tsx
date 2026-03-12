/**
 * Navbar — Navegação principal do site
 * Design: Warm Corporate / Boutique Imobiliária
 * Verde escuro com logo dourado, links brancos, sticky com blur
 */

import React, { useState, useEffect } from 'react';
import { useEdit } from '@/contexts/EditContext';
import { Menu, X, Phone } from 'lucide-react';

const LOGO_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663407591151/cjeRypioBkeuyiGMwLUAZi/Icone-Dourado-Sem-Fundo(1)_0462a54b.png';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export function Navbar() {
  const { content } = useEdit();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${content.whatsapp}?text=Olá! Gostaria de solicitar uma avaliação gratuita.`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-green-950/95 backdrop-blur-md shadow-lg shadow-green-950/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-green-800/50 flex items-center justify-center overflow-hidden border border-green-700/50">
              <img 
                src={LOGO_URL} 
                alt="Agilita Logo"
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <div>
              <div className="text-white font-bold text-sm leading-tight font-sora">AGILITÁ</div>
              <div className="text-amber-400 text-xs leading-tight tracking-wider">REGULARIZAÇÃO</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-green-200 hover:text-white text-sm font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA Phone */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href={`tel:${content.phone1.replace(/\D/g, '')}`}
              className="flex items-center gap-2 text-green-300 hover:text-white text-sm transition-colors"
            >
              <Phone size={14} />
              {content.phone1}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-amber-600/30 font-sora"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-950/98 backdrop-blur-md border-t border-green-800/50">
          <div className="container py-4 space-y-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-green-200 hover:text-white hover:bg-green-800/50 rounded-lg transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-green-800/50 mt-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-3 bg-amber-600 text-white font-semibold rounded-lg"
              >
                Fale pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
