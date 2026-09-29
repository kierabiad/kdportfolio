import { useEffect, useRef, useState } from 'react';
import portrait from '../kierportfolio.jpg.jfif';
import { experience, profile, projects, skillGroups } from './data.js';
import Icon from './Icon.jsx';

const navItems = [['About', 'about'], ['Experience', 'experience'], ['Work', 'work'], ['Toolkit', 'toolkit']];

function ExternalLink({ href, children, className = '' }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}<Icon size={17} />
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  const menuButton = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = event => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  function toggleTheme() {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    document.querySelector('meta[name="theme-color"]').content = next === 'dark' ? '#191c19' : '#f5f4ee';
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Storage is optional; theme changes still work for the current page.
    }
  }

  function closeMenu(id) {
    setMenuOpen(false);
    if (menuOpen) document.getElementById(id)?.focus({ preventScroll: true });
  }

  return (
    <header className="site-header">
      <nav className="shell nav-inner" aria-label="Main navigation">
        <a href="#home" className="wordmark" aria-label="Kier Daryl Abiad — home" onClick={() => closeMenu('home')}>
          kda<span>.</span>
        </a>
        <span className="nav-caption">SOFTWARE & AI ENGINEER</span>
        <div id="navigation-links" className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => closeMenu(id)}>{label}</a>
          ))}
          <a href="#contact" className="mobile-contact" onClick={() => closeMenu('contact')}>
            Let’s talk <Icon size={16} />
          </a>
        </div>
        <div className="nav-actions flex items-center gap-3">
          <button
            type="button"
            className="icon-button theme-button"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            onClick={toggleTheme}
          >
            <Icon name={theme === 'light' ? 'moon' : 'sun'} size={19} />
          </button>
          <a href="#contact" className="nav-contact" onClick={() => closeMenu('contact')}>
            Let’s talk <Icon size={16} />
          </a>
          <button
            ref={menuButton}
            type="button"
            className="icon-button menu-button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="navigation-links"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </nav>
    </header>
  );
}

function SectionLabel({ number, children, light = false }) {
  return (
    <div className={`eyebrow section-label ${light ? 'on-dark' : ''}`}>
      <span>{number}</span><span>{children}</span>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero shell" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <div className="availability"><span className="status-dot" />OPEN TO OPPORTUNITIES</div>
        <h1 id="hero-heading">
          Good code.<br />Real-world<br /><em>impact.</em>
          <span className="hero-asterisk" aria-hidden="true">✳</span>
        </h1>
        <div className="hero-intro">
          <span className="intro-rule" />
          <p>I’m <strong>Kier Daryl Abiad</strong>, a software engineer building reliable backends, thoughtful web applications, and AI-powered tools.</p>
        </div>
        <div className="hero-actions flex flex-wrap items-center gap-5">
          <a href="#work" className="button button-dark">Explore my work <Icon name="down" size={18} /></a>
          <a href={profile.resume} download="Kier_Daryl_Abiad_Resume.pdf" className="text-link">Download résumé <Icon name="download" size={18} /></a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="photo-topline eyebrow"><span>A BUILDER AT HEART</span><span>PH / 01</span></div>
        <div className="portrait-frame">
          <img src={portrait} alt="Kier Daryl Abiad" width="1363" height="1469" fetchPriority="high" />
          <div className="portrait-grain" />
          <div className="portrait-caption"><span>Kier Daryl Abiad</span><span>Software & AI Engineer</span></div>
          <div className="portrait-corner" aria-hidden="true"><Icon size={36} /></div>
        </div>
        <div className="location-note"><Icon name="pin" size={17} /><span>Imus City, Cavite, Philippines</span><span className="location-line" /></div>
        <div className="build-note"><Icon name="code" size={18} /><span>Built with intention.<br /><strong>From the backend up.</strong></span></div>
      </div>
      <div className="hero-bottom">
        <span className="eyebrow">BACKEND LOGIC. FRONTEND CARE. AI CURIOSITY.</span>
        <a href="#about" className="scroll-cue">A little more about me <Icon name="down" size={16} /></a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" tabIndex={-1} className="section shell about-section" aria-labelledby="about-heading">
      <div className="about-sidebar">
        <SectionLabel number="01">THE PERSON BEHIND THE CODE</SectionLabel>
        <div className="about-symbol" aria-hidden="true">&lt; / &gt;</div>
        <p className="small-note">Curious by nature.<br />An engineer by practice.</p>
      </div>
      <div className="about-main">
        <h2 id="about-heading">Making complex things<br /><em>work beautifully.</em></h2>
        <div className="about-paragraphs grid md:grid-cols-2 gap-7">
          <p>I’m a software engineer with hands-on experience in scalable backend systems, full-stack applications, and AI-powered tools. I work with Python, Django, React, and Docker to turn real problems into production-ready solutions.</p>
          <p>My approach is simple: understand the problem, build with care, and leave the codebase better than I found it. I thrive in collaborative, agile teams and I’m especially interested in cloud infrastructure and machine learning.</p>
        </div>
        <div className="education-block">
          <div className="education-label eyebrow">THE FOUNDATION<Icon name="arrow" size={18} /></div>
          <div>
            <h3>Bachelor of Science in Computer Science</h3>
            <p>Technological Institute of the Philippines <span>· Manila, PH</span></p>
          </div>
          <div className="education-meta">
            <span>Class of Aug 2025</span><span>Cumulative GPA <strong>1.77</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" tabIndex={-1} className="experience-section section" aria-labelledby="experience-heading">
      <div className="shell">
        <div className="section-heading">
          <div>
            <SectionLabel number="02">THE JOURNEY SO FAR</SectionLabel>
            <h2 id="experience-heading">Learning by <em>building.</em></h2>
          </div>
          <p>From infrastructure fundamentals<br />to production-ready software.</p>
        </div>
        <div className="experience-list">
          {experience.map((job, index) => (
            <details className="experience-item" key={`${job.company}-${job.role}`} open={index === 0}>
              <summary>
                <div className="experience-date"><span className="timeline-dot" /><span>{job.date}</span></div>
                <div className="experience-title">
                  <span className="eyebrow company-name">{job.company}</span>
                  <h3>{job.role}</h3>
                </div>
                <span className="experience-type">{job.type}</span>
                <span className="expand-icon" aria-hidden="true" />
              </summary>
              <div className="experience-body">
                <div className="experience-location"><Icon name="pin" size={15} />{job.location}</div>
                <div>
                  <ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul>
                  <div className="tags">{job.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
              </div>
            </details>
          ))}
        </div>
        <div className="experience-footnote">
          <span className="status-dot" /><span>Clean code. Clear documentation. Better collaboration.</span>
        </div>
      </div>
    </section>
  );
}

function MigrationVisual() {
  return (
    <div
      className="migration-visual"
      aria-label="Migration workflow: Slack conversation logs and attachments are transferred to Google Chat with data integrity checks"
      role="img"
    >
      <div className="diagram-caption eyebrow"><span>MIGRATION WORKFLOW</span><span>01 — 03</span></div>
      <div className="migration-flow">
        <div className="flow-node">
          <div className="slack-mark" aria-hidden="true">#</div>
          <span>Slack</span><small>Conversations + files</small>
        </div>
        <div className="flow-connector"><span /><Icon name="right" size={16} /></div>
        <div className="flow-engine">
          <Icon name="code" size={27} /><span>TRANSFER</span><small>Validate · Migrate</small>
        </div>
        <div className="flow-connector"><span /><Icon name="right" size={16} /></div>
        <div className="flow-node">
          <div className="chat-mark" aria-hidden="true"><span /><span /></div>
          <span>Google Chat</span><small>History preserved</small>
        </div>
      </div>
      <div className="migration-result">
        <span><Icon name="check" size={15} />Data integrity verified</span><span>100%</span>
      </div>
      <span className="diagram-note">Conceptual workflow · not a product screenshot</span>
    </div>
  );
}

function ProjectVisual({ type }) {
  if (type === 'vision') {
    return (
      <div className="project-art vision-art" aria-hidden="true">
        <div className="scan-corner top-left" /><div className="scan-corner bottom-right" />
        <svg viewBox="0 0 200 150">
          <path d="M100 125C25 90 58 24 125 20c39 53 25 91-25 105Z" fill="#adc49a" />
          <path d="M93 130c-1-43 17-64 30-98M98 101 73 75m29 12 29-18m-20-5-15-17" fill="none" stroke="#355841" strokeWidth="2" />
        </svg>
        <span className="art-label">VISION / CLASSIFY / UNDERSTAND</span>
      </div>
    );
  }
  if (type === 'auth') {
    return (
      <div className="project-art auth-art" aria-hidden="true">
        <div className="auth-window">
          <div className="window-dots"><i /><i /><i /><span>auth.service</span></div>
          <div className="auth-code">
            <span>user.verify(email)</span>
            <span><b>✓</b> Identity confirmed</span>
            <span><b>→</b> Welcome back.</span>
          </div>
          <div className="auth-status"><span className="status-dot" />ACCESS GRANTED</div>
        </div>
      </div>
    );
  }
  return (
    <div className="project-art shop-art" aria-hidden="true">
      <span className="shop-word">EVERYDAY<br /><em>essentials.</em></span>
      <svg viewBox="0 0 140 160">
        <path d="m47 20 15-8q8 17 16 0l15 8 34 26-20 28-15-10v81H48V64L33 74 13 46Z" fill="#e7e2d5" stroke="#b8b2a3" strokeWidth="1.5" />
        <path d="M62 12q8 26 16 0M49 125h43" stroke="#b8b2a3" fill="none" />
      </svg>
      <span className="shop-tag">THE DAILY EDIT — 01</span>
    </div>
  );
}

function Work() {
  return (
    <section id="work" tabIndex={-1} className="work-section section" aria-labelledby="work-heading">
      <div className="shell">
        <div className="section-heading">
          <div>
            <SectionLabel number="03" light>SELECTED WORK</SectionLabel>
            <h2 id="work-heading">A few things <em>I’ve built.</em></h2>
          </div>
          <ExternalLink href={profile.github} className="text-link">Explore my GitHub</ExternalLink>
        </div>
        <article className="featured-project">
          <div className="featured-copy">
            <div className="project-kicker eyebrow"><span>01 / FEATURED</span><span>ENGINEERING AT MIND YOU</span></div>
            <h3>Moving conversations.<br /><em>Keeping the context.</em></h3>
            <p>A custom Slack-to-Google Chat migration tool that securely transferred legacy conversation logs and attachments, without losing the details that matter.</p>
            <div className="project-metrics">
              <div><strong>40+</strong><span>Channel conversation logs</span></div>
              <div><strong>100%</strong><span>Data integrity</span></div>
            </div>
            <div className="tags"><span>Migration tooling</span><span>Data integrity</span><span>Automation</span></div>
          </div>
          <MigrationVisual />
        </article>
        <div className="project-grid grid md:grid-cols-3 gap-7">
          {projects.map(project => (
            <article className="project" key={project.number}>
              <ProjectVisual type={project.visual} />
              <div className="project-description">
                <div className="project-kicker eyebrow"><span>{project.number}</span><span>{project.category}</span></div>
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p>{project.description}</p>
                <div className="project-tech">{project.tags.join(' / ')}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Toolkit() {
  return (
    <section id="toolkit" tabIndex={-1} className="toolkit-section section shell" aria-labelledby="toolkit-heading">
      <div className="section-heading">
        <div>
          <SectionLabel number="04">THE TOOLKIT</SectionLabel>
          <h2 id="toolkit-heading">The right tools.<br /><em>The right foundation.</em></h2>
        </div>
        <p>A practical stack for taking an idea<br />from the first commit to production.</p>
      </div>
      <div className="toolkit-grid grid md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <div className="skill-group" key={group.name}>
            <div className="skill-group-top"><Icon name={group.icon} size={25} /><span className="eyebrow">0{index + 1}</span></div>
            <h3>{group.name}</h3>
            <ul className="skill-list">{group.items.map(item => <li key={item}>{item}</li>)}</ul>
          </div>
        ))}
      </div>
      <div className="learning-note">
        <Icon name="spark" size={20} />
        <span>Always learning. Currently drawn to <strong>cloud infrastructure</strong> and <strong>machine learning.</strong></span>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" tabIndex={-1} className="contact-section" aria-labelledby="contact-heading">
      <div className="shell">
        <SectionLabel number="05">LET’S BUILD WHAT’S NEXT</SectionLabel>
        <div className="contact-main">
          <div>
            <h2 id="contact-heading">Have something<br /><em>in mind?</em></h2>
            <p>A role, a collaboration, or a good technical conversation.<br />I’d love to hear from you.</p>
          </div>
          <a href={`mailto:${profile.email}`} className="contact-arrow" aria-label="Email Kier about an opportunity">
            <Icon size={72} />
          </a>
        </div>
        <div className="contact-bottom">
          <a className="email-link" href={`mailto:${profile.email}`}>{profile.email}<Icon size={24} /></a>
          <div className="contact-socials">
            <ExternalLink href={profile.github}>GitHub</ExternalLink>
            <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
            <a href="tel:+639626614618">+63 962 661 4618<Icon size={17} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <div id="home" tabIndex={-1} />
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <div className="stack-strip">
          <div className="shell">
            <span className="eyebrow">IDEAS INTO IMPLEMENTATION</span>
            <div>
              <span>Python</span><i aria-hidden="true">✳</i>
              <span>Django</span><i aria-hidden="true">✳</i>
              <span>React</span><i aria-hidden="true">✳</i>
              <span>Docker</span><i aria-hidden="true">✳</i>
              <span>PostgreSQL</span>
            </div>
          </div>
        </div>
        <About />
        <Experience />
        <Work />
        <Toolkit />
        <Contact />
      </main>
      <footer className="site-footer shell">
        <a href="#home" className="wordmark" aria-label="Back to top">kda<span>.</span></a>
        <p>© {new Date().getFullYear()} Kier Daryl Abiad</p>
        <span>MADE WITH CARE. BUILT TO MATTER.</span>
        <a href="#home" className="back-to-top">Back to top <Icon name="arrow" size={16} /></a>
      </footer>
    </>
  );
}
