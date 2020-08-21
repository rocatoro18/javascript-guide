'use strict'

// El ($) y la palabra jQuery es lo mismo
$(document).ready(function (){
    // SELECTOR DE ID
    // # hace referencia a la id

    $("#rojo").css("background","red")
              .css("color","white");
    
    $("#amarillo").css("background","yellow")
                  .css("color","green");
                            
    $("#verde").css("background","green")
               .css("color","white");

    // SELECTOR DE CLASE
    // . hace referencia a la clase

    var mi_clase = $('.zebra').css("padding","5px");

    $('.sin_borde').click(function(){
        console.log("Click dado");
        $(this).addClass('zebra');
    });

    // SELECTOR DE ETIQUETA
    
    var parrafos = $('p').css("cursor","pointer");

    parrafos.click(function(){
        var that = $(this);
        if(!that.hasClass('grande')){
            that.addClass("grande");
        }else{
            that.removeClass("grande");
        }
    });

    // SELECTOR DE ATRIBUTO
    // '[]' seleccionar los elementos por atributo
    $('[title="Google"]').css('background','#ccc');
    $('[title="Facebook"]').css('background','blue');

    // OTROS (FIND Y PARENT)

    // $('p,a').addClass('margen-superior');

    // find sirve para buscar etiquetas que no sabemos donde estan
    var busqueda = $("#elemento2").parent().parent().find('.resaltado');

    console.log(busqueda);
});
