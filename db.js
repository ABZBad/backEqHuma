const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'viaduct.proxy.rlwy.net',
  password: 'VtDIJqpUpGKpPHPBFWeFuRcbaYKkPnDW',
  ssl: {
    rejectUnauthorized: false // Ignorar la verificación del certificado SSL
  },
  /// ambiente local
  // user: 'postgres',
  // host: 'localhost',
  // password: 'Admin2024',

  database: 'railway',
  port: 22148,
  logging: true,
  
});

module.exports = pool;