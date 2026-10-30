import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import Hero from './components/sections/Hero/Hero';
import Problem from './components/sections/Problem/Problem';
import Solution from './components/sections/Solution/Solution';
import Technology from './components/sections/Technology/Technology';
import Pricing from './components/sections/Pricing/Pricing';
import Team from './components/sections/Team/Team';
import Download from './components/sections/Download/Download';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <Hero />
        <Problem />
        <Solution />
        <Technology />
        <Pricing />
        <Team />
        <Download />
      </main>
      <Footer />
    </>
  );
}
