import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ananya Gupta',
    role: 'Product Manager → AI Lead',
    company: 'FinTech Unicorn',
    before: 'Manual workflows, slow iteration',
    after: 'Automated 60% of ops, shipped 3 AI features in 6 weeks',
    img: 'https://i.pravatar.cc/100?img=1',
  },
  {
    name: 'Rahul Verma',
    role: 'Full-stack → AI Engineer',
    company: 'Top SaaS',
    before: 'No AI portfolio, unclear path',
    after: 'Built 5 projects, 32% salary bump',
    img: 'https://i.pravatar.cc/100?img=2',
  },
  {
    name: 'Sara Khan',
    role: 'Designer → GenAI Designer',
    company: 'Global Agency',
    before: 'Static design process',
    after: 'Integrated SD + MJ, 4x faster concepting',
    img: 'https://i.pravatar.cc/100?img=3',
  },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={ref} className="relative w-full bg-[#0A0E27] py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold md:text-4xl"
        >
          Wall of Love
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-2 max-w-2xl text-center text-white/70"
        >
          Real transformations from ambitious professionals across product, engineering, and design.
        </motion.p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.06] p-6 backdrop-blur-md"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-xs text-white/60">{t.role} • {t.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-yellow-400 text-yellow-400 animate-[pulse_2s_ease-in-out_infinite]" />
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-xs uppercase tracking-widest text-white/50">Before</p>
                  <p className="mt-1 text-white/80">{t.before}</p>
                </div>
                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-xs uppercase tracking-widest text-white/50">After</p>
                  <p className="mt-1 font-medium text-white">{t.after}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
