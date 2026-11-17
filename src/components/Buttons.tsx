import { ArrowUpRight, ArrowDown } from 'lucide-react';

export const EMAIL = 'karthiksaipothireddy6@gmail.com';
// Paste your LinkedIn profile URL here; the LinkedIn button stays hidden while this is empty.
export const LINKEDIN_URL = 'https://www.linkedin.com/in/karthik-p7974/';
export const RESUME_URL = '/Karthik_Pothireddy_Resume.pdf';

const PURPLE: React.CSSProperties = {
  background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
  boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
  outline: '2px solid white',
  outlineOffset: '-3px',
};
const BASE =
  'inline-flex items-center gap-2 rounded-full text-white font-medium uppercase tracking-widest whitespace-nowrap transition-transform duration-200 hover:scale-[1.03]';
const SIZE = 'px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base';
// Smaller on phones so the hero buttons clear the PUSH ME button between them.
const SIZE_COMPACT = 'px-5 py-2.5 text-[11px] md:px-12 md:py-4 md:text-base';

export function ContactButton({ label = 'Contact Me', compact = false }: { label?: string; compact?: boolean }) {
  return (
    <a href={`mailto:${EMAIL}`} className={`${BASE} ${compact ? SIZE_COMPACT : SIZE}`} style={PURPLE}>
      {label}
    </a>
  );
}

export function ScrollButton({ href = '#about' }: { href?: string }) {
  return (
    <a href={href} className={`${BASE} ${SIZE_COMPACT}`} style={PURPLE} aria-label="Scroll down">
      <span className="md:hidden">Scroll</span>
      <span className="hidden md:inline">Scroll Down</span>
      <ArrowDown className="w-4 h-4 md:w-5 md:h-5 animate-bounce" />
    </a>
  );
}

export function LiveProjectButton({ label = 'Live Project', href = '#' }: { label?: string; href?: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base whitespace-nowrap transition-colors duration-200 hover:bg-[#D7E2EA]/10"
    >
      {label}
      <ArrowUpRight size={18} />
    </a>
  );
}
