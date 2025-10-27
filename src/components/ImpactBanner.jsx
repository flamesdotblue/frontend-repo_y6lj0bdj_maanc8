import { useEffect, useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AlertTriangle, TrendingUp, Activity } from 'lucide-react';

const trendData = [
  { year: 2018, value: 8 },
  { year: 2019, value: 12 },
  { year: 2020, value: 20 },
  { year: 2021, value: 35 },
  { year: 2022, value: 52 },
  { year: 2023, value: 67 },
  { year: 2024, value: 78 },
];

export default function ImpactBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const pathData = useMemo(() => {
    const padding = 8;
    const width = 320;
    const height = 120;
    const maxY = Math.max(...trendData.map((d) => d.value));
    const minY = Math.min(...trendData.map((d) => d.value));
    const xStep = (width - padding * 2) / (trendData.length - 1);

    const points = trendData.map((d, i) => {
      const x = padding + i * xStep;
      const y = padding + (1 - (d.value - minY) / (maxY - minY)) * (height - padding * 2);
      return [x, y];
    });

    const d = points
      .map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`))
      .join(' ');

    return { d, width, height, points };
  }, []);

  return (
    <section ref={ref} className="relative isolate w-full bg-[#0B102A] py-12 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur-md">
              <AlertTriangle className="h-4 w-4 text-[#F59E0B]" />
              AI will define your career's trajectory—are you ready?
            </div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Adoption is compounding
            </h2>
            <p className="mt-2 max-w-2xl text-white/70">
              78% of top enterprises report active AI deployment. Roles with AI fluency have seen a 35% salary premium since 2022. The question is not if—it's when.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/80">
              <span className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2"><TrendingUp className="h-4 w-4 text-[#A78BFA]"/>+210% AI job postings</span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2"><Activity className="h-4 w-4 text-[#7C3AED]"/>4.2x productivity lift</span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2"><TrendingUp className="h-4 w-4 text-[#F59E0B]"/>3x faster feature cycles</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 w-full max-w-md rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.06] p-4 backdrop-blur-md md:mt-0"
            aria-label="AI adoption trend chart"
          >
            <svg viewBox={`0 0 ${pathData.width} ${pathData.height}`} className="h-40 w-full">
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#7C3AED" />
                  <stop offset="50%" stopColor="#A78BFA" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
              </defs>
              <g>
                <polyline
                  points={`8,112 ${pathData.width - 8},112`}
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1"
                />
                <motion.path
                  d={pathData.d}
                  fill="none"
                  stroke="url(#grad)"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1.4, ease: 'easeInOut' }}
                />
                {pathData.points.map(([x, y], i) => (
                  <motion.circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="3.5"
                    fill="#A78BFA"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.2 + i * 0.05, type: 'spring', stiffness: 200 }}
                  />
                ))}
              </g>
            </svg>
            <div className="mt-2 flex items-center justify-between text-xs text-white/60">
              <span>2018</span>
              <span>2020</span>
              <span>2022</span>
              <span>2024</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
