import AnnouncementBar from '@/components/AnnouncementBar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import ProductCatalogue from '@/components/ProductCatalogue';
import CelebrationCakes from '@/components/CelebrationCakes';
import WhyVisit from '@/components/WhyVisit';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import Contact from '@/components/Contact';
import LocationMap from '@/components/LocationMap';
import Footer from '@/components/Footer';
import DevViewportSwitcher from '@/components/DevViewportSwitcher';

function App() {
  return (
    <DevViewportSwitcher>
      <div className="min-h-screen bg-cream-100 overflow-x-hidden">
        <AnnouncementBar />
        <Navbar />
        <main>
          <Hero />
          <FeaturedProducts />
          <ProductCatalogue />
          <CelebrationCakes />
          <WhyVisit />
          <Gallery />
          <About />
          <Contact />
          <LocationMap />
        </main>
        <Footer />
      </div>
    </DevViewportSwitcher>
  );
}

export default App;
