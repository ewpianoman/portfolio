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
    </>
  );
}
