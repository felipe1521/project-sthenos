const { Schema,model } = require('mongoose');

const rol = new Schema({
    nombre: String
});

module.exports = model('Rol',rol);