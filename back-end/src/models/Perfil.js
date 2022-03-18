const { Schema,model } = require('mongoose');

const perfil = new Schema({
    nombre: String,
    apellido: String,
    telefono: String,
    usuario: {
        ref: "Usuario",
        type: Schema.Types.ObjectId
    }
},{
    timestamps: true
});

module.exports = model('Perfil',perfil);