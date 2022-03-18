const { Schema,model } = require('mongoose');

const rutinaDia = new Schema({
    dia: String,
    ejercicio: {
        ref: "Ejercicio",
        type: Schema.Types.ObjectId
    },
    series: Number,
    repeticiones: Number,
    rutina: {
        ref: "Rutina",
        type: Schema.Types.ObjectId
    },
},{
    timestamps: true
})

module.exports = model('RutinaDia',rutinaDia);
