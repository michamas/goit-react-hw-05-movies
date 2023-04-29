import axios from 'axios';
import { API_KEY, BASE_URL } from 'components/App.jsx';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [titles, getTitles] = useState([]);
  const homeTrendingURL = 'trending/all/week';

  const fetchTrendingMovies = async () => {
    try {
      const response = await axios.get(BASE_URL + homeTrendingURL, {
        params: {
          api_key: API_KEY,
        },
      });
      const results = [...response.data.results];
      //   console.log(results);
      getTitles(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h3>TRENDING TODAY</h3>
      <ul>
        {titles.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  );
};
