import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Toolkit from './components/Toolkit.jsx';
import Work from './components/Work.jsx';

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <div id="home" tabIndex={-1} />
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Toolkit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
