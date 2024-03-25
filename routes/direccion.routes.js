const express = require('express');
const routerDireccion = express.Router();
const direccionController = require('../controllers/direccion.controller');

routerDireccion.get('/:id', direccionController.obtenerDomicilios);
routerDireccion.post('/', direccionController.crear);

module.exports = routerDireccion;