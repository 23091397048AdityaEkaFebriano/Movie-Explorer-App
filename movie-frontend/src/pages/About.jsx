const About = () => {
  return (
    <div className="container animate-fade">
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>About <span style={{ color: '#38bdf8' }}>Movie Explorer</span></h1>
      <div className="glass" style={{ padding: '3rem', fontSize: '1.2rem', lineHeight: '1.8', color: '#cbd5e1' }}>
        <p style={{ marginBottom: '1.5rem' }}>
          Movie Explorer API adalah platform modern yang didesain untuk para pecinta film. Kami menyediakan database film yang lengkap dengan rating, genre, dan deskripsi mendetail.
        </p>
        <p>
          Dibangun menggunakan teknologi terbaru seperti <strong>Node.js, Express, PostgreSQL</strong> di sisi backend, dan <strong>React.js</strong> di sisi frontend, aplikasi ini menawarkan performa yang cepat dan antarmuka yang sangat responsif.
        </p>
      </div>
    </div>
  );
};
export default About;
