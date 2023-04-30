import axios from 'axios';
import { API_KEY, BASE_URL } from 'components/App.jsx';
import { Loader } from 'components/Loader.js';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [titles, getTitles] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const homeTrendingURL = 'trending/all/week';

  const fetchTrendingMovies = async () => {
    setLoading(true);
    try {
      const response = await axios.get(BASE_URL + homeTrendingURL, {
        params: {
          api_key: API_KEY,
        },
      });
      const results = [...response.data.results];
      // console.log(results);
      getTitles(results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h3>TRENDING TODAY</h3>
      <ul>
        {isLoading ? (
          <Loader />
        ) : (
          titles.map(({ title, name, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>
                {title}
                {name}
              </Link>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default Home;
