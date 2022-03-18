const { Router } = require('express');
const router = Router();
const Rutina = require('../models/Rutina');


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

router.delete('/finish/:_id', async (req,res) => {
    //Truncando la coleccion
    await Rutina.remove({_id: { $ne: req.params._id }});
    await RutinaDia.remove({rutina: { $ne: req.params._id }});
    //Habilitando la rutina
    await Rutina.findOneAndUpdate({habilitada: true});
    res.send({message: 'Se ha Habilitado la rutina Completa'});
});


module.exports = router;