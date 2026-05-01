const db = require('../config/db');

// GET all movies
exports.getAllMovies = async (req, res, next) => {
  try {
    const result = await db.query('SELECT * FROM movies ORDER BY id ASC');
    res.status(200).json({
      status: 'success',
      results: result.rows.length,
      data: result.rows,
    });
  } catch (error) {
    next(error);
  }
};

// GET movie by ID
exports.getMovieById = async (req, res, next) => {
  try {
    const { id } = req.params;

    // VALIDASI: Jika ID bukan angka, kirim error
    if (isNaN(id)) {
      return res.status(400).json({ 
        status: 'fail', 
        message: 'ID harus berupa angka!' 
      });
    }

    const result = await db.query('SELECT * FROM movies WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ status: 'fail', message: 'Movie not found' });
    }

    res.status(200).json({
      status: 'success',
      data: result.rows[0],
    });
  } catch (error) {
    next(error);
  }
};

// POST new movie
exports.createMovie = async (req, res, next) => {
  try {
    const { title, year, genre, rating, image, description } = req.body;
    const result = await db.query(
      'INSERT INTO movies (title, year, genre, rating, image, description) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [title, year, genre, rating, image, description]
    );
    res.status(201).json({
      status: 'success',
      data: result.rows[0],
    });
  } catch (error) {
    next(error);
  }
};

// PUT update movie
exports.updateMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, year, genre, rating, image, description } = req.body;
    const result = await db.query(
      'UPDATE movies SET title=$1, year=$2, genre=$3, rating=$4, image=$5, description=$6 WHERE id=$7 RETURNING *',
      [title, year, genre, rating, image, description, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ status: 'fail', message: 'Movie not found' });
    }

    res.status(200).json({
      status: 'success',
      data: result.rows[0],
    });
  } catch (error) {
    next(error);
  }
};

// DELETE movie
exports.deleteMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await db.query('DELETE FROM movies WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ status: 'fail', message: 'Movie not found' });
    }

    res.status(200).json({
      status: 'success',
      message: 'Movie deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
