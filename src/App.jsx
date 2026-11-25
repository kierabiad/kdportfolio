import Profile, { Qualifications } from './components/Profile.jsx';
import Work from './components/Work.jsx';

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to projects</a>
      <div className="portfolio">
        <Profile />
        <main id="main" tabIndex={-1} className="work stack">
          <Work />
        </main>
        <Qualifications />
      </div>
      <footer className="site-footer">
        Kier Daryl Abiad · Design inspired by <a href="https://github.com/arifszn/gitprofile">GitProfile</a>
      </footer>
    </>
  );
}
