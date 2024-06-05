const express = require ('express');
const router = express.Router();

const mercadoControle = require('./controles/mercadoControle');

router.get('/mercadinho', mercadoControle.buscarTodos);
router.get('/mercadinho/:id',mercadoControle.buscarUm)
router.post('/mercadinho',mercadoControle.inserir);
router.put('/mercadinho/:id',mercadoControle.alterar);
router.delete('/mercadinho/:id',mercadoControle.excluir);

module.exports = router;