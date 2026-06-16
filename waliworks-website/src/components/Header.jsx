import { useState } from 'react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Workflow' },
  { href: '#before-after', label: 'Process' },
  { href: '#contact', label: 'Contact' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100/80 bg-[#f7fbff]/88 backdrop-blur-xl">
      <nav
        className="mx-auto flex min-h-16 w-[calc(100%_-_2rem)] max-w-[1120px] items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          className="group inline-flex items-center gap-3"
          href="#home"
          onClick={closeMenu}
          aria-label="Waliworks home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-md bg-[#071f45] text-sm font-black text-white shadow-[0_10px_24px_rgba(7,31,69,0.18)] transition group-hover:bg-blue-600">
            W
          </span>
          <span className="text-sm font-black uppercase tracking-[0.14em] text-[#071f45]">Waliworks</span>
        </a>

        <button
          className="grid h-11 w-11 place-items-center rounded-md border border-blue-100 bg-white text-[#071f45] shadow-sm md:hidden"
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
          className={`absolute left-4 right-4 top-16 grid overflow-hidden rounded-lg border bg-white shadow-2xl shadow-blue-950/10 transition-all md:static md:flex md:max-h-none md:items-center md:gap-7 md:overflow-visible md:border-0 md:bg-transparent md:shadow-none ${
            isMenuOpen ? 'max-h-96 border-blue-100' : 'max-h-0 border-transparent md:max-h-none'
          }`}
        >
          {navLinks.map((link) => (
            <a
              className="border-b border-blue-50 px-5 py-4 text-xs font-extrabold text-slate-600 transition hover:text-blue-600 md:border-0 md:p-0"
              key={link.href}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            className="m-4 inline-flex min-h-10 items-center justify-center rounded-md bg-blue-600 px-4 text-xs font-black text-white shadow-[0_12px_24px_rgba(37,99,235,0.24)] transition hover:-translate-y-0.5 hover:bg-blue-500 md:m-0"
            href="#contact"
            onClick={closeMenu}
          >
            Book Service
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
