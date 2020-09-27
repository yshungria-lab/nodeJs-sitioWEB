var http =  require ("http");
var url = require("url");
var sys = require('sys');
var fs = require('fs');

function inicio(ruta){




	function alInvocar(peticion, respuesta){

		var nombreRuta =  url.parse( peticion.url).pathname;
		console.log("peticion para " +  nombreRuta + " recibida");

		ruta(nombreRuta , respuesta);

		/*
		respuesta.writeHead('200' , {"Content-Type":"text/plain"});
		respuesta.write("Buscabas " + nombreRuta);
		respuesta.end();
		*/

	}




	http.createServer(alInvocar).listen(3000);
	console.log("Server funcinando");
}

exports.inicio = inicio;