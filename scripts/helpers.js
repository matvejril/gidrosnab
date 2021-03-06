(function() {

    var accCatalogs = document.querySelector('.catalog-nav__head');
    var accCatalogsPDF = document.querySelector('.catalogs-pdf-nav__head');
    var accBannerNav = document.querySelector('.banner-nav-md');
    var accBannerSubNav = document.querySelector('.banner-1sub-nav-md');

    // Аккордеон навигации каталогов
    if (accCatalogs) {
        $(document).ready(function() {
            //прикрепляем клик по заголовкам
            $('.catalog-nav__head').on('click', f_accCatalogs);
        });
        function f_accCatalogs(){
            //скрываем все кроме того, что должны открыть
            $('.catalog-sub-nav').not($(this).next()).slideUp(200);
            // открываем или скрываем блок под заголовком, по которому кликнули
            $(this).next().slideToggle(500);

            // $('.catalog-sub-nav').not($(this)).removeClass('catalog-nav__item_active');
            // $(this).addClass('catalog-nav__item_active');
        }
    }

    // Аккордеон навигации кааталогов PDF
    if (accCatalogsPDF) {
        $(document).ready(function() {
            //прикрепляем клик по заголовкам
            $('.catalogs-pdf-nav__head').on('click', f_accCatalogsPDF);
        });
        function f_accCatalogsPDF(){
            //скрываем все кроме того, что должны открыть
            $('.catalogs-pdf-sub-nav').not($(this).next()).slideUp(200);
            // открываем или скрываем блок под заголовком, по которому кликнули
            $(this).next().slideToggle(500);
        }
    }


    // Выпадашка основной навигации для мобилки
    $('.main-nav__mini-btn').click(function() {
        $('.main-nav').slideToggle(500);
    });
    $(window).resize(function() {
        if ($(window).width() > 768) {
            $('.main-nav').removeAttr('style');
        }
    });
    // Выпадашка основной навигации для мобилки (about company)
    // $('.main-sub-nav__head').click(function() {
    //     $('.main-sub-nav__list').slideToggle(500);
    // });
    // $(window).resize(function() {
    //     if ($(window).width() > 768) {
    //         $('.main-sub-nav__list').removeAttr('style');
    //     }
    // });


    // Выпадашка about company навигации для десктоп
    var aboutCompanyNav = document.querySelector('.about-company-nav');
    var mainNavAboutCompany = document.querySelector('.main-nav__item_about-company');

    if (aboutCompanyNav && $(window).width() > 768) {
        setTimeout(eventee, 1000);

        function eventee () {
            mainNavAboutCompany.addEventListener('mouseover', function() {
                aboutCompanyNav.style.display = 'block';
            })
        }
    }


    $(window).resize(function () {
        if ($(window).width() < 768 && aboutCompanyNav) {
            aboutCompanyNav.style.display = 'none';
        }
    });


    // Аккордеон навигация банера mobile
    if (accBannerNav) {
        $(document).ready(function() {
            //прикрепляем клик по заголовкам
            $('.banner-nav-md__head').on('click', f_accBannerNav);
        });
        function f_accBannerNav(){
            //скрываем все кроме того, что должны открыть
            $('.banner-1sub-nav-md').not($(this).next()).slideUp(200);
            // открываем или скрываем блок под заголовком, по которому кликнули
            $(this).next().slideToggle(300);
        }
    }
    if (accBannerSubNav) {
        $(document).ready(function() {
            //прикрепляем клик по заголовкам
            $('.banner-1sub-nav-md__head').on('click', f_accBannerSubNav);
        });
        function f_accBannerSubNav(){
            //скрываем все кроме того, что должны открыть
            $('.banner-2sub-nav-md').not($(this).next()).slideUp(200);
            // открываем или скрываем блок под заголовком, по которому кликнули
            $(this).next().slideToggle(300);
        }
    }

    // Слайдеры ресайз изображений
    var ourPartnersSliderImg = document.querySelectorAll(".our-partners-slider__slide-img");
    var ourClientsSliderImg = document.querySelectorAll(".our-clients-slider__slide-img");
    for (var i = 0; i < ourPartnersSliderImg.length; i++) {
        var ourPartnersSliderImgWidth = ourPartnersSliderImg[i].naturalWidth;
        if (ourPartnersSliderImgWidth < 160) {
            ourPartnersSliderImg[i].style.width = 45 + '%';
        }
    }
    for (var z = 0; z < ourClientsSliderImg.length; z++) {
        var ourClientsSliderImgWidth = ourClientsSliderImg[z].naturalWidth;
        if (ourClientsSliderImgWidth < 250) {
            ourClientsSliderImg[z].style.width = 55 + '%';
        }
    }

    // о кмпании main sub-nav mobile links
    var anchorPosts = document.querySelectorAll('.anchor_item');
    var hash = window.location.hash.substring(1);

    changeContentAboutUs(hash);
    window.addEventListener("hashchange", function(e) {
        var hash = window.location.hash.substring(1);
        changeContentAboutUs(hash);
    }, false);

    function changeContentAboutUs(hash) {
        if (screen.width < 768) {
            for (var j = 0; j < anchorPosts.length; j++) {
                if (anchorPosts[j].id === hash) {
                    anchorPosts[j].style.display = 'block';
                } else {
                    anchorPosts[j].style.display = 'none';
                }
            }
        }
    }
    // Сбросить секции
    $(window).resize(function () {
        if ($(window).width() > 768) {
            for (var z = 0; z < anchorPosts.length; z++) {
                anchorPosts[z].style.display = 'block';
            }
        }
    });
}());
