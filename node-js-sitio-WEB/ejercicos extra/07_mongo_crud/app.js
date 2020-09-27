var express = require('express');
var fs = require('fs');
var	app = express();

   app.use(express.static(__dirname + '/public'));


   ///DATOS
   var camisetasDatos = [
				{titulo:"Naranja", imagen:"images/camiseta1.png"},
				{titulo:"Roja", imagen:"images/camiseta2.png"},
				{titulo:"Azul", imagen:"images/camiseta3.png"},
				{titulo:"Verde", imagen:"images/camiseta4.png"}
			];


	app.get('/', function(req, res){
		res.render('index.jade');
	});


	app.get('/tienda', function(req, res){
		res.render('tienda.jade',{
			titulo : "tienda de camisetas",
			camisetas: camisetasDatos
		});
	});

	app.get('/tienda/comprar/:camiseta', function(req, res){
		//res.send("mostrando camiseta " + req.params.camiseta );

		var obj = camisetasDatos.filter(function ( obj ) {

			if ( obj.titulo === req.params.camiseta){
				
				res.render('compra.jade', obj);

			}

		})[0];


	});

	


	app.listen(3000, function(){

		console.log("escuchando puerto 3000");
	});