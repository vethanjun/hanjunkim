// People, Research, Publications, News, Contact

function ResearchPage() {
  const w = useWinWidth();
  const isMobile = w < 900;
  return (
    <PageShell
      eyebrow="── RESEARCH"
      titleEn="Fields of inquiry"
      titleKo="연구 분야"
      intro="Multidisciplinary research bridging pathophysiology, preclinical science, and bioengineering — translating benchtop biomedical innovation into clinical impact."
    >
      {/* Research Summary — with figure */}
      <section style={{ padding: isMobile ? '24px 20px' : '48px 56px', borderBottom: `1px solid ${line}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.1fr', gap: isMobile ? 24 : 40, alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: mono, fontSize: 15, letterSpacing: 2, color: B.accent, marginBottom: 10 }}>
              ── RESEARCH SUMMARY
            </div>
            <h2 style={{ fontSize: 30, fontWeight: 700, letterSpacing: -0.8, margin: '0 0 18px', lineHeight: 1.2 }}>
              A <em style={{ fontFamily: serif, fontStyle: 'italic', color: B.accent }}>mechanism-driven</em> approach
              to preclinical science for treating refractory human diseases.
            </h2>
            <p style={{ fontSize: 18.5, lineHeight: 1.75, color: ink2, margin: '0 0 14px' }}>
              Rigorous preclinical evaluation of novel therapeutics demands integration across pharmacology, pathophysiology, and translational science — asking not only whether a therapy works, but how and why it works in the living system.
            </p>
            <p style={{ fontSize: 18.5, lineHeight: 1.75, color: ink2, margin: 0 }}>
              Dual training <strong>(D.V.M., Ph.D. in Veterinary Pathology)</strong> anchors our ability to evaluate therapeutic efficacy, safety, and mechanism in animal disease models — spanning PK/PD, toxicology, histopathological assessment, and IND-enabling translational studies for chronic and refractory human diseases.
            </p>
          </div>
          <figure style={{ margin: 0 }}>
            <div style={{
              border: `1px solid ${line}`, borderRadius: 12, overflow: 'hidden',
              background: 'white', padding: 14,
            }}>
              <img src={asset('v2/assets/research-summary.png')} alt="Research summary schematic"
                   style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 4 }}/>
            </div>
            <figcaption style={{ fontFamily: mono, fontSize: 14, color: muted, marginTop: 8, letterSpacing: 0.5 }}>
              FIG · Development of minimally invasive therapy and disease modeling for personalized medicine
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Three-track framework with figures */}
      <section style={{ padding: isMobile ? '24px 20px' : '48px 56px', borderBottom: `1px solid ${line}`, background: '#fafaf8' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={{ fontFamily: mono, fontSize: 15, letterSpacing: 2, color: B.accent, marginBottom: 8 }}>
            ── THREE COMPLEMENTARY TRACKS
          </div>
          <h2 style={{ fontSize: 26, fontWeight: 700, letterSpacing: -0.5, margin: 0 }}>
            Research framework
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24 }}>
          {[
            {
              no: 'I',
              en: 'Preclinical Efficacy & Disease Modeling',
              ko: '전임상 약효 평가 · 질환 모델링',
              img: 'v2/assets/research-disease.png',
              caption: 'Disease modeling across four organ systems — Skin · Musculoskeletal · Liver & Nutrition · Tumor',
              desc: 'Animal and organ-on-chip models that faithfully reproduce human disease pathophysiology — serving as rigorous testbeds for therapeutic efficacy, safety, and mechanism. We run in vivo efficacy and toxicity studies across skin wound/dermatitis, osteoarthritis, liver disease, and oncology models, with histopathological readouts that anchor translational decision-making.',
              keywords: ['In vivo efficacy', 'Histopathology', 'Skin-on-a-chip', 'Tumor models', '3D cancer modeling'],
              tone: B.accent,
            },
            {
              no: 'II',
              en: 'Animal-Alternative Preclinical Platforms',
              ko: '동물실험 대체 전임상 플랫폼',
              img: 'v2/assets/research-alt-platform.jpg',
              caption: 'Organ-on-a-chip platforms — Lung · Sensory Ganglion · Adipose · Patient-derived Cancer on a chip',
              desc: 'We develop microphysiological systems (MPS) that replicate human organ pathophysiology without animal subjects — enabling mechanistic drug screening and toxicity prediction with higher human relevance. Current platforms include Lung-on-a-chip (Air-liquid interface), Sensory Ganglion-on-a-chip, Adipose-on-a-chip, and Patient-derived Cancer-on-a-chip, built in collaboration with clinical and engineering partners.',
              keywords: ['Organ-on-a-chip', 'Lung-on-a-chip', 'Cancer-on-a-chip', 'Adipose-on-a-chip', 'MPS', '3Rs'],
              tone: '#0e7490',
            },
            {
              no: 'III',
              en: 'Translational Therapeutic Development',
              ko: '중개 치료제 개발',
              img: 'v2/assets/research-platform.png',
              caption: 'Four therapeutic platforms — 3D tissue modeling · Organ-on-a-Chip · Microneedles · Injectable hydrogels',
              desc: 'Novel therapeutic modalities for refractory diseases — with a particular focus on stimuli-responsive embolic agents for intractable vascular diseases. Our platforms (injectable hydrogels, microneedles, organ-on-a-chip for drug screening) are developed with clinical translation as the endpoint, published across Advanced Healthcare Materials, Small, Advanced Functional Materials, and Advanced Science.',
              keywords: ['In vivo efficacy', 'Organ-on-a-Chip', 'Skin-on-a-chip', 'Injectable hydrogel', 'Drug screening'],
              tone: B.accent2 || '#1e6091',
            },
          ].map((t, i) => (
            <div key={i} style={{
              background: 'white', border: `1px solid ${line}`, borderRadius: 14,
              overflow: 'hidden',
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.4fr', gap: 0 }}>
                <div style={{ padding: 32, position: 'relative' }}>
                  <div style={{
                    position: 'absolute', top: -20, right: -10,
                    fontFamily: serif, fontStyle: 'italic', fontSize: 140, fontWeight: 700,
                    color: t.tone, opacity: 0.08, lineHeight: 1,
                  }}>{t.no}</div>
                  <div style={{
                    fontFamily: mono, fontSize: 16, letterSpacing: 2, color: t.tone,
                    fontWeight: 600, marginBottom: 12,
                  }}>TRACK {t.no}</div>
                  <h3 style={{ fontSize: 24, fontWeight: 700, letterSpacing: -0.5, margin: '0 0 4px', lineHeight: 1.25 }}>
                    {t.en}
                  </h3>
                  <div style={{ fontFamily: serif, fontStyle: 'italic', fontSize: 22, color: muted, marginBottom: 18 }}>
                    {t.ko}
                  </div>
                  <p style={{ fontSize: 19.5, lineHeight: 1.65, color: ink2, margin: '0 0 16px' }}>
                    {t.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {t.keywords.map(k => (
                      <span key={k} style={{
                        padding: '4px 10px', borderRadius: 999,
                        fontSize: 17, color: t.tone, background: 'white',
                        border: `1px solid ${t.tone}44`,
                      }}>{k}</span>
                    ))}
                  </div>
                </div>
                <div style={{ borderLeft: `1px solid ${line}`, background: '#fafaf8',
                  padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <img src={asset(t.img)} alt={t.en}
                       style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 6 }}/>
                  <div style={{ fontFamily: mono, fontSize: 16, color: muted, marginTop: 10, letterSpacing: 0.3 }}>
                    {t.caption}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Research Goal */}
      <section style={{ padding: '48px 56px', borderTop: `1px solid ${line}`,
        background: `linear-gradient(135deg, ${B.accent}08 0%, #fafaf8 100%)` }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.1fr 1fr', gap: isMobile ? 24 : 40, alignItems: 'center' }}>
          <figure style={{ margin: 0 }}>
            <div style={{
              border: `1px solid ${line}`, borderRadius: 12, overflow: 'hidden',
              background: 'white', padding: 14,
            }}>
              <img src={asset('v2/assets/research-goal.png')} alt="Translational bioconvergent solutions"
                   style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 4 }}/>
            </div>
            <figcaption style={{ fontFamily: mono, fontSize: 14, color: muted, marginTop: 8, letterSpacing: 0.5 }}>
              FIG · Bridging Bioengineering, Clinical Application, and Pharmaceutical Science toward translational/bioconvergent solutions for human health
            </figcaption>
          </figure>
          <div>
            <div style={{ fontFamily: mono, fontSize: 15, letterSpacing: 2, color: B.accent, marginBottom: 10 }}>
              ── RESEARCH GOAL
            </div>
            <h2 style={{ fontSize: 30, fontWeight: 700, letterSpacing: -0.8, margin: '0 0 18px', lineHeight: 1.25 }}>
              Advancing <em style={{ fontFamily: serif, fontStyle: 'italic', color: B.accent }}>mechanism-based,
              translationally ready</em> therapeutics for refractory diseases.
            </h2>
            <p style={{ fontSize: 20.5, lineHeight: 1.75, color: ink2, margin: '0 0 14px' }}>
              Developing effective therapeutics for refractory human diseases demands convergence across pharmacology, pathophysiology, and clinical science. Our research generates the preclinical evidence — efficacy, safety, mechanism — that determines whether a new therapeutic is ready to advance toward the clinic.
            </p>
            <p style={{ fontSize: 20.5, lineHeight: 1.75, color: ink2, margin: 0 }}>
              This mission aligns directly with the educational and research goals of the
              <strong> College of Pharmacy at Korea University</strong> —
              training the next generation of pharmaceutical scientists to translate laboratory
              discovery into meaningful therapeutic impact.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function PeoplePage() {
  const w = useWinWidth();
  const isMobile = w < 900;
  const pi = people.find(p => p.pi);
  const rest = people.filter(p => !p.pi);
  return (
    <PageShell
      eyebrow="── PEOPLE"
      titleEn="The lab"
      titleKo="연구실 구성원"
      intro={`Currently 8 researchers — one Principal Investigator, graduate students working across biomaterials, drug delivery, tumor therapy, wound healing, and in-vivo modeling.`}
    >
      {/* PI spotlight */}
      <section style={{ padding: isMobile ? '20px' : '40px', borderBottom: `1px solid ${line}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '280px 1fr', gap: isMobile ? 24 : 40, alignItems: 'start' }}>
          <div>
            <div style={{
              width: 280, height: 340, borderRadius: 12,
              border: `1px solid ${line}`,
              marginBottom: 14, position: 'relative', overflow: 'hidden',
              background: '#0a0e14',
            }}>
              <img
                src={asset(pi.photo || 'v2/assets/people-hanjunkim.jpg')}
                alt="Hanjun Kim, Ph.D. — Principal Investigator"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', bottom: 12, right: 12,
                background: 'rgba(255,255,255,0.92)', borderRadius: 6, padding: 4,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <KUMark size={22} color={B.accent}/>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[
                ['Google Scholar ↗', 'https://scholar.google.co.kr/citations?user=SF56UPQAAAAJ&hl=en'],
                ['ORCID ↗', 'https://orcid.org/0000-0001-9238-7238'],
                ['LinkedIn ↗', 'https://www.linkedin.com/in/hanjun-kim-158162183/'],
              ].map(([l, href]) => (
                <a key={l} href={href} target="_blank" rel="noopener" style={{
                  padding: '7px 12px', fontSize: 16, border: `1px solid ${line2}`,
                  borderRadius: 6, color: ink2, cursor: 'pointer', textAlign: 'center',
                }}>{l}</a>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: mono, fontSize: 15, letterSpacing: 2, color: B.accent, marginBottom: 8 }}>
              PRINCIPAL INVESTIGATOR
            </div>
            <h2 style={{ fontSize: 40, fontWeight: 700, letterSpacing: -1.2, margin: '0 0 4px', lineHeight: 1 }}>
              {pi.name}
            </h2>
            <div style={{ fontFamily: serif, fontSize: 24, fontStyle: 'italic', color: muted, marginBottom: 6 }}>
              김한준 · Ph.D.
            </div>
            <div style={{ fontSize: 18, color: ink2, marginBottom: 20 }}>
              Associate Professor · College of Pharmacy, Korea University<br/>
              고려대학교 첨단융합신약학과 학과장
            </div>
            <p style={{ fontSize: 18.5, lineHeight: 1.7, color: ink2, maxWidth: 680, margin: '0 0 22px' }}>
              Dr. Kim leads a preclinical science laboratory at the interface of pathophysiology, translational therapeutics, and in-vivo disease modeling. Drawing on dual training in veterinary medicine (D.V.M.) and veterinary pathology (Ph.D.), his group evaluates the efficacy, safety, and mechanism of novel therapeutics — with a translational focus on stimuli-responsive embolic agents for refractory vascular diseases.
            </p>

            {/* Bio — flattened, all sections always visible */}
            <CVSection label="At a glance">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {[
                  ['Current appointment', 'Associate Professor (2025.09 ~)'],
                  ['Department head', '첨단융합신약학과 학과장 (2025.11 ~)'],
                  ['Lab founded', '2023.03 (at KU Pharmacy)'],
                  ['Office', 'Room 504 · 약학대학연구실험동'],
                  ['Research area', 'Preclinical Science · Pathophysiology'],
                  ['Editorial board', 'Artificial Organs (2021 ~)'],
                ].map(([k,v],i) => (
                  <div key={i} style={{ padding: '10px 14px', background: bg2, borderRadius: 8 }}>
                    <div style={{ fontSize: 15, color: muted, marginBottom: 2 }}>{k}</div>
                    <div style={{ fontWeight: 500, color: ink, fontSize: 17 }}>{v}</div>
                  </div>
                ))}
              </div>
            </CVSection>

            <CVSection label="Education / Training">
              <CVList items={[
                ['2012 – 2018', 'Integrated M.S./Ph.D. in Veterinary Pathology', 'Konkuk University · College of Veterinary Medicine · Advisor: Prof. Sun Hee Do'],
                ['2006 – 2012', 'Doctor of Veterinary Medicine (D.V.M.)', 'Konkuk University · College of Veterinary Medicine'],
              ]}/>
            </CVSection>

            <CVSection label="Position & Employment">
              <CVList items={[
                ['2025.11 – ', '학과장 · 첨단융합신약학과', 'College of Pharmacy, Korea University'],
                ['2025.09 – ', 'Associate Professor', 'College of Pharmacy, Korea University'],
                ['2023.03 – 2025.08', 'Assistant Professor', 'College of Pharmacy, Korea University'],
                ['2020.05 – 2023.01', 'Assistant Professor', 'Terasaki Institute for Biomedical Innovation (TIBI), Los Angeles, USA'],
                ['2018.08 – 2020.05', 'Postdoctoral Fellow', 'University of California, Los Angeles (UCLA) · Advisor: Prof. Ali Khademhosseini'],
                ['2018.03 – 2018.07', 'Postdoctoral Fellow', 'Konkuk University · College of Veterinary Medicine · Advisor: Prof. Sun Hee Do'],
              ]}/>
            </CVSection>

            <CVSection label="Affiliate / Adjunct Faculty">
              <CVList items={[
                ['2025.09 – ', '고려대학교 의과대학 안산병원 겸임교수'],
                ['2025.03 – ', '고려대학교 세종캠퍼스 혁신신약융합전공 겸임교수'],
                ['2025.01 – ', '고려대학교 세종캠퍼스 첨단융합신약학과 겸임교수'],
                ['2024.04 – ', '고려대학교 세종캠퍼스 헬스케어ICT융합전공 겸임교수'],
                ['2023.01 – ', 'Terasaki Institute for Biomedical Innovation (TIBI), Los Angeles, USA'],
                ['2023.01 – ', 'Centre for Biomaterials, Cellular and Molecular Theranostics (CBCMT), Vellore Institute of Technology, India'],
              ]}/>
            </CVSection>

            <CVSection label="Awards & Honors">
              <CVList items={[
                ['2025', '고려대 석탑강의상 · 2025-1학기 (수강소감평가 상위 5%)'],
                ['2025', '고려대 석탑강의상 · 2024-2학기 (수강소감평가 상위 5%)'],
                ['2024', '고려대 세종캠퍼스 석탑연구상 (학술논문 부문)'],
                ['2024', '나이벡 미래과학자상 (한-중) · 한국생체재료학회'],
                ['2024', '고려대 석탑강의상 & 우수강좌상 · 2023-2학기'],
                ['2023', '고려대 세종캠퍼스 석탑연구상 (학술논문 부문)'],
                ['2023', '고려대 석탑강의상 · 2023-1학기 (수강소감평가 상위 5%)'],
                ['2018', 'Young Scientist of the 68th Lindau Nobel Laureate Meetings'],
                ['2017', 'Representative of Korea · 68th Lindau Nobel Laureate Meetings (한국과학기술한림원)'],
                ['2017', 'Young Scientist Award · Inter-Academy Seoul Science Forum'],
                ['2017', 'Excellent Presentation Award · The Korean Society for Biomaterials'],
                ['2016', 'Excellent Presentation Award · The Korean Society of Veterinary Pathology'],
              ]}/>
            </CVSection>

            <CVSection label="Society & Activity">
              <CVList items={[
                ['2025.03 – ', '4단계 BK21 사업 부단장 (연구·산학)', '첨단시험법 융합 혁신신약개발 인재양성 교육연구단'],
                ['2025.02 – ', '한국생체재료학회 바이오프린팅분과 학술위원'],
                ['2025.01 – ', '한국동물실험대체법학회 기획위원회 부위원장'],
                ['2024.07 – ', '고려대학교 기관생명윤리위원회(IRB) 위원'],
                ['2024.04 – ', '한국생체재료학회 신진위원회 위원'],
                ['2024.01 – ', '한국조직공학·재생의학회 신진연구자위원회 임원'],
                ['2021.02 – ', 'Editorial Board Member', 'Artificial Organs (ISSN: 0160-564X)'],
              ]}/>
            </CVSection>

            <CVSection label="Teaching">
              <TeachingGrid
                undergrad={[
                  { code: 'PHAR373', name: 'Pathophysiology I' },
                  { code: 'PHAR374', name: 'Pathophysiology II' },
                  { code: 'PHAR278', name: 'New Drug Development' },
                  { code: 'PHAR549', name: 'Veterinary Pharmacy' },
                  { code: 'PHAR477', name: 'Pharmacy Research I' },
                  { code: 'PHAR478', name: 'Pharmacy Research II' },
                  { code: 'PHAR471', name: 'Pharmacy Lab V' },
                  { code: 'PHAR636', name: 'Seminar in Pharmacy' },
                  { code: 'PHAR602', name: 'Advanced Life Science in Pharmacy II' },
                ]}
                graduate={[
                  { code: 'PHA504',  name: 'Animal Models for Human Diseases' },
                  { code: 'PHA509',  name: 'Preclinical Evaluation' },
                  { code: 'PHA849',  name: 'Understanding of Histopathology' },
                  { code: 'PHA850',  name: 'Advanced Histopathology' },
                  { code: 'ISP501',  name: 'Advanced Cell-based Testing' },
                  { code: 'HIT501',  name: 'Mentoring PBL 1' },
                  { code: 'HIT502',  name: 'Mentoring PBL 2' },
                  { code: 'DKK500',  name: 'Guidance of Research' },
                ]}
              />
            </CVSection>
          </div>
        </div>
      </section>

      {/* Lab members — grouped */}
      <MembersSection
        label="GRADUATE STUDENTS"
        sub="대학원생"
        members={(() => {
          const order = ['Ulziituya Batjargal','Minseok Kim','Soojin Park','Wonjun Jang','Minjin Kwak','Min Young Lee','Minjeong Kim','Jinsol Choi','Su-Hyun Kim'];
          return rest.filter(m => m.group === 'grad')
            .slice()
            .sort((a,b) => order.indexOf(a.name) - order.indexOf(b.name));
        })()}
        detailed
      />
      <MembersSection
        label="UNDERGRADUATE RESEARCHERS"
        sub="학부 연구생"
        members={rest.filter(m => m.group === 'ug')}
      />
      <AlumniSection alumni={alumni}/>
    </PageShell>
  );
}

function AlumniSection({ alumni }) {
  const w = useWinWidth();
  const isMobile = w < 900;
  const [lightbox, setLightbox] = React.useState(null);
  return (
    <section style={{ padding: isMobile ? '20px' : '40px', borderTop: `1px solid ${line}`, background: '#fafaf8' }}>
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          background: 'rgba(0,0,0,0.82)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            background: 'white', borderRadius: 14, overflow: 'hidden',
            maxWidth: 360, width: '100%',
            boxShadow: '0 24px 80px rgba(0,0,0,0.4)',
          }}>
            <img src={asset(lightbox.photo)} alt={lightbox.name}
              style={{ width: '100%', height: 420, objectFit: 'cover', objectPosition: 'top', display: 'block' }}/>
            <div style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 20, fontWeight: 700, color: ink }}>{lightbox.name}</div>
                <div style={{ fontFamily: mono, fontSize: 15, color: muted, marginTop: 2 }}>{lightbox.period}</div>
                {lightbox.affil && (
                  <div style={{ fontSize: 16, color: ink2, marginTop: 4, fontStyle: 'italic' }}>{lightbox.affil}</div>
                )}
              </div>
              <button onClick={() => setLightbox(null)} style={{
                width: 28, height: 28, borderRadius: 999, border: `1px solid ${line2}`,
                background: bg2, cursor: 'pointer', fontSize: 18, color: muted,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>✕</button>
            </div>
          </div>
        </div>
      )}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 20 }}>
        <div style={{ fontFamily: mono, fontSize: 15, letterSpacing: 2, color: muted, fontWeight: 600 }}>── ALUMNI</div>
        <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.5, margin: 0, color: ink2 }}>Past researchers</h2>
        <div style={{ flex: 1, height: 1, background: line }}/>
        <div style={{ fontFamily: mono, fontSize: 15, color: muted }}>{alumni.length} alumni</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 10 }}>
        {alumni.map((a, i) => (
          <div key={i} onClick={() => a.photo && setLightbox(a)} style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px',
            background: 'white', border: `1px solid ${line}`, borderRadius: 8,
            cursor: a.photo ? 'pointer' : 'default', transition: 'box-shadow 0.15s',
          }}
          onMouseEnter={e => { if (a.photo) e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)'; }}
          onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            <div style={{ width: 40, height: 40, borderRadius: 999, flexShrink: 0, overflow: 'hidden',
              background: '#f2efe8', border: `1px solid ${line}` }}>
              {a.photo ? (
                <img src={asset(a.photo)} alt={a.name}
                     style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}/>
              ) : (
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: serif, fontStyle: 'italic', fontSize: 20, color: muted }}>{a.name[0]}</div>
              )}
            </div>
            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={{ fontSize: 17, fontWeight: 600, color: ink, letterSpacing: -0.1,
                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.name}</div>
              <div style={{ fontSize: 14.5, color: muted, fontFamily: mono, marginTop: 1 }}>{a.period}</div>
            </div>
            {a.photo && <div style={{ fontSize: 14, color: muted, flexShrink: 0 }}>↗</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
function MembersSection({ label, sub, members, detailed }) {
  const w = useWinWidth();
  const isMobile = w < 900;
  if (!members || !members.length) return null;
  return (
    <section style={{ padding: isMobile ? '20px' : '40px', borderTop: `1px solid ${line}` }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 20 }}>
        <div style={{
          fontFamily: mono, fontSize: 15, letterSpacing: 2, color: B.accent, fontWeight: 600,
        }}>── {label}</div>
        <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.5, margin: 0 }}>{sub}</h2>
        <div style={{ flex: 1, height: 1, background: line }}/>
        <div style={{ fontFamily: mono, fontSize: 15, color: muted }}>{members.length} {members.length > 1 ? 'members' : 'member'}</div>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: detailed
          ? 'repeat(auto-fill, minmax(300px, 1fr))'
          : 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: 14,
      }}>
        {members.map((m, i) => (
          <MemberCard key={i} m={m} detailed={detailed}/>
        ))}
      </div>
    </section>
  );
}

function MemberCard({ m, detailed }) {
  return (
    <div style={{
      border: `1px solid ${line}`, borderRadius: 12, overflow: 'hidden',
      background: 'white', display: 'flex', flexDirection: 'column',
    }}>
      <div style={{
        height: detailed ? 260 : 180,
        background: '#f4f0e6',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: muted, fontFamily: mono, fontSize: 14, letterSpacing: 2,
        position: 'relative', overflow: 'hidden',
      }}>
        {m.photo ? (
          <img src={asset(m.photo)} alt={m.name}
               style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', background: '#f4f0e6' }}/>
        ) : (
          <div style={{
            width: 56, height: 56, borderRadius: 999,
            border: `1.5px dashed ${muted}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: serif, fontStyle: 'italic', fontSize: 22, color: muted,
          }}>{m.name[0]}</div>
        )}
        <div style={{ position: 'absolute', top: 10, left: 12,
          fontFamily: mono, fontSize: 13, letterSpacing: 1.5,
          color: m.photo ? 'white' : ink2,
          background: m.photo ? 'rgba(0,0,0,0.45)' : 'transparent',
          padding: m.photo ? '2px 6px' : 0, borderRadius: 3,
          opacity: m.photo ? 0.95 : 0.6,
        }}>
          {m.ko}
        </div>
      </div>
      <div style={{ padding: 16, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 19, fontWeight: 700, letterSpacing: -0.2, color: ink }}>{m.name}</div>
        <div style={{ fontSize: 15.5, color: B.accent, fontWeight: 600, marginTop: 2, fontFamily: mono, letterSpacing: 0.5 }}>
          {m.role}
        </div>
        {m.period && (
          <div style={{ fontSize: 15, color: muted, fontFamily: mono, marginTop: 4 }}>
            {m.period}
          </div>
        )}
        {m.affil && (
          <div style={{ fontSize: 15.5, color: ink2, marginTop: 6, fontStyle: 'italic' }}>
            {m.affil}
          </div>
        )}
        {detailed && m.edu && (
          <div style={{ marginTop: 10, paddingTop: 10, borderTop: `1px dashed ${line}` }}>
            <div style={{ fontFamily: mono, fontSize: 13, letterSpacing: 1.5, color: muted, marginBottom: 4 }}>
              EDUCATION
            </div>
            {m.edu.map((e, k) => (
              <div key={k} style={{ fontSize: 15, color: ink2, lineHeight: 1.4, marginBottom: 2 }}>
                {e}
              </div>
            ))}
          </div>
        )}
        {m.tags && m.tags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 10 }}>
            {m.tags.map(t => (
              <span key={t} style={{
                padding: '2px 7px', borderRadius: 4,
                fontSize: 14, background: bg2, color: ink2, border: `1px solid ${line}`,
              }}>{t}</span>
            ))}
          </div>
        )}
        <div style={{ marginTop: 'auto', paddingTop: 10,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontFamily: mono, fontSize: 14, color: muted,
        }}>
          <span>joined {m.since}</span>
          {m.email && <span style={{ color: ink2, fontFamily: mono, fontSize: 14.5 }}>✉ {m.email}</span>}
        </div>
      </div>
    </div>
  );
}

function CVSection({ label, children }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{
        fontFamily: mono, fontSize: 14, letterSpacing: 2, color: B.accent,
        marginBottom: 10, textTransform: 'uppercase',
        paddingBottom: 6, borderBottom: `1px solid ${line}`,
      }}>── {label}</div>
      {children}
    </div>
  );
}

function CVList({ items }) {
  return (
    <div>
      {items.map(([when, what, where], i) => (
        <div key={i} style={{
          display: 'grid', gridTemplateColumns: '140px 1fr', gap: 16,
          padding: '10px 0',
          borderBottom: i < items.length - 1 ? `1px solid ${line}` : 'none',
        }}>
          <div style={{ fontFamily: mono, fontSize: 15, color: muted, paddingTop: 2 }}>{when}</div>
          <div>
            <div style={{ fontWeight: 500, color: ink, fontSize: 17.5 }}>{what}</div>
            {where && <div style={{ fontSize: 16, color: muted, marginTop: 2 }}>{where}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}

function CourseChip({ code, name, tone }) {
  const hasCode = code && code !== '—';
  return (
    <div style={{
      display: 'flex', alignItems: 'stretch',
      border: `1px solid ${line}`, borderRadius: 8,
      background: 'white',
      overflow: 'hidden',
      minHeight: 44,
    }}>
      <div style={{
        width: 68, flexShrink: 0,
        background: hasCode ? (tone === 'grad' ? '#f4f5f7' : '#fdf4f3') : '#fafafa',
        borderRight: `1px solid ${line}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: mono, fontSize: 14.5, letterSpacing: 0.5,
        color: hasCode ? (tone === 'grad' ? ink : B.accent) : '#c0c0c0',
        fontWeight: 600,
      }}>
        {hasCode ? code : '···'}
      </div>
      <div style={{
        padding: '8px 12px', fontSize: 16.5, color: ink,
        display: 'flex', alignItems: 'center', fontWeight: 500,
        lineHeight: 1.3,
      }}>
        {name}
      </div>
    </div>
  );
}

function TeachingGrid({ undergrad, graduate }) {
  const Row = ({ label, sub, courses, tone }) => (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 10 }}>
        <div style={{
          fontFamily: mono, fontSize: 14, letterSpacing: 1.5,
          color: tone === 'grad' ? ink : B.accent, fontWeight: 600,
        }}>{label}</div>
        <div style={{ fontSize: 15, color: muted }}>{sub}</div>
        <div style={{ flex: 1, height: 1, background: line }}/>
        <div style={{ fontFamily: mono, fontSize: 14, color: muted }}>{courses.length} courses</div>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: 8,
      }}>
        {courses.map((c, i) => <CourseChip key={i} {...c} tone={tone}/>)}
      </div>
    </div>
  );
  return (
    <div>
      <Row label="UNDERGRADUATE" sub="학부 과정" courses={undergrad} tone="ug"/>
      <Row label="GRADUATE" sub="대학원 과정" courses={graduate} tone="grad"/>
    </div>
  );
}

// Format an author string. Bolds "Kim HJ" (and variants) and highlights co-first / corr markers.
function AuthorList({ raw }) {
  // Split on commas, then inspect each name.
  const parts = raw.split(',').map(s => s.trim());
  return (
    <span>
      {parts.map((name, i) => {
        const isPI = /\bKim\s*HJ\b|\bKim,?\s*H\.?\s*J\b|^Kim HJ/i.test(name) || /Kim HJ\*/.test(name);
        const isCorr = /\*/.test(name) && /Kim/i.test(name);
        return (
          <React.Fragment key={i}>
            {i > 0 && ', '}
            <span style={{
              fontWeight: isPI ? 700 : 400,
              color: isPI ? ink : ink2,
              borderBottom: isCorr ? `1.5px solid ${B.accent}` : 'none',
            }}>{name}</span>
          </React.Fragment>
        );
      })}
    </span>
  );
}

// BRIC 한빛사 badge — composite mark: BRIC wordmark + 한빛사 label
// Two sizes: 'sm' for list row, 'xs' for grid tiles
function HanbitsaBadge({ size = 'sm', topCited }) {
  const sm = size === 'sm';
  const h = sm ? 20 : 16;
  const fs = sm ? 10 : 9;
  const kfs = sm ? 11 : 9.5;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'stretch', height: h,
      borderRadius: 3, overflow: 'hidden', verticalAlign: 'middle',
      border: '1px solid #1d4ed8', whiteSpace: 'nowrap', lineHeight: 1,
      boxShadow: '0 1px 0 rgba(29,78,216,0.08)',
    }}>
      {/* BRIC mark */}
      <span style={{
        display: 'inline-flex', alignItems: 'center',
        background: '#1d4ed8', color: '#fff',
        padding: sm ? '0 7px' : '0 5px',
        fontFamily: "'Inter Tight', sans-serif",
        fontWeight: 800, fontSize: fs, letterSpacing: 0.8,
        fontStyle: 'italic',
      }}>BRIC</span>
      {/* 한빛사 label */}
      <span style={{
        display: 'inline-flex', alignItems: 'center',
        background: '#fff', color: '#1d4ed8',
        padding: sm ? '0 8px' : '0 6px',
        fontFamily: "'Noto Sans KR', sans-serif",
        fontWeight: 700, fontSize: kfs, letterSpacing: -0.2,
      }}>
        한빛사{topCited ? ' · 상위피인용' : ''}
      </span>
    </span>
  );
}

function PubBadge({ children, color, bg, solid }) {
  if (solid) {
    return (
      <span style={{
        fontSize: 14, fontFamily: mono, fontWeight: 700, letterSpacing: 0.8, textTransform: 'uppercase',
        padding: '3px 8px', borderRadius: 3,
        color: '#fff', background: color || B.accent, whiteSpace: 'nowrap',
      }}>{children}</span>
    );
  }
  return (
    <span style={{
      fontSize: 13.5, fontFamily: mono, letterSpacing: 1, textTransform: 'uppercase',
      padding: '2px 6px', borderRadius: 3,
      color: color || B.accent, background: bg || `${color || B.accent}15`,
    }}>{children}</span>
  );
}

function PublicationsPage() {
  const w = useWinWidth();
  const isMobile = w < 900;
  const [year, setYear] = React.useState('All');
  const [q, setQ] = React.useState('');
  const [view, setView] = React.useState('list'); // list | covers
  const [roleFilters, setRoleFilters] = React.useState([]); // multi-select

  const all = window.publications || [];
  const years = ['All', ...Array.from(new Set(all.map(p => String(p.y)))).sort().reverse()];

  const toggleRole = (k) => {
    if (k === 'All') { setRoleFilters([]); return; }
    setRoleFilters(prev => prev.includes(k) ? prev.filter(x => x !== k) : [...prev, k]);
  };

  const matchesRole = (p) => {
    if (roleFilters.length === 0) return true;
    return roleFilters.every(r => {
      if (r === 'first') return p.first || p.cofirst;
      if (r === 'corr') return p.corr;
      if (r === 'cover') return !!p.cover;
      if (r === 'hanbitsa') return !!p.hanbitsa;
      return true;
    });
  };

  const filtered = all.filter(p =>
    (year === 'All' || String(p.y) === year) &&
    matchesRole(p) &&
    (q === '' || (p.journal + ' ' + p.title + ' ' + p.authors).toLowerCase().includes(q.toLowerCase()))
  );

  const withCovers = all.filter(p => p.cover);
  const realCovers = all.filter(p => p.coverImg); // papers with actual uploaded cover art
  const featured = withCovers.slice(0, 5);

  // Group by year for list view
  const byYear = {};
  filtered.forEach(p => { (byYear[p.y] = byYear[p.y] || []).push(p); });
  const sortedYears = Object.keys(byYear).sort().reverse();

  // Stats
  const nCorr = all.filter(p => p.corr).length;
  const nFirst = all.filter(p => p.first || p.cofirst).length;
  const nCovers = withCovers.length;
  const nHanbitsa = all.filter(p => p.hanbitsa).length;

  return (
    <PageShell
      eyebrow="── PUBLICATIONS"
      titleEn="Peer-reviewed publications"
      titleKo="논문"
      intro={`${all.length} peer-reviewed research and review articles. ${nCorr} as corresponding author, ${nFirst} as first/co-first, ${nCovers} featured as journal cover, ${nHanbitsa} selected as 한빛사 (Korean Bioscientists in the Spotlight). Use filters to browse by year, role, or search.`}
    >
      {/* Stat strip */}
      <section style={{ padding: '24px 56px', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0,
        borderBottom: `1px solid ${line}`, background: bg2 }}>
        {[
          [all.length, 'Total papers'],
          [nCorr, 'Corresponding author', '*'],
          [nFirst, 'First / co-first'],
          [nCovers, 'Journal covers'],
          [nHanbitsa, '한빛사 selected'],
        ].map(([n, label, mark], i) => (
          <div key={i} style={{ padding: '8px 24px', borderLeft: i > 0 ? `1px solid ${line}` : 'none' }}>
            <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: -1, color: ink, lineHeight: 1,
              fontVariantNumeric: 'tabular-nums' }}>
              {n}{mark && <span style={{ color: B.accent, marginLeft: 4 }}>{mark}</span>}
            </div>
            <div style={{ fontSize: 15, color: muted, marginTop: 6 }}>{label}</div>
          </div>
        ))}
      </section>

      {/* Cover art wall — real uploaded journal covers, full width */}
      <section style={{ padding: isMobile ? '24px 20px' : '56px 56px 40px', background: bg2,
        borderTop: `1px solid ${line}`, borderBottom: `1px solid ${line}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
          <div>
            <div style={{ fontFamily: mono, fontSize: 15, letterSpacing: 2, color: B.accent, marginBottom: 8 }}>
              ── COVER ART GALLERY
            </div>
            <h2 style={{ fontSize: 32, fontWeight: 700, letterSpacing: -1, margin: 0, color: ink }}>
              Featured on {realCovers.length} journal covers
            </h2>
            <div style={{ fontSize: 17, color: muted, marginTop: 10, maxWidth: 900, lineHeight: 1.6 }}>
              Research from our group has been selected for the cover artwork of <i>Advanced Materials</i>,
              {' '}<i>Advanced Science</i>, <i>Small</i>, <i>Advanced Healthcare Materials</i>,
              {' '}<i>Advanced Functional Materials</i>, and other leading journals.
            </div>
          </div>
          <div style={{ fontSize: 15, fontFamily: mono, color: muted, letterSpacing: 1 }}>
            CLICK ANY COVER TO VIEW PAPER →
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 18 }}>
          {realCovers.slice().reverse().map((p) => (
            <a key={p.n} href={p.link} target="_blank" style={{
              display: 'block', cursor: 'pointer', textDecoration: 'none', minWidth: 0,
              transition: 'transform 0.2s',
            }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
               onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ aspectRatio: '3 / 4', overflow: 'hidden', background: '#f0ece4',
                borderRadius: 3, boxShadow: '0 2px 12px rgba(40,30,20,0.12), 0 1px 3px rgba(40,30,20,0.08)',
                border: `1px solid ${line}` }}>
                <img src={asset(p.coverImg)} alt={p.cover}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
              </div>
              <div style={{ marginTop: 10 }}>
                <div style={{ fontFamily: mono, fontSize: 14, color: B.accent, marginBottom: 3, letterSpacing: 0.5 }}>
                  №{p.n} · {p.y}
                </div>
                <div style={{ fontSize: 15.5, fontWeight: 600, color: ink,
                  letterSpacing: -0.1, lineHeight: 1.3, marginBottom: 3 }}>
                  {p.journal}
                </div>
                <div style={{ fontSize: 14, color: muted, fontStyle: 'italic', lineHeight: 1.4 }}>
                  {p.cover}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Filter bar */}
      <section style={{ padding: isMobile ? '12px 20px 0' : '12px 56px 0' }}>
        <div style={{
          display: 'flex', gap: 14, alignItems: 'center', marginBottom: 20,
          padding: '12px 14px', background: bg2, borderRadius: 12, border: `1px solid ${line}`,
          flexWrap: 'wrap',
        }}>
          <div style={{ fontSize: 15, color: muted, fontFamily: mono, letterSpacing: 1 }}>YEAR</div>
          <div style={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
            {years.map(y => (
              <button key={y} onClick={() => setYear(y)} style={{
                padding: '5px 10px', borderRadius: 5, fontSize: 16,
                border: `1px solid ${year === y ? ink : line2}`,
                background: year === y ? ink : 'white',
                color: year === y ? 'white' : ink2,
                cursor: 'pointer', fontFamily: 'inherit',
                fontVariantNumeric: 'tabular-nums',
              }}>{y}</button>
            ))}
          </div>

          <div style={{ width: 1, height: 20, background: line2, margin: '0 4px' }}/>

          <div style={{ fontSize: 15, color: muted, fontFamily: mono, letterSpacing: 1 }}>ROLE</div>
          <div style={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
            {[['All','All'],['corr','Corresponding *'],['first','First / co-first'],['cover','Cover art'],['hanbitsa','🇰🇷 한빛사']].map(([k,label]) => {
              const isActive = k === 'All' ? roleFilters.length === 0 : roleFilters.includes(k);
              return (
                <button key={k} onClick={() => toggleRole(k)} style={{
                  padding: '5px 10px', borderRadius: 5, fontSize: 16,
                  border: `1px solid ${isActive ? ink : line2}`,
                  background: isActive ? ink : 'white',
                  color: isActive ? 'white' : ink2,
                  cursor: 'pointer', fontFamily: 'inherit',
                }}>{label}</button>
              );
            })}
          </div>

          <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search title, author, journal…"
            style={{
              padding: '7px 12px', borderRadius: 6, border: `1px solid ${line2}`,
              fontSize: 16, fontFamily: 'inherit', width: 220, outline: 'none',
              marginLeft: 'auto',
            }}/>
          <div style={{ display: 'flex', gap: 2, padding: 2, background: 'white', borderRadius: 6, border: `1px solid ${line}` }}>
            {[['list','List'],['covers','Grid']].map(([v,label]) => (
              <button key={v} onClick={() => setView(v)} style={{
                padding: '5px 12px', borderRadius: 4, fontSize: 15,
                background: view === v ? ink : 'transparent',
                color: view === v ? 'white' : muted,
                border: 'none', cursor: 'pointer',
              }}>{label}</button>
            ))}
          </div>
        </div>
      </section>

      {/* List / covers */}
      <section style={{ padding: '0 40px 48px' }}>
        <div style={{ fontSize: 16, color: muted, marginBottom: 14 }}>
          Showing {filtered.length} of {all.length} papers
          {year !== 'All' && <> · year {year}</>}
          {roleFilters.length > 0 && <> · role: {roleFilters.join(' + ')}</>}
          {q && <> · "{q}"</>}
          <span style={{ marginLeft: 16, fontFamily: mono, fontSize: 14 }}>
            <span style={{ color: ink, fontWeight: 700 }}>Kim HJ</span> = PI ·{' '}
            <span style={{ borderBottom: `1.5px solid ${B.accent}` }}>name*</span> = corresponding
          </span>
        </div>

        {view === 'list' ? (
          <div>
            {sortedYears.map(y => (
              <div key={y} style={{ marginBottom: 28 }}>
                <div style={{
                  padding: '14px 0 10px', display: 'flex', alignItems: 'baseline', gap: 16,
                  borderBottom: `2px solid ${ink}`, marginBottom: 4,
                }}>
                  <div style={{ fontFamily: serif, fontStyle: 'italic', fontSize: 36, fontWeight: 600,
                    letterSpacing: -1, color: ink, lineHeight: 1, flexShrink: 0, marginRight: 8 }}>{y}</div>
                  <div style={{ fontSize: 15, color: muted, fontFamily: mono, letterSpacing: 1, textTransform: 'uppercase', paddingBottom: 4 }}>
                    {byYear[y].length} paper{byYear[y].length !== 1 ? 's' : ''}
                  </div>
                </div>
                {byYear[y].map(p => (
                  <PublicationRow key={p.n} p={p}/>
                ))}
              </div>
            ))}
            {filtered.length === 0 && (
              <div style={{ padding: 60, textAlign: 'center', color: muted, fontSize: 17,
                border: `1px dashed ${line2}`, borderRadius: 12 }}>
                No publications match these filters.
              </div>
            )}
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 18 }}>
            {filtered.map((p, i) => (
              <a key={p.n} href={p.link} target="_blank" style={{ cursor: 'pointer', display: 'block', minWidth: 0 }}>
                <JournalCover paper={{ date: `${p.y}.01`, journal: p.journal, cover: p.coverImg || null }} h={220} variant={i % 5}/>
                <div style={{ marginTop: 10 }}>
                  <div style={{ fontFamily: mono, fontSize: 14, color: B.accent, marginBottom: 2 }}>№{p.n} · {p.y}</div>
                  <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: -0.1, lineHeight: 1.3, marginBottom: 3 }}>{p.journal}</div>
                  <div style={{ fontSize: 15, color: ink2, lineHeight: 1.4,
                    display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {p.title}
                  </div>
                  <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginTop: 6 }}>
                    {p.corr && <PubBadge color={B.accent} solid>Corr</PubBadge>}
                    {p.first && <PubBadge color="#15803d" solid>First</PubBadge>}
                    {p.cofirst && <PubBadge color="#15803d" solid>Co-1st</PubBadge>}
                    {p.cover && <PubBadge color={B.accent2} solid>★ Cover</PubBadge>}
                    {p.hanbitsa && <HanbitsaBadge size="xs" topCited={p.hanbitsa === 'top-cited'}/>}
                    {p.IF && <PubBadge>IF {p.IF}</PubBadge>}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </section>
    </PageShell>
  );
}

function PublicationRow({ p }) {
  const [open, setOpen] = React.useState(false);
  const roleBadge = p.corr ? { label: 'Corresponding', color: B.accent }
    : p.first ? { label: 'First author', color: '#15803d' }
    : p.cofirst ? { label: 'Co-first', color: '#15803d' }
    : null;
  return (
    <div style={{
      padding: '18px 0', borderBottom: `1px solid ${line}`,
      display: 'grid', gridTemplateColumns: '72px 1fr 140px', gap: 20, alignItems: 'start',
    }}>
      {/* number + IF */}
      <div>
        <div style={{ fontFamily: mono, fontSize: 22, fontWeight: 600, color: muted,
          fontVariantNumeric: 'tabular-nums', lineHeight: 1 }}>{p.n}</div>
        {p.IF && (
          <div style={{
            marginTop: 10, display: 'inline-flex', flexDirection: 'column', alignItems: 'center',
            padding: '5px 9px 6px', borderRadius: 5, background: '#fff',
            border: `1.5px solid ${ink}`, lineHeight: 1,
          }}>
            <div style={{ fontSize: 8, fontFamily: mono, fontWeight: 700, letterSpacing: 1, color: muted, marginBottom: 3 }}>IF</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: ink, fontVariantNumeric: 'tabular-nums' }}>
              {p.IF}
            </div>
          </div>
        )}
      </div>

      {/* main */}
      <div style={{ minWidth: 0 }}>
        {/* top row: role badge + cover badge + hanbitsa */}
        {(roleBadge || p.cover || p.hanbitsa) && (
          <div style={{ display: 'flex', gap: 6, marginBottom: 8, flexWrap: 'wrap', alignItems: 'center' }}>
            {roleBadge && <PubBadge color={roleBadge.color} solid>{roleBadge.label}</PubBadge>}
            {p.cover && <PubBadge color={B.accent2} solid>★ Cover art</PubBadge>}
            {p.hanbitsa && <HanbitsaBadge size="sm" topCited={p.hanbitsa === 'top-cited'}/>}
          </div>
        )}
        <div style={{ fontSize: 18.5, fontWeight: 500, lineHeight: 1.4, letterSpacing: -0.2,
          color: ink, marginBottom: 6, cursor: 'pointer' }}
          onClick={() => setOpen(o => !o)}>
          {p.title}
        </div>
        <div style={{ fontSize: 16, color: ink2, lineHeight: 1.55, marginBottom: 8 }}>
          <AuthorList raw={p.authors}/>
        </div>
        <div>
          <span style={{ fontFamily: serif, fontSize: 19, fontStyle: 'italic', fontWeight: 600,
            color: B.accent, letterSpacing: -0.2 }}>{p.journal}</span>
          {p.vol && <span style={{ fontSize: 16, color: muted, marginLeft: 8 }}>· {p.vol}</span>}
        </div>
        {open && p.cover && (
          <div style={{
            marginTop: 10, padding: '8px 12px', background: bg2, borderRadius: 6,
            fontSize: 16, color: muted, fontStyle: 'italic',
          }}>★ {p.cover}</div>
        )}
      </div>

      {/* actions */}
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontFamily: mono, fontSize: 15, color: muted, marginBottom: 6 }}>{p.y}</div>
        {p.link && (
          <a href={p.link} target="_blank" style={{
            display: 'inline-block', padding: '5px 10px', borderRadius: 5,
            border: `1px solid ${line2}`, fontSize: 15, color: ink2, cursor: 'pointer',
          }}>Read ↗</a>
        )}
      </div>
    </div>
  );
}

function NewsLightbox({ item, onClose }) {
  // Normalize: support both `image` (single) and `images` (array)
  const imgs = item.images ? item.images : item.image ? [item.image] : [];
  const [idx, setIdx] = React.useState(0);
  const prev = () => setIdx(i => (i - 1 + imgs.length) % imgs.length);
  const next = () => setIdx(i => (i + 1) % imgs.length);

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && imgs.length > 1) prev();
      if (e.key === 'ArrowRight' && imgs.length > 1) next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [imgs.length]);

  const hasImages = imgs.length > 0;
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'rgba(0,0,0,0.88)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 24,
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: 'white', borderRadius: 14, overflow: 'hidden',
        maxWidth: 860, width: '100%', maxHeight: '90vh',
        display: 'flex', flexDirection: 'column',
        boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
      }}>
        {/* Image area */}
        {hasImages && (
          <div style={{ flex: '1 1 auto', background: '#0a0e14', position: 'relative',
            display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 200 }}>
            <img src={imgs[idx]} alt={item.title || item.text}
              style={{ maxWidth: '100%', maxHeight: '60vh', objectFit: 'contain', display: 'block' }}/>

            {/* Prev / Next arrows */}
            {imgs.length > 1 && (<>
              <button onClick={e => { e.stopPropagation(); prev(); }} style={{
                position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)',
                width: 40, height: 40, borderRadius: 999,
                background: 'rgba(255,255,255,0.18)', border: 'none', cursor: 'pointer',
                fontSize: 22, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                backdropFilter: 'blur(4px)',
              }}>‹</button>
              <button onClick={e => { e.stopPropagation(); next(); }} style={{
                position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
                width: 40, height: 40, borderRadius: 999,
                background: 'rgba(255,255,255,0.18)', border: 'none', cursor: 'pointer',
                fontSize: 22, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                backdropFilter: 'blur(4px)',
              }}>›</button>

              {/* Dot indicators */}
              <div style={{
                position: 'absolute', bottom: 12, left: 0, right: 0,
                display: 'flex', gap: 6, justifyContent: 'center',
              }}>
                {imgs.map((_, i) => (
                  <button key={i} onClick={e => { e.stopPropagation(); setIdx(i); }} style={{
                    width: i === idx ? 20 : 8, height: 8, borderRadius: 999, border: 'none',
                    background: i === idx ? 'white' : 'rgba(255,255,255,0.4)',
                    cursor: 'pointer', padding: 0, transition: 'all 0.2s',
                  }}/>
                ))}
              </div>

              {/* Counter */}
              <div style={{
                position: 'absolute', top: 10, right: 12,
                fontFamily: mono, fontSize: 14, letterSpacing: 1,
                color: 'rgba(255,255,255,0.7)', background: 'rgba(0,0,0,0.3)',
                padding: '3px 8px', borderRadius: 4,
              }}>{idx + 1} / {imgs.length}</div>
            </>)}
          </div>
        )}

        {/* Info panel */}
        <div style={{ padding: '20px 24px', borderTop: hasImages ? `1px solid ${line}` : 'none', flexShrink: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: mono, fontSize: 14, letterSpacing: 1.5, color: B.accent,
                textTransform: 'uppercase', marginBottom: 6 }}>{item.date} · {item.type}</div>
              {item.title && <div style={{ fontSize: 22, fontWeight: 700, color: ink, marginBottom: 6,
                letterSpacing: -0.3, lineHeight: 1.3 }}>{item.title}</div>}
              {item.journal && <div style={{ fontFamily: serif, fontStyle: 'italic', fontSize: 19,
                color: B.accent, marginBottom: 4 }}>{item.journal}</div>}
              {item.meta && <div style={{ fontFamily: mono, fontSize: 15, color: muted, marginBottom: 8 }}>{item.meta}</div>}
              {item.text && <div style={{ fontSize: 17, color: ink2, lineHeight: 1.6 }}>{item.text}</div>}
            </div>
            <button onClick={onClose} style={{
              flexShrink: 0, width: 28, height: 28, borderRadius: 999,
              border: `1px solid ${line2}`, background: bg2, cursor: 'pointer',
              fontSize: 18, color: muted, display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontFamily: 'inherit',
            }}>✕</button>
          </div>
          {item.link && (
            <a href={item.link} target="_blank" rel="noopener" style={{
              display: 'inline-block', marginTop: 12,
              padding: '7px 14px', borderRadius: 6,
              background: ink, color: 'white', fontSize: 16, fontFamily: mono,
              letterSpacing: 1, textTransform: 'uppercase',
            }}>Read paper →</a>
          )}
        </div>
      </div>
    </div>
  );
}

function NewsPage() {
  const w = useWinWidth();
  const isMobile = w < 900;
  const [filter, setFilter] = React.useState('All');
  const [yearFilter, setYearFilter] = React.useState('All');
  const [view, setView] = React.useState('timeline'); // timeline | gallery
  const [lightbox, setLightbox] = React.useState(null);
  const typeLabels = {
    All: 'All',
    paper: 'Papers & 한빛사',
    award: 'Awards',
    promote: 'Appointments',
    milestone: 'Milestones',
    event: 'Lab events',
    press: 'Press',
    member: 'Members',
  };
  const types = ['All','paper','award','promote','milestone','event','press','member'];
  const typeColor = (t) => ({
    paper: B.accent,
    award: B.accent2,
    promote: '#15803d',
    milestone: '#7c3aed',
    event: '#0891b2',
    press: '#be185d',
    member: '#0369a1',
  }[t] || ink2);

  // Available years derived from data
  const years = ['All', ...Array.from(new Set(newsFull.map(n => n.date.slice(0,4)))).sort().reverse()];

  const filtered = newsFull
    .filter(n => filter === 'All' || n.type === filter)
    .filter(n => yearFilter === 'All' || n.date.startsWith(yearFilter));
  const featured = newsFull.find(n => n.featured) || newsFull[0];

  return (
    <PageShell
      eyebrow="── NEWS ARCHIVE"
      titleEn="News & updates"
      titleKo="소식"
      intro={`from 2020 to present — 한빛사 선정 논문 22건, 석탑강의상·석탑연구상, citation milestones, 그리고 연구실 일상까지.`}
    >
      {lightbox && <NewsLightbox item={lightbox} onClose={() => setLightbox(null)}/>}
      {/* Featured card */}
      <section style={{ padding: '24px 56px 0' }}>
        <div onClick={() => (featured.image || featured.title) && setLightbox(featured)} style={{
          display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 0,
          border: `1px solid ${line}`, borderRadius: 12, overflow: 'hidden',
          background: 'white', cursor: 'pointer',
        }}>
          <div style={{ height: 320 }}>
            <NewsThumb item={featured} h="100%" label={false}/>
          </div>
          <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontFamily: mono, fontSize: 14, letterSpacing: 2, color: B.accent, marginBottom: 10 }}>
              ── FEATURED · {featured.date}
            </div>
            {featured.title && (
              <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.5, marginBottom: 10, lineHeight: 1.2 }}>
                {featured.title}
              </div>
            )}
            {featured.journal && (
              <div style={{ marginBottom: 8 }}>
                <div style={{ fontFamily: serif, fontSize: 22, fontStyle: 'italic', fontWeight: 700,
                  letterSpacing: -0.3, lineHeight: 1.15, color: B.accent, marginBottom: 6 }}>
                  {featured.journal}
                </div>
                {featured.meta && (
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {featured.meta.split(' · ').map((part, j) => (
                      <span key={j} style={{
                        fontSize: 15, fontFamily: mono, fontWeight: 700,
                        padding: '2px 8px', borderRadius: 4,
                        background: part.startsWith('IF') ? `${B.accent}15` : '#f0f9ff',
                        color: part.startsWith('IF') ? B.accent : '#0369a1',
                        letterSpacing: 0.3,
                      }}>{part}</span>
                    ))}
                  </div>
                )}
              </div>
            )}
            <div style={{ fontSize: 18, color: ink2, lineHeight: 1.55, marginBottom: 14 }}>{featured.text}</div>
            {featured.caption && (
              <div style={{ fontSize: 17, color: muted, lineHeight: 1.55, fontStyle: 'italic', borderLeft: `2px solid ${B.accent}`, paddingLeft: 12, marginBottom: 14 }}>
                {featured.caption}
              </div>
            )}
            {featured.link && (
              <a href={featured.link} target="_blank" rel="noopener" style={{
                alignSelf: 'flex-start', fontSize: 16, fontFamily: mono, letterSpacing: 1,
                padding: '8px 14px', borderRadius: 6, textDecoration: 'none',
                background: ink, color: 'white', textTransform: 'uppercase',
              }}>Read paper →</a>
            )}
          </div>
        </div>
      </section>

      <section style={{ padding: '24px 56px 40px' }}>
        {/* Year filter */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
          <div style={{ fontFamily: mono, fontSize: 14, letterSpacing: 1.5, color: muted,
            alignSelf: 'center', marginRight: 4, textTransform: 'uppercase' }}>Year</div>
          {years.map(y => (
            <button key={y} onClick={() => setYearFilter(y)} style={{
              padding: '5px 11px', borderRadius: 5, fontSize: 16,
              border: `1px solid ${yearFilter === y ? B.accent : line2}`,
              background: yearFilter === y ? B.accent : 'white',
              color: yearFilter === y ? 'white' : ink2,
              cursor: 'pointer', fontFamily: 'inherit',
              fontVariantNumeric: 'tabular-nums',
            }}>{y}</button>
          ))}
        </div>

        {/* Filter + view switcher */}
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 24, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {types.map(t => {
              const count = t === 'All' ? newsFull.length : newsFull.filter(n => n.type === t).length;
              return (
                <button key={t} onClick={() => setFilter(t)} style={{
                  padding: '6px 12px', borderRadius: 6, fontSize: 16,
                  border: `1px solid ${filter === t ? ink : line2}`,
                  background: filter === t ? ink : 'white',
                  color: filter === t ? 'white' : ink2,
                  cursor: 'pointer', fontFamily: 'inherit',
                }}>{typeLabels[t]} <span style={{ opacity: 0.6, marginLeft: 4 }}>· {count}</span></button>
              );
            })}
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 2, padding: 2, background: bg2, borderRadius: 6, border: `1px solid ${line}` }}>
            {[['timeline','Timeline'],['gallery','Gallery']].map(([v,label]) => (
              <button key={v} onClick={() => setView(v)} style={{
                padding: '5px 12px', borderRadius: 4, fontSize: 15,
                background: view === v ? 'white' : 'transparent',
                boxShadow: view === v ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
                border: 'none', color: view === v ? ink : muted, cursor: 'pointer',
              }}>{label}</button>
            ))}
          </div>
        </div>

        {view === 'gallery' ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {filtered.map((n, i) => (
              <div key={i} onClick={() => setLightbox(n)} style={{
                border: `1px solid ${line}`, borderRadius: 12, overflow: 'hidden',
                background: 'white', cursor: 'pointer',
                textDecoration: 'none', color: 'inherit', display: 'block',
              }}>
                <NewsThumb item={n} h={170}/>
                <div style={{ padding: 14 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, gap: 8 }}>
                    <span style={{
                      fontSize: 14, letterSpacing: 1, padding: '2px 7px', borderRadius: 3,
                      background: `${typeColor(n.type)}12`, color: typeColor(n.type),
                      fontFamily: mono, textTransform: 'uppercase', whiteSpace: 'nowrap',
                    }}>{n.type}</span>
                    <span style={{ fontFamily: mono, fontSize: 14, color: muted, whiteSpace: 'nowrap' }}>{n.date}</span>
                  </div>
                  {n.title && <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 4, letterSpacing: -0.2, lineHeight: 1.3 }}>{n.title}</div>}
                  {n.journal && <div style={{ fontFamily: serif, fontStyle: 'italic', fontSize: 17, color: ink2, marginBottom: 2 }}>{n.journal}</div>}
                  {n.meta && <div style={{ fontFamily: mono, fontSize: 14, color: muted, marginBottom: 6 }}>{n.meta}</div>}
                  {n.text && <div style={{ fontSize: 16, color: ink2, lineHeight: 1.5, marginTop: 4 }}>{n.text}</div>}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ position: 'relative', paddingLeft: 20 }}>
            <div style={{ position: 'absolute', left: 5, top: 8, bottom: 8, width: 2, background: line }} />
            {filtered.map((n, i) => (
              <div key={i} style={{
                position: 'relative', padding: '18px 0 22px 28px',
                borderBottom: i < filtered.length - 1 ? `1px solid ${line}` : 'none',
                cursor: (n.image || n.title) ? 'pointer' : 'default',
              }} onClick={() => setLightbox(n)}>
                <div style={{
                  position: 'absolute', left: -20, top: 26,
                  width: 12, height: 12, borderRadius: 999,
                  background: typeColor(n.type),
                  border: `3px solid white`, boxShadow: `0 0 0 1px ${line}`,
                }} />
                <div style={{ display: 'grid', gridTemplateColumns: '110px 200px 1fr', gap: 20, alignItems: 'start' }}>
                  <div style={{ fontFamily: mono, fontSize: 16, color: muted, paddingTop: 4 }}>{n.date}</div>
                  <div style={{ borderRadius: 8, overflow: 'hidden', border: `1px solid ${line}` }}>
                    <NewsThumb item={n} h={120}/>
                  </div>
                  <div>
                    <div style={{ display: 'inline-block', fontSize: 14, letterSpacing: 1,
                      padding: '2px 7px', marginBottom: 8, borderRadius: 3,
                      background: `${typeColor(n.type)}12`, color: typeColor(n.type),
                      fontFamily: mono, textTransform: 'uppercase',
                    }}>{n.type}</div>
                    {n.title && (
                      <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 6, letterSpacing: -0.3, lineHeight: 1.25 }}>
                        {n.title}
                      </div>
                    )}
                    {n.journal && (
                      <div style={{ marginBottom: 10 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 4 }}>
                          <span style={{
                            fontFamily: serif, fontStyle: 'italic', fontWeight: 700,
                            fontSize: 21, color: B.accent, letterSpacing: -0.2,
                          }}>{n.journal}</span>
                        </div>
                        {n.meta && (
                          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                            {n.meta.split(' · ').map((part, j) => (
                              <span key={j} style={{
                                fontSize: 15, fontFamily: mono, fontWeight: 700,
                                padding: '2px 8px', borderRadius: 4,
                                background: part.startsWith('IF') ? `${B.accent}15` : '#f0f9ff',
                                color: part.startsWith('IF') ? B.accent : '#0369a1',
                                letterSpacing: 0.3,
                              }}>{part}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                    {n.text && <div style={{ fontSize: 17, color: ink2, lineHeight: 1.6 }}>{n.text}</div>}
                    {n.caption && (
                      <div style={{ marginTop: 8, fontSize: 16, color: muted, fontStyle: 'italic', lineHeight: 1.5 }}>
                        {n.caption}
                      </div>
                    )}
                    {n.link && (
                      <a href={n.link} target="_blank" rel="noopener" style={{
                        display: 'inline-block', marginTop: 10, fontSize: 15, fontFamily: mono,
                        letterSpacing: 1, color: B.accent, textDecoration: 'none',
                        borderBottom: `1px solid ${B.accent}40`, paddingBottom: 1,
                      }}>Read paper →</a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </PageShell>
  );
}

function ContactPage() {
  const w = useWinWidth();
  const isMobile = w < 900;
  const email = 'hanjun at korea.ac.kr';
  return (
    <PageShell
      eyebrow="── CONTACT"
      titleEn="Get in touch"
      titleKo="연락처 · 모집 안내"
      intro="The Hanjun Kim Laboratory — Department of Pathophysiology & Preclinical Science, College of Pharmacy, Korea University."
    >
      {/* ── Address + Contact */}
      <section style={{ padding: '40px', borderBottom: `1px solid ${line}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          {/* Address */}
          <div>
            <div style={{ fontFamily: mono, fontSize: 15, letterSpacing: 2, color: B.accent, marginBottom: 10 }}>
              ── ADDRESS
            </div>
            <div style={{ fontSize: 18.5, lineHeight: 1.7, color: ink, marginBottom: 20 }}>
              Department of Pathophysiology & Preclinical Science<br/>
              College of Pharmacy, Korea University<br/>
              2511 Sejong-ro, Sejong 30019, Republic of Korea<br/>
              <span style={{
                fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 500,
                color: muted, fontSize: 17.5,
              }}>
                세종특별자치시 세종로 2511, 고려대학교 세종캠퍼스 약학대학
              </span>
            </div>

            <div style={{ display: 'grid', gap: 10 }}>
              {[
                ['Office',     'Room 504, Research Facility for the College of Pharmacy', '약학대학 연구실험동 504호'],
                ['Laboratory', 'Room 404, Research Facility for the College of Pharmacy', '약학대학 연구실험동 404호'],
              ].map(([label, en, ko]) => (
                <div key={label} style={{
                  padding: '14px 16px', border: `1px solid ${line}`, borderRadius: 8,
                  display: 'grid', gridTemplateColumns: '90px 1fr', gap: 14, alignItems: 'start',
                }}>
                  <div style={{ fontFamily: mono, fontSize: 14, letterSpacing: 1.5,
                    color: B.accent, fontWeight: 700, paddingTop: 2, textTransform: 'uppercase' }}>{label}</div>
                  <div>
                    <div style={{ fontSize: 17.5, color: ink, lineHeight: 1.45 }}>{en}</div>
                    <div style={{
                      fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 500,
                      fontSize: 16.5, color: muted, marginTop: 2,
                    }}>{ko}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact info + PI card */}
          <div>
            <div style={{ fontFamily: mono, fontSize: 15, letterSpacing: 2, color: B.accent, marginBottom: 10 }}>
              ── CONTACT INFO
            </div>
            <div style={{
              padding: 24, borderRadius: 12, color: 'white',
              background: `linear-gradient(135deg, ${B.accent} 0%, #6b1010 100%)`,
              marginBottom: 16,
            }}>
              <div style={{ fontFamily: mono, fontSize: 14, letterSpacing: 2, opacity: 0.8, marginBottom: 8 }}>
                PRINCIPAL INVESTIGATOR
              </div>
              <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.5, lineHeight: 1.2 }}>
                Hanjun Kim, Ph.D.
              </div>
              <div style={{
                fontFamily: serif, fontSize: 21, fontStyle: 'italic',
                opacity: 0.9, marginBottom: 16,
              }}>김한준 교수</div>
              <a style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '10px 14px', background: 'rgba(255,255,255,0.14)',
                border: '1px solid rgba(255,255,255,0.25)', borderRadius: 8,
                color: 'white', fontSize: 17.5, fontWeight: 500,
                fontFamily: mono, letterSpacing: 0.3,
              }}>
                <span style={{ opacity: 0.7 }}>✉</span>
                <span>{email}</span>
              </a>
            </div>
            <div style={{ fontSize: 15, color: muted, lineHeight: 1.6, padding: '0 2px' }}>
              ⚠ 본 홈페이지에 게시된 이메일 주소가 전자우편 수집 프로그램이나
              그밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부합니다.
            </div>
          </div>
        </div>
      </section>

      {/* ── Opportunities */}
      <section style={{ padding: '48px 56px', background: '#fafaf8', borderBottom: `1px solid ${line}` }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 28 }}>
            <div>
              <div style={{ fontFamily: mono, fontSize: 15, letterSpacing: 2, color: B.accent, marginBottom: 8 }}>
                ── OPPORTUNITIES
              </div>
              <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.6, margin: '0 0 6px' }}>
                Join the <em style={{ fontFamily: serif, fontStyle: 'italic', color: B.accent }}>Kim Lab</em>.
              </h2>
              <div style={{
                fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 500,
                fontSize: 20, color: muted, letterSpacing: -0.2,
              }}>
                함께 연구할 연구원을 찾고 있습니다.
              </div>
            </div>
          </div>

          <p style={{ fontSize: 18.5, lineHeight: 1.7, color: ink2, margin: '0 0 28px', maxWidth: 1100 }}>
            We welcome self-motivated and passionate postdocs, graduate students, undergraduate students,
            and visiting scholars/students to join our team. <strong style={{ color: ink }}>We hire the best and train the best.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {[
              {
                label: 'Graduate Students',
                ko: '대학원생 (석사 · 박사 · 통합과정)',
                status: 'closed',
                statusLabel: 'No openings · 2025 – 2026',
                desc: 'Admissions are currently paused for the 2025 and 2026 cycles. Future openings will be announced here.',
              },
              {
                label: 'Postdoctoral Researcher',
                ko: '박사후연구원',
                status: 'closed',
                statusLabel: 'No openings · 2025 – 2026',
                desc: 'No openings for 2025 and 2026. Exceptional candidates with fellowships may still inquire.',
              },
              {
                label: 'Undergraduate Students',
                ko: '학부연구생',
                status: 'open',
                statusLabel: 'Openings available',
                desc: 'Several openings for undergraduate researchers. Interested students should contact Dr. Kim directly with a brief CV and statement of interest.',
              },
              {
                label: 'Visiting Scholars / Students',
                ko: '방문 연구원 · 방문 학생',
                status: 'open',
                statusLabel: 'Open · international collaboration',
                desc: 'We welcome scholars and students with similar research interests to facilitate international collaboration. Please reference "Visiting Scholars/Students Application" in your email.',
              },
            ].map((o, i) => {
              const isOpen = o.status === 'open';
              return (
                <div key={i} style={{
                  padding: '20px 22px', background: 'white',
                  border: `1px solid ${line}`, borderRadius: 10,
                  borderLeft: `3px solid ${isOpen ? '#15803d' : '#9a9a94'}`,
                  display: 'flex', flexDirection: 'column', gap: 8,
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10 }}>
                    <div>
                      <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: -0.3, color: ink, lineHeight: 1.2 }}>
                        {o.label}
                      </div>
                      <div style={{
                        fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 500,
                        fontSize: 16.5, color: muted, marginTop: 2,
                      }}>{o.ko}</div>
                    </div>
                    <span style={{
                      fontSize: 14, fontFamily: mono, fontWeight: 700, letterSpacing: 0.8,
                      textTransform: 'uppercase', padding: '3px 8px', borderRadius: 3,
                      whiteSpace: 'nowrap', flexShrink: 0,
                      color: isOpen ? '#15803d' : '#6b6b65',
                      background: isOpen ? '#dcfce7' : '#f0efea',
                      border: `1px solid ${isOpen ? '#86efac' : '#d4d2c8'}`,
                    }}>
                      {isOpen ? '● Open' : '○ Closed'}
                    </span>
                  </div>
                  <div style={{ fontSize: 16.5, color: ink2, lineHeight: 1.55 }}>{o.desc}</div>
                  <div style={{
                    fontFamily: mono, fontSize: 14, letterSpacing: 1, color: muted,
                    paddingTop: 8, marginTop: 'auto', borderTop: `1px dashed ${line}`,
                  }}>
                    {o.statusLabel}
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{
            marginTop: 28, padding: '18px 22px', background: 'white',
            border: `1px dashed ${line2}`, borderRadius: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap',
          }}>
            <div style={{ fontSize: 17.5, color: ink2, lineHeight: 1.55 }}>
              Interested? Send a brief CV and a short note about your research interests —{' '}
              <span style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 500 }}>
                간단한 CV와 관심 분야를 이메일로 보내주세요.
              </span>
            </div>
            <a href={`mailto:${email}?subject=Inquiry%20from%20the%20website`} style={{
              padding: '10px 16px', borderRadius: 8, background: B.accent, color: 'white',
              fontSize: 17, fontWeight: 600, whiteSpace: 'nowrap',
            }}>
              Email Dr. Kim →
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

Object.assign(window, { ResearchPage, PeoplePage, PublicationsPage, NewsPage, ContactPage });
