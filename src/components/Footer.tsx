import ThemeToggle from './ThemeToggle.tsx';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  // const navLinks = [
  //   { name: 'Home', id: 'home' },
  //   { name: 'About', id: 'about' },
  //   { name: 'Skills', id: 'skills' },
  //   { name: 'Achievements', id: 'achievements' },
  //   { name: 'Contact', id: 'contact' },
  // ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/Venkie07", label: "Github" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/venkateswaran-k-401573340/", label: "Linkedin" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/venkates_._2007/", label: "Instagram" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:venkateswaran01092007@gmail.com", label: "Email" },
  ];

  // const scrollToSection = (id: string) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <footer className="w-full pt-20 pb-10 px-6 md:px-12 lg:px-20 border-t border-white/5 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Brand Section */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <h2 className="text-3xl font-black italic tracking-tighter">
              Venkateswaran K<span className="text-purple-500">.</span>
            </h2>
            <p className="text-foreground/60 text-base max-w-sm leading-relaxed">
              Aspiring Software Engineer & AI Developer. Passionate about creating modern solutions that balance challenge and growth.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-purple-500/5 border border-white/5 flex items-center justify-center text-foreground/40 hover:text-purple-500 hover:border-purple-500/50 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-purple-500 mb-6">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-foreground/40 hover:text-foreground transition-colors font-medium text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Theme & Meta */}
          <div className="md:col-span-7 flex flex-col items-start md:items-end gap-8">

            <div className="flex items-center gap-3">

              <span className="text-[15px] font-bold uppercase tracking-[0.2em] text-foreground/90 leading-none">
                Theme :
              </span>

              <div className="flex items-center justify-center">
                <ThemeToggle />
              </div>

            </div>

            <div className="p-6 rounded-2xl bg-purple-500/5 border border-white/5 w-full">
              <p className="text-s text-foreground/70 leading-relaxed italic">
                "Turning ideas into impactful technology. Innovation begins with curiosity."
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col  items-center gap-6">
          <p className="text-foreground/20 text-[11px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Venkateswaran K. All rights reserved.
          </p>
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-600/5 blur-[100px] rounded-full pointer-events-none" />
    </footer>
  );
};

export default Footer;
