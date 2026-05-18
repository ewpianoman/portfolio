import { NavLink, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="brand">Eric M. Wilson</div>
        <nav className="site-nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
      <main className="app-content">
        <Outlet />
      </main>
      <footer className="site-footer">
        <p>Built with React, React Router, and Vite.</p>
      </footer>
    </div>
  );
}
