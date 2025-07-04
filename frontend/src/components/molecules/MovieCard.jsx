import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <Link to={`/movie/${movie._id}`} className="movie-card">
    <img src={movie.thumbnail} alt={movie.title} />
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.genre}</p>
    </div>
  </Link>
);

export default MovieCard;
