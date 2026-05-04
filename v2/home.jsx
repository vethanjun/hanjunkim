// Home page v2 — B expanded

function HomePage({ onNav }) {
  const [showAllNews, setShowAllNews] = React.useState(false);
  const w = useWinWidth();
  const isMobile = w < 900;
  return (
    <div>
      {/* Hero */}
      <section style={{ padding: isMobile ? '28px 20px 24px' : '56px 56px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.3fr', gap: isMobile ? 24 : 48, alignItems: 'center' }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '4px 10px', border: `1px solid ${line2}`,
              borderRadius: 999, fontSize: 15, color: ink2, marginBottom: 20,
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
            <p style={{ fontSize: 20, lineHeight: 1.65, color: ink2, maxWidth: 560, margin: '0 0 14px' }}>
              At the interface of preclinical science and pathophysiology, we evaluate the efficacy, safety, and mechanism of novel therapeutics in animal disease models — bridging drug discovery and clinical translation for refractory diseases.
            </p>
            <p style={{ fontFamily: serif, fontSize: 22, fontStyle: 'italic', color: muted, margin: '0 0 28px' }}>
              병태생리학 · 전임상학 연구실 (KU-PPL)
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              <a onClick={() => onNav('Research')} style={{
                padding: '11px 18px', borderRadius: 8, cursor: 'pointer',
                background: ink, color: 'white', fontSize: 17, fontWeight: 500,
              }}>Explore research →</a>
              <a onClick={() => onNav('Publications')} style={{
                padding: '11px 18px', borderRadius: 8, cursor: 'pointer',
                border: `1px solid ${line2}`, fontSize: 17, fontWeight: 500, color: ink,
              }}>Read publications</a>
            </div>
          </div>
          <div style={{ borderRadius: 12, overflow: 'hidden', border: `1px solid ${line}` }}>
            <img src={asset('v2/assets/home-hero.jpg')} alt="Translational research approach"
                 style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block' }}/>
          </div></div>
      </section>

      {/* Metrics strip */}
      <section style={{
        padding: isMobile ? '16px 20px' : '24px 56px', display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: 0,
        borderTop: `1px solid ${line}`, borderBottom: `1px solid ${line}`, background: bg2,
      }}>
        {[
          { n: '132', label: 'Peer-reviewed papers' },
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
            <div style={{ fontSize: 16, color: muted }}>{m.label}</div>
            {m.hint && <div style={{ fontSize: 14, color: B.accent, marginTop: 2, fontFamily: mono }}>⚠ {m.hint}</div>}
          </div>
        ))}
      </section>

      {/* Research pillars */}
      <section style={{ padding: isMobile ? '28px 20px' : '48px 56px', borderBottom: `1px solid ${line}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 22 }}>
          <div>
            <div style={{ fontFamily: mono, fontSize: 15, letterSpacing: 2, color: B.accent, marginBottom: 6 }}>
              ── RESEARCH
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.8, margin: 0 }}>
              Four pillars <span style={{ fontFamily: serif, fontStyle: 'italic', fontWeight: 500, color: muted }}>· 연구 분야</span>
            </h2>
          </div>
          <a onClick={() => onNav('Research')} style={{ fontSize: 17, color: ink2, cursor: 'pointer' }}>View all →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(1, 1fr)' : 'repeat(4, 1fr)', gap: 12 }}>
          {pillars.map(p => (
            <div key={p.id} onClick={() => onNav('Research')} style={{
              padding: 20, border: `1px solid ${line}`, borderRadius: 12,
              background: 'white', position: 'relative', cursor: 'pointer',
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: `${B.accent}12`, marginBottom: 14,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: mono, fontSize: 15, color: B.accent, fontWeight: 600,
              }}>{p.id}</div>
              <div style={{ fontSize: 19, fontWeight: 600, marginBottom: 2, letterSpacing: -0.2 }}>{p.title}</div>
              <div style={{ fontFamily: serif, fontStyle: 'italic', fontSize: 18, color: muted, marginBottom: 8 }}>{p.ko}</div>
              <div style={{ fontSize: 16, lineHeight: 1.55, color: ink2 }}>{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* News + Selected publications */}
      <section style={{
        padding: isMobile ? '24px 20px' : '48px 56px',
        display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.3fr 1fr', gap: isMobile ? 28 : 40,
      }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
            <div>
              <div style={{ fontFamily: mono, fontSize: 15, letterSpacing: 2, color: B.accent, marginBottom: 6 }}>
                ── SELECTED PUBLICATIONS
              </div>
              <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.5, margin: 0 }}>Recent acceptances</h2>
            </div>
            <a onClick={() => onNav('Publications')} style={{ fontSize: 22, color: ink2, cursor: 'pointer' }}>All publications →</a>
          </div>
          <div style={{ border: `1px solid ${line}`, borderRadius: 12, overflow: 'hidden' }}>
            {publications.slice(0, 6).map((n,i,arr) => (
              <div key={i} onClick={() => n.link ? window.open(n.link, '_blank') : onNav('Publications')} style={{
                padding: '14px 16px', display: 'grid',
                gridTemplateColumns: '78px 1fr auto', gap: 14, alignItems: 'center',
                borderBottom: i < arr.length - 1 ? `1px solid ${line}` : 'none',
                fontSize: 17, cursor: 'pointer',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#fafaf8'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <div style={{ fontFamily: mono, fontSize: 15, color: muted }}>№{n.n} · {n.y}</div>
                <div style={{ minWidth: 0 }}>
                  <span style={{ fontFamily: serif, fontStyle: 'italic', fontWeight: 600 }}>{n.journal}</span>
                  <span style={{ color: muted, display: 'block', fontSize: 16, marginTop: 2,
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{n.title}</span>
                </div>
                <div style={{ fontSize: 15, color: B.accent }}>↗</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
            <div>
              <div style={{ fontFamily: mono, fontSize: 15, letterSpacing: 2, color: B.accent, marginBottom: 6 }}>
                ── NEWS
              </div>
              <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.5, margin: 0 }}>Updates</h2>
            </div>
            <a onClick={() => onNav('News')} style={{ fontSize: 17, color: ink2, cursor: 'pointer' }}>Archive →</a>
          </div>
          <div>
            {(window.homeNews || []).slice(0, showAllNews ? undefined : 6).map((n, i, arr) => {
              const typeColor = {
                paper: B.accent, award: B.accent2, promote: '#15803d', member: '#0369a1', patent: '#7c3aed', grant: '#b45309',
              }[n.type] || ink2;
              return (
                <div key={i} style={{
                  padding: '10px 0', display: 'grid',
                  gridTemplateColumns: '70px 1fr', gap: 10,
                  borderBottom: `1px solid ${line}`,
                  alignItems: 'start',
                }}>
                  <div style={{ fontFamily: mono, fontSize: 14, color: muted, paddingTop: 2 }}>{n.date.slice(0,7)}</div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3, flexWrap: 'wrap' }}>
                      <span style={{
                        fontSize: 13, fontFamily: mono, letterSpacing: 1, textTransform: 'uppercase',
                        padding: '1px 6px', borderRadius: 3,
                        background: `${typeColor}12`, color: typeColor, flexShrink: 0,
                      }}>{n.type}</span>
                      {n.journal && (
                        <span style={{
                          fontFamily: serif, fontStyle: 'italic', fontWeight: 600,
                          fontSize: 17.5, color: B.accent, letterSpacing: -0.1,
                        }}>{n.journal}</span>
                      )}
                    </div>
                    <div style={{ fontSize: 16, lineHeight: 1.45, color: ink2 }}>{n.text}</div>
                  </div>
                </div>
              );
            })}
            {/* 더보기 버튼 */}
            {!showAllNews && (window.homeNews || []).length > 6 && (
              <button onClick={() => setShowAllNews(true)} style={{
                width: '100%', marginTop: 12, padding: '10px 0',
                border: `1px solid ${line2}`, borderRadius: 8,
                background: 'white', cursor: 'pointer', fontSize: 14,
                color: ink2, fontFamily: 'inherit', fontWeight: 500,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              }}
              onMouseEnter={e => e.currentTarget.style.background = bg2}
              onMouseLeave={e => e.currentTarget.style.background = 'white'}
              >
                더보기 <span style={{ color: muted, fontSize: 12 }}>({(window.homeNews || []).length - 6}개 더)</span>
              </button>
            )}
            {showAllNews && (
              <button onClick={() => setShowAllNews(false)} style={{
                width: '100%', marginTop: 12, padding: '10px 0',
                border: `1px solid ${line2}`, borderRadius: 8,
                background: 'white', cursor: 'pointer', fontSize: 14,
                color: muted, fontFamily: 'inherit', fontWeight: 500,
              }}
              onMouseEnter={e => e.currentTarget.style.background = bg2}
              onMouseLeave={e => e.currentTarget.style.background = 'white'}
              >접기 ↑</button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

window.HomePage = HomePage;

// ───── Home news — simple list, separate from main newsFull
const homeNews = [
  { date: '2026.04', type: 'grant', text: '소재 Global Young Connect 과제 선정(총괄 연구책임자)' },
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
  { date: '2025.02', type: 'grant', text: '개인기초연구사업(우수신진연구과제) 선정' },
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
  { date: '2023.12.23', type: 'paper', journal: 'Journal of Controlled Release', text: 'Research article accepted' },
  { date: '2023.12.01', type: 'member', text: 'Wonjun, Minseok, and Yurim joined our lab. Welcome!!' },
  { date: '2023.11.11', type: 'paper', journal: 'Advanced Drug Delivery Reviews', text: 'Review article accepted' },
  { date: '2023.11.05', type: 'paper', journal: 'Aggregate', text: 'Research article accepted' },
  { date: '2023.11.01', type: 'award', text: '2023 1학기 고려대학교 석탑강의상 수상 (동물용의약품학 · 상위 5%)' },
  { date: '2023.10.25', type: 'paper', journal: 'Acta Biomaterialia', text: 'Research article accepted' },
  { date: '2023.10.23', type: 'paper', journal: 'Journal of Physics: Materials', text: 'Roadmap article accepted' },
  { date: '2023.10.05', type: 'patent', text: 'US patent "Dopa modified gelatin for wound healing" published' },
  { date: '2023.09.18', type: 'paper', journal: 'Advanced Functional Materials', text: 'Research article accepted' },
  { date: '2023.09.01', type: 'member', text: 'Ulziituya and Minjin joined our lab. Welcome!!' },
  { date: '2023.08.25', type: 'paper', journal: 'Advanced Functional Materials', text: 'Research article accepted' },
  { date: '2023.08.14', type: 'member', text: 'Soojin joined our lab. Welcome!!' },
  { date: '2023.08.03', type: 'paper', journal: 'Macromolecular Bioscience', text: 'Research article accepted' },
  { date: '2023.07.03', type: 'member', text: 'Yeonggyeong and Sungsoo joined our lab. Welcome!!' },
  { date: '2023.06.20', type: 'paper', journal: 'Biofabrication', text: 'Research article accepted' },
  { date: '2023.06.15', type: 'paper', journal: 'Biofabrication', text: 'Research article accepted' },
  { date: '2023.06.06', type: 'paper', journal: 'Advanced Healthcare Materials', text: 'Research article accepted' },
  { date: '2023.05.22', type: 'paper', journal: 'Advanced Healthcare Materials', text: 'Review article accepted' },
  { date: '2023.05.05', type: 'paper', journal: 'Advanced Science', text: 'Research article accepted' },
  { date: '2023.04.06', type: 'patent', text: 'Two World patents "Injectable shear-thinning hydrogel for tumor therapy" published' },
  { date: '2023.03.30', type: 'patent', text: 'Two US patents "Injectable shear-thinning hydrogel for tumor therapy" published' },
  { date: '2023.03.29', type: 'paper', journal: 'Advanced Science', text: 'Review article accepted' },
  { date: '2023.03.25', type: 'promote', text: 'Prof. Kim appointed as Adjunct Professor at Vellore Institute of Technology (India)' },
  { date: '2023.03.15', type: 'paper', journal: 'Biomaterials', text: 'Review article published online' },
  { date: '2023.02.15', type: 'paper', journal: 'Bioactive Materials', text: 'Research article published online' },
  { date: '2023.01.15', type: 'promote', text: 'The Hanjun Kim Lab is now open & hiring!' },
];
Object.assign(window, { homeNews });
