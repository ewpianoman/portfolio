import { useState } from 'react';
import { NavLink } from 'react-router-dom';

type ThemeMode = 'light' | 'dark';

type NavBarProps = {
  theme: ThemeMode;
  onToggleTheme: () => void;
};

export default function NavBar({ theme, onToggleTheme }: NavBarProps): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);

  const mainNavItems = [
    { to: '/', label: 'Home', end: true },
    { to: '/work', label: 'Work' },
    { to: '/writing', label: 'Writing' },
    { to: '/teaching', label: 'Teaching' },
    { to: '/about', label: 'About' },
  ];

  const secondaryNavItems = [
    { to: '/resume', label: 'Resume' },
    { to: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/ewpianoman/', label: 'LinkedIn', icon: 'fab fa-linkedin' },
    { href: 'https://github.com/ewpianoman', label: 'Github', icon: 'fab fa-github' },
  ];

  const mainNavClasses = ({ isActive }: { isActive: boolean }) =>
    `border-b-2 pb-1 uppercase tracking-wide transition-colors ${
      isActive ? 'border-primary !text-primary' : 'border-transparent text-subtleText hover:border-primary/40 hover:text-primary'
    }`;

  const secondaryNavClasses = () =>
    'inline-flex items-center rounded-md bg-primary px-3 py-1 text-white transition-colors hover:bg-primaryHover';

  const socialLinkClasses = 'text-subtleText hover:text-primary';

  const renderThemeToggle = (extraClasses = '') => (
    <button
      type="button"
      onClick={onToggleTheme}
      className={`relative inline-flex h-7 w-14 items-center rounded-full border border-border px-0.5 transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${
        theme === 'dark' ? 'bg-text/10' : 'bg-surface'
      } ${extraClasses}`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      aria-pressed={theme === 'dark'}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <span className="flex w-full items-center justify-between px-1 text-sm text-subtleText" aria-hidden="true">
        <i className="fa-solid fa-sun" />
        <i className="fa-solid fa-moon" />
      </span>
      <span
        className={`absolute top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm text-white shadow-sm transition-transform ${
          theme === 'dark' ? 'translate-x-7' : 'translate-x-0'
        }`}
        aria-hidden="true"
      >
        <i className={`fa-solid ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`} />
      </span>
    </button>
  );

  return (
    <header className="site-header">
      <div className="brand text-xl">Eric M. Wilson</div>
      <nav className="site-nav desktop-nav" aria-label="Primary navigation">
        {mainNavItems.map(({ to, label, end }) => (
          <NavLink
            key={label}
            to={to}
            end={end}
            className={mainNavClasses}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="nav-divider" />
      <div className="desktop-secondary-nav">
        {secondaryNavItems.map(({ to, label }) => (
          <NavLink
            key={label}
            to={to}
            className={secondaryNavClasses}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </NavLink>
        ))}
        <div className='flex gap-[--space-xs] items-center'>
        {socialLinks.map(({ href, label, icon }) => (
          <a key={label} href={href} title={label} className={socialLinkClasses} target="_blank" rel="noopener noreferrer">
            <i className={icon} />
          </a>
        ))}
        </div>
      </div>
      <div className="nav-actions">
        {renderThemeToggle('desktop-theme-toggle')}
        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
        </button>
      </div>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button
          type="button"
          className="mobile-menu-backdrop"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
        <div className="mobile-menu-panel">
          <div className="mobile-menu-header">
            {renderThemeToggle('mobile-theme-toggle')}
            <button
              type="button"
              className="mobile-menu-close"
              aria-label="Close navigation menu"
              onClick={() => setMenuOpen(false)}
            >
              <span aria-hidden="true">✕</span>
            </button>
          </div>
          <nav className="site-nav mobile-nav text-lg" aria-label="Mobile navigation">
            {mainNavItems.map(({ to, label, end }) => (
              <NavLink
                key={label}
                to={to}
                end={end}
                className={mainNavClasses}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="mobile-secondary-nav">
            <div className="mobile-secondary-links">
              {secondaryNavItems.map(({ to, label }) => (
                <NavLink
                  key={label}
                  to={to}
                  className={secondaryNavClasses}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              ))}
            </div>
            <div className="mobile-social-links">
              {socialLinks.map(({ href, label, icon }) => (
                <a key={label} href={href} title={label} className={socialLinkClasses} target="_blank" rel="noopener noreferrer">
                  <i className={icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
