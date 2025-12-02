import React from 'react';
import MovieCard from './MovieCard';

export default function MovieList({ movies }) {
  if (!movies || !movies.length) return <p>No results.</p>;
  return (
    <div className="grid">
      {movies.map(m => <MovieCard key={m.id} movie={m} />)}
    </div>
  );
}
