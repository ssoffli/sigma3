$(function () {

    /*------------------------
     Funciones menu principal
    ------------------------*/

    //-- Inserta/saca clase .icono-cerrar al boton menu
    $('#menu-navegacion .navbar-toggler').click(
        function () {
            $('.boton-menu').toggleClass('icono-cerrar');
        });

    // clics en elementos del menu principal
    $('#menu-navegacion .navbar-nav a').click(
        function () {
            $('.boton-menu').removeClass('icono-cerrar');//quita clase icono-cerrar

            $('#menu-navegacion .navbar-collapse').collapse('hide');//contrae lista menu

        });

    /*------------------------
         Iniciar Swiper 
    ------------------------*/

    var swiper = new Swiper('#animacion', {
        //paramentros de naveg de botones
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // parametros paginacion  
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,

        },
        speed: 500,
        effect: 'fade',
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 3000,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        }

    });
    //--Inicializar video venobox--
    $('.venobox-video').venobox({
        autoplay: true,            // default: false
        spinner: 'three-bounce',
        closeColor: '#ffffff',
    });
    // Inicializar parsley (validacion campos)
    $('#mi-formulario').parsley({
        errorClass: 'is-invalid text-danger',
        successClass: 'is-valid',
        errorsWrapper: '<ul class="list-unstyled text-danger mb-0 pt-2 small"></ul>',
        errorTemplate: '<li></li>',
        trigger: 'change',
        triggerAfterFailure: 'change'
    });
    // Carga stickit (nav stick)
    $('#menu-navegacion').stickit({
        className: 'menu-fijo'
    });
    // Carga scroll para naveg entre ID
    $('#menu-principal a').mPageScroll2id({
        offset: 50,
        highlightClass:'active'
    });
    // Iniciar contador de Empresa en numeros
    $('.counter').counterUp();
    /*------------------------
     FIN Funciones 
    ------------------------*/
})