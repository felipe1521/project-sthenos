const { Router } = require('express');
const router = Router();
const Record = require('../models/Record');
const moment = require('moment');

router.get('/all', async (req,res) => {
    const records = await Record.find().populate('ejercicio');
    res.json(records);
});

router.get('/find/:_id', async (req,res) => {
    const record = await Record.findById(req.params._id).populate('ejercicio');
    res.json(record);
});

router.get('/findbyejer/:id', async (req,res) => {
    const records = await Record.find({ejercicio: req.params.id}).populate('ejercicio');
    res.json(records);
});

router.get('/stats/:id', async (req,res) => {
    let total = 0;
    const estadisticas = {
        maximo: 0,
        minimo: 0,
        promedio: 0,
        estado: ""
    };
    const records = await Record.find({ejercicio: req.params.id}).populate('ejercicio');
    //mapeando las cantiades de reps o segs y sumandole un porcentaje de la sobrecarga 
    console.log(records);
    const cantidades = records.map(record => record.cantidad + record.sobrecarga * 0.2);
    cantidades.forEach(cantidad => total += cantidad);
    
    estadisticas.promedio = Math.trunc(total / cantidades.length);
    estadisticas.minimo = Math.min(...cantidades);
    estadisticas.maximo = Math.max(...cantidades);
    
    const conteovalidador = estadisticas.maximo - estadisticas.promedio;
    if(conteovalidador >= 13) {
        estadisticas.estado = "Inferior";
    }
    if(conteovalidador < 13 && conteovalidador >= 7) {
        estadisticas.estado = "Regular";
    }
    if(conteovalidador < 7) {
        estadisticas.estado = "Optimo";
    }
    res.json(estadisticas);
});

router.post('/add', async (req,res) => {
    const record = new Record(req.body);
    const records = await Record.findOne({ejercicio: req.body.ejercicio._id, perfil: req.body.perfil._id});
    console.log(records);
    if(records == null) {
        await record.save();
        res.json({error: 0, message: 'Se ha guardado el record'}); 
    }
    const lastrecord = await Record.findOne({ejercicio: req.body.ejercicio._id}).sort({creacion: -1});
    const fecha = moment(lastrecord.creacion.toISOString());
    const actual = moment(Date.now());
    console.log(fecha, " ",actual);
    if(actual.diff(fecha, 'days') > 7) {
        await record.save();
        res.json({error: 0, message: 'Se ha guardado el record'});
    } else {
        res.json({error: 1, message: 'No se ha guardado el record'});
    } 
});

router.delete('/drop/:_id', async (req,res) => {
    await Record.findOneAndDelete(req.params._id);
    res.send({message: 'Se ha Eliminado el record'});
});

module.exports = router;