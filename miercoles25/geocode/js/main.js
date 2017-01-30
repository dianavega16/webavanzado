$(document).ready(function(){

var imagenes=['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg'];

$(".imgFondo").css('background-image','url('+imagenes[Math.floor(Math.random()*5)]+')');

$("#mandar").click(function(){

  var dirección= $("#direc").val();


var link='https://maps.googleapis.com/maps/api/geocode/json?address='+dirección+'&key=AIzaSyD7eAyV2TOvk-uT9g60xYfo9n0dsa_Lug0';

$.ajax({
  dataType: "json",
  url: link,
  success: recibirDatos
});

function recibirDatos(json){
var informacion = json;
var codigoPostal= informacion.results[0].address_components[6].long_name;

$("#respuesta").append('<div class="offset-m3 col m6 card-panel #f50057 pink accent"><h6>Tu codigo postal es:'+codigoPostal+'</h6></div>');
}

});
});
