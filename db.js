const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  ssl: {
    rejectUnauthorized: false // Ignorar la verificación del certificado SSL
  },
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  logging: true,
  
});

module.exports = pool;