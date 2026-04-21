// Variant A — "Editorial Journal"
// Serif-heavy, newspaper-of-science aesthetic. Heavy typography hierarchy,
// asymmetric grid, warm off-white paper. Inspired by academic quarterlies.

function VariantA() {
  const [tab, setTab] = React.useState('home');
  const W = 1280, H = 900;

  return (
    <div style={{
      width: W, height: H, background: brand.paper,
      fontFamily: brand.sans, color: brand.ink,
      overflow: 'hidden', position: 'relative',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Top ribbon */}
      <div style={{
        borderBottom: `1px solid ${brand.line}`,
        padding: '10px 40px', display: 'flex',
        justifyContent: 'space-between', alignItems: 'center',
        fontFamily: brand.mono, fontSize: 11,
        color: brand.muted, letterSpacing: 0.5, textTransform: 'uppercase',
      }}>
        <span>Korea University · College of Pharmacy · Sejong Campus</span>
        <span>EST. 2023 · VOL. IV · 2026</span>
      </div>

      {/* Masthead */}
      <div style={{ padding: '32px 40px 24px', borderBottom: `2px solid ${brand.ink}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <div style={{ fontFamily: brand.mono, fontSize: 11, letterSpacing: 2, color: brand.accent, marginBottom: 6 }}>
              KU-PPL · 병태생리학/전임상학연구실
            </div>
            <h1 style={{
              fontFamily: brand.serif, fontSize: 68, fontWeight: 500,
              lineHeight: 0.95, letterSpacing: -2, margin: 0,
            }}>
              Pathophysiology<br/>
              <span style={{ fontStyle: 'italic', color: brand.ink2 }}>& Preclinical</span> Science
            </h1>
          </div>
          <nav style={{ display: 'flex', gap: 28, fontSize: 13, fontWeight: 500, letterSpacing: 0.3 }}>
            {['Home','People','Research','Publications','News','Contact'].map((t,i) => (
              <a key={t} style={{
                color: i === 0 ? brand.ink : brand.muted,
                borderBottom: i === 0 ? `2px solid ${brand.accent}` : 'none',
                paddingBottom: 4, cursor: 'pointer',
              }}>{t}</a>
            ))}
          </nav>
        </div>
      </div>

      {/* Two-column editorial grid */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.3fr 1fr', overflow: 'hidden' }}>
        {/* LEFT — feature */}
        <div style={{ padding: '36px 40px', borderRight: `1px solid ${brand.line}`, overflow: 'hidden' }}>
          <div style={{ fontFamily: brand.mono, fontSize: 10, letterSpacing: 2, color: brand.muted, marginBottom: 12 }}>
            ── FROM THE DIRECTOR
          </div>
          <p style={{
            fontFamily: brand.serif, fontSize: 26, lineHeight: 1.35,
            fontWeight: 400, margin: '0 0 24px', color: brand.ink,
            letterSpacing: -0.3,
          }}>
            "We ask how and why new biomedical technologies affect living systems —
            <span style={{ color: brand.accent, fontStyle: 'italic' }}> so that they may become biologically applicable.</span>"
          </p>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 28 }}>
            <div style={{
              width: 56, height: 56, borderRadius: '50%',
              background: `repeating-linear-gradient(45deg, ${brand.paper2}, ${brand.paper2} 4px, ${brand.line} 4px, ${brand.line} 8px)`,
              border: `1px solid ${brand.line}`,
            }} />
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>Hanjun Kim, Ph.D.</div>
              <div style={{ fontSize: 12, color: brand.muted }}>Associate Professor · Principal Investigator</div>
            </div>
          </div>

          {/* Placeholder figure */}
          <div style={{
            height: 240, marginBottom: 20,
            background: `
              linear-gradient(135deg, ${brand.paper2} 0%, #e8e2d4 100%)
            `,
            position: 'relative', overflow: 'hidden',
            border: `1px solid ${brand.line}`,
          }}>
            <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.25 }}>
              <defs>
                <pattern id="hex" width="40" height="46" patternUnits="userSpaceOnUse">
                  <polygon points="20,2 38,12 38,34 20,44 2,34 2,12" fill="none" stroke={brand.ink} strokeWidth="0.6"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hex)" />
            </svg>
            <div style={{
              position: 'absolute', bottom: 12, left: 16,
              fontFamily: brand.mono, fontSize: 10, color: brand.ink2, letterSpacing: 1,
            }}>
              FIG. 01 — HYDROGEL SCAFFOLD · SEM, 2.5 kX
            </div>
          </div>
          <div style={{ fontSize: 13, color: brand.muted, fontFamily: brand.mono, letterSpacing: 0.5 }}>
            BIOCOMPATIBILITY · THERAPEUTIC EFFICACY · DISEASE MODELING · TRANSLATIONAL ENGINEERING
          </div>

          {/* Pillars grid */}
          <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 24px' }}>
            {researchPillars.map(p => (
              <div key={p.id} style={{ borderTop: `1px solid ${brand.ink}`, paddingTop: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8, marginBottom: 8 }}>
                  <div style={{ fontFamily: brand.serif, fontSize: 17, fontWeight: 500, lineHeight: 1.15, flex: 1, minWidth: 0 }}>{p.title}</div>
                  <div style={{ fontFamily: brand.mono, fontSize: 10, color: brand.muted, flexShrink: 0 }}>{p.id}</div>
                </div>
                <div style={{ fontSize: 12, lineHeight: 1.5, color: brand.ink2 }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — news ticker */}
        <div style={{ display: 'flex', flexDirection: 'column', background: brand.paper2, overflow: 'hidden' }}>
          <div style={{
            padding: '16px 32px', borderBottom: `1px solid ${brand.line}`,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            background: brand.ink, color: brand.paper,
          }}>
            <span style={{ fontFamily: brand.serif, fontSize: 22, fontStyle: 'italic' }}>Dispatches</span>
            <span style={{ fontFamily: brand.mono, fontSize: 10, letterSpacing: 1, opacity: 0.7 }}>
              {newsData.length} UPDATES · LIVE
            </span>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', padding: '8px 0' }}>
            {newsData.map((n,i) => (
              <div key={i} style={{
                padding: '14px 32px',
                borderBottom: i < newsData.length-1 ? `1px solid ${brand.line}` : 'none',
                display: 'grid', gridTemplateColumns: '80px 1fr', gap: 16,
              }}>
                <div style={{ fontFamily: brand.mono, fontSize: 10, color: brand.muted, paddingTop: 2 }}>
                  {n.date}
                </div>
                <div>
                  <div style={{
                    display: 'inline-block', fontSize: 9, letterSpacing: 1,
                    padding: '2px 6px', marginBottom: 4,
                    background: n.type === 'paper' ? brand.accent : n.type === 'award' ? brand.accent2 : brand.ink2,
                    color: brand.paper, fontFamily: brand.mono, textTransform: 'uppercase',
                  }}>{n.type}</div>
                  {n.journal && (
                    <div style={{ fontFamily: brand.serif, fontStyle: 'italic', fontSize: 15, fontWeight: 500 }}>
                      {n.journal}
                    </div>
                  )}
                  <div style={{ fontSize: 12, color: brand.ink2, lineHeight: 1.4 }}>{n.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

window.VariantA = VariantA;
