import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');
  
  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  
  useEffect(() => {
    // Set data-theme attribute on documentElement for CSS variable selection
    document.documentElement.setAttribute('data-theme', theme);
    
    // Set CSS variables dynamically
    const root = document.documentElement.style;
    if (theme === 'dark') {
      root.setProperty('--bg-primary', '#0A1628');
      root.setProperty('--bg-secondary', '#060F1E');
      root.setProperty('--bg-surface', '#0F2137');
      root.setProperty('--bg-elevated', '#1E3A5F');
      root.setProperty('--text-primary', '#E8EFF8');
      root.setProperty('--text-secondary', '#7A9ABD');
      root.setProperty('--text-heading', '#ffffff');
      root.setProperty('--border-color', '#1E3A5F');
      root.setProperty('--card-shadow', '0 4px 24px rgba(0,0,0,0.3)');
      root.setProperty('--logo-filter', 'brightness(0) invert(1)');
    } else {
      root.setProperty('--bg-primary', '#ffffff');
      root.setProperty('--bg-secondary', '#f8fafc');
      root.setProperty('--bg-surface', '#f1f5f9');
      root.setProperty('--bg-elevated', '#e2e8f0');
      root.setProperty('--text-primary', '#111827');
      root.setProperty('--text-secondary', '#4B5563');
      root.setProperty('--text-heading', '#0f172a');
      root.setProperty('--border-color', '#e2e8f0');
      root.setProperty('--card-shadow', '0 4px 24px rgba(0,0,0,0.08)');
      root.setProperty('--logo-filter', 'none');
    }
    
    // Set body styles
    document.body.style.backgroundColor = theme === 'dark' ? '#0A1628' : '#ffffff';
    document.body.style.color = theme === 'dark' ? '#E8EFF8' : '#111827';
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be inside ThemeProvider');
  return ctx;
};
