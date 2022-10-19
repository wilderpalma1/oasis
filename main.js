$(document).ready(function () {

    function showPopup(){
        $('.Ventana_Registro').addClass('show');
        $('.pop-wrap').addClass('show');
        $('.Ventana_Login').removeClass('show');
    }

    function showPop(){
        $('.Ventana_Login').addClass('show');
        $('.Ventana_Registro').removeClass('show');
    }

    function showInicio(){
        $('.Pantalla_Inicio').addClass('show');
        $('.container-menu').removeClass('show');
    }

    $("#close").click(function(){
        $('.Ventana_Registro').removeClass('show');
        $('.pop-wrap').removeClass('show');
    });

    $("#cerrar").click(function(){
        $('.Ventana_Login').removeClass('show');
    });

    $(".nav_link_3").click(showPopup);
    $(".link").click(showPop);
    $(".link_1").click(showPopup);
    $(".Inicio").click(showInicio);

});