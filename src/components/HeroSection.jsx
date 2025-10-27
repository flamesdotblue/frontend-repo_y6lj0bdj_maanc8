import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Rocket, ArrowRight, Shield, Star, Timer } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const companies = [
  'Google',
  'Microsoft',
  'Meta',
  'Amazon',
  'NVIDIA',
  'OpenAI',
  'Salesforce',
  'Uber',
];

const outcomes = [
  'Ship AI features 10x faster',
  'Automate 40% of workflows',
  'Get promoted to AI Lead',
  'Build a portfolio that hires',
];

function useCycler(items, delay = 2500) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), delay);
    return () => clearInterval(id);
  }, [items.length, delay]);
  return items[index];
}

export default function HeroSection() {
  const [slots, setSlots] = useState(() => {
    const stored = sessionStorage.getItem('ss_slots');
    return stored ? Number(stored) : 25;
  });

  useEffect(() => {
    sessionStorage.setItem('ss_slots', String(slots));
  }, [slots]);

  // Simulate real-time slot decay with gentle randomness, never below 3
  useEffect(() => {
    if (slots <= 3) return;
    const interval = setInterval(() => {
      setSlots((s) => (s > 3 ? s - 1 : s));
    }, 15000 + Math.random() * 15000);
    return () => clearInterval(interval);
  }, [slots]);

  const currentOutcome = useCycler(outcomes, 2200);

  const heroRef = useRef(null);
  const inView = useInView(heroRef, { once: true, margin: '-100px' });

  return (
    <section ref={heroRef} className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-[#0A0E27] via-[#0b1030] to-[#0A0E27] text-white">
      {/* Background geometric gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#7C3AED]/30 via-[#A78BFA]/20 to-[#F59E0B]/10 blur-3xl opacity-70" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gradient-to-tr from-[#1E3A8A]/20 via-[#7C3AED]/20 to-transparent blur-3xl" />
      </div>

      {/* Spline scene */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 pt-28 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
          aria-label="Trust and credibility badges"
        >
          <Shield className="h-4 w-4 text-[#A78BFA]" />
          <span className="text-sm text-white/80">Top 1% AI Experts • Premium Cohort</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-center font-black tracking-tight text-white drop-shadow-sm [text-wrap:balance] text-4xl sm:text-5xl md:text-6xl"
        >
          SkillSphere AI Mastermind
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-3xl text-center text-lg leading-relaxed text-white/80 md:text-xl"
        >
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#7C3AED] to-[#F59E0B]">
            {currentOutcome}
          </span>
          —guided by world-class mentors. Two immersive days to transform your career trajectory.
        </motion.p>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#apply"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] px-6 py-3 text-lg font-semibold text-white shadow-lg shadow-[#7C3AED]/30 transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#A78BFA]"
            aria-label="Register now"
          >
            <Rocket className="h-5 w-5" />
            Register Now
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </a>

          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
            <div className="relative">
              <div className="absolute inset-0 animate-ping rounded-full bg-[#F59E0B]/20" />
              <div className="relative h-3 w-3 rounded-full bg-[#F59E0B]" />
            </div>
            <span className="text-sm md:text-base">Only <span className="font-bold text-white">{slots}</span> spots remaining</span>
          </div>
        </motion.div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-12 w-full"
        >
          <p className="mb-4 text-center text-xs uppercase tracking-widest text-white/50">Trusted by leaders from</p>
          <div className="mx-auto grid max-w-5xl grid-cols-3 items-center gap-6 text-white/70 sm:grid-cols-4 md:grid-cols-8">
            {companies.map((c) => (
              <div key={c} className="flex items-center justify-center">
                <span className="text-sm md:text-base lg:text-lg font-medium tracking-wide opacity-80">{c}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
