import { Cookie, CakeSlice, Croissant } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const reasons = [
  {
    icon: Cookie,
    title: 'Sweet Treats & Cookies',
    body: 'Browse a colourful selection of cakes, pastries and cookies — the perfect pick-me-up or gift for someone sweet.',
  },
  {
    icon: CakeSlice,
    title: 'Cakes for Celebrations',
    body: 'Explore celebration cakes for birthdays, anniversaries and milestones — each one a centrepiece for your occasion.',
  },
  {
    icon: Croissant,
    title: 'Savoury Favourites',
    body: 'Discover warm, freshly baked savoury snacks — patties, puffs and bites that pair perfectly with a cup of tea.',
  },
];

export default function WhyVisit() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="section-pad bg-cream-50">
      <div className="container-bakery">
        <div className={`reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          <div className="text-center mb-12">
            <p className="heading-eyebrow mb-3">Why Visit</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-chocolate-600">
              A Little Something for Everyone
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="bg-cream-100 rounded-3xl p-7 sm:p-8 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-1 text-center"
              >
                <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-caramel-500/10 text-caramel-600 mb-5">
                  <r.icon className="h-7 w-7" aria-hidden />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-chocolate-600">
                  {r.title}
                </h3>
                <p className="mt-3 text-chocolate-500/85 font-light leading-relaxed">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
