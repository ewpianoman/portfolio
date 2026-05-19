export default function Home(): JSX.Element {
  return (
    <section className="page-section page-home">
      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
      <div className='hero-text-block'>
        <div>
          <p className="hero-tagline">Builder  &middot; Musician &middot; Educator &middot; Writer &middot; Thinker</p>
        </div>
        <div>
          <h1 className="hero-headline">Music.</h1>
          <h1 className="hero-headline hero-headline-emphasis">Code.</h1>
          <h1 className="hero-headline">Teaching.</h1>
        </div>
        <div>
          <p className="hero-description">
            Hi, I'm Eric! I work at the intersection of music, education, and technology — building tools, writing, performing, and teaching toward a future where learning music is more accessible and more human.
          </p>
        </div>
      </div>
    </section>
  );
}
