(function() {
    // Инициализация сладера на index
    var ourAdvantagesSlider = $('.our-advantages-slider');
    if(ourAdvantagesSlider) {
        ourAdvantagesSlider.on('init', function(event, slick){
            ourAdvantagesSlider.css("visibility", "visible");
        });
        ourAdvantagesSlider.slick({
            arrows: false,
            infinite: true,
            slidesToShow: 5,
            speed: 300,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1279,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        variableWidth: true,
                        arrows: true,
                        adaptiveHeight: true
                    }
                },
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        variableWidth: true,
                        arrows: true,
                        adaptiveHeight: true
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        variableWidth: true,
                        arrows: true,
                        adaptiveHeight: true
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        variableWidth: true,
                        arrows: true,
                        adaptiveHeight: true
                    }
                }
            ]
        });
    }


    // Инициализация сладера на index
    var ourPartnersSlider = $('.our-partners-slider__list');
    if(ourPartnersSlider) {
        ourPartnersSlider.on('init', function(event, slick){
            ourPartnersSlider.css("visibility", "visible");
        });
        ourPartnersSlider.slick({
            // arrows: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            speed: 300,
            responsive: [
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });
    }

    // Инициализация сладера на index
    var ourClientsSlider = $('.our-clients-slider__list');
    if(ourClientsSlider) {
        ourClientsSlider.on('init', function(event, slick){
            ourClientsSlider.css("visibility", "visible");
        });
        ourClientsSlider.slick({
            // arrows: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            speed: 300,
            responsive: [
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });
    }
}());