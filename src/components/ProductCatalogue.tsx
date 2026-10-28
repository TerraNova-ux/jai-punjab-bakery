import { useMemo, useState } from 'react';
import { Search, PackageOpen } from 'lucide-react';
import { products, productCategories, type ProductCategory } from '@/data/products';
import { useReveal } from '@/hooks/useReveal';

type Filter = 'All Products' | ProductCategory;

export default function ProductCatalogue() {
  const [filter, setFilter] = useState<Filter>('All Products');
  const [query, setQuery] = useState('');
  const { ref, visible } = useReveal<HTMLDivElement>();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesCat = filter === 'All Products' || p.category === filter;
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [filter, query]);

  return (
    <section id="products" className="section-pad bg-cream-100">
      <div className="container-bakery">
        <div className={`reveal ${visible ? 'is-visible' : ''} text-center mb-10`} ref={ref}>
          <p className="heading-eyebrow mb-3">The Full Menu</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-chocolate-600">
            Explore Our Products
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-chocolate-500/90 font-light">
            Browse the catalogue by category or search for a favourite treat.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-6">
          <label htmlFor="product-search" className="sr-only">
            Search products
          </label>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-[18px] w-[18px] text-chocolate-400" aria-hidden />
            <input
              id="product-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search cakes, cookies, snacks…"
              className="w-full rounded-full border border-chocolate-400/25 bg-cream-50 py-3.5 pl-11 pr-4 text-sm text-chocolate-600 placeholder:text-chocolate-400/70 focus:border-caramel-500 focus:outline-none focus:ring-2 focus:ring-caramel-300/50 transition"
            />
          </div>
        </div>

        {/* Filters */}
        <div
          className="flex flex-wrap justify-center gap-2.5 mb-10"
          role="tablist"
          aria-label="Product categories"
        >
          {productCategories.map((cat) => {
            const active = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all whitespace-nowrap ${
                  active
                    ? 'bg-caramel-500 text-cream-100 shadow-soft'
                    : 'bg-cream-200 text-chocolate-500 hover:bg-cream-300'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product) => (
              <article
                key={product.id}
                className="group bg-cream-50 rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 sm:p-5">
                  <p className="text-[0.62rem] sm:text-[0.68rem] uppercase tracking-wider text-caramel-600 font-medium mb-1 truncate">
                    {product.category}
                  </p>
                  <h3 className="font-serif text-base sm:text-xl font-semibold text-chocolate-600 leading-tight">
                    {product.name}
                  </h3>
                  <p className="hidden sm:block mt-1.5 text-sm text-chocolate-500/80 font-light leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                  {product.price && (
                    <p className="mt-1.5 sm:mt-2.5 font-serif text-sm sm:text-base font-medium text-caramel-600">
                      {product.price}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 max-w-sm mx-auto">
            <PackageOpen className="h-12 w-12 mx-auto text-chocolate-400/50" aria-hidden />
            <p className="mt-4 font-serif text-2xl text-chocolate-600">No treats found</p>
            <p className="mt-2 text-sm text-chocolate-500/70 font-light">
              Try a different search term or category.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setFilter('All Products');
              }}
              className="mt-5 text-sm font-medium text-caramel-600 hover:text-caramel-700 underline underline-offset-4"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
