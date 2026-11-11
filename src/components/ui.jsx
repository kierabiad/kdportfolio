import Icon from '../Icon.jsx';

export function ExternalLink({ href, children, className = '' }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}<Icon size={17} />
    </a>
  );
}

export function SectionLabel({ number, children }) {
  return (
    <p className="eyebrow section-label">
      <span className="section-number">{number}</span><span>{children}</span>
    </p>
  );
}
