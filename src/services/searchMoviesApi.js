import axios from 'axios';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmU5MTY4YmE3NmI2ZGE5OTVmMzNhZGQ4ZWZmN2ZiZiIsInN1YiI6IjY0ODJmZTg3ZDJiMjA5MDBjYTFlNDY4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NihzaXrY9zZXZSNtZ-ZwpMbUiWYKxCxfvY0RzSPq49E',
  },
};

export const searchMovies = async query => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  const fetchedMovies = response.data.results;
  if (response.status !== 200) {
    throw new Error(response.status);
  }
  if (fetchedMovies.length === 0) {
    return Promise.reject(new Error('No movies found.'));
  }
  return fetchedMovies;
};
