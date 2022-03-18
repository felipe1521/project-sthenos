const { Router } = require('express');
const router = Router();
const RutinaDia = require('../models/RutinaDia');

router.get('/all', async (req,res) => {
    const rutinadias = await RutinaDia.find().populate('ejercicio');
    res.json(rutinadias);
});

router.get('/dia/:dia', async (req,res) => {
    const rutinadias = await RutinaDia.find({dia: req.params.dia}).populate('ejercicio');
    res.json(rutinadias);
});

router.post('/add', async (req,res) => {
    const rutinadia = new RutinaDia(req.body);
    const nuevaRutinadia = await rutinadia.save();
    res.json(nuevaRutinadia);
});

router.delete('/drop/:_id', async (req,res) => {
    await RutinaDia.findOneAndDelete(req.params._id);
    res.send({message: 'Se ha Eliminado la rutinadia'});
});




module.exports = router;