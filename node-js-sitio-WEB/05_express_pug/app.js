var express = require('express');
var app = express();

app.use (express.static(__dirname + '/public') );

app.get('/' , function( peticion, respuesta){
     respuesta.render('index.pug')
})


 app.listen( 3000 , function(){
     console.log("escuchando en el puerto 3000");
 })