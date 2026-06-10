export default function About(): JSX.Element {
  return (
    <section className="page-section page-about">
      <div className="about-layout">
        <div className="about-content space-y-6">
          <h2>About</h2>
          <h3>ORIGIN</h3>
          <p>If learning were a superpower, I'd be ready for the Avengers.</p>

          <p>I graduated with a Music Education degree having taken exactly one web design class and one graphic design class my senior year. Within a couple of years I was teaching multiple levels of both subjects, plus a handful of other courses I had no business teaching — at least not on paper. That gap between what I knew and what I was being asked to do, and closing it fast enough that nobody noticed, became something of a recurring theme in my career.</p>
          <p>While finishing my Master's in Music Technology, I interned at a music education technology startup and eventually became their Director of Customer Success. I did a little of everything — sales demos, cold calling, conference presentations, website redesigns, Salesforce implementation, client onboarding. It was a crash course in how a small company actually runs, and the first time I got to watch music and technology genuinely intersect in a product people paid for.</p>
          <p>After that I moved into the classroom full time as a CS teacher. Over five years at two Indiana high schools I built programs from scratch and grew enrollment by 480%. I also had to teach basic and advanced accounting somewhere along the way — a subject I had never studied. I stayed a unit ahead in the textbook the whole year. Nobody failed. That's probably the most honest summary of how I operate: figure it out fast, don't let people down.</p>

          <h3>NOW</h3>
          <p>These days I'm a software engineer focused on frontend and full-stack development. React, React Native, Node.js, modern JavaScript — building web and mobile applications that real people depend on. At TrueRx Health Strategists I've helped ship a patient-facing mobile app and web portal, built out CI/CD pipelines, led design system architecture, and driven our ServiceNow adoption.</p>
          <p>I went back to school and earned a Master's in Music Technology from IUPUI, studying the overlap between music, technology, and multimedia design. Both degrees summa cum laude, which I mention not to brag but because I worked hard for them and they mean something to me.</p>
          <p>I still teach piano. Fifteen-plus years and counting. It keeps me close to what it actually feels like to be a learner, which I think makes me a better engineer than I'd otherwise be.</p>

          <h3>BUILDING TOWARD</h3>
          <p>Everything I've done points in the same direction: music, education, and technology, and the places where those three things run into each other. I'm working toward building a music education technology company — tools that make learning music better. The engineer in me wants to solve the problem. The teacher in me knows what the problem actually feels like. The musician in me won't let either of them forget why it matters.</p>
          <p>In the meantime I'm writing, performing, speaking, and building in public. If any of that sounds interesting — whether you're a prospective piano student, a fellow engineer, an educator curious about technology, or someone building in this space — I'd love to connect.</p>
        </div>

        <aside className="about-fixed-image-column" aria-hidden="true">
          <div className="about-fixed-image-frame">
            <img className="about-fixed-image" src="/images/eric-trx-headshot.png" alt="" />
          </div>
        </aside>
      </div>
    </section>
  );
}
