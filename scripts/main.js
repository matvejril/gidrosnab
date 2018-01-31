window.onload = function () {
    // require('./feedback-validate');
    // require('./tab');
    // require('./cases-nav');

    var ourAdvantagesSlider = $('.our-advantages-slider');
    ourAdvantagesSlider.slick({
        arrows: false,
        infinite: true,
        slidesToShow: 5,
        speed: 300
    });

    var ourPartnersSlider = $('.our-partners-slider__list');
    ourPartnersSlider.slick({
        // arrows: false,
        infinite: true,
        // slidesToShow: 4,
        slidesToScroll: 4,
        speed: 300,
        variableWidth: true
    });

    var ourClientsSlider = $('.our-clients-slider__list');
    ourClientsSlider.slick({
        // arrows: false,
        infinite: true,
        // slidesToShow: 4,
        slidesToScroll: 4,
        speed: 300,
        variableWidth: true
    });

    ymaps.ready(init);
    var indexMap;
    var contactMap;
    var indexMyPlacemark;
    var contactMyPlacemark;

    var indexMapId = document.getElementById('index-map');
    var contactMapId = document.getElementById('contact-map');

    function init(){
        if(indexMapId){
            indexMap = new ymaps.Map ("index-map", {
                type: 'yandex#hybrid',
                center: [54.947851, 82.909305],
                zoom: 16
            });
            indexMyPlacemark = new ymaps.Placemark([54.947851, 82.909305], {
                balloonContent: 'Гидроснаб ТД НМЗ'
            }, {
                preset: 'islands#redIcon'
            });
            indexMap.geoObjects.add(indexMyPlacemark);
            indexMap.behaviors.disable('scrollZoom');
        }

        if (contactMapId) {
            contactMap = new ymaps.Map ("contact-map", {
                type: 'yandex#map',
                center: [54.947851, 82.909305],
                zoom: 16
            });
            contactMyPlacemark = new ymaps.Placemark([54.947851, 82.909305], {
                balloonContent: 'Гидроснаб ТД НМЗ'
            }, {
                preset: 'islands#redIcon'
            });
            contactMap.geoObjects.add(contactMyPlacemark);
            contactMap.behaviors.disable('scrollZoom');
        }
    }

};
