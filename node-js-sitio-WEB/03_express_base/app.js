var express = require('express');
var app = express();


app.get('/' , function( peticion, respuesta){

    respuesta.send('Hola mundo con express')

 })


 app.listen( 3000 , function(){
     console.log("escuchando en el puerto 3000");
 })
