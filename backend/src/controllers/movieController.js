import Movie from '../models/Movie.js';

export const getAllMovies = async (req, res) => {
  try {
    const { searchQuery, title, genre } = req.query;

    const filter = {};
    if (searchQuery) {
      filter.$or = [
        { title: new RegExp(searchQuery, 'i') },
        { genre: new RegExp(searchQuery, 'i') }
      ];
    }
    if (title) filter.title = new RegExp(title, 'i');
    if (genre) filter.genre = genre;

    const movies = await Movie.find(filter);

    res.json(movies);
  } catch (err) {
    console.error('Error fetching movies:', err);
    res.status(500).json({ error: err.message });
  }
};

export const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ error: 'Movie not found' });
    res.json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addMovie = async (req, res) => {
  try {
    const { title, thumbnail, genre, description, videoUrl } = req.body;
    const newMovie = new Movie({ title, thumbnail, genre, description, videoUrl });
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};