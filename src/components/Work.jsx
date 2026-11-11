import { profile, projects } from '../data.js';
import MigrationVisual from './MigrationVisual.jsx';
import ProjectArt from './ProjectArt.jsx';
import { ExternalLink, SectionLabel } from './ui.jsx';

export default function Work() {
  return (
    <section id="work" tabIndex={-1} className="section" aria-labelledby="work-heading">
      <div className="shell">
        <div className="section-head">
          <div>
            <SectionLabel number="03">Selected work</SectionLabel>
            <h2 id="work-heading">A few things <em>I’ve built.</em></h2>
          </div>
          <ExternalLink href={profile.github} className="text-link">Explore my GitHub</ExternalLink>
        </div>

        <article className="featured-project">
          <div className="featured-copy">
            <div className="eyebrow project-kicker"><span>01 / Featured</span><span>Engineering at Mind You</span></div>
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

        <div className="project-grid">
          {projects.map(project => (
            <article className="project" key={project.number}>
              <ProjectArt type={project.visual} />
              <div className="project-description">
                <div className="eyebrow project-kicker"><span>{project.number}</span><span>{project.category}</span></div>
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p>{project.description}</p>
                <p className="project-tech">{project.tags.join(' / ')}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
