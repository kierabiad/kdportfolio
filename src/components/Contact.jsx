import { profile } from '../data.js';
import Icon from '../Icon.jsx';
import { ExternalLink, SectionLabel } from './ui.jsx';

export default function Contact() {
  return (
    <section id="contact" tabIndex={-1} className="contact-section slab" aria-labelledby="contact-heading">
      <div className="shell">
        <SectionLabel number="05">Let’s build what’s next</SectionLabel>
        <h2 id="contact-heading">Have something<br /><em>in mind?</em></h2>
        <p className="contact-lede">A role, a collaboration, or a good technical conversation. I’d love to hear from you.</p>
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
