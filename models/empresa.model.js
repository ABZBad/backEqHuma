const db = require('../db');

class Empresa {
  static async obtenerEmpresaID(id) {
    try {
      const { rows } = await db.query('SELECT * FROM empresa WHERE id = $1', [id]);
      console.log("salida---- $1 ", rows[0]);
      return rows[0];

    } catch (error) {
      res.status(500).json({
        mensaje: 'Error en ' +
          'exports.obtenerEmpresaID ' +
          'obtener la empresa ID ' + req.params.id,
        error
      });
    }
  }

  static async crear(id, nombreEmpresa, nombreComercial,
    giro, nombreContacto,
    tipoContacto, correoContacto,) {
    try {
      const strQuery = 'INSERT INTO public.empresa ' +
     '(id, "nombreEmpresa", '+ 
     ' "nombreComercial", "giro", '+ 
     ' "nombreContacto",'+
     ' "correoContacto")'+
     " VALUES ("+
              id+","+ 
              "'"+nombreEmpresa+"',"+ 
              "'"+nombreComercial+"',"+
              "'"+giro+"',"+
              "'"+nombreContacto+"',"+
              "'"+correoContacto+"'"+
              ") RETURNING * ";
      console.log(strQuery);
      const { rows } = await db.query(strQuery);
      return rows[0];
    } catch (error) {
      res.status(500).json({
        mensaje: 'Error en ' +
          'exports.Crear ' +
          'la empresa',
        error
      });
    }
  }

  static async obtenerTodasEmpresas() {
    try {
      const { rows } = await db.query('SELECT * FROM public.obtenerEmpresas()');
      console.log("SELECT * FROM obtenerEmpresas");
      return rows;

    } catch (error) {
      res.status(500).json({
        mensaje: 'Error en ' +
          'exports.obtenerTodasEmpresas ' +
          'obtener la empresa ID ' + req.params.id,
        error
      });
    }
  }
  

}
module.exports = Empresa;