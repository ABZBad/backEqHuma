const rptCandidatosService = require('../services/reportes/rtpcandidatos.services');
const rptEmpresasService = require('../services/reportes/rtpempresas.services');
const rptReferenciasService = require('../services/reportes/rtpreferencias.services');

exports.datosGeneralesCandidato = async (req, res) => {
    try {
       await rptCandidatosService.crear(req.params.id);
        res.download('documents.pdf', 'documents.pdf');
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error en ' +
                'datosGeneralesCandidato.controller.crear ',
            error: error.message
        });
    }
};
exports.datosTodasEmpresas = async (req, res) => {
    try {
       await rptEmpresasService.crear(req.params.id);
        res.download('documents.pdf', 'documents.pdf');
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error en ' +
                'datosTodasEmpresas.controller .crear ',
            error: error.message
        });
    }
};



exports.rtpReferenciasCandidato = async (req, res) => {
    try {
       await rptReferenciasService.crear(req.params.id);
        res.download('documents.pdf', 'documents.pdf');
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error en ' +
                'datosTodasEmpresas.controller .crear ',
            error: error.message
        });
    }
};