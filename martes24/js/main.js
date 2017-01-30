/*if (jQuery) {
  alert("si tenemos jquery")
}*/

/*$(".circulo").click(function(){
  alert("soy el circulo")
});

$("#cuadrado").click(function(){
  alert("soy un cuadrado")
})*/

/*$("div").click(function(){
  alert("soy un div")
})

$("p").click(function(){
  alert("soy una p")
})*/

/*$(".circulo").click(function(){
  $("p").html("texto reemplazado");
});*/

/*$(".circulo").click(function(){
  $("iframe").attr("src","http://www.jornada.unam.mx/ultimas");

  $(".circulo").click(function(){
    $("iframe").attr("src","http://www.eluniversal.com.mx/");
  });
});*/

/*$("button").click(function(){
$(".circulo").css("width","400px");
})*/

/*$("button").click(function(){
  $(".circulo").addClass("circulo2")
})*/


/*$("button").click(function(){
  $(".circulo").hide();
})*/

/*$("button").click(function(){
  $(".circulo").fadeOut("");
})*/

$(".circulo").click(function(){
$(this).animate({
  width:"300px",
  height:"300px"
},4000)

})
