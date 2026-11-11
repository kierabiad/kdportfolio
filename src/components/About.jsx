import { SectionLabel } from './ui.jsx';

export default function About() {
  return (
    <section id="about" tabIndex={-1} className="section" aria-labelledby="about-heading">
      <div className="shell about-grid">
        <SectionLabel number="01">About</SectionLabel>
        <div>
          <h2 id="about-heading">Making complex things<br /><em>work beautifully.</em></h2>
          <div className="about-columns">
            <p>I’m a software engineer with hands-on experience in scalable backend systems, full-stack applications, and AI-powered tools. I work with Python, Django, React, and Docker to turn real problems into production-ready solutions.</p>
            <p>My approach is simple: understand the problem, build with care, and leave the codebase better than I found it. I thrive in collaborative, agile teams and I’m especially interested in cloud infrastructure and machine learning.</p>
          </div>
          <div className="education">
            <p className="eyebrow">Education</p>
            <div>
              <h3>Bachelor of Science in Computer Science</h3>
              <p>Technological Institute of the Philippines · Manila, PH</p>
            </div>
            <div className="education-meta">
              <span>Class of Aug 2025</span>
              <span>Cumulative GPA <strong>1.77</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
