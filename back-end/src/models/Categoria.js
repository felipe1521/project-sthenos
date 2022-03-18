const { Schema,model } = require('mongoose');

const categoria = new Schema({
    nombre: String,
    medida: String,
    descripcion: String
},{
    timestamps: true
});

module.exports = model('Categoria',categoria);