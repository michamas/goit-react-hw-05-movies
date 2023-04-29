import axios from 'axios';
import { API_KEY, BASE_URL } from 'components/App.jsx';
import { useEffect, useState } from 'react';

export const Movies = () => {
  const [titles, getTitles] = useState([]);
  const [query, setQuery] = useState('');
  const searchedMoviesURL = 'search/movie';

  const fetchSearchedMovies = async () => {
    try {
      const response = await axios.get(BASE_URL + searchedMoviesURL, {
        params: {
          api_key: API_KEY,
          query: query,
        },
      });
      const results = [...response.data.results];
      console.log(results);
      getTitles(results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = e => {
    // e.preventDefault();
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query !== '') {
      fetchSearchedMovies();
    }
  };

  return (
    <>
      <h3>SEARCH FOR ...</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="... any movie"
          onChange={handleChange}
        />
        <button type="submit">Get 'em</button>
      </form>
      <ul>
        {titles.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  );
};
