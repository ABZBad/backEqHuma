const { Pool } = require('pg');

const pool = new Pool({
  user: 'fl0user',
  //host: 'localhost',
  host: 'ep-steep-water-a5hm4bm8.us-east-2.aws.neon.fl0.io',
  database: 'eqHuma',
  //password: 'Admin2024',
  password: 'qL9cyadMT6jA',
  port: 5432,
});

module.exports = pool;