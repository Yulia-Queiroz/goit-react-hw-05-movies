import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getTrendingMovies } from 'services/trendingMoviesApi';
import TrendingToday from 'components/TrendingToday';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies()
      .then(movies => setTrendingMovies([...movies]))
      .catch(error => toast.error(error.message));
  }, []);

  return <TrendingToday trendingMovies={trendingMovies} location={location} />;
};

export default Home;
