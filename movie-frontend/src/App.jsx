import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Outlet />
      </main>
      
      <footer style={{ textAlign: 'center', padding: '3rem', color: '#64748b' }}>
        <p>&copy; 2026 Movie Explorer API. Built with passion for movie lovers.</p>
      </footer>
    </div>
  );
}

export default App;
