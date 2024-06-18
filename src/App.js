import React from 'react';
import './style.css';
//importam componentele de la react router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//importam paginile noastre
import { Home } from './pages/Home';
import { Users } from './pages/Users';
import { User } from './pages/User';
import { About } from './pages/About';
import { Page404 } from './pages/Page404';

//functia predefinita createBrowserRoute primeste ca argument un array de obiecte.

const router = createBrowserRouter([
  //fiecare ruta va fi un obiect cu cheile path si element, path reprezinta ruta( adica ce vedem noi in URL), iar element este pagina de React afisata pe ecran.
  {
    path: '/',
    element: <Home />,
    //pagina de 404 trebuie data ca valoare a errorEelement, pt pathul "/"
    errorElement: <Page404 />,
  },
  {
    path: '/users',
    element: <Users />,
  },
  {
    path: '/user/:id',
    element: <User />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

export default function App() {
  return (
    <div className="App primary">
      {/* folosim componenta importata RouterProvider, care necesita ca vloare a prop-ului router rezultatul apelului functiei createBrowserRouter ( de mai sus) */}
      <RouterProvider router={router} />
    </div>
  );
}
