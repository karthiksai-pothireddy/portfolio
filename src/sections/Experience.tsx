import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from '../components/FadeIn';
import { LiveProjectButton } from '../components/Buttons';
import { EXPERIENCE } from '../data';

type Job = (typeof EXPERIENCE)[number];

function Card({ job, index, total, progress }: { job: Job; index: number; total: number; progress: MotionValue<number> }) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const radius = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

  return (
    <div className="h-[85vh] flex items-start justify-center sticky top-24 md:top-32">
      <motion.div
        style={{ scale, top: `${index * 28}px` }}
        className={`relative w-full max-w-6xl border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 origin-top ${radius}`}
      >
        <div className="flex flex-wrap items-end justify-between gap-4 mb-5 md:mb-6 px-2">
          <div className="flex items-end gap-4 sm:gap-6">
            <span className="hero-heading font-black leading-none" style={{ fontSize: 'clamp(3rem, 8vw, 110px)' }}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col pb-1 sm:pb-2">
              <span className="text-[#D7E2EA]/60 uppercase tracking-wider text-xs sm:text-sm">{job.meta}</span>
              <h3 className="text-[#D7E2EA] font-medium uppercase leading-tight" style={{ fontSize: 'clamp(1.2rem, 2.6vw, 2.4rem)' }}>
                {job.company}
              </h3>
              <span className="text-[#D7E2EA]/80 font-light text-sm sm:text-base">{job.role}</span>
            </div>
          </div>
          <LiveProjectButton label="Highlights" href="#contact" />
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 md:mb-5">
          {job.stats.map((s) => (
            <div key={s.label} className="rounded-2xl sm:rounded-3xl border border-[#D7E2EA]/20 px-3 py-3 sm:px-5 sm:py-4">
              <div className="text-[#D7E2EA] font-semibold leading-none" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.8rem)' }}>
                {s.value}
              </div>
              <div className="text-[#D7E2EA]/60 uppercase tracking-wide mt-1 text-[10px] sm:text-xs">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 sm:gap-3">
          <div className="flex flex-col gap-2 sm:gap-3 w-[40%]">
            <img src={job.images[0]} alt={`${job.company} logo`} className={`w-full object-contain bg-[#161616] p-4 sm:p-6 ${radius}`} style={{ height: 'clamp(100px, 12vw, 180px)' }} />
            <img src={job.images[1]} alt={job.company} className={`w-full object-cover ${radius}`} style={{ height: 'clamp(120px, 16vw, 250px)' }} />
          </div>
          <img src={job.images[2]} alt={job.company} className={`w-[60%] object-cover ${radius}`} />
        </div>
      </motion.div>
    </div>
  );
}

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  return (
    <section
      id="experience"
      className="relative z-10 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-4 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
    >
      <FadeIn y={40}>
        <h2 className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-12 sm:mb-16" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Experience
        </h2>
      </FadeIn>
      <div ref={ref}>
        {EXPERIENCE.map((job, i) => (
          <Card key={job.company} job={job} index={i} total={EXPERIENCE.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
