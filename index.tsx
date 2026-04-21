import { Nav } from '../components/sections/Nav';
import { Hero } from '../components/sections/Hero';
import { TrustBar } from '../components/sections/TrustBar';
import { Pain } from '../components/sections/Pain';
import { Services } from '../components/sections/Services';
import { SmsDemo } from '../components/sections/SmsDemo';
import { Audit } from '../components/sections/Audit';
import { Pricing } from '../components/sections/Pricing';
import { About } from '../components/sections/About';
import { Cta, Footer } from '../components/sections/Cta';

const Index = () => {
  return (
    <div className="min-h-screen bg-cream text-ink font-sans">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Pain />
        <Services />
        <SmsDemo />
        <Audit />
        <Pricing />
        <About />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
