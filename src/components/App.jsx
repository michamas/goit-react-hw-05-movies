import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout.js';
import './App.css';

const Home = lazy(() => import('./Home.js'));
const Movies = lazy(() => import('./Movies.js'));
const MovieDetails = lazy(() => import('./MovieDetails.js'));
const Cast = lazy(() => import('./Cast.js'));
const Reviews = lazy(() => import('./Reviews.js'));

export const BASE_URL = 'https://api.themoviedb.org/3/';
export const API_KEY = 'bd36b74e0c17a8ca31f16ce1d27a6f17';

export const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieID" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
