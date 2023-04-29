import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Home/Home.js';
import styled from 'styled-components';
import { Movies } from './Movies/Movies.js';
import { MovieDetails } from './MovieDetails/MovieDetails.js';
import { Cast } from './Cast/Cast.js';
import { Reviews } from './Reviews/Reviews.js';

export const BASE_URL = 'https://api.themoviedb.org/3/';
export const API_KEY = 'bd36b74e0c17a8ca31f16ce1d27a6f17';

const StyledNavLink = styled(NavLink)`
  color: black;
  &.active {
    color: yellow;
  }
  text-decoration: none;
`;

export const App = () => {
  return (
    <div className="app">
      <nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieID" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
