import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container animate-fade" style={{ textAlign: 'center', padding: '10rem 0' }}>
      <h1 style={{ fontSize: '8rem', color: '#38bdf8', marginBottom: '0' }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Oops! Page Not Found</h2>
      <p style={{ color: '#94a3b8', marginBottom: '3rem' }}>The page you are looking for might have been removed or is temporarily unavailable.</p>
      <Link to="/" className="btn-primary">Back to Home</Link>
    </div>
  );
};
export default NotFound;
