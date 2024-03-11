const express = require('express');
const router = express.Router();
const prospectController = require('../controllers/prospect.controller');

router.get('/', prospectController.obtenerTodos);
router.get('/:id', prospectController.obtenerPorId);
router.post('/', prospectController.crear);
router.put('/:id', prospectController.actualizar);
router.delete('/:id', prospectController.eliminar);

module.exports = router;