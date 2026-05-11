import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { SectionHeading, GlassCard } from '../components/UIComponents.tsx';
import {
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

/* =========================
   COURSE CERTIFICATES
========================= */

import Course1 from '../assets/Certificates/cource/c1.jpg';
import Course2 from '../assets/Certificates/cource/c2.jpg';
import Course3 from '../assets/Certificates/cource/c3.jpg';
import Course4 from '../assets/Certificates/cource/c4.jpg';
import Course5 from '../assets/Certificates/cource/c5.jpg';
import Course6 from '../assets/Certificates/cource/c6.jpg';
import Course7 from '../assets/Certificates/cource/c7.jpg';
import Course8 from '../assets/Certificates/cource/c8.jpg';
import Course9 from '../assets/Certificates/cource/c9.png';

/* =========================
   EVENT CERTIFICATES
========================= */

import Event1 from '../assets/Certificates/event/e1.jpg';
import Event2 from '../assets/Certificates/event/e2.jpg';
import Event3 from '../assets/Certificates/event/e3.jpg';
import Event4 from '../assets/Certificates/event/e4.jpg';
import Event5 from '../assets/Certificates/event/e5.jpg';
import Event6 from '../assets/Certificates/event/e6.jpg';
import Event7 from '../assets/Certificates/event/e7.jpg';
import Event8 from '../assets/Certificates/event/e8.jpg';
import Event9 from '../assets/Certificates/event/e9.jpg';
import Event10 from '../assets/Certificates/event/e10.png';
import Event11 from '../assets/Certificates/event/e11.png';
import Event12 from '../assets/Certificates/event/e12.png';

interface AchievementCardProps {
  title: string;
  category: string;
  description: string;
  date: string;
  image: string;
  verification: boolean;
  verificationLink?: string;
  onViewDetails?: () => void;
}

const AchievementCard = ({
  title,
  // description,
  date,
  image,
  onViewDetails
}: AchievementCardProps) => {
  return (
    <GlassCard
      className="h-[360px] md:h-[420px] flex flex-col overflow-hidden group transition-all duration-500"
      glow
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-44 md:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 pt-5">
        <h3 className="text-lg md:text-xl font-bold mb-2 line-clamp-2 group-hover:text-purple-500 transition-colors">
          {title}
        </h3>

        {/* Hidden in mobile */}
        {/* <p className="hidden md:block text-foreground/50 text-sm leading-relaxed line-clamp-4">
          {description}
        </p> */}

        {/* Date */}
        <div className="mt-4">
          <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-xs font-semibold">
            {date}
          </span>
        </div>

        {/* Button */}
        <div className="mt-auto pt-5">
          <button
            onClick={onViewDetails}
            className="w-full px-4 py-2.5 rounded-xl bg-purple-500 text-white text-sm font-semibold hover:bg-purple-600 transition-all duration-300"
          >
            View Details
          </button>
        </div>
      </div>
    </GlassCard>
  );
};

const CarouselSection = ({
  items,
  onViewDetails
}: {
  items: AchievementCardProps[];
  onViewDetails: (item: AchievementCardProps) => void;
}) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative">
      {/* LEFT BUTTON */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-purple-500 transition-all duration-300"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-purple-500 transition-all duration-300"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <Swiper
        modules={[Pagination, Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={24}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false
        }}
        loop
        breakpoints={{
          0: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          },
          1200: {
            slidesPerView: 3
          }
        }}
        className="!pb-14 px-1 md:px-14"
      >
        {items.map((item, i) => (
          <SwiperSlide key={i} className="h-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="h-full"
            >
              <AchievementCard
                {...item}
                onViewDetails={() => {
                  swiperRef.current?.autoplay?.stop();
                  onViewDetails(item);
                }}
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const Achievements = () => {
  const [selectedItem, setSelectedItem] =
    useState<AchievementCardProps | null>(null);

  const courses = [
    {
      title: 'Enhancing Soft Skills and Personality',
      category: 'Course',
      description:
        'Online professional development program focused on enhancing communication, leadership, and interpersonal skills.',
      date: '2025',
      image: Course1,
      verification: true,
      verificationLink: 'https://nptel.ac.in/noc/E_Certificate/NPTEL25HS87S94330078604460886'
    },
    {
      title: 'Learning Analytics Tools',
      category: 'Course',
      description:
        'Explore the fundamentals of learning analytics and discover how data-driven insights can personalize and enhance the learning experience for students and educators.',
      date: '2025',
      image: Course2,
      verification: true,
      verificationLink: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25GE70S55400157410874295'
    },
    {
      title: 'Python (Basic)',
      category: 'Course',
      description:
        'Learned Python fundamentals, syntax, keywords, conditional statements, data types, and python programming methods.',
      date: '2025',
      image: Course3,
      verification: true,
      verificationLink: 'https://www.hackerrank.com/certificates/44d6607b8b88'
    },
    {
      title: 'Problem Solving (Basic)',
      category: 'Course',
      description:
        'Learned problem-solving fundamentals, syntax, and problem-solving techniques.',
      date: '2025',
      image: Course4,
      verification: true,
      verificationLink: 'https://www.hackerrank.com/certificates/8766bd20e1f4'
    },
    {
      title: 'Advanced Cpp Training',
      category: 'Course',
      description:
        'Covered OOPs, pointers, memory management, templates, and advanced C++ programming concepts.',
      date: '2025',
      image: Course5,
      verification: false,
    },
    {
      title: 'BASH Training',
      category: 'Course',
      description:
        'Learned BASH fundamentals, commands, shell scripting, and automation.',
      date: '2025',
      image: Course6,
      verification: false
    },
    {
      title: 'Linux Training',
      category: 'Course',
      description:
        'Learned Linux fundamentals, terminal commands, and system administration basics.',
      date: '2025',
      image: Course7,
      verification: false
    },
    {
      title: 'Developing Soft Skills and Personality',
      category: 'Course',
      description:
        'Learned communication, leadership, teamwork, and problem-solving skills.',
      date: '2025',
      image: Course8,
      verification: true,
      verificationLink: 'https://nptel.ac.in/noc/E_Certificate/NPTEL25HS174S65400178710874295'
    },
    {
      title: 'Build a free website with WordPress',
      category: 'Course',
      description:
        'Learned web development, website creation, and WordPress basics.',
      date: '2025',
      image: Course9,
      verification: true,
      verificationLink: 'https://coursera.org/verify/X51U1LVMHQEJ'
    }
  ];

  const participations = [
    {
      title: 'OverAll Topper',
      category: 'Event',
      description: 'Secured first place in the Skillrack competition, recognized for outstanding performance and top rank.',
      date: '2025',
      image: Event1,
      verification: false
    },
    {
      title: 'Debug-a-thon',
      category: 'Event',
      description: 'Won Second Prize in Debug and fix errors event',
      date: '2025',
      image: Event2,
      verification: false
    },
    {
      title: 'MindMarathon 1St Prize',
      category: 'Event',
      description: 'Secured first place in the MindMarathon Technical live quiz competition.',
      date: '2025',
      image: Event3,
      verification: false
    },
    {
      title: 'Code Debugging - 1St Prize',
      category: 'Event',
      description: 'Secured first place in the Code Debugging competition, at S.A Engineering College.',
      date: '2025',
      image: Event4,
      verification: false
    },
    {
      title: 'Full Throttle Code - 2nd Prize',
      category: 'Event',
      description: 'Secured second place in the Full Throttle Code competition, at Sairam Engineering College.',
      date: '2024',
      image: Event5,
      verification: false
    },
    {
      title: 'Best Organizer Award',
      category: 'Event',
      description: 'outstanding contribution in organizing and coordinating in Festive Week 4.0,',
      date: '2024',
      image: Event6,
      verification: false
    },
    {
      title: '404 Brain not Found - 2nd Prize',
      category: 'Event',
      description: 'Secured second place in the 404 Brain not Found competition, at Sairam Engineering College.',
      date: '2026',
      image: Event7,
      verification: false
    },
    {
      title: 'Cosmic Compile - 2nd Prize',
      category: 'Event',
      description: 'Got 2nd Prize in Cosmic compile - a Coding Event At R.M.K College of Engineering',
      date: '2024',
      image: Event8,
      verification: false
    },
    {
      title: 'Think & Ink 3.0 - 2nd Prize',
      category: 'Event',
      description: 'Got 2nd Prize in Cosmic compile - a Technical Quiz Event At R.M.K College of Engineering',
      date: '2025',
      image: Event9,
      verification: false
    },
    {
      title: 'Neo Hawkins - 1st Prize',
      category: 'Event',
      description: 'Secured 1st Prize in Neo Hawkins A UI/UX Designing Event',
      date: '2025',
      image: Event10,
      verification: false
    },
    {
      title: 'Poster X',
      category: 'Event',
      description: 'Actively participated in the Poster X event, showcasing design skills by creating impactful posters using Canva.',
      date: '2025',
      image: Event11,
      verification: false
    },
    {
      title: 'IEEEXtreme 18.0',
      category: 'Event',
      description: 'Participated in the IEEEXtreme 18.0 competition 24hrs Coding Challenge, showcasing competitive programming skills.',
      date: '2024',
      image: Event12,
      verification: false
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className="section-container"
    >
      {/* Courses */}
      <SectionHeading
        vis="hidden sm:block"
        title="Courses & Certifications"
        subtitle="Professional certifications and learning milestones achieved throughout my journey."
      />

      <div className="mb-32">
        <CarouselSection
          items={courses}
          onViewDetails={(item) => setSelectedItem(item)}
        />
      </div>

      {/* Events */}
      <SectionHeading
        vis="hidden sm:block"
        title="Event Participations"
        subtitle="Hackathons, bootcamps, symposiums, workshops, and technical events I participated in."
      />

      <CarouselSection
        items={participations}
        onViewDetails={(item) => setSelectedItem(item)}
      />

      {/* GLOBAL MODAL */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-md flex items-center justify-center p-3 md:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-6xl bg-background border border-white/10 rounded-3xl overflow-hidden shadow-2xl max-h-[95vh] overflow-y-auto"
            >
              {/* Close */}
              <button
                onClick={() => {
                  setSelectedItem(null);

                  document
                    .querySelectorAll('.swiper')
                    .forEach((swiperEl: any) => {
                      swiperEl.swiper?.autoplay?.start();
                    });
                }}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-purple-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="bg-black flex items-center justify-center p-2 md:p-4 min-h-[250px]">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="
                        w-auto
                        h-auto
                        max-w-full
                        max-h-[45vh]
                        md:max-h-[70vh]
                        object-contain
                        rounded-2xl
                        mx-auto
                      "
                  />
                </div>
                {/* Image */}
                {/* <div className="bg-black flex items-center justify-center p-2 md:p-4 h-[300px] md:h-[700px] overflow-auto">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="max-w-full max-h-full object-contain rounded-2xl"
                  />
                </div> */}

                {/* Content */}
                <div className="p-5 md:p-8 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-xs uppercase tracking-widest font-bold mb-4">
                    {selectedItem.category}
                  </span>

                  <h2 className="text-2xl md:text-4xl font-black mb-4 break-words">
                    {selectedItem.title}
                  </h2>

                  <p className="text-sm md:text-base text-foreground/60 leading-relaxed mb-6">
                    {selectedItem.description}
                  </p>

                  <div className="mb-8">
                    <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold">
                      {selectedItem.date}
                    </span>
                  </div>

                  {selectedItem.verification && (
                    <a
                      href={selectedItem.verificationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-purple-500 text-white font-semibold hover:bg-purple-600 transition-all duration-300 w-full md:w-fit"
                    >
                      View Verification
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Achievements;