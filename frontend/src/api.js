import axios from 'axios';

const api = axios.create({ baseURL: '/api' });

export async function getTrending(page = 1) {
  const res = await api.get('/trending', { params: { page } });
  return res.data;
}

export async function searchMovies(q, page = 1) {
  const res = await api.get('/search', { params: { q, page } });
  return res.data;
}

export async function getMovie(id) {
  const res = await api.get(`/movie/${id}`);
  return res.data;
}

export function posterUrl(path, w = 342) {
  if (!path) return '';
  return `https://image.tmdb.org/t/p/w${w}${path}`;
}
