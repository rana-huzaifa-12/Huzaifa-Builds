import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav1 from './components/Nav1';
import Nav2 from './components/Nav2';
import Footer from './components/Footer';

// Home page sections
import Hero from './components/Hero';
import Section2 from './components/Section2';
import ShowServices from './components/ShowServices';
import Work from './components/Work';
import Appreciation from './components/Appreciation';
import CounterSection from './components/Counter';
import LandingBlog from './components/LandingBlog';
import Ourmap from './components/Ourmap';

// Pages
import AboutSec1 from './components/AboutSec1';
import AboutSec2 from './components/AboutSec2';
import ServicesSec1 from './components/ServicesSec1';
import ServicesSec2 from './components/ServicesSec2';
import ProjectSec1 from './components/ProjectSec1';
import ProjectSec2 from './components/ProjectSec2';
import BlogSec1 from './components/BlogSec1';
import BlogSec2 from './components/BlogSec2';
import ContactSec1 from './components/ContactSec1';
import AboutTheDeveloper from './components/AboutTheDeveloper';

function App() {
  return (
    <Router>
      <Nav1 />
      <Nav2 />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about-the-developer" element={<AboutTheDeveloperPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

// Combined Pages
const Home = () => (
  <>
    <Hero />
    <Section2 />
    <ShowServices />
    <Work />
    <Appreciation />
    <CounterSection />
    <LandingBlog />
    <Ourmap />
  </>
);

const About = () => (
  <>
    <AboutSec1 />
    <AboutSec2 />
  </>
);

const Services = () => (
  <>
    <ServicesSec1 />
    <ServicesSec2 />
  </>
);

const Projects = () => (
  <>
    <ProjectSec1 />
    <ProjectSec2 />
  </>
);

const Blog = () => (
  <>
    <BlogSec1 />
    <BlogSec2 />
  </>
);

const Contact = () => (
  <>
    <ContactSec1 />
    <Ourmap />
  </>
);

const AboutTheDeveloperPage = () => (
  <>
    <AboutTheDeveloper />
  </>
);

export default App;
