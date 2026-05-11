import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="
        p-2
        rounded-full
        glass
        border border-white/10
        transition-all duration-300
        hover:border-purple-500/60
        hover:shadow-[0_0_18px_rgba(168,85,247,0.45)]
        hover:bg-white/10
      "
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-purple-600" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
