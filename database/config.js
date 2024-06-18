import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'aragao',
  host: 'localhost',
  database: 'user_management',
  password: 'Database1001+',
  port: 5432, 
});

export { pool };
