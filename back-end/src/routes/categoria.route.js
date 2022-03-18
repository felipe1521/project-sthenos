const { Router } = require('express');
const router = Router();
const Categoria = require('../models/Categoria');

router.get('/all', async (req,res) => {
    const categorias = await Categoria.find();
    res.json(categorias);
});
router.get('/find/:_id', async (req,res) => {
    const categoria = await Categoria.findById(req.params._id);
    res.json(categoria);
});


module.exports = router;