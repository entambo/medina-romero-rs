$(document).ready(function() {
    /* Cambio dehheader */
    $(window).on('scroll', function() { 
        let posicion = $('#pr').offset();
        if ($(window).scrollTop() >= posicion.top) {
            $('header').removeClass('transparente')
        } else{
            $('header').addClass('transparente');
        }
    })
    /* Acndicionamiento del menu lateral */
    $(document).ready(function() {
        $('#burger').click(function() {
            $('#burger').toggleClass('abierto');
            $('.menu').toggleClass('abierto');
        })
    })
    //Smoth scroll//
    $('a').on('click', function() {
        if (this.hash !== '') {
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 750)
        }

    })
})