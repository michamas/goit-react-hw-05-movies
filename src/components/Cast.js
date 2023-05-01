import axios from 'axios';
import { API_KEY, BASE_URL } from 'components/App.jsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieID } = useParams();
  const [cast, getCast] = useState([]);

  const fetchCast = async () => {
    const movieCastURL = `movie/${movieID}/credits`;

    try {
      const response = await axios.get(BASE_URL + movieCastURL, {
        params: {
          api_key: API_KEY,
        },
      });
      const results = response.data.cast;
      //   console.log(results);
      getCast(results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCast();
  });

  return (
    <>
      <article>
        Cast
        <ul>
          {cast.map(acting => (
            <li key={acting.id}>{acting.name}</li>
          ))}
        </ul>
      </article>
    </>
  );
};

export default Cast;
