var sys = require('sys');
var fs = require('fs');

function ruta(nombreRuta , res){

	console.log("nos vamos para " + nombreRuta);

    switch (nombreRuta) {
        case '/':
            sys.puts("displayroot");
            break;
        case '/create.html':
            muestraCreate( nombreRuta , res);
            break;
        case '/edit':
            sys.puts("displayedit");
            break;
        default:
            sys.puts("ohdear,404");
	}

}

function muestraCreate(nombreRuta, res){

	res.writeHead(200, {'Content-Type': 'text/html'});
	fs.readFile( "./templates"  + nombreRuta , function(error, datos) {
		
			console.log(error);
            res.write(datos);
			res.end();
	});

}

exports.ruta = ruta;