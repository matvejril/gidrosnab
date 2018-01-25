window.onload = function () {
    // require('./feedback-validate');
    // require('./tab');
    // require('./cases-nav');

    var ourAdvantagesSlider = $('.our-advantages');
    ourAdvantagesSlider.slick({
        arrows: false,
        infinite: true,
        slidesToShow: 5,
        speed: 300
    });

    var ourPartnersSlider = $('.our-partners__slider');
    ourPartnersSlider.slick({
        // arrows: false,
        infinite: true,
        // slidesToShow: 4,
        slidesToScroll: 4,
        speed: 300,
        variableWidth: true
    });

    var ourClientsSlider = $('.our-clients__slider');
    ourClientsSlider.slick({
        // arrows: false,
        infinite: true,
        // slidesToShow: 4,
        slidesToScroll: 4,
        speed: 300,
        variableWidth: true
    });


    ymaps.ready(init);
    var myMap;
    var myPlacemark;
    function init(){
        myMap = new ymaps.Map ("map", {
            type: 'yandex#satellite',
            center: [54.947851, 82.909305],
            zoom: 16
        });
        myPlacemark = new ymaps.Placemark([54.947851, 82.909305], {
            balloonContent: 'Гидроснаб ТД НМЗ'
        }, {
            preset: 'islands#redIcon'
            });
        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
    }
};
