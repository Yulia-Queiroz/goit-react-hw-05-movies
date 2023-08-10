import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getMovieDetails } from '../services/MovieDetailsApi';
import MovieInfo from 'components/MovieInfo';
import {
  AdditionalInfoTitle,
  StyledGoBack,
  StyledLink,
  StyledList,
  StyledListItem,
  StyledSection,
} from './MovieDetailsStyles';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const goBackLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    getMovieDetails(movieId)
      .then(fecthedMovie => setMovie({ ...fecthedMovie }))
      .catch(error => toast.error(error.message));
  }, [movieId]);

  return (
    <>
      <StyledGoBack to={goBackLocationRef.current}>Go back</StyledGoBack>
      <MovieInfo movie={movie} />
      <StyledSection>
        <AdditionalInfoTitle>Additional information</AdditionalInfoTitle>
        <StyledList>
          <StyledListItem>
            <StyledLink to="cast">Cast</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="reviews">Reviews</StyledLink>
          </StyledListItem>
        </StyledList>
      </StyledSection>
      <Suspense fallback={<div>...Loading</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
