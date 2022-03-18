const { Schema,model } = require('mongoose');

const record = new Schema({
    cantidad: Number,
    ejercicio: {
        ref: "Ejercicio",
        type: Schema.Types.ObjectId
    },
    perfil: {
        ref: "Perfil",
        type: Schema.Types.ObjectId
    },
    creacion: {
        type: Date,
        default: Date.now
    },
    sobrecarga: {
        type: Number,
        dafault: 0
    }
},{
    timestamps: true
});

module.exports = model('Record',record);