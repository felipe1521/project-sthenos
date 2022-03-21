const { Router } = require('express');
const router = Router();
const Rutina = require('../models/Rutina');
const Perfil = require('../models/Perfil');


router.get('/find', async (req,res) => {
    const rutina = await Rutina.findOne();
    res.json(rutina);
});

router.get('/get/:id', async (req,res) => {
    const rutina = await Rutina.findById(req.params.id);
    res.json(rutina);
});

router.post('/add', async (req,res) => {
    const rutina = new Rutina(req.body);
    const nuevaRutina = await rutina.save();
    res.json(nuevaRutina);
});

router.delete('/drop/:_id', async (req,res) => {
    await Rutina.remove({_id: req.params._id });
    await RutinaDia.remove({rutina: req.params._id });
    res.send({message: 'Se ha Eliminado la rutina Completa'});
});

router.post('/finish/:_id', async (req,res) => {
    console.log(req.params._id);
    const perfil = await Perfil.findById(req.params._id);
    
    await Rutina.updateMany({_id: { $ne: req.body._id }, perfil: perfil }, {$set: {habilitada: false}});
    //Habilitando la rutina
    await Rutina.updateOne({_id: req.body._id }, {$set: {habilitada: true}});
    res.send({message: 'Se ha Habilitado la rutina Completa'});
});

module.exports = router;