import { Instagram, Facebook, Youtube } from 'lucide-react';
import { bakeryConfig } from '@/data/bakeryConfig';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Celebration Cakes', href: '#cakes' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const cfg = bakeryConfig;

  return (
    <footer className="bg-chocolate-700 text-cream-200">
      <div className="container-bakery py-12 sm:py-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl font-semibold text-cream-100">
              {cfg.name}
            </p>
            <p className="mt-2 text-sm text-cream-200/70 font-light max-w-xs leading-relaxed">
              {cfg.location} — a warm bakery experience for everyday treats and
              celebration cakes.
            </p>
            {(cfg.social.instagram || cfg.social.facebook || cfg.social.youtube) && (
              <div className="mt-5 flex gap-3">
                {cfg.social.instagram && (
                  <a href={cfg.social.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cream-100/10 hover:bg-caramel-500 transition text-cream-100" aria-label="Instagram">
                    <Instagram className="h-[18px] w-[18px]" />
                  </a>
                )}
                {cfg.social.facebook && (
                  <a href={cfg.social.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cream-100/10 hover:bg-caramel-500 transition text-cream-100" aria-label="Facebook">
                    <Facebook className="h-[18px] w-[18px]" />
                  </a>
                )}
                {cfg.social.youtube && (
                  <a href={cfg.social.youtube} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cream-100/10 hover:bg-caramel-500 transition text-cream-100" aria-label="YouTube">
                    <Youtube className="h-[18px] w-[18px]" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Links */}
          <div className="sm:justify-self-center">
            <p className="text-xs uppercase tracking-wider text-cream-200/60 mb-4">Explore</p>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-cream-200/85 hover:text-caramel-300 transition font-light">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-wider text-cream-200/60 mb-4">Contact</p>
            <ul className="space-y-2.5 text-sm">
              {cfg.address && (
                <li className="text-cream-200/85 font-light">{cfg.address}</li>
              )}
              {cfg.phone && (
                <li>
                  <a href={`tel:${cfg.phone}`} className="text-cream-200/85 hover:text-caramel-300 transition font-light">
                    {cfg.phone}
                  </a>
                </li>
              )}
              {cfg.email && (
                <li className="break-words">
                  <a href={`mailto:${cfg.email}`} className="text-cream-200/85 hover:text-caramel-300 transition font-light">
                    {cfg.email}
                  </a>
                </li>
              )}
              {!cfg.address && !cfg.phone && !cfg.email && (
                <li className="text-cream-200/55 font-light italic">
                  Contact details will be shown once verified.
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cream-100/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-cream-200/60 font-light">
            &copy; {year} {cfg.name}. All rights reserved.
          </p>
          <p className="text-xs text-cream-200/50 font-light">
            {cfg.attribution} · Independent concept, not an official website.
          </p>
        </div>
      </div>
    </footer>
  );
}
