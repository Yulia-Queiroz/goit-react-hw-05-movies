import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/movieCreditsApi';
import {
  ActorCharacter,
  ActorImage,
  ActorName,
  CastList,
  CastMember,
  CastSection,
  ErrorMessageBox,
} from './MovieCastStyles';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId)
      .then(info => setCast([...info.cast]))
      .catch(error => setError(error));
  }, [movieId]);

  return (
    <CastSection>
      {error && <ErrorMessageBox>No cast found.</ErrorMessageBox>}
      {!error && (
        <CastList>
          {cast.map(actor => (
            <CastMember key={actor.cast_id}>
              <ActorImage
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : defaultImg
                }
                alt={actor.name}
              />

              <ActorName>{actor.name}</ActorName>
              <ActorCharacter>{actor.character}</ActorCharacter>
            </CastMember>
          ))}
        </CastList>
      )}
    </CastSection>
  );
};

export default MovieCast;
