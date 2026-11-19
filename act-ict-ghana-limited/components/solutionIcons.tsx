import React from 'react';
import { Network, ShieldCheck, Eye, Zap, type LucideIcon } from 'lucide-react';

// Only the icons the content actually uses — importing all of lucide-react added ~1 MB.
const ICONS: Record<string, LucideIcon> = { Network, ShieldCheck, Eye, Zap };

export const getSolutionIcon = (name: string, size: number) => {
  const Icon = ICONS[name] ?? Zap;
  return <Icon size={size} aria-hidden="true" />;
};
