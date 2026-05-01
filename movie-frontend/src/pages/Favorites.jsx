import { useEffect, useState } from 'react';
import axios from 'axios';
import { Trash2, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFavorites = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/favorites');
      setFavorites(response.data.data);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  const removeFavorite = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/favorites/${id}`);
      fetchFavorites();
    } catch (error) {
      alert('Error removing favorite');
    }
  };

  if (loading) return <div className="container"><h2>Loading favorites...</h2></div>;

  return (
    <div className="container animate-fade">
      <header style={{ marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '15px' }}>
        <Heart size={40} color="#ef4444" fill="#ef4444" />
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>My <span style={{ color: '#ef4444' }}>Favorites</span></h1>
      </header>

      {favorites.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '5rem', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '24px', border: '1px dashed #334155' }}>
          <h3 style={{ color: '#94a3b8', fontSize: '1.5rem' }}>No favorites yet. Start exploring!</h3>
          <Link to="/" className="btn-primary" style={{ marginTop: '20px' }}>Go Home</Link>
        </div>
      ) : (
        <div className="grid-movies">
          {favorites.map((fav) => (
            <div key={fav.favorite_id} className="movie-card glass" style={{ padding: '10px' }}>
              <img src={fav.image} alt={fav.title} style={{ height: '300px' }} />
              <div style={{ padding: '1rem' }}>
                <h4 style={{ marginBottom: '10px' }}>{fav.title}</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Link to={`/movie/${fav.id}`} style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: '600' }}>View Details</Link>
                  <button onClick={() => removeFavorite(fav.favorite_id)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}>
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
