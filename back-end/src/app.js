require('./database');
const express = require('express');
const cors = require('cors');
const app = express();

app.set('port',3000);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.use('/api/usuario',require('./routes/usuario.route'));
app.use('/api/perfil',require('./routes/perfil.route'));
app.use('/api/ejercicio',require('./routes/ejercicio.route'));
app.use('/api/record',require('./routes/record.route'));
app.use('/api/categoria',require('./routes/categoria.route'));
app.use('/api/rutina',require('./routes/rutina.route'));
app.use('/api/rutinadia',require('./routes/rutinaDia.route'));

app.listen(app.get('port'));
console.log('Servidor en puerto',app.get('port'));