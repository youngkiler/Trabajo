const express = require('express');
const app = express();
const morgan=require('morgan');
const cors = require('cors');
const db = require('./db');

//Configuraciones
app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2) //


//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));


//Routes
app.use(require('./routes/index'));
app.use(require('./routes/products'))

// Configurar la conexión a la base de datos en memoria
db.connect()
    .then(() => {
        // El servidor de base de datos en memoria se ha iniciado correctamente
        console.error('El servidor de base de datos en memoria se ha iniciado correctamente.');
    })
    .catch((err) => {
        console.error('Error al iniciar la base de datos en memoria:', err);
    });

//Iniciando el servidor, escuchando...
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});