const Referencia = require('../services/referencia.services');

exports.crear = async (req, res) => {
    try {
  
      const { idcandidato,
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
        email_referencia } = req.body;
  
      const nuevaReferencia = await Referencia.crear(idcandidato,
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
        email_referencia);

      res.status(200).json({
        status: "ok",
        message: 'Nueva referencia '+ empresa +' para '+idcandidato +' ha sido creado'
      });
  
    } catch (error) {
      res.status(500).json({
        mensaje: 'Error en ' +
          'controller.crear ',
        error: error.message
      });
    }
  };

  exports.obtenerPorIdCandidato = async (req, res) => {
    try {
      const referencia = await Referencia.obtenerPorIdCandidato(req.params.id);
      res.status(200).json(referencia);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener el perfil por ID', error });
    }
  };