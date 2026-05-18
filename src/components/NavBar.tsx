import { NavLink } from 'react-router-dom';

type ThemeMode = 'light' | 'dark';

type NavBarProps = {
  theme: ThemeMode;
  onToggleTheme: () => void;
};

export default function NavBar({ theme, onToggleTheme }: NavBarProps): JSX.Element {
  const navClasses = ({ isActive }: { isActive: boolean }) =>
    `${isActive ? 'text-primary' : 'text-subtleText'} hover:text-primary`;

  return (
    <header className="site-header">
      <div className="brand text-xl">Eric M. Wilson</div>
      <nav className="site-nav text-sm">
        <NavLink to="/" end className={navClasses}>
          Home
        </NavLink>
        <NavLink to="/about" className={navClasses}>
          About
        </NavLink>
        <NavLink to="/work" className={navClasses}>
          Work
        </NavLink>
        <NavLink to="/contact" className={navClasses}>
          Contact
        </NavLink>
      </nav>
      <button
        type="button"
        onClick={onToggleTheme}
        className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-text transition hover:border-primary hover:text-primary"
      >
        {theme === 'dark' ? 'Light mode' : 'Dark mode'}
      </button>
    </header>
  );
}
