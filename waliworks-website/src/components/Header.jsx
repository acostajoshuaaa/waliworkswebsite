import { useState } from 'react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Our Work' },
  { href: '#before-after', label: 'Before & After' },
  { href: '#contact', label: 'Contact' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex min-h-20 w-[min(1120px,calc(100%-2rem))] items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          className="group inline-flex items-center gap-3"
          href="#home"
          onClick={closeMenu}
          aria-label="Waliworks home"
        >
          <span className="flex h-12 w-20 items-center justify-center overflow-hidden rounded-md border border-white/10 bg-black transition group-hover:border-amber-300 sm:w-24">
            <img className="h-full w-full object-cover" src="/logo.svg" alt="" />
          </span>
          <span className="text-xl font-black uppercase tracking-wide text-white">Waliworks</span>
        </a>

        <button
          className="grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-white/5 text-white md:hidden"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`}
            ></span>
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? 'opacity-0' : ''}`}
            ></span>
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}
            ></span>
          </span>
        </button>

        <div
          className={`absolute left-4 right-4 top-20 grid overflow-hidden rounded-lg border bg-neutral-950 shadow-2xl shadow-black/40 transition-all md:static md:flex md:max-h-none md:items-center md:gap-7 md:overflow-visible md:border-0 md:bg-transparent md:shadow-none ${
            isMenuOpen ? 'max-h-96 border-white/10' : 'max-h-0 border-transparent md:max-h-none'
          }`}
        >
          {navLinks.map((link) => (
            <a
              className="border-b border-white/10 px-5 py-4 text-sm font-bold text-zinc-300 transition hover:text-amber-300 md:border-0 md:p-0"
              key={link.href}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
