import portrait from '../../kierportfolio.jpg.jfif';
import { education, experience, profile, skillGroups } from '../data.js';
import Icon from '../Icon.jsx';
import ThemePicker from './ThemePicker.jsx';

const contactRows = [
  { label: 'Based in', icon: 'pin', text: profile.location },
  { label: 'GitHub', icon: 'github', text: 'kierabiad', href: profile.github },
  { label: 'LinkedIn', icon: 'linkedin', text: 'kier-abiad', href: profile.linkedin },
  { label: 'Email', icon: 'mail', text: profile.email, href: `mailto:${profile.email}` },
  { label: 'Phone', icon: 'phone', text: profile.phone, href: profile.phoneHref },
];

export default function Profile() {
  return (
    <header className="profile stack">
      <ThemePicker />
      <div className="card identity">
        <img src={portrait} alt={profile.name} width="128" height="128" />
        <h1>{profile.name}</h1>
        <p className="headline">{profile.headline}</p>
        <p className="bio">{profile.bio}</p>
        <a className="outline-button" href={profile.resume} download>
          <Icon name="download" size={15} /> Download résumé
        </a>
      </div>
      <dl className="card contact" aria-label="Contact details">
        {contactRows.map(({ label, icon, text, href }) => (
          <div key={label}>
            <dt><Icon name={icon} size={15} /> {label}:</dt>
            <dd>{href ? <a href={href}>{text}</a> : text}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}

export function Qualifications() {
  return (
    <aside className="qualifications stack" aria-label="Skills, work experience, and education">
      <section className="card sidebar-card" aria-labelledby="skills-heading">
        <h2 id="skills-heading">Tech Stack</h2>
        {skillGroups.map(group => (
          <div className="skill-group" key={group.name}>
            <h3>{group.name}</h3>
            <ul className="tags">{group.items.map(item => <li key={item}>{item}</li>)}</ul>
          </div>
        ))}
      </section>
      <section className="card sidebar-card" aria-labelledby="experience-heading">
        <h2 id="experience-heading">Experience</h2>
        <ol className="timeline">
          {experience.map(job => (
            <li key={job.role}>
              <p className="muted date">{job.date}</p>
              <h3>{job.role}</h3>
              <p>{job.company}</p>
              <p className="muted">{job.type} · {job.location}</p>
              <details>
                <summary>Role details<span className="sr-only"> for {job.role}</span></summary>
                <ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul>
              </details>
            </li>
          ))}
        </ol>
      </section>
      <section className="card sidebar-card" aria-labelledby="education-heading">
        <h2 id="education-heading">Education</h2>
        <div className="timeline">
          <div>
            <p className="muted date">{education.date}</p>
            <h3>{education.degree}</h3>
            <p>{education.school}</p>
            <p className="muted">{education.location} · GPA {education.gpa}</p>
          </div>
        </div>
      </section>
    </aside>
  );
}
