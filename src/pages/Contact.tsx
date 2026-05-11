import { motion } from 'framer-motion';
import { SectionHeading, GlassCard } from '../components/UIComponents.tsx';
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  Send,
  Phone,
  ArrowUpRight
} from 'lucide-react';

interface BentoCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  href: string;
  color?: string;
  colSpan?: string;
  rowSpan?: string;
}

const BentoCard = ({
  title,
  value,
  icon,
  href,
  color,
  colSpan = 'col-span-1',
  rowSpan = 'row-span-1'
}: BentoCardProps) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`${colSpan} ${rowSpan} group relative`}
  >
    <GlassCard
      className="
        h-full flex flex-col justify-between
        !p-8 border-transparent
        hover:border-purple-500/50
        transition-all duration-500
        overflow-hidden
      "
      glow
    >
      <div
        className={`hidden sm:block absolute -right-4 -bottom-4 w-32 h-32 opacity-5 group-hover:opacity-20 transition-opacity duration-500 ${color}`}
      >
        {icon}
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-8">
          <div className="p-4 rounded-2xl bg-purple-500/10 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500">
            {icon}
          </div>

          <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        </div>

        <div className="mt-auto">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 mb-1 block">
            {title}
          </span>

          <h3 className="hidden sm:block text-xl font-bold break-words">{value}</h3>
        </div>
      </div>
    </GlassCard>
  </motion.a>
);

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className="section-container"
    >
      <SectionHeading
        vis="hidden sm:block"
        title="Let's Collaborate"
        subtitle="Currently open to new opportunities and interesting projects. Feel free to reach out through any of these platforms."
      />

      {/* MOBILE: 2 COL GRID | DESKTOP: 4 COL GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {/* Email (full row in mobile) */}
        <BentoCard
          title="Email"
          value="venkateswaran01092007@gmail.com"
          icon={<Mail className="w-8 h-8" />}
          href="mailto:venkateswaran01092007@gmail.com"
          colSpan="col-span-2 md:col-span-2"
        />

        {/* LinkedIn */}
        <BentoCard
          title="LinkedIn"
          value="Venkateswaran K"
          icon={<Linkedin className="w-8 h-8" />}
          href="https://www.linkedin.com/in/venkateswaran-k-401573340/"
        />

        {/* GitHub */}
        <BentoCard
          title="GitHub"
          value="@Venkie07"
          icon={<Github className="w-8 h-8" />}
          href="https://github.com/Venkie07"
        />

        {/* Mobile Number (replaces Location) */}
        <BentoCard
          title="Mobile"
          value="+91 73387 21949"
          icon={<Phone className="w-8 h-8" />}
          href="tel:7338721949"
        />

        {/* Instagram */}
        <BentoCard
          title="Instagram"
          value="@venkates_._2007"
          icon={<Instagram className="w-8 h-8" />}
          href="https://www.instagram.com/venkates_._2007/"
        />

        {/* Contact Form (full row mobile) */}
        <motion.div
          className="
            col-span-2 md:col-span-2
            glass-card
            !p-5 md:!p-6
            bg-purple-600
            shadow-[0_0_80px_-20px_rgba(168,85,247,0.35)]
            h-fit
          "
          whileHover={{ scale: 1.01 }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();

              const form = e.currentTarget;

              const name = (form.elements.namedItem('name') as HTMLInputElement).value;
              const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

              const subject = `Response from ${name}`;

              const body = `Hey Venkateswaran,

My self ${name},

I would like to share you that, ${message}

Regards,
${name}`;

              const gmailUrl =
                `https://mail.google.com/mail/?view=cm&fs=1` +
                `&to=venkateswaran01092007@gmail.com` +
                `&su=${encodeURIComponent(subject)}` +
                `&body=${encodeURIComponent(body)}`;

              window.open(gmailUrl, '_blank');
              form.reset();
            }}
            className="flex flex-col gap-3"
          >
            <div className="space-y-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Have Something to Share?
              </h3>

              <p className="text-white/60 text-sm">
                Feel free to send me a quick message anytime.
              </p>
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={3}
              className="w-full resize-none rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-all duration-300 focus:border-white/30 focus:bg-white/15"
            />

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="flex-1 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-all duration-300 focus:border-white/30 focus:bg-white/15"
              />

              <button
                type="submit"
                className="group flex items-center justify-center gap-2 rounded-xl bg-white text-purple-700 px-5 py-3 text-sm font-semibold whitespace-nowrap transition-all duration-300 hover:scale-[1.01] hover:shadow-xl"
              >
                Send
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Contact;