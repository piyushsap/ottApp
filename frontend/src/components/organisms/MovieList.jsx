import MovieCard from '../molecules/MovieCard';

const MovieList = ({ movies }) => (
  <div className="movie-wrapper">
    {movies.map((movie) => (
      <MovieCard key={movie._id} movie={movie} />
    ))}
  </div>
);

export default MovieList;
