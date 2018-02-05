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
    // // Выпадашка основной навигации для мобилки (about company)
    $('.main-sub-nav__head').click(function() {
        $('.main-sub-nav__list').slideToggle(500);
    });
    $(window).resize(function() {
        if ($(window).width() > 768) {
            $('.main-sub-nav__list').removeAttr('style');
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
}());
