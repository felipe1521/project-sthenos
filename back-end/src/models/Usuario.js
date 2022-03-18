const { Schema,model } = require('mongoose');
const bcrypt  = require('bcryptjs');

const usuario = new Schema({
    correo: String,
    clave: String,
    rol: {
        ref: "Rol",
        type: Schema.Types.ObjectId
    }
},{
    timestamps: true
});

usuario.statics.encryptPass = async (pass) =>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(pass, salt);
}

usuario.statics.comparePass = async (pass, comPass) =>{
    return await bcrypt.compare(pass, comPass)
}

module.exports = model('Usuario',usuario);