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
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'work', element: <Work /> },
      { path: 'lab', element: <Lab /> },
      { path: 'writing', element: <Writing /> },
      { path: 'teaching', element: <Teaching /> },
      { path: 'resume', element: <Resume /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
