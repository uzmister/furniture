import { AppProvider } from './state/AppProvider';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <AppProvider>
      <Nav />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <Process />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </AppProvider>
  );
}
