(function() {

    // var pageGalery = $("#gallery");

    var perv = document.querySelector('.perv-slide');
    var next = document.querySelector('.next-slide');
    var play = document.querySelector('.autoplay');
    var fullscreen = document.querySelector('.fullscreen');

    var pageGaleryList = document.querySelector('.photos-page-gallery__list');

    var pageGalery = $(pageGaleryList).unitegallery({
        gallery_theme:"compact",
        gallery_mousewheel_role:"none"
    });

    if (pageGaleryList) {
        perv.addEventListener('click', function() {
            pageGalery.prevItem()
        });

        next.addEventListener('click', function() {
            pageGalery.nextItem()
        });

        play.addEventListener('click', function() {
            pageGalery.play()
        });

        fullscreen.addEventListener('click', function() {
            pageGalery.toggleFullscreen()
        });
    }


    var excursionGaleryList = document.querySelector('.excursion-gallery__list');
    var excursionGalery = $(excursionGaleryList).unitegallery({
        gallery_theme:"compact",
        gallery_mousewheel_role:"none"
    });

    if (excursionGaleryList) {
        perv.addEventListener('click', function() {
            excursionGalery.prevItem()
        });

        next.addEventListener('click', function() {
            excursionGalery.nextItem()
        });

        play.addEventListener('click', function() {
            excursionGalery.play()
        });

        fullscreen.addEventListener('click', function() {
            excursionGalery.toggleFullscreen()
        });
    }
}());
