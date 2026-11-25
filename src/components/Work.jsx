import Icon from '../Icon.jsx';
import { businessProject, certifications, profile, projects, repositories } from '../data.js';

function WorkSection({ id, icon, logo, title, description, children }) {
  return (
    <section className="work-panel" aria-labelledby={id}>
      <div className="panel-heading">
        <div className={logo ? 'panel-icon panel-logo' : 'panel-icon'}>
          {logo ? <img src={logo} alt="" width="48" height="48" /> : <Icon name={icon} size={23} />}
        </div>
        <div>
          <h2 id={id}>{title}</h2>
          <p className="muted">{description}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

function FeaturedProject() {
  const project = businessProject;
  const previewAlt = 'Abiad Residences homepage showing Liora Homes and links to explore homes or arrange a viewing';
  return (
    <article className="card featured-project">
      <div className="project-preview">
        <img className="preview-light" src={project.image} alt={previewAlt} width="1120" height="662" loading="lazy" />
        <img className="preview-dark" src={project.darkImage} alt={previewAlt} width="1120" height="662" loading="lazy" />
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tags">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        <a className="outline-button" href={project.url} target="_blank" rel="noreferrer">
          Visit Abiad Residences <Icon name="arrow" size={15} />
        </a>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <>
      <WorkSection id="featured-heading" logo={businessProject.logo} title="Featured Project" description="A live website for our rental business">
        <FeaturedProject />
      </WorkSection>
      <WorkSection id="github-heading" icon="github" title="GitHub Projects" description="Selected public repositories">
        <div className="project-grid">
          {repositories.map(repo => (
            <article className="card project-body repo" key={repo.name}>
              <h3>
                <a href={`${profile.github}/${repo.name}`}><Icon name="link" size={16} /> {repo.name}</a>
              </h3>
              <p>{repo.description}</p>
              <p className="repo-language"><span className={repo.language.toLowerCase()} />{repo.language}</p>
            </article>
          ))}
        </div>
      </WorkSection>
      <WorkSection id="projects-heading" icon="code" title="More Projects" description="Professional and personal work">
        <div className="project-grid">
          <article className="card project-body">
            <h3>Slack-to-Google Chat migration</h3>
            <p>Built a migration tool at Mind You that transferred conversation logs and attachments from 40+ channels with 100% data integrity.</p>
            <ul className="tags"><li>Python</li><li>Django</li><li>Docker</li></ul>
          </article>
          {projects.map(project => (
            <article className="card project-body" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tags">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
            </article>
          ))}
        </div>
      </WorkSection>
      <WorkSection id="certifications-heading" icon="award" title="Licenses & Certifications" description="Credentials from DataCamp, Anthropic, and Udemy">
        <div className="project-grid">
          {certifications.map(({ title, issuer, issued, expires, url }) => (
            <article className="card project-body credential" key={url}>
              <h3>{title}</h3>
              <p>{issuer}</p>
              <p className="muted">Issued {issued}{expires && ` · Expires ${expires}`}</p>
              <a
                href={url}
                className="outline-button"
                target="_blank"
                rel="noreferrer"
                aria-label={`View credential: ${title}`}
              >
                View credential <Icon name="arrow" size={15} />
              </a>
            </article>
          ))}
        </div>
      </WorkSection>
    </>
  );
}
