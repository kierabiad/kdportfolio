import { experience } from '../data.js';
import Icon from '../Icon.jsx';
import { SectionLabel } from './ui.jsx';

export default function Experience() {
  return (
    <section id="experience" tabIndex={-1} className="section" aria-labelledby="experience-heading">
      <div className="shell">
        <div className="section-head">
          <div>
            <SectionLabel number="02">Experience</SectionLabel>
            <h2 id="experience-heading">Learning by <em>building.</em></h2>
          </div>
          <p>From infrastructure fundamentals to production-ready software.</p>
        </div>
        <div className="experience-list">
          {experience.map((job, index) => (
            <details className="experience-item" key={`${job.company}-${job.role}`} open={index === 0}>
              <summary>
                <span className="experience-date">{job.date}</span>
                <div className="experience-title">
                  <span className="eyebrow">{job.company}</span>
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
      </div>
    </section>
  );
}
