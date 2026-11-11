import Icon from '../Icon.jsx';

export default function Footer() {
  return (
    <footer className="site-footer slab">
      <div className="shell footer-inner">
        <span className="wordmark">Kier Abiad<span aria-hidden="true">.</span></span>
        <p>© {new Date().getFullYear()} Kier Daryl Abiad</p>
        <a href="#home" className="back-to-top">Back to top <Icon name="up" size={16} /></a>
      </div>
    </footer>
  );
}
