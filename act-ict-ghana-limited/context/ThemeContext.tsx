import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const STORAGE_KEY = 'act-theme';

/**
 * The colours themselves live in index.css under [data-theme].
 * A small script in index.html sets data-theme before the page paints (no flash),
 * from the visitor's saved choice or their device's light/dark setting.
 */
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Always start "light" so server-rendered HTML and the first browser render match;
  // the real preference is applied right after.
  const [theme, setTheme] = useState<Theme>('light');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme');
    if (current === 'dark' || current === 'light') setTheme(current);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return; // don't overwrite the pre-paint choice before we've read it
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;
  }, [theme, ready]);

  const toggleTheme = () =>
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* storage blocked — the choice just won't be remembered */
      }
      return next;
    });

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
