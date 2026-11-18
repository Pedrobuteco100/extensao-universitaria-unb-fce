import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import PalliativeCare from '../pages/PalliativeCare.jsx';
import PatientsFamilies from '../pages/PatientsFamilies.jsx';
import Contact from '../pages/Contact.jsx';
import NotFound from '../pages/NotFound.jsx';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'sobre', element: <About /> },
      { path: 'cuidados-paliativos', element: <PalliativeCare /> },
      { path: 'pacientes-familias', element: <PatientsFamilies /> },
      { path: 'contato', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
