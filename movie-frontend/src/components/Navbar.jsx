import { Link } from 'react-router-dom';
import { Film, Heart, Info, Mail, Home } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="glass" style={{ margin: '1rem 2rem', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: '1rem', zIndex: 100 }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
        <Film size={32} color="#38bdf8" />
        Movie<span style={{ color: '#38bdf8' }}>Explorer</span>
      </Link>
      
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Link to="/" className="nav-link"><Home size={20} /> Home</Link>
        <Link to="/favorites" className="nav-link"><Heart size={20} /> Favorites</Link>
        <Link to="/about" className="nav-link"><Info size={20} /> About</Link>
        <Link to="/contact" className="nav-link"><Mail size={20} /> Contact</Link>
      </div>

      <style>{`
        .nav-link {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #94a3b8;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .nav-link:hover {
          color: #38bdf8;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
