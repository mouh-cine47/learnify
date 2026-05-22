import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();
const THEME_KEY = 'theme';

const isValidTheme = (v) => v === 'dark' || v === 'light';

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = typeof window !== 'undefined' ? localStorage.getItem(THEME_KEY) : null;
      return isValidTheme(saved) ? saved : 'light';
    } catch (err) {
      return 'light';
    }
  });

  const isDark = theme === 'dark';

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add('dark');
    else root.classList.remove('dark');

    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (err) {
      // ignore storage failures (e.g., blocked in some browsers)
    }
  }, [isDark, theme]);

  // On mount: ensure stored value is valid and log applied theme in dev
  useEffect(() => {
    let source = 'default';
    try {
      const saved = typeof window !== 'undefined' ? localStorage.getItem(THEME_KEY) : null;
      if (isValidTheme(saved) && saved !== theme) {
        setTheme(saved);
        source = 'persisted';
      } else if (isValidTheme(saved)) {
        source = 'persisted';
      }
    } catch (err) {
      // ignore
    }

    if (import.meta.env.DEV) {
      // Dev-only log to aid debugging theme/persistence issues
      // eslint-disable-next-line no-console
      console.log(`[ThemeContext] applied theme=${theme} source=${source}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
