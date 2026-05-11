import { Suspense, lazy, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Hero from './sections/Hero.tsx';
// import BlobCursor from './components/BlobCursor';
// Lazy load sections for performance
const About = lazy(() => import('./pages/About.tsx'));
const Skills = lazy(() => import('./pages/Skills.tsx'));
const Achievements = lazy(() => import('./pages/Achievements.tsx'));
const Contact = lazy(() => import('./pages/Contact.tsx'));

const PageLoader = () => (
  <div className="h-screen flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  useEffect(() => {
    // Force scroll to top on initial load/reload
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider>
      {/* <BlobCursor
        blobType="circle"
        fillColor="#5227FF"
        trailCount={3}
        sizes={[60, 125, 75]}
        innerSizes={[20, 35, 25]}
        innerColor="rgba(255,255,255,0.8)"
        opacities={[0.6, 0.6, 0.6]}
        shadowColor="rgba(0,0,0,0.75)"
        shadowBlur={5}
        shadowOffsetX={10}
        shadowOffsetY={10}
        filterStdDeviation={30}
        useFilter={true}
        fastDuration={0.1}
        slowDuration={0.5}
        zIndex={100}
      /> */}
      <div className="relative min-h-screen bg-background text-foreground selection:bg-purple-500/30 overflow-x-hidden">
        <Navbar />
        <main className="flex flex-col">
          <section id="home">
            <Hero />
          </section>

          <Suspense fallback={<PageLoader />}>
            <section id="about">
              <About />
            </section>
            <section id="skills">
              <Skills />
            </section>
            <section id="achievements">
              <Achievements />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </Suspense>
        </main>
        
        <Footer />

        {/* Decorative background elements */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;