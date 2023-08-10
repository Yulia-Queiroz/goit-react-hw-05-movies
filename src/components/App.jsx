import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { lazy } from 'react';
import Layout from './Layout';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const MovieCast = lazy(() => import('./MovieCast'));
const MovieReviews = lazy(() => import('./MovieReviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
