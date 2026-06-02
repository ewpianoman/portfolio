import { Link } from 'react-router-dom';

export default function Home(): JSX.Element {
  return (
    <>
      <section className="page-section page-home">
        <div className="hero-layout">
          <div className="hero-text-block">
            <div>
              <p className="hero-tagline"><span className="hero-tagline-emphasis">Musician.</span> Building at the intersection of music, education, and technology.</p>
            </div>
            <div>
              <h1 className="hero-headline">Music.</h1>
              <h1 className="hero-headline hero-headline-emphasis">Code.</h1>
              <h1 className="hero-headline">Teaching.</h1>
            </div>
            <div>
              <p className="hero-description">
                I’m Eric. I work at the intersection of music, education, and technology. My work is informed by real-world teaching and product experience. I build tools, write, perform, and teach to make learning music more accessible and human.
              </p>
              <p className="hero-audience">For educators, builders, and anyone thinking about the future of music learning.</p>
            </div>
            <div className="hero-actions">
              <Link to="/work" className="hero-primary-button">
                View My Work
              </Link>
              <Link to="/contact" className="hero-contact-link">
                Contact Me
              </Link>
            </div>
          </div>

          <div className="hero-image-wrap" aria-hidden="true">
            <img className="hero-image" src="/images/half-hero-image.png" alt="" />
          </div>
        </div>
      </section>

      <section className="credentials-section" aria-label="Credentials">
        <div className="credentials-grid">
          <article className="credentials-item">
            <i className="fa-solid fa-graduation-cap credentials-icon" aria-hidden="true" />
            <h3 className="credentials-title">M.S. Music Technology</h3>
            <p className="credentials-subtitle">Music · Technology · Multimedia</p>
          </article>
          <article className="credentials-item">
            <i className="fa-solid fa-code credentials-icon" aria-hidden="true" />
            <h3 className="credentials-title">Software Engineer</h3>
            <p className="credentials-subtitle">Cloud apps & user-facing systems</p>
          </article>
          <article className="credentials-item">
            <i className="fa-solid fa-layer-group credentials-icon" aria-hidden="true" />
            <h3 className="credentials-title">Product & UI/UX</h3>
            <p className="credentials-subtitle">Design-led product development</p>
          </article>
          <article className="credentials-item">
            <i className="fa-solid fa-music credentials-icon" aria-hidden="true" />
            <h3 className="credentials-title">Pianist & Educator</h3>
            <p className="credentials-subtitle">15+ years teaching & performing</p>
          </article>
        </div>
      </section>
      <section className="work-preview-section" aria-label="Work preview">
        <p className="work-preview-section-eyebrow">What I Do</p>
        <p className="work-preview-section-tagline">My work lives at the intersection of music, technology, and how people learn.</p>
        
        <div className="work-preview-grid">
          <article className="work-preview-item">
            <div className="work-preview-meta">Performer · Arranger</div>
            <h3 className="work-preview-title">Music</h3>
            <p className="work-preview-description">I perform, record, and arrange piano music across jazz, gospel, classical, and blues. My album Hymns at the Piano is available on major streaming platforms.</p>
            <button className="work-preview-cta">Listen</button>
          </article>

          <article className="work-preview-item">
            <div className="work-preview-meta">Essays · Ideas</div>
            <h3 className="work-preview-title">Writing</h3>
            <p className="work-preview-description">I write about music education, technology, and the challenge of building meaningful work across disciplines. Essays and longer reflections are in progress.</p>
            <button className="work-preview-cta">Read Essays</button>
          </article>

          <article className="work-preview-item">
            <div className="work-preview-meta">Instruction · Curriculum</div>
            <h3 className="work-preview-title">Piano Studio</h3>
            <p className="work-preview-description">I’ve taught piano privately for over 15 years, working with students of all ages and levels in Southern Illinois and online.</p>
            <button className="work-preview-cta">Book a Lesson</button>
          </article>

          <article className="work-preview-item">
            <div className="work-preview-meta">Engineering · Open Source</div>
            <h3 className="work-preview-title">Tech Work</h3>
            <p className="work-preview-description">I’m a software engineer building healthcare products and exploring what better tools for music education and creative work could look like.</p>
            <button className="work-preview-cta">View Projects</button>
          </article>

          <article className="work-preview-item">
            <div className="work-preview-meta">Talks · Courses · Coaching</div>
            <h3 className="work-preview-title">Speaking</h3>
            <p className="work-preview-description">I’m available for conferences, panels, podcasts, and workshops focused on music education, technology, and the future of learning.</p>
            <button className="work-preview-cta">Inquire</button>
          </article>

          <blockquote className="work-preview-quote">
            <div className="work-preview-quote-inner">
              <div className="work-preview-quote-bar" aria-hidden="true" />
              <div className="work-preview-quote-body">
                <p>"Learning is my hobby and my superpower — especially at the intersection of arts, technology, and cognition."</p>
                <footer className="work-preview-quote-credit">— Eric Wilson</footer>
              </div>
            </div>
          </blockquote>
        </div>
      </section>
    </>
  );
}
