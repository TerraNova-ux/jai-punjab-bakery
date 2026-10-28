import { useEffect, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '@/data/products';
import { useReveal } from '@/hooks/useReveal';

const spanClass: Record<string, string> = {
  wide: 'sm:col-span-2 sm:row-span-1',
  tall: 'sm:row-span-2',
  normal: '',
};

export default function Gallery() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % galleryImages.length)),
    []
  );
  const prev = useCallback(
    () =>
      setActive((i) =>
        i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length
      ),
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close, next, prev]);

  return (
    <section id="gallery" className="section-pad bg-cream-100">
      <div className="container-bakery">
        <div className={`reveal ${visible ? 'is-visible' : ''} text-center mb-12`} ref={ref}>
          <p className="heading-eyebrow mb-3">A Visual Feast</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-chocolate-600">
            Gallery
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-chocolate-500/90 font-light">
            A collection of bakery moments — tap any photo to view it larger.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[150px] sm:auto-rows-[200px] gap-3 sm:gap-4">
          {galleryImages.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-card transition-all ${spanClass[img.span]}`}
              aria-label={`Open image: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-chocolate-600/0 group-hover:bg-chocolate-600/20 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[60] bg-chocolate-800/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-5 right-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream-100/10 text-cream-100 hover:bg-cream-100/20 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-caramel-300"
            aria-label="Close image viewer"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 sm:left-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream-100/10 text-cream-100 hover:bg-cream-100/20 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-caramel-300"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 sm:right-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream-100/10 text-cream-100 hover:bg-cream-100/20 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-caramel-300"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <figure
            className="max-w-3xl w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[active].src}
              alt={galleryImages[active].alt}
              className="w-full max-h-[78vh] object-contain rounded-2xl shadow-card"
            />
            <figcaption className="mt-4 text-center text-cream-200/90 text-sm font-light">
              {galleryImages[active].alt}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
