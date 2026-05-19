import { NavLink } from 'react-router-dom';
import signatureWordmark from '../../images/Eric Wilson Signatures SVG __.svg';

export default function Footer(): JSX.Element {
  const navLinks = [
    { to: '/', label: 'Home', end: true },
    { to: '/work', label: 'Work' },
    { to: '/writing', label: 'Writing' },
    { to: '/teaching', label: 'Teaching' },
    { to: '/about', label: 'About' },
  ];

  const footerActions = [
    { to: '/resume', label: 'Resume' },
    { to: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/ewpianoman/', label: 'LinkedIn', icon: 'fab fa-linkedin' },
    { href: 'https://github.com/ewpianoman', label: 'Github', icon: 'fab fa-github' },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-body">
          <div className="footer-brand">
            <span className="footer-eyebrow">Eric Wilson</span>
            <img src={signatureWordmark} alt="Eric M. Wilson signature" className="footer-signature" />
            <p className="footer-tagline">Builder &middot; Musician &middot; Educator &middot; Writer &middot; Thinker</p>
            <div className="footer-actions">
              {footerActions.map(({ to, label }) => (
                <NavLink key={label} to={to} className="footer-action-button">
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="footer-nav">
            <span className="footer-eyebrow">Navigate</span>
            <ul className="footer-nav-list">
              {navLinks.map(({ to, label, end }) => (
                <li key={label}>
                  <NavLink to={to} end={end} className="footer-link">{label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-connect">
            <span className="footer-eyebrow">Connect</span>
            <div className="footer-social">
              {socialLinks.map(({ href, label, icon }) => (
                <a key={label} href={href} title={label} className="footer-social-link" target="_blank" rel="noopener noreferrer">
                  <i className={icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Eric M. Wilson &middot; All rights reserved</span>
          <span className="footer-domain"><a href="https://ericwilson.work" target="_blank" rel="noopener noreferrer">ericwilson.work</a></span>
        </div>
      </div>
    </footer>
  );
}

