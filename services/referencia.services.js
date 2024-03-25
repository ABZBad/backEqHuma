const Referencia = require('../models/referencia.model');

class ReferenciaService {
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
            return await Referencia.crear(idcandidato,
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
                email_referencia
                );
       } catch (error) {
      throw new Error('Error al crear el prospecto, servicio: '+error);
    }
    }

    static async obtenerPorIdCandidato(id) {
        try {
            return await Referencia.obtenerPorIdCandidato(id);
        } catch (error) {
            throw new Error('Error al crear el referencia en Servicio/crear');
        }
    }
} module.exports = ReferenciaService;