import { useState, useEffect, useRef, useCallback } from "react";
import {
    MessageCircle, Send, Phone, Mail, Shield, Bot,
    Users, ChevronDown, Plus, Search, Globe, Instagram,
    Check, AlertTriangle, Sparkles, Zap, Menu, X,
    Pencil, FolderOpen, Calendar, BarChart3, Plug, Bell,
    BookOpen, Settings, Smile, Paperclip, Mic, PenTool,
    Maximize2, Play, Image, Scissors, Home, GraduationCap,
    Stethoscope, Languages, Clock
} from "lucide-react";


/* ══════════════════════════════════════════
   CONSTANTS
   ══════════════════════════════════════════ */

const T = {
    bg: "var(--bg)",
    bg2: "var(--bg2)",
    surf: "var(--surf)",
    wt: "var(--wt)",
    gr: "var(--gr)",
    gr2: "var(--gr2)",
    bd: "var(--bd)",
    ac: "var(--ac)",
    red: "#ef4444",
    green: "#22c55e",
    cardBg: "var(--card-bg)",
    cardBd: "var(--card-bd)",
    cardGlow: "var(--card-glow)",
    navBg: "var(--nav-bg)",
    surfHover: "var(--surf-hover)",
    textSub: "var(--text-sub)",
    chatBg: "var(--chat-bg)",
    glowPurple: "var(--glow-purple)",
};

const FONT = "'Plus Jakarta Sans',-apple-system,sans-serif";
const MONO = "'JetBrains Mono',monospace";


/* ══════════════════════════════════════════
   CSS
   ══════════════════════════════════════════ */

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

/* ─── Dark Theme (default) ─── */
:root, [data-theme="dark"] {
  --bg: #101018;
  --bg2: #14141e;
  --surf: rgba(255,255,255,.035);
  --wt: #f0f0f6;
  --gr: #c0c0c8;
  --gr2: #8a8a96;
  --bd: rgba(255,255,255,.08);
  --ac: #cbd1db;
  --card-bg: rgba(255,255,255,.03);
  --card-bd: rgba(255,255,255,.08);
  --card-glow: rgba(203,209,219,.08);
  --nav-bg: rgba(16,16,24,.95);
  --surf-hover: rgba(255,255,255,.14);
  --text-sub: rgba(255,255,255,.7);
  --chat-bg: #0e0e1a;
  --chat-side: #0c0c16;
  --bubble-in: rgba(255,255,255,.07);
  --bubble-in-bd: rgba(255,255,255,.08);
  --bubble-out: #f0f0f6;
  --bubble-out-text: #101018;
  --glow-purple: rgba(139,92,246,.08);
  --section-bd: rgba(255,255,255,.08);
  --grad-text-from: #f0f0f6;
  --grad-text-to: #6a6a7a;
  --shimmer: rgba(255,255,255,.18);
  --foot-bg: #101018;
  --foot-text: rgba(255,255,255,.5);
  --foot-text2: rgba(255,255,255,.4);
  --foot-text3: rgba(255,255,255,.3);
  --scrollbar-track: #101018;
  --scrollbar-thumb: #333;
  --beam-line: rgba(255,255,255,.06);
  --faq-divider: rgba(255,255,255,.08);
  --input-bd: rgba(255,255,255,.10);
  --input-focus: rgba(139,92,246,.35);
  --meteor-color: rgba(139,92,246,.3);
  --cta-shadow: 0 40px 80px rgba(0,0,0,.8);
  --content-shadow: 0 40px 100px -20px rgba(0,0,0,.6), 0 0 0 1px rgba(255,255,255,.03);
  /* Section backgrounds */
  --sec-alt: rgba(255,255,255,.015);
  --sec-glow: radial-gradient(ellipse at 50% 0%, rgba(139,92,246,.04), transparent 70%);

  /* Chatwoot mockup */
  --cw-sidebar: #0e0e1a;
  --cw-sidebar-icon: rgba(255,255,255,.45);
  --cw-sidebar-active: rgba(255,255,255,.9);
  --cw-sidebar-hover: rgba(255,255,255,.08);
  --cw-list-bg: #0e0e1a;
  --cw-list-bd: rgba(255,255,255,.06);
  --cw-tab-active: #f0f0f6;
  --cw-tab-inactive: rgba(255,255,255,.4);
  --cw-msg-in-bg: rgba(255,255,255,.06);
  --cw-msg-in-bd: rgba(255,255,255,.08);
  --cw-msg-out-bg: #4338ca;
  --cw-msg-out-text: #fff;
  --cw-header-bg: rgba(255,255,255,.02);
  --cw-input-bg: rgba(255,255,255,.03);
  --cw-badge-bg: #4338ca;
  --cw-badge-text: #fff;
  --cw-avatar-bg: #6366f1;
  --cw-dot-online: #22c55e;
  color-scheme: dark;
}

/* ─── Light Theme ─── */
[data-theme="light"] {
  --bg: #f5f5fa;
  --bg2: #eeeef4;
  --surf: rgba(0,0,0,.02);
  --wt: #1a1a2e;
  --gr: #4a4a5e;
  --gr2: #7a7a90;
  --bd: rgba(0,0,0,.08);
  --ac: #5b5fc7;
  --card-bg: rgba(255,255,255,.8);
  --card-bd: rgba(0,0,0,.08);
  --card-glow: rgba(91,95,199,.08);
  --nav-bg: rgba(245,245,250,.95);
  --surf-hover: rgba(0,0,0,.08);
  --text-sub: rgba(0,0,0,.6);
  --chat-bg: #ffffff;
  --chat-side: #f0f0f6;
  --bubble-in: rgba(0,0,0,.05);
  --bubble-in-bd: rgba(0,0,0,.08);
  --bubble-out: #1a1a2e;
  --bubble-out-text: #f5f5fa;
  --glow-purple: rgba(91,95,199,.06);
  --section-bd: rgba(0,0,0,.06);
  --grad-text-from: #1a1a2e;
  --grad-text-to: #8a8a9e;
  --shimmer: rgba(0,0,0,.06);
  --foot-bg: #1a1a2e;
  --foot-text: rgba(255,255,255,.6);
  --foot-text2: rgba(255,255,255,.4);
  --foot-text3: rgba(255,255,255,.3);
  --scrollbar-track: #f5f5fa;
  --scrollbar-thumb: #ccc;
  --beam-line: rgba(0,0,0,.06);
  --faq-divider: rgba(0,0,0,.08);
  --input-bd: rgba(0,0,0,.10);
  --input-focus: rgba(91,95,199,.35);
  --meteor-color: rgba(91,95,199,.15);
  --cta-shadow: 0 20px 60px rgba(0,0,0,.08);
  --content-shadow: 0 20px 60px -10px rgba(0,0,0,.1), 0 0 0 1px rgba(0,0,0,.04);
  /* Section backgrounds */
  --sec-alt: rgba(0,0,0,.018);
  --sec-glow: radial-gradient(ellipse at 50% 0%, rgba(91,95,199,.03), transparent 70%);

  /* Chatwoot mockup - light */
  --cw-sidebar: #ffffff;
  --cw-sidebar-icon: rgba(0,0,0,.35);
  --cw-sidebar-active: rgba(0,0,0,.85);
  --cw-sidebar-hover: rgba(0,0,0,.06);
  --cw-list-bg: #ffffff;
  --cw-list-bd: rgba(0,0,0,.08);
  --cw-tab-active: #1a1a2e;
  --cw-tab-inactive: rgba(0,0,0,.35);
  --cw-msg-in-bg: rgba(0,0,0,.04);
  --cw-msg-in-bd: rgba(0,0,0,.06);
  --cw-msg-out-bg: #4338ca;
  --cw-msg-out-text: #fff;
  --cw-header-bg: rgba(0,0,0,.02);
  --cw-input-bg: rgba(0,0,0,.02);
  --cw-badge-bg: #4338ca;
  --cw-badge-text: #fff;
  --cw-avatar-bg: #6366f1;
  --cw-dot-online: #22c55e;
  color-scheme: light;
}

/* ─── Reset ─── */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; overscroll-behavior: none; }
body {
  background: var(--bg); color: var(--wt); margin: 0;
  overflow-x: hidden; -webkit-font-smoothing: antialiased;
  font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
  transition: background .4s, color .4s;
}
a { color: inherit; text-decoration: none; }
::-webkit-scrollbar { width: 3px; }
::-webkit-scrollbar-track { background: var(--scrollbar-track); }
::-webkit-scrollbar-thumb { background: var(--scrollbar-thumb); border-radius: 2px; }
.w { max-width: 1100px; margin: 0 auto; padding: 0 32px; position: relative; z-index: 1; }

/* ─── Keyframes ─── */
@keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
@keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
@keyframes shimmerSlide { 0% { transform: translateX(-100%); } 50%,100% { transform: translateX(200%); } }
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes meteor {
  0% { transform: translateX(-100px) translateY(-100px) rotate(-45deg); opacity: 0; }
  5% { opacity: .6; } 30% { opacity: 0; }
  100% { transform: translateX(500px) translateY(500px) rotate(-45deg); opacity: 0; }
}
@keyframes fadeInUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
@keyframes waveform { 0%,100% { height: 4px; } 50% { height: var(--h); } }
@keyframes dotBounce { 0%,60%,100% { transform: translateY(0); } 30% { transform: translateY(-5px); } }
@keyframes borderBeam { 0% { --ba: 0deg; } 100% { --ba: 360deg; } }
@property --ba { syntax: '<angle>'; initial-value: 0deg; inherits: false; }

/* ─── Grids ─── */
.g2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; align-items: stretch; }
.g3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; align-items: stretch; }

/* ─── Shared Components ─── */
.border-beam { position: relative; overflow: hidden; }
.border-beam::before {
  content: ''; position: absolute; inset: 0; border-radius: 16px; padding: 1px;
  background: conic-gradient(from var(--ba), transparent 70%, var(--glow-purple), transparent);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor; mask-composite: exclude;
  animation: borderBeam 5s linear infinite; pointer-events: none; z-index: 1;
}
.glass { background: var(--card-bg) !important; }

/* ─── Theme Toggle ─── */
.theme-toggle {
  position: fixed; bottom: 24px; right: 24px; z-index: 9999;
  width: 44px; height: 44px; border-radius: 50%;
  border: 1px solid var(--bd); background: var(--card-bg);
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  color: var(--wt); transition: transform .3s, border-color .3s, background .3s, box-shadow .3s;
  box-shadow: 0 4px 20px rgba(0,0,0,.15);
}
.theme-toggle:hover { transform: scale(1.1); border-color: var(--ac); box-shadow: 0 8px 30px rgba(0,0,0,.2); }
.theme-toggle svg { transition: transform .5s cubic-bezier(.4,0,.2,1); }
.theme-toggle:hover svg { transform: rotate(180deg); }

/* ─── Chatwoot Mockup ─── */
.cw-sidebar-icon-wrap {
  display: flex; align-items: center; justify-content: center;
  width: 34px; height: 34px; border-radius: 8px;
  transition: background .2s; cursor: default;
}
.cw-sidebar-icon-wrap:hover { background: var(--cw-sidebar-hover); }
.cw-conv-item {
  padding: 12px 14px; display: flex; gap: 10px; align-items: center;
  border-bottom: 1px solid var(--cw-list-bd); transition: background .15s; cursor: default;
}
.cw-conv-item:hover { background: var(--surf); }
.cw-conv-item.active { background: var(--card-bg); border-left: 2px solid var(--cw-badge-bg); }
.cw-msg-bubble { padding: 10px 14px; border-radius: 12px; font-size: .84rem; line-height: 1.5; }
.cw-msg-time { font-size: .6rem; color: var(--gr2); margin-top: 2px; }
.cw-input-tab {
  padding: 6px 12px; font-size: .78rem; font-weight: 600;
  border: none; background: none; cursor: default;
  color: var(--cw-tab-inactive); border-bottom: 2px solid transparent; transition: color .2s;
}
.cw-input-tab.active { color: var(--cw-tab-active); border-bottom-color: var(--cw-badge-bg); }
.cw-bottom-icon {
  width: 30px; height: 30px; border-radius: 6px;
  display: flex; align-items: center; justify-content: center;
  color: var(--gr2); transition: background .15s, color .15s; cursor: default;
}
.cw-bottom-icon:hover { background: var(--surf); color: var(--wt); }
.cw-send-btn {
  padding: 6px 16px; border-radius: 6px;
  border: 1px solid var(--cw-badge-bg); background: transparent;
  color: var(--cw-badge-bg); font-size: .72rem; font-weight: 600;
  cursor: default; transition: background .15s, color .15s; white-space: nowrap;
  font-family: 'Plus Jakarta Sans', sans-serif;
}
.cw-send-btn:hover { background: var(--cw-badge-bg); color: #fff; }

/* ─── Module Toggle ─── */
.mod-toggle {
  width: 36px; height: 20px; border-radius: 10px;
  position: relative; cursor: pointer; transition: background .3s; flex-shrink: 0;
}
.mod-toggle .dot {
  width: 16px; height: 16px; border-radius: 50%;
  background: #fff; position: absolute; top: 2px; transition: left .3s;
}

/* ─── Performance ─── */
section { contain: layout style; }
.will-tf { will-change: transform; }

/* ─── CSS Hover (replaces JS handlers) ─── */
.card-h { transition: border-color .3s, transform .3s, box-shadow .3s; }
.card-h:hover { border-color: var(--surf-hover) !important; transform: translateY(-3px); box-shadow: 0 8px 40px rgba(0,0,0,.15), 0 0 60px var(--glow-purple); }
.node-h { transition: transform .3s, box-shadow .3s; }
.node-h:hover { transform: scale(1.12); box-shadow: 0 0 30px -4px rgba(0,0,0,.4) !important; }
.niche-h { transition: border-color .3s, transform .2s, box-shadow .3s; }
.niche-h:hover { border-color: var(--surf-hover) !important; transform: translateX(4px); }
.price-h { transition: transform .3s, box-shadow .3s; }
.price-h:hover { transform: translateY(-4px); box-shadow: 0 8px 40px rgba(0,0,0,.25); }
.nav-link { transition: color .2s; }
.nav-link:hover { color: var(--wt) !important; }
.foot-link { transition: color .2s; }
.foot-link:hover { color: #fff !important; }
.cta-btn-h { transition: opacity .2s, transform .2s; }
.cta-btn-h:hover { opacity: .9; transform: translateY(-1px); }

/* ─── Section Backgrounds ─── */
.sec-alt {
  background: var(--sec-alt);
  border-top: 1px solid var(--bd);
  border-bottom: 1px solid var(--bd);
}
.sec-glow {
  background-image: var(--sec-glow);
  background-color: var(--sec-alt);
  border-top: 1px solid var(--bd);
  border-bottom: 1px solid var(--bd);
}

/* ─── Responsive ─── */
@media (max-width: 900px) {
  .g2, .g3 { grid-template-columns: 1fr; }
  .cw-sidebar { display: none !important; }
  .cw-convlist { display: none !important; }
  .nav-r { display: none !important; }
  .burger-btn { display: flex !important; }
  .beam-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
  .beam-svg { display: none !important; }
  .beam-center { order: -1; }
  .w { padding: 0 20px; }
  .theme-toggle { bottom: 16px; right: 16px; width: 40px; height: 40px; }
  .econ-grid { grid-template-columns: 1fr !important; }
  .mod-grid { grid-template-columns: 1fr 1fr !important; }
}
@media (max-width: 640px) {
  .hero-btns { flex-direction: column; align-items: stretch; }
  .hero-btns a { justify-content: center !important; }
  .w { padding: 0 16px; }
  .footer-cta { flex-direction: column !important; align-items: center !important; text-align: center !important; }
  .footer-links { grid-template-columns: 1fr 1fr !important; }
  .stats-row { grid-template-columns: 1fr 1fr !important; }
  .cta-inputs { flex-direction: column !important; }
  .mod-grid { grid-template-columns: 1fr !important; }
}
@media (max-width: 400px) {
  .footer-links { grid-template-columns: 1fr !important; }
}
`;


/* ══════════════════════════════════════════
   HOOKS
   ══════════════════════════════════════════ */

function useReveal(threshold = 0.08) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold, rootMargin: "0px 0px -50px 0px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return { ref, visible };
}

function useSmoothScroll() {
    const outerRef = useRef(null);
    const innerRef = useRef(null);
    const current = useRef(0);
    const target = useRef(0);
    const vel = useRef(0);
    const touching = useRef(false);
    const lastY = useRef(0);
    const scrollY = useRef(0);
    const onFrame = useRef(null);

    useEffect(() => {
        const outer = outerRef.current;
        const inner = innerRef.current;
        if (!outer || !inner) return;

        let mx = 0, raf;
        const clamp = (v, a, b) => Math.min(Math.max(v, a), b);
        const updateMax = () => { mx = Math.max(0, inner.scrollHeight - outer.clientHeight); };

        // Hash link click handler
        const onHashClick = (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (!link) return;
            const id = link.getAttribute("href").slice(1);
            if (!id) return;
            const el = inner.querySelector("#" + id);
            if (!el) return;
            e.preventDefault();
            updateMax();
            vel.current = 0;
            target.current = clamp(el.offsetTop - 60, 0, mx);
        };
        document.addEventListener("click", onHashClick);

        // Animation loop
        const animate = () => {
            if (!touching.current) {
                vel.current *= 0.90;
                target.current += vel.current;
                target.current = clamp(target.current, 0, mx);
            }
            const diff = target.current - current.current;
            current.current += diff * 0.16;
            if (Math.abs(diff) < 0.5 && Math.abs(vel.current) < 0.5) {
                current.current = target.current;
                vel.current = 0;
            }
            scrollY.current = current.current;
            inner.style.transform = `translate3d(0,${-current.current}px,0)`;
            if (onFrame.current) onFrame.current(current.current);
            raf = requestAnimationFrame(animate);
        };

        // Wheel handler
        const onWheel = (e) => {
            const scrollable = e.target.closest('[data-scrollable]');
            if (scrollable) {
                const { scrollTop, scrollHeight, clientHeight } = scrollable;
                const atTop = scrollTop <= 0 && e.deltaY < 0;
                const atBottom = scrollTop + clientHeight >= scrollHeight - 1 && e.deltaY > 0;
                if (!atTop && !atBottom) return;
            }
            e.preventDefault();
            updateMax();
            vel.current += e.deltaY * 0.15;
            target.current += e.deltaY * 0.3;
            target.current = clamp(target.current, 0, mx);
        };

        // Touch handlers
        const onTouchStart = (e) => {
            touching.current = true;
            vel.current = 0;
            lastY.current = e.touches[0].clientY;
        };
        const onTouchMove = (e) => {
            const scrollable = e.target.closest('[data-scrollable]');
            if (scrollable) return;
            e.preventDefault();
            const cy = e.touches[0].clientY;
            const delta = lastY.current - cy;
            target.current += delta;
            target.current = clamp(target.current, 0, mx);
            vel.current = delta * 0.8;
            lastY.current = cy;
        };
        const onTouchEnd = () => { touching.current = false; };

        updateMax();
        raf = requestAnimationFrame(animate);
        const ro = new ResizeObserver(updateMax);
        ro.observe(inner);

        outer.addEventListener("wheel", onWheel, { passive: false });
        outer.addEventListener("touchstart", onTouchStart, { passive: true });
        outer.addEventListener("touchmove", onTouchMove, { passive: false });
        outer.addEventListener("touchend", onTouchEnd, { passive: true });

        return () => {
            cancelAnimationFrame(raf);
            ro.disconnect();
            outer.removeEventListener("wheel", onWheel);
            outer.removeEventListener("touchstart", onTouchStart);
            outer.removeEventListener("touchmove", onTouchMove);
            outer.removeEventListener("touchend", onTouchEnd);
            document.removeEventListener("click", onHashClick);
        };
    }, []);

    return { outerRef, innerRef, scrollY, onFrame };
}


/* ══════════════════════════════════════════
   PRIMITIVE UI COMPONENTS
   ══════════════════════════════════════════ */

function Reveal({ children, delay = 0, style = {} }) {
    const { ref, visible } = useReveal();
    return (
        <div
            ref={ref}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0) scale(1)" : "translateY(40px) scale(.97)",
                filter: visible ? "blur(0px)" : "blur(6px)",
                transition: `opacity .85s cubic-bezier(.16,1,.3,1) ${delay}s, transform .85s cubic-bezier(.16,1,.3,1) ${delay}s, filter .85s cubic-bezier(.16,1,.3,1) ${delay}s`,
                ...style,
            }}
        >
            {children}
        </div>
    );
}

function Tag({ children }) {
    return (
        <div style={{
            fontFamily: MONO, fontSize: ".58rem", color: "#a1a1aa",
            letterSpacing: 3, textTransform: "uppercase", marginBottom: 12,
            display: "flex", alignItems: "center", gap: 10,
        }}>
            <span style={{ width: 20, height: 1, background: "var(--card-glow)" }} />
            {children}
        </div>
    );
}

function Card({ children, glow, style: s = {} }) {
    return (
        <div
            className="card-h"
            style={{
                background: "var(--card-bg)",
                border: `1px solid ${glow ? "var(--card-glow)" : "var(--card-bd)"}`,
                borderRadius: 20, padding: "38px 32px",
                position: "relative", overflow: "hidden",
                ...s,
            }}
        >
            {glow && (
                <div style={{
                    position: "absolute", top: -1, left: "10%", right: "10%", height: 1,
                    background: "linear-gradient(90deg, transparent, var(--card-glow), transparent)",
                }} />
            )}
            {children}
        </div>
    );
}

function NumberTicker({ target, suffix = "", prefix = "", duration = 2000 }) {
    const [val, setVal] = useState(0);
    const { ref, visible } = useReveal();
    const started = useRef(false);

    useEffect(() => {
        if (!visible || started.current) return;
        started.current = true;

        const start = performance.now();
        const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            setVal(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
            else setVal(target);
        };
        requestAnimationFrame(step);
    }, [visible, target, duration]);

    return (
        <span ref={ref} style={{
            fontFamily: MONO, fontSize: "clamp(1.6rem,4vw,2.8rem)",
            fontWeight: 800, letterSpacing: -1, fontVariantNumeric: "tabular-nums",
        }}>
      {prefix}{val}{suffix}
    </span>
    );
}

function HeroBg() {
    return (
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
            <div style={{
                position: "absolute", top: "-20%", left: "10%", width: "80%", height: "70%",
                borderRadius: "50%",
                background: "radial-gradient(ellipse at 50% 60%, var(--glow-purple), rgba(180,190,210,.04) 40%, transparent 70%)",
                filter: "blur(60px)",
            }} />
            <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "30%",
                background: "linear-gradient(to bottom, transparent, var(--bg))",
            }} />
        </div>
    );
}

function Faq({ q, a }) {
    const [open, setOpen] = useState(false);
    return (
        <div style={{ borderBottom: "1px solid var(--faq-divider)" }}>
            <button
                onClick={() => setOpen((p) => !p)}
                style={{
                    width: "100%", textAlign: "left", background: "none", border: "none",
                    padding: "19px 0", fontSize: "1.01rem", fontWeight: 600, color: T.wt,
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    cursor: "pointer", fontFamily: FONT, gap: 16,
                }}
            >
                <span>{q}</span>
                <span style={{
                    width: 23, height: 23, borderRadius: 6, border: `1px solid ${T.bd}`,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    transition: "all .3s", background: open ? T.wt : "transparent",
                    transform: open ? "rotate(45deg)" : "none",
                }}>
          <Plus size={12} color={open ? T.bg : T.gr} />
        </span>
            </button>
            <div style={{ maxHeight: open ? 250 : 0, overflow: "hidden", transition: "max-height .5s cubic-bezier(.16,1,.3,1)" }}>
                <p style={{ padding: "0 0 19px", fontSize: ".97rem", color: T.gr, lineHeight: 1.75 }}>{a}</p>
            </div>
        </div>
    );
}

function SafariFrame({ url = "one-link.kz", src, children, h = 420 }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return;
        const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open]);

    return (
        <>
            {open && (
                <div
                    style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.85)", zIndex: 9998 }}
                    onClick={() => setOpen(false)}
                />
            )}
            <div
                onClick={() => setOpen((p) => !p)}
                style={{
                    position: "relative", zIndex: open ? 9999 : 1,
                    clipPath: "inset(0 round 16px)", WebkitClipPath: "inset(0 round 16px)",
                    borderRadius: 16, border: "1px solid var(--bd)", background: "var(--bg2)",
                    transform: open ? "scale(1.3)" : "scale(1)", transformOrigin: "center center",
                    transition: "transform .5s cubic-bezier(.22,1,.36,1), box-shadow .5s ease",
                    cursor: "pointer",
                    boxShadow: open ? "0 60px 200px rgba(0,0,0,.8)" : "0 25px 80px rgba(0,0,0,.4)",
                }}
            >
                {/* Safari top bar */}
                <div style={{
                    display: "flex", alignItems: "center", padding: "12px 16px",
                    background: "var(--surf)", borderBottom: "1px solid var(--bd)", gap: 10,
                }}>
                    <div style={{ display: "flex", gap: 7, flexShrink: 0 }}>
                        {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                            <span key={c} style={{ width: 12, height: 12, borderRadius: "50%", background: c }} />
                        ))}
                    </div>
                    <div style={{
                        flex: 1, textAlign: "center", background: "var(--card-bg)", borderRadius: 8,
                        padding: "7px 16px", fontFamily: MONO, fontSize: ".72rem", color: "var(--foot-text2)",
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                        overflow: "hidden", whiteSpace: "nowrap",
                    }}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: .6, flexShrink: 0 }}>
                            <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                        {url}
                    </div>
                </div>

                {/* Content */}
                <div style={{ background: "var(--chat-bg)" }}>
                    {src ? (
                        <img src={src} style={{ width: "100%", display: "block" }} alt={url} loading="lazy" />
                    ) : (
                        children || (
                            <div style={{ height: h, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <span style={{ fontFamily: MONO, fontSize: ".65rem", color: "var(--bd)", letterSpacing: 1 }}>SCREENSHOT</span>
                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    );
}


/* ══════════════════════════════════════════
   HERO TYPING ANIMATION
   ══════════════════════════════════════════ */

function Typing() {
    const phrases = [
        "Мессенджеры + CRM + ИИ-агент → одна подписка",
        "AI-агент записывает, квалифицирует, дожимает",
        "Готовые решения: клиники, салоны, школы",
        "Календарь, аналитика, телефония — встроено",
        "Заменяет AmoCRM + Wazzup + ночного менеджера",
    ];
    const [txt, setTxt] = useState("");
    const phraseIdx = useRef(0);
    const charIdx = useRef(0);
    const deleting = useRef(false);
    const timerRef = useRef(null);

    useEffect(() => {
        function tick() {
            const phrase = phrases[phraseIdx.current];

            if (!deleting.current) {
                charIdx.current++;
                setTxt(phrase.slice(0, charIdx.current));
                if (charIdx.current >= phrase.length) {
                    deleting.current = true;
                    timerRef.current = setTimeout(tick, 2200);
                    return;
                }
                timerRef.current = setTimeout(tick, 38);
            } else {
                charIdx.current--;
                setTxt(phrase.slice(0, charIdx.current));
                if (charIdx.current <= 0) {
                    deleting.current = false;
                    phraseIdx.current = (phraseIdx.current + 1) % phrases.length;
                    timerRef.current = setTimeout(tick, 400);
                    return;
                }
                timerRef.current = setTimeout(tick, 18);
            }
        }

        timerRef.current = setTimeout(tick, 600);
        return () => clearTimeout(timerRef.current);
    }, []);

    return (
        <span style={{ fontFamily: MONO, fontSize: "clamp(.72rem,1.1vw,.9rem)", color: T.gr }}>
      {txt}
            <span style={{
                display: "inline-block", width: 2, height: "1em",
                background: "var(--ac)", verticalAlign: "text-bottom",
                marginLeft: 3, animation: "blink .55s step-end infinite",
            }} />
    </span>
    );
}


/* ══════════════════════════════════════════
   CHATWOOT MOCKUP (static)
   ══════════════════════════════════════════ */

function ChatMockup() {
    const sidebarIcons = [
        { icon: <Search size={16} />, active: false },
        { icon: <Pencil size={16} />, active: false },
        { icon: <MessageCircle size={16} />, active: true },
        { icon: <Users size={16} />, active: false },
        { icon: <FolderOpen size={16} />, active: false },
        { icon: <Calendar size={16} />, active: false },
        { icon: <BarChart3 size={16} />, active: false },
        { icon: <Plug size={16} />, active: false },
        { icon: <Bell size={16} />, active: false },
        { icon: <BookOpen size={16} />, active: false },
        { icon: <Settings size={16} />, active: false },
    ];

    const conversations = [
        { name: "Айгерим М.", preview: "Записала на пт, 16:30 ✓", color: "#25d366", time: "14:22", unread: 2, active: true },
        { name: "Ержан К.", preview: "Да, диагностику", color: "#0088cc", time: "13:44", unread: 0, active: false },
        { name: "dana_style", preview: "М! Через Kaspi можно?", color: "#e1306c", time: "12:30", unread: 0, active: false },
    ];

    const messages = [
        { side: "in", text: "Здравствуйте! Хочу записаться к терапевту на пятницу", time: "14:20" },
        { side: "out", text: "Добрый день, Айгерим! На пятницу свободны слоты: 14:00 и 16:30. Какое время удобнее?", time: "14:20", agent: true },
        { side: "out", text: "Оставьте ваш email для связи", time: "14:21", agent: true },
        { side: "in", text: "16:30 пожалуйста", time: "14:22" },
        { side: "in", text: "aigerim.m@mail.kz", time: "14:22" },
        { side: "out", text: "Записала вас на пт, 16:30. Напоминание придёт за час ✓", time: "14:22", agent: true },
    ];

    return (
        <div className="border-beam" style={{
            background: "var(--chat-bg)", borderRadius: 18, border: "1px solid var(--bd)",
            overflow: "hidden", height: "min(740px,85vh)", display: "flex", flexDirection: "column",
            boxShadow: "0 0 0 1px rgba(255,255,255,.03), 0 40px 120px -20px rgba(0,0,0,.8), 0 0 80px -20px #8b5cf618",
            position: "relative", zIndex: 2,
        }}>
            {/* Top glow line */}
            <div style={{ position: "absolute", top: -1, left: "15%", right: "15%", height: 1, background: "linear-gradient(90deg,transparent,#8b5cf655,transparent)", zIndex: 10 }} />

            {/* Safari title bar */}
            <div style={{ padding: "0 16px", height: 46, display: "flex", alignItems: "center", gap: 7, borderBottom: "1px solid var(--bd)", flexShrink: 0, background: "var(--surf)" }}>
                {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                    <span key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />
                ))}
                <div style={{
                    marginLeft: 12, flex: 1, textAlign: "center", background: "var(--card-bg)",
                    borderRadius: 7, padding: "5px 16px", fontFamily: MONO, fontSize: ".68rem",
                    color: T.gr2, display: "flex", alignItems: "center", justifyContent: "center",
                    gap: 6, border: "1px solid var(--bd)", overflow: "hidden", whiteSpace: "nowrap",
                }}>
                    <Globe size={11} style={{ opacity: .55, flexShrink: 0 }} />
                    app.one-link.kz
                </div>
            </div>

            {/* Body */}
            <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

                {/* Icon Sidebar */}
                <div className="cw-sidebar" style={{
                    width: 46, flexShrink: 0, background: "var(--cw-sidebar)",
                    display: "flex", flexDirection: "column", alignItems: "center",
                    paddingTop: 12, paddingBottom: 12, gap: 2, borderRight: "1px solid var(--bd)",
                }}>
                    {/* Logo */}
                    <div style={{ width: 30, height: 30, borderRadius: 8, background: "var(--cw-sidebar-hover)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5Z" fill="var(--cw-sidebar-active)" strokeLinejoin="round" />
                        </svg>
                    </div>

                    {sidebarIcons.map((item, i) => (
                        <div key={i} className="cw-sidebar-icon-wrap" style={{
                            color: item.active ? "var(--cw-sidebar-active)" : "var(--cw-sidebar-icon)",
                            background: item.active ? "var(--cw-sidebar-hover)" : "transparent",
                        }}>
                            {item.icon}
                        </div>
                    ))}

                    <div style={{ flex: 1 }} />

                    {/* User avatar */}
                    <div style={{
                        width: 28, height: 28, borderRadius: "50%", background: "var(--cw-avatar-bg)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: ".6rem", fontWeight: 700, color: "#fff", position: "relative",
                    }}>
                        A
                        <span style={{
                            position: "absolute", bottom: -1, right: -1, width: 8, height: 8,
                            borderRadius: "50%", background: "var(--cw-dot-online)", border: "2px solid var(--cw-sidebar)",
                        }} />
                    </div>
                </div>

                {/* Conversation List */}
                <div className="cw-convlist" style={{
                    width: 260, flexShrink: 0, background: "var(--cw-list-bg)",
                    borderRight: "1px solid var(--cw-list-bd)", display: "flex",
                    flexDirection: "column", overflow: "hidden",
                }}>
                    {/* Header */}
                    <div style={{ padding: "12px 14px 0", display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ fontSize: ".95rem", fontWeight: 700 }}>Диалоги</span>
                        <span style={{ fontSize: ".58rem", fontWeight: 700, background: "var(--cw-badge-bg)", color: "var(--cw-badge-text)", padding: "2px 7px", borderRadius: 100 }}>Открыт</span>
                    </div>

                    {/* Tabs */}
                    <div style={{ display: "flex", padding: "8px 14px 0", gap: 12, borderBottom: "1px solid var(--cw-list-bd)" }}>
                        {[{ l: "Мои", n: "1", a: true }, { l: "Неназначен", n: "0", a: false }, { l: "Все", n: "2", a: false }].map((tab) => (
                            <span key={tab.l} style={{
                                fontSize: ".72rem", fontWeight: 600,
                                color: tab.a ? "var(--cw-tab-active)" : "var(--cw-tab-inactive)",
                                paddingBottom: 8,
                                borderBottom: tab.a ? "2px solid var(--cw-badge-bg)" : "2px solid transparent",
                                cursor: "default",
                            }}>
                {tab.l} <span style={{ opacity: .5 }}>{tab.n}</span>
              </span>
                        ))}
                    </div>

                    {/* Items */}
                    <div style={{ flex: 1, overflow: "hidden" }}>
                        {conversations.map((conv, i) => (
                            <div key={i} className={"cw-conv-item" + (conv.active ? " active" : "")} style={{ borderLeft: conv.active ? undefined : "2px solid transparent" }}>
                                <div style={{
                                    width: 34, height: 34, borderRadius: 9,
                                    background: conv.color + "18", border: "1px solid " + conv.color + "30",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: conv.color, flexShrink: 0, fontSize: ".7rem", fontWeight: 700,
                                }}>
                                    {conv.name.charAt(0)}
                                </div>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 4 }}>
                                        <span style={{ fontSize: ".8rem", fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{conv.name}</span>
                                        <span style={{ fontSize: ".58rem", color: T.gr2, flexShrink: 0 }}>{conv.time}</span>
                                    </div>
                                    <div style={{ fontSize: ".68rem", color: T.gr2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginTop: 1 }}>{conv.preview}</div>
                                </div>
                                {conv.unread > 0 && (
                                    <span style={{
                                        minWidth: 18, height: 18, borderRadius: 100,
                                        background: "var(--cw-badge-bg)", color: "var(--cw-badge-text)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        fontSize: ".48rem", fontWeight: 800, flexShrink: 0,
                                    }}>
                    {conv.unread}
                  </span>
                                )}
                            </div>
                        ))}
                        <div style={{ padding: "20px 14px", textAlign: "center", fontSize: ".72rem", color: T.gr2 }}>
                            Все диалоги загружены 🎉
                        </div>
                    </div>
                </div>

                {/* Main Chat Panel */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0, background: "var(--chat-bg)" }}>
                    {/* Chat header */}
                    <div style={{
                        padding: "0 16px", height: 54, display: "flex", alignItems: "center",
                        justifyContent: "space-between", borderBottom: "1px solid var(--bd)",
                        flexShrink: 0, background: "var(--cw-header-bg)",
                    }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <div style={{
                                width: 34, height: 34, borderRadius: 9,
                                background: "#25d36618", border: "1px solid #25d36630",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                color: "#25d366", fontSize: ".72rem", fontWeight: 700,
                            }}>А</div>
                            <div>
                                <div style={{ fontWeight: 600, fontSize: ".92rem" }}>Айгерим М.</div>
                                <div style={{ fontSize: ".62rem", color: T.gr2, display: "flex", alignItems: "center", gap: 5 }}>
                                    <MessageCircle size={9} style={{ opacity: .5 }} />WhatsApp
                                </div>
                            </div>
                        </div>
                        <span style={{ fontFamily: MONO, fontSize: ".6rem", padding: "4px 10px", borderRadius: 6, background: "var(--cw-badge-bg)", color: "#fff", fontWeight: 600 }}>Завершить</span>
                    </div>

                    {/* Tab bar */}
                    <div style={{ display: "flex", borderBottom: "1px solid var(--bd)", padding: "0 16px", background: "var(--cw-header-bg)" }}>
                        <span style={{ fontSize: ".78rem", fontWeight: 600, padding: "8px 0", color: "var(--cw-tab-active)", borderBottom: "2px solid var(--cw-badge-bg)", marginRight: 16 }}>Сообщения</span>
                        <span style={{ fontSize: ".78rem", fontWeight: 500, padding: "8px 0", color: "var(--cw-tab-inactive)" }}>Calendar</span>
                    </div>

                    {/* Messages */}
                    <div style={{ flex: 1, overflow: "hidden", padding: "16px 18px", display: "flex", flexDirection: "column", gap: 10 }}>
                        {messages.map((m, i) => (
                            <div key={i} style={{ display: "flex", justifyContent: m.side === "in" ? "flex-start" : "flex-end" }}>
                                <div style={{ display: "flex", flexDirection: "column", gap: 4, maxWidth: "72%", alignItems: m.side === "in" ? "flex-start" : "flex-end" }}>
                                    <div className="cw-msg-bubble" style={{
                                        background: m.side === "in" ? "var(--cw-msg-in-bg)" : "var(--cw-msg-out-bg)",
                                        color: m.side === "in" ? "var(--wt)" : "var(--cw-msg-out-text)",
                                        border: m.side === "in" ? "1px solid var(--cw-msg-in-bd)" : "none",
                                        borderBottomLeftRadius: m.side === "in" ? 4 : 12,
                                        borderBottomRightRadius: m.side === "out" ? 4 : 12,
                                    }}>
                                        {m.agent && <div style={{ fontSize: ".52rem", fontWeight: 800, color: "rgba(255,255,255,.5)", marginBottom: 3, letterSpacing: .5 }}>AI AGENT</div>}
                                        <div style={{ whiteSpace: "pre-wrap" }}>{m.text}</div>
                                    </div>
                                    <div className="cw-msg-time" style={{ display: "flex", alignItems: "center", gap: 4 }}>
                                        {m.time}
                                        {m.side === "out" && (
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: .4 }}>
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* System event */}
                        <div style={{ display: "flex", justifyContent: "center", padding: "6px 0" }}>
              <span style={{
                  fontFamily: MONO, fontSize: ".62rem", color: T.gr2,
                  padding: "5px 14px", borderRadius: 100,
                  background: "var(--surf)", border: "1px solid var(--bd)",
                  display: "flex", alignItems: "center", gap: 5,
              }}>
                <span style={{ opacity: .5 }}>→</span>
                CRM: контакт создан · сделка · 25 000 ₸
              </span>
                        </div>
                    </div>

                    {/* Input area */}
                    <div style={{ borderTop: "1px solid var(--bd)", background: "var(--cw-input-bg)" }}>
                        <div style={{ display: "flex", padding: "0 14px", borderBottom: "1px solid var(--bd)" }}>
                            <span className="cw-input-tab active">Ответить</span>
                            <span className="cw-input-tab">Личная заметка</span>
                            <div style={{ flex: 1 }} />
                            <div style={{ display: "flex", alignItems: "center", gap: 4, padding: "4px 0" }}>
                                <div className="cw-bottom-icon" style={{ width: 24, height: 24 }}><Sparkles size={12} /></div>
                                <div className="cw-bottom-icon" style={{ width: 24, height: 24 }}><Maximize2 size={12} /></div>
                            </div>
                        </div>
                        <div style={{ padding: "12px 14px", minHeight: 48 }}>
                            <span style={{ fontSize: ".82rem", color: T.gr2, opacity: .5 }}>Shift + enter для новой строки. '/' для шаблона.</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 14px 10px", borderTop: "1px solid var(--bd)" }}>
                            <div style={{ display: "flex", gap: 2 }}>
                                <div className="cw-bottom-icon"><Smile size={15} /></div>
                                <div className="cw-bottom-icon"><Paperclip size={15} /></div>
                                <div className="cw-bottom-icon"><Mic size={15} /></div>
                                <div className="cw-bottom-icon"><PenTool size={15} /></div>
                            </div>
                            <span className="cw-send-btn">Отправить (CTRL + ↵)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


/* ══════════════════════════════════════════
   MINI ILLUSTRATIONS (for bento cards)
   ══════════════════════════════════════════ */

function InboxMini() {
    const items = [
        { n: "Алия", ch: "WhatsApp", c: "#25d366", ic: MessageCircle, msg: "Хочу записаться на завтра", unread: 2 },
        { n: "Тимур", ch: "Telegram", c: "#0088cc", ic: Send, msg: "Цена 2-комнатной?", unread: 1 },
        { n: "Дана", ch: "Instagram", c: "#e1306c", ic: Instagram, msg: "Скидка на стрижку? 😍", unread: 0 },
    ];

    return (
        <div style={{ borderRadius: 18, border: "1px solid var(--bd)", background: "var(--surf)", overflow: "hidden", width: "100%" }}>
            <div style={{ padding: "14px 18px", borderBottom: "1px solid var(--bd)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontWeight: 700, fontSize: "1rem" }}>Входящие</span>
                <span style={{ fontFamily: MONO, fontSize: ".65rem", color: "#fff", background: "#8b5cf6", padding: "3px 10px", borderRadius: 100, fontWeight: 600 }}>24 новых</span>
            </div>
            {items.map((c, i) => {
                const Icon = c.ic;
                return (
                    <div key={i} style={{
                        padding: "14px 18px", display: "flex", gap: 12, alignItems: "center",
                        borderBottom: i < 2 ? "1px solid var(--bd)" : "none",
                        transition: "background .15s",
                    }}>
                        <div style={{
                            width: 42, height: 42, borderRadius: 12,
                            background: c.c + "20", border: "1.5px solid " + c.c + "40",
                            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                        }}>
                            <Icon size={18} color={c.c} />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <span style={{ fontSize: ".9rem", fontWeight: 700 }}>{c.n} · <span style={{ color: c.c }}>{c.ch}</span></span>
                            </div>
                            <div style={{ fontSize: ".78rem", color: T.gr, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginTop: 2 }}>{c.msg}</div>
                        </div>
                        {c.unread > 0 && (
                            <span style={{
                                minWidth: 22, height: 22, borderRadius: 100,
                                background: c.c, color: "#fff",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontSize: ".6rem", fontWeight: 800, flexShrink: 0,
                            }}>{c.unread}</span>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

function AIChatMini() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
            <div style={{
                alignSelf: "flex-start", maxWidth: "85%", padding: "12px 16px",
                borderRadius: 16, borderBottomLeftRadius: 4,
                background: "var(--bubble-in)", border: "1px solid var(--bubble-in-bd)",
                fontSize: ".9rem", lineHeight: 1.5,
            }}>
                Хочу на маникюр завтра 15:00
            </div>
            <div style={{
                alignSelf: "flex-end", maxWidth: "85%", padding: "12px 16px",
                borderRadius: 16, borderBottomRightRadius: 4,
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "#fff",
                fontSize: ".9rem", lineHeight: 1.5,
                boxShadow: "0 4px 20px rgba(99,102,241,.3)",
            }}>
                <div style={{ fontSize: ".58rem", fontWeight: 800, opacity: .7, marginBottom: 3, letterSpacing: .5 }}>AI AGENT</div>
                Записала на 15:00 к мастеру Айгуль ✓
            </div>
            <div style={{
                alignSelf: "center", fontFamily: MONO, fontSize: ".68rem", color: T.gr,
                padding: "6px 16px", borderRadius: 100,
                background: "rgba(34,197,94,.06)", border: "1px solid rgba(34,197,94,.15)",
                display: "flex", alignItems: "center", gap: 6,
            }}>
                <span style={{ color: T.green }}>→</span> CRM: сделка · 8 500 ₸
            </div>
        </div>
    );
}

function CalendarMini() {
    const slots = [
        { t: "09:00", n: "Айгуль", b: true },
        { t: "10:00", n: "", b: false },
        { t: "11:00", n: "Марат", b: true },
        { t: "12:00", n: "", b: false },
        { t: "14:00", n: "Дана", b: true },
    ];

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 5, width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontFamily: MONO, fontSize: ".7rem", color: T.gr, fontWeight: 600 }}>МАРТ 2026</span>
                <span style={{ fontFamily: MONO, fontSize: ".7rem", color: T.green, fontWeight: 700 }}>3 свободно</span>
            </div>
            {slots.map((s, i) => (
                <div key={i} style={{
                    display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderRadius: 10,
                    background: s.b ? "rgba(139,92,246,.08)" : "rgba(52,211,153,.06)",
                    border: `1.5px solid ${s.b ? "rgba(139,92,246,.18)" : "rgba(52,211,153,.15)"}`,
                    fontSize: ".82rem", transition: "transform .2s",
                }}>
                    <span style={{ fontFamily: MONO, color: T.gr, width: 42, fontWeight: 600 }}>{s.t}</span>
                    <div style={{ flex: 1, height: 1, background: "var(--bd)" }} />
                    {s.b
                        ? <span style={{ color: "#a78bfa", fontWeight: 700 }}>{s.n}</span>
                        : <span style={{ fontFamily: MONO, color: T.green, fontWeight: 700 }}>свободно</span>
                    }
                </div>
            ))}
        </div>
    );
}

function NicheMini({ icon: Icon, name, tags, color }) {
    return (
        <div
            className="niche-h"
            style={{
                padding: "14px 16px", borderRadius: 14, background: "var(--surf)",
                border: "1.5px solid var(--bd)", display: "flex", gap: 14, alignItems: "center",
            }}
        >
            <div style={{
                width: 42, height: 42, borderRadius: 12,
                background: color + "18", border: "1.5px solid " + color + "30",
                display: "flex", alignItems: "center", justifyContent: "center", color, flexShrink: 0,
            }}>
                <Icon size={20} />
            </div>
            <div>
                <div style={{ fontWeight: 700, fontSize: ".95rem" }}>{name}</div>
                <div style={{ fontSize: ".72rem", color: T.gr2 }}>{tags}</div>
                <div style={{ fontSize: ".65rem", color: T.green, fontWeight: 700, marginTop: 2 }}>✓ Готово</div>
            </div>
        </div>
    );
}

function WaveformMini() {
    const bars = useRef(Array.from({ length: 14 }, () => ({
        h: (6 + Math.random() * 14) + "px",
        o: (.4 + Math.random() * .5),
    }))).current;

    return (
        <div style={{ display: "flex", alignItems: "center", gap: 2, height: 20 }}>
            {bars.map((b, i) => (
                <div key={i} style={{
                    width: 2.5, borderRadius: 2, background: T.ac, height: 4,
                    animation: `waveform .8s ${i * .05}s ease infinite alternate`,
                    "--h": b.h, opacity: b.o,
                }} />
            ))}
        </div>
    );
}


/* ══════════════════════════════════════════
   PLATFORM BUILDER (interactive visual)
   ══════════════════════════════════════════ */

const MODULE_DATA = [
    { name: "Мессенджеры", icon: MessageCircle, color: "#25d366", price: 10000, desc: "WhatsApp · Telegram · Instagram · TikTok", emoji: "💬", on: true },
    { name: "CRM", icon: Users, color: "#8b5cf6", price: 8000, desc: "Контакты · Сделки · Воронки продаж", emoji: "👥", on: true },
    { name: "AI-агент", icon: Bot, color: "#a78bfa", price: 15000, desc: "Отвечает 24/7 · Guardrails · Дожим клиентов", emoji: "🤖", on: true },
    { name: "Календарь", icon: Calendar, color: "#fbbf24", price: 5000, desc: "Слоты · Онлайн-запись · Напоминания", emoji: "📅", on: false },
    { name: "Аналитика", icon: BarChart3, color: "#60a5fa", price: 5000, desc: "Отчёты · Конверсии · Эффективность менеджеров", emoji: "📊", on: false },
    { name: "Телефония", icon: Phone, color: "#ef4444", price: 7000, desc: "SIP-номера · Запись звонков · Транскрипция", emoji: "📞", on: false },
];

function PlatformBuilder() {
    const [active, setActive] = useState(MODULE_DATA.map((m) => m.on));
    const count = active.filter(Boolean).length;
    const totalPrice = MODULE_DATA.reduce((sum, m, i) => sum + (active[i] ? m.price : 0), 0);
    const savings = 355000 - totalPrice;

    const toggle = (idx) => {
        setActive((prev) => {
            const next = [...prev];
            next[idx] = !next[idx];
            return next;
        });
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

            {/* ─── Price display ─── */}
            <div style={{
                borderRadius: 20, border: "1px solid var(--card-bd)", background: "var(--card-bg)",
                padding: "28px 32px", display: "flex", justifyContent: "space-between", alignItems: "center",
                flexWrap: "wrap", gap: 16, position: "relative", overflow: "hidden",
            }}>
                <div style={{ position: "absolute", top: -1, left: "10%", right: "10%", height: 1, background: "linear-gradient(90deg, transparent, var(--card-glow), transparent)" }} />
                <div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: 4 }}>Ваша платформа</div>
                    <div style={{ fontSize: ".85rem", color: T.gr }}>
                        Кликните на модуль чтобы {count === 6 ? "убрать" : "добавить"}
                    </div>
                </div>
                <div style={{ textAlign: "right" }}>
                    <div style={{
                        fontFamily: MONO, fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800,
                        color: T.green, letterSpacing: -2, lineHeight: 1,
                        transition: "all .4s cubic-bezier(.16,1,.3,1)",
                    }}>
                        {totalPrice.toLocaleString("ru")} ₸
                    </div>
                    <div style={{ fontFamily: MONO, fontSize: ".7rem", color: T.gr2, marginTop: 4 }}>
                        /мес · экономия <span style={{ color: T.green, fontWeight: 700 }}>{savings > 0 ? `${Math.round(savings / 1000)}к` : "—"}</span> vs AmoCRM+Wazzup
                    </div>
                </div>
            </div>

            {/* ─── Module cards grid ─── */}
            <div className="mod-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
                {MODULE_DATA.map((m, i) => {
                    const Icon = m.icon;
                    const isOn = active[i];
                    return (
                        <div
                            key={i}
                            onClick={() => toggle(i)}
                            style={{
                                borderRadius: 20, padding: "24px 20px",
                                background: isOn ? m.color + "08" : "var(--card-bg)",
                                border: `1.5px solid ${isOn ? m.color + "30" : "var(--card-bd)"}`,
                                cursor: "pointer",
                                transition: "all .4s cubic-bezier(.16,1,.3,1)",
                                transform: isOn ? "scale(1)" : "scale(.97)",
                                boxShadow: isOn ? `0 8px 32px ${m.color}12, 0 0 0 1px ${m.color}10` : "none",
                                position: "relative", overflow: "hidden",
                                display: "flex", flexDirection: "column", gap: 12,
                                userSelect: "none",
                            }}
                        >
                            {/* Active glow */}
                            {isOn && (
                                <div style={{
                                    position: "absolute", top: -40, right: -40, width: 120, height: 120,
                                    borderRadius: "50%", background: m.color + "10",
                                    pointerEvents: "none", transition: "opacity .4s",
                                }} />
                            )}

                            {/* Top row: icon + toggle */}
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "relative" }}>
                                <div style={{
                                    width: 52, height: 52, borderRadius: 14,
                                    background: isOn ? m.color + "1a" : "var(--surf)",
                                    border: `1.5px solid ${isOn ? m.color + "35" : "var(--bd)"}`,
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    transition: "all .4s",
                                }}>
                                    <Icon size={24} color={isOn ? m.color : T.gr2} style={{ transition: "color .3s" }} />
                                </div>

                                {/* Toggle */}
                                <div style={{
                                    width: 48, height: 26, borderRadius: 13,
                                    background: isOn ? m.color : "rgba(255,255,255,.08)",
                                    transition: "background .3s", position: "relative",
                                    boxShadow: isOn ? `0 0 12px ${m.color}40` : "none",
                                }}>
                                    <div style={{
                                        width: 22, height: 22, borderRadius: "50%", background: "#fff",
                                        position: "absolute", top: 2, left: isOn ? 24 : 2,
                                        transition: "left .3s cubic-bezier(.16,1,.3,1)",
                                        boxShadow: "0 2px 8px rgba(0,0,0,.2)",
                                    }} />
                                </div>
                            </div>

                            {/* Name + desc */}
                            <div>
                                <div style={{
                                    fontSize: "1.05rem", fontWeight: 800,
                                    color: isOn ? T.wt : T.gr,
                                    transition: "color .3s",
                                }}>
                                    {m.name}
                                </div>
                                <div style={{
                                    fontSize: ".78rem", color: T.gr2, marginTop: 3, lineHeight: 1.4,
                                }}>
                                    {m.desc}
                                </div>
                            </div>

                            {/* Price tag */}
                            <div style={{
                                fontFamily: MONO, fontSize: ".72rem", fontWeight: 700,
                                color: isOn ? m.color : T.gr2,
                                transition: "color .3s",
                            }}>
                                {isOn ? `+${(m.price / 1000).toFixed(0)} 000 ₸/мес` : "не включён"}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* ─── Summary + comparison ─── */}
            <div style={{
                borderRadius: 20, border: "1px solid var(--card-bd)", background: "var(--card-bg)",
                overflow: "hidden",
            }}>
                {/* Active modules bar */}
                <div style={{
                    padding: "18px 28px", display: "flex", justifyContent: "space-between", alignItems: "center",
                    borderBottom: "1px solid var(--bd)", flexWrap: "wrap", gap: 12,
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ display: "flex" }}>
                            {MODULE_DATA.map((m, i) => active[i] ? (
                                <div key={i} style={{
                                    width: 30, height: 30, borderRadius: "50%",
                                    background: m.color + "1a", border: `2px solid ${m.color}40`,
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    marginLeft: i > 0 ? -8 : 0, position: "relative", zIndex: 6 - i,
                                    transition: "all .3s",
                                }}>
                                    {(() => { const I = m.icon; return <I size={12} color={m.color} />; })()}
                                </div>
                            ) : null)}
                        </div>
                        <span style={{ fontFamily: MONO, fontSize: ".78rem", color: T.gr, fontWeight: 600 }}>
              {count} {count === 1 ? "модуль" : count < 5 ? "модуля" : "модулей"}
            </span>
                    </div>
                    <div style={{ fontSize: ".85rem" }}>
                        Экономия: <span style={{ fontFamily: MONO, fontWeight: 700, color: T.green }}>
              ~{savings > 0 ? savings.toLocaleString("ru") : "0"} ₸/мес
            </span>
                    </div>
                </div>

                {/* Comparison: old vs new */}
                <div className="econ-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                    {/* Without One-Link */}
                    <div style={{ padding: "24px 28px", background: "rgba(239,68,68,.02)", borderRight: "1px solid var(--bd)" }}>
                        <div style={{ fontFamily: MONO, fontSize: ".62rem", color: T.red, letterSpacing: 1, textTransform: "uppercase", marginBottom: 14 }}>Без One-Link</div>
                        {[
                            { n: "AmoCRM", p: "15 000 ₸" },
                            { n: "Wazzup", p: "10 000 ₸" },
                            { n: "IT-настройка", p: "150 000 ₸" },
                            { n: "Ночной менеджер", p: "180 000 ₸" },
                        ].map((it, i) => (
                            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", fontSize: ".84rem", color: T.gr }}>
                                <span>{it.n}</span>
                                <span style={{ fontFamily: MONO, color: T.red, textDecoration: "line-through", opacity: .5 }}>{it.p}</span>
                            </div>
                        ))}
                        <div style={{ marginTop: 14, paddingTop: 12, borderTop: "1px solid var(--bd)", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                            <span style={{ fontWeight: 700, fontSize: ".9rem" }}>Итого</span>
                            <span style={{ fontFamily: MONO, fontWeight: 800, color: T.red, fontSize: "1.1rem" }}>~355 000 ₸</span>
                        </div>
                    </div>

                    {/* With One-Link */}
                    <div style={{ padding: "24px 28px", background: "rgba(34,197,94,.02)" }}>
                        <div style={{ fontFamily: MONO, fontSize: ".62rem", color: T.green, letterSpacing: 1, textTransform: "uppercase", marginBottom: 14 }}>One-Link</div>
                        {MODULE_DATA.map((m, i) => active[i] ? (
                            <div key={i} style={{ display: "flex", alignItems: "center", gap: 7, padding: "5px 0", fontSize: ".84rem", color: T.gr }}>
                                <Check size={13} color={m.color} />
                                <span>{m.name}</span>
                                <span style={{ fontFamily: MONO, fontSize: ".68rem", color: T.gr2, marginLeft: "auto" }}>{(m.price / 1000).toFixed(0)}k</span>
                            </div>
                        ) : null)}
                        <div style={{ marginTop: 14, paddingTop: 12, borderTop: "1px solid var(--bd)", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                            <span style={{ fontWeight: 700, fontSize: ".9rem" }}>Итого</span>
                            <span style={{
                                fontFamily: MONO, fontWeight: 800, color: T.green,
                                fontSize: "1.3rem", transition: "all .4s",
                            }}>
                {totalPrice.toLocaleString("ru")} ₸
              </span>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div style={{ padding: "20px 28px", borderTop: "1px solid var(--bd)", textAlign: "center" }}>
                    <a href="#cta" style={{
                        display: "inline-flex", alignItems: "center", gap: 8,
                        background: T.green, color: "#fff", padding: "13px 32px",
                        borderRadius: 10, fontWeight: 700, fontSize: ".95rem",
                    }}
                       className="cta-btn-h"
                    >
                        <Sparkles size={15} />
                        Запустить за {totalPrice.toLocaleString("ru")} ₸/мес
                    </a>
                </div>
            </div>
        </div>
    );
}


/* ══════════════════════════════════════════
   NAVIGATION COMPONENTS
   ══════════════════════════════════════════ */

function ThemeToggle({ theme, toggle }) {
    return (
        <button className="theme-toggle" onClick={toggle}>
            {theme === "dark" ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
            ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
            )}
        </button>
    );
}

function MobileMenu({ open, onClose }) {
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    return (
        <div style={{ position: "fixed", inset: 0, zIndex: 10000, pointerEvents: open ? "auto" : "none" }}>
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.8)", opacity: open ? 1 : 0, transition: "opacity .3s" }} onClick={onClose} />
            <div style={{
                position: "absolute", top: 0, right: 0, bottom: 0, width: "min(320px,80vw)",
                background: "var(--chat-bg)", borderLeft: "1px solid var(--bd)",
                transform: open ? "translateX(0)" : "translateX(100%)",
                transition: "transform .35s cubic-bezier(.22,1,.36,1)",
                padding: "80px 28px 40px", display: "flex", flexDirection: "column", gap: 0, overflowY: "auto",
            }}>
                <button onClick={onClose} style={{
                    position: "absolute", top: 20, right: 20, width: 36, height: 36,
                    background: "var(--card-bg)", border: "1px solid var(--bd)", borderRadius: 8,
                    cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: T.wt,
                }}>
                    <X size={18} />
                </button>

                {[["#features", "Платформа"], ["#pricing", "Цены"], ["#faq", "FAQ"], ["#cta", "Контакты"]].map(([h, t]) => (
                    <a key={t} href={h} onClick={onClose} style={{
                        fontSize: "1.1rem", fontWeight: 600, color: T.gr, padding: "16px 0",
                        borderBottom: "1px solid var(--bd)",
                    }}>{t}</a>
                ))}

                <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 10, paddingTop: 24 }}>
                    <a href="tel:+77056162603" style={{ fontFamily: MONO, fontSize: ".85rem", color: T.wt, fontWeight: 500, padding: "10px 0" }}>+7 705 616 26 03</a>
                    <a href="#cta" onClick={onClose} style={{ background: T.wt, color: T.bg, padding: "13px 24px", borderRadius: 8, fontSize: ".95rem", fontWeight: 600, textAlign: "center" }}>Получить демо</a>
                </div>
            </div>
        </div>
    );
}


/* ══════════════════════════════════════════
   PARALLAX REVEAL FOOTER
   ══════════════════════════════════════════ */

function RevealFooter({ scrollY, innerRef }) {
    const footerRef = useRef(null);
    const layersRef = useRef([]);
    const glowRef = useRef(null);
    const wmRef = useRef(null);
    const curtainRef = useRef(null);

    useEffect(() => {
        const footer = footerRef.current;
        const inner = innerRef?.current;
        if (!footer || !inner) return;

        let raf;
        let prevProgress = -1;
        const ease = (t) => t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

        const update = () => {
            raf = requestAnimationFrame(update);

            const viewH = window.innerHeight;
            const footerH = footer.offsetHeight;
            const contentH = inner.scrollHeight - footerH;
            const revealStart = contentH - viewH;
            const y = scrollY.current;
            const rawP = Math.max(0, Math.min(1, (y - revealStart) / footerH));

            if (Math.abs(rawP - prevProgress) < 0.001) return;
            prevProgress = rawP;

            // Animate layers
            [
                { speed: 1.6, yStart: 120, yEnd: 0, oStart: 0 },
                { speed: 1.2, yStart: 80, yEnd: 0, oStart: 0 },
                { speed: 0.9, yStart: 50, yEnd: 0, oStart: 0 },
            ].forEach((cfg, i) => {
                const el = layersRef.current[i];
                if (!el) return;
                const lp = Math.min(1, rawP * cfg.speed);
                const ep = ease(lp);
                el.style.transform = `translate3d(0,${cfg.yStart + (cfg.yEnd - cfg.yStart) * ep}px,0)`;
                el.style.opacity = cfg.oStart + (1 - cfg.oStart) * ep;
            });

            // Watermark
            if (wmRef.current) {
                const wmE = ease(Math.min(1, rawP * 0.7));
                wmRef.current.style.transform = `translate3d(0,${60 * (1 - wmE)}px,0) scale(${0.88 + 0.12 * wmE})`;
                wmRef.current.style.opacity = wmE * 0.8;
            }

            // Glow
            if (glowRef.current) {
                const gp = ease(Math.min(1, rawP * 1.3));
                glowRef.current.style.opacity = gp * 0.6;
                glowRef.current.style.transform = `translate(-50%,${-10 * gp}%) scale(${0.8 + 0.4 * gp})`;
            }

            // Curtain
            if (curtainRef.current) {
                curtainRef.current.style.opacity = 1 - ease(Math.min(1, rawP * 2));
            }
        };

        raf = requestAnimationFrame(update);
        return () => cancelAnimationFrame(raf);
    }, [scrollY, innerRef]);

    const setLayerRef = (i) => (el) => { layersRef.current[i] = el; };

    return (
        <footer ref={footerRef} id="parallax-footer" style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 0, background: "var(--foot-bg)", overflow: "hidden" }}>

            {/* Noise texture */}
            <div style={{ position: "absolute", inset: 0, opacity: .04, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: 180, pointerEvents: "none" }} />

            {/* Glow orb */}
            <div ref={glowRef} style={{ position: "absolute", top: "5%", left: "50%", transform: "translate(-50%,0) scale(0.8)", width: "100%", height: "50%", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(139,92,246,.12), rgba(203,209,219,.04) 45%, transparent 70%)", pointerEvents: "none", opacity: 0 }} />

            {/* Curtain */}
            <div ref={curtainRef} style={{ position: "absolute", top: 0, left: 0, right: 0, height: 200, background: "linear-gradient(to bottom, var(--foot-bg), transparent)", pointerEvents: "none", zIndex: 5 }} />

            {/* Top beam */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent 10%, rgba(139,92,246,.2) 30%, rgba(255,255,255,.15) 50%, rgba(139,92,246,.2) 70%, transparent 90%)", zIndex: 6 }} />

            <div style={{ position: "relative", zIndex: 1 }}>

                {/* Layer 0: CTA */}
                <div ref={setLayerRef(0)} style={{ opacity: 0, transform: "translate3d(0,120px,0)", willChange: "transform,opacity" }}>
                    <div className="footer-cta" style={{ padding: "80px 32px 48px", maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 40 }}>
                        <div style={{ maxWidth: 500 }}>
                            <h2 style={{ fontSize: "clamp(2rem,5vw,3.6rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: -1, color: "#fff", marginBottom: 16 }}>Перестаньте терять<br />клиентов.</h2>
                            <p style={{ fontSize: ".95rem", color: "var(--foot-text)", lineHeight: 1.7, maxWidth: 380 }}>Запросите демо — покажем платформу и разберём ваш кейс за 15 минут.</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                                <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <span style={{ fontSize: ".65rem", fontWeight: 800, color: "#fff" }}>OL</span>
                                </div>
                                <span style={{ fontWeight: 700, fontSize: "1.1rem", color: "#fff" }}>One-Link</span>
                            </div>
                            <p style={{ fontSize: ".85rem", color: "var(--foot-text)", lineHeight: 1.7, maxWidth: 280 }}>AI-операционка для бизнеса в Казахстане.</p>
                            <div style={{ display: "flex", gap: 8, marginTop: 4, flexWrap: "wrap" }}>
                                {[
                                    { href: "https://wa.me/77056162603", label: "WhatsApp", bg: "#25d366" },
                                    { href: "https://t.me/khamzauly", label: "Telegram", bg: "rgba(255,255,255,.12)" },
                                    { href: "mailto:info@one-link.kz", label: "Email", bg: "rgba(255,255,255,.12)" },
                                ].map((s, i) => (
                                    <a key={i} href={s.href} target="_blank" rel="noreferrer" className="cta-btn-h" style={{
                                        padding: "10px 20px", borderRadius: 8, background: s.bg, color: "#fff",
                                        fontWeight: 600, fontSize: ".85rem",
                                    }}>
                                        {s.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Layer 1: Links */}
                <div ref={setLayerRef(1)} style={{ opacity: 0, transform: "translate3d(0,80px,0)", willChange: "transform,opacity" }}>
                    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
                        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,.15), transparent)" }} />
                    </div>
                    <div className="footer-links" style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 32px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32 }}>
                        {[
                            { h: "Платформа", l: ["Каналы", "CRM", "AI-агент", "Календарь", "Аналитика"] },
                            { h: "Решения", l: ["Клиники", "Салоны", "Недвижимость", "Образование", "E-commerce"] },
                            { h: "Компания", l: ["Veritas Consult", "Цены", "FAQ", "Контакты"] },
                            { h: "Правовая", l: ["Конфиденциальность", "Условия"] },
                        ].map((col) => (
                            <div key={col.h}>
                                <div style={{ fontFamily: MONO, fontSize: ".6rem", color: "var(--foot-text2)", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 14, fontWeight: 600 }}>{col.h}</div>
                                {col.l.map((t) => (
                                    <div key={t} className="foot-link" style={{ fontSize: ".85rem", color: "var(--foot-text)", marginBottom: 9, cursor: "default" }}>
                                        {t}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Layer 2: Bottom */}
                <div ref={setLayerRef(2)} style={{ opacity: 0, transform: "translate3d(0,50px,0)", willChange: "transform,opacity" }}>
                    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
                        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,.1), transparent)" }} />
                    </div>
                    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
                        <span style={{ fontSize: ".72rem", color: "var(--foot-text3)" }}>© 2026 One-Link · ИП Veritas Consult · Казахстан</span>
                        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                            <span style={{ width: 5, height: 5, borderRadius: "50%", background: T.green }} />
                            <span style={{ fontSize: ".72rem", color: "var(--foot-text3)" }}>Все системы работают</span>
                        </div>
                    </div>
                </div>

                {/* Watermark */}
                <div ref={wmRef} style={{ opacity: 0, transform: "translate3d(0,60px,0) scale(0.88)", willChange: "transform,opacity" }}>
                    <div style={{ textAlign: "center", padding: "20px 0 40px", overflow: "hidden" }}>
            <span style={{
                fontSize: "clamp(4rem,18vw,16rem)", fontWeight: 900, letterSpacing: "-.04em", lineHeight: .85,
                background: "linear-gradient(180deg, rgba(255,255,255,.12), rgba(255,255,255,.02))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                display: "block", userSelect: "none", fontFamily: FONT,
            }}>ONE-LINK</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}


/* ══════════════════════════════════════════
   BRAND SVG ICONS
   ══════════════════════════════════════════ */

function WhatsAppIcon({ size = 32 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <rect width="512" height="512" rx="15%" fill="#25d366"/>
            <path fill="#25d366" stroke="#fff" strokeWidth="26" d="M123 393l14-65a138 138 0 1150 47z"/>
            <path fill="#fff" d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"/>
        </svg>
    );
}

function TelegramIcon({ size = 32 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="14" fill="url(#tgGrad)"/>
            <path d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z" fill="white"/>
            <defs>
                <linearGradient id="tgGrad" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#37BBFE"/><stop offset="1" stopColor="#007DBB"/>
                </linearGradient>
            </defs>
        </svg>
    );
}

function InstagramIcon({ size = 32 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#igR1)"/>
            <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#igR2)"/>
            <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#igR3)"/>
            <path d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z" fill="white"/>
            <defs>
                <radialGradient id="igR1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)">
                    <stop stopColor="#B13589"/><stop offset="0.79309" stopColor="#C62F94"/><stop offset="1" stopColor="#8A3AC8"/>
                </radialGradient>
                <radialGradient id="igR2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)">
                    <stop stopColor="#E0E8B7"/><stop offset="0.444662" stopColor="#FB8A2E"/><stop offset="0.71474" stopColor="#E2425C"/><stop offset="1" stopColor="#E2425C" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="igR3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)">
                    <stop offset="0.156701" stopColor="#406ADC"/><stop offset="0.467799" stopColor="#6A45BE"/><stop offset="1" stopColor="#6A45BE" stopOpacity="0"/>
                </radialGradient>
            </defs>
        </svg>
    );
}


/* ══════════════════════════════════════════
   BEAM SVG DATA
   ══════════════════════════════════════════ */

const BEAM_PATHS = [
    "M160,125 C320,125 350,250 500,250",
    "M160,250 C280,250 320,200 400,200 C440,200 470,250 500,250",
    "M160,375 C320,375 350,250 500,250",
    "M500,250 C650,250 680,125 840,125",
    "M500,250 C540,250 580,300 620,300 C700,300 740,250 840,250",
    "M500,250 C650,250 680,375 840,375",
];

const BEAM_ANIMATIONS = [
    { d: BEAM_PATHS[0], dur: "2.5s", begin: "0s", da: "40 460", off: "500;0" },
    { d: BEAM_PATHS[1], dur: "3s", begin: ".5s", da: "40 520", off: "560;0" },
    { d: BEAM_PATHS[2], dur: "2.8s", begin: "1s", da: "40 460", off: "500;0" },
    { d: BEAM_PATHS[3], dur: "2.6s", begin: ".3s", da: "40 460", off: "0;-500" },
    { d: BEAM_PATHS[4], dur: "3s", begin: ".8s", da: "40 520", off: "0;-560" },
    { d: BEAM_PATHS[5], dur: "3.2s", begin: "1.2s", da: "40 460", off: "0;-500" },
];

const LEFT_NODES = [
    { n: "WhatsApp", c: "#25d366", ic: MessageCircle },
    { n: "Telegram", c: "#0088cc", ic: Send },
    { n: "Instagram", c: "#e1306c", ic: Instagram },
];

const RIGHT_NODES = [
    { n: "CRM", icon: <Users size={22} strokeWidth={1.5} /> },
    { n: "AI-агент", icon: <Bot size={22} strokeWidth={1.5} /> },
    { n: "Календарь", icon: <Calendar size={22} strokeWidth={1.5} /> },
];


/* ══════════════════════════════════════════
   MAIN APP
   ══════════════════════════════════════════ */

export default function App() {
    const { outerRef, innerRef, scrollY, onFrame } = useSmoothScroll();
    const [menuOpen, setMenuOpen] = useState(false);

    // Theme
    const [theme, setTheme] = useState(() => {
        if (typeof window !== "undefined") {
            const saved = window.localStorage?.getItem?.("ol-theme");
            if (saved) return saved;
            if (window.matchMedia?.("(prefers-color-scheme:light)").matches) return "light";
        }
        return "dark";
    });

    const toggleTheme = useCallback(() => {
        setTheme((prev) => {
            const next = prev === "dark" ? "light" : "dark";
            try { window.localStorage?.setItem?.("ol-theme", next); } catch {}
            return next;
        });
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    // Footer height
    const [footerH, setFooterH] = useState(950);
    useEffect(() => {
        const footer = document.querySelector("footer");
        if (!footer) return;
        const ro = new ResizeObserver(() => setFooterH(footer.offsetHeight));
        ro.observe(footer);
        return () => ro.disconnect();
    }, []);

    // Nav visibility + lift shadow (merged into smooth scroll RAF)
    useEffect(() => {
        let prevNav = false;
        let prevShadow = -1;
        const ease = (t) => t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

        onFrame.current = (y) => {
            const navEl = document.getElementById("main-nav");
            const show = y > 50;
            if (show !== prevNav && navEl) {
                prevNav = show;
                navEl.style.background = show ? "var(--nav-bg)" : "transparent";
                navEl.style.borderBottom = show ? "1px solid var(--bd)" : "1px solid transparent";
                navEl.style.padding = show ? "9px 0" : "15px 0";
            }

            const inner = innerRef.current;
            const footer = document.getElementById("parallax-footer");
            if (inner && footer) {
                const viewH = window.innerHeight;
                const fH = footer.offsetHeight;
                const contentH = inner.scrollHeight - fH;
                const revealStart = contentH - viewH;
                const rawP = Math.max(0, Math.min(1, (y - revealStart) / fH));
                if (Math.abs(rawP - prevShadow) > 0.003) {
                    prevShadow = rawP;
                    const liftEl = document.getElementById("lift-shadow");
                    if (liftEl) liftEl.style.opacity = String(ease(Math.min(1, rawP * 2.5)) * 0.85);
                }
            }
        };
        return () => { onFrame.current = null; };
    }, [onFrame, innerRef]);


    /* ── RENDER ── */
    return (
        <div ref={outerRef} style={{ position: "fixed", inset: 0, overflow: "hidden", zIndex: 0 }}>
            <style>{CSS}</style>
            <RevealFooter scrollY={scrollY} innerRef={innerRef} />
            <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
            <ThemeToggle theme={theme} toggle={toggleTheme} />

            {/* ═══ NAV ═══ */}
            <nav id="main-nav" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 9990, background: "transparent", borderBottom: "1px solid transparent", transition: "all .35s", padding: "15px 0" }}>
                <div className="w" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <a href="#" style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 700, fontSize: ".92rem", letterSpacing: -.3 }}>
                        <div style={{ width: 27, height: 27, borderRadius: 7, background: T.wt, display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".55rem", fontWeight: 800, color: T.bg }}>OL</div>
                        One-Link
                    </a>
                    <div className="nav-r" style={{ display: "flex", alignItems: "center", gap: 20 }}>
                        {[["#features", "Платформа"], ["#pricing", "Цены"], ["#faq", "FAQ"]].map(([h, t]) => (
                            <a key={t} href={h} className="nav-link" style={{ fontSize: ".92rem", color: T.gr, fontWeight: 500 }}>{t}</a>
                        ))}
                        <a href="tel:+77056162603" style={{ fontFamily: MONO, fontSize: ".8rem", color: T.wt, fontWeight: 500 }}>+7 705 616 26 03</a>
                        <a href="#cta" style={{ background: T.wt, color: T.bg, padding: "9px 22px", borderRadius: 7, fontSize: ".92rem", fontWeight: 600 }}>Демо</a>
                    </div>
                    <button className="burger-btn" onClick={() => setMenuOpen(true)} style={{ display: "none", width: 36, height: 36, background: "var(--card-bg)", border: "1px solid var(--bd)", borderRadius: 8, cursor: "pointer", alignItems: "center", justifyContent: "center", color: T.wt }}>
                        <Menu size={18} />
                    </button>
                </div>
            </nav>

            {/* ═══ SCROLL CONTAINER ═══ */}
            <div ref={innerRef} style={{ position: "relative", zIndex: 1, pointerEvents: "none" }}>
                <div id="content-body" style={{ pointerEvents: "auto", background: "var(--bg)", position: "relative", borderRadius: "0 0 24px 24px", overflow: "hidden", boxShadow: "var(--content-shadow)" }}>


                    {/* ════════════════════════════════════
             SECTION: HERO
             ════════════════════════════════════ */}
                    <section style={{ paddingTop: 145, paddingBottom: 60, position: "relative", overflow: "hidden", minHeight: "100vh" }}>
                        <HeroBg />

                        {/* Meteor streaks */}
                        {[...Array(4)].map((_, i) => (
                            <div key={i} style={{
                                position: "absolute", width: 100 + i * 30, height: 1,
                                background: "linear-gradient(90deg, var(--meteor-color), transparent)",
                                transform: "rotate(-35deg)",
                                animation: `meteor ${5 + i * 2}s ${i * 1.5}s linear infinite`,
                                opacity: 0, top: (10 + i * 18) + "%", left: (5 + i * 12) + "%",
                                zIndex: 0, pointerEvents: "none",
                            }} />
                        ))}

                        <div className="w" style={{ textAlign: "center" }}>
                            <Reveal delay={.06}>
                                <h1 style={{
                                    fontSize: "clamp(2.4rem,7vw,5.2rem)", fontWeight: 800, lineHeight: 1.05,
                                    letterSpacing: "clamp(-1px,-.3vw,-2px)", marginBottom: 14,
                                    background: "linear-gradient(180deg, var(--grad-text-from) 30%, var(--grad-text-to) 100%)",
                                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                                }}>
                                    Ваш бизнес.<br />На автопилоте.
                                </h1>
                            </Reveal>

                            <Reveal delay={.12}>
                                <p style={{ fontSize: "clamp(.95rem,1.5vw,1.15rem)", color: T.gr, lineHeight: 1.6, maxWidth: 560, margin: "0 auto 8px" }}>
                                    Мессенджеры, CRM, AI-агент, календарь и аналитика — в одной подписке. Собираем платформу под ваш бизнес.
                                </p>
                            </Reveal>

                            <Reveal delay={.14}>
                                <div style={{ margin: "8px auto 24px" }}><Typing /></div>
                            </Reveal>

                            <Reveal delay={.24}>
                                <div className="hero-btns" style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
                                    <a href="#cta" style={{
                                        display: "inline-flex", alignItems: "center", gap: 7,
                                        background: T.wt, color: T.bg, padding: "15px 34px", borderRadius: 10,
                                        fontWeight: 600, fontSize: "1.02rem", position: "relative", overflow: "hidden",
                                        boxShadow: "0 0 20px var(--glow-purple), 0 0 60px var(--glow-purple)",
                                    }}>
                                        <span style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, transparent, var(--shimmer), transparent)", transform: "translateX(-100%)", animation: "shimmerSlide 3s 1s infinite" }} />
                                        <Sparkles size={15} />Запросить демо
                                    </a>
                                    <a href="#features" style={{
                                        display: "inline-flex", alignItems: "center", gap: 7,
                                        padding: "14px 30px", borderRadius: 8, border: "1px solid " + T.bd,
                                        color: T.wt, fontWeight: 500, fontSize: "1rem", background: "var(--surf)",
                                    }}>
                                        Как это работает <ChevronDown size={15} />
                                    </a>
                                </div>
                            </Reveal>
                        </div>

                        {/* ChatMockup */}
                        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 1, marginTop: 80 }}>
                            <Reveal delay={.3}><ChatMockup /></Reveal>
                        </div>

                        {/* Stats bar — with background band */}
                        <div style={{
                            position: "relative", zIndex: 1, marginTop: 48,
                            marginLeft: -9999, marginRight: -9999, paddingLeft: 9999, paddingRight: 9999,
                            paddingTop: 48, paddingBottom: 48,
                            background: "var(--sec-alt)",
                            borderTop: "1px solid var(--bd)", borderBottom: "1px solid var(--bd)",
                        }}>
                            {/* Subtle glow */}
                            <div style={{
                                position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
                                width: "60%", height: "200%", borderRadius: "50%",
                                background: "radial-gradient(ellipse, rgba(139,92,246,.03), transparent 60%)",
                                pointerEvents: "none",
                            }} />

                            <div className="w" style={{ position: "relative" }}>
                                <Reveal delay={.35}>
                                    <div className="stats-row" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 20 }}>
                                        {[
                                            { target: 90, suffix: "%", prefix: "", label: "обращений — ИИ" },
                                            { target: 30, suffix: "с", prefix: "<", label: "время ответа" },
                                            { target: 3, suffix: " дня", prefix: "", label: "запуск с нуля" },
                                            { target: 25, suffix: "к ₸", prefix: "от ", label: "в месяц" },
                                        ].map((s, i) => (
                                            <div key={i} style={{ textAlign: "center", padding: "20px 12px" }}>
                                                <NumberTicker target={s.target} suffix={s.suffix} prefix={s.prefix} />
                                                <div style={{ fontSize: ".75rem", color: T.gr, marginTop: 6, letterSpacing: .3, lineHeight: 1.4 }}>{s.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <p style={{ fontFamily: MONO, fontSize: ".6rem", color: T.gr2, letterSpacing: 2, textTransform: "uppercase", textAlign: "center" }}>
                                        Заменяет AmoCRM + Wazzup + ChatGPT + ночного менеджера
                                    </p>
                                </Reveal>
                            </div>
                        </div>
                    </section>


                    {/* ════════════════════════════════════
             SECTION: ОДИН ПРОДУКТ (bento cards)
             ════════════════════════════════════ */}
                    <section id="features" style={{ paddingTop: 40, paddingBottom: 72 }}>
                        <div className="w">
                            <Reveal>
                                <Tag>ПЛАТФОРМА</Tag>
                                <h2 style={{
                                    fontSize: "clamp(2rem,4.5vw,3.4rem)", fontWeight: 800, letterSpacing: "-0.03em",
                                    lineHeight: 1.08, marginBottom: 32,
                                    background: "linear-gradient(180deg, var(--grad-text-from) 20%, var(--grad-text-to) 100%)",
                                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                                }}>
                                    Один продукт вместо<br />десяти сервисов
                                </h2>
                            </Reveal>

                            <div className="g2" style={{ marginTop: 0, gap: 14 }}>

                                {/* ── Каналы ── */}
                                <Reveal delay={.08}>
                                    <Card style={{ height: "100%" }}>
                                        <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: 14 }}>Все каналы. Одно окно.</h3>
                                        {["WhatsApp + Telegram + Instagram", "TikTok + Facebook + Email", "Все сообщения в одном inbox"].map((t, i) => (
                                            <div key={i} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: ".85rem", color: T.gr, padding: "3px 0" }}>
                                                <Check size={13} color={T.green} style={{ flexShrink: 0 }} />{t}
                                            </div>
                                        ))}
                                        <div style={{ marginTop: 20 }}>
                                            <InboxMini />
                                        </div>
                                    </Card>
                                </Reveal>

                                {/* ── AI-агент ── */}
                                <Reveal delay={.12}>
                                    <Card glow style={{ height: "100%" }}>
                                        <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: 14 }}>AI-агент. Работает 24/7.</h3>
                                        {["Записывает клиентов на приём", "Создаёт сделки в CRM", "Квалифицирует заявки", "Отправляет Kaspi-ссылку"].map((t, i) => (
                                            <div key={i} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: ".85rem", color: T.gr, padding: "3px 0" }}>
                                                <Check size={13} color={T.ac} style={{ flexShrink: 0 }} />{t}
                                            </div>
                                        ))}
                                        <div style={{ marginTop: 20 }}>
                                            <AIChatMini />
                                        </div>
                                    </Card>
                                </Reveal>

                                {/* ── Ниши ── */}
                                <Reveal delay={.16}>
                                    <Card style={{ height: "100%" }}>
                                        <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: 14 }}>Готовое решение. Под нишу.</h3>
                                        {["Готовые AI-скрипты", "CRM-интеграции настроены", "Не нужен IT-специалист"].map((t, i) => (
                                            <div key={i} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: ".85rem", color: T.gr, padding: "3px 0" }}>
                                                <Check size={13} color={T.green} style={{ flexShrink: 0 }} />{t}
                                            </div>
                                        ))}
                                        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 20 }}>
                                            <NicheMini icon={Stethoscope} name="Медцентры" tags="Запись, Altegio" color="#ef4444" />
                                            <NicheMini icon={Home} name="Недвижимость" tags="MacroCRM" color="#60a5fa" />
                                            <NicheMini icon={Scissors} name="Салоны красоты" tags="Расписание" color="#f472b6" />
                                            <NicheMini icon={GraduationCap} name="Образование" tags="Курсы, оплата" color="#fbbf24" />
                                        </div>
                                    </Card>
                                </Reveal>

                                {/* ── Календарь ── */}
                                <Reveal delay={.2}>
                                    <Card style={{ height: "100%" }}>
                                        <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: 14 }}>Календарь и запись.</h3>
                                        {["AI видит свободные слоты", "Записывает автоматически", "Напоминание за час"].map((t, i) => (
                                            <div key={i} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: ".85rem", color: T.gr, padding: "3px 0" }}>
                                                <Check size={13} color={T.green} style={{ flexShrink: 0 }} />{t}
                                            </div>
                                        ))}
                                        <div style={{ marginTop: 20 }}>
                                            <CalendarMini />
                                        </div>
                                    </Card>
                                </Reveal>
                            </div>

                            {/* ─── Beam SVG: animated integration map ─── */}
                            <Reveal delay={.2} style={{ marginTop: 48 }}>
                                <div style={{ textAlign: "center", marginBottom: 20 }}>
                                    <span style={{ fontFamily: MONO, fontSize: ".6rem", color: T.gr2, letterSpacing: 3, textTransform: "uppercase" }}>Единый контур</span>
                                    <h3 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, marginTop: 10, color: T.wt }}>Всё подключено. Всё работает вместе.</h3>
                                </div>
                                <div style={{
                                    position: "relative",
                                    padding: "80px 60px", overflow: "hidden",
                                    maxWidth: 1100, margin: "0 auto",
                                }}>
                                    {/* Center glow */}
                                    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(139,92,246,.07), transparent 60%)", pointerEvents: "none" }} />

                                    {/* SVG curved paths */}
                                    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }} viewBox="0 0 1100 480" fill="none" preserveAspectRatio="xMidYMid meet">
                                        <defs>
                                            {[
                                                { id: "bG", c: "#25d366" }, { id: "bB", c: "#29b6f6" }, { id: "bP", c: "#e1306c" },
                                                { id: "bV", c: "#8b5cf6" }, { id: "bS", c: "#60a5fa" }, { id: "bY", c: "#fbbf24" },
                                            ].map((g) => (
                                                <linearGradient key={g.id} id={g.id}>
                                                    <stop offset="0%" stopColor={g.c + "00"} />
                                                    <stop offset="50%" stopColor={g.c} />
                                                    <stop offset="100%" stopColor={g.c + "00"} />
                                                </linearGradient>
                                            ))}
                                        </defs>

                                        {/* Static gray paths */}
                                        {[
                                            "M160,90 C360,90 420,240 550,240",
                                            "M160,240 C340,240 420,240 550,240",
                                            "M160,390 C360,390 420,240 550,240",
                                            "M550,240 C680,240 720,90 940,90",
                                            "M550,240 C680,240 760,240 940,240",
                                            "M550,240 C680,240 720,390 940,390",
                                        ].map((d, i) => (
                                            <path key={i} d={d} stroke="var(--beam-line)" strokeWidth="1.5" />
                                        ))}

                                        {/* Animated colored beams */}
                                        {[
                                            { d: "M160,90 C360,90 420,240 550,240", g: "url(#bG)", dur: "2.5s", begin: "0s" },
                                            { d: "M160,240 C340,240 420,240 550,240", g: "url(#bB)", dur: "2s", begin: ".4s" },
                                            { d: "M160,390 C360,390 420,240 550,240", g: "url(#bP)", dur: "2.8s", begin: ".8s" },
                                            { d: "M550,240 C680,240 720,90 940,90", g: "url(#bV)", dur: "2.4s", begin: ".2s" },
                                            { d: "M550,240 C680,240 760,240 940,240", g: "url(#bS)", dur: "2.2s", begin: ".6s" },
                                            { d: "M550,240 C680,240 720,390 940,390", g: "url(#bY)", dur: "3s", begin: "1s" },
                                        ].map((p, i) => (
                                            <path key={"a" + i} d={p.d} stroke={p.g} strokeWidth="2.5" strokeDasharray="50 550" strokeLinecap="round">
                                                <animate attributeName="stroke-dashoffset" values={i < 3 ? "600;0" : "0;-600"} dur={p.dur} repeatCount="indefinite" begin={p.begin} />
                                            </path>
                                        ))}
                                    </svg>

                                    {/* Node layout */}
                                    <div className="beam-grid" style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, alignItems: "center", minHeight: 440 }}>

                                        {/* Left nodes */}
                                        <div style={{ display: "flex", flexDirection: "column", gap: 48, alignItems: "center" }}>
                                            {[
                                                { n: "WhatsApp", icon: <WhatsAppIcon size={44} /> },
                                                { n: "Telegram", icon: <TelegramIcon size={44} /> },
                                                { n: "Instagram", icon: <InstagramIcon size={44} /> },
                                            ].map((item, i) => (
                                                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                                                    <div style={{
                                                        width: 76, height: 76, borderRadius: "50%",
                                                        background: "#fff", border: "2px solid var(--bd)",
                                                        display: "flex", alignItems: "center", justifyContent: "center",
                                                        boxShadow: "0 0 20px -8px rgba(0,0,0,.3)",
                                                        transition: "transform .3s, box-shadow .3s",
                                                        overflow: "hidden",
                                                    }} className="node-h">
                                                        {item.icon}
                                                    </div>
                                                    <span style={{ fontSize: ".85rem", fontWeight: 600, color: T.gr }}>{item.n}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Center hub */}
                                        <div className="beam-center" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <div style={{ position: "relative" }}>
                                                {/* Outer glow ring */}
                                                <div style={{
                                                    position: "absolute", inset: -30, borderRadius: "50%",
                                                    background: "radial-gradient(circle, rgba(139,92,246,.14), transparent 70%)",
                                                    pointerEvents: "none",
                                                }} />
                                                {/* Dashed orbit */}
                                                <div style={{
                                                    position: "absolute", inset: -18, borderRadius: "50%",
                                                    border: "1px dashed rgba(139,92,246,.2)",
                                                    animation: "spin 25s linear infinite",
                                                }} />
                                                {/* Core circle */}
                                                <div style={{
                                                    width: 130, height: 130, borderRadius: "50%",
                                                    background: "#fff", border: "2px solid rgba(139,92,246,.25)",
                                                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6,
                                                    boxShadow: "0 0 50px rgba(139,92,246,.18), 0 0 100px rgba(139,92,246,.06)",
                                                    position: "relative", zIndex: 1,
                                                }}>
                                                    <div style={{
                                                        width: 48, height: 48, borderRadius: 12,
                                                        background: "#101018", display: "flex", alignItems: "center", justifyContent: "center",
                                                    }}>
                                                        <span style={{ fontSize: ".7rem", fontWeight: 800, color: "#fff", letterSpacing: 1.5 }}>OL</span>
                                                    </div>
                                                    <span style={{ fontFamily: MONO, fontSize: ".55rem", fontWeight: 700, color: "#101018", letterSpacing: 2 }}>ONE-LINK</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right nodes */}
                                        <div style={{ display: "flex", flexDirection: "column", gap: 48, alignItems: "center" }}>
                                            {[
                                                { n: "CRM", c: "#8b5cf6", ic: Users },
                                                { n: "AI-агент", c: "#6366f1", ic: Bot },
                                                { n: "Календарь", c: "#fbbf24", ic: Calendar },
                                            ].map((item, i) => {
                                                const Icon = item.ic;
                                                return (
                                                    <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                                                        <div style={{
                                                            width: 76, height: 76, borderRadius: "50%",
                                                            background: "#fff", border: "2px solid var(--bd)",
                                                            display: "flex", alignItems: "center", justifyContent: "center",
                                                            boxShadow: "0 0 20px -8px rgba(0,0,0,.3)",
                                                            transition: "transform .3s, box-shadow .3s",
                                                        }} className="node-h">
                                                            <Icon size={30} color={item.c} />
                                                        </div>
                                                        <span style={{ fontSize: ".85rem", fontWeight: 600, color: T.gr }}>{item.n}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </section>

                    {/* ════════════════════════════════════
             SECTION: ЧТО УМЕЕТ ИИ-АГЕНТ
             ════════════════════════════════════ */}
                    <section className="sec-alt" style={{ paddingTop: 72, paddingBottom: 72 }}>
                        <div className="w">
                            <Reveal>
                                <Tag>ИИ-АГЕНТ</Tag>
                                <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, letterSpacing: -.5, marginBottom: 40 }}>
                                    Что умеет <span style={{ color: T.gr }}>ИИ-агент</span>
                                </h2>
                            </Reveal>

                            {/* ─── Top row: 2 big visual cards ─── */}
                            <div className="g2" style={{ gap: 16, marginBottom: 16 }}>

                                {/* Card 1: 24/7 во всех каналах — BIG illustration */}
                                <Reveal delay={.08}>
                                    <Card style={{ height: "100%", padding: "32px 28px 0", overflow: "hidden" }}>
                                        <h3 style={{ fontSize: "1.2rem", fontWeight: 800, lineHeight: 1.2, marginBottom: 6 }}>
                                            Агент отвечает 24/7<br />во всех каналах
                                        </h3>
                                        <p style={{ fontSize: ".85rem", color: T.gr, lineHeight: 1.5, marginBottom: 20 }}>
                                            AI-агент работает в WhatsApp, Telegram, Instagram и на сайте
                                        </p>

                                        {/* Illustration area */}
                                        <div style={{
                                            position: "relative", height: 220, borderRadius: "16px 16px 0 0",
                                            background: "linear-gradient(180deg, var(--surf), transparent)",
                                            overflow: "visible",
                                        }}>
                                            {/* Floating messenger icons */}
                                            {[
                                                { ic: MessageCircle, c: "#25d366", x: "15%", y: "20%", s: 52, d: 0, label: "WhatsApp" },
                                                { ic: Send, c: "#29b6f6", x: "8%", y: "55%", s: 44, d: .4, label: "Telegram" },
                                                { ic: Instagram, c: "#e1306c", x: "25%", y: "75%", s: 48, d: .8, label: "Instagram" },
                                                { ic: Globe, c: "#4a90d9", x: "70%", y: "15%", s: 36, d: .2, label: "Web" },
                                                { ic: Play, c: "#fff", x: "78%", y: "60%", s: 38, d: .6, label: "TikTok" },
                                            ].map((item, i) => {
                                                const Icon = item.ic;
                                                return (
                                                    <div key={i} style={{
                                                        position: "absolute", left: item.x, top: item.y,
                                                        animation: `float 4s ${item.d}s ease-in-out infinite`,
                                                    }}>
                                                        <div style={{
                                                            width: item.s, height: item.s, borderRadius: item.s * .28,
                                                            background: item.c + "14", border: `1.5px solid ${item.c}30`,
                                                            display: "flex", alignItems: "center", justifyContent: "center",
                                                            backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
                                                            boxShadow: `0 8px 24px ${item.c}18`,
                                                            transition: "transform .3s, box-shadow .3s",
                                                        }}
                                                             className="node-h"
                                                        >
                                                            <Icon size={item.s * .4} color={item.c} />
                                                        </div>
                                                    </div>
                                                );
                                            })}

                                            {/* Center: chat bubble + bot */}
                                            <div style={{
                                                position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)",
                                                display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
                                            }}>
                                                <div style={{
                                                    width: 60, height: 60, borderRadius: "50%",
                                                    background: "linear-gradient(135deg, #8b5cf6, #6366f1)",
                                                    display: "flex", alignItems: "center", justifyContent: "center",
                                                    boxShadow: "0 8px 32px rgba(99,102,241,.3)",
                                                }}>
                                                    <Bot size={28} color="#fff" />
                                                </div>
                                                <span style={{ fontFamily: MONO, fontSize: ".6rem", color: T.gr2 }}>AI AGENT</span>
                                            </div>
                                        </div>

                                        {/* Tag pills */}
                                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, padding: "12px 0 20px", justifyContent: "center" }}>
                                            {["Мгновенно", "24/7", "Мультиканальность", "Автоответы", "Дожим"].map((t, i) => (
                                                <span key={i} style={{
                                                    fontFamily: MONO, fontSize: ".62rem", padding: "5px 12px",
                                                    borderRadius: 100, background: "var(--surf)", border: "1px solid var(--bd)",
                                                    color: T.gr2,
                                                }}
                                                >{t}</span>
                                            ))}
                                        </div>
                                    </Card>
                                </Reveal>

                                {/* Card 2: CRM интеграции — BIG illustration */}
                                <Reveal delay={.12}>
                                    <Card style={{ height: "100%", padding: "32px 28px 0", overflow: "hidden" }}>
                                        <h3 style={{ fontSize: "1.2rem", fontWeight: 800, lineHeight: 1.2, marginBottom: 6 }}>
                                            Подключите к вашим<br />CRM и ERP системам
                                        </h3>
                                        <p style={{ fontSize: ".85rem", color: T.gr, lineHeight: 1.5, marginBottom: 20 }}>
                                            Единая работа с клиентами, задачами и данными вашего бизнеса
                                        </p>

                                        {/* Illustration: floating CRM logos */}
                                        <div style={{
                                            position: "relative", height: 220, borderRadius: "16px 16px 0 0",
                                            background: "linear-gradient(180deg, var(--surf), transparent)",
                                            overflow: "visible",
                                        }}>
                                            {[
                                                { n: "amoCRM", c: "#339dc9", x: "10%", y: "25%", s: 50, d: 0 },
                                                { n: "Bitrix24", c: "#2fc6f6", x: "55%", y: "10%", s: 48, d: .3 },
                                                { n: "Altegio", c: "#7c3aed", x: "72%", y: "45%", s: 44, d: .6 },
                                                { n: "1С", c: "#ef4444", x: "20%", y: "65%", s: 40, d: .2 },
                                                { n: "Kaspi", c: "#f14635", x: "60%", y: "72%", s: 42, d: .5 },
                                                { n: "MacroCRM", c: "#f59e0b", x: "82%", y: "20%", s: 38, d: .8 },
                                            ].map((crm, i) => (
                                                <div key={i} style={{
                                                    position: "absolute", left: crm.x, top: crm.y,
                                                    animation: `float 4.5s ${crm.d}s ease-in-out infinite`,
                                                }}>
                                                    <div style={{
                                                        padding: "8px 16px", borderRadius: 10,
                                                        background: crm.c + "10", border: `1.5px solid ${crm.c}25`,
                                                        backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
                                                        boxShadow: `0 6px 20px ${crm.c}12`,
                                                    }}
                                                         className="node-h"
                                                    >
                                                        <span style={{ fontFamily: MONO, fontSize: ".78rem", fontWeight: 700, color: crm.c }}>{crm.n}</span>
                                                    </div>
                                                </div>
                                            ))}

                                            {/* Center: sync arrows */}
                                            <div style={{
                                                position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)",
                                            }}>
                                                <div style={{
                                                    width: 56, height: 56, borderRadius: "50%",
                                                    background: "var(--bg)", border: "2px dashed var(--bd)",
                                                    display: "flex", alignItems: "center", justifyContent: "center",
                                                    animation: "spin 20s linear infinite",
                                                }}>
                                                    <div style={{ animation: "spin 20s linear infinite reverse", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                        <Users size={22} color={T.ac} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bottom note */}
                                        <div style={{ padding: "12px 0 20px", textAlign: "center" }}>
                                            <span style={{ fontSize: ".8rem", color: T.gr2 }}>Или используйте <strong style={{ color: T.green }}>встроенную CRM</strong> — без сторонних сервисов</span>
                                        </div>
                                    </Card>
                                </Reveal>
                            </div>

                            {/* ─── Bottom row: 3 compact cards ─── */}
                            <div className="g3" style={{ gap: 16 }}>

                                {/* Follow-ups */}
                                <Reveal delay={.16}>
                                    <Card style={{ height: "100%" }}>
                                        <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 4 }}>Дожимные сообщения</h3>
                                        <p style={{ fontSize: ".78rem", color: T.gr2, marginBottom: 14 }}>Автоматические напоминания</p>
                                        <div style={{
                                            padding: "12px 14px", borderRadius: 12,
                                            background: "linear-gradient(135deg, rgba(139,92,246,.08), rgba(99,102,241,.04))",
                                            border: "1px solid rgba(139,92,246,.12)",
                                            fontSize: ".85rem", lineHeight: 1.5, marginBottom: 8,
                                        }}>
                                            Привет! Напоминаю про запрос — готов помочь 😊
                                        </div>
                                        <div style={{ display: "flex", gap: 6 }}>
                                            {["1ч", "24ч", "48ч"].map((t, i) => (
                                                <span key={i} style={{ fontFamily: MONO, fontSize: ".6rem", padding: "3px 10px", borderRadius: 100, background: "var(--surf)", border: "1px solid var(--bd)", color: T.gr2 }}>{t}</span>
                                            ))}
                                        </div>
                                    </Card>
                                </Reveal>

                                {/* Voice + Images */}
                                <Reveal delay={.2}>
                                    <Card style={{ height: "100%" }}>
                                        <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 4 }}>Изображения и голос</h3>
                                        <p style={{ fontSize: ".78rem", color: T.gr2, marginBottom: 14 }}>Понимает фото и голосовые</p>
                                        <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                                            <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg, #818cf8, #6366f1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <Image size={20} color="#fff" />
                                            </div>
                                            <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg, #f472b6, #ec4899)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <Mic size={20} color="#fff" />
                                            </div>
                                        </div>
                                        <div style={{ padding: "8px 12px", borderRadius: 10, background: "var(--surf)", border: "1px solid var(--bd)", display: "flex", alignItems: "center", gap: 8 }}>
                                            <Play size={13} color={T.ac} />
                                            <WaveformMini />
                                            <span style={{ fontFamily: MONO, fontSize: ".6rem", color: T.gr2 }}>0:06</span>
                                        </div>
                                    </Card>
                                </Reveal>

                                {/* Languages */}
                                <Reveal delay={.24}>
                                    <Card style={{ height: "100%" }}>
                                        <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 4 }}>Мультиязычность</h3>
                                        <p style={{ fontSize: ".78rem", color: T.gr2, marginBottom: 14 }}>150+ языков без ограничений</p>
                                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                                            {[
                                                { l: "Русский", c: "#8b5cf6" },
                                                { l: "Қазақша", c: "#22c55e" },
                                                { l: "English", c: "#60a5fa" },
                                                { l: "150+", c: T.gr2 },
                                            ].map((lang, i) => (
                                                <span key={i} style={{
                                                    padding: "7px 16px", borderRadius: 10,
                                                    background: lang.c + "10", border: `1px solid ${lang.c}20`,
                                                    fontSize: ".82rem", fontWeight: 700, color: lang.c,
                                                    animation: `float 3.5s ${i * .3}s ease-in-out infinite`,
                                                }}>{lang.l}</span>
                                            ))}
                                        </div>
                                    </Card>
                                </Reveal>
                            </div>

                            {/* AI screenshot */}
                            <Reveal delay={.15} style={{ marginTop: 48 }}>
                                <div style={{ textAlign: "center", marginBottom: 12 }}>
                                    <span style={{ fontFamily: MONO, fontSize: ".6rem", color: T.gr2, letterSpacing: 2, textTransform: "uppercase" }}>ИИ-агент в действии</span>
                                </div>
                                <SafariFrame url="app.one-link.kz" src="https://raw.githubusercontent.com/kazakhbala01/one-link/refs/heads/main/chat.png" />
                            </Reveal>
                        </div>
                    </section>

                    {/* ════════════════════════════════════
             SECTION: СОБИРАЕМ ПОД ВАС
             ════════════════════════════════════ */}
                    <section style={{ paddingTop: 72, paddingBottom: 72 }}>
                        <div className="w">
                            <Reveal>
                                <Tag>МОДУЛЬНОСТЬ</Tag>
                                <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, letterSpacing: -.5, marginBottom: 12 }}>
                                    Собираем <span style={{ color: T.gr }}>под вас</span>
                                </h2>
                                <p style={{ fontSize: "clamp(.92rem,1.3vw,1.03rem)", color: T.gr, lineHeight: 1.75, maxWidth: 520, marginBottom: 40 }}>
                                    Нужен только чат? Только CRM? Или всё вместе? Включайте модули — цена обновляется мгновенно.
                                </p>
                            </Reveal>

                            <Reveal delay={.1}>
                                <PlatformBuilder />
                            </Reveal>
                        </div>
                    </section>

                    {/* ════════════════════════════════════
             SECTION: PRICING
             ════════════════════════════════════ */}
                    <section id="pricing" className="sec-glow" style={{ paddingTop: 72, paddingBottom: 72 }}>
                        <div className="w">
                            <Reveal>
                                <div style={{ textAlign: "center", marginBottom: 40 }}>
                                    <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.9rem)", fontWeight: 800, letterSpacing: -.4 }}>Простые цены</h2>
                                    <p style={{ color: T.gr, fontSize: "1.01rem", marginTop: 10 }}>Расчёт после анализа каналов и объёмов.</p>
                                </div>
                            </Reveal>

                            <div className="g3">
                                {[
                                    { n: "Старт", p: "от 25 000 ₸", per: "/мес", sub: "до 500 обращений", pop: false, items: ["2 канала (WA + TG)", "Встроенная CRM", "AI-автоответчик", "До 3 операторов"], btn: "Начать" },
                                    { n: "Бизнес", p: "от 75 000 ₸", per: "/мес", sub: "клиники, салоны, школы", pop: true, items: ["Все каналы + телефония", "CRM + аналитика", "AI-агент + Guardrails", "До 10 операторов", "Кастомизация"], btn: "Запросить демо" },
                                    { n: "Энтерпрайз", p: "от 200 000 ₸", per: "/мес", sub: "свой контур", pop: false, items: ["Ваш сервер", "Безлимит", "Agent as a Service", "SLA + менеджер", "Интеграция с ИС"], btn: "Получить демо" },
                                ].map((plan, i) => (
                                    <Reveal key={i} delay={i * .08}>
                                        <div className="glass" style={{
                                            background: plan.pop ? "rgba(139,92,246,.04)" : "var(--card-bg)",
                                            border: `1px solid ${plan.pop ? "rgba(139,92,246,.15)" : "rgba(255,255,255,.06)"}`,
                                            borderRadius: 18, padding: "36px 28px", display: "flex", flexDirection: "column",
                                            height: "100%", position: "relative", overflow: "hidden",
                                        }}
                                             className="price-h"
                                        >
                                            {plan.pop && (
                                                <>
                                                    <div style={{ position: "absolute", top: -1, left: "12%", right: "12%", height: 1, background: "linear-gradient(90deg, transparent, #8b5cf633, transparent)" }} />
                                                    <div style={{ position: "absolute", top: 12, right: 12, fontFamily: MONO, fontSize: ".53rem", fontWeight: 600, background: T.ac, color: "#36454F", padding: "2px 8px", borderRadius: 5 }}>ПОПУЛЯРНЫЙ</div>
                                                </>
                                            )}
                                            <div style={{ fontFamily: MONO, fontSize: ".6rem", color: T.gr2, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 8 }}>{plan.n}</div>
                                            <div style={{ fontSize: "clamp(1.3rem,2.5vw,1.7rem)", fontWeight: 800, letterSpacing: -.5, marginBottom: 2 }}>
                                                {plan.p} <span style={{ fontSize: ".78rem", fontWeight: 400, color: T.gr }}>{plan.per}</span>
                                            </div>
                                            <div style={{ fontSize: ".78rem", color: T.gr2, marginBottom: 20 }}>{plan.sub}</div>
                                            <ul style={{ listStyle: "none", flex: 1, marginBottom: 20 }}>
                                                {plan.items.map((it) => (
                                                    <li key={it} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: ".9rem", color: "var(--text-sub)", padding: "5px 0" }}>
                                                        <Check size={12} color={T.ac} style={{ flexShrink: 0 }} />{it}
                                                    </li>
                                                ))}
                                            </ul>
                                            <a href="#cta" style={{
                                                display: "block", textAlign: "center", padding: 12, borderRadius: 9,
                                                fontSize: ".92rem", fontWeight: 600,
                                                background: plan.pop ? T.wt : "rgba(255,255,255,.04)",
                                                color: plan.pop ? T.bg : T.wt,
                                                border: plan.pop ? "none" : "1px solid rgba(255,255,255,.08)",
                                            }}>{plan.btn}</a>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ════════════════════════════════════
             SECTION: FAQ
             ════════════════════════════════════ */}
                    <section id="faq" className="sec-alt" style={{ paddingTop: 72, paddingBottom: 72 }}>
                        <div className="w" style={{ maxWidth: 700 }}>
                            <Reveal>
                                <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 800, letterSpacing: -.4, marginBottom: 36 }}>Частые вопросы</h2>
                            </Reveal>
                            <Faq q="Чем отличается от AmoCRM + Wazzup + ChatGPT?" a="Это 5 систем с 5 точками отказа и ~355 000 ₸/мес. One-Link — единая платформа от 25 000 ₸: CRM, каналы, AI-агент нативно на одном сервере." />
                            <Faq q="AI-агент будет выдумывать?" a="Нет. Guardrails: три фильтра, строго по базе знаний. Сложный вопрос → бесшовная эскалация на менеджера." />
                            <Faq q="Если у нас уже есть CRM?" a="One-Link интегрируется с AmoCRM, Bitrix24, Altegio, MacroCRM, 1С. Или используйте встроенную CRM." />
                            <Faq q="Сколько занимает запуск?" a="От 3 дней. Нишевые решения уже готовы — подключаем каналы и настраиваем AI под ваш бизнес." />
                            <Faq q="Можно попробовать?" a="Да. Бесплатный 30-минутный разбор: каналы, процессы, объём — без обязательств." />
                        </div>
                    </section>

                    {/* ════════════════════════════════════
             SECTION: CTA
             ════════════════════════════════════ */}
                    <section id="cta" style={{ paddingTop: 72, paddingBottom: 100, textAlign: "center", boxShadow: "var(--cta-shadow)", position: "relative", zIndex: 2 }}>
                        <div className="w">
                            <Reveal>
                                <Tag>Следующий шаг</Tag>
                                <h2 style={{ fontSize: "clamp(1.8rem,4.5vw,3.2rem)", fontWeight: 800, letterSpacing: -.8, marginBottom: 12 }}>Запросите демо<br />за 30 секунд</h2>
                                <p style={{ color: T.gr, fontSize: "1.03rem", maxWidth: 440, margin: "0 auto 36px", lineHeight: 1.75 }}>Оставьте номер — покажем платформу и разберём ваш кейс.</p>

                                <div style={{ maxWidth: 420, margin: "0 auto 32px", display: "flex", flexDirection: "column", gap: 10 }}>
                                    <div className="cta-inputs" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                                        <input type="text" placeholder="Имя" style={{
                                            flex: 1, minWidth: 120, background: "var(--card-bg)", border: "1px solid var(--bd)",
                                            borderRadius: 10, padding: "13px 16px", fontSize: ".92rem", color: T.wt, outline: "none", fontFamily: FONT,
                                        }} onFocus={(e) => e.target.style.borderColor = "var(--input-focus)"} onBlur={(e) => e.target.style.borderColor = "var(--input-bd)"} />
                                        <input type="tel" placeholder="+7 ___ ___ __ __" style={{
                                            flex: 1, minWidth: 160, background: "var(--card-bg)", border: "1px solid var(--bd)",
                                            borderRadius: 10, padding: "13px 16px", fontSize: ".92rem", color: T.wt, outline: "none", fontFamily: FONT,
                                        }} onFocus={(e) => e.target.style.borderColor = "var(--input-focus)"} onBlur={(e) => e.target.style.borderColor = "var(--input-bd)"} />
                                    </div>
                                    <button style={{
                                        background: T.wt, color: T.bg, padding: "14px 30px", borderRadius: 10,
                                        fontWeight: 600, fontSize: "1rem", border: "none", cursor: "pointer",
                                        position: "relative", overflow: "hidden", fontFamily: FONT,
                                    }}>
                                        <span style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, transparent, var(--shimmer), transparent)", transform: "translateX(-100%)", animation: "shimmerSlide 3s 1s infinite" }} />
                                        <span style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
                      <Sparkles size={15} />Получить демо
                    </span>
                                    </button>
                                </div>

                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginBottom: 18, flexWrap: "wrap" }}>
                  <span style={{ fontSize: ".8rem", color: T.gr2, display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: T.green }} />Ответим за час
                  </span>
                                    <span style={{ fontSize: ".8rem", color: T.gr2 }}>или напишите:</span>
                                </div>

                                <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 18 }}>
                                    <a href="https://wa.me/77056162603" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#25D366", color: "#fff", padding: "12px 24px", borderRadius: 8, fontWeight: 600, fontSize: ".92rem" }}>
                                        <MessageCircle size={14} />WhatsApp
                                    </a>
                                    <a href="https://t.me/khamzauly" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "12px 24px", borderRadius: 8, border: "1px solid " + T.bd, color: T.wt, fontWeight: 500, fontSize: ".92rem", background: "var(--surf)" }}>
                                        <Send size={14} />Telegram
                                    </a>
                                    <a href="mailto:info@one-link.kz" style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "12px 24px", borderRadius: 8, border: "1px solid " + T.bd, color: T.wt, fontWeight: 500, fontSize: ".92rem", background: "var(--surf)" }}>
                                        <Mail size={14} />Email
                                    </a>
                                </div>

                                <p style={{ fontFamily: MONO, fontSize: ".58rem", color: T.gr2, marginTop: 14, letterSpacing: 1 }}>БЕСПЛАТНО · БЕЗ ОБЯЗАТЕЛЬСТВ · ДЕМО ЗА 15 МИНУТ</p>
                            </Reveal>
                        </div>
                    </section>


                    {/* ─── Lift shadow & edge ─── */}
                    <div id="lift-shadow" style={{
                        position: "absolute", bottom: 0, left: 0, right: 0, height: 200,
                        background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,.3) 30%, rgba(0,0,0,.8) 100%)",
                        pointerEvents: "none", zIndex: 10, opacity: 0, borderRadius: "0 0 24px 24px",
                    }} />
                    <div style={{
                        position: "absolute", bottom: 0, left: "5%", right: "5%", height: 1,
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,.08), transparent)",
                        pointerEvents: "none", zIndex: 11,
                    }} />
                </div>

                {/* Footer spacer */}
                <div style={{ height: footerH }} />
            </div>
        </div>
    );
}