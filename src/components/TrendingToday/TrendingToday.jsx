import PropTypes from 'prop-types';
import {
  Section,
  TrendingItem,
  TrendingLink,
  TrendingList,
} from './TrendingTodayStyles';

const TrendingToday = ({ trendingMovies, location }) => {
  return (
    <Section>
      <TrendingList>
        {trendingMovies.map(movie => (
          <TrendingItem key={movie.id}>
            <TrendingLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </TrendingLink>
          </TrendingItem>
        ))}
      </TrendingList>
    </Section>
  );
};

TrendingToday.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default TrendingToday;
