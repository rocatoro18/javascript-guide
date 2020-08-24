$(document).ready(function(){
    var caja = $("#caja");
    $("#mostrar").hide();

    $("#mostrar").click(function(){
        $(this).hide();
        $("#ocultar").show();
        // $("#caja").show('fast');
        // $("#caja").fadeIn('slow');
        caja.fadeTo('slow', 1);
    });

    $("#ocultar").click(function(){
        $(this).hide();
        $("#mostrar").show();
        // $("#caja").hide('fast');
        // $("#caja").fadeOut('slow');

        // Función anonima de callback
        caja.fadeTo('slow', 0 ,function(){
            console.log("Cartel Ocultado");
        });
                  // Mostrar slideUp
                  // Ocultar slideDown
                  
    });

    $("#todoenuno").click(function(){
        caja.slideToggle('fast');
        // $("#caja").fadeToggle('fast');
        // $("#caja").toggle('fast');
    });

    // ANIMACIONES PERSONALIZADAS CON JQUERY

    $("#animar").click(function(){
        caja.animate({
            marginLeft: '500px',
            fontSize: '40px',
            height: 'auto'                
            },'slow')
            .animate({
                borderRadius: '900px',
                marginTop: '80px'
            },'slow')
            .animate({
                borderRadius: '0px',
                marginLeft: '0px'
            },'slow')
            .animate({
                borderRadius: '100px',
                marginTop: '0px'
            },'slow')
            .animate({
                marginLeft: '500px',
                fontSize: '40px',
                height: 'auto'                
                },'slow')
            ;
    });

});