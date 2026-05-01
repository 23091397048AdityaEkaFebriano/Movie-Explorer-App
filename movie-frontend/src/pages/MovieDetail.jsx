import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Star, ArrowLeft, Heart, Play } from 'lucide-react';
import NotFound from './NotFound';

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/movies/${id}`);
        setMovie(response.data.data);
      } catch (error) {
        console.error('Error fetching movie:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  const addToFavorites = async () => {
    try {
      await axios.post('http://localhost:5000/api/favorites', { movie_id: movie.id });
      alert('Added to favorites!');
    } catch (error) {
      alert(error.response?.data?.message || 'Error adding to favorites');
    }
  };

  if (loading) return <div className="container"><h2>Loading movie details...</h2></div>;
  if (!movie) return <NotFound />;

  return (
    <div className="container animate-fade">
      <button onClick={() => navigate(-1)} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', color: '#38bdf8', cursor: 'pointer', marginBottom: '2rem', fontSize: '1rem' }}>
        <ArrowLeft size={20} /> Back to Gallery
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem' }}>
        <div>
          <img src={movie.image} alt={movie.title} style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} />
        </div>
        
        <div>
          <h1 style={{ fontSize: '4rem', marginBottom: '1rem', lineHeight: '1.1' }}>{movie.title}</h1>
          <div style={{ display: 'flex', gap: '20px', marginBottom: '2rem', alignItems: 'center' }}>
            <span style={{ color: '#fbbf24', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '1.5rem', fontWeight: 'bold' }}>
              <Star fill="#fbbf24" size={24} /> {movie.rating}
            </span>
            <span style={{ color: '#94a3b8' }}>|</span>
            <span style={{ fontSize: '1.2rem' }}>{movie.year}</span>
            <span style={{ color: '#94a3b8' }}>|</span>
            <span style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', padding: '4px 12px', borderRadius: '8px', fontWeight: '600' }}>{movie.genre}</span>
          </div>

          <p style={{ fontSize: '1.2rem', color: '#cbd5e1', lineHeight: '1.8', marginBottom: '3rem' }}>{movie.description}</p>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
              <Play fill="white" /> Watch Trailer
            </button>
            <button onClick={addToFavorites} style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '16px 40px', borderRadius: '50px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', transition: '0.3s' }}>
              <Heart size={20} /> Add to Favorites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
