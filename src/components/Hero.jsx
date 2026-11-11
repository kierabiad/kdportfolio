import portrait from '../../kierportfolio.jpg.jfif';
import { heroFacts, profile } from '../data.js';
import Icon from '../Icon.jsx';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow availability"><span className="status-dot" />Open to opportunities</p>
          <h1 id="hero-heading">
            Good code.<br />Real-world<br /><em>impact.</em>
          </h1>
          <p className="hero-lede">
            I’m <strong>Kier Daryl Abiad</strong>, a software engineer building reliable backends, thoughtful web applications, and AI-powered tools.
          </p>
          <div className="hero-actions">
            <a href="#work" className="button button-solid">Explore my work <Icon name="down" size={18} /></a>
            <a href={profile.resume} download="Kier_Daryl_Abiad_Resume.pdf" className="button button-ghost">
              Download résumé <Icon name="download" size={18} />
            </a>
          </div>
        </div>

        <figure className="portrait">
          <div className="portrait-frame">
            <img src={portrait} alt="Kier Daryl Abiad" width="718" height="814" fetchPriority="high" />
          </div>
          <figcaption className="eyebrow"><span>Kier Daryl Abiad</span><span>Software &amp; AI Engineer</span></figcaption>
        </figure>

        <dl className="hero-facts">
          {heroFacts.map(({ label, value }) => (
            <div key={label}>
              <dt className="eyebrow">{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
