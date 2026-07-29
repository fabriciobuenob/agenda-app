const express = require('express');
const router = express.Router();
const contatoController = require('../controllers/contatoController');
router.get('/', contatoController.listar);
router.post('/', contatoController.cadastrar);
router.delete('/:id', contatoController.remover);
module.exports = router;