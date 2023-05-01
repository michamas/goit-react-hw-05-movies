import axios from 'axios';
import { API_KEY, BASE_URL } from 'components/App.jsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';

const Reviews = () => {
  const { movieID } = useParams();
  const [reviews, getReviews] = useState([]);

  const fetchReviews = async () => {
    const movieReviewsURL = `movie/${movieID}/reviews`;

    try {
      const response = await axios.get(BASE_URL + movieReviewsURL, {
        params: {
          api_key: API_KEY,
        },
      });
      const results = response.data.results;
      // console.log(results);
      getReviews(results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchReviews();
  });

  return (
    <>
      Review
      {reviews.map(review => (
        <article key={review.id}>
          <h5>{review.author}</h5>
          <p>{parse(`${review.content}`)}</p>
        </article>
      ))}
    </>
  );
};

export default Reviews;
