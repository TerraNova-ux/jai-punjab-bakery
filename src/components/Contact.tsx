import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, ArrowRight } from 'lucide-react';
import { bakeryConfig } from '@/data/bakeryConfig';
import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const cfg = bakeryConfig;

  return (
    <section id="contact" className="section-pad bg-cream-100">
      <div className="container-bakery">
        <div className={`reveal ${visible ? 'is-visible' : ''} text-center mb-12`} ref={ref}>
          <p className="heading-eyebrow mb-3">Get in Touch</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-chocolate-600">
            Visit & Enquire
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-chocolate-500/90 font-light">
            We'd love to help with your next celebration. Reach out using the
            details below.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 max-w-5xl mx-auto">
          {/* Details card */}
          <div className="bg-cream-50 rounded-3xl p-7 sm:p-9 shadow-soft">
            <h3 className="font-serif text-2xl font-semibold text-chocolate-600 mb-6">
              {cfg.name}
            </h3>

            <ul className="space-y-5">
              {cfg.address && (
                <li className="flex gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-caramel-500/10 text-caramel-600">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-chocolate-400 mb-0.5">Address</p>
                    <p className="text-chocolate-600 font-light leading-relaxed">{cfg.address}</p>
                  </div>
                </li>
              )}

              {cfg.phone && (
                <li className="flex gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-caramel-500/10 text-caramel-600">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-chocolate-400 mb-0.5">Phone</p>
                    <a href={`tel:${cfg.phone}`} className="text-chocolate-600 font-light hover:text-caramel-600 transition">
                      {cfg.phone}
                    </a>
                  </div>
                </li>
              )}

              {cfg.email && (
                <li className="flex gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-caramel-500/10 text-caramel-600">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-chocolate-400 mb-0.5">Email</p>
                    <a href={`mailto:${cfg.email}`} className="text-chocolate-600 font-light hover:text-caramel-600 transition break-words">
                      {cfg.email}
                    </a>
                  </div>
                </li>
              )}

              <li className="flex gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-caramel-500/10 text-caramel-600">
                  <Clock className="h-5 w-5" />
                </span>
                <div className="w-full">
                  <p className="text-xs uppercase tracking-wider text-chocolate-400 mb-1">Opening Hours</p>
                  {cfg.openingHours.some((h) => h.hours) ? (
                    <ul className="space-y-0.5">
                      {cfg.openingHours.map((h) => (
                        <li key={h.days} className="flex justify-between gap-3 text-chocolate-600 font-light text-sm">
                          <span>{h.days}</span>
                          <span className="text-chocolate-500/80">{h.hours || '—'}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-chocolate-400/60 font-light text-sm italic">
                      Hours will be shown once verified.
                    </p>
                  )}
                </div>
              </li>
            </ul>

            {/* Social */}
            {(cfg.social.instagram || cfg.social.facebook || cfg.social.youtube) && (
              <div className="mt-7 flex gap-3">
                {cfg.social.instagram && (
                  <a href={cfg.social.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cream-200 text-chocolate-500 hover:bg-caramel-500 hover:text-cream-100 transition" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </a>
                )}
                {cfg.social.facebook && (
                  <a href={cfg.social.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cream-200 text-chocolate-500 hover:bg-caramel-500 hover:text-cream-100 transition" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </a>
                )}
                {cfg.social.youtube && (
                  <a href={cfg.social.youtube} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cream-200 text-chocolate-500 hover:bg-caramel-500 hover:text-cream-100 transition" aria-label="YouTube">
                    <Youtube className="h-5 w-5" />
                  </a>
                )}
              </div>
            )}

            {cfg.mapsLink && (
              <a href={cfg.mapsLink} target="_blank" rel="noopener noreferrer" className="btn-outline mt-7 w-full sm:w-auto">
                <MapPin className="h-4 w-4" />
                Get Directions
              </a>
            )}
          </div>

          {/* Enquiry callout */}
          <div className="relative bg-chocolate-600 text-cream-100 rounded-3xl p-7 sm:p-9 overflow-hidden flex flex-col justify-center">
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-caramel-500/15 blur-3xl" aria-hidden />
            <h3 className="font-serif text-3xl font-semibold relative">
              Planning a celebration?
            </h3>
            <p className="mt-4 text-cream-200/85 font-light leading-relaxed relative">
              Whether it's a birthday, anniversary or a casual craving, we'd love to
              hear from you. Enquire about availability and custom cake options.
            </p>

            {cfg.phone ? (
              <a href={`tel:${cfg.phone}`} className="btn-primary mt-8 w-full sm:w-auto relative">
                <Phone className="h-4 w-4" />
                Call to Enquire
              </a>
            ) : cfg.whatsapp ? (
              <a href={cfg.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 w-full sm:w-auto relative">
                Enquire on WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
            ) : cfg.email ? (
              <a href={`mailto:${cfg.email}`} className="btn-primary mt-8 w-full sm:w-auto relative">
                <Mail className="h-4 w-4" />
                Send an Enquiry
              </a>
            ) : (
              <p className="mt-6 text-cream-200/60 font-light text-sm italic relative">
                Contact details will appear here once verified.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
