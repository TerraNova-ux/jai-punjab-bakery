import { products } from '@/data/products';
import { useReveal } from '@/hooks/useReveal';

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.featured).slice(0, 6);
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="featured" className="section-pad bg-cream-50">
      <div className="container-bakery">
        <div className={`reveal ${visible ? 'is-visible' : ''} text-center mb-12`} ref={ref}>
          <p className="heading-eyebrow mb-3">Favourites</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-chocolate-600">
            Treats Worth Stopping For
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-chocolate-500/90 font-light">
            A glimpse of what you might find on our shelves — from rich cakes to
            savoury bites, all baked fresh.
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product, i) => (
            <article
              key={product.id}
              className="group bg-cream-100 rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate-600/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-chocolate-600">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-chocolate-500/85 font-light leading-relaxed">
                  {product.description}
                </p>
                {product.price && (
                  <p className="mt-3 font-serif text-lg font-medium text-caramel-600">
                    {product.price}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
