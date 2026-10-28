import { bakeryConfig } from '@/data/bakeryConfig';
import { useReveal } from '@/hooks/useReveal';

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-pad bg-cream-50">
      <div className="container-bakery">
        <div
          className={`reveal ${visible ? 'is-visible' : ''} grid items-center gap-10 lg:gap-16 lg:grid-cols-2`}
          ref={ref}
        >
          <div className="relative order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-card">
              <img
                src="https://images.pexels.com/photos/10009354/pexels-photo-10009354.jpeg?auto=compress&cs=tinysrgb&h=900&w=700"
                alt="A baker's hands kneading fresh dough on a floured surface"
                className="w-full h-full object-cover aspect-[4/5]"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-caramel-500 text-cream-100 rounded-2xl px-5 py-4 shadow-card max-w-[10rem]">
              <p className="font-serif text-lg font-semibold leading-tight">
                Baked with care
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="heading-eyebrow mb-3">Our Story</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-chocolate-600">
              About {bakeryConfig.name}
            </h2>
            <div className="mt-5 space-y-4 text-chocolate-500/90 font-light leading-relaxed">
              <p>
                {bakeryConfig.name} is a neighbourhood bakery in {bakeryConfig.location},
                offering a warm welcome and a counter full of freshly baked treats.
              </p>
              <p>
                From everyday pastries and bread to celebration cakes and savoury
                snacks, the focus is on simple, satisfying bakes for every part of
                the day. This website is an independent concept by TerraNova and the
                content here can be easily replaced with the bakery's verified story.
              </p>
              <p className="text-sm text-chocolate-400/70 italic">
                Note: this is a demo concept, not an officially approved website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
