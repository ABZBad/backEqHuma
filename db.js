const { Pool } = require('pg');

const pool = new Pool({
  user: 'fl0user',
  host: 'ep-steep-water-a5hm4bm8.us-east-2.aws.neon.fl0.io',
  password: 'qL9cyadMT6jA',
  ssl: {
    rejectUnauthorized: true // Ignorar la verificación del certificado SSL
  },
  /// ambiente local
  // user: 'postgres',
  // host: 'localhost',
  // password: 'Admin2024',



  database: 'eqHuma',
  port: 5432,
  logging: true,
  
});

module.exports = pool;