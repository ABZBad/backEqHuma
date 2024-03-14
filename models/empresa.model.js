const db = require('../db');

class Empresa {
  static async obtenerEmpresaID(id) {
    const { rows } = await db.query('SELECT * FROM empresa WHERE id = $1',[id] );
       console.log("salida---- $1 ", rows[0]);
    return rows[0];
  }

  static async crear(nombreEmpresa, nombreComercial,
                    giro,nombreContacto,
                    tipoContacto, correoContrato ) {
    const { rows } = await db.query('INSERT INTO empresa ' +
      '( nombre, nombrecomercial, giro,' +
      ' nombreContacto, tipoContacto, correoContato' +
      ' )'
      + 'VALUES ($1, $2,$3, $4, $5, $6) RETURNING *'
      , [nombreEmpresa, nombreComercial, giro, nombreContacto, 
        tipoContacto, correoContrato,genero]);
    return rows[0];
  }

  
}
module.exports = Empresa;