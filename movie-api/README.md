# Movie Explorer API

Backend API menggunakan Node.js, Express.js, dan PostgreSQL untuk aplikasi Movie Explorer.

## Prasyarat

- Node.js terinstal
- PostgreSQL terinstal dan berjalan

## Instalasi

1. Buka terminal di folder `movie-api`.
2. Jalankan perintah berikut untuk menginstal dependensi:
   ```bash
   npm install
   ```

## Setup Database

1. Buka terminal PostgreSQL atau GUI (seperti pgAdmin atau DBeaver).
2. Buat database baru bernama `movie_explorer`:
   ```sql
   CREATE DATABASE movie_explorer;
   ```
3. Jalankan query dari file `schema.sql` untuk membuat tabel dan mengisi data dummy.

## Konfigurasi

Buka file `.env` dan sesuaikan kredensial database Anda:
```env
PORT=5000
DB_USER=postgres
DB_PASSWORD=passwordanda
DB_HOST=localhost
DB_PORT=5432
DB_NAME=movie_explorer
```

## Menjalankan Project

Untuk menjalankan server dalam mode pengembangan (dengan nodemon):
```bash
npm run dev
```

Server akan berjalan di `http://localhost:5000`.

## API Endpoints

### Movies
- `GET /api/movies` - Ambil semua movie
- `GET /api/movies/:id` - Ambil detail movie
- `POST /api/movies` - Tambah movie baru
- `PUT /api/movies/:id` - Update movie
- `DELETE /api/movies/:id` - Hapus movie

### Favorites
- `GET /api/favorites` - Ambil semua favorite
- `POST /api/favorites` - Tambah favorite (body: `{ "movie_id": 1 }`)
- `DELETE /api/favorites/:id` - Hapus favorite berdasarkan ID favorite
