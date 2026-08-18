import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { navLinks } from '../data/profile';
import useTheme from '../hooks/useTheme';
import './Navbar.css';

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <button className="navbar__brand" onClick={() => handleClick('home')}>
          <span className="navbar__mark">SK</span>
          <span className="navbar__name">Senuri<span className="gradient-text">.</span></span>
        </button>

        <nav className="navbar__links">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`navbar__link ${active === link.id ? 'is-active' : ''}`}
              onClick={() => handleClick(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button className="navbar__cta btn btn-primary" onClick={() => handleClick('contact')}>
          Let's talk
        </button>

        <button
          className="navbar__theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <FiSun /> : <FiMoon />}
        </button>

        <button
          className={`navbar__burger ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`navbar__mobile ${open ? 'is-open' : ''}`}>
        {navLinks.map((link) => (
          <button
            key={link.id}
            className={`navbar__mobile-link ${active === link.id ? 'is-active' : ''}`}
            onClick={() => handleClick(link.id)}
          >
            {link.label}
          </button>
        ))}
        <button className="navbar__mobile-link navbar__mobile-theme" onClick={toggleTheme}>
          {theme === 'dark' ? <FiSun /> : <FiMoon />}
          Switch to {theme === 'dark' ? 'light' : 'dark'} mode
        </button>
      </div>
    </header>
  );
}
