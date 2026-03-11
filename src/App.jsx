import { useState, useEffect, useRef } from "react";
import {
    MessageCircle, Send, Phone, Mail, Shield, Bot,
    Users, ArrowRight, ChevronDown, Plus, Search,
    Globe, Instagram, Star, Check, AlertTriangle,
    Link2, TrendingUp, Stethoscope, GraduationCap,
    UtensilsCrossed, Home, ShoppingBag, Wrench, Sparkles,
    Server, Zap
} from "lucide-react";
import { createPortal } from "react-dom";
const T = {
    bg:"#08080c", bg2:"#0c0c14", surf:"rgba(255,255,255,.02)",
    wt:"#f4f4f8", gr:"#b4b4b4", gr2:"#737373",
    bd:"rgba(255,255,255,.06)", ac:"#cbd1db",
    red:"#ef4444", green:"#22c55e",
};
const FONT = "'Plus Jakarta Sans',-apple-system,sans-serif";
const MONO = "'JetBrains Mono',monospace";

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{background:#08080c;color:#f4f4f8;margin:0;overflow-x:hidden;-webkit-font-smoothing:antialiased;font-family:'Plus Jakarta Sans',-apple-system,sans-serif}
a{color:inherit;text-decoration:none}
::-webkit-scrollbar{width:3px}::-webkit-scrollbar-track{background:#08080c}::-webkit-scrollbar-thumb{background:#222;border-radius:2px}
.w{max-width:1100px;margin:0 auto;padding:0 32px;position:relative;z-index:1}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
@keyframes msgPop{from{opacity:0;transform:translateY(8px) scale(.96)}to{opacity:1;transform:none}}
@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@keyframes dotBounce{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-5px)}}
@keyframes auroraA{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(5%,3%) scale(1.1)}66%{transform:translate(-3%,-2%) scale(.94)}}
@keyframes auroraB{0%,100%{transform:translate(0,0)}50%{transform:translate(-5%,4%) scale(1.06)}}
@keyframes auroraC{0%,100%{transform:translate(0,0)}50%{transform:translate(3%,-3%) scale(1.05)}}
@keyframes heroBlobA{0%,100%{transform:translate(0,0) scale(1);opacity:.7}25%{transform:translate(8%,5%) scale(1.15);opacity:.9}50%{transform:translate(-3%,8%) scale(.95);opacity:.6}75%{transform:translate(5%,-3%) scale(1.08);opacity:.8}}
@keyframes heroBlobB{0%,100%{transform:translate(0,0) scale(1)}30%{transform:translate(-6%,4%) scale(1.12)}60%{transform:translate(4%,-5%) scale(.92)}90%{transform:translate(-2%,6%) scale(1.05)}}
@keyframes heroBlobC{0%,100%{transform:translate(0,0) scale(1);opacity:.5}50%{transform:translate(6%,-4%) scale(1.1);opacity:.8}}
@keyframes heroBlobD{0%,100%{transform:translate(0,0)}33%{transform:translate(-4%,6%) scale(1.08)}66%{transform:translate(5%,-2%) scale(.95)}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
@keyframes footerGradient{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
.g2{display:grid;grid-template-columns:1fr 1fr;gap:16px;align-items:stretch}
.g3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;align-items:stretch}

@keyframes borderBeam{0%{--ba:0deg}100%{--ba:360deg}}
@property --ba{syntax:'<angle>';initial-value:0deg;inherits:false}
.border-beam{position:relative;overflow:hidden}
.border-beam::before{content:'';position:absolute;inset:0;border-radius:16px;padding:1px;background:conic-gradient(from var(--ba),transparent 70%,#8b5cf633,transparent);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;animation:borderBeam 5s linear infinite;pointer-events:none;z-index:1}

@keyframes meteor{0%{transform:translateX(-100px) translateY(-100px) rotate(-45deg);opacity:0}5%{opacity:.6}30%{opacity:0}100%{transform:translateX(500px) translateY(500px) rotate(-45deg);opacity:0}}

@keyframes shimmerSlide{0%{transform:translateX(-100%)}50%,100%{transform:translateX(200%)}}
.shimmer-btn{position:relative;overflow:hidden}
.shimmer-btn::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.15),transparent);transform:translateX(-100%);animation:shimmerSlide 3s 1s infinite}

@keyframes glowPulse{0%,100%{box-shadow:0 0 20px #8b5cf608}50%{box-shadow:0 0 50px #8b5cf618}}
@keyframes beamDash{0%{stroke-dashoffset:200}100%{stroke-dashoffset:0}}
@keyframes beamDashRev{0%{stroke-dashoffset:-200}100%{stroke-dashoffset:0}}
@keyframes placeholderShimmer{0%{background-position:-400px 0}100%{background-position:400px 0}}
.glass{background:rgba(255,255,255,.04)!important}
.ph{background:linear-gradient(110deg,rgba(255,255,255,.02) 30%,rgba(255,255,255,.06) 50%,rgba(255,255,255,.02) 70%);background-size:400px 100%;animation:placeholderShimmer 3s ease-in-out infinite;border-radius:16px;border:1px solid rgba(255,255,255,.06);position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center}
.ph::after{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 50%,rgba(139,92,246,.03),transparent 70%)}
@media(max-width:900px){.g2,.g3{grid-template-columns:1fr}.g4{grid-template-columns:1fr 1fr!important}.chat-sb{display:none!important}.nav-r{display:none!important}}
@media(max-width:640px){.hero-btns{flex-direction:column;align-items:center}.g4{grid-template-columns:1fr!important}}
html{overscroll-behavior:none}
`;


function GradH({children,as="h2",s={}}){
    const Tag=as;
    return<Tag style={{
        background:"linear-gradient(180deg,#f4f4f8 0%,#737373 100%)",
        WebkitBackgroundClip:"text",
        WebkitTextFillColor:"transparent",
        backgroundClip:"text",
        ...s
    }}>{children}</Tag>
}

function useRv(th=0.08){const ref=useRef(null);const[v,setV]=useState(false);useEffect(()=>{const el=ref.current;if(!el)return;const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){setV(true);o.disconnect()}},{threshold:th,rootMargin:"0px 0px -50px 0px"});o.observe(el);return()=>o.disconnect()},[]);return{ref,v}}
function R({children,d=0,s={}}){const{ref,v}=useRv();return<div ref={ref} style={{opacity:v?1:0,transform:v?"translateY(0) scale(1)":"translateY(40px) scale(.97)",filter:v?"blur(0px)":"blur(6px)",transition:`opacity .85s cubic-bezier(.16,1,.3,1) ${d}s, transform .85s cubic-bezier(.16,1,.3,1) ${d}s, filter .85s cubic-bezier(.16,1,.3,1) ${d}s`,...s}}>{children}</div>}

function HeroBg(){return<div style={{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:0}}>
    <div style={{position:"absolute",top:"-20%",left:"10%",width:"80%",height:"70%",borderRadius:"50%",background:"radial-gradient(ellipse at 50% 60%,rgba(203,209,219,.12),rgba(180,190,210,.04) 40%,transparent 70%)",filter:"blur(60px)"}}/>
    <div style={{position:"absolute",bottom:0,left:0,right:0,height:"30%",background:"linear-gradient(to bottom,transparent,#08080c)"}}/>
</div>}

function WaveBg(){
    const canvasRef=useRef(null);
    const frameRef=useRef(null);
    const visibleRef=useRef(false);

    useEffect(()=>{
        const canvas=canvasRef.current;
        if(!canvas)return;
        const ctx=canvas.getContext("2d");
        let w,h;

        const resize=()=>{
            w=canvas.parentElement.clientWidth;
            h=canvas.parentElement.clientHeight;
            canvas.width=w;canvas.height=h;
        };
        resize();

        const SIN=new Float32Array(1000);
        for(let i=0;i<1000;i++)SIN[i]=Math.sin(i/1000*Math.PI*2);
        const sin=(v)=>SIN[Math.floor(((v%1)+1)%1*1000)];

        let time=0;
        function draw(){
            frameRef.current=requestAnimationFrame(draw);
            if(!visibleRef.current)return; // skip if not visible
            time+=.008;
            ctx.clearRect(0,0,w,h);
            const LINES=20; // was 25
            const STEP=12;  // was 8
            for(let i=0;i<LINES;i++){
                const pct=i/LINES;
                const baseY=h*.2+pct*h*.6;
                const alpha=sin(pct)*.15+.03;
                const b=Math.floor(160+pct*60);
                ctx.beginPath();
                ctx.strokeStyle=`rgba(${b},${b},${b},${alpha})`;
                ctx.lineWidth=.6;
                for(let x=0;x<=w;x+=STEP){
                    const xp=x/w;
                    const envelope=sin(xp*.5)*.8+.2;
                    const y=baseY+sin(xp*2+time+pct*1.5)*25*envelope+sin(xp*1.3-time*.5+pct*2)*15*envelope+sin(xp*1+time*.3)*h*.12*sin(pct);
                    if(x===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
                }
                ctx.stroke();
            }
        }

        // Only animate when visible
        const obs=new IntersectionObserver(([e])=>{visibleRef.current=e.isIntersecting},{threshold:0});
        obs.observe(canvas);

        frameRef.current=requestAnimationFrame(draw);
        window.addEventListener("resize",resize);
        return()=>{cancelAnimationFrame(frameRef.current);window.removeEventListener("resize",resize);obs.disconnect()};
    },[]);

    return<canvas ref={canvasRef} style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none"}}/>;
}

function Typing(){const ph=["WhatsApp · Telegram · Instagram → одно окно","CRM без AmoCRM и Bitrix — нативно","ИИ-агент: одна кнопка — вкл / выкл","Guardrails: не выдумывает, не галлюцинирует","Один сервер. Ноль лишних подписок."];const[txt,setTxt]=useState("");const pi=useRef(0);const ci=useRef(0);const del=useRef(false);useEffect(()=>{function tick(){const p=ph[pi.current];if(!del.current){ci.current++;setTxt(p.slice(0,ci.current));if(ci.current>=p.length){del.current=true;return setTimeout(tick,2200)}return setTimeout(tick,38)}else{ci.current--;setTxt(p.slice(0,ci.current));if(ci.current<=0){del.current=false;pi.current=(pi.current+1)%ph.length;return setTimeout(tick,400)}return setTimeout(tick,18)}}const t=setTimeout(tick,600);return()=>clearTimeout(t)},[]);return<span style={{fontFamily:MONO,fontSize:"clamp(.78rem,1.1vw,.9rem)",color:T.gr}}>{txt}<span style={{display:"inline-block",width:2,height:"1em",background:T.ac,verticalAlign:"text-bottom",marginLeft:3,animation:"blink .55s step-end infinite"}}/></span>}

function Tag({children}){return<div style={{fontFamily:MONO,fontSize:".58rem",color:"#a1a1aa",letterSpacing:3,textTransform:"uppercase",marginBottom:12,display:"flex",alignItems:"center",gap:10}}><span style={{width:20,height:1,background:"rgba(203,209,219,.2)"}}/>{children}</div>}
function SafariFrame({url="one-link.kz",src,children,h=420}){
    const[hov,setHov]=useState(false);
    const[big,setBig]=useState(false);
    const[restored,setRestored]=useState(true); // false = invisible after snap-back
    const timer=useRef(null);
    const fadeTimer=useRef(null);

    const enter=()=>{
        clearTimeout(timer.current);
        clearTimeout(fadeTimer.current);
        setBig(true);
        setHov(true);
        setRestored(true);
    };
    const leave=()=>{
        timer.current=setTimeout(()=>{
            setHov(false); // fade out at scale(1.55)
            fadeTimer.current=setTimeout(()=>{
                setRestored(false); // invisible at scale(1)
                setBig(false);      // snap back
                requestAnimationFrame(()=>{
                    requestAnimationFrame(()=>setRestored(true)); // fade in original
                });
            },250);
        },100);
    };

    const scaled = hov || big;

    return<>
        {createPortal(<div style={{
            position:"fixed",inset:0,zIndex:9998,
            background:"rgba(0,0,0,.85)",
            opacity:hov?1:0,
            pointerEvents:hov?"auto":"none",
            transition:"opacity .4s ease",
        }} onMouseEnter={leave}/>, document.body)}

        <div
            onMouseEnter={enter}
            onMouseLeave={leave}
            style={{
                position:"relative",
                zIndex:scaled?9999:1,
                clipPath:"inset(0 round 16px)",
                WebkitClipPath:"inset(0 round 16px)",
                border:"1px solid "+(hov?"rgba(255,255,255,.12)":"rgba(255,255,255,.08)"),
                borderRadius:16,
                background:"#1a1a1e",
                transform:scaled?"scale(1.58)":"scale(1)",
                opacity: hov ? 1 : big ? 0 : restored ? 1 : 0,
                transformOrigin:"center center",
                transition: hov
                    ? "transform .55s cubic-bezier(.22,1,.36,1), box-shadow .55s cubic-bezier(.22,1,.36,1), border-color .3s, opacity .1s"
                    : big
                        ? "opacity .25s ease"          // fade out enlarged
                        : restored
                            ? "opacity .3s ease"  // fade in original
                            : "none",                  // invisible snap
                willChange:"transform,opacity",
                cursor:"pointer",
                boxShadow:hov
                    ?"0 60px 200px rgba(0,0,0,.8),0 0 140px rgba(139,92,246,.08)"
                    :"0 25px 80px rgba(0,0,0,.4)",
            }}
        >
            <div style={{display:"flex",alignItems:"center",padding:"12px 16px",background:"#2a2a2e",borderBottom:"1px solid rgba(255,255,255,.06)",gap:10}}>
                <div style={{display:"flex",gap:7,flexShrink:0}}>{["#ff5f57","#febc2e","#28c840"].map(c=><span key={c} style={{width:12,height:12,borderRadius:"50%",background:c}}/>)}</div>
                <div style={{display:"flex",gap:4,flexShrink:0,marginLeft:8}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.2)" strokeWidth="2.2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.2)" strokeWidth="2.2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg></div>
                <div style={{flex:1,textAlign:"center",background:"rgba(255,255,255,.06)",borderRadius:8,padding:"7px 16px",fontFamily:MONO,fontSize:".72rem",color:"rgba(255,255,255,.35)",display:"flex",alignItems:"center",justifyContent:"center",gap:6}}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{opacity:.6}}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>{url}<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{marginLeft:4,opacity:.35}}><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg></div>
                <div style={{display:"flex",gap:10,flexShrink:0}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.18)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.18)" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.18)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></div>
            </div>
            <div style={{background:"#0e0e14"}}>{src?<img src={src} style={{width:"100%",display:"block"}} alt={url} loading="lazy"/>:children||<div style={{height:h,display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontFamily:MONO,fontSize:".65rem",color:"rgba(255,255,255,.1)",letterSpacing:1}}>SCREENSHOT</span></div>}</div>
        </div>
    </>;
}

function SafariMini({url="app.one-link.kz",src,h=220}){
    return<div style={{borderRadius:10,overflow:"hidden",border:"1px solid rgba(139,92,246,.1)",background:"#1a1a1e"}}>
        <div style={{display:"flex",alignItems:"center",padding:"7px 12px",background:"#2a2a2e",borderBottom:"1px solid rgba(255,255,255,.05)",gap:8}}>
            <div style={{display:"flex",gap:5}}>{["#ff5f57","#febc2e","#28c840"].map(c=><span key={c} style={{width:8,height:8,borderRadius:"50%",background:c}}/>)}</div>
            <div style={{flex:1,textAlign:"center",background:"rgba(255,255,255,.05)",borderRadius:5,padding:"3px 10px",fontFamily:MONO,fontSize:".58rem",color:"rgba(255,255,255,.25)",display:"flex",alignItems:"center",justifyContent:"center",gap:4}}><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{opacity:.5}}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>{url}</div>
        </div>
        <div style={{background:"#0e0e14"}}>{src?<img src={src} style={{width:"100%",display:"block"}} alt={url} loading="lazy"/>:<div style={{height:h,display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontFamily:MONO,fontSize:".55rem",color:"rgba(255,255,255,.08)",letterSpacing:1}}>SCREENSHOT</span></div>}</div>
    </div>}

function Card({children,glow,s={}}){return<div style={{
    background:glow?"rgba(203,209,219,.02)":"rgba(255,255,255,.02)",
    border:"1px solid "+(glow?"rgba(203,209,219,.08)":"rgba(255,255,255,.06)"),
    borderRadius:20,
    padding:"38px 32px",
    position:"relative",
    overflow:"hidden",
    transition:"border-color .4s,transform .4s,box-shadow .4s",
    ...s
}} onMouseEnter={e=>{
    e.currentTarget.style.borderColor="rgba(255,255,255,.12)";
    e.currentTarget.style.transform="translateY(-3px)";
    e.currentTarget.style.boxShadow="0 8px 40px rgba(0,0,0,.3),0 0 60px rgba(203,209,219,.04)"
}} onMouseLeave={e=>{
    e.currentTarget.style.borderColor=glow?"rgba(203,209,219,.08)":"rgba(255,255,255,.06)";
    e.currentTarget.style.transform="none";
    e.currentTarget.style.boxShadow="none"
}}>
    {glow&&<div style={{position:"absolute",top:-1,left:"10%",right:"10%",height:1,background:"linear-gradient(90deg,transparent,rgba(203,209,219,.15),transparent)"}}/>}
    {children}
</div>}

/* ═══ NUMBER TICKER ═══ */
function NumberTicker({target,suffix="",prefix="",duration=2000}){
    const[val,setVal]=useState(0);const{ref,v}=useRv();const started=useRef(false);
    useEffect(()=>{if(!v||started.current)return;started.current=true;
        const start=performance.now();const step=(now)=>{const p=Math.min((now-start)/duration,1);
            setVal(Math.floor(p*target));if(p<1)requestAnimationFrame(step);else setVal(target)};
        requestAnimationFrame(step)},[v,target,duration]);
    return<span ref={ref} style={{fontFamily:MONO,fontSize:"2.8rem",fontWeight:800,letterSpacing:-1,tabularNums:"true"}}>{prefix}{val}{suffix}</span>}

/* ═══ LOGO CLOUD ═══ */
const LOGOS=[
    {n:"WhatsApp",c:"#25d366",ic:MessageCircle},
    {n:"Telegram",c:"#0088cc",ic:Send},
    {n:"Instagram",c:"#e1306c",ic:Instagram},
    {n:"Телефония",c:"#9898ab",ic:Phone},
    {n:"Email",c:"#9898ab",ic:Mail},
    {n:"Kaspi Pay",c:"#f14635",ic:Zap},
    {n:"Webhook",c:"#9898ab",ic:Globe},
    {n:"REST API",c:"#9898ab",ic:Link2},
];

function LogoCloud(){
    return<div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:10,padding:"8px 0"}}>
        {LOGOS.map((l,i)=>{const I=l.ic;return<R key={i} d={i*.04}>
            <div style={{display:"flex",alignItems:"center",gap:8,padding:"10px 18px",borderRadius:10,border:"1px solid "+T.bd,background:T.surf,transition:"border-color .3s,transform .3s"}}
                 onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,.12)";e.currentTarget.style.transform="translateY(-2px)"}}
                 onMouseLeave={e=>{e.currentTarget.style.borderColor=T.bd;e.currentTarget.style.transform="none"}}>
                <I size={15} color={l.c} style={{opacity:.8}}/>
                <span style={{fontSize:".86rem",fontWeight:600,color:T.gr}}>{l.n}</span>
            </div></R>})}
    </div>}

const CHATS=[{n:"Айгерим М.",ch:"WhatsApp",c:"#25d366",ic:MessageCircle,st:"онлайн",m:[{f:"c",t:"Здравствуйте! Хочу записаться к терапевту на пятницу",tm:"14:20"},{f:"a",t:"Добрый день! На пятницу свободны 14:00 и 16:30. Какое время?",tm:"14:20"},{f:"c",t:"16:30 пожалуйста",tm:"14:22"},{f:"a",t:"Записала на пт, 16:30. Напоминание за час ✓",tm:"14:22"},{f:"s",t:"CRM: контакт создан · сделка открыта"}]},{n:"Ержан К.",ch:"Telegram",c:"#0088cc",ic:Send,st:"5 мин назад",m:[{f:"c",t:"Какие цены на услуги?",tm:"13:40"},{f:"a",t:"Консультация: 15 000 ₸\nДиагностика: 25 000 ₸\nЗаписать?",tm:"13:41"},{f:"c",t:"Да, диагностику",tm:"13:44"},{f:"s",t:"CRM: сделка · 25 000 ₸"}]},{n:"dana_style",ch:"Instagram",c:"#e1306c",ic:Instagram,st:"Direct",m:[{f:"c",t:"Синее платье из stories 😍",tm:"12:28"},{f:"a",t:"В наличии — S, M, L. Какой размер?",tm:"12:29"},{f:"c",t:"М! Через Kaspi можно?",tm:"12:30"},{f:"a",t:"Конечно! Ссылка на Kaspi Pay отправлена.",tm:"12:30"},{f:"s",t:"Kaspi: счёт · 45 000 ₸"}]},{n:"+7 701 *** 42",ch:"Телефония",c:"#71717a",ic:Phone,st:"Входящий",m:[{f:"s",t:"Звонок · 2:14"},{f:"a",t:"Транскрипция: график работы, парковка",tm:"11:18"},{f:"s",t:"CRM: контакт → задача менеджеру"}]}];
const REPLIES=["Спасибо! Во сколько подойти?","Хорошо, понял!","Отлично, жду!","Можно уточнить?","Ясно, спасибо!"];

function ChatApp(){const[ai,setAi]=useState(0);const[inp,setInp]=useState("");const[ext,setExt]=useState({});const[typ,setTyp]=useState(false);const sr=useRef(null);const chat=CHATS[ai];const Icon=chat.ic;const all=[...chat.m,...(ext[ai]||[])];useEffect(()=>{sr.current&&(sr.current.scrollTop=sr.current.scrollHeight)},[all.length,typ]);const send=()=>{const v=inp.trim();if(!v)return;const tm=new Date().toTimeString().slice(0,5);setExt(p=>({...p,[ai]:[...(p[ai]||[]),{f:"o",t:v,tm}]}));setInp("");setTyp(true);setTimeout(()=>{setTyp(false);setExt(p=>({...p,[ai]:[...(p[ai]||[]),{f:"c",t:REPLIES[Math.floor(Math.random()*REPLIES.length)],tm}]}))},1200+Math.random()*800)};
    const Bubble=({m,isLast})=>{const ic=m.f==="c",ia=m.f==="a",io=m.f==="o",is=m.f==="s";return<div style={{maxWidth:"78%",padding:is?"6px 12px":"11px 15px",borderRadius:14,alignSelf:ic?"flex-start":"flex-end",background:ic?"rgba(255,255,255,.06)":(ia||io)?T.wt:"rgba(255,255,255,.03)",color:(ia||io)?T.bg:is?T.gr:T.wt,borderBottomLeftRadius:ic?4:14,borderBottomRightRadius:!ic?4:14,border:is?"1px solid rgba(255,255,255,.08)":ic?"1px solid rgba(255,255,255,.07)":"none",fontFamily:is?MONO:FONT,fontSize:is?".68rem":".86rem",lineHeight:1.55}}>{ia&&<div style={{fontSize:".55rem",fontWeight:800,color:"rgba(0,0,0,.3)",background:"rgba(0,0,0,.06)",padding:"2px 6px",borderRadius:3,display:"inline-block",marginBottom:4,letterSpacing:.5}}>AI AGENT</div>}{io&&<div style={{fontSize:".55rem",fontWeight:800,color:"rgba(0,0,0,.3)",background:"rgba(0,0,0,.06)",padding:"2px 6px",borderRadius:3,display:"inline-block",marginBottom:4,letterSpacing:.5}}>ОПЕРАТОР</div>}{is&&<span style={{opacity:.55,marginRight:4}}>→</span>}<div style={{whiteSpace:"pre-wrap"}}>{m.t}</div>{m.tm&&<div style={{fontSize:".58rem",marginTop:3,color:(ia||io)?"rgba(0,0,0,.2)":"rgba(255,255,255,.12)"}}>{m.tm}</div>}</div>};
    return<div className="border-beam" style={{background:"#0c0c14",borderRadius:18,border:"1px solid rgba(255,255,255,.1)",overflow:"hidden",height:640,display:"flex",flexDirection:"column",boxShadow:"0 0 0 1px rgba(255,255,255,.03),0 40px 120px -20px rgba(0,0,0,.8),0 0 80px -20px #8b5cf618",position:"relative",zIndex:2}}><div style={{position:"absolute",top:-1,left:"15%",right:"15%",height:1,background:"linear-gradient(90deg,transparent,#8b5cf655,transparent)",zIndex:10}}/>
        {/* Title bar */}
        <div style={{padding:"0 16px",height:46,display:"flex",alignItems:"center",gap:7,borderBottom:"1px solid rgba(255,255,255,.1)",flexShrink:0,background:"rgba(255,255,255,.02)"}}>{["#ff5f57","#febc2e","#28c840"].map(c=><span key={c} style={{width:11,height:11,borderRadius:"50%",background:c}}/>)}<div style={{marginLeft:12,flex:1,textAlign:"center",background:"rgba(255,255,255,.04)",borderRadius:7,padding:"5px 16px",fontFamily:MONO,fontSize:".68rem",color:T.gr2,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid rgba(255,255,255,.05)"}}><Globe size={11} style={{opacity:.55}}/>app.one-link.kz</div></div>
        {/* Body */}
        <div style={{display:"flex",flex:1,overflow:"hidden"}}>
            {/* Sidebar */}
            <div className="chat-sb" style={{width:280,borderRight:"1px solid rgba(255,255,255,.1)",overflowY:"auto",flexShrink:0,background:"#0a0a12"}}><div style={{padding:"14px 16px",fontWeight:600,fontSize:"1rem",display:"flex",justifyContent:"space-between",borderBottom:"1px solid rgba(255,255,255,.08)"}}>Входящие<span style={{fontSize:".6rem",fontWeight:700,background:T.wt,color:T.bg,padding:"3px 8px",borderRadius:100}}>12</span></div><div style={{padding:"8px 12px"}}><div style={{display:"flex",alignItems:"center",gap:6,padding:"8px 10px",background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.07)",borderRadius:8,fontSize:".68rem",color:T.gr2}}><Search size={12} style={{opacity:.5}}/>Поиск</div></div>{CHATS.map((c,i)=>{const I=c.ic;return<div key={i} onClick={()=>setAi(i)} style={{padding:"12px 16px",display:"flex",gap:10,alignItems:"center",cursor:"pointer",background:i===ai?"rgba(255,255,255,.05)":"transparent",borderLeft:i===ai?"2px solid "+T.wt:"2px solid transparent",borderBottom:"1px solid rgba(255,255,255,.04)",transition:"all .12s"}}><div style={{width:36,height:36,borderRadius:9,background:c.c+"18",display:"flex",alignItems:"center",justifyContent:"center",color:c.c,border:"1px solid "+c.c+"30",flexShrink:0}}><I size={15}/></div><div style={{flex:1,minWidth:0}}><div style={{fontSize:".82rem",fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{c.n}</div><div style={{fontSize:".65rem",color:T.gr2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{c.m[0]?.t?.slice(0,28)}...</div></div>{i===0&&<span style={{minWidth:19,height:19,borderRadius:100,background:T.wt,color:T.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:".48rem",fontWeight:800}}>2</span>}</div>})}</div>
            {/* Chat panel */}
            <div style={{flex:1,display:"flex",flexDirection:"column",minWidth:0,background:"#0e0e18"}}>
                {/* Chat header */}
                <div style={{padding:"0 16px",height:56,display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid rgba(255,255,255,.1)",flexShrink:0,background:"rgba(255,255,255,.015)"}}><div style={{display:"flex",alignItems:"center",gap:10}}><div style={{width:32,height:32,borderRadius:8,background:chat.c+"18",display:"flex",alignItems:"center",justifyContent:"center",color:chat.c,border:"1px solid "+chat.c+"30"}}><Icon size={14}/></div><div><div style={{fontWeight:600,fontSize:"1rem"}}>{chat.n}</div><div style={{fontSize:".65rem",color:T.gr2}}>{chat.st}</div></div></div><span style={{fontFamily:MONO,fontSize:".65rem",padding:"4px 10px",borderRadius:100,border:"1px solid rgba(255,255,255,.1)",color:T.gr2,background:"rgba(255,255,255,.03)"}}>{chat.ch}</span></div>
                {/* Messages */}
                <div ref={sr} style={{flex:1,overflowY:"auto",padding:"16px 18px",display:"flex",flexDirection:"column",gap:8}}>{all.map((m,i)=><Bubble key={ai+"-"+i} m={m} isLast={i===all.length-1}/>)}{typ&&<div style={{alignSelf:"flex-start",display:"flex",alignItems:"center",gap:6,padding:"8px 14px",background:"rgba(255,255,255,.06)",borderRadius:14,borderBottomLeftRadius:4,fontSize:".68rem",color:T.gr,border:"1px solid rgba(255,255,255,.05)"}}><div style={{display:"flex",gap:3}}>{[0,1,2].map(j=><span key={j} style={{width:5,height:5,borderRadius:"50%",background:T.gr,animation:"dotBounce 1.2s "+j*.2+"s infinite"}}/>)}</div>печатает...</div>}</div>
                {/* Input */}
                <div style={{padding:"10px 14px 12px",borderTop:"1px solid rgba(255,255,255,.1)",display:"flex",gap:8,alignItems:"center",position:"relative",zIndex:5,background:"rgba(255,255,255,.02)"}}><input type="text" value={inp} onChange={e=>setInp(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")send()}} placeholder="Написать сообщение..." style={{flex:1,background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.1)",borderRadius:10,padding:"12px 16px",fontSize:".82rem",color:T.wt,outline:"none",fontFamily:FONT,transition:"border-color .2s"}} onFocus={e=>e.target.style.borderColor="rgba(255,255,255,.2)"} onBlur={e=>e.target.style.borderColor="rgba(255,255,255,.1)"}/><button onClick={send} style={{width:38,height:38,background:T.wt,borderRadius:9,border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><Send size={15} color={T.bg}/></button></div></div></div></div>}

function Faq({q,a}){const[o,setO]=useState(false);return<div style={{borderBottom:"1px solid "+T.bd}}><button onClick={()=>setO(p=>!p)} style={{width:"100%",textAlign:"left",background:"none",border:"none",padding:"19px 0",fontSize:"1.01rem",fontWeight:600,color:T.wt,display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer",fontFamily:FONT,gap:16}}><span>{q}</span><span style={{width:23,height:23,borderRadius:6,border:"1px solid "+T.bd,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all .3s",background:o?T.wt:"transparent",transform:o?"rotate(45deg)":"none"}}><Plus size={12} color={o?T.bg:T.gr}/></span></button><div style={{maxHeight:o?250:0,overflow:"hidden",transition:"max-height .5s cubic-bezier(.16,1,.3,1)"}}><p style={{padding:"0 0 19px",fontSize:".97rem",color:T.gr,lineHeight:1.75}}>{a}</p></div></div>}
function useSmoothScroll(){
    const outerRef=useRef(null);
    const innerRef=useRef(null);
    const current=useRef(0);
    const target=useRef(0);
    const vel=useRef(0);
    const touching=useRef(false);
    const lastY=useRef(0);
    const scrollY=useRef(0);



    useEffect(()=>{
        const outer=outerRef.current;
        const inner=innerRef.current;
        if(!outer||!inner)return;

        let mx=0,raf;
        const clamp=(v,a,b)=>Math.min(Math.max(v,a),b);
        const uMax=()=>{mx=Math.max(0,inner.scrollHeight-outer.clientHeight)};

        // Handle anchor clicks
        const onHashClick=(e)=>{
            const link=e.target.closest('a[href^="#"]');
            if(!link)return;
            const id=link.getAttribute("href").slice(1);
            if(!id)return;
            const el=inner.querySelector("#"+id);
            if(!el)return;
            e.preventDefault();
            uMax();
            const y=clamp(el.offsetTop-60,0,mx);
            vel.current=0;
            target.current=y;
        };

        document.addEventListener("click",onHashClick);

        const anim=()=>{
            if(!touching.current){
                vel.current*=0.90;
                target.current+=vel.current;
                target.current=clamp(target.current,0,mx);
            }
            const diff=target.current-current.current;
            current.current+=diff*0.16;
            if(Math.abs(diff)<0.5&&Math.abs(vel.current)<0.5){
                current.current=target.current;
                vel.current=0;
            }
            scrollY.current=current.current; // ← ДОБАВЬ
            inner.style.transform=`translate3d(0,${-current.current}px,0)`;
            raf=requestAnimationFrame(anim);
        };

        const onWheel=e=>{
            e.preventDefault();
            uMax(); // recalculate only on scroll, not every frame
            vel.current+=e.deltaY*0.15;
            target.current+=e.deltaY*0.3;
            target.current=clamp(target.current,0,mx);
        };

        const onTS=e=>{touching.current=true;vel.current=0;lastY.current=e.touches[0].clientY};
        const onTM=e=>{
            e.preventDefault();
            const cy=e.touches[0].clientY;
            const delta=lastY.current-cy;
            target.current+=delta;
            target.current=clamp(target.current,0,mx);
            vel.current=delta*0.8;
            lastY.current=cy;
        };
        const onTE=()=>{touching.current=false};

        uMax();
        raf=requestAnimationFrame(anim);
        const ro=new ResizeObserver(uMax);ro.observe(inner);

        outer.addEventListener("wheel",onWheel,{passive:false});
        outer.addEventListener("touchstart",onTS,{passive:true});
        outer.addEventListener("touchmove",onTM,{passive:false});
        outer.addEventListener("touchend",onTE,{passive:true});

        return()=>{
            cancelAnimationFrame(raf);ro.disconnect();
            outer.removeEventListener("wheel",onWheel);
            outer.removeEventListener("touchstart",onTS);
            outer.removeEventListener("touchmove",onTM);
            outer.removeEventListener("touchend",onTE);
            document.removeEventListener("click",onHashClick);
        };
    },[]);

    return{outerRef,innerRef,scrollY};
}

function RevealFooter(){
    return<footer style={{
        position:"absolute",bottom:0,left:0,right:0,zIndex:0,
        background:"linear-gradient(180deg,#0a0a0f 0%,#111118 50%,#0a0a0f 100%)",
        backgroundSize:"200% 200%",
        animation:"footerGradient 12s ease infinite",
    }}>
        {/* Noise overlay */}
        <div style={{position:"absolute",inset:0,opacity:.06,backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",backgroundRepeat:"repeat",backgroundSize:180,pointerEvents:"none"}}/>

        <div style={{position:"relative",zIndex:1}}>
            {/* Big CTA area */}
            <div style={{padding:"80px 32px 48px",maxWidth:1100,margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:40}}>
                <div style={{maxWidth:500}}>
                    <h2 style={{fontSize:"clamp(2.4rem,5vw,3.6rem)",fontWeight:800,lineHeight:1.05,letterSpacing:-1,color:"#fff",marginBottom:16}}>Перестаньте терять<br/>клиентов.</h2>
                    <p style={{fontSize:".95rem",color:"rgba(255,255,255,.6)",lineHeight:1.7,maxWidth:380}}>Запросите демо — покажем платформу и разберём ваш кейс за 15 минут.</p>
                </div>
                <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:10}}>
                    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
                        <div style={{width:32,height:32,borderRadius:8,background:"rgba(255,255,255,.1)",display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontSize:".65rem",fontWeight:800,color:"#fff"}}>OL</span></div>
                        <span style={{fontWeight:700,fontSize:"1.1rem",color:"#fff"}}>One-Link</span>
                    </div>
                    <p style={{fontSize:".85rem",color:"rgba(255,255,255,.5)",lineHeight:1.7,maxWidth:280}}>Мессенджеры, CRM и ИИ-агент в единой системе для бизнеса в Казахстане.</p>
                    <div style={{display:"flex",gap:8,marginTop:4}}>
                        {[
                            {href:"https://wa.me/77001234567",label:"WhatsApp",bg:"#25d366"},
                            {href:"https://t.me/onelinkkz",label:"Telegram",bg:"rgba(255,255,255,.12)"},
                            {href:"mailto:contact@one-link.kz",label:"Email",bg:"rgba(255,255,255,.12)"},
                        ].map((s,i)=><a key={i} href={s.href} target="_blank" rel="noreferrer" style={{
                            padding:"10px 20px",borderRadius:8,background:s.bg,color:"#fff",
                            fontWeight:600,fontSize:".85rem",transition:"opacity .2s, transform .2s",
                        }} onMouseEnter={e=>{e.currentTarget.style.opacity=".8";e.currentTarget.style.transform="translateY(-2px)"}}
                                        onMouseLeave={e=>{e.currentTarget.style.opacity="1";e.currentTarget.style.transform="none"}}
                        >{s.label}</a>)}
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div style={{maxWidth:1100,margin:"0 auto",padding:"0 32px"}}><div style={{height:1,background:"linear-gradient(90deg,transparent,rgba(255,255,255,.15),transparent)"}}/></div>

            {/* Links grid */}
            <div style={{maxWidth:1100,margin:"0 auto",padding:"40px 32px",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:32}} className="g4">
                {[
                    {h:"Платформа",l:[["#solution","Каналы"],["#solution","CRM"],["#solution","ИИ-агент"],["#solution","Guardrails"],["#solution","Аналитика"]]},
                    {h:"Решения",l:[["#","Клиники"],["#","Онлайн-школы"],["#","Рестораны"],["#","E-commerce"],["#","Недвижимость"]]},
                    {h:"Компания",l:[["#pricing","Veritas Consult"],["#pricing","Цены"],["#faq","FAQ"],["#cta","Контакты"],["#","Блог"]]},
                    {h:"Правовая",l:[["https://www.vconsult.kz/one-link/privacy","Конфиденциальность"],["https://www.vconsult.kz/one-link/terms","Условия"],["https://www.vconsult.kz/one-link/privacy","Обработка данных"]]}
                ].map(col=><div key={col.h}>
                    <div style={{fontFamily:MONO,fontSize:".6rem",color:"rgba(255,255,255,.35)",letterSpacing:1.5,textTransform:"uppercase",marginBottom:14,fontWeight:600}}>{col.h}</div>
                    {col.l.map(([href,t])=><a key={t} href={href} style={{
                        display:"block",fontSize:".85rem",color:"rgba(255,255,255,.5)",
                        marginBottom:9,transition:"color .2s, transform .2s",
                    }} onMouseEnter={e=>{e.currentTarget.style.color="#fff";e.currentTarget.style.transform="translateX(4px)"}}
                                              onMouseLeave={e=>{e.currentTarget.style.color="rgba(255,255,255,.5)";e.currentTarget.style.transform="none"}}
                    >{t}</a>)}
                </div>)}
            </div>

            {/* Divider */}
            <div style={{maxWidth:1100,margin:"0 auto",padding:"0 32px"}}><div style={{height:1,background:"linear-gradient(90deg,transparent,rgba(255,255,255,.1),transparent)"}}/></div>

            {/* Bottom bar */}
            <div style={{maxWidth:1100,margin:"0 auto",padding:"20px 32px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:8}}>
                <span style={{fontSize:".72rem",color:"rgba(255,255,255,.3)"}}>© 2026 One-Link · Veritas Consult · Астана, Казахстан</span>
                <div style={{display:"flex",alignItems:"center",gap:5}}>
                    <span style={{width:5,height:5,borderRadius:"50%",background:T.green}}/>
                    <span style={{fontSize:".72rem",color:"rgba(255,255,255,.3)"}}>Все системы работают</span>
                </div>
            </div>

            {/* Giant watermark */}
            <div style={{textAlign:"center",padding:"20px 0 40px",overflow:"hidden"}}>
                <span style={{
                    fontSize:"clamp(6rem,18vw,16rem)",fontWeight:900,letterSpacing:"-.04em",lineHeight:.85,
                    background:"linear-gradient(180deg,rgba(255,255,255,.1) 0%,rgba(255,255,255,.02) 100%)",
                    WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",
                    display:"block",userSelect:"none",fontFamily:FONT
                }}>ONE-LINK</span>
            </div>
        </div>
    </footer>;
}
export default function App(){
    const{outerRef,innerRef,scrollY}=useSmoothScroll();
    const[nav,setNav]=useState(false);
    const navRef=useRef(false);

    useEffect(()=>{
        let raf;
        let prev=false;
        const navEl=document.getElementById("main-nav");
        const check=()=>{
            const show=scrollY.current>50;
            if(show!==prev){
                prev=show;
                if(navEl){
                    navEl.style.background=show?"rgba(8,8,12,.95)":"transparent";
                    navEl.style.borderBottom=show?"1px solid rgba(255,255,255,.06)":"1px solid transparent";
                    navEl.style.padding=show?"9px 0":"15px 0";
                }
            }
            raf=requestAnimationFrame(check);
        };
        raf=requestAnimationFrame(check);
        return()=>cancelAnimationFrame(raf);
    },[]);

    const FOOTER_H=950;

    useEffect(()=>{
        let raf;
        const check=()=>{
            if(innerRef.current){
                const t=innerRef.current.style.transform;
                const m=t.match(/translate3d\(0[^,]*,\s*(-?[\d.]+)px/);
                const y=m?Math.abs(parseFloat(m[1])):0;
                setNav(y>50);
            }
            raf=requestAnimationFrame(check);
        };
        raf=requestAnimationFrame(check);
        return()=>cancelAnimationFrame(raf);
    },[]);
    return<div ref={outerRef} style={{position:"fixed",inset:0,overflow:"hidden",zIndex:0}}>
        <style>{CSS}</style>
        <RevealFooter/>
        <nav id="main-nav" style={{position:"fixed",top:0,left:0,right:0,zIndex:9990,background:"transparent",borderBottom:"1px solid transparent",transition:"all .35s",padding:"15px 0"}}><div className="w" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}><a href="#" style={{display:"flex",alignItems:"center",gap:8,fontWeight:700,fontSize:".92rem",letterSpacing:-.3}}><div style={{width:27,height:27,borderRadius:7,background:T.wt,display:"flex",alignItems:"center",justifyContent:"center",fontSize:".55rem",fontWeight:800,color:T.bg}}>OL</div>One-Link</a><div className="nav-r" style={{display:"flex",alignItems:"center",gap:20}}>{[["#problem","Проблема"],["#solution","Решение"],["#pricing","Цены"],["#faq","FAQ"]].map(([h,t])=><a key={t} href={h} style={{fontSize:".92rem",color:T.gr,fontWeight:500,transition:"color .2s"}} onMouseEnter={e=>e.currentTarget.style.color=T.wt} onMouseLeave={e=>e.currentTarget.style.color=T.gr}>{t}</a>)}<a href="tel:+77001234567" style={{fontFamily:MONO,fontSize:".8rem",color:T.wt,fontWeight:500}}>+7 700 123 45 67</a><a href="#cta" style={{background:T.wt,color:T.bg,padding:"9px 22px",borderRadius:7,fontSize:".92rem",fontWeight:600,transition:"opacity .2s"}} onMouseEnter={e=>e.currentTarget.style.opacity=".88"} onMouseLeave={e=>e.currentTarget.style.opacity="1"}>Получить демо</a></div></div></nav>

        <div ref={innerRef} style={{position:"relative",zIndex:1,pointerEvents:"none"}}>
            <div style={{pointerEvents:"auto",background:T.bg}}>

        {/* ═══════════ NAV ═══════════ */}

        {/* ═══════════ HERO ═══════════ */}
        <section style={{paddingTop:145,paddingBottom:60,position:"relative",overflow:"hidden",minHeight:"100vh"}}><HeroBg/>{[...Array(4)].map((_,i)=><div key={i} style={{position:"absolute",width:100+i*30,height:1,background:"linear-gradient(90deg,rgba(139,92,246,.3),transparent)",transform:"rotate(-35deg)",animation:`meteor ${5+i*2}s ${i*1.5}s linear infinite`,opacity:0,top:(10+i*18)+"%",left:(5+i*12)+"%",zIndex:0,pointerEvents:"none"}}/>)}<div className="w" style={{textAlign:"center"}}><R d={.06}><h1 style={{fontSize:"clamp(3.2rem,7vw,5.2rem)",fontWeight:800,lineHeight:1.05,letterSpacing:-2,marginBottom:14,background:"linear-gradient(180deg,#f4f4f8 30%,#52525b 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>Перестаньте терять<br/>входящие сообщения.</h1></R><R d={.12}><p style={{fontSize:"1.15rem",color:T.gr,lineHeight:1.6,maxWidth:540,margin:"0 auto 8px"}}>CRM + мессенджеры + ИИ-агент в единой системе.</p></R><R d={.14}><div style={{margin:"8px auto 24px"}}><Typing/></div></R><R d={.18}></R><R d={.24}><div className="hero-btns" style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}}><a href="#cta" style={{display:"inline-flex",alignItems:"center",gap:7,background:T.wt,color:T.bg,padding:"15px 34px",borderRadius:10,fontWeight:600,fontSize:"1.02rem",position:"relative",overflow:"hidden",boxShadow:"0 0 20px rgba(255,255,255,.08),0 0 60px rgba(203,209,219,.06)",transition:"box-shadow .3s,transform .3s"}} onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 0 30px rgba(255,255,255,.15),0 0 80px rgba(203,209,219,.1)";e.currentTarget.style.transform="translateY(-1px)"}} onMouseLeave={e=>{e.currentTarget.style.boxShadow="0 0 20px rgba(255,255,255,.08),0 0 60px rgba(203,209,219,.06)";e.currentTarget.style.transform="none"}}><span style={{position:"absolute",inset:0,background:"linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent)",transform:"translateX(-100%)",animation:"shimmerSlide 3s 1s infinite"}}/><Sparkles size={15}/>Запросить демо</a><a href="#solution" style={{display:"inline-flex",alignItems:"center",gap:7,padding:"14px 30px",borderRadius:8,border:"1px solid "+T.bd,color:T.wt,fontWeight:500,fontSize:"1rem",background:"rgba(255,255,255,.015)",transition:"border-color .2s"}} onMouseEnter={e=>e.currentTarget.style.borderColor="rgba(255,255,255,.15)"} onMouseLeave={e=>e.currentTarget.style.borderColor=T.bd}>Как это работает <ChevronDown size={15}/></a></div></R></div><div style={{maxWidth:1100,margin:"0 auto",padding:"0 32px",position:"relative",zIndex:1,marginTop:80}}><R d={.3}><ChatApp/></R></div>

            {/* Stats bar under chat */}
            {/* ── Stats + Social Proof ── */}
            <div className="w" style={{position:"relative",zIndex:1,marginTop:48,paddingBottom:8}}><R d={.35}>
                <div style={{borderRadius:18,border:"1px solid rgba(255,255,255,.06)",background:"rgba(255,255,255,.02)",padding:"36px 32px 32px",overflow:"hidden",position:"relative"}}>
                    {/* subtle top glow */}
                    <div style={{position:"absolute",top:-1,left:"15%",right:"15%",height:1,background:"linear-gradient(90deg,transparent,#8b5cf633,transparent)"}}/>

                    {/* Stats row */}
                    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16,marginBottom:28}} className="g4">
                        {[
                            {target:90,suffix:"%",prefix:"",label:"обращений автоматически",color:T.ac},
                            {target:30,suffix:"с",prefix:"<",label:"среднее время ответа ИИ",color:T.ac},
                            {target:3,suffix:" дня",prefix:"",label:"подключение с нуля",color:T.ac},
                            {target:5,suffix:"→1",prefix:"",label:"систем в одной платформе",color:T.ac}
                        ].map((s,i)=>
                            <div key={i} style={{textAlign:"center",padding:"20px 12px",borderRadius:12,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.04)"}}>
                                <NumberTicker target={s.target} suffix={s.suffix} prefix={s.prefix}/>
                                <div style={{fontSize:".75rem",color:T.gr,marginTop:6,letterSpacing:.3,lineHeight:1.4}}>{s.label}</div>
                            </div>)}
                    </div>

                    {/* Divider */}
                    <div style={{height:1,background:"linear-gradient(90deg,transparent,rgba(255,255,255,.06),transparent)",marginBottom:20}}/>

                    {/* Industry tags */}
                    <p style={{fontFamily:MONO,fontSize:".6rem",color:T.gr2,letterSpacing:2,textTransform:"uppercase",marginBottom:12,textAlign:"center"}}>Компании уже используют One-Link</p>
                    <div style={{display:"flex",justifyContent:"center",gap:8,flexWrap:"wrap"}}>
                        {["Клиники","Онлайн-школы","Рестораны","Недвижимость","E-commerce"].map((n,i)=><span key={i} style={{fontSize:".82rem",color:T.gr2,fontWeight:500,padding:"7px 16px",borderRadius:100,border:"1px solid rgba(255,255,255,.06)",background:"rgba(255,255,255,.02)",transition:"border-color .2s,color .2s"}} onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(139,92,246,.2)";e.currentTarget.style.color=T.wt}} onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,.06)";e.currentTarget.style.color=T.gr2}}>{n}</span>)}
                    </div>
                </div>
            </R></div>
        </section>

        {/* ═══════════ PROBLEM ═══════════ */}
        <section id="problem" style={{paddingTop:40,paddingBottom:72}}><div className="w">

            <div style={{position:"relative"}}>

                <R><h2 style={{fontSize:"clamp(2.4rem,4.5vw,3.4rem)",fontWeight:800,letterSpacing:-1,lineHeight:1.08,marginBottom:14,background:"linear-gradient(180deg,#f4f4f8 20%,#737373 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>Проблема не в людях.</h2><p style={{fontSize:"1.03rem",color:T.gr,lineHeight:1.75,maxWidth:520,marginBottom:32,position:"relative",zIndex:1}}>CRM, каналы, МИС, база данных, ИИ — пять узлов. Одна обновляется — другая ломается. Каждый разрыв между мессенджером и CRM — это потерянный клиент.</p></R>

                {/* ── Broken Infrastructure Diagram ── */}
                <R d={.1}><div style={{position:"relative",margin:"0 auto 48px",padding:"48px 32px",borderRadius:20,border:"1px solid rgba(239,68,68,.08)",background:"rgba(255,255,255,.01)",overflow:"hidden"}}>

                    {/* Red ambient glow */}
                    <div style={{position:"absolute",top:"40%",left:"50%",transform:"translate(-50%,-50%)",width:600,height:300,borderRadius:"50%",background:"radial-gradient(ellipse,rgba(239,68,68,.06),transparent 65%)",pointerEvents:"none"}}/>

                    {/* Title */}
                    <div style={{textAlign:"center",marginBottom:40}}>
                        <span style={{fontFamily:MONO,fontSize:".6rem",color:"rgba(239,68,68,.4)",letterSpacing:3,textTransform:"uppercase"}}>Текущая инфраструктура</span>
                    </div>

                    {/* 5 nodes in a row */}
                    <div style={{display:"flex",justifyContent:"center",alignItems:"stretch",gap:0,position:"relative",maxWidth:900,margin:"0 auto"}}>

                        {[
                            {name:"Wazzup",role:"Каналы",issue:"API сломался",icon:<MessageCircle size={20}/>},
                            {name:"amoCRM",role:"CRM",issue:"Рассинхрон",icon:<Users size={20}/>},
                            {name:"МИС",role:"Мед. система",issue:"Нет связи",icon:<Stethoscope size={20}/>},
                            {name:"Лок. БД",role:"Маппер",issue:"Костыли",icon:<Server size={20}/>},
                            {name:"ChatGPT",role:"ИИ-агент",issue:"Сторонний",icon:<Bot size={20}/>},
                        ].map((node,i,arr)=><div key={i} style={{display:"flex",alignItems:"center",flex:1}}>

                            {/* Node card */}
                            <div style={{
                                flex:1,
                                padding:"24px 16px",
                                borderRadius:14,
                                border:"1px solid rgba(255,255,255,.06)",
                                background:"rgba(255,255,255,.02)",
                                textAlign:"center",
                                position:"relative",
                                transition:"border-color .3s,transform .3s",
                            }} onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(239,68,68,.2)";e.currentTarget.style.transform="translateY(-3px)"}}
                                 onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,.06)";e.currentTarget.style.transform="none"}}>

                                {/* Icon */}
                                <div style={{width:44,height:44,borderRadius:10,background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.06)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px",color:T.gr}}>
                                    {node.icon}
                                </div>

                                <div style={{fontFamily:MONO,fontSize:".82rem",fontWeight:700,color:T.wt,marginBottom:2}}>{node.name}</div>
                                <div style={{fontSize:".7rem",color:T.gr2,marginBottom:10}}>{node.role}</div>

                                {/* Issue badge */}
                                <div style={{display:"inline-flex",alignItems:"center",gap:4,padding:"4px 10px",borderRadius:100,background:"rgba(239,68,68,.06)",border:"1px solid rgba(239,68,68,.12)"}}>
                                    <span style={{width:5,height:5,borderRadius:"50%",background:T.red,animation:"blink 2s ease infinite",animationDelay:i*.3+"s"}}/>
                                    <span style={{fontFamily:MONO,fontSize:".58rem",color:T.red}}>{node.issue}</span>
                                </div>
                            </div>

                            {/* Broken connector */}
                            {i<arr.length-1&&<div style={{width:40,flexShrink:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4,position:"relative"}}>
                                {/* Dashed line */}
                                <div style={{width:"100%",height:1,background:"repeating-linear-gradient(90deg,rgba(239,68,68,.2) 0px,rgba(239,68,68,.2) 4px,transparent 4px,transparent 8px)"}}/>
                                {/* X mark */}
                                <div style={{position:"absolute",width:18,height:18,borderRadius:"50%",background:"rgba(239,68,68,.1)",border:"1px solid rgba(239,68,68,.2)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <svg width="8" height="8" viewBox="0 0 8 8" stroke={T.red} strokeWidth="1.5" strokeLinecap="round">
                                        <line x1="1" y1="1" x2="7" y2="7"/>
                                        <line x1="7" y1="1" x2="1" y2="7"/>
                                    </svg>
                                </div>
                            </div>}

                        </div>)}
                    </div>

                    {/* Bottom stats */}
                    <div style={{display:"flex",justifyContent:"center",gap:32,marginTop:36,flexWrap:"wrap"}}>
                        {[
                            {num:"5",label:"систем"},
                            {num:"5",label:"точек отказа"},
                            {num:"30%",label:"потерь"},
                        ].map((s,i)=><div key={i} style={{display:"flex",alignItems:"baseline",gap:6}}>
                            <span style={{fontFamily:MONO,fontSize:"1.4rem",fontWeight:800,color:"rgba(239,68,68,.3)"}}>{s.num}</span>
                            <span style={{fontFamily:MONO,fontSize:".65rem",color:T.gr2,letterSpacing:1}}>{s.label}</span>
                        </div>)}
                    </div>

                </div></R>

                <div className="g3">{[{icon:<AlertTriangle size={20}/>,num:"30%",ti:"Потерянные обращения",de:"Клиент пишет в WhatsApp, звонит повторно — попадает на менеджера, который ничего не знает."},{icon:<Link2 size={20}/>,num:"5×",ti:"Точки отказа",de:"Обновилась одна система — сломалась интеграция. Упала другая — встала вся цепочка."},{icon:<TrendingUp size={20}/>,num:"₸₸₸",ti:"Скрытые расходы",de:"AmoCRM + Wazzup + ChatGPT API = ~200 000 ₸/мес. Плюс расходы на интеграцию и поддержку."}].map((x,i)=><R key={i} d={i*.08}><Card><div style={{color:T.red,marginBottom:14,opacity:.7}}>{x.icon}</div><div style={{fontFamily:MONO,fontSize:"2rem",fontWeight:800,color:"rgba(255,255,255,.1)",lineHeight:1,marginBottom:10}}>{x.num}</div><h4 style={{fontSize:"1.15rem",fontWeight:700,marginBottom:6}}>{x.ti}</h4><p style={{fontSize:".94rem",color:T.gr,lineHeight:1.65}}>{x.de}</p></Card></R>)}</div><R d={.1} s={{marginTop:40}}><Card glow><Tag>Реальный кейс · Медцентр в Актобе · Январь 2025</Tag><p style={{fontSize:"1.01rem",color:"rgba(255,255,255,.7)",lineHeight:1.8,maxWidth:700}}>Первый прототип — ИИ-агент для медцентра. CRM, телефония, МИС, БД, агент — пять узлов от разных вендоров. Обновление API в одной системе рушило всю цепь. <strong style={{color:T.wt}}>Мы поняли: зоопарк из чужих систем — хрупко, дорого и не масштабируется.</strong> И начали строить единый контур.</p></Card></R>
            </div></div></section>

        {/* ═══════════ SOLUTION ═══════════ */}
        <section id="solution" style={{paddingTop:96,paddingBottom:72,borderTop:"1px solid "+T.bd}}><div className="w"><R><Tag>Решение</Tag><h2 style={{fontSize:"clamp(2.2rem,4vw,3.1rem)",fontWeight:800,letterSpacing:-.7,lineHeight:1.1,marginBottom:14}}>Мы перестали строить<br/><span style={{color:T.gr}}>из чужих кубиков.</span></h2><p style={{fontSize:"1.03rem",color:T.gr,lineHeight:1.75,maxWidth:520,marginBottom:48}}>Все модули — внутри одной платформы. Один сервер. Ноль лишних подписок.</p></R>

            {/* ── Animated Beam: Integration Map ── */}
            <R d={.1}><div style={{position:"relative",maxWidth:1000,margin:"0 auto 64px",borderRadius:20,border:"1px solid rgba(255,255,255,.08)",overflow:"hidden",background:"rgba(255,255,255,.02)",padding:"60px 40px"}}>

                {/* Subtle center glow */}
                <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:300,height:300,borderRadius:"50%",background:"radial-gradient(ellipse,rgba(255,255,255,.04),transparent 70%)",pointerEvents:"none"}}/>

                {/* SVG lines layer */}
                <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none"}} viewBox="0 0 1000 500" fill="none" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="beamW"><stop offset="0%" stopColor="#ffffff00"/><stop offset="50%" stopColor="#ffffff"/><stop offset="100%" stopColor="#ffffff00"/></linearGradient>
                    </defs>

                    {/* Static lines — left to center */}
                    <path d="M160,125 C320,125 350,250 500,250" stroke="rgba(255,255,255,.06)" strokeWidth="1"/>
                    <path d="M160,250 C280,250 320,200 400,200 C440,200 470,250 500,250" stroke="rgba(255,255,255,.06)" strokeWidth="1"/>
                    <path d="M160,375 C320,375 350,250 500,250" stroke="rgba(255,255,255,.06)" strokeWidth="1"/>

                    {/* Static lines — center to right */}
                    <path d="M500,250 C650,250 680,125 840,125" stroke="rgba(255,255,255,.06)" strokeWidth="1"/>
                    <path d="M500,250 C540,250 580,300 620,300 C700,300 740,250 840,250" stroke="rgba(255,255,255,.06)" strokeWidth="1"/>
                    <path d="M500,250 C650,250 680,375 840,375" stroke="rgba(255,255,255,.06)" strokeWidth="1"/>

                    {/* Animated beams — left */}
                    <path d="M160,125 C320,125 350,250 500,250" stroke="url(#beamW)" strokeWidth="1.5" strokeDasharray="40 460" strokeLinecap="round"><animate attributeName="stroke-dashoffset" values="500;0" dur="2.5s" repeatCount="indefinite"/></path>
                    <path d="M160,250 C280,250 320,200 400,200 C440,200 470,250 500,250" stroke="url(#beamW)" strokeWidth="1.5" strokeDasharray="40 520" strokeLinecap="round"><animate attributeName="stroke-dashoffset" values="560;0" dur="3s" repeatCount="indefinite" begin=".5s"/></path>
                    <path d="M160,375 C320,375 350,250 500,250" stroke="url(#beamW)" strokeWidth="1.5" strokeDasharray="40 460" strokeLinecap="round"><animate attributeName="stroke-dashoffset" values="500;0" dur="2.8s" repeatCount="indefinite" begin="1s"/></path>

                    {/* Animated beams — right */}
                    <path d="M500,250 C650,250 680,125 840,125" stroke="url(#beamW)" strokeWidth="1.5" strokeDasharray="40 460" strokeLinecap="round"><animate attributeName="stroke-dashoffset" values="0;-500" dur="2.6s" repeatCount="indefinite" begin=".3s"/></path>
                    <path d="M500,250 C540,250 580,300 620,300 C700,300 740,250 840,250" stroke="url(#beamW)" strokeWidth="1.5" strokeDasharray="40 520" strokeLinecap="round"><animate attributeName="stroke-dashoffset" values="0;-560" dur="3s" repeatCount="indefinite" begin=".8s"/></path>
                    <path d="M500,250 C650,250 680,375 840,375" stroke="url(#beamW)" strokeWidth="1.5" strokeDasharray="40 460" strokeLinecap="round"><animate attributeName="stroke-dashoffset" values="0;-500" dur="3.2s" repeatCount="indefinite" begin="1.2s"/></path>
                </svg>

                {/* Nodes grid */}
                <div style={{position:"relative",zIndex:1,display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:40,alignItems:"center",minHeight:380}}>

                    {/* Left column — channels */}
                    <div style={{display:"flex",flexDirection:"column",gap:32,alignItems:"center"}}>
                        {[
                            {n:"WhatsApp",color:"#25d366",path:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"},
                            {n:"Telegram",color:"#fff",path:"M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"},
                            {n:"Instagram",color:"#e1306c",path:"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.441 1.441 0 0 1 2.88 0z"}
                        ].map((item,i)=><div key={i} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:10}}>
                            <div style={{width:56,height:56,borderRadius:"50%",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",display:"flex",alignItems:"center",justifyContent:"center",transition:"border-color .3s,transform .3s"}} onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,.2)";e.currentTarget.style.transform="scale(1.1)"}} onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,.08)";e.currentTarget.style.transform="scale(1)"}}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill={item.color}><path d={item.path}/></svg>
                            </div>
                            <span style={{fontSize:".82rem",fontWeight:600,color:T.gr}}>{item.n}</span>
                        </div>)}
                    </div>

                    {/* Center — ONE LINK hub */}
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <div style={{width:130,height:130,borderRadius:"50%",background:T.bg,border:"1px solid rgba(255,255,255,.12)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative",boxShadow:"0 0 80px rgba(255,255,255,.04),0 0 0 8px rgba(8,8,12,.9)"}}>
                            {/* Outer solid mask — hides lines behind */}
                            <div style={{position:"absolute",inset:-20,borderRadius:"50%",background:"radial-gradient(circle,"+T.bg+" 55%,transparent 70%)",pointerEvents:"none",zIndex:0}}/>
                            {/* Rotating ring */}
                            <div style={{position:"absolute",inset:-16,borderRadius:"50%",border:"1px dashed rgba(255,255,255,.08)",animation:"spin 20s linear infinite"}}/>
                            <span style={{fontFamily:MONO,fontSize:".8rem",fontWeight:800,color:T.wt,letterSpacing:2,lineHeight:1.4,textAlign:"center",position:"relative",zIndex:1}}>ONE<br/>LINK</span>
                        </div>
                    </div>

                    {/* Right column — outputs */}
                    <div style={{display:"flex",flexDirection:"column",gap:32,alignItems:"center"}}>
                        {[
                            {n:"CRM",icon:<Users size={22} strokeWidth={1.5}/>},
                            {n:"ИИ-агент",icon:<Bot size={22} strokeWidth={1.5}/>},
                            {n:"Guardrails",icon:<Shield size={22} strokeWidth={1.5}/>}
                        ].map((item,i)=><div key={i} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:10}}>
                            <div style={{width:56,height:56,borderRadius:"50%",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",display:"flex",alignItems:"center",justifyContent:"center",color:T.gr,transition:"border-color .3s,transform .3s"}} onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,.2)";e.currentTarget.style.transform="scale(1.1)"}} onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,.08)";e.currentTarget.style.transform="scale(1)"}}>
                                {item.icon}
                            </div>
                            <span style={{fontSize:".82rem",fontWeight:600,color:T.gr}}>{item.n}</span>
                        </div>)}
                    </div>
                </div>

                {/* Label */}
                <div style={{textAlign:"center",marginTop:24}}><span style={{fontFamily:MONO,fontSize:".6rem",color:"rgba(255,255,255,.15)",letterSpacing:4}}>ЕДИНЫЙ КОНТУР</span></div>

                <style>{`@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
            </div></R>

            {/* ── 4 feature cards ── */}
            <div className="g2">{[
                {icon:<MessageCircle size={18}/>,tag:"01 — Каналы",ti:"Агрегация всех каналов",de:"WhatsApp, Telegram, Instagram, телефония, email — всё в одном окне.",tags:["WhatsApp","Telegram","Instagram","TikTok","Телефония","Email"]},
                {icon:<Users size={18}/>,tag:"02 — CRM",ti:"Встроенная CRM",de:"Не AmoCRM, не Bitrix. CRM внутри платформы — нативно.",tags:["Контакты","Сделки","Воронки","Аналитика","Сквозная история"]},
                {icon:<Bot size={18}/>,tag:"03 — ИИ-Агент",ti:"Цифровой менеджер 24/7",de:"Голос, изображения, диалог. Один тумблер: вкл / выкл.",tags:["Голос","Изображения","Диалог","Kaspi Pay"]},
                {icon:<Shield size={18}/>,tag:"04 — Guardrails",ti:"Защита бренда",de:"Не выдумает, не скажет «не знаю», не пропустит нецензурщину.",tags:["Не галлюцинирует","Фильтры","Эскалация","Защита данных"]}
            ].map((x,i)=><R key={i} d={i*.07}><Card s={{height:"100%"}}><div style={{width:38,height:38,borderRadius:9,background:"#8b5cf610",border:"1px solid #8b5cf620",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16,color:T.ac}}>{x.icon}</div><Tag>{x.tag}</Tag><h3 style={{fontSize:"1.26rem",fontWeight:700,letterSpacing:-.2,marginBottom:7}}>{x.ti}</h3><p style={{fontSize:".97rem",color:T.gr,lineHeight:1.7,marginBottom:14}}>{x.de}</p><div style={{display:"flex",flexWrap:"wrap",gap:5}}>{x.tags.map(t=><span key={t} style={{fontFamily:MONO,fontSize:".58rem",padding:"3px 8px",borderRadius:100,border:"1px solid "+T.bd,color:T.gr2}}>{t}</span>)}</div></Card></R>)}</div>

            {/* ── Guardrails Pipeline mini-diagram ── */}
            <R d={.15} s={{marginTop:32}}><Card glow s={{padding:"36px 30px"}}><div style={{display:"flex",alignItems:"center",gap:10,marginBottom:20}}><Shield size={16} color={T.ac}/><span style={{fontFamily:MONO,fontSize:".6rem",color:T.ac,letterSpacing:2,textTransform:"uppercase"}}>Как работают Guardrails</span></div>
                <div style={{display:"flex",flexDirection:"column",gap:0}}>
                    {[
                        {n:"1. Фильтр достоверности",d:"Агент никогда не выдумывает факты. Работает строго в рамках вашей базы знаний."},
                        {n:"2. Фильтр компетентности",d:"Не скажет «Я не знаю». Переформулирует запрос или бесшовно переключит на менеджера."},
                        {n:"3. Фильтр безопасности",d:"Блокировка нецензурной лексики и защита конфиденциальных данных."}
                    ].map((f,i)=><div key={i} style={{display:"flex",gap:16,alignItems:"flex-start",padding:"16px 0",borderBottom:i<2?"1px solid "+T.bd:"none"}}>
                        <div style={{width:32,height:32,borderRadius:8,background:"rgba(139,92,246,.08)",border:"1px solid rgba(139,92,246,.15)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:2}}>
                            <span style={{fontFamily:MONO,fontSize:".7rem",fontWeight:700,color:T.ac}}>{i+1}</span>
                        </div>
                        <div><div style={{fontWeight:700,fontSize:".95rem",marginBottom:3}}>{f.n}</div><p style={{fontSize:".9rem",color:T.gr,lineHeight:1.6}}>{f.d}</p></div>
                    </div>)}
                </div>
                <div style={{marginTop:16,padding:"12px 16px",background:"rgba(139,92,246,.06)",borderRadius:10,border:"1px solid rgba(139,92,246,.1)",display:"flex",alignItems:"center",gap:10}}>
                    <Check size={14} color={T.green}/>
                    <span style={{fontSize:".88rem",color:"rgba(255,255,255,.7)"}}>Все проверки происходят на одном сервере. Данные не покидают ваш контур.</span>
                </div>
            </Card></R>

            {/* ── Product Screenshot Placeholder ── */}
            <R d={.2} s={{marginTop:48}}><div style={{textAlign:"center",marginBottom:12}}><span style={{fontFamily:MONO,fontSize:".6rem",color:T.gr2,letterSpacing:2,textTransform:"uppercase"}}>Одно окно. Полный контекст.</span></div>
                <SafariFrame url="app.one-link.kz" src="https://raw.githubusercontent.com/kazakhbala01/one-link/refs/heads/main/interface.png"/></R>

        </div></section>

        {/* ═══════════ TARGET INDUSTRIES ═══════════ */}
        <section style={{paddingTop:96,paddingBottom:72,borderTop:"1px solid "+T.bd}}><div className="w"><R><Tag>Для кого</Tag><h2 style={{fontSize:"clamp(2.1rem,3.5vw,2.8rem)",fontWeight:800,letterSpacing:-.5,marginBottom:12}}>10+ компаний, где каждый <span style={{color:T.gr}}>клиент на счету</span></h2><p style={{fontSize:"1.03rem",color:T.gr,lineHeight:1.75,maxWidth:520,marginBottom:40}}>Если ваш бизнес живёт на входящих обращениях — One Link адаптируется под вашу специфику.</p></R><div className="g3">{[
            {i:<Stethoscope size={18}/>,n:"Клиники",d:"Запись через мессенджеры, связка с МИС.",cs:"ИИ-агент обрабатывает 80% записей без участия администратора"},
            {i:<GraduationCap size={18}/>,n:"Онлайн-школы",cs:"Автоответы на вопросы → оплата через Kaspi → рассылка расписания",d:"Конверсия из заявки в оплату — автоматически."},
            {i:<UtensilsCrossed size={18}/>,n:"Рестораны",d:"Заказы из всех каналов в одном окне.",cs:"Telegram, WhatsApp, Instagram → единая очередь → кухня"},
            {i:<Home size={18}/>,n:"Недвижимость",d:"Лиды → CRM автоматически, без ручного ввода.",cs:"Квалификация бюджета и района — до разговора с менеджером"},
            {i:<ShoppingBag size={18}/>,n:"E-commerce",d:"ИИ 24/7, ссылки Kaspi Pay в один клик.",cs:"Автоматическая обработка «есть ли в наличии?» и «какой размер?»"},
            {i:<Wrench size={18}/>,n:"Сервис",d:"Единая история клиента для всей команды.",cs:"Повторный клиент → агент знает историю → быстрее закрытие"}
        ].map((x,i)=><R key={i} d={i*.05}><div className="glass" style={{border:"1px solid rgba(255,255,255,.06)",borderRadius:14,padding:"24px 22px",display:"flex",flexDirection:"column",gap:10,transition:"border-color .35s,transform .35s"}} onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,.12)";e.currentTarget.style.transform="translateY(-2px)"}} onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,.06)";e.currentTarget.style.transform="none"}}><div style={{display:"flex",gap:12,alignItems:"center"}}><div style={{width:36,height:36,borderRadius:9,background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.06)",display:"flex",alignItems:"center",justifyContent:"center",color:T.gr,flexShrink:0}}>{x.i}</div><div><h4 style={{fontSize:"1.1rem",fontWeight:700}}>{x.n}</h4><p style={{fontSize:".82rem",color:T.gr,lineHeight:1.5}}>{x.d}</p></div></div><div style={{padding:"10px 12px",background:"rgba(139,92,246,.03)",borderRadius:8,border:"1px solid rgba(139,92,246,.06)",fontSize:".8rem",color:"rgba(255,255,255,.55)",lineHeight:1.5,fontStyle:"italic"}}><Zap size={10} color={T.ac} style={{display:"inline",verticalAlign:"middle",marginRight:5}}/>{x.cs}</div></div></R>)}</div>

            {/* ── AI Agent in action placeholder ── */}
            <R d={.15} s={{marginTop:48}}><div style={{textAlign:"center",marginBottom:12}}><span style={{fontFamily:MONO,fontSize:".6rem",color:T.gr2,letterSpacing:2,textTransform:"uppercase"}}>ИИ-агент в действии</span></div>
                <SafariFrame url="app.one-link.kz" src="https://raw.githubusercontent.com/kazakhbala01/one-link/refs/heads/main/chat.png"/></R>

        </div></section>

        {/* ═══════════ VARIANTS ═══════════ */}
        <section style={{paddingTop:96,paddingBottom:72,borderTop:"1px solid "+T.bd}}><div className="w"><R><Tag>Внедрение</Tag><h2 style={{fontSize:"clamp(2.1rem,3.5vw,2.8rem)",fontWeight:800,letterSpacing:-.5,marginBottom:40}}>2 формата — <span style={{color:T.gr}}>запуск от 3 дней</span></h2></R>
            <div className="g2">
                <R><Card s={{height:"100%"}}><div style={{fontFamily:MONO,fontSize:".6rem",color:T.gr2,letterSpacing:2,textTransform:"uppercase",marginBottom:12}}>Вариант A · от 3 дней</div><h3 style={{fontSize:"1.26rem",fontWeight:700,marginBottom:8}}>Интеграция в ваш контур</h3><p style={{fontSize:".94rem",color:T.gr,lineHeight:1.7,marginBottom:14}}>Подключаем коммуникации и ИИ к вашей существующей ИС.</p>{["Данные в вашей инфраструктуре","Подключение к существующей ИС","Коммуникации + ИИ"].map(it=><div key={it} style={{display:"flex",alignItems:"center",gap:8,fontSize:".9rem",color:"rgba(255,255,255,.7)",padding:"4px 0"}}><Check size={12} color={T.ac}/>{it}</div>)}</Card></R>
                <R d={.08}><Card glow s={{height:"100%",position:"relative"}}><div style={{position:"absolute",top:12,right:12,fontFamily:MONO,fontSize:".53rem",fontWeight:600,background:T.ac,color:"#fff",padding:"2px 8px",borderRadius:5}}>РЕКОМЕНДУЕМ</div><div style={{fontFamily:MONO,fontSize:".6rem",color:T.ac,letterSpacing:2,textTransform:"uppercase",marginBottom:12}}>Вариант B · 2–4 недели</div><h3 style={{fontSize:"1.26rem",fontWeight:700,marginBottom:8}}>Полное развёртывание</h3><p style={{fontSize:".94rem",color:T.gr,lineHeight:1.7,marginBottom:14}}>Разворачиваем One Link как единое ядро под ключ.</p>{["Инфраструктура с нуля","CRM + все каналы нативно","ИИ + Guardrails + Техподдержка 24/7"].map(it=><div key={it} style={{display:"flex",alignItems:"center",gap:8,fontSize:".9rem",color:"rgba(255,255,255,.7)",padding:"4px 0"}}><Check size={12} color={T.ac}/>{it}</div>)}</Card></R>
            </div>
        </div></section>

        {/* ═══════════ HOW IT WORKS + RESULTS ═══════════ */}
        <section style={{paddingTop:96,paddingBottom:96,borderTop:"1px solid "+T.bd}}><div className="w">
            <R><Tag>Как это работает</Tag><h2 style={{fontSize:"clamp(2.1rem,3.5vw,2.8rem)",fontWeight:800,letterSpacing:-.5,marginBottom:48}}>От хаоса к системе <span style={{color:T.gr}}>за 3 шага</span></h2></R>

            {/* ── 3-Step Timeline ── */}
            <R d={.1}><div style={{position:"relative",margin:"0 auto 56px",borderRadius:18,border:"1px solid rgba(255,255,255,.06)",background:"rgba(255,255,255,.015)",overflow:"hidden",padding:"48px 0 40px",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)"}}>
                <svg viewBox="0 0 1000 260" style={{width:"100%",height:"auto",display:"block"}} fill="none">
                    <defs>
                        <linearGradient id="timeline" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#8b5cf6" stopOpacity=".5"/>
                            <stop offset="50%" stopColor="#a78bfa" stopOpacity=".3"/>
                            <stop offset="100%" stopColor="#22c55e" stopOpacity=".5"/>
                        </linearGradient>
                    </defs>

                    {/* Background line */}
                    <line x1="170" y1="90" x2="830" y2="90" stroke="rgba(255,255,255,.04)" strokeWidth="2"/>
                    <line x1="170" y1="90" x2="830" y2="90" stroke="url(#timeline)" strokeWidth="2" strokeDasharray="8 6" opacity=".6"/>

                    {/* ── Step 1: Разбор ── */}
                    <circle cx="170" cy="90" r="46" fill="#0e0e18" stroke="#8b5cf6" strokeWidth="1.2"/>
                    {/* Search icon */}
                    <circle cx="164" cy="84" r="12" stroke="#8b5cf6" strokeWidth="2" fill="none"/>
                    <line x1="173" y1="93" x2="181" y2="101" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round"/>

                    <text x="170" y="164" textAnchor="middle" fill="#f4f4f8" fontSize="15" fontFamily="Plus Jakarta Sans" fontWeight="700">Разбор</text>
                    <text x="170" y="186" textAnchor="middle" fill="#9898ab" fontSize="11" fontFamily="JetBrains Mono">Анализ каналов</text>
                    <text x="170" y="206" textAnchor="middle" fill="#6b6b80" fontSize="10" fontFamily="JetBrains Mono">30 мин · бесплатно</text>

                    {/* ── Step 2: Настройка ── */}
                    <circle cx="500" cy="90" r="46" fill="#0e0e18" stroke="#a78bfa" strokeWidth="1.2"/>
                    {/* Gear icon */}
                    <circle cx="500" cy="90" r="7" stroke="#a78bfa" strokeWidth="2" fill="none"/>
                    <circle cx="500" cy="90" r="15" stroke="#a78bfa" strokeWidth="2" fill="none" strokeDasharray="5 5.5" strokeLinecap="round"/>

                    <text x="500" y="164" textAnchor="middle" fill="#f4f4f8" fontSize="15" fontFamily="Plus Jakarta Sans" fontWeight="700">Настройка</text>
                    <text x="500" y="186" textAnchor="middle" fill="#9898ab" fontSize="11" fontFamily="JetBrains Mono">Каналы + CRM + ИИ</text>
                    <text x="500" y="206" textAnchor="middle" fill="#6b6b80" fontSize="10" fontFamily="JetBrains Mono">от 3 дней</text>

                    {/* ── Step 3: Запуск ── */}
                    <circle cx="830" cy="90" r="46" fill="#0e0e18" stroke="#22c55e" strokeWidth="1.2"/>
                    {/* Zap icon — symmetric centered bolt */}
                    <polygon points="833,74 825,92 832,92 827,106 837,88 830,88" stroke="#22c55e" strokeWidth="1.6" fill="#22c55e" fillOpacity=".12" strokeLinejoin="round" strokeLinecap="round"/>

                    <text x="830" y="164" textAnchor="middle" fill="#f4f4f8" fontSize="15" fontFamily="Plus Jakarta Sans" fontWeight="700">Запуск</text>
                    <text x="830" y="186" textAnchor="middle" fill="#9898ab" fontSize="11" fontFamily="JetBrains Mono">Обучаем команду</text>
                    <text x="830" y="206" textAnchor="middle" fill="#6b6b80" fontSize="10" fontFamily="JetBrains Mono">мониторим первые дни</text>

                    {/* ── Connector dots ── */}
                    {[270,335,400,600,665,730].map((x,i)=><circle key={i} cx={x} cy="90" r="2.5" fill={i<3?"#8b5cf6":"#22c55e"} opacity=".12"/>)}

                    {/* ── Soft pulse rings ── */}
                    <circle cx="170" cy="90" r="46" fill="none" stroke="#8b5cf6" strokeWidth=".6" opacity="0">
                        <animate attributeName="r" values="46;60" dur="3s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values=".25;0" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="500" cy="90" r="46" fill="none" stroke="#a78bfa" strokeWidth=".6" opacity="0">
                        <animate attributeName="r" values="46;60" dur="3s" repeatCount="indefinite" begin="1s"/>
                        <animate attributeName="opacity" values=".25;0" dur="3s" repeatCount="indefinite" begin="1s"/>
                    </circle>
                    <circle cx="830" cy="90" r="46" fill="none" stroke="#22c55e" strokeWidth=".6" opacity="0">
                        <animate attributeName="r" values="46;60" dur="3s" repeatCount="indefinite" begin="2s"/>
                        <animate attributeName="opacity" values=".25;0" dur="3s" repeatCount="indefinite" begin="2s"/>
                    </circle>
                </svg>
            </div></R>

            {/* Real case study — Aktobe medcenter */}
            <R d={.1}><Card glow s={{padding:"40px 36px",position:"relative",overflow:"hidden",minHeight:320}}>
                {/* Волны на фоне */}
                <WaveBg/>

                <div style={{position:"relative",zIndex:1}}>
                    <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:20}}>
                        <Stethoscope size={16} color={T.ac}/>
                        <Tag>Кейс · Медцентр · Актобе</Tag>
                    </div>
                    <h3 style={{fontSize:"1.38rem",fontWeight:700,marginBottom:16}}>Первый клиент. Реальные цифры.</h3>
                    <div className="g3" style={{marginBottom:16}}>
                        {[
                            {num:"80%",label:"обращений обрабатывает ИИ без участия администратора"},
                            {num:"3 дня",label:"от первого звонка до работающего агента"},
                            {num:"5→1",label:"систем заменили одной платформой"}
                        ].map((s,i)=><div key={i} style={{textAlign:"center",padding:"16px 12px",background:"rgba(139,92,246,.04)",borderRadius:10,border:"1px solid rgba(139,92,246,.08)",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)"}}>
                            <div style={{fontFamily:MONO,fontSize:"1.8rem",fontWeight:800,color:T.wt,lineHeight:1}}>{s.num}</div>
                            <div style={{fontSize:".78rem",color:T.gr,marginTop:6,lineHeight:1.4}}>{s.label}</div>
                        </div>)}
                    </div>
                    <p style={{fontSize:".94rem",color:T.gr,lineHeight:1.7}}>amoCRM + телефония + МИС + БД + ChatGPT → единая платформа One Link.</p>
                </div>
            </Card></R>

            {/* Vision strip */}
            <R d={.15} s={{marginTop:32}}><div className="glass" style={{padding:"28px 32px",borderRadius:16,border:"1px solid rgba(255,255,255,.06)",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:20}}>
                <div style={{flex:1,minWidth:260}}>
                    <div style={{fontFamily:MONO,fontSize:".58rem",color:T.ac,letterSpacing:2,textTransform:"uppercase",marginBottom:6}}>Куда мы идём · Agent as a Service</div>
                    <h3 style={{fontSize:"1.2rem",fontWeight:700,marginBottom:4}}>Не помощник. Полноценный агент.</h3>
                    <p style={{fontSize:".92rem",color:T.gr,lineHeight:1.6}}>Цель — агент ведёт клиента от первого контакта до закрытия. Человек подключается только для VIP-задач.</p>
                </div>
                <div style={{display:"flex",gap:24,alignItems:"center",flexWrap:"wrap"}}>
                    <div style={{textAlign:"center"}}>
                        <div style={{fontFamily:MONO,fontSize:"1.6rem",fontWeight:800,color:"rgba(255,255,255,.15)"}}>50–80%</div>
                        <div style={{fontSize:".68rem",color:T.gr2}}>сейчас · рынок</div>
                    </div>
                    <div style={{fontSize:"1.2rem",color:T.gr2}}>→</div>
                    <div style={{textAlign:"center"}}>
                        <div style={{fontFamily:MONO,fontSize:"1.6rem",fontWeight:800,color:T.ac,opacity:.6}}>90–99%</div>
                        <div style={{fontSize:".68rem",color:T.gr2}}>наша цель</div>
                    </div>
                </div>
            </div></R>
        </div></section>

        {/* ═══════════ PRICING ═══════════ */}
        <section id="pricing" style={{paddingTop:96,paddingBottom:96,borderTop:"1px solid "+T.bd}}><div className="w"><R><div style={{textAlign:"center",marginBottom:16}}><h2 style={{fontSize:"clamp(2.2rem,3.5vw,2.9rem)",fontWeight:800,letterSpacing:-.4}}>Запуск системы за 3 дня</h2><p style={{color:T.gr,fontSize:"1.01rem",marginTop:10}}>Прозрачные цены. Расчёт после анализа каналов и объёмов.</p></div></R>

            {/* Price anchor */}
            <R d={.05}><div style={{textAlign:"center",marginBottom:40}}><div style={{display:"inline-flex",alignItems:"center",gap:10,padding:"10px 20px",borderRadius:10,border:"1px solid rgba(239,68,68,.15)",background:"rgba(239,68,68,.04)"}}>
                <AlertTriangle size={13} color={T.red} style={{opacity:.6}}/>
                <span style={{fontSize:".88rem",color:T.gr}}>Типичная связка AmoCRM + Wazzup + ChatGPT API = <strong style={{color:T.red,textDecoration:"line-through"}}>~200 000 ₸/мес</strong> и 5 точек отказа</span>
            </div></div></R>

            <div className="g3">{[
                {n:"Старт",p:"от 150 000 ₸",per:"/мес",sub:"Малый бизнес · до 500 обращений",pop:false,items:["2 канала (WA + TG)","Встроенная CRM","ИИ-автоответчик","До 3 операторов","Базовая аналитика"],btn:"Начать использование"},
                {n:"Бизнес",p:"от 350 000 ₸",per:"/мес",sub:"Клиники, школы, рестораны",pop:true,items:["Все каналы + телефония","CRM + расширенная аналитика","ИИ-агент + Guardrails","До 10 операторов","Кастомизация под процессы"],btn:"Запросить демо"},
                {n:"Энтерпрайз",p:"от 800 000 ₸",per:"/мес",sub:"Свой контур · без ограничений",pop:false,items:["Ваш сервер или наш","Безлимит операторов и каналов","Agent as a Service","SLA + выделенный менеджер","Интеграция с вашей ИС"],btn:"Получить демо"}
            ].map((x,i)=><R key={i} d={i*.08}><div className="glass" style={{background:x.pop?"rgba(139,92,246,.03)":"rgba(255,255,255,.02)",border:"1px solid "+(x.pop?"rgba(139,92,246,.15)":"rgba(255,255,255,.06)"),borderRadius:18,padding:"36px 28px",display:"flex",flexDirection:"column",height:"100%",position:"relative",transition:"transform .35s,box-shadow .35s",overflow:"hidden",backdropFilter:"blur(24px)",WebkitBackdropFilter:"blur(24px)"}} onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow=x.pop?"0 8px 40px rgba(139,92,246,.08)":"0 8px 40px rgba(0,0,0,.25)"}} onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none"}}>{x.pop&&<><div style={{position:"absolute",top:-1,left:"12%",right:"12%",height:1,background:"linear-gradient(90deg,transparent,#8b5cf633,transparent)"}}/><div style={{position:"absolute",top:12,right:12,fontFamily:MONO,fontSize:".53rem",fontWeight:600,background:T.ac,color:"#36454F",padding:"2px 8px",borderRadius:5}}>ЛУЧШИЙ ВЫБОР</div></>}<div style={{fontFamily:MONO,fontSize:".6rem",color:T.gr2,letterSpacing:1.5,textTransform:"uppercase",marginBottom:8}}>{x.n}</div><div style={{fontSize:"1.7rem",fontWeight:800,letterSpacing:-.5,marginBottom:2}}>{x.p} <span style={{fontSize:".78rem",fontWeight:400,color:T.gr}}>{x.per}</span></div><div style={{fontSize:".78rem",color:T.gr2,marginBottom:20}}>{x.sub}</div><ul style={{listStyle:"none",flex:1,marginBottom:20}}>{x.items.map(it=><li key={it} style={{display:"flex",alignItems:"center",gap:7,fontSize:".9rem",color:"rgba(255,255,255,.7)",padding:"5px 0"}}><Check size={12} color={T.ac}/>{it}</li>)}</ul><a href="#cta" style={{display:"block",textAlign:"center",padding:12,borderRadius:9,fontSize:".92rem",fontWeight:600,background:x.pop?T.wt:"rgba(255,255,255,.04)",color:x.pop?T.bg:T.wt,border:x.pop?"none":"1px solid rgba(255,255,255,.08)",transition:"opacity .2s"}} onMouseEnter={e=>e.currentTarget.style.opacity=".85"} onMouseLeave={e=>e.currentTarget.style.opacity="1"}>{x.btn}</a></div></R>)}</div>
        </div></section>

        {/* ═══════════ FAQ ═══════════ */}
        <section id="faq" style={{paddingTop:96,paddingBottom:96,borderTop:"1px solid "+T.bd}}><div className="w" style={{maxWidth:700}}>
            <R><h2 style={{textAlign:"center",fontSize:"clamp(2rem,3.5vw,2.6rem)",fontWeight:800,letterSpacing:-.4,marginBottom:36}}>Частые вопросы</h2></R>
            <Faq q="Чем отличается от AmoCRM + Wazzup + ChatGPT?" a="Это 5 систем с 5 точками отказа. One Link — единый контур: CRM, каналы и ИИ нативно на одном сервере."/>
            <Faq q="ИИ-агент будет выдумывать?" a="Нет. Guardrails: три фильтра, строго по базе знаний. Сложный вопрос → эскалация на менеджера."/>
            <Faq q="Сколько занимает внедрение?" a="Базовое — от 3 дней. Полная кастомизация — 2–4 недели."/>
            <Faq q="Данные в безопасности?" a="Единый контур, закон РК. По желанию — на вашем сервере с полным контролем."/>
            <Faq q="Можно попробовать перед оплатой?" a="Да. Бесплатный 30-минутный разбор: каналы, процессы, объём — без обязательств."/>
        </div></section>

        {/* ═══════════ CTA with lead form ═══════════ */}
        <section id="cta" style={{paddingTop:116,paddingBottom:100,borderTop:"1px solid "+T.bd,textAlign:"center",boxShadow:"0 40px 80px rgba(0,0,0,.8)",position:"relative",zIndex:2}}><div className="w"><R>
            <Tag>Следующий шаг</Tag>
            <h2 style={{fontSize:"clamp(2.2rem,4.5vw,3.2rem)",fontWeight:800,letterSpacing:-.8,marginBottom:12}}>Запросите демо<br/>за 30 секунд</h2>
            <p style={{color:T.gr,fontSize:"1.03rem",maxWidth:440,margin:"0 auto 36px",lineHeight:1.75}}>Оставьте номер — покажем платформу и разберём ваш кейс.</p>

            {/* Lead form */}
            <div style={{maxWidth:420,margin:"0 auto 32px",display:"flex",flexDirection:"column",gap:10}}>
                <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
                    <input type="text" placeholder="Имя" style={{flex:1,minWidth:120,background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",borderRadius:10,padding:"13px 16px",fontSize:".92rem",color:T.wt,outline:"none",fontFamily:FONT,backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",transition:"border-color .2s"}} onFocus={e=>e.target.style.borderColor="rgba(139,92,246,.3)"} onBlur={e=>e.target.style.borderColor="rgba(255,255,255,.08)"}/>
                    <input type="tel" placeholder="+7 ___ ___ __ __" style={{flex:1,minWidth:160,background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",borderRadius:10,padding:"13px 16px",fontSize:".92rem",color:T.wt,outline:"none",fontFamily:FONT,backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",transition:"border-color .2s"}} onFocus={e=>e.target.style.borderColor="rgba(139,92,246,.3)"} onBlur={e=>e.target.style.borderColor="rgba(255,255,255,.08)"}/>
                </div>
                <button style={{background:T.wt,color:T.bg,padding:"14px 30px",borderRadius:10,fontWeight:600,fontSize:"1rem",border:"none",cursor:"pointer",position:"relative",overflow:"hidden",fontFamily:FONT,transition:"opacity .2s"}} onMouseEnter={e=>e.currentTarget.style.opacity=".88"} onMouseLeave={e=>e.currentTarget.style.opacity="1"}>
                    <span style={{position:"absolute",inset:0,background:"linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent)",transform:"translateX(-100%)",animation:"shimmerSlide 3s 1s infinite"}}/>
                    <span style={{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",gap:7}}><Sparkles size={15}/>Получить демо</span>
                </button>
            </div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:20,marginBottom:18,flexWrap:"wrap"}}>
                <span style={{fontSize:".8rem",color:T.gr2,display:"flex",alignItems:"center",gap:6}}>
                    <span style={{width:4,height:4,borderRadius:"50%",background:T.green}}/>Ответим за час
                </span>
                <span style={{fontSize:".8rem",color:T.gr2}}>или напишите напрямую:</span>
            </div>

            <div className="hero-btns" style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap",marginBottom:18}}>
                <a href="https://wa.me/77001234567" target="_blank" rel="noreferrer" style={{display:"inline-flex",alignItems:"center",gap:7,background:"#25D366",color:"#fff",padding:"12px 24px",borderRadius:8,fontWeight:600,fontSize:".92rem"}}><MessageCircle size={14}/>WhatsApp</a>
                <a href="https://t.me/onelinkkz" target="_blank" rel="noreferrer" style={{display:"inline-flex",alignItems:"center",gap:7,padding:"12px 24px",borderRadius:8,border:"1px solid "+T.bd,color:T.wt,fontWeight:500,fontSize:".92rem",background:"rgba(255,255,255,.015)"}}><Send size={14}/>Telegram</a>
                <a href="mailto:contact@one-link.kz" style={{display:"inline-flex",alignItems:"center",gap:7,padding:"12px 24px",borderRadius:8,border:"1px solid "+T.bd,color:T.wt,fontWeight:500,fontSize:".92rem",background:"rgba(255,255,255,.015)"}}><Mail size={14}/>Email</a>
            </div>

            <p style={{fontFamily:MONO,fontSize:".58rem",color:T.gr2,marginTop:14,letterSpacing:1}}>БЕСПЛАТНО · БЕЗ ОБЯЗАТЕЛЬСТВ · ДЕМО ЗА 15 МИНУТ</p>
        </R></div></section>
            </div>
        {/* ═══════════ FOOTER ═══════════ */}
            {/* ═══════════ FOOTER ═══════════ */}

            <div style={{height:FOOTER_H}}/>

            </div>
    </div>
            }