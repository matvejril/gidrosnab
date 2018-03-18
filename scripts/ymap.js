(function () {
    // Инициализация яндкс карт на index и contacts pages
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
                balloonContent: '<strong>г. Новосибирск, ул. Петухова, 69Б</strong>',
                iconCaption: 'Гидроснаб ТД НМЗ'
            }, {
                preset: 'islands#redDotIcon'
            });
            indexMap.geoObjects.add(indexMyPlacemark);
            indexMap.behaviors.disable('scrollZoom');

            // indexMyPlacemark = new ymaps.Placemark([54.947851, 82.909305], {
            //     // hintContent: 'Собственный значок метки',
            //     // iconCaption: 'Гидроснаб ТД НМЗ',
            //     // iconCaption: 'Гидasdasd asd ',
            //     balloonContent: '<strong>г. Новосибирск, ул. Петухова, 69Б</strong>'
            // }, {
            //     iconCaption: 'Гидроснаб ТД НМЗ',
            //     // Опции.
            //     // Необходимо указать данный тип макета.
            //     iconLayout: 'default#imageWithContent',
            //     // Своё изображение иконки метки.
            //     iconImageHref: 'images/yandex-map/yandex-marker.svg',
            //     // Размеры метки.
            //     iconImageSize: [72, 72],
            //     // Смещение левого верхнего угла иконки относительно
            //     // её "ножки" (точки привязки).
            //     iconImageOffset: [-35, -64]
            // });
        }

        if (contactMapId) {
            contactMap = new ymaps.Map ("contact-map", {
                type: 'yandex#map',
                center: [54.947851, 82.909305],
                zoom: 16
            });
            contactMyPlacemark = new ymaps.Placemark([54.947851, 82.909305], {
                balloonContent: '<strong>г. Новосибирск, ул. Петухова, 69Б</strong>',
                iconCaption: 'Гидроснаб ТД НМЗ'
            }, {
                preset: 'islands#redDotIcon'
            });
            contactMap.geoObjects.add(contactMyPlacemark);
            contactMap.behaviors.disable('scrollZoom');
        }
    }
}());