const db = require('../db');

class Referencia {
  static async obtenerTodas() {
    const { rows } = await db.query('SELECT * FROM referencialaboral');
    return rows;
  }

  static async obtenerPorIdCandidato(id) {

    const { rows } = await db.query('SELECT * FROM referencialaboral WHERE idcandidato = $1', [id]);
    console.log("salida referencialaboral ---- $1 ", rows);

    return rows;
  }

  static async crear(idcandidato,
    empresa,
    direccion,
    telefono,
    personacontacto,
    puestocontacto,
    puestocandidato,
    jefediecto,
    puestojefedirecto,
    periodoini,
    periodofin,
    sueldo,
    motivosalida,
    puesto_referencia,
    telefono_referencia,
    email_referencia) {
    try {

      const insertQuery = 'SELECT * FROM public.agregarReferenciaLaboral( ' +
        '$1, ' +
        '$2, ' +
        '$3, ' +
        '$4, ' +
        '$5, ' +
        '$6, ' +
        '$7, ' +
        '$8, ' +
        '$9, ' +
        '$10 ,' +
        '$11 ,' +
        '$12 ,' +
        '$13 ,' +
        '$14 ,' +
        '$15 ,' +
        '$16 ' +
        ' ) ';

      const { row } = db.query(insertQuery, [idcandidato,
        empresa,
        direccion,
        telefono,
        personacontacto,
        puestocontacto,
        puestocandidato,
        jefediecto,
        puestojefedirecto,
        periodoini,
        periodofin,
        sueldo,
        motivosalida,
        puesto_referencia,
        telefono_referencia,
        email_referencia]);
        return row;
    } catch (error) {
      throw new Error('Error al crear el modelo en referencia:' + error.message);
    }   
  }

}

module.exports = Referencia;