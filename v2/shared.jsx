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
  { date: '2026.04.11', type: 'event', title: 'Birthday Celebration for Prof. Kim',
    text: 'Thanks to the Lab members!',
    images: ['v2/assets/news-20260411-1.jpg', 'v2/assets/news-20260411-2.jpg'] },
  { date: '2026.03.03', type: 'paper', title: '한빛사 논문 선정 (22nd)',
    journal: 'Advanced Science', meta: 'IF 14.1 · JCR 7.1%',
    text: 'Bidirectional Mechanical Stimulation Enables Biomechanical Coupling and Functional Maturation in Arterial Microphysiological Systems',
    link: 'https://advanced.onlinelibrary.wiley.com/doi/10.1002/advs.202516602',
    featured: true, caption: '22번째 한빛사 논문 선정 — KU-PPL 연구실의 가장 최근 성과.',
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

// ───── JournalCover: editorial journal-cover artwork (deterministic per paper).
// Renders as a vertical magazine cover with masthead, volume/issue, and abstract figure.
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
  const seed = [...(paper.date + paper.journal)].reduce((a,c) => a + c.charCodeAt(0), 0);
  const v = variant != null ? variant : seed % 5;
  // Palette per variant — each evokes a different journal aesthetic
  const palettes = [
    { bg: '#0a1628', ink: '#f5e6d3', accent: '#d4a574', fig: '#f5a623' },   // Advanced family (warm on navy)
    { bg: '#1a0f1e', ink: '#fde4e4', accent: '#c0392b', fig: '#e74c3c' },   // Small Structures (crimson)
    { bg: '#062e2a', ink: '#d8f0ea', accent: '#2ecc71', fig: '#1abc9c' },   // Biomacromol (green)
    { bg: '#1b1b2e', ink: '#e8e6ff', accent: '#8e7cc3', fig: '#b39ddb' },   // Nano (violet)
    { bg: '#f5efe3', ink: '#0a0a0a', accent: '#b8410a', fig: '#b8410a' },   // Cream/editorial
  ];
  const p = palettes[v];
  const [year, month] = paper.date.split('.');
  const vol = ((parseInt(year) - 2000) * 4 + parseInt(month || 1) % 12);
  const issue = (seed % 12) + 1;
  const isCream = v === 4;

  // Abstract figure generator (varies by variant)
  const Figure = () => (
    <svg viewBox="0 0 200 200" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <defs>
        <radialGradient id={`jc${seed}`} cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor={p.fig} stopOpacity="0.9"/>
          <stop offset="100%" stopColor={p.fig} stopOpacity="0"/>
        </radialGradient>
      </defs>
      {v === 0 && (
        <g>
          <circle cx="100" cy="100" r="90" fill={`url(#jc${seed})`} opacity="0.6"/>
          {[...Array(14)].map((_,i) => {
            const a = (i / 14) * Math.PI * 2;
            return <circle key={i} cx={100 + Math.cos(a)*55} cy={100 + Math.sin(a)*55}
                           r={6 + (i%4)*3} fill="none" stroke={p.ink} strokeWidth="0.8" opacity="0.7"/>;
          })}
          <circle cx="100" cy="100" r="18" fill={p.accent}/>
        </g>
      )}
      {v === 1 && (
        <g>
          {[...Array(30)].map((_,i) => {
            const a = (i / 30) * Math.PI * 2 + seed;
            const r = 20 + (i%5)*14;
            return <line key={i} x1={100} y1={100}
                         x2={100 + Math.cos(a)*r} y2={100 + Math.sin(a)*r}
                         stroke={p.fig} strokeWidth="1.2" opacity={0.2 + (i%5)*0.15}/>;
          })}
          <circle cx="100" cy="100" r="70" fill="none" stroke={p.accent} strokeWidth="1.5"/>
          <circle cx="100" cy="100" r="40" fill={p.accent} opacity="0.25"/>
        </g>
      )}
      {v === 2 && (
        <g>
          {[...Array(40)].map((_,i) => {
            const cx = 30 + ((i * 23 + seed) % 140);
            const cy = 30 + ((i * 31 + seed * 3) % 140);
            const r = 3 + (i%4)*3;
            return <circle key={i} cx={cx} cy={cy} r={r} fill={p.fig} opacity={0.3 + (i%5)*0.12}/>;
          })}
          <rect x="30" y="30" width="140" height="140" fill="none" stroke={p.accent} strokeDasharray="3 3" strokeWidth="0.8"/>
        </g>
      )}
      {v === 3 && (
        <g>
          {[...Array(8)].map((_,i) => {
            const y = 30 + i*20;
            return <path key={i} d={`M 20 ${y} Q 100 ${y-20+(i%2)*40} 180 ${y}`}
                         fill="none" stroke={p.fig} strokeWidth="1.2" opacity={0.4 + (i%3)*0.2}/>;
          })}
          <circle cx="100" cy="100" r="32" fill={p.accent} opacity="0.4"/>
          <circle cx="100" cy="100" r="12" fill={p.ink}/>
        </g>
      )}
      {v === 4 && (
        <g>
          {[...Array(6)].map((_,i) => (
            <g key={i} transform={`translate(100 100) rotate(${i * 60})`}>
              <path d="M 0 0 Q 30 -40 60 0 T 0 0" fill={p.fig} opacity="0.3"/>
            </g>
          ))}
          <circle cx="100" cy="100" r="8" fill={p.accent}/>
          <circle cx="100" cy="100" r="60" fill="none" stroke={p.accent} strokeWidth="0.8"/>
        </g>
      )}
    </svg>
  );

  return (
    <div style={{
      width: w, height: h, overflow: 'hidden', position: 'relative',
      background: p.bg, color: p.ink, borderRadius: 4,
      display: 'flex', flexDirection: 'column',
      fontFamily: sans,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,0.04) inset',
    }}>
      {/* Top bar: masthead */}
      <div style={{
        padding: '10px 12px 8px', borderBottom: `1px solid ${p.ink}22`,
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      }}>
        <div style={{
          fontFamily: serif, fontSize: 17, fontStyle: 'italic', fontWeight: 600,
          lineHeight: 1, letterSpacing: -0.2, color: p.accent,
          textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap',
          maxWidth: '75%',
        }}>{paper.journal}</div>
        <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: 1, opacity: 0.6 }}>
          VOL {vol}
        </div>
      </div>

      {/* Figure */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 8 }}>
        <Figure/>
      </div>

      {/* Bottom bar */}
      <div style={{
        padding: '8px 12px 10px', borderTop: `1px solid ${p.ink}22`,
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
      }}>
        <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: 1, opacity: 0.55 }}>
          № {issue.toString().padStart(2,'0')} · {paper.date}
        </div>
        <div style={{
          fontFamily: mono, fontSize: 8, letterSpacing: 1, opacity: 0.55,
        }}>KU-PPL</div>
      </div>
    </div>
  );
}

Object.assign(window, {
  B, ink, ink2, muted, line, line2, bg, bg2, sans, serif, mono,
  Nav, Footer, HeroPlaceholder, PageShell, NewsThumb, JournalCover, KUMark,
  newsFull, pillars, people,
});
