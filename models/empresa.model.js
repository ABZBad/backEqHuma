const db = require('../db');

class Empresa {
  static async obtenerEmpresaID(id) {
    try {
      const { rows } = await db.query('SELECT * FROM empresa WHERE id = $1',[id] );
         console.log("salida---- $1 ", rows[0]);
      return rows[0];

    } catch (error) {
      res.status(500).json({ mensaje: 'Error en '+
                                      'exports.obtenerEmpresaID '+
                                      'obtener la empresa ID ' + req.params.id ,
                                      error });
    }
  }

  static async crear(nombreEmpresa, nombreComercial,
                    giro,nombreContacto,
                    tipoContacto, correoContrato, ) {
    const { rows } = await db.query('INSERT INTO empresa ' +
      '( nombre, nombrecomercial, giro,' +
      ' nombreContacto, tipoContacto, correoContato' +
      ' )'
      + 'VALUES ($1, $2,$3, $4, $5, $6) RETURNING *'
      , [nombreEmpresa, nombreComercial, giro, nombreContacto, 
        tipoContacto, correoContrato]);
    return rows[0];
  }

  
}
module.exports = Empresa;