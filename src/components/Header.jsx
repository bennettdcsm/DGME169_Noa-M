import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import navLinks from '../data/navLinks.json';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle('nav-menu-open', isMenuOpen);
    return () => document.body.classList.remove('nav-menu-open');
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const panelState = isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none';

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 px-5 py-4 backdrop-blur-2xl sm:px-8 lg:px-24">
      <nav className="relative flex items-center justify-between gap-4">
        <div className="text-lg font-semibold uppercase tracking-[0.35em]">Noa Tomas</div>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className={`nav-toggle-btn lg:hidden ${isMenuOpen ? 'is-open' : ''}`}
        >
          <span />
          <span />
          <span />
          <span />
        </button>
        <div
          className={`flex flex-col gap-3 rounded-3xl border border-white/10 bg-slate-900/95 p-4 text-center shadow-[0_25px_60px_rgba(0,0,0,0.7)] transition-all duration-200 ${panelState} absolute left-0 right-0 top-[calc(100%+0.75rem)] lg:static lg:flex-row lg:items-center lg:gap-2 lg:border-0 lg:bg-transparent lg:p-0 lg:opacity-100 lg:translate-y-0 lg:shadow-none lg:pointer-events-auto`}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition ${
                  isActive
                    ? 'border-white/40 bg-white/25 text-white'
                    : 'border-transparent bg-white/5 text-white/80 hover:border-white/25 hover:bg-white/15'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
