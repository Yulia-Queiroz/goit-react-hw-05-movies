import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MovieItem,
  MovieLink,
  MovieList,
  Section,
} from './SearchedMovieListStyles';

const SearchedMovieList = ({ movieList }) => {
  const location = useLocation();

  return (
    <Section>
      <MovieList>
        {movieList &&
          movieList.map(movie => (
            <MovieItem key={movie.id}>
              <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </MovieLink>
            </MovieItem>
          ))}
      </MovieList>
    </Section>
  );
};

SearchedMovieList.propTypes = {
  movieList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default SearchedMovieList;
//
