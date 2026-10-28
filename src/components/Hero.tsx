import { ArrowRight, Cake } from 'lucide-react';
import { bakeryConfig } from '@/data/bakeryConfig';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream-100">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-caramel-300/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute top-1/3 -left-20 h-60 w-60 rounded-full bg-pistachio-300/20 blur-3xl" aria-hidden />

      <div className="container-bakery relative grid items-center gap-10 lg:gap-16 py-10 sm:py-20 lg:py-28 lg:grid-cols-2 min-w-0">
        {/* Text */}
        <div className="animate-fade-up">
          <p className="heading-eyebrow mb-4">{bakeryConfig.location}</p>
          <h1 className="font-serif font-semibold text-chocolate-600 text-[clamp(2.25rem,9.5vw,3.5rem)] leading-[1.08] sm:text-6xl lg:text-7xl text-balance">
            A Little Sweetness <br className="hidden sm:block" /> for Every Occasion.
          </h1>
          <p className="mt-6 max-w-md text-base sm:text-lg text-chocolate-500/90 leading-relaxed font-light">
            Welcome to {bakeryConfig.name} — a warm bakery experience filled with
            sweet treats, celebration cakes and savoury favourites, freshly baked
            for everyday moments and special days alike.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3.5">
            <a href="#products" className="btn-primary">
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#cakes" className="btn-outline">
              <Cake className="h-4 w-4" />
              Celebration Cakes
            </a>
          </div>
        </div>

        {/* Image composition */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none animate-scale-in">
          <div className="relative grid grid-cols-5 grid-rows-6 gap-3 sm:gap-4">
            <div className="col-span-3 row-span-4 rounded-3xl overflow-hidden shadow-card">
              <img
                src="https://images.pexels.com/photos/7405059/pexels-photo-7405059.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Freshly baked pastries and breads on display at a bakery"
                className="h-full w-full object-cover aspect-[4/5]"
                loading="eager"
              />
            </div>
            <div className="col-span-2 row-span-3 rounded-3xl overflow-hidden shadow-card self-end">
              <img
                src="https://images.pexels.com/photos/20677473/pexels-photo-20677473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Colourful cupcakes topped with fresh berries"
                className="h-full w-full object-cover aspect-square"
                loading="eager"
              />
            </div>
            <div className="col-span-2 row-span-3 rounded-3xl overflow-hidden shadow-card">
              <img
                src="https://images.pexels.com/photos/8992923/pexels-photo-8992923.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Punjabi samosas served with chutney"
                className="h-full w-full object-cover aspect-square"
                loading="lazy"
              />
            </div>
            <div className="col-span-3 row-span-2 rounded-3xl overflow-hidden shadow-card self-end">
              <img
                src="https://images.pexels.com/photos/32191355/pexels-photo-32191355.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="A vibrant birthday cake with candles"
                className="h-full w-full object-cover aspect-[16/9]"
                loading="lazy"
              />
            </div>
          </div>

          {/* floating badge */}
          <div className="absolute -bottom-4 -left-2 sm:left-6 bg-cream-50 rounded-2xl shadow-card px-5 py-3.5 animate-float">
            <p className="font-serif text-2xl font-semibold text-caramel-600 leading-none">Fresh</p>
            <p className="text-[0.7rem] text-chocolate-500 tracking-wide mt-1">baked daily</p>
          </div>
        </div>
      </div>
    </section>
  );
}
