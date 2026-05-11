import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
// import ThemeToggle from './ThemeToggle.tsx';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Achievements', id: 'achievements' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple Scroll-Spy logic
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${scrolled ? 'py-4' : 'py-8'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className={`relative glass-card !p-2 !rounded-full flex items-center justify-between px-6 transition-all ${scrolled ? 'shadow-2xl border-white/20' : 'border-white/5'
          }`}>
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold italic tracking-tighter flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-sm not-italic group-hover:scale-110 transition-transform font-black">
              VK
            </div>
            {/* <span className="hidden sm:inline">VENKIE<span className="text-purple-500">.</span></span> */}
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-colors cursor-pointer ${isActive ? 'text-white' : 'text-foreground/60 hover:text-foreground'
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-purple-600 rounded-full -z-10 shadow-lg shadow-purple-500/20"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {item.name}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full hover:bg-foreground/5 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: { opacity: 1, y: 0 },
              closed: { opacity: 0, y: -20 }
            }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 w-full px-6 pt-4 md:hidden"
          >
            <div
              className={`glass-card !p-4 !rounded-[2rem] flex flex-col gap-2 shadow-2xl transition-opacity duration-150 ${isOpen ? "opacity-100" : "opacity-0"
                }`}
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`p-4 rounded-2xl text-lg font-bold flex justify-between items-center w-full text-left cursor-pointer ${activeSection === item.id
                      ? "bg-purple-600 text-white"
                      : "hover:bg-foreground/5"
                    }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

