const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/db_sthenos',{
    useNewUrlParser: true,
    useUnifiedTopology: true
    
})  .then(data => console.log('Conexion exitosa con Base de Datos'))
    .catch(err => console.log(err));