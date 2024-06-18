import express from 'express';
import cors from 'cors';
import { pool } from './database/config.js';

const app = express();
const port = 3000;

app.use(cors());

// Sample data endpoint
app.get('/api/data', (req, res) => {
  const data = {
    message: 'Hello Vue.js + Node.js!'
  };
  res.json(data);
});

// Test database connection endpoint
app.get('/api/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ status: 'success', data: result.rows });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
