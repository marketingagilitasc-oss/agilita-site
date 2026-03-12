/**
 * EditableField — Campo de texto editável inline
 * Design: Warm Corporate / Boutique Imobiliária
 * Exibe texto normal fora do modo edição, campo editável no modo edição
 */

import React, { useRef, useEffect } from 'react';
import { useEdit } from '@/contexts/EditContext';
import type { SiteContent } from '@/contexts/EditContext';

interface EditableFieldProps {
  field: keyof SiteContent;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  multiline?: boolean;
}

export function EditableField({ 
  field, 
  className = '', 
  tag: Tag = 'span',
  multiline = false 
}: EditableFieldProps) {
  const { content, isEditMode, updateContent } = useEdit();
  const ref = useRef<HTMLElement>(null);
  const value = content[field];

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = value;
    }
  }, [value, isEditMode]);

  if (!isEditMode) {
    return <Tag className={className}>{value}</Tag>;
  }

  return (
    <Tag
      ref={ref as any}
      className={`${className} outline-none border-b-2 border-dashed border-amber-500 focus:border-amber-400 focus:bg-amber-50/10 rounded-sm px-1 transition-all`}
      contentEditable
      suppressContentEditableWarning
      onBlur={(e) => {
        const text = e.currentTarget.textContent || '';
        updateContent(field, text);
      }}
      data-editable="true"
      title={`Clique para editar: ${field}`}
    >
      {value}
    </Tag>
  );
}
