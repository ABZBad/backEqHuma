const express = require('express');
const routerDocumento = express.Router();
const fabricaPdfController = require('../controllers/fabricaPdf.controller');

routerDocumento.get('/:id', fabricaPdfController.datosGeneralesCandidato);

module.exports = routerDocumento;