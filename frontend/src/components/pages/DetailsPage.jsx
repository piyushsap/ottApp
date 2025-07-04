import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../services/api';

const DetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await api.get(`http://localhost:5000/api/movies/${id}`);
      setMovie(res.data);
    };
    fetchMovie()
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="container">
      <div className='details-wrapper'>
        <div className="video">
          <iframe
            src={movie.videoUrl}
            title={movie.title}
            allowFullScreen
          ></iframe>
        </div>
        <div className='description'>
          <h1>{movie.title}</h1>
          <span>{movie.genre}</span>
          <p>{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
