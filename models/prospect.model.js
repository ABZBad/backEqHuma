const db = require('../db');

class Prospect {
  static async obtenerTodos() {
    const { rows } = await db.query('SELECT * FROM candidato');
    return rows;
  }

  static async obtenerPorId(id) {
    
    const { rows } = await db.query('SELECT * FROM candidato WHERE id = $1', [id]);
    console.log("salida obtenerPorId ---- $1 ", rows[0]);
    
    return rows[0];
  }

  static async crear(nombre, primerapp) {
    const { rows } = await db.query('INSERT INTO candidato ' +
      '( id, nombre, apellido,' +
      ' email, telefono, fecha_nacimiento, genero' +
      ' )'
      + 'VALUES ($1, $2,$3, $4, $5, $6 ,$7) RETURNING *'
      , [id, nombre, primerapp, email, telefono, fechaNacimiento,
        genero]);
    return rows[0];
  }

  static async actualizar(id, nombre, precio) {
    const { rows } = await db.query('UPDATE candidato SET nombre = $1, precio = $2 WHERE id = $3 RETURNING *', [nombre, primerapp, id]);
    return rows[0];
  }

  static async eliminar(id) {
    await db.query('DELETE FROM candidato WHERE id = $1', [id]);
    return { mensaje: 'candidato eliminado correctamente' };
  }
}

module.exports = Prospect;