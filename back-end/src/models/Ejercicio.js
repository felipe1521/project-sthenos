const { Schema,model } = require('mongoose');

const ejercicio = new Schema({
    nombre: String,
    nombreingles: String,
    dificultad: String,
    categoria: {
        ref: "Categoria",
        type: Schema.Types.ObjectId
    },
    descripcion: String,
    url: String,
    progresion1: String,
    progresion2: String,
    progresion3: String
},{
    timestamps: true
});

module.exports = model('Ejercicio',ejercicio);
