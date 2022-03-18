const { Schema,model } = require('mongoose');

const rutina = new Schema({
    perfil: {
        ref: "Perfil",
        type: Schema.Types.ObjectId
    },
    habilitada: {
        type: Boolean,
        default: false
    },
    fecha: {
        type: Date,
        default: Date.now
    }
},{
    timestamps: true
})

module.exports = model('Rutina',rutina);
