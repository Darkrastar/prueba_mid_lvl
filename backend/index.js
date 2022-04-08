const express = require('express');
const mysql = require('mysql');
const bodyparser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 3050;

const index = express();

index.use(cors())

index.use(bodyparser.json());

//MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'prueba1'
});
//Check de errores
connection.connect(error => {
    if (error) throw error;
    console.log('Todo esta corriendo')
});


//GET , leer datos
index.get('/prueba1', (req, res) => {

    const sql = 'SELECT * FROM cliente';

    connection.query(sql, function (error, results) {
        if (error) throw error;
        res.json(results)
    })
});


//POST , Añadir datos
index.post('/add', (req, res) => {

    const sql = 'INSERT INTO cliente SET ?';

    const clienteObj = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        genero: req.body.genero,
        ip: req.body.ip
    }

    connection.query(sql, clienteObj, error => {
        res.send('Se agregaron datos');
        console.log(clienteObj)
    })
});


index.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

