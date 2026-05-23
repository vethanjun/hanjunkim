// Shared components & data for B-expansion. Lives under window.*

// Asset path helper — uses pre-computed root set in index.html
function asset(path) {
  return (window.__assetRoot || '/') + path;
}
window.asset = asset;

const B = /*EDITMODE-BEGIN*/{
  "accent": "#8b1a1a",
  "accent2": "#b8860b"
}/*EDITMODE-END*/;

const ink = '#0f1419';
const ink2 = '#2a3441';
const muted = '#6b7684';
const line = '#eef0f2';
const line2 = '#e4e6ea';
const bg = '#ffffff';
const bg2 = '#fafbfc';
const sans = '"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif';
const serif = '"Cormorant Garamond", Georgia, serif';
const mono = '"JetBrains Mono", "SF Mono", Consolas, monospace';

// ───── KU (Korea University) mark — stylized tiger crest in SVG.
// Uses crimson by default; can be passed color override for dark backgrounds.

// ───── Responsive hook ─────
function useWinWidth() {
  const [w, setW] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const fn = () => setW(window.innerWidth);
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);
  return w;
}
function KUMark({ size = 32, color = '#8b1a1a', showText = false }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <svg width={size} height={size} viewBox="0 0 64 64" style={{ flexShrink: 0 }}>
        {/* Shield outline */}
        <path d="M 32 4 L 58 14 L 58 36 Q 58 50 32 60 Q 6 50 6 36 L 6 14 Z"
              fill={color} stroke={color} strokeWidth="1.5"/>
        {/* Inner shield highlight */}
        <path d="M 32 9 L 53 17 L 53 36 Q 53 47 32 55 Q 11 47 11 36 L 11 17 Z"
              fill="none" stroke="white" strokeWidth="0.6" opacity="0.5"/>
        {/* Star (top) */}
        <g transform="translate(32 18)" fill="white">
          <polygon points="0,-6 1.8,-1.8 6,-1.8 2.5,1 4,6 0,3.5 -4,6 -2.5,1 -6,-1.8 -1.8,-1.8"/>
        </g>
        {/* KU monogram */}
        <text x="32" y="44" textAnchor="middle" fill="white"
              fontFamily="Cormorant Garamond, Georgia, serif"
              fontSize="20" fontWeight="600" fontStyle="italic"
              letterSpacing="-0.5">KU</text>
      </svg>
      {showText && (
        <div style={{ lineHeight: 1.1 }}>
          <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: 0.5, color: color }}>
            KOREA UNIVERSITY
          </div>
          <div style={{ fontSize: 13, color: color, opacity: 0.7, fontFamily: mono, letterSpacing: 1 }}>
            고려대학교 · EST. 1905
          </div>
        </div>
      )}
    </div>
  );
}
function Nav({ active, onNav }) {
  const pages = ['Home','Research','People','Publications','News','Contact'];
  const w = useWinWidth();
  const isMobile = w < 900;
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleNav = (p) => { onNav(p); setMenuOpen(false); };

  return (
    <header style={{
      background: 'white',
      position: 'sticky', top: 0, zIndex: 10,
      borderBottom: `1px solid ${line}`,
    }}>
      {/* KU university strip */}
      {!isMobile && (
        <div style={{
          padding: '6px 56px', background: B.accent, color: 'white',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: 12, fontFamily: mono, letterSpacing: 1,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ opacity: 0.9 }}>KOREA UNIVERSITY · COLLEGE OF PHARMACY</span>
          </div>
        </div>
      )}
      {/* Main nav */}
      <div style={{
        padding: isMobile ? '12px 20px' : '14px 56px', display: 'flex',
        justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }} onClick={() => handleNav('Home')}>
          <img src={asset('v2/assets/ku-logo.gif')} alt="KU-PPL Logo"
               style={{ height: isMobile ? 34 : 44, width: 'auto', objectFit: 'contain', display: 'block' }}/>
          <div>
            <div style={{ fontWeight: 700, fontSize: isMobile ? 15 : 17, letterSpacing: -0.3, color: ink, lineHeight: 1.1 }}>
              Kim Laboratory
            </div>
            {!isMobile && (
              <div style={{ fontSize: 12, color: muted, letterSpacing: 0.3, marginTop: 2,
                display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap' }}>
                <span style={{ fontFamily: mono, letterSpacing: 1 }}>KU-PPL</span>
                <span style={{ opacity: 0.4 }}>·</span>
                <span style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 500, fontSize: 12 }}>
                  병태생리학 · 전임상학 연구실
                </span>
              </div>
            )}
          </div>
        </div>

        {isMobile ? (
          <button onClick={() => setMenuOpen(o => !o)} style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: 8,
            display: 'flex', flexDirection: 'column', gap: 5,
          }}>
            {menuOpen ? (
              <span style={{ fontSize: 22, color: ink, lineHeight: 1 }}>✕</span>
            ) : (
              <>
                <span style={{ width: 24, height: 2, background: ink, display: 'block', borderRadius: 2 }}/>
                <span style={{ width: 24, height: 2, background: ink, display: 'block', borderRadius: 2 }}/>
                <span style={{ width: 24, height: 2, background: ink, display: 'block', borderRadius: 2 }}/>
              </>
            )}
          </button>
        ) : (
          <nav style={{ display: 'flex', gap: 2, fontSize: 19, fontWeight: 700 }}>
            {pages.map(t => (
              <a key={t} onClick={() => handleNav(t)} style={{
                padding: '8px 16px', borderRadius: 6,
                color: active === t ? ink : ink2,
                background: active === t ? '#f4f5f6' : 'transparent',
                cursor: 'pointer', lineHeight: 1.4,
              }}>{t}</a>
            ))}
          </nav>
        )}
      </div>

      {/* Mobile dropdown */}
      {isMobile && menuOpen && (
        <nav style={{
          borderTop: `1px solid ${line}`, background: 'white',
          padding: '8px 0 16px',
        }}>
          <div style={{ padding: '6px 20px 10px', background: B.accent }}>
            <div style={{ fontSize: 11, fontFamily: mono, letterSpacing: 1, color: 'rgba(255,255,255,0.85)' }}>
              KOREA UNIVERSITY · COLLEGE OF PHARMACY
            </div>
          </div>
          {pages.map(t => (
            <a key={t} onClick={() => handleNav(t)} style={{
              display: 'block', padding: '13px 20px',
              fontSize: 18, fontWeight: active === t ? 700 : 500,
              color: active === t ? B.accent : ink,
              borderBottom: `1px solid ${line}`,
              cursor: 'pointer',
            }}>{t}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

// ───── Footer ─────
function Footer() {
  const w = useWinWidth();
  const isMobile = w < 900;
  return (
    <footer style={{
      borderTop: '3px solid rgba(255,255,255,0.3)',
      padding: isMobile ? '24px 20px 16px' : '28px 56px 20px',
      background: 'rgb(139, 26, 26)',
      fontSize: 16.5, color: 'white',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '380px 1fr 1fr 1fr',
        gap: isMobile ? 28 : 40, marginBottom: 20, alignItems: 'start',
      }}>
        <div>
          <div style={{ marginBottom: 14 }}>
            <img src={asset('v2/assets/ku-logo-full.png')} alt="Korea University"
                 style={{ height: 72, width: 'auto', objectFit: 'contain', display: 'block' }}/>
          </div>
          <div style={{ fontWeight: 700, color: 'white', marginBottom: 6, fontSize: 18 }}>Kim Laboratory (KU-PPL)</div>
          <div style={{ lineHeight: 1.6, color: 'white', fontSize: 16, opacity: 0.85 }}>
            Pathophysiology & Preclinical Science Lab<br/>
            College of Pharmacy, Korea University · Sejong Campus<br/>
            2511 Sejong-ro, Sejong 30019, Republic of Korea
          </div>
        </div>
        <div>
          <div style={{ fontWeight: 600, color: 'white', marginBottom: 10, fontSize: 15, letterSpacing: 1, fontFamily: mono, textTransform: 'uppercase' }}>Explore</div>
          {['Research','Publications','People','News','Contact'].map(x => (
            <a key={x} onClick={() => window.__kuNavTo && window.__kuNavTo(x)} style={{
              display: 'block', padding: '4px 0', color: 'rgba(255,255,255,0.8)', fontSize: 17,
              cursor: 'pointer', textDecoration: 'none',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'white'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
            >{x}</a>
          ))}
        </div>
        <div>
          <div style={{ fontWeight: 600, color: 'white', marginBottom: 10, fontSize: 15, letterSpacing: 1, fontFamily: mono, textTransform: 'uppercase' }}>Connect</div>
          {[
            ['Google Scholar', 'https://scholar.google.co.kr/citations?user=SF56UPQAAAAJ&hl=en'],
            ['ORCID', 'https://orcid.org/0000-0001-9238-7238'],
            ['LinkedIn', 'https://www.linkedin.com/in/hanjun-kim-158162183/'],
          ].map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noopener" style={{
              display: 'block', padding: '4px 0', color: 'rgba(255,255,255,0.8)', fontSize: 17,
              textDecoration: 'none',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'white'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
            >{label} ↗</a>
          ))}
        </div>
        <div>
          <div style={{ fontWeight: 600, color: 'white', marginBottom: 10, fontSize: 15, letterSpacing: 1, fontFamily: mono, textTransform: 'uppercase' }}>Legal</div>
          <div style={{ lineHeight: 1.7, fontSize: 16, color: 'rgba(255,255,255,0.7)' }}>
            © 2023 Hanjun Kim Lab.<br/>
            이메일 무단수집 거부.
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 12,
        fontFamily: mono, fontSize: 14, letterSpacing: 1, color: 'rgba(255,255,255,0.5)',
        display: 'flex', justifyContent: 'space-between' }}>
        <span>KOREA UNIVERSITY · COLLEGE OF PHARMACY</span>
      </div>
    </footer>
  );
}

// ───── Hero placeholder image ─────
function HeroPlaceholder({ label = 'LAB HERO IMAGE', h = 340 }) {
  return (
    <div style={{
      height: h, borderRadius: 12, overflow: 'hidden', position: 'relative',
      background: `linear-gradient(135deg, #1a1e26 0%, #2d1a1a 50%, #3d2020 100%)`,
      border: `1px solid ${line}`,
    }}>
      <svg width="100%" height="100%" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice"
           style={{ position: 'absolute', inset: 0 }}>
        <defs>
          <radialGradient id="g1" cx="30%" cy="40%" r="50%">
            <stop offset="0%" stopColor={B.accent} stopOpacity="0.5"/>
            <stop offset="100%" stopColor={B.accent} stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="g2" cx="80%" cy="70%" r="40%">
            <stop offset="0%" stopColor={B.accent2} stopOpacity="0.3"/>
            <stop offset="100%" stopColor={B.accent2} stopOpacity="0"/>
          </radialGradient>
        </defs>
        <rect width="800" height="400" fill="url(#g1)"/>
        <rect width="800" height="400" fill="url(#g2)"/>
        {[...Array(60)].map((_,i) => {
          const cx = (i * 47) % 780 + 10;
          const cy = (i * 31 + Math.floor(i/10) * 60) % 380 + 10;
          const r = 4 + (i % 6) * 3;
          return <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.6"/>;
        })}
      </svg>
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        color: 'rgba(255,255,255,0.7)', fontFamily: mono, fontSize: 15, letterSpacing: 2,
      }}>
        <div style={{
          width: 40, height: 40, borderRadius: '50%', border: '1.5px dashed rgba(255,255,255,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10,
        }}>📷</div>
        [ {label} · REPLACE ]
      </div>
    </div>
  );
}

// ───── Page wrapper ─────
function PageShell({ eyebrow, titleEn, titleKo, intro, children }) {
  const w = useWinWidth();
  const isMobile = w < 900;
  return (
    <div>
      <section style={{ padding: isMobile ? '32px 20px 24px' : '48px 56px 32px', borderBottom: `1px solid ${line}` }}>
        <div style={{ fontFamily: mono, fontSize: 15, letterSpacing: 2, color: B.accent, marginBottom: 12, textTransform: 'uppercase' }}>
          {eyebrow}
        </div>
        <h1 style={{ fontSize: 44, fontWeight: 700, letterSpacing: -1.5, lineHeight: 1.05, margin: '0 0 6px' }}>
          {titleEn}
        </h1>
        <div style={{ fontFamily: serif, fontSize: 22, fontStyle: 'italic', color: muted, margin: '0 0 14px' }}>
          {titleKo}
        </div>
        {intro && <p style={{ fontSize: 19, lineHeight: 1.6, color: ink2, maxWidth: 1200, margin: 0 }}>{intro}</p>}
      </section>
      {children}
    </div>
  );
}

// ───── NewsThumb: a deterministic, themed placeholder image.
// Pass `image` on any news item with a real URL to override.
// Designed so it's obvious where real photos should go, but still varied & editorial.
function NewsThumb({ item, w = '100%', h = 180, label = true }) {
  const imgSrc = item.image || (item.images && item.images[0]) || null;
  if (imgSrc) {
    return (
      <div style={{ width: w, height: h, overflow: 'hidden', position: 'relative', background: '#0a0e14' }}>
        <img src={asset(imgSrc)} alt={item.text || item.journal}
             style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}/>
        {item.images && item.images.length > 1 && label && (
          <div style={{
            position: 'absolute', bottom: 8, right: 8,
            fontFamily: mono, fontSize: 13, letterSpacing: 1,
            color: 'white', background: 'rgba(0,0,0,0.5)', padding: '2px 7px', borderRadius: 3,
          }}>1 / {item.images.length} ↗</div>
        )}
      </div>
    );
  }
  // Deterministic hue from date
  const seed = [...(item.date + (item.journal || ''))].reduce((a,c) => a + c.charCodeAt(0), 0);
  const variant = seed % 4;
  const isPaper = item.type === 'paper';
  const isAward = item.type === 'award';
  const isMember = item.type === 'member';
  const isMilestone = item.type === 'milestone';
  const isEvent = item.type === 'event';
  const isPress = item.type === 'press';
  const isPromote = item.type === 'promote';
  const bgColor =
    isPaper ? B.accent :
    isAward ? B.accent2 :
    isMilestone ? '#7c3aed' :
    isEvent ? '#0891b2' :
    isPress ? '#be185d' :
    isPromote ? '#15803d' :
    isMember ? '#1f2937' : '#15803d';
  return (
    <div style={{
      width: w, height: h, overflow: 'hidden', position: 'relative',
      background: `linear-gradient(135deg, ${bgColor}, ${bgColor}cc 60%, #0a0e14)`,
    }}>
      <svg width="100%" height="100%" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice"
           style={{ position: 'absolute', inset: 0, opacity: 0.9 }}>
        <defs>
          <radialGradient id={`ng${seed}`} cx={variant === 0 ? '25%' : variant === 1 ? '75%' : '50%'}
                          cy={variant === 2 ? '75%' : '30%'} r="55%">
            <stop offset="0%" stopColor="white" stopOpacity="0.35"/>
            <stop offset="100%" stopColor="white" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <rect width="400" height="240" fill={`url(#ng${seed})`}/>
        {isPaper && [...Array(24)].map((_,i) => {
          const cx = ((i * 37 + seed * 3) % 380) + 10;
          const cy = ((i * 29 + seed * 7) % 220) + 10;
          const r = 6 + ((seed + i) % 5) * 4;
          return <circle key={i} cx={cx} cy={cy} r={r} fill="none"
                         stroke="rgba(255,255,255,0.3)" strokeWidth="0.8"/>;
        })}
        {isAward && (
          <g transform="translate(200,120)" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2">
            {[...Array(8)].map((_,i) => {
              const a = (i / 8) * Math.PI * 2;
              return <line key={i} x1={Math.cos(a)*30} y1={Math.sin(a)*30}
                                   x2={Math.cos(a)*70} y2={Math.sin(a)*70}/>;
            })}
            <circle r="26" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4"/>
            <circle r="52" strokeDasharray="3 4"/>
          </g>
        )}
        {isMember && [...Array(3)].map((_,i) => (
          <g key={i} transform={`translate(${120 + i * 80}, 110)`}>
            <circle r="22" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2"/>
            <rect x="-28" y="22" width="56" height="40" rx="20" fill="none"
                  stroke="rgba(255,255,255,0.35)" strokeWidth="1.2"/>
          </g>
        ))}
      </svg>
      {label && (
        <div style={{
          position: 'absolute', left: 10, top: 10,
          fontFamily: mono, fontSize: 13, letterSpacing: 1.5,
          color: 'white', opacity: 0.85, textTransform: 'uppercase',
          background: 'rgba(0,0,0,0.25)', padding: '3px 7px', borderRadius: 3,
        }}>[ {item.type} · photo ]</div>
      )}
    </div>
  );
}

// ───── News data (full) ─────
// Mirrors the full content of https://www.hanjunkim.co.kr/news — every item the PI lists there.
// `image` field = URL (png/jpg). When absent, NewsThumb generates a themed placeholder.
const newsFull = [
  { date: '2026.05.23', type: 'milestone', title: 'Paper Citation > 7K',
    text: 'Google Scholar 총 피인용 수 7,000회 돌파 — h-index 49, i10-index 94.',
    image: 'v2/assets/news-20260523.png' },
  { date: '2026.05.15', type: 'event', title: '스승의 날 — Teachers\u2019 Day with KU-PPL',
    text: '\u201c스승의 은혜에 감사드립니다\u201d \u2014 Thanks to the Lab members!',
    images: ['v2/assets/news-20260515-teachers-1.jpg', 'v2/assets/news-20260515-teachers-2.jpg'] },
  { date: '2026.05.15', type: 'award', title: '2025-2학기 우수강좌상 수상',
    text: '수상 과목: PHAR278(00) 신약개발개론. 강의평가 상위 20% 강좌에 수여되는 고려대학교 우수강좌상입니다.',
    image: 'v2/assets/news-20260515.png' },
  { date: '2026.05.12', type: 'paper', title: '한빛사 논문 선정 (23rd)',
    journal: 'Materials Today Bio', meta: 'IF 10.2 · JCR 6.9%',
    text: 'Cyclic mechanical stretch suppresses intrinsic apoptosis in high metastatic melanoma',
    link: 'https://doi.org/10.1016/j.mtbio.2026.103132',
    featured: true, caption: '23번째 한빛사 논문 선정 — KU-PPL 연구실의 가장 최근 성과.',
    image: 'v2/assets/news-20260512.png' },
  { date: '2026.04.11', type: 'event', title: 'Birthday Celebration for Prof. Kim',
    text: 'Thanks to the Lab members!',
    images: ['v2/assets/news-20260411-1.jpg', 'v2/assets/news-20260411-2.jpg'] },
  { date: '2026.03.03', type: 'paper', title: '한빛사 논문 선정 (22nd)',
    journal: 'Advanced Science', meta: 'IF 14.1 · JCR 7.1%',
    text: 'Bidirectional Mechanical Stimulation Enables Biomechanical Coupling and Functional Maturation in Arterial Microphysiological Systems',
    link: 'https://advanced.onlinelibrary.wiley.com/doi/10.1002/advs.202516602',
    image: 'v2/assets/news-20260303.png' },
  { date: '2026.01.07', type: 'paper', title: '한빛사 논문 선정 (21st)',
    journal: 'Advanced Healthcare Materials', meta: 'IF 9.6 · JCR 8.5%',
    text: 'Bidirectional Mechanical Stimulation Enables Biomechanical Coupling and Functional Maturation in Arterial Microphysiological Systems',
    link: 'https://advanced.onlinelibrary.wiley.com/doi/10.1002/adhm.202505915',
    image: 'v2/assets/news-20260107.png' },
  { date: '2025.12.19', type: 'event', title: '2025 KU-PPL 실험실 송년회',
    text: '연말을 맞아 실험실 구성원 전체가 함께한 송년회 — 인생네컷 & 저녁식사',
    images: ['v2/assets/news-20251219-1.jpg', 'v2/assets/news-20251219-2.jpg', 'v2/assets/news-20251219-3.jpg'] },
  { date: '2025.12.11', type: 'award', title: '2025-1학기 석탑강의상 수상',
    text: '고려대학교에서는 매 학기 강의평가 상위 5% 강좌에 석탑강의상, 상위 20% 강좌에 우수강좌상을 수여합니다. 수상 과목: 병태생리학 I (PHAR373).',
    image: 'v2/assets/news-20251211.jpg' },
  { date: '2025.11.01', type: 'promote', title: '첨단융합신약학과 학과장 임명',
    text: '고려대학교 약학대학 첨단융합신약학과 학과장 (2025.11 – 2027.02)',
    image: 'v2/assets/news-20251101.png' },
  { date: '2025.10.28', type: 'event', title: '대학원 연구페스타(KU-PPL)',
    text: '2025 고려대학교 대학원 연구페스타 — 연구 현장 투어',
    images: ['v2/assets/news-20251028-1.jpg', 'v2/assets/news-20251028-2.jpg', 'v2/assets/news-20251028-3.jpg', 'v2/assets/news-20251028-4.jpg'] },
  { date: '2025.10.02', type: 'paper', title: '한빛사 논문 선정 (20th)',
    journal: 'Advanced Healthcare Materials', meta: 'IF 9.6 · JCR 8.5%',
    text: 'Geometry-Guided Osteogenesis in Bone-on-a-Chip Systems Using Triply Periodic Minimal Surface Scaffolds',
    link: 'https://advanced.onlinelibrary.wiley.com/doi/10.1002/adhm.202502773',
    image: 'v2/assets/news-20251002.png' },
  { date: '2025.10.01', type: 'milestone', title: 'Paper Citation > 6K',
    text: 'Google Scholar 총 피인용 수 6,000회 돌파.',
    image: 'v2/assets/news-20251001.png' },
  { date: '2025.09.26', type: 'paper', title: '한빛사 논문 선정 (19th)',
    journal: 'Advanced Science', meta: 'IF 14.1 · JCR 7.1%',
    text: 'Bioengineered Skin Grafts from Patient-Derived Decellularized Extracellular Matrix and Autologous Cells for Personalized Regenerative',
    link: 'https://advanced.onlinelibrary.wiley.com/doi/10.1002/advs.202511889',
    image: 'v2/assets/news-20250926.png' },
  { date: '2025.09.24', type: 'paper', title: '한빛사 논문 선정 (18th)',
    journal: 'Advanced Healthcare Materials', meta: 'IF 9.6 · JCR 8.5%',
    text: 'A Hierarchically Structured, Stretchable, Anti-Biofouling Encapsulation for Biodegradable Electronics',
    link: 'https://advanced.onlinelibrary.wiley.com/doi/10.1002/adhm.202503622',
    image: 'v2/assets/news-20250924.png' },
  { date: '2025.08.28', type: 'member', title: '곽민진 석박사통합과정생, 2025년 2차 석사과정생연구장려금지원사업 선정',
    image: 'v2/assets/news-20250828.png' },
  { date: '2025.08.22', type: 'event', title: '2025 고려대학교 약학대학 워크샵',
    text: '참석자: 민석, 진솔, 원준, Prof. Kim, 민영, 수진 — 무창포 비체팰리스 (2025.08.21–08.22)',
    images: ['v2/assets/news-20250822-1.jpg', 'v2/assets/news-20250822-2.jpg'] },
  { date: '2025.07.04', type: 'award', title: 'Ulziituya, 2025 한국대체시험법학회 우수포스터상 수상',
    text: '참석자: 원준, 민석, Prof. Kim, 민영, Tuya — Pusan, South Korea (2025.07.03–07.04)',
    images: ['v2/assets/news-20250704-1.jpg', 'v2/assets/news-20250704-2.jpg', 'v2/assets/news-20250704-3.jpg'] },
  { date: '2025.06.04', type: 'award', title: '2024-2학기 석탑강의상 수상',
    text: '수상 과목: PHAR278(00) 신약개발개론. 상위 5% 강좌에 수여되는 고려대 석탑강의상입니다.',
    image: 'v2/assets/news-20250604.jpg' },
  { date: '2025.05.15', type: 'event', title: '스승의 날 — Teachers\u2019 Day with KU-PPL',
    text: '스승의 날을 맞아 연구실 학생들이 직접 준비한 케이크와 카네이션 꽃다발 \u2014 Thanks to the Lab members!',
    images: ['v2/assets/news-20250515-1.jpg', 'v2/assets/news-20250515-2.jpg'] },
  { date: '2025.04.28', type: 'paper', title: '한빛사 논문 선정 (17th)',
    journal: 'SusMat', meta: 'IF 21.3 · JCR 1.5%',
    text: 'Advanced Facial Mask Using Roll-to-Roll Processed Superhydrophobic Vertically Aligned Carbon Nanotubes for Enhanced Antiviral Effects and Reusability',
    link: 'https://onlinelibrary.wiley.com/doi/full/10.1002/sus2.70001',
    image: 'v2/assets/news-20250428.png' },
  { date: '2025.04.22', type: 'event', title: 'Lab, 2025 대한약학회 춘계 국제학술대회 참석',
    text: '참석자: 민진, 원준, Prof. Kim, 민석, Tuya, 민영, 수진 — Daegu, Exco (2025.04.21–04.22)',
    images: ['v2/assets/news-20250422-1.jpg','v2/assets/news-20250422-2.jpg','v2/assets/news-20250422-3.jpg','v2/assets/news-20250422-4.jpg','v2/assets/news-20250422-5.jpg'] },
  { date: '2025.04.11', type: 'award', title: '김민석, 2025 대한약학회 춘계 국제학술대회 트래블어워드 수상',
    image: 'v2/assets/news-20250411.png' },
  { date: '2025.04.09', type: 'event', title: 'Birthday Celebration for Prof. Kim',
    text: 'Thanks to the Lab members — Tuya, 민석, 원준, 수진, 민진, 민영, 진솔, 영재 !!',
    images: ['v2/assets/news-20250409-1.jpg', 'v2/assets/news-20250409-2.jpg', 'v2/assets/news-20250409-3.jpg'] },
  { date: '2025.04.03', type: 'press', title: 'SusMat research featured in the Press',
    text: '부산대 이형우 교수·성균관대 전일 교수·고려대 김한준 교수 공동 교신, 부산대 우채영 박사후연구원과 성균관대 이일현 박사과정생 공동 제1저자. 과기정통부, 한국연구재단, 정보통신기획평가원 지원.',
    images: ['v2/assets/news-20250403-1.jpg', 'v2/assets/news-20250403-2.jpg'] },
  { date: '2025.03.13', type: 'event', title: 'KU-PPL Lab Lunch',
    image: 'v2/assets/news-20250313.jpg' },
  { date: '2025.02.27', type: 'milestone', title: 'Paper Citation > 5K',
    text: 'Google Scholar 총 피인용 수 5,000회 돌파.',
    image: 'v2/assets/news-20250227.png' },
  { date: '2025.02.20', type: 'award', title: '2024 석탑연구상 수상 (학술논문 부문)',
    text: '석탑연구상은 고려대학교 전임교원 중 탁월한 연구 성과로 본교 연구력 향상에 기여한 교원을 포상하는 제도로, 2012년부터 시행되고 있습니다.',
    image: 'v2/assets/news-20250220.jpg' },
  { date: '2024.12.23', type: 'event', title: '2024 KU-PPL Christmas Dinner',
    image: 'v2/assets/news-20241223.jpg' },
  { date: '2024.12.06', type: 'award', title: '지유림, 2024 약과학자 경연대회 대상 수상',
    text: '고려대학교 약학대학 약과학자 경연대회에서 대상 수상.',
    image: 'v2/assets/news-20241206.jpg' },
  { date: '2024.11.21', type: 'award', title: '한국생체재료학회 나이벡 미래과학자상 수상 & 추계 학술대회 참석',
    text: '나이벡 미래과학자상은 생체재료 분야에서 혁신적인 연구 성과를 거둔 젊은 과학자들에게 수여되는 상으로, ㈜나이벡 후원·한국생체재료학회 주최 Young Scientist Exchange Program(YSEP)의 일환으로 한·중·일 세션에서 발표 기회가 주어집니다.',
    images: ['v2/assets/news-20241121-1.jpg', 'v2/assets/news-20241121-2.jpg'] },
  { date: '2024.10.04', type: 'paper', title: '한빛사 논문 선정 (16th)',
    journal: 'Advanced Healthcare Materials', meta: 'IF 10.0 · JCR 7.8%',
    text: 'Pseudo-3D Topological Alignments Regulate Mechanotransduction and Maturation of Smooth Muscle Cells',
    link: 'https://onlinelibrary.wiley.com/doi/10.1002/adhm.202402492',
    image: 'v2/assets/news-20241004.png' },
  { date: '2024.09.02', type: 'member', title: '장원준 석사과정생, 2024년 2차 석사과정생연구장려금지원사업 최종 선정',
    image: 'v2/assets/news-20240902.png' },
  { date: '2024.07.01', type: 'milestone', title: 'Paper Citation > 4K',
    text: 'Google Scholar 총 피인용 수 4,000회 돌파.',
    image: 'v2/assets/news-20240701.png' },
  { date: '2024.06.05', type: 'award', title: '2023-2학기 석탑강의상 · 우수강좌상 수상',
    text: '석탑강의상: PHAR278(00) 신약개발개론 · 우수강좌상: PHAR316(00) 병태생리학.',
    image: 'v2/assets/news-20240605.jpg' },
  { date: '2024.04.19', type: 'event', title: 'KU-PPL, 2024 대한약학회 춘계 학술대회 참석',
    text: '2024.04.17 – 2024.04.19 대한약학회 춘계 학술대회 참석',
    image: 'v2/assets/news-20240419.jpg' },
  { date: '2024.04.11', type: 'event', title: 'Birthday Celebration for Prof. Kim',
    text: 'Thanks to the Lab members — Tuya, 민석, 원준, 수진 !!',
    image: 'v2/assets/news-20240411.jpg' },
  { date: '2024.03.29', type: 'press', title: 'KU SEJONG Magazine (2023, Vol 48) 인터뷰 게재',
    text: '김한준 교수는 병리학으로 박사학위를 받고 미국 LA Terasaki Institute for Biomedical Innovation(TIBI)에서 조교수로 근무한 뒤, 2023년 3월 고려대학교 세종캠퍼스 약학과 교수로 임용되어 병태생리학/전임상학 분야를 가르치고 있다. 출처: KU SEJONG.',
    image: 'v2/assets/news-20240329.png' },
  { date: '2024.02.22', type: 'award', title: '2023 석탑연구상 수상 (학술논문 부문)',
    text: '제12회 석탑연구상 시상식 — 연구비 수주 부문 20명, 학술논문 부문 18명, 총 34명의 교수가 수상. 출처: 충청뉴스.',
    image: 'v2/assets/news-20240222.png' },
  { date: '2023.12.06', type: 'paper', title: '한빛사 논문 선정 (15th)',
    journal: 'Advanced Functional Materials', meta: 'IF 19.0 · JCR 4.2%',
    text: 'Drug-Eluting Shear-Thinning Hydrogel for the Delivery of Chemo- and Immunotherapeutic Agents for the Treatment of Hepatocellular Carcinoma',
    link: 'https://onlinelibrary.wiley.com/doi/10.1002/adfm.202309069',
    image: 'v2/assets/news-20231206.png' },
  { date: '2023.12.06', type: 'paper', title: '한빛사 논문 선정 (14th)',
    journal: 'Advanced Functional Materials', meta: 'IF 19.0 · JCR 4.2%',
    text: 'Injectable Shear-Thinning Hydrogels with Sclerosing and Matrix Metalloproteinase Modulatory Properties for the Treatment of Vascular Malformations',
    link: 'https://onlinelibrary.wiley.com/doi/10.1002/adfm.202305880',
    image: 'v2/assets/news-20231206-14th.png' },
  { date: '2023.11.28', type: 'award', title: '2023-1학기 석탑강의상 수상',
    text: '수상 과목: PHAR549(00) 동물용의약품학.',
    image: 'v2/assets/news-20231128.png' },
  { date: '2023.11.20', type: 'paper', title: '한빛사 논문 선정 (13th)',
    journal: 'Advanced Drug Delivery Reviews', meta: 'IF 16.1 · JCR 1.3%',
    text: 'Engineered organoids for biomedical applications',
    link: 'https://www.sciencedirect.com/science/article/pii/S0169409X2300457X',
    image: 'v2/assets/news-20231120.png' },
  { date: '2023.10.03', type: 'milestone', title: 'Paper Citation > 3K',
    text: 'Google Scholar 총 피인용 수 3,000회 돌파.',
    image: 'v2/assets/news-20231003.png' },
  { date: '2023.06.30', type: 'paper', title: '한빛사 논문 선정 (12th)',
    journal: 'Advanced Healthcare Materials', meta: 'IF 11.09 · JCR 7.65%',
    text: 'Injectable, Antibacterial, and Hemostatic Tissue Sealant Hydrogels',
    link: 'https://onlinelibrary.wiley.com/doi/10.1002/adhm.202301551',
    image: 'v2/assets/news-20230630.png' },
  { date: '2023.06.29', type: 'paper', title: '한빛사 상위피인용논문 선정 (11th)',
    journal: 'Journal of Nanobiotechnology', meta: 'IF 9.43 · JCR 8.54% · 최근 3년간 60회 이상 인용',
    text: 'Anti-bacterial and wound healing-promoting effects of zinc ferrite nanoparticles',
    link: 'https://jnanobiotechnology.biomedcentral.com/articles/10.1186/s12951-021-00776-w',
    image: 'v2/assets/news-20230629.png' },
  { date: '2023.06.28', type: 'paper', title: '한빛사 논문 선정 (10th)',
    journal: 'Biofabrication', meta: 'IF 11.06 · JCR 8.67%',
    text: 'Gelatin methacryloyl and laponite bioink for 3D bioprinted organotypic tumor modeling',
    link: 'https://iopscience.iop.org/article/10.1088/1758-5090/ace0db/meta',
    image: 'v2/assets/news-20230628.png' },
  { date: '2023.06.19', type: 'paper', title: '한빛사 논문 선정 (9th)',
    journal: 'Advanced Science', meta: 'IF 17.52 · JCR 5.94%',
    text: 'Aerogel-Based Biomaterials for Biomedical Applications: From Fabrication Methods to Disease-Targeting Applications',
    link: 'https://onlinelibrary.wiley.com/doi/10.1002/advs.202204681',
    image: 'v2/assets/news-20230619.png' },
  { date: '2023.05.30', type: 'award', title: '한국연구재단 개인기초연구 — 생애기본연구/기본연구 과제 선정',
    image: 'v2/assets/news-20230530.png' },
  { date: '2023.03.03', type: 'paper', title: '한빛사 논문 선정 (8th)',
    journal: 'Bioactive Materials', meta: 'IF 16.87 · JCR 1.14%',
    text: 'Tunable hybrid hydrogels with multicellular spheroids for modeling desmoplastic pancreatic cancer',
    link: 'https://www.sciencedirect.com/science/article/pii/S2452199X23000439',
    image: 'v2/assets/news-20230303.png' },
  { date: '2023.02.14', type: 'event', title: 'College of Pharmacy — 2023 Winter Workshop',
    image: 'v2/assets/news-20230214.jpg' },
  { date: '2023.01.02', type: 'paper', title: '한빛사 논문 선정 (7th)',
    journal: 'Bioactive Materials', meta: 'IF 16.87 · JCR 1.14%',
    text: 'Tissue adhesive hemostatic microneedle arrays for rapid hemorrhage treatment',
    link: 'https://www.sciencedirect.com/science/article/pii/S2452199X22003607',
    image: 'v2/assets/news-20230102.png' },
  { date: '2022.12.21', type: 'event', title: 'Farewell Dinner @ Terasaki Institute',
    image: 'v2/assets/news-20221221.png' },
  { date: '2022.11.30', type: 'event', title: 'Terasaki Institute — New Building Set-up Faculty Meeting',
    text: '21100 Erwin St, Los Angeles, CA 91367',
    image: 'v2/assets/news-20221130.png' },
  { date: '2022.11.29', type: 'milestone', title: 'Paper Citation > 2K',
    text: 'Google Scholar 총 피인용 수 2,000회 돌파.',
    image: 'v2/assets/news-20221129.png' },
  { date: '2022.08.27', type: 'event', title: '2022 Terasaki Intern Training',
    image: 'v2/assets/news-20220827.png' },
  { date: '2022.08.10', type: 'paper', title: '한빛사 논문 선정 (6th)',
    journal: 'ACS Applied Materials & Interfaces', meta: 'IF 10.38 · JCR 14.06%',
    text: 'A Shear-Thinning Biomaterial-Mediated Immune Checkpoint Blockade',
    link: 'https://pubs.acs.org/doi/10.1021/acsami.2c06137',
    image: 'v2/assets/news-20220810.png' },
  { date: '2022.05.09', type: 'paper', title: '한빛사 논문 선정 (5th)',
    journal: 'Small', meta: 'IF 15.15 · JCR 6.52%',
    text: 'Co-Electrospun Silk Fibroin and Gelatin Methacryloyl Sheet Seeded with Mesenchymal Stem Cells for Tendon Regeneration',
    link: 'https://onlinelibrary.wiley.com/doi/10.1002/smll.202107714',
    image: 'v2/assets/news-20220509.png' },
  { date: '2022.04.21', type: 'paper', title: '한빛사 논문 선정 (4th)',
    journal: 'Biomaterials', meta: 'IF 15.30 · JCR 3.57%',
    text: 'Flexible patch with printable and antibacterial conductive hydrogel electrodes for accelerated wound healing',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S0142961222001181',
    image: 'v2/assets/news-20220421.png' },
  { date: '2022.03.09', type: 'paper', title: '한빛사 논문 선정 (3rd)',
    journal: 'Advanced Materials', meta: 'IF 32.09 · JCR 2.15%',
    text: 'Lab-on-a-Contact Lens: Recent Advances and Future Opportunities in Diagnostics and Therapeutics',
    link: 'https://onlinelibrary.wiley.com/doi/10.1002/adma.202108389',
    image: 'v2/assets/news-20220309.png' },
  { date: '2021.10.12', type: 'milestone', title: 'Paper Citation > 1K',
    text: 'Google Scholar 총 피인용 수 1,000회 돌파.',
    image: 'v2/assets/news-20211012.png' },
  { date: '2021.06.29', type: 'event', title: 'Terasaki Institute On-site Open',
    image: 'v2/assets/news-20210629.png' },
  { date: '2021.03.17', type: 'paper', title: '한빛사 논문 선정 (2nd)',
    journal: 'Small', meta: 'IF 13.28 · JCR 6.56%',
    text: 'Bioengineered Multicellular Liver Microtissues for Modeling Advanced Hepatic Fibrosis Driven Through Non-Alcoholic Fatty Liver Disease',
    link: 'https://onlinelibrary.wiley.com/doi/10.1002/smll.202007425',
    image: 'v2/assets/news-20210317.png' },
  { date: '2021.03.08', type: 'paper', title: '한빛사 논문 선정 (1st)',
    journal: 'Small', meta: 'IF 13.28 · JCR 6.56%',
    text: 'Thrombolytic Agents: Nanocarriers in Controlled Release',
    link: 'https://onlinelibrary.wiley.com/doi/10.1002/smll.202001647',
    image: 'v2/assets/news-20210308.png' },
  { date: '2020.08.31', type: 'award', title: 'Second Miler Award',
    image: 'v2/assets/news-20200831.png' },
  { date: '2020.07.04', type: 'event', title: 'Staying at Home Campaign at TIBI',
    image: 'v2/assets/news-20200704.png' },
  { date: '2020.05.23', type: 'promote', title: 'Appointed as an Assistant Professor at Terasaki Institute for Biomedical Innovation (TIBI)',
    image: 'v2/assets/news-20200523.png' },
  { date: '2020.05.01', type: 'event', title: 'Khademhosseini Lab at UCLA',
    text: 'Postdoctoral research at the Khademhosseini Lab, University of California, Los Angeles (2018.08 – 2020.05).',
    image: 'v2/assets/news-201808.png' },
];

const pillars = [
  { id: '01', title: 'Safety & Toxicology', ko: '안전성 및 독성학',
    desc: '신약 및 의료기술이 생체와 어떻게 상호작용하는지 — 면역 반응, 조직 통합, 장기 안전성을 정량적으로 평가합니다.',
    keywords: ['Foreign body response', 'Immune profiling', 'Tissue integration', 'Chronic toxicity'] },
  { id: '02', title: 'Therapeutic Efficacy', ko: '치료 효능',
    desc: '동물 질환 모델에서 신규 치료제의 용량 반응, 지속성을 정량 평가합니다. 임상 적용을 전제로 한 in vivo 효능 스크리닝 파이프라인을 운영합니다.',
    keywords: ['PK/PD', 'Tumor models', 'Wound healing', 'Drug delivery'] },
  { id: '03', title: 'Mechanistic Pathophysiology', ko: '기전 병태생리학',
    desc: '치료 반응의 "어떻게"와 "왜"를 묻습니다. 질환 기전을 세포·조직·개체 수준에서 해체해 약물 타겟과 치료 전략을 정당화합니다.',
    keywords: ['Orthotopic models', 'Organ-on-chip', 'Humanized mice'] },
  { id: '04', title: 'Translational Delivery', ko: '중개 약물전달',
    desc: '난치성 질환을 위한 국소 · 지속형 투여 전략을 설계합니다. 혁관색전 · 종양 · 상처 등 표적 부위에서 약효를 국대화하는 전달 플랫폼을 개발합니다.',
    keywords: ['Hydrogels', 'Scaffolds', 'Biomaterials', 'IND-enabling'] },
];

const people = [
  { name: 'Hanjun Kim, Ph.D.', role: 'Principal Investigator', ko: '책임교수', tags: ['Associate Professor','Pathophysiology'], pi: true, since: '2023', photo: 'v2/assets/people-hanjunkim.jpg' },

  // ───── Graduate students (대학원생) ─────
  { name: 'Ulziituya Batjargal', ko: '박사과정', group: 'grad',
    role: 'Ph.D. Course', period: '2024.03 – Present', since: '2023.09',
    edu: ['Changwon National University, Bioscience and Biotechnology (MSc)',
          'Mongolian University of Science and Technology (BSc)'],
    email: 'tuya at korea.ac.kr',
    photo: 'v2/assets/people-batjargal.jpg',
    tags: ['Organ-on-chip','Adipose tissue'] },

  { name: 'Jinsol Choi', ko: '박사과정', group: 'grad',
    role: 'Ph.D. Course', period: '2024.09 – Present', since: '2024.09',
    affil: 'Korea Research Institute of Bioscience and Biotechnology (KRIBB)',
    email: 'cjs0503 at kribb.re.kr',
    photo: 'v2/assets/people-jinsol.png',
    tags: ['KRIBB joint','Delivery'] },

  { name: 'Su-Hyun Kim', ko: '박사과정', group: 'grad',
    role: 'Ph.D. Course', period: '2026.03 – Present', since: '2026.03',
    affil: 'Korea Research Institute of Bioscience and Biotechnology (KRIBB)',
    email: '— at kribb.re.kr',
    tags: ['KRIBB joint'] },

  { name: 'Minseok Kim', ko: '석박통합과정', group: 'grad',
    role: 'M.S./Ph.D. Integrated', period: '2024.03 – Present', since: '2024.03',
    edu: ['Yeungnam University, Department of Medical Biotechnology (BSc)'],
    email: 'kevin1907 at korea.ac.kr',
    photo: 'v2/assets/people-minseok.jpg',
    tags: ['Lung','Asthma'] },

  { name: 'Soojin Park', ko: '석박통합과정', group: 'grad',
    role: 'M.S./Ph.D. Integrated', period: '2024.09 – Present', since: '2023.08',
    edu: ['Korea University, Department of Biotechnology and Bioinformatics (BSc)'],
    email: 'soojin2298 at korea.ac.kr',
    photo: 'v2/assets/people-soojin.jpg',
    tags: ['Organoid','Peripheral nerve'] },

  { name: 'Wonjun Jang', ko: '석박통합과정', group: 'grad',
    role: 'M.S./Ph.D. Integrated', period: '2024.03 – Present', since: '2023.12',
    edu: ['Ulsan University, Department of Bioscience (BSc)'],
    email: 'wjjang6507 at korea.ac.kr',
    photo: 'v2/assets/people-wonjun.jpg',
    tags: ['In vivo','Central Nervous System'] },

  { name: 'Minjin Kwak', ko: '석사과정', group: 'grad',
    role: 'M.S. Course', period: '2025.03 – Present', since: '2023.09',
    edu: ['Korea University, Department of Biotechnology and Bioinformatics (BSc)'],
    email: 'mj010611 at korea.ac.kr',
    photo: 'v2/assets/people-minjin.jpg',
    tags: ['Lung'] },

  { name: 'Min Young Lee', ko: '석사과정', group: 'grad',
    role: 'M.S. Course', period: '2025.03 – Present', since: '2024.05',
    edu: ['Korea University, Department of Biotechnology and Bioinformatics (BSc)'],
    email: 'minyoung0707 at korea.ac.kr',
    photo: 'v2/assets/people-minyoung.jpg',
    tags: ['Cancer'] },

  { name: 'Minjeong Kim', ko: '석박통합과정', group: 'grad',
    role: 'M.S./Ph.D. Integrated', period: '2026.03 – Present', since: '2025.09',
    edu: ['Yeungnam University, Department of Medical Biotechnology (BSc)'],
    email: 'minjeong0917 at korea.ac.kr',
    photo: 'v2/assets/people-minjeong.jpg',
    tags: ['Lung'] },

  // ───── Undergraduate researchers (학부 연구생) ─────
  { name: 'Yurim Ji', ko: '학부연구생', group: 'ug',
    role: 'Undergraduate Researcher', since: '2023.12',
    affil: 'College of Pharmacy, Korea University',
    photo: 'v2/assets/alumni-yurim.png',
    tags: [] },
  { name: 'Jin Kim', ko: '학부연구생', group: 'ug',
    role: 'Undergraduate Researcher', since: '2026.01',
    affil: 'College of Pharmacy, Korea University',
    photo: 'v2/assets/people-jinkim.jpg',
    tags: [] },
  { name: 'Linna Teng', ko: '학부연구생', group: 'ug',
    role: 'Undergraduate Researcher', since: '2025.03',
    affil: 'College of Pharmacy, Korea University',
    photo: 'v2/assets/alumni-linna.jpg',
    tags: [] },
  { name: 'Yunseong Lee', ko: '학부연구생', group: 'ug',
    role: 'Undergraduate Researcher', since: '2026.03',
    affil: 'College of Pharmacy, Korea University',
    tags: [] },
  { name: 'Somin Lee', ko: '학부연구생', group: 'ug',
    role: 'Undergraduate Researcher', since: '2026.05',
    affil: 'College of Pharmacy, Department of Convergence Pharmaceutical Science, Korea University',
    tags: [] },
];

// ───── Alumni (졸업·수료) ─────
const alumni = [
  // Sorted by end date (most recent first)
  { name: 'Seung-Yun Lee',     role: 'Undergraduate Intern', period: '2026.01 – 2026.02', photo: 'v2/assets/alumni-seungyun.jpg', affil: 'Konkuk University' },
  { name: 'Eun-woo Kim',       role: 'Undergraduate Intern', period: '2026.01 – 2026.02', photo: 'v2/assets/alumni-eunwoo.png', affil: 'College of Pharmacy, Korea University' },
  { name: 'Sumin Kwon',        role: 'Undergraduate Intern', period: '2025.12 – 2026.02', photo: 'v2/assets/alumni-sumin.jpg', affil: 'College of Pharmacy, Korea University' },
  { name: 'Seoyean Cho',       role: 'Undergraduate Intern', period: '2025.09 – 2025.12', photo: 'v2/assets/alumni-seoyean.png', affil: 'College of Pharmacy, Korea University' },
  { name: 'Linna Teng',        role: 'Undergraduate Intern', period: '2025.03 – 2025.12', photo: 'v2/assets/alumni-linna.jpg', affil: 'College of Pharmacy, Korea University' },
  { name: 'Lauren Hayoung Lee',role: 'Undergraduate Intern', period: '2025.01 – 2025.12', photo: 'v2/assets/alumni-lauren.jpg', affil: 'College of Pharmacy, Korea University' },
  { name: 'Seung Hu Noh',      role: 'Undergraduate Intern', period: '2025.01 – 2025.12', photo: 'v2/assets/alumni-seunghu.jpg', affil: 'College of Pharmacy, Korea University' },
  { name: 'Yurim Ji',          role: 'Undergraduate Intern', period: '2024.01 – 2025.08', photo: 'v2/assets/alumni-yurim.png', affil: 'College of Pharmacy, Korea University' },
  { name: 'Hyun Young Kim',    role: 'Undergraduate Intern', period: '2025.01 – 2025.02', photo: 'v2/assets/alumni-hyunyoung.jpg', affil: 'College of Pharmacy, Korea University' },
  { name: 'Sa Kang Hong',      role: 'Undergraduate Intern', period: '2025.01 – 2025.02', photo: 'v2/assets/alumni-sakang.jpg', affil: 'College of Pharmacy, Korea University' },
  { name: 'Jiwon Lee',         role: 'Undergraduate Intern', period: '2024.08 – 2024.12', photo: 'v2/assets/alumni-jiwon.jpg', affil: 'College of Pharmacy, Korea University' },
  { name: 'Seo Hyun Jang',     role: 'Undergraduate Intern', period: '2024.08', photo: 'v2/assets/alumni-seohyun.jpg', affil: 'College of Pharmacy, Korea University' },
  { name: 'Jia Choi',          role: 'Undergraduate Intern', period: '2024.08', photo: 'v2/assets/alumni-jiachoi.jpg', affil: 'College of Pharmacy, Korea University' },
  { name: 'Hyorin Nam',        role: 'Undergraduate Intern', period: '2024.03 – 2024.08', photo: 'v2/assets/alumni-hyorin.png', affil: 'College of Pharmacy, Korea University' },
  { name: 'Yunjin Choi',       role: 'Undergraduate Intern', period: '2024.03 – 2024.07', photo: 'v2/assets/alumni-yunjin.jpg', affil: 'College of Pharmacy, Korea University' },
  { name: 'Yeonggyeong Yeon',  role: 'Undergraduate Intern', period: '2023.07 – 2024.06', photo: 'v2/assets/alumni-yeonggyeong.jpg', affil: 'College of Pharmacy, Korea University' },
  { name: 'Sungsoo Han',       role: 'Undergraduate Intern', period: '2023.07 – 2023.12', photo: 'v2/assets/alumni-sungsoo.jpg', affil: 'College of Pharmacy, Korea University' },
];

// ───── Topic detection: pick illustration & palette from paper title keywords.
function detectPaperTopic(title = '', journal = '') {
  const t = (title + ' ' + journal).toLowerCase();
  // Order matters — most specific first
  if (/microneedle|micro-needle/.test(t))           return 'microneedle';
  if (/organ.on.a.chip|on.a.chip|microfluid|lab.on.a.chip/.test(t)) return 'chip';
  if (/bioprint|3d.print|bioink|scaffold|porous|aerogel/.test(t))  return 'scaffold';
  if (/vascul|angiogen|vessel|endotheli|capillary|artery/.test(t)) return 'vessel';
  if (/tumor|cancer|melanoma|carcinoma|hepatocellular|tumour/.test(t)) return 'tumor';
  if (/bone|osteo|osseo|trabecul/.test(t))          return 'bone';
  if (/skin|wound|dermal|epiderm|burn/.test(t))     return 'skin';
  if (/liver|hepatic|nafld|nash|fibros/.test(t))    return 'liver';
  if (/neural|spinal|nerve|brain|neuro/.test(t))    return 'neural';
  if (/hydrogel|gelatin|gelma|sealant|bioadhesi/.test(t)) return 'hydrogel';
  if (/hemorrh|hemostat|bleed|coagul/.test(t))      return 'hemostasis';
  if (/nanoparticle|nano-particle|nanocomposite|nanoplatelet/.test(t)) return 'nano';
  if (/stem.cell|mesenchymal|msc|spheroid|organoid/.test(t))     return 'cells';
  if (/immune|immunoth|checkpoint|t.cell|macrophage/.test(t)) return 'immune';
  if (/drug|delivery|release|therapeutic|theranostic/.test(t)) return 'delivery';
  return 'abstract';
}

// ───── JournalCover: editorial journal-cover artwork (deterministic per paper).
// Renders as a vertical magazine cover with masthead, volume/issue, and topic figure.
// Pass `cover` (URL) on a paper to override with a real cover image.
function JournalCover({ paper, w = '100%', h = 260, variant }) {
  const [imgFailed, setImgFailed] = React.useState(false);
  if (paper.cover && !imgFailed) {
    return (
      <div style={{ width: w, height: h, overflow: 'hidden', background: '#0a0e14', borderRadius: 4 }}>
        <img src={asset(paper.cover)} alt={paper.journal}
             onError={() => setImgFailed(true)}
             style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
      </div>
    );
  }
  const seed = [...(paper.date + paper.journal + (paper.title || ''))].reduce((a,c) => a + c.charCodeAt(0), 0);
  const topic = detectPaperTopic(paper.title, paper.journal);
  // Topic-driven palette — each topic has a signature color world
  const topicPalettes = {
    microneedle: { bg: '#0d1b2a', ink: '#e0f2fe', accent: '#7dd3fc', fig: '#38bdf8' },
    chip:        { bg: '#0a1628', ink: '#e0e7ff', accent: '#818cf8', fig: '#6366f1' },
    scaffold:    { bg: '#1a1410', ink: '#fef3c7', accent: '#fbbf24', fig: '#f59e0b' },
    vessel:      { bg: '#1a0a0a', ink: '#fee2e2', accent: '#f87171', fig: '#dc2626' },
    tumor:       { bg: '#1f0a1a', ink: '#fce7f3', accent: '#f472b6', fig: '#db2777' },
    bone:        { bg: '#f5efe3', ink: '#0a0a0a', accent: '#92400e', fig: '#b45309' },
    skin:        { bg: '#fef3e7', ink: '#1c1917', accent: '#c2410c', fig: '#ea580c' },
    liver:       { bg: '#1a0f0a', ink: '#fed7aa', accent: '#fb923c', fig: '#ea580c' },
    neural:      { bg: '#0f0a1f', ink: '#e9d5ff', accent: '#c084fc', fig: '#a855f7' },
    hydrogel:    { bg: '#062e2a', ink: '#d1fae5', accent: '#6ee7b7', fig: '#10b981' },
    hemostasis:  { bg: '#1a0708', ink: '#fecaca', accent: '#ef4444', fig: '#b91c1c' },
    nano:        { bg: '#0a1f2a', ink: '#cffafe', accent: '#22d3ee', fig: '#06b6d4' },
    cells:       { bg: '#0f1f0a', ink: '#dcfce7', accent: '#86efac', fig: '#22c55e' },
    immune:      { bg: '#1f1a0a', ink: '#fef08a', accent: '#facc15', fig: '#eab308' },
    delivery:    { bg: '#0a1f1f', ink: '#a7f3d0', accent: '#34d399', fig: '#059669' },
    abstract:    { bg: '#1b1b2e', ink: '#e8e6ff', accent: '#8e7cc3', fig: '#b39ddb' },
  };
  // Legacy variant fallback (still supported but topic takes precedence)
  const palettes = [
    { bg: '#0a1628', ink: '#f5e6d3', accent: '#d4a574', fig: '#f5a623' },
    { bg: '#1a0f1e', ink: '#fde4e4', accent: '#c0392b', fig: '#e74c3c' },
    { bg: '#062e2a', ink: '#d8f0ea', accent: '#2ecc71', fig: '#1abc9c' },
    { bg: '#1b1b2e', ink: '#e8e6ff', accent: '#8e7cc3', fig: '#b39ddb' },
    { bg: '#f5efe3', ink: '#0a0a0a', accent: '#b8410a', fig: '#b8410a' },
  ];
  const v = variant != null ? variant : seed % 5;
  // Use topic palette by default; respect explicit variant only as a tint hint
  const p = topicPalettes[topic] || topicPalettes.abstract;
  const [year, month] = paper.date.split('.');
  const vol = ((parseInt(year) - 2000) * 4 + parseInt(month || 1) % 12);
  const issue = (seed % 12) + 1;

  // Single big confident topic glyph — used as a watermark in the cover.
  // Style: ONE bold silhouette, minimal lines, editorial — not a busy diagram.
  const TopicGlyph = () => {
    const stroke = p.ink;
    const fill = p.fig;
    const strokeOp = 0.9;
    const common = { fill: 'none', stroke, strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round', opacity: strokeOp };
    return (
      <svg viewBox="0 0 200 200" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ overflow: 'visible' }}>
        <defs>
          <radialGradient id={`g${seed}`} cx="35%" cy="30%" r="80%">
            <stop offset="0%" stopColor={fill} stopOpacity="0.55"/>
            <stop offset="60%" stopColor={fill} stopOpacity="0.12"/>
            <stop offset="100%" stopColor={fill} stopOpacity="0"/>
          </radialGradient>
          <linearGradient id={`gl${seed}`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor={p.accent} stopOpacity="0.35"/>
            <stop offset="100%" stopColor={fill} stopOpacity="0"/>
          </linearGradient>
        </defs>
        {/* Halo */}
        <circle cx="100" cy="100" r="120" fill={`url(#g${seed})`}/>

        {topic === 'microneedle' && (
          <g>
            {/* one giant needle in profile */}
            <path d="M 100 30 L 118 165 L 82 165 Z" fill={fill} opacity="0.85"/>
            <path d="M 100 30 L 118 165" {...common}/>
            <path d="M 100 30 L 82 165" {...common}/>
            <line x1="40" y1="170" x2="160" y2="170" {...common} strokeWidth="1.8"/>
            {/* small companions */}
            {[40,60,140,160].map((x,i) => (
              <path key={i} d={`M ${x} 130 L ${x+8} 170 L ${x-8} 170 Z`} fill={fill} opacity="0.4"/>
            ))}
          </g>
        )}

        {topic === 'chip' && (
          <g>
            {/* one elegant serpentine channel */}
            <path d="M 25 60 L 175 60 Q 185 60 185 75 Q 185 90 175 90 L 35 90 Q 25 90 25 105 Q 25 120 35 120 L 175 120 Q 185 120 185 135 Q 185 150 175 150 L 25 150"
                  fill="none" stroke={fill} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.85"/>
            <path d="M 25 60 L 175 60 Q 185 60 185 75 Q 185 90 175 90 L 35 90 Q 25 90 25 105 Q 25 120 35 120 L 175 120 Q 185 120 185 135 Q 185 150 175 150 L 25 150"
                  fill="none" stroke={p.accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
            <circle cx="25" cy="60" r="5" fill={p.accent}/>
            <circle cx="25" cy="150" r="5" fill={p.accent}/>
          </g>
        )}

        {topic === 'scaffold' && (
          <g>
            {/* isometric cube lattice — confident geometry */}
            {[0,1,2].map(z => [0,1,2].map(y => [0,1,2].map(x => {
              const ox = 100 + (x-1)*32 + (y-1)*16, oy = 100 + (y-1)*16 - (z-1)*32;
              return <g key={`${x}${y}${z}`} opacity={0.35 + ((x+y+z)%3)*0.2}>
                <rect x={ox-7} y={oy-7} width="14" height="14" fill="none" stroke={fill} strokeWidth="1.2"/>
              </g>;
            }))).flat(2)}
            <circle cx="100" cy="100" r="6" fill={p.accent}/>
          </g>
        )}

        {topic === 'vessel' && (
          <g>
            {/* anatomical Y-branching tree */}
            <path d="M 100 25 Q 100 70 100 90" fill="none" stroke={fill} strokeWidth="6" strokeLinecap="round"/>
            <path d="M 100 90 Q 70 110 50 160" fill="none" stroke={fill} strokeWidth="5" strokeLinecap="round"/>
            <path d="M 100 90 Q 130 110 150 160" fill="none" stroke={fill} strokeWidth="5" strokeLinecap="round"/>
            <path d="M 70 110 Q 55 125 30 130" fill="none" stroke={fill} strokeWidth="3" strokeLinecap="round" opacity="0.8"/>
            <path d="M 130 110 Q 145 125 170 130" fill="none" stroke={fill} strokeWidth="3" strokeLinecap="round" opacity="0.8"/>
            <path d="M 50 160 L 40 180" fill="none" stroke={fill} strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
            <path d="M 50 160 L 60 180" fill="none" stroke={fill} strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
            <path d="M 150 160 L 140 180" fill="none" stroke={fill} strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
            <path d="M 150 160 L 160 180" fill="none" stroke={fill} strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
            <circle cx="100" cy="90" r="4" fill={p.accent}/>
          </g>
        )}

        {topic === 'tumor' && (
          <g>
            {/* one big organic blob silhouette */}
            <path d="M 100 35 C 145 35 175 70 165 105 C 175 140 140 170 100 165 C 60 170 25 140 35 105 C 25 70 55 35 100 35 Z"
                  fill={fill} opacity="0.85"/>
            <path d="M 100 35 C 145 35 175 70 165 105 C 175 140 140 170 100 165 C 60 170 25 140 35 105 C 25 70 55 35 100 35 Z"
                  fill="none" stroke={p.ink} strokeWidth="1" opacity="0.4"/>
            {/* a few internal cells */}
            <circle cx="80" cy="90" r="10" fill={p.accent} opacity="0.7"/>
            <circle cx="120" cy="115" r="8" fill={p.accent} opacity="0.7"/>
            <circle cx="105" cy="80" r="5" fill={p.ink} opacity="0.5"/>
          </g>
        )}

        {topic === 'bone' && (
          <g>
            {/* dumbbell bone silhouette */}
            <path d="M 50 65 Q 35 65 35 80 Q 35 95 50 95 L 70 95 L 70 105 L 50 105 Q 35 105 35 120 Q 35 135 50 135
                     L 150 135 Q 165 135 165 120 Q 165 105 150 105 L 130 105 L 130 95 L 150 95 Q 165 95 165 80 Q 165 65 150 65 Z"
                  fill={fill} opacity="0.9"/>
            {/* trabecular hint */}
            {[...Array(6)].map((_,i) => (
              <line key={i} x1={75 + i*12} y1="98" x2={75 + i*12} y2="102" stroke={p.ink} strokeWidth="1" opacity="0.5"/>
            ))}
          </g>
        )}

        {topic === 'skin' && (
          <g>
            {/* topographic skin layers */}
            {[0,1,2,3,4].map(i => (
              <path key={i}
                d={`M 10 ${55+i*22} Q 60 ${48+i*22} 100 ${55+i*22} T 195 ${55+i*22}`}
                fill="none" stroke={fill} strokeWidth={3 - i*0.3} strokeLinecap="round" opacity={0.95 - i*0.15}/>
            ))}
            {/* hair follicle/wound mark */}
            <circle cx="100" cy="100" r="12" fill={p.accent} opacity="0.7"/>
            <circle cx="100" cy="100" r="4" fill={p.ink}/>
          </g>
        )}

        {topic === 'liver' && (
          <g>
            {/* anatomical liver silhouette */}
            <path d="M 25 80 Q 35 55 80 55 Q 110 50 145 60 Q 180 70 175 105 Q 170 140 130 150 Q 90 158 60 145 Q 25 130 25 80 Z"
                  fill={fill} opacity="0.85"/>
            <path d="M 95 60 Q 92 100 70 140" fill="none" stroke={p.ink} strokeWidth="1.5" opacity="0.5"/>
            <path d="M 130 65 Q 130 100 115 145" fill="none" stroke={p.ink} strokeWidth="1.2" opacity="0.4"/>
          </g>
        )}

        {topic === 'neural' && (
          <g>
            {/* neuron silhouette */}
            <circle cx="100" cy="100" r="22" fill={fill}/>
            <circle cx="100" cy="100" r="10" fill={p.accent}/>
            {[0,1,2,3,4,5,6].map(i => {
              const a = (i/7)*Math.PI*2;
              const x2 = 100 + Math.cos(a)*75, y2 = 100 + Math.sin(a)*75;
              return <g key={i}>
                <line x1={100 + Math.cos(a)*22} y1={100 + Math.sin(a)*22}
                      x2={x2} y2={y2} stroke={fill} strokeWidth="2" strokeLinecap="round" opacity="0.85"/>
                <circle cx={x2} cy={y2} r="4" fill={fill}/>
                <line x1={x2} y1={y2} x2={x2 + Math.cos(a+0.4)*15} y2={y2 + Math.sin(a+0.4)*15} stroke={fill} strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
                <line x1={x2} y1={y2} x2={x2 + Math.cos(a-0.4)*15} y2={y2 + Math.sin(a-0.4)*15} stroke={fill} strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
              </g>;
            })}
          </g>
        )}

        {topic === 'hydrogel' && (
          <g>
            {/* one big fluid drop with internal lattice hint */}
            <path d="M 100 30 Q 60 90 60 130 Q 60 165 100 170 Q 140 165 140 130 Q 140 90 100 30 Z"
                  fill={fill} opacity="0.9"/>
            <path d="M 100 30 Q 60 90 60 130 Q 60 165 100 170 Q 140 165 140 130 Q 140 90 100 30 Z"
                  fill="none" stroke={p.ink} strokeWidth="1" opacity="0.35"/>
            {/* highlight */}
            <ellipse cx="85" cy="85" rx="12" ry="20" fill={p.ink} opacity="0.25"/>
            {/* polymer mesh hint */}
            {[...Array(5)].map((_,i) => (
              <line key={i} x1={75} y1={120 + i*8} x2={125} y2={120 + i*8} stroke={p.accent} strokeWidth="0.8" opacity="0.45"/>
            ))}
          </g>
        )}

        {topic === 'hemostasis' && (
          <g>
            {/* big drop + concentric ripples */}
            <circle cx="100" cy="100" r="80" fill="none" stroke={fill} strokeWidth="1" opacity="0.3"/>
            <circle cx="100" cy="100" r="55" fill="none" stroke={fill} strokeWidth="1" opacity="0.5"/>
            <path d="M 100 50 Q 75 90 75 125 Q 75 155 100 160 Q 125 155 125 125 Q 125 90 100 50 Z"
                  fill={fill} opacity="0.95"/>
            <ellipse cx="92" cy="95" rx="6" ry="14" fill={p.ink} opacity="0.3"/>
          </g>
        )}

        {topic === 'nano' && (
          <g>
            {/* hexagonal molecular lattice */}
            {[
              [100,60],[140,80],[140,120],[100,140],[60,120],[60,80],
              [100,100],
              [180,60],[180,120],[20,60],[20,120],[100,20],[100,180]
            ].map(([cx,cy],i) => (
              <g key={i}>
                <polygon points={
                  [0,1,2,3,4,5].map(k => {
                    const a = k*Math.PI/3;
                    return `${cx + Math.cos(a)*15},${cy + Math.sin(a)*15}`;
                  }).join(' ')
                } fill="none" stroke={fill} strokeWidth="1.4" opacity={0.5 + (i%3)*0.2}/>
                {i === 6 && <circle cx={cx} cy={cy} r="6" fill={p.accent}/>}
              </g>
            ))}
            {/* connecting lines */}
            {[[100,60,100,100],[140,80,100,100],[140,120,100,100],[100,140,100,100],[60,120,100,100],[60,80,100,100]]
              .map(([x1,y1,x2,y2],i) => (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={fill} strokeWidth="1" opacity="0.4"/>
              ))}
          </g>
        )}

        {topic === 'cells' && (
          <g>
            {/* spheroid cluster — one big, a few small */}
            <circle cx="100" cy="100" r="50" fill={fill} opacity="0.8"/>
            <circle cx="100" cy="100" r="50" fill="none" stroke={p.ink} strokeWidth="1" opacity="0.4"/>
            {[[80,85,12],[115,95,9],[95,118,11],[125,118,7],[78,115,8]].map(([cx,cy,r],i) => (
              <g key={i}>
                <circle cx={cx} cy={cy} r={r} fill={p.accent} opacity="0.85"/>
                <circle cx={cx} cy={cy} r={r*0.4} fill={p.ink} opacity="0.5"/>
              </g>
            ))}
          </g>
        )}

        {topic === 'immune' && (
          <g>
            {/* antibody Y shape */}
            <path d="M 100 100 L 100 165" stroke={fill} strokeWidth="8" strokeLinecap="round"/>
            <path d="M 100 100 L 60 50" stroke={fill} strokeWidth="8" strokeLinecap="round"/>
            <path d="M 100 100 L 140 50" stroke={fill} strokeWidth="8" strokeLinecap="round"/>
            <circle cx="60" cy="50" r="12" fill={p.accent}/>
            <circle cx="140" cy="50" r="12" fill={p.accent}/>
            <circle cx="100" cy="165" r="10" fill={fill}/>
            <circle cx="100" cy="100" r="6" fill={p.ink} opacity="0.7"/>
          </g>
        )}

        {topic === 'delivery' && (
          <g>
            {/* nanocarrier with payload */}
            <circle cx="100" cy="100" r="55" fill={fill} opacity="0.85"/>
            <circle cx="100" cy="100" r="55" fill="none" stroke={p.ink} strokeWidth="1" opacity="0.4"/>
            {/* surface ligands */}
            {[...Array(16)].map((_,i) => {
              const a = (i/16)*Math.PI*2;
              return <line key={i} x1={100 + Math.cos(a)*55} y1={100 + Math.sin(a)*55}
                                  x2={100 + Math.cos(a)*68} y2={100 + Math.sin(a)*68}
                                  stroke={p.accent} strokeWidth="2" strokeLinecap="round" opacity="0.85"/>;
            })}
            {/* payload */}
            <circle cx="100" cy="100" r="18" fill={p.accent}/>
            <circle cx="92" cy="92" r="4" fill={p.ink} opacity="0.6"/>
          </g>
        )}

        {topic === 'abstract' && (
          <g>
            {/* concentric rings — minimal editorial */}
            <circle cx="100" cy="100" r="65" fill={fill} opacity="0.85"/>
            <circle cx="100" cy="100" r="65" fill="none" stroke={p.ink} strokeWidth="1" opacity="0.3"/>
            <circle cx="100" cy="100" r="40" fill="none" stroke={p.ink} strokeWidth="1" opacity="0.5"/>
            <circle cx="100" cy="100" r="18" fill={p.accent}/>
          </g>
        )}
      </svg>
    );
  };

  return (
    <div style={{
      width: w, height: h, overflow: 'hidden', position: 'relative',
      background: `linear-gradient(155deg, ${p.bg} 0%, ${p.bg} 60%, ${shade(p.bg, p.accent)} 100%)`,
      color: p.ink, borderRadius: 4,
      display: 'flex', flexDirection: 'column',
      fontFamily: sans,
      boxShadow: '0 4px 16px rgba(0,0,0,0.18), 0 1px 0 rgba(255,255,255,0.06) inset',
    }}>
      {/* Subtle grain overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.06, mixBlendMode: 'overlay',
        background: `radial-gradient(circle at 20% 15%, ${p.ink}40 0%, transparent 50%)`,
      }}/>

      {/* Big topic glyph as hero — fills the cover */}
      <div style={{ position: 'absolute', inset: 0, padding: '34px 22px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <TopicGlyph/>
      </div>

      {/* Top bar: masthead */}
      <div style={{
        position: 'relative', padding: '10px 12px 8px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', zIndex: 2,
      }}>
        <div style={{
          fontFamily: serif, fontSize: 16, fontStyle: 'italic', fontWeight: 600,
          lineHeight: 1, letterSpacing: -0.2, color: p.ink,
          textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap',
          maxWidth: '75%', textShadow: `0 1px 8px ${p.bg}`,
        }}>{paper.journal}</div>
        <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: 1, opacity: 0.7, color: p.ink }}>
          VOL {vol}
        </div>
      </div>

      <div style={{ flex: 1 }}/>

      {/* Bottom bar */}
      <div style={{
        position: 'relative', padding: '8px 12px 10px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', zIndex: 2,
      }}>
        <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: 1, opacity: 0.7, color: p.ink, textShadow: `0 1px 6px ${p.bg}` }}>
          № {issue.toString().padStart(2,'0')} · {paper.date}
        </div>
        <div style={{
          fontFamily: mono, fontSize: 8, letterSpacing: 1, opacity: 0.7, color: p.ink, textShadow: `0 1px 6px ${p.bg}`,
        }}>{topic.toUpperCase()}</div>
      </div>
    </div>
  );
}

// Mix two hex-ish colors for gradient end-stop
function shade(a, b) {
  // simple: return b at 35% over a
  try {
    const ha = a.replace('#',''), hb = b.replace('#','');
    const ar = parseInt(ha.slice(0,2),16), ag = parseInt(ha.slice(2,4),16), ab = parseInt(ha.slice(4,6),16);
    const br = parseInt(hb.slice(0,2),16), bg2 = parseInt(hb.slice(2,4),16), bb = parseInt(hb.slice(4,6),16);
    const r = Math.round(ar*0.65 + br*0.35);
    const g = Math.round(ag*0.65 + bg2*0.35);
    const bl = Math.round(ab*0.65 + bb*0.35);
    return '#' + [r,g,bl].map(x => x.toString(16).padStart(2,'0')).join('');
  } catch { return a; }
}

Object.assign(window, {
  B, ink, ink2, muted, line, line2, bg, bg2, sans, serif, mono,
  Nav, Footer, HeroPlaceholder, PageShell, NewsThumb, JournalCover, KUMark,
  newsFull, pillars, people,
});
