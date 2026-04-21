// Variant B — "Clinical Grid"
// Modern, tight, data-forward. Inspired by stripe/vercel docs but for labs.
// Dense but clear info architecture, strong numeric anchoring.

function VariantB() {
  const W = 1280, H = 900;

  return (
    <div style={{
      width: W, height: H, background: '#ffffff',
      fontFamily: brand.sans, color: brand.ink,
      overflow: 'hidden', position: 'relative',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Nav */}
      <header style={{
        padding: '18px 40px', display: 'flex',
        justifyContent: 'space-between', alignItems: 'center',
        borderBottom: '1px solid #eef0f2',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 28, height: 28, background: brand.ink, borderRadius: 6,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: 700, fontSize: 12, letterSpacing: -0.5,
          }}>K</div>
          <div style={{ fontWeight: 700, fontSize: 15, letterSpacing: -0.3 }}>
            Kim Lab <span style={{ color: brand.muted, fontWeight: 400 }}>· Korea University</span>
          </div>
        </div>
        <nav style={{ display: 'flex', gap: 6, fontSize: 13, fontWeight: 500 }}>
          {['Research','People','Publications','News','Teaching','Contact'].map(t => (
            <a key={t} style={{
              padding: '6px 12px', borderRadius: 6,
              color: brand.ink2, cursor: 'pointer',
            }}>{t}</a>
          ))}
          <a style={{
            padding: '6px 14px', borderRadius: 6, marginLeft: 8,
            background: brand.ink, color: 'white', fontSize: 13,
          }}>Join the lab →</a>
        </nav>
      </header>

      {/* Hero */}
      <section style={{
        padding: '48px 40px 36px',
        display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48,
        borderBottom: '1px solid #eef0f2',
      }}>
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '4px 10px', border: '1px solid #e4e6ea',
            borderRadius: 999, fontSize: 11, color: brand.ink2, marginBottom: 20,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: '#22c55e' }} />
            Recruiting graduate students · Fall 2026
          </div>
          <h1 style={{
            fontSize: 52, fontWeight: 700, letterSpacing: -1.8,
            lineHeight: 1.02, margin: '0 0 20px',
          }}>
            Making new biomedical technologies <span style={{ color: brand.accent }}>biologically applicable.</span>
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: brand.ink2, maxWidth: 520, margin: '0 0 28px' }}>
            The Kim Laboratory uses animal models to quantify therapeutic efficacy and toxicity
            of emerging biomedical technologies — asking how and why they affect biological systems.
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            <a style={{
              padding: '10px 18px', borderRadius: 8,
              background: brand.ink, color: 'white', fontSize: 13, fontWeight: 500,
            }}>Explore research</a>
            <a style={{
              padding: '10px 18px', borderRadius: 8,
              border: '1px solid #e4e6ea', fontSize: 13, fontWeight: 500, color: brand.ink,
            }}>Read publications ↗</a>
          </div>
        </div>

        {/* Metric cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {metrics.map((m,i) => (
            <div key={i} style={{
              padding: 20, border: '1px solid #eef0f2', borderRadius: 12,
              background: i === 0 ? '#fafbfc' : 'white',
            }}>
              <div style={{
                fontSize: 38, fontWeight: 700, letterSpacing: -1.5,
                color: i === 0 ? brand.accent : brand.ink,
                lineHeight: 1, marginBottom: 6, fontVariantNumeric: 'tabular-nums',
              }}>{m.n}</div>
              <div style={{ fontSize: 12, color: brand.muted }}>{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Split: Pillars + News feed */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.4fr 1fr', overflow: 'hidden' }}>
        {/* LEFT — Research pillars as cards */}
        <div style={{ padding: '28px 40px', overflow: 'hidden' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 18 }}>
            <h2 style={{ fontSize: 13, fontWeight: 600, color: brand.muted, letterSpacing: 1, textTransform: 'uppercase', margin: 0 }}>
              Research pillars
            </h2>
            <a style={{ fontSize: 12, color: brand.ink2 }}>View all →</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {researchPillars.map((p,i) => (
              <div key={p.id} style={{
                padding: 20, border: '1px solid #eef0f2', borderRadius: 12,
                background: 'white', position: 'relative', overflow: 'hidden',
                cursor: 'pointer',
              }}>
                {/* Icon */}
                <div style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: '#f5f6f7', marginBottom: 14,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: brand.mono, fontSize: 11, color: brand.accent, fontWeight: 600,
                }}>{p.id}</div>
                <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 6, letterSpacing: -0.2 }}>{p.title}</div>
                <div style={{ fontSize: 12, lineHeight: 1.55, color: brand.muted }}>{p.desc}</div>
                <div style={{
                  position: 'absolute', top: 16, right: 16,
                  fontSize: 14, color: brand.muted,
                }}>→</div>
              </div>
            ))}
          </div>

          {/* Publication strip */}
          <div style={{ marginTop: 24 }}>
            <h2 style={{ fontSize: 13, fontWeight: 600, color: brand.muted, letterSpacing: 1, textTransform: 'uppercase', margin: '0 0 12px' }}>
              Recent selected publications
            </h2>
            <div style={{ border: '1px solid #eef0f2', borderRadius: 12, overflow: 'hidden' }}>
              {newsData.filter(n => n.type === 'paper').slice(0,4).map((n,i) => (
                <div key={i} style={{
                  padding: '12px 16px', display: 'grid',
                  gridTemplateColumns: '70px 1fr auto', gap: 14, alignItems: 'center',
                  borderBottom: i < 3 ? '1px solid #eef0f2' : 'none',
                  fontSize: 12.5,
                }}>
                  <div style={{ fontFamily: brand.mono, fontSize: 11, color: brand.muted }}>{n.date.slice(0,7)}</div>
                  <div>
                    <span style={{ fontWeight: 600 }}>{n.journal}</span>
                    <span style={{ color: brand.muted }}> · {n.text}</span>
                  </div>
                  <div style={{ fontSize: 11, color: brand.accent }}>↗</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — news feed */}
        <aside style={{
          background: '#fafbfc', borderLeft: '1px solid #eef0f2',
          padding: '28px 32px', overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
            <h2 style={{ fontSize: 13, fontWeight: 600, color: brand.muted, letterSpacing: 1, textTransform: 'uppercase', margin: 0 }}>
              News · Updates
            </h2>
            <span style={{ fontSize: 11, color: brand.muted }}>April 2026</span>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', margin: '0 -8px' }}>
            {newsData.slice(0,10).map((n,i) => (
              <div key={i} style={{
                padding: '10px 8px', display: 'grid',
                gridTemplateColumns: '12px 1fr', gap: 12,
                position: 'relative',
              }}>
                <div style={{ position: 'relative', paddingTop: 6 }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: 999,
                    background: n.type === 'paper' ? brand.accent :
                                n.type === 'award' ? brand.accent2 :
                                n.type === 'promote' ? '#22c55e' : brand.ink2,
                  }} />
                  {i < 9 && <div style={{
                    position: 'absolute', top: 16, left: 3, bottom: -10, width: 2,
                    background: '#eef0f2',
                  }} />}
                </div>
                <div>
                  <div style={{ fontSize: 11, color: brand.muted, marginBottom: 2 }}>{n.date}</div>
                  <div style={{ fontSize: 12.5, lineHeight: 1.45, color: brand.ink }}>
                    {n.journal && <span style={{ fontWeight: 600 }}>{n.journal} </span>}
                    <span style={{ color: brand.ink2 }}>{n.text}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

window.VariantB = VariantB;
