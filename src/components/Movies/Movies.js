import axios from 'axios';
import { API_KEY, BASE_URL } from 'components/App.jsx';
import { Loader } from 'components/Loader.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Movies = () => {
  const [titles, getTitles] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setLoading] = useState(false);

  const fetchSearchedMovies = async () => {
    const searchedMoviesURL = 'search/movie';
    setLoading(true);

    try {
      const response = await axios.get(BASE_URL + searchedMoviesURL, {
        params: {
          api_key: API_KEY,
          query: query,
        },
      });
      const results = [...response.data.results];
      //   console.log(results);
      getTitles(results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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
          placeholder="... ANY MOVIE"
          onChange={handleChange}
        />
        <button type="submit">Get 'em</button>
      </form>
      <ul>
        {isLoading ? (
          <Loader />
        ) : (
          titles.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.title}
                {movie.name}
              </Link>
            </li>
          ))
        )}
      </ul>
    </>
  );
};
