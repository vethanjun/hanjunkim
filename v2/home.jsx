// Home page v2 — B expanded

function HomePage({ onNav }) {
  return (
    <div>
      {/* Hero */}
      <section style={{ padding: '56px 40px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '4px 10px', border: `1px solid ${line2}`,
              borderRadius: 999, fontSize: 11, color: ink2, marginBottom: 20,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: B.accent }} />
              The Kim Laboratory · Est. 2023 · Korea University
            </div>
            <h1 style={{
              fontSize: 60, fontWeight: 700, letterSpacing: -2,
              lineHeight: 1, margin: '0 0 18px', color: ink,
            }}>
              Advancing therapeutics through{' '}
              <span style={{ color: B.accent, fontFamily: serif, fontStyle: 'italic', fontWeight: 500 }}>
                preclinical science.
              </span>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: ink2, maxWidth: 560, margin: '0 0 14px' }}>
              At the interface of preclinical science and pathophysiology, we evaluate the efficacy, safety, and mechanism of novel therapeutics in animal disease models — bridging drug discovery and clinical translation for refractory diseases.
            </p>
            <p style={{ fontFamily: serif, fontSize: 18, fontStyle: 'italic', color: muted, margin: '0 0 28px' }}>
              병태생리학 · 전임상학 연구실 (KU-PPL)
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              <a onClick={() => onNav('Research')} style={{
                padding: '11px 18px', borderRadius: 8, cursor: 'pointer',
                background: ink, color: 'white', fontSize: 13, fontWeight: 500,
              }}>Explore research →</a>
              <a onClick={() => onNav('Publications')} style={{
                padding: '11px 18px', borderRadius: 8, cursor: 'pointer',
                border: `1px solid ${line2}`, fontSize: 13, fontWeight: 500, color: ink,
              }}>Read publications</a>
            </div>
          </div>
          <div style={{ borderRadius: 12, overflow: 'hidden', border: `1px solid ${line}` }}>
            <img src="v2/assets/home-hero.jpg" alt="Translational research approach"
                 style={{ width: '100%', height: 380, objectFit: 'cover', display: 'block' }}/>
          </div></div>
      </section>

      {/* Metrics strip */}
      <section style={{
        padding: '24px 40px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
        borderTop: `1px solid ${line}`, borderBottom: `1px solid ${line}`, background: bg2,
      }}>
        {[
          { n: '129', label: 'Peer-reviewed papers' },
          { n: '7', label: 'Patents granted' },
          { n: '8', label: 'Current lab members' },
          { n: '2023', label: 'Lab founded' },
        ].map((m,i) => (
          <div key={i} style={{
            padding: '20px 24px',
            borderLeft: i > 0 ? `1px solid ${line}` : 'none',
          }}>
            <div style={{
              fontSize: 34, fontWeight: 700, letterSpacing: -1.2,
              color: i === 3 ? B.accent : ink,
              lineHeight: 1, marginBottom: 6, fontVariantNumeric: 'tabular-nums',
            }}>{m.n}</div>
            <div style={{ fontSize: 12, color: muted }}>{m.label}</div>
            {m.hint && <div style={{ fontSize: 10, color: B.accent, marginTop: 2, fontFamily: mono }}>⚠ {m.hint}</div>}
          </div>
        ))}
      </section>

      {/* Research pillars */}
      <section style={{ padding: '48px 40px', borderBottom: `1px solid ${line}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 22 }}>
          <div>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: 2, color: B.accent, marginBottom: 6 }}>
              ── RESEARCH
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.8, margin: 0 }}>
              Four pillars <span style={{ fontFamily: serif, fontStyle: 'italic', fontWeight: 500, color: muted }}>· 연구 분야</span>
            </h2>
          </div>
          <a onClick={() => onNav('Research')} style={{ fontSize: 13, color: ink2, cursor: 'pointer' }}>View all →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          {pillars.map(p => (
            <div key={p.id} onClick={() => onNav('Research')} style={{
              padding: 20, border: `1px solid ${line}`, borderRadius: 12,
              background: 'white', position: 'relative', cursor: 'pointer',
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: `${B.accent}12`, marginBottom: 14,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: mono, fontSize: 11, color: B.accent, fontWeight: 600,
              }}>{p.id}</div>
              <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 2, letterSpacing: -0.2 }}>{p.title}</div>
              <div style={{ fontFamily: serif, fontStyle: 'italic', fontSize: 14, color: muted, marginBottom: 8 }}>{p.ko}</div>
              <div style={{ fontSize: 12, lineHeight: 1.55, color: ink2 }}>{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* News + Selected publications */}
      <section style={{
        padding: '48px 40px',
        display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 40,
      }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
            <div>
              <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: 2, color: B.accent, marginBottom: 6 }}>
                ── SELECTED PUBLICATIONS
              </div>
              <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.5, margin: 0 }}>Recent acceptances</h2>
            </div>
            <a onClick={() => onNav('Publications')} style={{ fontSize: 18, color: ink2, cursor: 'pointer' }}>All publications →</a>
          </div>
          <div style={{ border: `1px solid ${line}`, borderRadius: 12, overflow: 'hidden' }}>
            {publications.slice(0, 6).map((n,i,arr) => (
              <div key={i} style={{
                padding: '14px 16px', display: 'grid',
                gridTemplateColumns: '78px 1fr auto', gap: 14, alignItems: 'center',
                borderBottom: i < arr.length - 1 ? `1px solid ${line}` : 'none',
                fontSize: 13,
              }}>
                <div style={{ fontFamily: mono, fontSize: 11, color: muted }}>№{n.n} · {n.y}</div>
                <div style={{ minWidth: 0 }}>
                  <span style={{ fontFamily: serif, fontStyle: 'italic', fontWeight: 600 }}>{n.journal}</span>
                  <span style={{ color: muted, display: 'block', fontSize: 12, marginTop: 2,
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{n.title}</span>
                </div>
                <div style={{ fontSize: 11, color: B.accent }}>↗</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
            <div>
              <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: 2, color: B.accent, marginBottom: 6 }}>
                ── NEWS
              </div>
              <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.5, margin: 0 }}>Updates</h2>
            </div>
            <a onClick={() => onNav('News')} style={{ fontSize: 13, color: ink2, cursor: 'pointer' }}>Archive →</a>
          </div>
          <div>
            {(window.homeNews || []).slice(0, 12).map((n, i) => {
              const typeColor = {
                paper: B.accent, award: B.accent2, promote: '#15803d', member: '#0369a1',
              }[n.type] || ink2;
              return (
                <div key={i} style={{
                  padding: '10px 0', display: 'grid',
                  gridTemplateColumns: '70px 1fr', gap: 10,
                  borderBottom: i < 11 ? `1px solid ${line}` : 'none',
                  alignItems: 'start',
                }}>
                  <div style={{ fontFamily: mono, fontSize: 10, color: muted, paddingTop: 2 }}>{n.date.slice(0,7)}</div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3, flexWrap: 'wrap' }}>
                      <span style={{
                        fontSize: 9, fontFamily: mono, letterSpacing: 1, textTransform: 'uppercase',
                        padding: '1px 6px', borderRadius: 3,
                        background: `${typeColor}12`, color: typeColor, flexShrink: 0,
                      }}>{n.type}</span>
                      {n.journal && (
                        <span style={{
                          fontFamily: serif, fontStyle: 'italic', fontWeight: 600,
                          fontSize: 13.5, color: B.accent, letterSpacing: -0.1,
                        }}>{n.journal}</span>
                      )}
                    </div>
                    <div style={{ fontSize: 12, lineHeight: 1.45, color: ink2 }}>{n.text}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

window.HomePage = HomePage;

// ───── Home news — simple list, separate from main newsFull
const homeNews = [
  { date: '2026.04.11', type: 'paper', journal: 'Small Structures', text: 'Research article accepted' },
  { date: '2026.03.30', type: 'paper', journal: 'Nano Convergence', text: 'Research article accepted' },
  { date: '2026.03.30', type: 'paper', journal: 'Materials Today Bio', text: 'Research article accepted' },
  { date: '2026.03.01', type: 'member', text: 'Minjeong, Su-hyun joined our lab. Welcome!!' },
  { date: '2026.02.12', type: 'paper', journal: 'Int. J. Biological Macromolecules', text: 'Research article accepted' },
  { date: '2026.02.10', type: 'paper', journal: 'Advanced Science', text: 'Research article accepted' },
  { date: '2026.01.13', type: 'paper', journal: 'Colloids and Surfaces B', text: 'Research article accepted' },
  { date: '2025.12.28', type: 'paper', journal: 'Advanced Healthcare Materials', text: 'Research article accepted' },
  { date: '2025.11.17', type: 'award', text: '2025 1학기 석탑강의상 수상 (병태생리학 I · 상위 5%)' },
  { date: '2025.11.01', type: 'promote', text: '고려대학교 약학대학 첨단융합신약학과 2대 학과장 임명' },
  { date: '2025.10.18', type: 'paper', journal: 'Carbohydrate Polymers', text: 'Research article accepted' },
  { date: '2025.09.15', type: 'paper', journal: 'Advanced Healthcare Materials', text: 'Research article accepted' },
  { date: '2025.09.12', type: 'paper', journal: 'Advanced Healthcare Materials', text: 'Research article accepted' },
  { date: '2025.09.08', type: 'paper', journal: 'Advanced Science', text: 'Research article accepted' },
  { date: '2025.09.01', type: 'promote', text: 'Prof. Kim promoted to Associate Professor at College of Pharmacy, Korea University' },
  { date: '2025.08.28', type: 'member', text: 'Minjin awarded 석사과정생연구장려금지원 사업. Congratulations!' },
  { date: '2025.08.19', type: 'paper', journal: 'Chemical Engineering Journal', text: 'Research article accepted' },
  { date: '2025.06.04', type: 'award', text: '2024 2학기 석탑강의상 수상 (신약개발개론 · 상위 5%)' },
  { date: '2025.04.07', type: 'paper', journal: 'Materials Today Bio', text: 'Research article accepted' },
  { date: '2025.04.01', type: 'paper', journal: 'Applied Materials Today', text: 'Research article published' },
  { date: '2025.03.27', type: 'paper', journal: 'Lab on a Chip', text: 'Research article accepted' },
  { date: '2025.03.01', type: 'member', text: 'Minjin, Minyoung joined our lab. Welcome!!' },
  { date: '2025.02.20', type: 'award', text: '2024 고려대학교 세종캠퍼스 석탑연구상 (학술논문 부문) 수상' },
  { date: '2025.01.06', type: 'paper', journal: 'SusMat', text: 'Research article accepted' },
  { date: '2024.12.12', type: 'paper', journal: 'Materials Today Bio', text: 'Research article accepted' },
  { date: '2024.11.29', type: 'paper', journal: 'Carbohydrate Polymer Technologies and Applications', text: 'Research article accepted' },
  { date: '2024.11.21', type: 'award', text: 'Prof. Kim awarded 나이벡 미래과학자상 (한국생체재료학회)' },
  { date: '2024.10.25', type: 'paper', journal: 'Int. J. Molecular Sciences', text: 'Research article accepted' },
  { date: '2024.09.20', type: 'paper', journal: 'Advanced Healthcare Materials', text: 'Research article accepted' },
  { date: '2024.08.28', type: 'member', text: 'Wonjun awarded 석사과정생연구장려금지원 사업. Congratulations!' },
  { date: '2024.08.09', type: 'paper', journal: 'Animals', text: 'Research article accepted' },
  { date: '2024.06.05', type: 'award', text: '2023 2학기 석탑강의상·우수강좌상 수상 (신약개발개론·병태생리학)' },
  { date: '2024.05.19', type: 'paper', journal: 'Applied Materials Today', text: 'Research article accepted' },
  { date: '2024.03.01', type: 'member', text: 'Hyorin, Yunjin, Yeonggyeong joined our lab. Welcome!!' },
  { date: '2024.02.22', type: 'award', text: '2023 고려대학교 세종캠퍼스 석탑연구상 (학술논문 부문) 수상' },
  { date: '2024.01.01', type: 'promote', text: 'Prof. Kim joined KTERMS Young Investigator Committee as executive member' },
];
Object.assign(window, { homeNews });
