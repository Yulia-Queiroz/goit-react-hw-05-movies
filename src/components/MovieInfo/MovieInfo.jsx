import PropTypes from 'prop-types';
import {
  GenresHeading,
  GenresList,
  MovieDetails,
  MovieImage,
  MovieSection,
  MovieTitle,
  OverviewHeading,
  OverviewText,
  UserScore,
} from './MovieInfoStyles';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieInfo = ({ movie }) => {
  return (
    <MovieSection>
      <MovieImage
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
            : defaultImg
        }
        width={200}
        alt={`${movie.title}`}
      />

      <MovieDetails>
        <MovieTitle>{movie.title}</MovieTitle>
        <UserScore>
          User score: {Math.floor(movie.vote_average * 10)}%
        </UserScore>
        <OverviewHeading>Overview</OverviewHeading>
        <OverviewText>{movie.overview}</OverviewText>
        <GenresHeading>Genres</GenresHeading>
        <GenresList>
          {movie.genres && movie.genres.map(genre => genre.name).join(' | ')}
        </GenresList>
      </MovieDetails>
    </MovieSection>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default MovieInfo;
