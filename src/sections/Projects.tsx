import FadeIn from '../components/FadeIn';
import { PROJECTS } from '../data';

export default function ProjectsSection() {
  return (
    <section className="relative z-20 bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn y={40}>
        <h2 className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Projects
        </h2>
      </FadeIn>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-4 sm:gap-5">
        {PROJECTS.map((p, i) => (
          <FadeIn key={p.name} delay={i * 0.1}>
            <article className="h-full rounded-[32px] sm:rounded-[40px] bg-[#0C0C0C] p-7 sm:p-9 flex flex-col gap-4">
              <span className="hero-heading font-black leading-none" style={{ fontSize: 'clamp(2.5rem, 5vw, 72px)' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-[#D7E2EA] font-medium uppercase" style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.6rem)' }}>
                {p.name}
              </h3>
              <p className="text-[#D7E2EA]/60 font-light leading-relaxed" style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1.05rem)' }}>
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-[#D7E2EA]/40 text-[#D7E2EA] uppercase tracking-widest text-[10px] sm:text-xs px-3 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
