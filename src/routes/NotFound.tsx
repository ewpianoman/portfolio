import { Link } from 'react-router-dom';

export default function NotFound(): JSX.Element {
  return (
    <section className="page-section page-not-found">
      <div className="rounded-[1.5rem] border border-border bg-surface p-10 shadow-xl shadow-black/10">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-subtleText">404</p>
        <h1>Page not found</h1>
        <p className="mt-4 max-w-2xl text-subtleText">
          The page you were looking for does not exist or may have moved.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white transition-colors hover:bg-primaryHover"
          >
            Return home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-md border border-border px-4 py-2 text-text transition-colors hover:border-primary hover:text-primary"
          >
            Contact Eric
          </Link>
        </div>
      </div>
    </section>
  );
}
