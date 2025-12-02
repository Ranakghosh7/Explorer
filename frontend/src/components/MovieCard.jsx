import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
  const poster = movie.poster_path ? `https://image.tmdb.org/t/p/w342${movie.poster_path}` : '';
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        {poster ? <img src={poster} alt={movie.title} /> : <div className="no-poster">No image</div>}
      </Link>
      <div className="meta">
        <h3>{movie.title}</h3>
        <p className="rating">{movie.vote_average ?? '—'}</p>
      </div>
    </div>
  );
}
