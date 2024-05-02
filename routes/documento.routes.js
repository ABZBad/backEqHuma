const express = require('express');
const routerDocumento = express.Router();
const fabricaPdfController = require('../controllers/fabricaPdf.controller');

routerDocumento.get('/candidatosEmpresas/:id',
    fabricaPdfController.datosGeneralesCandidato);
routerDocumento.get('/todasEmpresas/:id',
    fabricaPdfController.datosTodasEmpresas);
routerDocumento.get('/referenciasCandidato/:id',
    fabricaPdfController.rtpReferenciasCandidato);

module.exports = routerDocumento;