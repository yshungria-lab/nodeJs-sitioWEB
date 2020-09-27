var express = require('express');
var fs = require('fs');
var	app = express();

   app.use(express.static(__dirname + '/public'));



	app.get('/', function(req, res){
		
		res.sendFile('index.html');
	});

	app.get('/tienda', function(req, res){
		res.sendFile('tienda.html');
	});

	


	app.listen(3000, function(){

		console.log("escuchando puerto 3000");
	});