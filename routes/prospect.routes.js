const express = require('express');
const routerProspect = express.Router();
const prospectController = require('../controllers/prospect.controller');

routerProspect.get('/', prospectController.obtenerTodos);
routerProspect.get('/:id', prospectController.obtenerPorId);
routerProspect.post('/', prospectController.crear);
routerProspect.put('/:id', prospectController.actualizar);
routerProspect.delete('/:id', prospectController.eliminar);

routerProspect.get('/obtenerProspectosTodosPorEmpresa/:id',prospectController.obtenerProspectosTodosPorEmpresa);


module.exports = routerProspect;