import axios from 'axios';
import { API_KEY, BASE_URL } from 'components/App.jsx';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [isLoading, setLoading] = useState(false);
  const { movieID } = useParams();
  const [details, getDetails] = useState([]);

  const fetchDetails = async () => {
    const movieDetailsURL = `movie/${movieID}`;
    setLoading(true);

    try {
      const response = await axios.get(BASE_URL + movieDetailsURL, {
        params: {
          api_key: API_KEY,
        },
      });
      const result = response.data;
      //   console.log(result);
      getDetails(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      <h3>MOVIE DETAILS</h3>
      <article>
        <h4>{details.title}</h4>
        <img
          width="200"
          src={
            details.poster_path
              ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
              : 'https://ik.imagekit.io/paulinas/noTMDBposter.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676735394520'
          }
          alt={details.original_title}
        />
        <h5>{details.tagline}</h5>
        <p>{details.overview}</p>
      </article>
      <article>
        <h5>More info</h5>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Rewievs</Link>
        <Outlet />
      </article>
    </>
  );
};
export default MovieDetails;
