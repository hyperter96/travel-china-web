import Header from './components/Header';
import Hero from './components/Hero';
import ServiceSection from './components/ServiceSection';
import DestinationSection from './components/DestinationSection';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ServiceSection />
      <DestinationSection />
      <TestimonialSection />
      <Footer />
      <CookieConsent />
    </main>
  );
}
