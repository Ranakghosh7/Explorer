import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovie, posterUrl } from '../api';

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    (async () => {
      if (!id) return;
      const data = await getMovie(id);
      setMovie(data);
    })();
  }, [id]);

  if (!movie) return <p>Loading…</p>;
  const trailer = (movie.videos?.results || []).find(v => v.type === 'Trailer');

  return (
    <div className="details">
      <img src={posterUrl(movie.poster_path, 500)} alt={movie.title} />
      <div>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p>Genres: {(movie.genres || []).map(g => g.name).join(', ')}</p>
        {trailer && (
          <a href={`https://www.youtube.com/watch?v=${trailer.key}`} target="_blank" rel="noreferrer">Watch trailer</a>
        )}
      </div>
    </div>
  );
}
