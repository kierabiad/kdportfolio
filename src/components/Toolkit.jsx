import { skillGroups } from '../data.js';
import { SectionLabel } from './ui.jsx';

export default function Toolkit() {
  return (
    <section id="toolkit" tabIndex={-1} className="section" aria-labelledby="toolkit-heading">
      <div className="shell">
        <div className="section-head">
          <div>
            <SectionLabel number="04">Toolkit</SectionLabel>
            <h2 id="toolkit-heading">The right tools.<br /><em>The right foundation.</em></h2>
          </div>
          <p>A practical stack for taking an idea from the first commit to production.</p>
        </div>
        <div className="toolkit-list">
          {skillGroups.map((group, index) => (
            <div className="toolkit-row" key={group.name}>
              <span className="eyebrow">0{index + 1}</span>
              <h3>{group.name}</h3>
              <ul className="skill-list">{group.items.map(item => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
        <p className="learning-note">
          Always learning. Currently drawn to <strong>cloud infrastructure</strong> and <strong>machine learning.</strong>
        </p>
      </div>
    </section>
  );
}
