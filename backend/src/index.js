const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

//instanciando o express
const app = express();

// conectar com o bando de dados mongodb
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-3yxdy.gcp.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true ,
    useUnifiedTopology: true,
   
});

//Para a aplicação entender o formato json
app.use(express.json());
app.use(routes);

app.listen(3333);

