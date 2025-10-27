import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Timer, ArrowRight } from 'lucide-react';

function useCountdown(targetDate) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, targetDate.getTime() - now.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

function TimeBox({ label, value }) {
  const padded = String(value).padStart(2, '0');
  return (
    <div className="flex flex-col items-center">
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-3xl font-bold tracking-wider text-white shadow-inner">
        <span className="tabular-nums">{padded}</span>
      </div>
      <span className="mt-2 text-xs uppercase tracking-widest text-white/60">{label}</span>
    </div>
  );
}

export default function CountdownCTA() {
  const target = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 7); // next cohort in 7 days
    d.setHours(9, 0, 0, 0);
    return d;
  }, []);

  const { days, hours, minutes, seconds } = useCountdown(target);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative w-full bg-gradient-to-b from-[#0A0E27] to-[#0B102A] py-16 text-white">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8 rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.08] to-white/[0.04] p-8 text-center backdrop-blur-xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
            <Timer className="h-4 w-4 text-[#F59E0B]" />
            Next cohort starts soon — reserve your seat
          </div>
          <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Countdown to Cohort Launch
          </h3>
          <div className="grid grid-cols-4 gap-4">
            <TimeBox label="Days" value={days} />
            <TimeBox label="Hours" value={hours} />
            <TimeBox label="Minutes" value={minutes} />
            <TimeBox label="Seconds" value={seconds} />
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <a href="#apply" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] px-6 py-3 text-lg font-semibold text-white shadow-lg shadow-[#7C3AED]/30 transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#A78BFA]">
              Reserve Your Seat
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <p className="text-sm text-white/80">Only <span className="font-semibold text-white">15</span> spots remaining</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
