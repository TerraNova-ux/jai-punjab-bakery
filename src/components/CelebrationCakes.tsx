import { MessageCircle } from 'lucide-react';
import { celebrationCakes } from '@/data/products';
import { useReveal } from '@/hooks/useReveal';

export default function CelebrationCakes() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="cakes" className="section-pad bg-chocolate-600 text-cream-100 relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 h-80 w-80 rounded-full bg-caramel-500/10 blur-3xl" aria-hidden />
      <div className="container-bakery relative">
        <div className={`reveal ${visible ? 'is-visible' : ''} text-center mb-12`} ref={ref}>
          <p className="heading-eyebrow mb-3 text-caramel-300">Made to Celebrate</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold">
            Celebration Cake Showcase
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-cream-200/80 font-light">
            Illustrative cake concepts for every milestone. These categories show
            the range of styles possible — enquire to discuss your celebration.
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {celebrationCakes.map((cake) => (
            <article
              key={cake.id}
              className="group relative rounded-3xl overflow-hidden shadow-card"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate-800/85 via-chocolate-700/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-cream-100">
                  {cake.name}
                </h3>
                <p className="mt-1.5 text-sm text-cream-200/85 font-light leading-snug">
                  {cake.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary">
            <MessageCircle className="h-4 w-4" />
            Ask About a Cake
          </a>
        </div>
      </div>
    </section>
  );
}
