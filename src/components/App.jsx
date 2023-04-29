import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Home/Home.js';
import styled from 'styled-components';
import { Movies } from './Movies/Movies.js';

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
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </div>
  );
};
