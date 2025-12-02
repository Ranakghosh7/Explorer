import express from 'express';
import cors from 'cors';
import { tmdbGet } from './tmdb';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.get('/api/trending', async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const data = await tmdbGet('/trending/movie/day', { page });
    res.json(data);
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to fetch trending' });
  }
});

app.get('/api/search', async (req, res) => {
  try {
    const q = String(req.query.q || '');
    const page = Number(req.query.page) || 1;
    if (!q) return res.status(400).json({ error: 'Missing query param q' });
    const data = await tmdbGet('/search/movie', { query: q, page });
    res.json(data);
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to search' });
  }
});

app.get('/api/movie/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await tmdbGet(`/movie/${id}`, { append_to_response: 'videos,credits' });
    res.json(data);
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to fetch movie' });
  }
});

const port = Number(process.env.PORT) || 4000;
app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`);
});
