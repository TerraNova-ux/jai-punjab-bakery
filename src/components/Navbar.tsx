import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { bakeryConfig } from '@/data/bakeryConfig';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Celebration Cakes', href: '#cakes' },
  { label: 'Our Story', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-300 ${
          scrolled
            ? 'bg-cream-100/95 backdrop-blur-md shadow-soft'
            : 'bg-cream-100/90 backdrop-blur-sm'
        }`}
      >
        <nav
          className="container-bakery flex items-center justify-between gap-4 py-3 sm:py-3.5"
          aria-label="Primary"
        >
          <a
            href="#home"
            onClick={close}
            className="min-w-0 truncate font-serif text-lg sm:text-2xl font-semibold text-chocolate-600 tracking-tight"
          >
            {bakeryConfig.name}
          </a>

          <ul className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-chocolate-500 hover:text-caramel-600 transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-caramel-500 after:transition-all hover:after:w-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2">
            <a href="#contact" className="btn-primary hidden sm:inline-flex lg:hidden px-5 py-2.5 text-sm">
              Enquire Now
            </a>
            <a href="#contact" className="btn-primary hidden lg:inline-flex">
              Enquire Now
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-full text-chocolate-600 hover:bg-cream-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel-500"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-0 z-[60] bg-chocolate-600/40 backdrop-blur-sm"
          onClick={close}
        >
          <aside
            className="absolute right-0 top-0 flex h-dvh w-[82%] max-w-xs flex-col bg-cream-100 shadow-card animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex min-h-[4rem] shrink-0 items-center justify-between gap-3 border-b border-cream-300 pl-5 pr-3 pt-[env(safe-area-inset-top)]">
              <a
                href="#home"
                onClick={close}
                className="min-w-0 truncate font-serif text-lg font-semibold text-chocolate-600"
              >
                {bakeryConfig.name}
              </a>
              <button
                type="button"
                onClick={close}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-chocolate-600 transition-colors hover:bg-cream-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel-500"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" aria-hidden />
              </button>
            </div>

            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={close}
                      className="block rounded-xl px-4 py-3.5 text-base font-medium text-chocolate-600 transition-colors hover:bg-cream-200 hover:text-caramel-600 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-caramel-500"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="shrink-0 border-t border-cream-300 p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))]">
              <a href="#contact" onClick={close} className="btn-primary w-full">
                Enquire Now
              </a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
