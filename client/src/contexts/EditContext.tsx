/**
 * EditContext — Painel de edição de conteúdo do site
 * Design: Warm Corporate / Boutique Imobiliária
 * Permite ao dono do site editar textos, contatos e informações diretamente na interface
 */

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

export interface SiteContent {
  // Hero
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroCta: string;
  
  // About
  aboutTitle: string;
  aboutText: string;
  
  // Stats
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
  stat3Value: string;
  stat3Label: string;
  
  // Contact
  phone1: string;
  phone2: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  
  // Company
  companyName: string;
  tagline: string;
}

const defaultContent: SiteContent = {
  heroTitle: 'Regularize seu Imóvel com Segurança e Agilidade',
  heroSubtitle: 'Especialistas em documentação imobiliária, escritura, registro e regularização completa.',
  heroDescription: 'Nossa equipe especializada cuida de todo o processo para você, com segurança jurídica, agilidade e transparência.',
  heroCta: 'Solicite uma Avaliação Gratuita',
  
  aboutTitle: 'Por que escolher a Agilita?',
  aboutText: 'Somos especialistas em regularização de imóveis em Penha e região. Com anos de experiência, oferecemos atendimento personalizado, análise documental completa e acompanhamento até a regularização final.',
  
  stat1Value: '500+',
  stat1Label: 'Imóveis Regularizados',
  stat2Value: '10+',
  stat2Label: 'Anos de Experiência',
  stat3Value: '100%',
  stat3Label: 'Clientes Satisfeitos',
  
  phone1: '(47) 3170-3721',
  phone2: '(47) 99228-5734',
  whatsapp: '5547992285734',
  email: 'contato@agilitaregularizacao.com.br',
  address: 'Rua Alexandre Lima Vieira, 82',
  city: 'Penha - Santa Catarina - 88385-000',
  
  companyName: 'Agilita Regularização',
  tagline: 'Regularização de Imóveis',
};

interface EditContextType {
  content: SiteContent;
  isEditMode: boolean;
  toggleEditMode: () => void;
  updateContent: (key: keyof SiteContent, value: string) => void;
  saveContent: () => void;
  resetContent: () => void;
  hasUnsavedChanges: boolean;
}

const EditContext = createContext<EditContextType | null>(null);

const STORAGE_KEY = 'agilita_site_content';

export function EditProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<SiteContent>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...defaultContent, ...JSON.parse(saved) };
      }
    } catch {}
    return defaultContent;
  });
  
  const [isEditMode, setIsEditMode] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const toggleEditMode = useCallback(() => {
    setIsEditMode(prev => !prev);
  }, []);

  const updateContent = useCallback((key: keyof SiteContent, value: string) => {
    setContent(prev => ({ ...prev, [key]: value }));
    setHasUnsavedChanges(true);
  }, []);

  const saveContent = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
      setHasUnsavedChanges(false);
    } catch {}
  }, [content]);

  const resetContent = useCallback(() => {
    setContent(defaultContent);
    localStorage.removeItem(STORAGE_KEY);
    setHasUnsavedChanges(false);
  }, []);

  return (
    <EditContext.Provider value={{
      content,
      isEditMode,
      toggleEditMode,
      updateContent,
      saveContent,
      resetContent,
      hasUnsavedChanges,
    }}>
      {children}
    </EditContext.Provider>
  );
}

export function useEdit() {
  const ctx = useContext(EditContext);
  if (!ctx) throw new Error('useEdit must be used within EditProvider');
  return ctx;
}

export { defaultContent };
