import React, { useEffect, useState } from 'react';
import { getTrending, searchMovies } from '../api';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';

export default function Home() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getTrending();
      setMovies(data.results || []);
      setLoading(false);
    })();
  }, []);

  async function doSearch() {
    if (!query.trim()) return;
    setLoading(true);
    const data = await searchMovies(query.trim());
    setMovies(data.results || []);
    setLoading(false);
  }

  return (
    <div className="page">
      <SearchBar value={query} onChange={setQuery} onSubmit={doSearch} />
      {loading ? <p>Loading…</p> : <MovieList movies={movies} />}
    </div>
  );
}
