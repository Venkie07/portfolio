import { motion } from 'framer-motion';
import { SectionHeading, GlassCard } from '../components/UIComponents.tsx';
import { BookOpen, Award, Briefcase, GraduationCap, Brain } from 'lucide-react';
import heroImage from '../assets/nice - Copy.jpg';
// import DotField from '../components/Dotfield.tsx';

interface TimelineItemProps {
  icon: React.ReactNode;
  year: string;
  title: string;
  company: string;
  description: string;
  side: 'left' | 'right';
  vis?:string;
}

const TimelineItem = ({ icon, year, title, company, description, side ,vis}: TimelineItemProps) => (
  <motion.div
    initial={{ opacity: 0, x: side === 'left' ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={`flex w-full mb-12 items-center justify-between ${side === 'right' ? 'flex-row-reverse' : ''} relative`}
  >
    <div className="hidden md:block w-5/12" />
    <div className="z-20 flex items-center order-1 bg-purple-600 shadow-xl w-10 h-10 rounded-full">
      <div className="mx-auto font-semibold text-lg text-white">
        {icon}
      </div>
    </div>
    <div className="order-1 glass-card w-full md:w-5/12 px-6 py-6 transition-all hover:glow-purple">
      <span className="text-purple-500 font-bold mb-1 block">{year}</span>
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <h4 className="text-foreground/60 mb-2 font-medium">{company}</h4>
      <p className={`text-foreground/40 text-sm leading-relaxed ${vis}`}>{description}</p>
    </div>
  </motion.div>
);

const About = () => {
  return (

    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="section-container overflow-hidden"
    >

      <SectionHeading
        title="Learning, Building, and Growing"
        // subtitle="I am an aspiring developer passionate about building impactful technology solutions and solving real-world problems through software development."
      />

      <div className="grid lg:grid-cols-3 gap-12 mb-32">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-1"
        >
          <GlassCard className="h-full flex flex-col items-center text-center p-12" glow>
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-purple-500/100 shadow-2xl">
              <img
                src={heroImage}
                alt="Venkateswaran K"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-2xl font-bold mb-2">Venkateswaran K</h3>
            <p className="text-purple-500 font-medium mb-6 text-sm">AI & Data Science Student</p>
            <div className="flex flex-col gap-4 w-full">
              {[
                { label: "Location", value: "Chennai, India" },
                { label: "Status", value: "Self Educating" },
                { label: "Focus", value: "Full Stack + AI" },
                
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center text-xs">
                  <span className="text-foreground/80 text-sm">{item.label}</span>
                  <span className="font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        <div className="lg:col-span-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="h-full flex flex-col items-center p-5" glow>
            <h3 className="text-3xl font-bold mb-6 italic text-purple-500">About Me</h3>
            <p className="text-foreground/80 text-sm md:text-lg leading-relaxed mb-6">
              <span className="text-purple-500 pr-2">• </span> I am an aspiring developer passionate about building impactful technology solutions
              and solving real-world problems through software development. I enjoy learning new
              technologies, creating modern applications, and continuously improving my skills.
            </p>
            <p className="text-foreground/80 text-sm md:text-lg leading-relaxed">
              <span className="text-purple-500 pr-2">• </span> My goal is to become a top Software Engineer, Data Analyst, or AI Developer
              in a reputed company while building innovative and meaningful tech products.
            </p>
            </GlassCard>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Award className="w-6 h-6" />, label: "Quick Learner", sub: "Adaptable to tech" },
              { icon: <Brain className="w-6 h-6" />, label: "Creative Thinker", sub: "Problem-solving mindset" },
            ].map((stat, i) => (
              <GlassCard key={i} className="flex flex-col gap-3 !p-6 transition-all hover:scale-105" glow>
                <div className="text-purple-500">{stat.icon}</div>
                <div>
                  <div className="font-bold text-sm md:text-lg pb-1">{stat.label}</div>
                  <div className="text-sm text-foreground/40 hidden md:block">{stat.sub}</div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>

      <SectionHeading title="Professional Journey" />

      <div className="relative wrap overflow-hidden h-full">
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-purple-500/20 hidden md:block" />

        {/* 10th */}
        <TimelineItem
          icon={<GraduationCap className="w-5 h-5" />}
          year="2021"
          title="SSLC - 10th Grade"
          company="New Century Matriculation Higher Secondary School"
          description="Completed secondary education with strong interest in mathematics and technology."
          side="left"
          vis="hidden md:block"
        />

        {/* 12th */}
        <TimelineItem
          icon={<BookOpen className="w-5 h-5" />}
          year="2023"
          title="HSC - 12th Grade"
          company="New Century Matriculation Higher Secondary School"
          description="Focused on computer science and analytical subjects, building interest in AI and development."
          side="right"
          vis="hidden md:block"
        />

        {/* College */}
        <TimelineItem
          icon={<GraduationCap className="w-5 h-5" />}
          year="2024 - 2028"
          title="B.Tech AI & Data Science"
          company="Sri Sairam Institute of Technology"
          description="Focusing on core AI concepts, data structures, and modern software development practices."
          side="left"
          vis="hidden md:block"
        />

        {/* Projects */}
        <TimelineItem
          icon={<Briefcase className="w-5 h-5" />}
          year="Present"
          title="Learning + Personal Projects & Development"
          company="Full Stack & AI"
          description="Building modern applications using React, Vite, Tailwind CSS, and exploring AI/ML technologies."
          side="right"
          vis="hidden md:block"
        />
      </div>
    </motion.section>
  );
};

export default About;

