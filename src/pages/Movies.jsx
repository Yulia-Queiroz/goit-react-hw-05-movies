import { useSearchParams } from 'react-router-dom';
import SearchBar from 'components/SearchBar/SearchBar';
import SearchedMovieList from 'components/SearchedMovies/SearchedMovieList';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { searchMovies } from 'services/searchMoviesApi';

const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchedMovie = searchParams.get('movie');

  const handleSubmit = e => {
    e.preventDefault();
    const formQuery = e.currentTarget.elements.movieTitle.value;
    if (formQuery.trim() === '') {
      toast.warn('Please, make a valid search');
      return setSearchParams({});
    }
    setSearchParams({ movie: formQuery });

    e.currentTarget.reset();
  };

  useEffect(() => {
    if (!searchedMovie) {
      return;
    }
    searchMovies(searchedMovie)
      .then(fetchedMovies => setMovieList([...fetchedMovies]))
      .catch(error => {
        toast.error(error.message);
        setMovieList([]);
      });
  }, [searchedMovie]);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {searchedMovie && <SearchedMovieList movieList={movieList} />}
    </>
  );
};

export default Movies;
