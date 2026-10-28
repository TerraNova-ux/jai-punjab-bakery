import { MapPin, Navigation } from 'lucide-react';
import { bakeryConfig } from '@/data/bakeryConfig';
import { useReveal } from '@/hooks/useReveal';

export default function LocationMap() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const cfg = bakeryConfig;

  if (!cfg.address || !cfg.mapsLink) return null;

  return (
    <section id="location" className="section-pad bg-cream-50">
      <div className="container-bakery">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-stretch`}
        >
          <div className="flex flex-col justify-center min-w-0 rounded-3xl bg-cream-100 p-7 sm:p-9 shadow-soft">
            <p className="heading-eyebrow mb-3">Visit Us</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-chocolate-600">
              Come Find Us
            </h2>

            <div className="mt-6 flex gap-4">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-caramel-500/10 text-caramel-600">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="font-serif text-xl font-semibold text-chocolate-600">{cfg.name}</p>
                <p className="mt-1 text-chocolate-500/90 font-light leading-relaxed break-words">
                  {cfg.address}
                </p>
              </div>
            </div>

            <a
              href={cfg.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 w-full sm:w-auto"
            >
              <Navigation className="h-4 w-4" aria-hidden />
              Get Directions
            </a>
          </div>

          <div className="relative min-w-0 min-h-[300px] sm:min-h-[380px] lg:min-h-[420px] overflow-hidden rounded-3xl bg-cream-200 shadow-card">
            <svg
              className="absolute inset-0 h-full w-full text-caramel-500/25"
              viewBox="0 0 600 420"
              preserveAspectRatio="xMidYMid slice"
              fill="none"
              stroke="currentColor"
              strokeWidth="14"
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M-20 90 C 140 60, 260 140, 380 110 S 600 80, 640 120" />
              <path d="M-20 300 C 120 260, 220 340, 360 300 S 540 260, 640 320" />
              <path d="M170 -20 C 190 120, 130 240, 170 440" />
              <path d="M430 -20 C 410 140, 470 280, 440 440" />
              <path d="M-20 200 L 640 210" strokeWidth="6" />
              <path d="M300 -20 L 310 440" strokeWidth="6" />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
              <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-caramel-500 text-cream-100 shadow-card">
                <MapPin className="h-7 w-7" aria-hidden />
                <span className="absolute inset-0 rounded-full bg-caramel-500/30 animate-ping" aria-hidden />
              </span>
              <div className="rounded-2xl bg-cream-100/95 px-5 py-3 shadow-soft backdrop-blur-sm">
                <p className="font-serif text-lg font-semibold text-chocolate-600">{cfg.name}</p>
                <p className="text-sm font-light text-chocolate-500">Mansa, Punjab</p>
              </div>
              <a
                href={cfg.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-chocolate-600 px-5 py-2.5 text-sm font-medium text-cream-100 transition-colors hover:bg-chocolate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel-500"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
