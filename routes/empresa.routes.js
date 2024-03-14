const express = require('express');
const routerEmpresa = express.Router();
const empresaController = require('../controllers/empresa.controller');

routerEmpresa.get('/:id', empresaController.obtenerEmpresaID);
routerEmpresa.post('/', empresaController.crear);

module.exports = routerEmpresa;