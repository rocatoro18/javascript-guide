$(document).ready(function(){

    // Mover elemento por la pagina

    $(".elemento").draggable();

    // Redimensionar elementos

    $(".elemento").resizable();

    // Seleccionar elementos

    // $(".lista-seleccionable").selectable();

    // Seleccionar y ordenar elementos

    $(".lista-seleccionable").sortable({
        update: function(event, ui){
            console.log("Ha cambiado la lista");
        }
    });

    // Drop

    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("Has soltado algo dentro del area");
        }
    });

    // Efectos

    $("#mostrar").click(function(){
        // CHECAR DOCUMENTACION PARA VER MAS EFECTOS
        $(".caja-efectos").toggle("shake", 4000);
        // $(".caja-efectos").toggle("scale");
        // $(".caja-efectos").toggle("puff");
        // $(".caja-efectos").toggle("fold");
        // $(".caja-efectos").toggle("drop");
        // $(".caja-efectos").toggle("slide");
        // $(".caja-efectos").toggle("blind");
        // $(".caja-efectos").toggle("explode");
        // $(".caja-efectos").effect("explode");
        // $(".caja-efectos").fadeToggle();
    });

    // Tooltip

    $(document).tooltip();

    // Dialog

    $("#lanzar-popup").click(function(){
        $("#popup").dialog();
    });

    // Datepicker

    $("#calendario").datepicker();

    // Tabs

    $("#pestanas").tabs();
    
});