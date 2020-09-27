let http = require('http');


http.createServer(function(request, respuesta) {
    respuesta.writeHead(200, { 'Content-Type': 'text/plain' });
    respuesta.write("Hola Mundo!");
    respuesta.end();
}).listen(3000, 'localhost');


console.log('Server running at http://localhost:3000/');