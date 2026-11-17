import { Mail, GraduationCap, Linkedin, Download } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { ContactButton, EMAIL, LINKEDIN_URL, RESUME_URL } from '../components/Buttons';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-30 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-24 md:pt-32 pb-10 flex flex-col items-center text-center gap-10"
    >
      <FadeIn y={40}>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}>
          Let&apos;s talk
        </h2>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p className="text-[#D7E2EA] font-light max-w-xl leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.3rem)' }}>
          Open to software engineering roles building reliable, high-scale backend and full-stack systems.
        </p>
      </FadeIn>
      <FadeIn delay={0.3} className="flex flex-wrap items-center justify-center gap-4">
        <ContactButton label="Say Hello" />
        <a
          href={RESUME_URL}
          download
          className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:py-4 text-xs sm:text-sm md:text-base transition-colors duration-200 hover:bg-[#D7E2EA]/10"
        >
          <Download size={18} /> Resume
        </a>
      </FadeIn>
      <FadeIn delay={0.35} className="flex gap-4">
        {[
          { href: LINKEDIN_URL, label: 'LinkedIn', Icon: Linkedin },
        ]
          .filter((l) => l.href)
          .map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#D7E2EA]/40 text-[#D7E2EA] flex items-center justify-center transition-colors hover:bg-[#D7E2EA]/10"
          >
            <Icon size={22} />
          </a>
        ))}
      </FadeIn>
      <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-4 sm:gap-10 text-[#D7E2EA]/70 text-sm sm:text-base">
        <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 justify-center hover:text-[#D7E2EA] transition-colors">
          <Mail size={18} /> {EMAIL}
        </a>
        <span className="flex items-center gap-2 justify-center">
          <GraduationCap size={18} /> M.S. MIS, Northern Illinois University
        </span>
      </FadeIn>
      <p className="text-[#D7E2EA]/40 text-xs uppercase tracking-widest mt-16">© {new Date().getFullYear()} Karthik Pothireddy</p>
    </section>
  );
}
