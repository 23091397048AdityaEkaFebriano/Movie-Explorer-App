import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Star, PlayCircle } from 'lucide-react';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('/api/movies');
        setMovies(response.data.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (loading) return <div className="container"><h2>Loading movies...</h2></div>;

  return (
    <div className="container animate-fade">
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Explore <span style={{ color: '#38bdf8' }}>Movies</span></h1>
        <p style={{ color: '#94a3b8', fontSize: '1.2rem' }}>Discover your next favorite film from our curated collection.</p>
      </header>

      <div className="grid-movies">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card" style={{ textDecoration: 'none' }}>
            <img src={movie.image} alt={movie.title} />
            <div className="info">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ backgroundColor: '#38bdf8', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>{movie.genre}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#fbbf24' }}>
                  <Star size={16} fill="#fbbf24" /> {movie.rating}
                </span>
              </div>
              <h3 style={{ color: 'white', marginBottom: '4px' }}>{movie.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{movie.year}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
