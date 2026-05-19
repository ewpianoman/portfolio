import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';

export default function RouteErrorBoundary(): JSX.Element {
  const error = useRouteError();

  let title = 'Something went wrong';
  let message = 'An unexpected error interrupted this page.';
  let statusLabel = 'Error';

  if (isRouteErrorResponse(error)) {
    statusLabel = `${error.status}`;
    title = error.status === 404 ? 'Page not found' : error.statusText || title;
    message =
      typeof error.data === 'string' && error.data.trim().length > 0
        ? error.data
        : error.status === 404
        ? 'The page you requested could not be found.'
        : message;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div className="app-shell min-h-screen bg-background text-text">
      <main className="app-content">
        <section className="page-section page-error-boundary">
          <div className="rounded-[1.5rem] border border-border bg-surface p-10 shadow-xl shadow-black/10">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-subtleText">
              {statusLabel}
            </p>
            <h1>{title}</h1>
            <p className="mt-4 max-w-2xl text-subtleText">{message}</p>
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
      </main>
    </div>
  );
}
