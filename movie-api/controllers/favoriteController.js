const db = require('../config/db');

// GET all favorites
exports.getAllFavorites = async (req, res, next) => {
  try {
    const result = await db.query(`
      SELECT f.id as favorite_id, m.* 
      FROM favorites f 
      JOIN movies m ON f.movie_id = m.id
    `);
    res.status(200).json({
      status: 'success',
      results: result.rows.length,
      data: result.rows,
    });
  } catch (error) {
    next(error);
  }
};

// POST add favorite
exports.addFavorite = async (req, res, next) => {
  try {
    const { movie_id } = req.body;
    
    // Check if movie exists
    const movieCheck = await db.query('SELECT * FROM movies WHERE id = $1', [movie_id]);
    if (movieCheck.rows.length === 0) {
      return res.status(404).json({ status: 'fail', message: 'Movie not found' });
    }

    // Check if already favorited
    const favCheck = await db.query('SELECT * FROM favorites WHERE movie_id = $1', [movie_id]);
    if (favCheck.rows.length > 0) {
      return res.status(400).json({ status: 'fail', message: 'Movie already in favorites' });
    }

    const result = await db.query(
      'INSERT INTO favorites (movie_id) VALUES ($1) RETURNING *',
      [movie_id]
    );
    res.status(201).json({
      status: 'success',
      data: result.rows[0],
    });
  } catch (error) {
    next(error);
  }
};

// DELETE favorite
exports.removeFavorite = async (req, res, next) => {
  try {
    const { id } = req.params;

    // VALIDASI: Jika ID bukan angka
    if (isNaN(id)) {
      return res.status(400).json({ 
        status: 'fail', 
        message: 'ID harus berupa angka!' 
      });
    }

    const result = await db.query('DELETE FROM favorites WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ status: 'fail', message: 'Favorite not found' });
    }

    res.status(200).json({
      status: 'success',
      message: 'Removed from favorites',
    });
  } catch (error) {
    next(error);
  }
};
