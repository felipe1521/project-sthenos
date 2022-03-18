const { Router } = require('express');
const router = Router();
const Ejercicio = require('../models/Ejercicio');
const Categoria = require('../models/Categoria');

router.get('/all', async (req,res) => {
    const ejercicios = await Ejercicio.find().sort({categoria: 1}).populate('categoria');
    res.json(ejercicios);
});
router.get('/find/:_id', async (req,res) => {
    const ejercicio = await Ejercicio.findById(req.params._id);
    res.json(ejercicio);
});

router.get('/findbycate/:cate', async (req,res) => {
    const ejercicios = await Ejercicio.find({categoria: req.params.cate}).populate('categoria');
    res.json(ejercicios);
});

router.get('/findbynom/:nombre', async (req,res) => {
    const ejercicios = await Ejercicio.find({nombre: {$regex: req.params.nombre}}).populate('categoria');
    res.json(ejercicios);
});

router.get('/find/categoria/:_id', async (req,res) => {
    const categoria = await Categoria.findById(req.params._id);
    res.json(categoria);
});

router.post('/add', async (req,res) => {
    const ejercicio = new Ejercicio(req.body);
    await ejercicio.save();
    res.send({message: 'Se ha guardado el ejercicio'});
});

router.put('/edit/:_id', async (req,res) => {
    await Ejercicio.findByIdAndUpdate(req.params._id, req.body);
    res.send({message: 'Se ha actualizado el ejercicio'});
});

router.delete('/drop/:_id', async (req,res) => {
    await Ejercicio.findOneAndDelete(req.params._id);
    res.send({message: 'Se ha Eliminado el ejercicio'});
});

module.exports = router;