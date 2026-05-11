import { motion } from 'framer-motion';
import { SectionHeading, SkillCard } from '../components/UIComponents.tsx';
import {
  Code2, Database, 
  Terminal, Globe, Cpu, 
  Layers, Zap,
  Palette, Cable, Blocks, ChartNoAxesColumnIncreasing
} from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 5, icon: <Code2 />, category: "Core" },
        { name: "Java", level: 4, icon: <Terminal />, category: "Basic" },
        { name: "C Language", level: 4, icon: <Cpu />, category: "Systems" },
        { name: "JavaScript", level: 4, icon: <Globe />, category: "Web" },
        { name: "TypeScript", level: 3, icon: <Zap />, category: "Web" },
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "React", level: 5, icon: <Blocks />, category: "Frontend" },
        { name: "Vite", level: 5, icon: <Zap />, category: "Build" },
        { name: "Tailwind CSS", level: 5, icon: <Layers />, category: "Styling" },
        { name: "HTML5 / CSS3", level: 5, icon: <Globe />, category: "Markup" },
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", level: 5, icon: <Code2 />, category: "VCS" },
        { name: "VS Code", level: 5, icon: <Terminal />, category: "IDE" },
        { name: "Firebase", level: 4, icon: <Database />, category: "Hosting" },
        { name: "Canva", level: 4, icon: <Palette />, category: "Design" },
        { name: "N8N", level: 3, icon: <Cable />, category: "Automation" },
        { name: "PowerBi", level: 3, icon: <ChartNoAxesColumnIncreasing />, category: "Analytics" }
      ]
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="section-container"
    >
      <SectionHeading vis='hidden md : block'
        title="Technical Arsenal"
        subtitle="A comprehensive toolkit of technologies I use to bring complex digital visions to life."
      />

      <div className="space-y-24 pb-20">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-4">
              <span className="w-8 h-1 bg-purple-500 rounded-full" />
              {cat.title}
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              {cat.skills.map((skill, j) => (
                <SkillCard key={j} {...skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;

