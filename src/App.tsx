import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import HowItWorks from './components/HowItWorks';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import OrderForm from './components/OrderForm';
import DeliveryInfo from './components/DeliveryInfo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <HowItWorks />
        <Gallery />
        <Reviews />
        <OrderForm />
        <DeliveryInfo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
