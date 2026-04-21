// Variant C — "Specimen Archive"
// Museum/archive feel: dark monochrome, large figure-of-the-week, type specimens.
// Feels serious, scientific, memorable. Heavy visual rhythm.

function VariantC() {
  const W = 1280, H = 900;
  const ink = '#0a0e14';
  const cream = '#ecebe4';

  return (
    <div style={{
      width: W, height: H, background: ink,
      fontFamily: brand.sans, color: cream,
      overflow: 'hidden', position: 'relative',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Top bar */}
      <div style={{
        borderBottom: `1px solid rgba(236,235,228,0.12)`,
        padding: '12px 36px', display: 'flex',
        justifyContent: 'space-between', alignItems: 'center',
        fontFamily: brand.mono, fontSize: 11, letterSpacing: 1,
      }}>
        <span style={{ color: 'rgba(236,235,228,0.5)' }}>
          KU-PPL · INDEX № {String(newsData.length).padStart(3,'0')} · 2026.04
        </span>
        <span style={{ display: 'flex', gap: 24 }}>
          {['INDEX','FIELD','CATALOGUE','DISPATCHES','CORRESPONDENCE'].map((t,i) => (
            <a key={t} style={{
              color: i === 0 ? cream : 'rgba(236,235,228,0.5)',
              cursor: 'pointer',
            }}>{t}</a>
          ))}
        </span>
      </div>

      {/* Hero — massive wordmark */}
      <div style={{ padding: '36px 36px 20px', position: 'relative' }}>
        <div style={{
          fontFamily: brand.serif, fontSize: 180, fontWeight: 400,
          letterSpacing: -6, lineHeight: 0.82, color: cream,
          margin: 0,
        }}>
          The Kim <span style={{ fontStyle: 'italic', color: brand.accent2 }}>Lab.</span>
        </div>
        <div style={{
          position: 'absolute', right: 36, top: 40,
          width: 180, textAlign: 'right',
          fontSize: 11, lineHeight: 1.5,
          color: 'rgba(236,235,228,0.65)',
        }}>
          <div style={{ fontFamily: brand.mono, fontSize: 10, color: brand.accent2, marginBottom: 8, letterSpacing: 1 }}>
            PRINCIPAL
          </div>
          Hanjun Kim, Ph.D.<br/>
          Associate Professor<br/>
          College of Pharmacy<br/>
          Korea University · Sejong
        </div>
      </div>

      {/* Divider with specimen labels */}
      <div style={{
        padding: '14px 36px', display: 'flex', gap: 40,
        borderTop: `1px solid rgba(236,235,228,0.12)`,
        borderBottom: `1px solid rgba(236,235,228,0.12)`,
        fontFamily: brand.mono, fontSize: 10, letterSpacing: 1.5,
        color: 'rgba(236,235,228,0.55)',
      }}>
        <span>PATHOPHYSIOLOGY</span>
        <span>·</span>
        <span>PRECLINICAL SCIENCE</span>
        <span>·</span>
        <span>BIOENGINEERING</span>
        <span>·</span>
        <span>TRANSLATIONAL STRATEGY</span>
        <span style={{ marginLeft: 'auto' }}>EST. MMXXIII</span>
      </div>

      {/* Main body */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '280px 1fr 300px', overflow: 'hidden' }}>
        {/* Left — pillars list */}
        <div style={{
          padding: '28px 28px', borderRight: `1px solid rgba(236,235,228,0.12)`,
          overflow: 'hidden',
        }}>
          <div style={{ fontFamily: brand.mono, fontSize: 10, letterSpacing: 1.5, color: 'rgba(236,235,228,0.5)', marginBottom: 18 }}>
            ※ FIELDS OF INQUIRY
          </div>
          {researchPillars.map(p => (
            <div key={p.id} style={{
              paddingBottom: 18, marginBottom: 18,
              borderBottom: `1px solid rgba(236,235,228,0.12)`,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                <div style={{ fontFamily: brand.serif, fontSize: 22, fontStyle: 'italic' }}>{p.title}</div>
                <div style={{ fontFamily: brand.mono, fontSize: 9, color: brand.accent2 }}>№{p.id}</div>
              </div>
              <div style={{ fontSize: 11, lineHeight: 1.5, color: 'rgba(236,235,228,0.65)' }}>{p.desc}</div>
            </div>
          ))}
        </div>

        {/* Center — figure of the week */}
        <div style={{ padding: '28px 32px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
            <div style={{ fontFamily: brand.mono, fontSize: 10, letterSpacing: 1.5, color: 'rgba(236,235,228,0.5)' }}>
              ※ PLATE OF THE WEEK
            </div>
            <div style={{ fontFamily: brand.mono, fontSize: 10, color: 'rgba(236,235,228,0.5)' }}>
              PLATE XIV · 2026.04.11
            </div>
          </div>

          {/* Placeholder scientific plate */}
          <div style={{
            flex: 1, position: 'relative', overflow: 'hidden',
            background: '#161b22',
            border: `1px solid rgba(236,235,228,0.12)`,
          }}>
            <svg width="100%" height="100%" viewBox="0 0 500 300" preserveAspectRatio="xMidYMid slice">
              <defs>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={brand.accent} stopOpacity="0.25"/>
                  <stop offset="100%" stopColor={brand.accent} stopOpacity="0"/>
                </radialGradient>
                <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(236,235,228,0.15)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="500" height="300" fill="url(#glow)"/>
              {/* abstract cellular pattern */}
              {[...Array(40)].map((_,i) => {
                const cx = 30 + (i * 37) % 460;
                const cy = 30 + Math.floor(i / 12) * 70 + (i % 3) * 8;
                const r = 8 + (i % 5) * 4;
                return <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke="rgba(236,235,228,0.25)" strokeWidth="0.8"/>;
              })}
              {[...Array(20)].map((_,i) => {
                const cx = 50 + (i * 53) % 440;
                const cy = 60 + Math.floor(i / 8) * 90;
                return <circle key={i} cx={cx} cy={cy} r="3" fill={brand.accent2}/>;
              })}
              <rect x="20" y="20" width="60" height="40" fill="none" stroke="rgba(236,235,228,0.3)" strokeDasharray="2 2"/>
              <text x="50" y="45" fill="rgba(236,235,228,0.5)" fontFamily="monospace" fontSize="9" textAnchor="middle">ROI-A</text>
            </svg>
            <div style={{
              position: 'absolute', bottom: 12, left: 16, right: 16,
              display: 'flex', justifyContent: 'space-between',
              fontFamily: brand.mono, fontSize: 10, color: 'rgba(236,235,228,0.5)',
            }}>
              <span>SCAFFOLD MORPHOLOGY · IN VIVO D+14</span>
              <span>200 μm</span>
            </div>
          </div>

          <div style={{ marginTop: 14, fontFamily: brand.serif, fontSize: 16, lineHeight: 1.45, fontStyle: 'italic', color: 'rgba(236,235,228,0.85)' }}>
            "Scaffold vascularization at day fourteen following transplantation — punctae indicate
            CD31⁺ endothelial progenitors localized within injected hydrogel network."
          </div>
          <div style={{ marginTop: 10, fontFamily: brand.mono, fontSize: 10, color: 'rgba(236,235,228,0.45)', letterSpacing: 1 }}>
            FROM: SMALL STRUCTURES · IN PRESS · 2026
          </div>
        </div>

        {/* Right — dispatches */}
        <div style={{
          padding: '28px 28px', borderLeft: `1px solid rgba(236,235,228,0.12)`,
          overflow: 'hidden', display: 'flex', flexDirection: 'column',
        }}>
          <div style={{ fontFamily: brand.mono, fontSize: 10, letterSpacing: 1.5, color: 'rgba(236,235,228,0.5)', marginBottom: 18 }}>
            ※ RECENT DISPATCHES
          </div>
          <div style={{ flex: 1, overflowY: 'auto', margin: '0 -4px' }}>
            {newsData.slice(0, 9).map((n,i) => (
              <div key={i} style={{
                padding: '10px 4px 12px', marginBottom: 2,
                borderBottom: `1px solid rgba(236,235,228,0.08)`,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{
                    fontFamily: brand.mono, fontSize: 9, letterSpacing: 1,
                    color: n.type === 'paper' ? brand.accent2 :
                           n.type === 'award' ? '#22c55e' : cream,
                    textTransform: 'uppercase',
                  }}>{n.type}</span>
                  <span style={{ fontFamily: brand.mono, fontSize: 9, color: 'rgba(236,235,228,0.4)' }}>{n.date}</span>
                </div>
                {n.journal && (
                  <div style={{ fontFamily: brand.serif, fontSize: 14, fontStyle: 'italic', marginBottom: 2, lineHeight: 1.2 }}>
                    {n.journal}
                  </div>
                )}
                <div style={{ fontSize: 11, color: 'rgba(236,235,228,0.7)', lineHeight: 1.4 }}>{n.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

window.VariantC = VariantC;
