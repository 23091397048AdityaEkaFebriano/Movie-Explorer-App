-- Reset Database
DROP TABLE IF EXISTS favorites;
DROP TABLE IF EXISTS movies;

-- Re-create Tables
CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    year INT,
    genre VARCHAR(100),
    rating DECIMAL(3, 1),
    image TEXT,
    description TEXT
);

CREATE TABLE favorites (
    id SERIAL PRIMARY KEY,
    movie_id INT REFERENCES movies(id) ON DELETE CASCADE
);

-- Seed Data (8 Movies with Reliable IMDb/Amazon Image Links)
INSERT INTO movies (title, year, genre, rating, image, description) VALUES
('Inception', 2010, 'Sci-Fi', 8.8, 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg', 'Dom Cobb adalah pencuri terampil yang mencuri rahasia berharga dari dalam alam bawah sadar selama kondisi bermimpi.'),
('The Dark Knight', 2008, 'Action', 9.0, 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg', 'Batman menghadapi musuh paling mematikan, Joker, yang ingin menghancurkan Gotham City dan menjatuhkan moral pahlawannya.'),
('Interstellar', 2014, 'Adventure', 8.6, 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg', 'Sekelompok astronot melakukan perjalanan melalui lubang cacing di luar angkasa dalam upaya untuk memastikan kelangsungan hidup umat manusia.'),
('The Matrix', 1999, 'Sci-Fi', 8.7, 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg', 'Seorang hacker komputer menemukan kebenaran mengejutkan tentang dunianya dan perannya dalam perang melawan mesin.'),
('Pulp Fiction', 1994, 'Crime', 8.9, 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg', 'Kisah kriminal yang saling terkait antara dua pembunuh bayaran, seorang petinju, dan istri dari seorang gangster kelas atas.'),
('The Shawshank Redemption', 1994, 'Drama', 9.3, 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxNzE1NV5BMl5BanBnXkFtZTcwMzEyNjYzMw@@._V1_.jpg', 'Dua narapidana menjalin persahabatan selama bertahun-tahun, menemukan pelipur lara dan penebusan melalui tindakan kebaikan yang tulus.'),
('Forrest Gump', 1994, 'Drama', 8.8, 'https://m.media-amazon.com/images/M/MV5BNWIwODRlYTUtZjcwYi00ZTQwLWI2Y2EtMTI5MmQyYzBkMzY1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg', 'Peristiwa sejarah Amerika Serikat terungkap melalui perspektif seorang pria dari Alabama dengan IQ rendah namun memiliki hati yang besar.'),
('Spider-Man: Across the Spider-Verse', 2023, 'Animation', 8.9, 'https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg', 'Miles Morales terlempar melintasi Multiverse, di mana ia bertemu dengan tim Spider-People yang bertugas melindungi keberadaannya.');
