import { useState, useEffect } from 'react';
import MovieList from '../organisms/MovieList';
import SearchBar from '../molecules/SearchBar';
import api from '../../services/api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const params = {};
        if (search) params.searchQuery = search;
        if (selectedTitle && selectedTitle !== '') params.title = selectedTitle;
        if (selectedGenre && selectedGenre !== '') params.genre = selectedGenre;

        const res = await api.get(`http://localhost:5000/api/movies`, { params });
        setMovies(res.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setMovies([]);
      }
    };
    fetchMovies();
  }, [search, selectedTitle, selectedGenre]);

  return (
    <div className="container">
      <div className="filter-wrapper">
        <div className="search">
          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search movies by title or genre..."
          />
        </div>
        <div className="filter">
          <select
            value={selectedTitle}
            onChange={(e) => setSelectedTitle(e.target.value)}
          >
            <option value="">All Titles</option>
            {movies.map((movie) => (
              <option key={movie._id} value={movie.title}>
                {movie.title}
              </option>
            ))}
          </select>
        </div>
        <div className="filter">
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="">All Genres</option>
            {Array.isArray(movies) &&
              [...new Set(
                movies
                  .filter((m) => m.genre)
                  .map((m) => m.genre)
              )].map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
          </select>
        </div>
      </div>
      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <h2>No movies to show</h2>
      )}
    </div>
  );
};

export default HomePage;
