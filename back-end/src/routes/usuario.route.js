const { Router } = require('express');
const router = Router();
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');
const Perfil = require('../models/Perfil');
const Rol = require('../models/Rol');

router.post('/signup', async (req, res) => {
    const {nombre, apellido, peso, estatura, usuario} = req.body;
    const user = new Usuario({
        correo: usuario.correo,
        clave: await Usuario.encryptPass(usuario.clave),
        rol: await Rol.findOne({nombre: usuario.rol})
    }); 
    await user.save();
    const perfil = new Perfil({
        nombre, 
        apellido, 
        peso,
        estatura,
        usuario: await Usuario.findOne({correo: usuario.correo})
    });
    await perfil.save();
    const token = jwt.sign({ id: usuario._id}, 'secretojwt');
    res.status(200).json({token: token});
});

router.post('/signin', async (req, res) => {
    const {correo, clave} = req.body;
    const usuario = await Usuario.findOne({correo: correo});
    if(!usuario) {
        return res.status(401).send('El correo no existe');
    }
    const matchClave = await Usuario.comparePass(clave ,usuario.clave);
    if(!matchClave) {
        return res.status(401).send('La clave es incorrecta');
    }
    const token = jwt.sign({ _id: usuario._id}, 'secretojwt');
    res.status(200).json({token: token});
});

router.delete('/drop/:_id', async (req,res) => {
    await Usuario.findOneAndDelete(req.params._id);
    res.send({message: 'Se ha eliminado el usuario'});
});

router.post('/add', async (req, res) => {
    const {correo, clave, rol} = req.body;
    const user = new Usuario({
        correo: correo,
        clave: await Usuario.encryptPass(clave),
        rol: await Rol.findOne({nombre: rol})
    }); 
    await user.save();
    res.send({message: 'Se ha creado el usuario'});
});

router.get('/token/:tkn', async (req, res) => {
    const decoded = jwt.verify(req.params.tkn, 'secretojwt');
    if(!decoded) {
        return res.status(401).send('Token Invalido');
    }
    const perfil = await Perfil.findOne({usuario: decoded._id}).populate('usuario');
    res.status(200).send(perfil);
});

router.put('/editpass/:pass', async (req,res) => {
    console.log(req.body);
    const {correo, clave} = req.body;
    const usuario = await Usuario.findOne({correo: correo});
    const matchClave = await Usuario.comparePass(clave ,usuario.clave);
    if(!matchClave) {
        return res.send({error: 1, message:'La clave es incorrecta'});
    }
    await Usuario.findByIdAndUpdate(req.body._id, {clave: await Usuario.encryptPass(req.params.pass)});
    res.send({error: 0, message: 'Se ha actualizado la clave'});
});

module.exports = router;