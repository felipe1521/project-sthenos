const { Router } = require('express');
const Rutina = require('../models/Rutina');
const router = Router();
const RutinaDia = require('../models/RutinaDia');

router.get('/all', async (req,res) => {
    const rutinadias = await RutinaDia.find().populate('ejercicio');
    res.json(rutinadias);
});

router.post('/dia/:dia', async (req,res) => {
    const rutina = await Rutina.findOne({perfil: req.body._id, habilitada: true});
    if(rutina == null) {
        res.json({});
    }else {
    const rutinadias = await RutinaDia.find({dia: req.params.dia, rutina: rutina._id}).populate('ejercicio');
    console.log(rutinadias);
    res.json(rutinadias);
    }
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