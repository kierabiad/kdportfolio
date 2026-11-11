/* Monochrome project illustrations. Decorative only, so every variant is aria-hidden. */

function VisionArt() {
  return (
    <div className="project-art" aria-hidden="true">
      <span className="art-corner art-corner-tl" /><span className="art-corner art-corner-br" />
      <svg className="art-svg" viewBox="0 0 200 150">
        <path className="art-fill" d="M100 125C25 90 58 24 125 20c39 53 25 91-25 105Z" />
        <path className="art-detail" d="M93 130c-1-43 17-64 30-98M98 101 73 75m29 12 29-18m-20-5-15-17" />
      </svg>
      <span className="eyebrow art-label">Vision / Classify / Understand</span>
    </div>
  );
}

function AuthArt() {
  return (
    <div className="project-art" aria-hidden="true">
      <div className="auth-window">
        <div className="window-bar"><i /><i /><i /><span>auth.service</span></div>
        <div className="auth-code">
          <span>user.verify(email)</span>
          <span><b>✓</b>Identity confirmed</span>
          <span><b>→</b>Welcome back.</span>
        </div>
        <div className="auth-status"><span className="status-dot" />Access granted</div>
      </div>
    </div>
  );
}

function ShopArt() {
  return (
    <div className="project-art shop-art" aria-hidden="true">
      <span className="shop-word">Everyday<em>essentials.</em></span>
      <svg className="art-svg" viewBox="0 0 140 160">
        <path className="art-fill" d="m47 20 15-8q8 17 16 0l15 8 34 26-20 28-15-10v81H48V64L33 74 13 46Z" />
        <path className="art-detail" d="M62 12q8 26 16 0M49 125h43" />
      </svg>
      <span className="eyebrow art-label">The daily edit — 01</span>
    </div>
  );
}

const ART_BY_TYPE = { vision: VisionArt, auth: AuthArt, shop: ShopArt };

export default function ProjectArt({ type }) {
  const Art = ART_BY_TYPE[type];
  return Art ? <Art /> : null;
}
