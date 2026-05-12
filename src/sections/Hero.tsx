import { motion, type Variants } from 'framer-motion';
import { ChevronRight, Github, Linkedin, Instagram } from 'lucide-react';
import DotField from '../components/Dotfield.tsx';
import heroImage from '../assets/nice - Copy.jpg';

const CircularImage = () => {
  return (
    <div className="relative w-full aspect-square max-w-[220px] sm:max-w-[280px] md:max-w-[500px] xl:max-w-[550px] mx-auto flex items-center justify-center">

      {/* Animated Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 border-2 border-dashed border-purple-500/50 rounded-full pointer-events-none"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-4 md:inset-8 border border-blue-500/25 rounded-full pointer-events-none"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        className="absolute -inset-2 md:-inset-4 border border-purple-500/25 rounded-full pointer-events-none"
      />

      {/* Image */}
      <motion.div
        animate={{
          y: [0, -15, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="relative w-[80%] h-[80%] rounded-full overflow-hidden border-[4px] md:border-[6px] border-white/5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] z-20"
      >
        <img
          src={heroImage}
          alt="Venkateswaran K"
          className="w-full h-full object-cover scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </motion.div>

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-purple-600/10 blur-[60px] md:blur-[80px] rounded-full z-10 pointer-events-none" />

      <div className="absolute -top-2 md:-top-5 -right-2 md:-right-5 w-20 h-20 md:w-32 md:h-32 bg-blue-500/10 blur-[40px] md:blur-[60px] rounded-full pointer-events-none" />
    </div>
  );
};

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden py-24 lg:py-0">

      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <DotField className="w-full h-full opacity-80" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      </div>

      <div className="section-container relative z-10 w-full">

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1]
            }}
            viewport={{ once: true }}
            className="
              flex
              justify-center
              items-center
              order-1
              lg:order-2
              w-full
              pt-2
              md:pt-4
              lg:col-span-5
              xl:col-span-6
              lg:min-h-[500px]
            "
          >
            <CircularImage />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              lg:col-span-7
              xl:col-span-6
              flex
              flex-col
              gap-5
              md:gap-8
              items-center
              text-center
              lg:items-start
              lg:text-left
              w-full
              order-2
              lg:order-1
            "
          >
            {/* TOP LABEL */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <span className="w-12 h-[1px] bg-purple-500 hidden lg:block" />

              <span className="text-purple-500 md:font-bold tracking-[0.2em] uppercase text-[12px] sm:text-[15px] text-md md:text-xs">
                Developer | Problem Solver | Tech Enthusiast
              </span>
            </motion.div>

            {/* TITLE */}
            <motion.h1
              variants={itemVariants}
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                xl:text-6xl
                font-black
                leading-[1.05]
                lg:leading-[0.95]
                tracking-tight
                break-words
              "
            >
              Venkateswaran<span className="gradient-text ml-4">K</span>
              {/* <br className="hidden sm:block" /> */}
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              variants={itemVariants}
              className="
                text-sm
                sm:text-base
                md:text-lg
                lg:text-xl
                text-foreground/60
                max-w-lg
                lg:max-w-xl
                leading-relaxed
                font-medium
              "
            >
              Passionate about building modern software solutions and
              continuously learning new technologies. I bridge the gap between
              complex logic and elegant design.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 md:gap-6 justify-center lg:justify-start mt-2 md:mt-4"
            >
              <button
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="btn-primary group text-sm md:text-base"
              >
                Get in Touch

                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById('about')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="btn-secondary text-sm md:text-base"
              >
                Explore Story
              </button>
            </motion.div>

            {/* SOCIALS */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-8 mt-6 md:mt-8 justify-center lg:justify-start"
            >
              {[
                {
                  icon: <Github className="w-5 h-5 md:w-6 md:h-6" />,
                  href: 'https://github.com/Venkie07',
                  label: 'Github'
                },
                {
                  icon: <Linkedin className="w-5 h-5 md:w-6 md:h-6" />,
                  href: 'https://www.linkedin.com/in/venkateswaran-k-401573340/',
                  label: 'Linkedin'
                },
                {
                  icon: <Instagram className="w-5 h-5 md:w-6 md:h-6" />,
                  href: 'https://www.instagram.com/venkates_._2007/',
                  label: 'Instagram'
                }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-foreground/30 hover:text-purple-500 transition-all hover:scale-125"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
          duration: 1
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] font-black text-foreground/20">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="w-[2px] h-14 bg-gradient-to-b from-purple-500/50 via-purple-500/10 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
};

export default Hero;