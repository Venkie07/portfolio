import Hero from '../sections/Hero.tsx';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      
      {/* Featured Section placeholder */}
      <section className="section-container border-t border-white/5 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">Featured Work</h2>
            <p className="text-foreground/60 mt-4">
              Explore some of my most impactful projects that showcase my technical expertise and problem-solving skills.
            </p>
          </div>
          <div className="flex justify-end">
            <button className="text-purple-500 font-semibold hover:underline flex items-center gap-2">
              Explore All Projects
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;