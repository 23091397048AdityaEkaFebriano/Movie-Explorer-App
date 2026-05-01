import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Favorites from '../pages/Favorites';
import MovieDetail from '../pages/MovieDetail';
import NotFound from '../pages/NotFound';
import App from '../App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
      {
        path: '/movie/:id',
        element: <MovieDetail />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
