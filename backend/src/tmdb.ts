import axios from 'axios';

const BASE = 'https://api.themoviedb.org/3';
const API_KEY = process.env.TMDB_API_KEY;

if (!API_KEY) {
  console.warn('TMDB_API_KEY not set — requests will fail');
}

export async function tmdbGet(path: string, params: Record<string, any> = {}) {
  const res = await axios.get(`${BASE}${path}`, {
    params: { api_key: API_KEY, ...params }
  });
  return res.data;
}
