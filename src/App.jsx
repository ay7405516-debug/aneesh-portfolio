import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reelPlaying, setReelPlaying] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleReel = () => {
    setReelPlaying(!reelPlaying);
  };

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">

        <a href="#home" className="logo" onClick={closeMenu}>
          Aneesh<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="hire-btn">
          Hire Me
        </a>

        <button
          type="button"
          className={`menu-btn ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>

          <a
            href="#contact"
            className="mobile-hire"
            onClick={closeMenu}
          >
            Hire Me →
          </a>

        </div>

      </nav>


      {/* ================= HERO ================= */}
      <main id="home" className="hero-section">

        {/* ================= FULL HERO VIDEO ================= */}
<video
  className="hero-background-video"
  src="/videos/hero-aneesh.mp4"
  autoPlay
  muted
  loop
  playsInline
/>

        {/* Background decorative layer */}
        <div className="hero-bg">
          <div className="hero-grid"></div>
          <div className="hero-glow"></div>
          <div className="hero-circle"></div>
        </div>


        {/* Main Hero Content */}
        <div className="hero-content">

          <div className="hero-intro">
            <span className="intro-line"></span>
            <p>HELLO, I'M ANEESH YADAV</p>
          </div>

          <h1 className="hero-title">
            <span>Full Stack</span>
            <span className="outline-text">Developer.</span>
          </h1>

          <p className="hero-description">
            I create modern digital experiences with clean code,
            thoughtful design and powerful web technologies.
          </p>


          {/* Buttons */}
          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              View My Work
              <span>↗</span>
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
              <span>→</span>
            </a>

          </div>

        </div>


        {/* ================= REEL BUTTON ================= */}
        <button
          type="button"
          className={`reel-button ${reelPlaying ? "playing" : ""}`}
          onClick={toggleReel}
          aria-label={reelPlaying ? "Pause reel" : "Play reel"}
        >

          <span className="reel-ring"></span>

          <span className="reel-icon">
            {reelPlaying ? "Ⅱ" : "▶"}
          </span>

          <span className="reel-label">
            {reelPlaying ? "PAUSE REEL" : "PLAY REEL"}
          </span>

        </button>


        {/* ================= HERO META ================= */}
        <div className="hero-meta">

          <div>
            <span>BASED IN</span>
            <strong>INDIA</strong>
          </div>

          <div>
            <span>FOCUS</span>
            <strong>WEB / TECH</strong>
          </div>

        </div>


        {/* ================= SCROLL ================= */}
        <div className="scroll-down">

          <span className="scroll-line"></span>

          <span>SCROLL TO EXPLORE</span>

        </div>

      </main>


 {/* ================= ABOUT ================= */}
<section id="about" className="about-section">

  {/* LEFT — ID CARD */}
  <div className="about-visual">

    <div className="id-lanyard">
      <div className="lanyard-hook"></div>
      <div className="lanyard-line"></div>
    </div>

    <div className="about-card">

      <div className="id-top">
        <span>CREATIVE DEVELOPER</span>
        <span>AY — 01</span>
      </div>

      <div className="about-photo">
        <img
          src="/images/id-card-aneesh.jpg"
          alt="Aneesh Yadav"
        />
      </div>
      
      <br/>
      <div className="id-info">
        <strong>ANEESH YADAV</strong>
        <span>BCA STUDENT / DEVELOPER</span>
      </div>

      <div className="id-footer">
        <span>INDIA</span>
        <span>2026</span>
      </div>

    </div>

    <div className="star star-one">✦</div>
    <div className="star star-two">✦</div>
    <div className="star star-three">✦</div>

  </div>


  {/* RIGHT — ABOUT CONTENT */}
  <div className="about-content">

    <p className="section-tag">ABOUT ME</p>

    <h2>
      Hello<span>!</span>
    </h2>

    <p className="about-main-text">
      I'm <strong>Aneesh Yadav</strong>, a BCA student and aspiring
      developer passionate about technology, web development and
      cybersecurity.
    </p>

    <p>
      I enjoy learning new technologies, solving problems and turning
      creative ideas into useful digital experiences.
    </p>

    <p>
      My goal is to continuously improve my development skills and
      create modern, responsive and meaningful digital products.
    </p>


    {/* TECHNOLOGIES */}
    <div className="about-tech">

      <div className="tech-item">
        <div className="tech-icon">R</div>

        <div>
          <strong>React</strong>
          <span>Frontend</span>
        </div>
      </div>


      <div className="tech-item">
        <div className="tech-icon">N</div>

        <div>
          <strong>Node.js</strong>
          <span>Backend</span>
        </div>
      </div>


      <div className="tech-item">
        <div className="tech-icon">M</div>

        <div>
          <strong>MongoDB</strong>
          <span>Database</span>
        </div>
      </div>

    </div>

  </div>

</section>

  {/* ================= SKILLS ================= */}
<section id="skills" className="skills-section">

  <div className="skills-heading">

    <div>
      <p className="section-tag">MY SKILLS</p>

      <h2>
        Tools &amp;
        <br />
        <span>Technologies.</span>
      </h2>
    </div>

    <p className="skills-description">
      Technologies, programming languages and tools that I am
      learning and using throughout my development journey.
    </p>

  </div>


  <div className="skills-grid">

    {/* FRONTEND */}

    <article className="skill-card skill-featured">

      <div className="skill-top">
        <span className="skill-number">01</span>
        <span className="skill-category">FRONTEND</span>
      </div>

      <div className="skill-symbol">&lt;/&gt;</div>

      <h3>Web Development</h3>

      <p>
        Building responsive and modern web interfaces with
        clean structure and user-friendly design.
      </p>

      <div className="skill-tags">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>React</span>
      </div>

    </article>


    {/* PROGRAMMING */}

    <article className="skill-card">

      <div className="skill-top">
        <span className="skill-number">02</span>
        <span className="skill-category">PROGRAMMING</span>
      </div>

      <div className="skill-symbol">C++</div>

      <h3>Programming</h3>

      <p>
        Learning programming fundamentals, OOP concepts
        and problem solving.
      </p>

      <div className="skill-tags">
        <span>C</span>
        <span>C++</span>
        <span>Python</span>
        <span>Java</span>
      </div>

    </article>


    {/* TOOLS */}

    <article className="skill-card">

      <div className="skill-top">
        <span className="skill-number">03</span>
        <span className="skill-category">TOOLS</span>
      </div>

      <div className="skill-symbol">G</div>

      <h3>Development Tools</h3>

      <p>
        Using development and productivity tools to manage
        projects and improve my workflow.
      </p>

      <div className="skill-tags">
        <span>GitHub</span>
        <span>VS Code</span>
      </div>

    </article>


    {/* OFFICE & ACCOUNTING */}

    <article className="skill-card">

      <div className="skill-top">
        <span className="skill-number">04</span>
        <span className="skill-category">COMPUTER SKILLS</span>
      </div>

      <div className="skill-symbol">T</div>

      <h3>Computer Applications</h3>

      <p>
        Familiar with computer applications and basic
        accounting-related software.
      </p>

      <div className="skill-tags">
        <span>Tally</span>
        <span>ADCA</span>
        <span>MS Office</span>
      </div>

    </article>


    {/* CYBERSECURITY */}

    <article className="skill-card skill-wide">

      <div className="skill-top">
        <span className="skill-number">05</span>
        <span className="skill-category">INTEREST</span>
      </div>

      <div className="skill-symbol">01</div>

      <h3>Cybersecurity</h3>

      <p>
        Interested in cybersecurity and continuously exploring
        security concepts, technologies and practical projects.
      </p>

      <div className="skill-tags">
        <span>Security</span>
        <span>Networking</span>
        <span>Learning</span>
      </div>

    </article>

  </div>

</section>


     {/* ================= PROJECTS ================= */}
<section id="projects" className="projects-section">

  <div className="projects-heading">

    <div>
      <p className="section-tag">SELECTED WORK</p>

      <h2>
        Projects I
        <br />
        <span>have built.</span>
      </h2>
    </div>

    <p className="projects-intro">
      A collection of projects created while learning,
      experimenting and improving my development skills.
    </p>

  </div>


  <div className="projects-grid">

    {/* PROJECT 01 */}
    <article className="project-card featured-project">

      <div className="project-top">
        <span className="project-number">01</span>
        <span className="project-type">AI / SECURITY</span>
      </div>

      <div className="project-visual security-visual">
        <span>AI</span>
        <small>NIGHT SECURITY</small>
      </div>

      <div className="project-content">

        <h3>AI Night Security System</h3>

        <p>
          A modern security dashboard concept focused on
          AI-powered night surveillance, camera monitoring,
          threat detection and security alerts.
        </p>

        <div className="project-tech">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </div>

        <button type="button" className="project-btn">
          View Project <span>↗</span>
        </button>

      </div>

    </article>


    {/* PROJECT 02 */}
    <article className="project-card">

      <div className="project-top">
        <span className="project-number">02</span>
        <span className="project-type">WEB / REACT</span>
      </div>

      <div className="project-visual portfolio-visual">
        <span>AY</span>
        <small>PORTFOLIO</small>
      </div>

      <div className="project-content">

        <h3>Personal Portfolio</h3>

        <p>
          A responsive personal portfolio designed to showcase
          my skills, projects, learning journey and developer profile.
        </p>

        <div className="project-tech">
          <span>React</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </div>

        <button type="button" className="project-btn">
          View Project <span>↗</span>
        </button>

      </div>

    </article>


    {/* PROJECT 03 */}
    <article className="project-card">

      <div className="project-top">
        <span className="project-number">03</span>
        <span className="project-type">COMING SOON</span>
      </div>

      <div className="project-visual future-visual">
        <span>03</span>
        <small>IN DEVELOPMENT</small>
      </div>

      <div className="project-content">

        <h3>Future Project</h3>

        <p>
          A new project currently in development.
          More details will be added as the project progresses.
        </p>

        <div className="project-tech">
          <span>Coming Soon</span>
        </div>

        <button type="button" className="project-btn disabled-btn">
          Coming Soon
        </button>

      </div>

    </article>

  </div>

</section>


     {/* ================= CONTACT ================= */}
<section id="contact" className="contact-section">

  <div className="contact-inner">

    {/* LEFT */}
    <div className="contact-heading">

      <p className="section-tag">GET IN TOUCH</p>

      <h2>
        Let's build
        <br />
        something <span>great.</span>
      </h2>

      <p className="contact-description">
        Have a project idea, collaboration opportunity or
        simply want to connect? Feel free to reach out.
      </p>

    </div>


    {/* RIGHT */}
    <div className="contact-card">

      <div className="contact-card-top">
        <span>CONTACT</span>
        <span>AY — 01</span>
      </div>


      <div className="contact-item">

        <span className="contact-label">EMAIL</span>

        <a
          href="mailto:your-email@example.com"
          className="email-link"
        >
          your-email@example.com
        </a>

      </div>


      <div className="contact-item">

        <span className="contact-label">LOCATION</span>

        <strong>INDIA</strong>

      </div>


      <div className="contact-item">

        <span className="contact-label">STATUS</span>

        <strong className="available">
          <span></span>
          AVAILABLE FOR OPPORTUNITIES
        </strong>

      </div>


      <a
        href="mailto:your-email@example.com"
        className="contact-button"
      >
        Let's Talk
        <span>↗</span>
      </a>

    </div>

  </div>

</section>

    {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="footer-main">

          <div className="footer-brand">

            <a href="#home" className="footer-logo">
              Aneesh<span>.</span>
            </a>

            <p>
              BCA Student · Web Developer · Future Cybersecurity Professional
            </p>

          </div>

          <div className="footer-links">

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>

          </div>

          <a href="#home" className="back-top">
            BACK TO TOP
            <span>↑</span>
          </a>

        </div>

        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} Aneesh Yadav
          </span>

          <span>
            Built with React
          </span>

          <span>
            AY — 01
          </span>

        </div>

      </footer>

    </div>
  );
}

export default App;