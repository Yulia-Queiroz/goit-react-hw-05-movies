import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/movieReviewsApi';
import {
  AuthorName,
  ErrorMessageBox,
  ReviewContent,
  ReviewItem,
  ReviewList,
  ReviewSection,
} from './MovieReviewsStyles';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(data => setReviews([...data.results]))
      .catch(error => {
        setError(error);
        console.log(error);
      });
  }, [movieId]);

  return (
    <ReviewSection>
      {error && <ErrorMessageBox>No reviews found</ErrorMessageBox>}
      {!error && (
        <ReviewList>
          {reviews.map(review => (
            <ReviewItem key={review.id}>
              <AuthorName>Author: {review.author}</AuthorName>
              <ReviewContent>{review.content}</ReviewContent>
            </ReviewItem>
          ))}
        </ReviewList>
      )}
    </ReviewSection>
  );
};

export default MovieReviews;
