import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './routes/Home';
import About from './routes/About';
import Work from './routes/Work';
import Contact from './routes/Contact';
import Lab from './routes/Lab';
import Writing from './routes/Writing';
import Teaching from './routes/Teaching';
import Resume from './routes/Resume';
import NotFound from './routes/NotFound';
import RouteErrorBoundary from './routes/RouteErrorBoundary';
import ErrorTest from './routes/ErrorTest';
import './index.css';

const devOnlyRoutes = import.meta.env.DEV ? [{ path: '__error-test', element: <ErrorTest /> }] : [];

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'work', element: <Work /> },
      { path: 'lab', element: <Lab /> },
      { path: 'writing', element: <Writing /> },
      { path: 'teaching', element: <Teaching /> },
      { path: 'resume', element: <Resume /> },
      { path: 'contact', element: <Contact /> },
      ...devOnlyRoutes,
      { path: '*', element: <NotFound /> },
    ],
  },
]);

const rootElement = document.getElementById('root');

if (rootElement === null) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
