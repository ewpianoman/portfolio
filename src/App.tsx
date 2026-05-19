import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ScrollOverlay from './components/ScrollOverlay';

type ThemeMode = 'light' | 'dark';

export default function App(): JSX.Element {
  const [theme, setTheme] = useState<ThemeMode>('light');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme =
      savedTheme === 'dark' || savedTheme === 'light'
        ? (savedTheme as ThemeMode)
        : prefersDark
        ? 'dark'
        : 'light';
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('theme-dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('theme-dark');
      window.localStorage.setItem('theme', 'light');
    }
  }, [theme]);
  return (
    <div className="app-shell min-h-screen bg-background text-text">
      <ScrollOverlay />
      <NavBar theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main className="app-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
