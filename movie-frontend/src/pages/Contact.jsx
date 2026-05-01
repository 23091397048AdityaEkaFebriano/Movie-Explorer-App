import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container animate-fade">
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Contact <span style={{ color: '#38bdf8' }}>Us</span></h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div className="glass" style={{ padding: '2rem' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Get in Touch</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Mail color="#38bdf8" /> <span>support@movieexplorer.com</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Phone color="#38bdf8" /> <span>+62 812 3456 7890</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <MapPin color="#38bdf8" /> <span>Jakarta, Indonesia</span>
            </div>
          </div>
        </div>
        <div className="glass" style={{ padding: '2rem' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Send a Message</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input type="text" placeholder="Your Name" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #334155', background: '#0f172a', color: 'white' }} />
            <textarea placeholder="Your Message" rows="4" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #334155', background: '#0f172a', color: 'white' }}></textarea>
            <button className="btn-primary" type="button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
