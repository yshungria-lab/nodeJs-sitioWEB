var express = require('express');
var	app = express();



	app.get('/', function(req, res){

		res.send('hola mundo en express');

	});


	app.listen(3000, function(){

		console.log("escuchando puerto 3000");
	});