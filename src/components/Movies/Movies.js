import axios from 'axios';
import { API_KEY, BASE_URL } from 'components/App.jsx';
import { useEffect } from 'react';

export const Movies = () => {
  const searchedMoviesURL = 'search/search-movies';

  const fetchMovies = async url => {
    try {
      const response = await axios.get(BASE_URL + url, {
        params: {
          api_key: API_KEY,
        },
      });
      console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies(searchedMoviesURL);
  });

  return <div>Searched Movies</div>;
};
