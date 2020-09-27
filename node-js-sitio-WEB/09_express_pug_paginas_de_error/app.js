var express = require('express');
var app = express();

app.use (express.static(__dirname + '/public') );


camisetasLista = [
    {color:"Naranja" ,  imagen:"/images/camiseta1.png"},
    {color:"Roja" ,  imagen:"/images/camiseta2.png"},
    {color:"Azul" ,  imagen:"/images/camiseta3.png"},
    {color:"Verde" ,  imagen:"/images/camiseta4.png"}
]

app.get('/' , function( peticion, respuesta){
    respuesta.render('index.pug' , {
        titulo: "El nombre de mi app",
        textoParrafo: "Nuestra tienda de camisetas ofrece lo mejor, satisfacción 100% garantizada"
    } );
})

app.get('/tienda.html' , function( peticion, respuesta){
    
    respuesta.render('tienda.pug' , {
        camisetas: camisetasLista
    } );
})

app.get('/tienda/comprar/:color' , function( peticion, respuesta){

    let datosDeCamiseta = camisetasLista.filter( function(item){
        if( peticion.params.color == item.color){
            return item
        }
    })[0]
    
    respuesta.render('detalles.pug' , {
        color: peticion.params.color,
        datos: datosDeCamiseta
    } );
})

app.use ( function(peticion, respuesta){

    respuesta.status(400);

    let URLerror = peticion.originalUrl;

    respuesta.render('404.pug' , {textoError: URLerror});

})

 app.listen( 3000 , function(){
     console.log("escuchando en el puerto 3000");
 })