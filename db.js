const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.POOL_USER,
  host: process.env.HOST,
  password: process.env.PASS,
  ssl: {
    rejectUnauthorized: true // Ignorar la verificación del certificado SSL
  },



  database: process.env.DATABASE,
  port: process.env.PORT,
  logging: true,
  
});

module.exports = pool;