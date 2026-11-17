import { useEffect, useRef } from 'react';
import './cadet.css';

const CDN = 'https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/';
const PLATE = `${CDN}a194141a-44ba-44bb-8372-e6720af994ca.jpg`;
const CLIP = `${CDN}e1b48476-24ab-456a-bb12-13e63bc60973.mp4`;
const HELMET = `${CDN}e8c78660-4497-41b9-82ae-a4738a5edd11.jpg`;

const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume ↓', href: '/Karthik_Pothireddy_Resume.pdf', download: true },
];

export default function HeroSection() {
  const stage = useRef<HTMLElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const head = useRef<HTMLVideoElement>(null);
  const helmet = useRef<HTMLImageElement>(null);
  const push = useRef<HTMLButtonElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const helmetOn = useRef(false);
  const helmetAnim = useRef<Animation | null>(null);
  const reduced = typeof window !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    const st = stage.current!, fr = frame.current!;
    const v = head.current as HTMLVideoElement;
    if (matchMedia('(pointer: fine)').matches) st.classList.add('fine');

    let px = innerWidth / 2, py = innerHeight / 2, rx = px, ry = py, lastMove = performance.now();
    const onMove = (e: PointerEvent) => { px = e.clientX; py = e.clientY; lastMove = performance.now(); };
    const onEnter = () => st.classList.add('over');
    const onLeave = () => st.classList.remove('over');
    addEventListener('pointermove', onMove, { passive: true });
    st.addEventListener('pointerenter', onEnter);
    st.addEventListener('pointerleave', onLeave);

    // Load the whole clip into memory so every seek is instant.
    let duration = 0, shown = 0, target = 0, objectUrl = '', cancelled = false;
    const onMeta = () => { duration = v.duration || 5.04; shown = target = duration / 2; v.currentTime = shown; };
    const onSeeked = () => v.classList.add('ready');
    if (!reduced) {
      v.addEventListener('loadedmetadata', onMeta);
      v.addEventListener('seeked', onSeeked, { once: true });
      fetch(CLIP)
        .then((r) => { if (!r.ok) throw new Error(); return r.blob(); })
        .then((b) => { if (!cancelled) { objectUrl = URL.createObjectURL(b); v.src = objectUrl; } })
        .catch(() => { if (!cancelled) v.src = CLIP; });
    }

    let raf = 0;
    const tick = (now: number) => {
      rx += (px - rx) * 0.55; ry += (py - ry) * 0.55;
      dot.current!.style.transform = `translate3d(${px}px, ${py}px, 0)`;
      ring.current!.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;

      if (duration) {
        if (now - lastMove > 3500) {
          target = duration * (0.5 + 0.32 * Math.sin(now / 1400));
        } else {
          const r = fr.getBoundingClientRect();
          const k = Math.min(1, Math.max(0, ((px - r.left) / r.width - 0.14) / 0.72));
          target = k * duration;
        }
        shown += (target - shown) * 0.14;
        const t = Math.min(duration - 0.01, Math.max(0, shown));
        if (!v.seeking && Math.abs(v.currentTime - t) > 0.008) v.currentTime = t;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Entrance timeline (~1.8s)
    const anims: Animation[] = [];
    if (!reduced) {
      const E = 'cubic-bezier(.2,.7,.2,1)';
      const run = (sel: string, kf: Keyframe[], delay: number, dur = 700) =>
        st.querySelectorAll<HTMLElement>(sel).forEach((el) => anims.push(el.animate(kf, { duration: dur, delay, easing: E, fill: 'backwards' })));
      const drop = [{ opacity: 0, transform: 'translateY(-24px)' }, { opacity: 1, transform: 'none' }];
      const rise = [{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'none' }];
      run('.cadet-logo', drop, 0);
      run('.cadet-nav', drop, 80);
      run('.cadet-eyebrow', [{ opacity: 0, letterSpacing: '.9em' }, { opacity: 1, letterSpacing: '.46em' }], 250, 900);
      run('.cadet-headline', [{ opacity: 0, filter: 'blur(14px)', transform: 'translateY(30px)' }, { opacity: 1, filter: 'blur(0)', transform: 'none' }], 450, 900);
      run('.cadet-sub', rise, 800);
      run('.cadet-cap', rise, 1000);
      run('.cadet-push', [{ opacity: 0, transform: 'scale(.4)' }, { opacity: 1, transform: 'scale(1.08)', offset: 0.7 }, { opacity: 1, transform: 'scale(1)' }], 1300, 500);
    }

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      removeEventListener('pointermove', onMove);
      st.removeEventListener('pointerenter', onEnter);
      st.removeEventListener('pointerleave', onLeave);
      v?.removeEventListener('loadedmetadata', onMeta);
      v?.removeEventListener('seeked', onSeeked);
      anims.forEach((a) => a.cancel());
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [reduced]);

  const toggleHelmet = () => {
    const on = (helmetOn.current = !helmetOn.current);
    push.current!.setAttribute('aria-pressed', String(on));
    push.current!.animate([{ transform: 'scale(1)' }, { transform: 'scale(.88)' }, { transform: 'scale(1)' }], { duration: 320, easing: 'ease-out' });
    const u = frame.current!.offsetWidth / 1440;
    const down: Keyframe[] = [
      { transform: `translateY(${-70 * u}px)`, opacity: 0 },
      { transform: `translateY(${6 * u}px)`, opacity: 1, offset: 0.72 },
      { transform: 'translateY(0)', opacity: 1 },
    ];
    const up: Keyframe[] = [
      { transform: 'translateY(0)', opacity: 1 },
      { transform: `translateY(${6 * u}px)`, opacity: 1, offset: 0.28 },
      { transform: `translateY(${-70 * u}px)`, opacity: 0 },
    ];
    helmetAnim.current?.cancel();
    helmetAnim.current = helmet.current!.animate(on ? down : up, {
      duration: reduced ? 1 : 720,
      easing: 'cubic-bezier(.2,.8,.3,1)',
      fill: 'forwards',
    });
  };

  return (
    <section ref={stage} className="cadet">
      <div ref={frame} className="cadet-frame">
        <img className="abs cadet-plate" src={PLATE} alt="A cartoon space cadet in front of a glowing planet horizon" />
        {!reduced && <video ref={head} className="abs cadet-head" muted playsInline preload="auto" aria-hidden="true" />}
        <img ref={helmet} className="abs cadet-helmet" src={HELMET} alt="" />
        <button ref={push} className="abs cadet-push" aria-pressed="false" aria-label="Toggle helmet" onClick={toggleHelmet}>
          PUSH
          <br />
          ME
        </button>
      </div>

      <a className="abs cadet-logo" href="#">
        <span className="cadet-disc" />
        <span>Karthik</span>
      </a>
      <nav className="abs cadet-nav">
        {NAV.map((n) => (
          <a key={n.label} href={n.href} download={'download' in n ? true : undefined}>
            {n.label}
          </a>
        ))}
      </nav>

      <div className="abs cadet-copy">
        <p className="cadet-eyebrow">HI, I&apos;M</p>
        <h1 className="cadet-headline">KARTHIK</h1>
        <p className="cadet-sub">Building systems that scale past the stars</p>
      </div>

      <a className="abs cadet-cap l" href="#about">Scroll to explore ↓</a>
      <a className="abs cadet-cap r" href="#contact">Contact Me →</a>

      <div ref={ring} className="cadet-ring" />
      <div ref={dot} className="cadet-dot" />
    </section>
  );
}
