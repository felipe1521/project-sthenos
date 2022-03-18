const { Router } = require('express');
const router = Router();
const jwt = require('jsonwebtoken');
const Perfil = require('../models/Perfil');
const Usuario = require('../models/Usuario');

router.get('/:_id', async (req,res) => {
    const perfil = Perfil.findById(req.params._id).populate('usuario');
    res.send(perfil);
});

router.post('/add', async (req,res) => {
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
    res.send({message: 'Se ha guardado el perfil'});
});

router.put('/edit/:_id', async (req,res) => {
    const usuario = req.body.usuario;
    await Perfil.findByIdAndUpdate(req.params._id, req.body);
    await Usuario.findByIdAndUpdate(usuario._id, usuario);
    res.send({message: 'Se ha actualizado el perfil'});
});

router.delete('/drop/:_id', async (req,res) => {
    await Perfil.findOneAndDelete(req.params._id);
    res.send({message: 'Se ha eliminado el perfil'});
});

router.get('/getuser/:tkn', async (req, res) => {
    const decoded = jwt.verify(req.params.tkn, 'secretojwt');
    if(!decoded) {
        return res.status(401).send('Token Invalido');
    }
    const usuario = await Usuario.findById(decoded._id);
    res.status(200).send(usuario);
});

module.exports = router;