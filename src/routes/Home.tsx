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

      <section className="social-proof-section" aria-label="Social proof">
        <div className="social-proof-grid">
          <article className="social-proof-item">
            <i className="fa-solid fa-circle-check social-proof-icon" aria-hidden="true" />
            <h3 className="social-proof-title">Placeholder Result</h3>
            <p className="social-proof-subtitle">Add a short supporting metric here.</p>
          </article>
          <article className="social-proof-item">
            <i className="fa-solid fa-circle-check social-proof-icon" aria-hidden="true" />
            <h3 className="social-proof-title">Placeholder Result</h3>
            <p className="social-proof-subtitle">Add a short supporting metric here.</p>
          </article>
          <article className="social-proof-item">
            <i className="fa-solid fa-circle-check social-proof-icon" aria-hidden="true" />
            <h3 className="social-proof-title">Placeholder Result</h3>
            <p className="social-proof-subtitle">Add a short supporting metric here.</p>
          </article>
          <article className="social-proof-item">
            <i className="fa-solid fa-circle-check social-proof-icon" aria-hidden="true" />
            <h3 className="social-proof-title">Placeholder Result</h3>
            <p className="social-proof-subtitle">Add a short supporting metric here.</p>
          </article>
        </div>
      </section>
    </>
  );
}
