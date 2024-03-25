const express = require('express');
const routerReferencia = express.Router();
const referenciaController = require('../controllers/referencia.controller');

routerReferencia.get('/:id', referenciaController.obtenerPorIdCandidato);
routerReferencia.post('/', referenciaController.crear);

module.exports = routerReferencia;