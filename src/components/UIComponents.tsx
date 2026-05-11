import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  vis?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, align = 'center', vis }) => {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
      >
        {title.split(' ').map((word, i) => (
          <span key={i} className={i === title.split(' ').length - 1 ? 'gradient-text' : ''}>
            {word}{' '}
          </span>
        ))}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto ${vis}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', glow = false }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`glass-card p-8 ${glow ? 'glow-purple' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  level: number;
  category: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  icon,
  name,
  level,
  category,
}) => {
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  // MOBILE VIEW
  if (isMobile) {
    return (
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        className="group h-full"
      >
        <GlassCard
          className="
            h-full
            !p-4 md:!p-6
            flex flex-col
            gap-3 md:gap-4
            border-transparent
            hover:border-purple-500/50
            transition-all duration-500
          "
          glow
        >
          <div className="flex items-center justify-between gap-3">

            <div className="flex items-center gap-3 min-w-0">
              <div
                className="
                  p-2.5 md:p-3
                  rounded-xl md:rounded-2xl
                  bg-purple-500/10
                  text-purple-500
                  group-hover:bg-purple-500
                  group-hover:text-white
                  transition-all duration-500
                  shrink-0
                "
              >
                {icon}
              </div>

              <h3
                className="
                  text-[clamp(10px,2.8vw,14px)]
                  md:text-lg
                  font-bold
                  leading-tight
                  truncate
                  min-w-0
                "
              >
                {name}
              </h3>
            </div>

            <span
              className="
                hidden md:block
                text-[9px] md:text-[10px]
                font-bold
                uppercase
                tracking-widest
                text-foreground/40
                shrink-0
              "
            >
              {category}
            </span>
          </div>

          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`
                  h-1
                  flex-1
                  rounded-full
                  transition-all duration-300
                  ${i < level ? 'bg-purple-500' : 'bg-foreground/10'}
                `}
              />
            ))}
          </div>
        </GlassCard>
      </motion.div>
    );
  }

  // DESKTOP VIEW
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="group h-full"
    >
      <GlassCard
        className="h-full !p-5 sm:!p-6 flex flex-col justify-between gap-5 border border-transparent hover:border-purple-500/50 transition-all duration-500"
        glow
      >
        <div className="flex items-start justify-between gap-3">
          <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500 shrink-0">
            {icon}
          </div>

          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 text-right leading-tight">
            {category}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-base sm:text-lg font-bold leading-snug break-words">
            {name}
          </h3>

          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                  i < level
                    ? "bg-purple-500"
                    : "bg-foreground/10"
                }`}
              />
            ))}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};
// export const SkillCard: React.FC<SkillCardProps> = ({
//   icon,
//   name,
//   level,
//   category,
// }) => (
//   <motion.div
//     whileHover={{ y: -8, scale: 1.02 }}
//     className="group h-full"
//   >
//     <GlassCard
//       className="h-full !p-5 sm:!p-6 flex flex-col justify-between gap-5 border border-transparent hover:border-purple-500/50 transition-all duration-500"
//       glow
//     >
//       {/* Top Section */}
//       <div className="flex items-start justify-between gap-3">
//         <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500 shrink-0">
//           {icon}
//         </div>

//         <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 text-right leading-tight">
//           {category}
//         </span>
//       </div>

//       {/* Bottom Section */}
//       <div className="flex flex-col gap-3">
//         <h3 className="text-base sm:text-lg font-bold leading-snug break-words">
//           {name}
//         </h3>

//         <div className="flex items-center gap-1">
//           {[...Array(5)].map((_, i) => (
//             <div
//               key={i}
//               className={`h-1 flex-1 rounded-full transition-all duration-300 ${
//                 i < level
//                   ? "bg-purple-500"
//                   : "bg-foreground/10"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </GlassCard>
//   </motion.div>
// );


//----------------------------------------

// export const SkillCard: React.FC<SkillCardProps> = ({
//   icon,
//   name,
//   level,
//   category
// }) => (
//   <motion.div
//     whileHover={{ y: -6, scale: 1.02 }}
//     className="group h-full"
//   >
//     <GlassCard
//       className="
//         h-full
//         !p-4 md:!p-6
//         flex flex-col
//         gap-3 md:gap-4
//         border-transparent
//         hover:border-purple-500/50
//         transition-all duration-500
//       "
//       glow
//     >
//       {/* TOP SECTION */}
//       <div className="flex items-center justify-between gap-3">

//         {/* ICON + TITLE */}
//         <div className="flex items-center gap-3 min-w-0">
//           <div
//             className="
//               p-2.5 md:p-3
//               rounded-xl md:rounded-2xl
//               bg-purple-500/10
//               text-purple-500
//               group-hover:bg-purple-500
//               group-hover:text-white
//               transition-all duration-500
//               shrink-0
//             "
//           >
//             {icon}
//           </div>

//           {/* <h3 className="text-sm md:text-lg font-bold leading-tight truncate"> */}
//           <h3
//             className="
//     text-[clamp(10px,2.8vw,14px)]
//     md:text-lg
//     font-bold
//     leading-tight
//     truncate
//     min-w-0
//   "
//           >
//             {name}
//           </h3>
//         </div>

//         {/* CATEGORY */}
//         <span
//           className="
//             hidden md:block
//             text-[9px] md:text-[10px]
//             font-bold
//             uppercase
//             tracking-widest
//             text-foreground/40
//             shrink-0
//           "
//         >
//           {category}
//         </span>
//       </div>

//       {/* LEVEL */}
//       <div className="flex gap-1">
//         {[...Array(5)].map((_, i) => (
//           <div
//             key={i}
//             className={`
//               h-1
//               flex-1
//               rounded-full
//               transition-all duration-300
//               ${i < level ? 'bg-purple-500' : 'bg-foreground/10'}
//             `}
//           />
//         ))}
//       </div>
//     </GlassCard>
//   </motion.div>
// );
