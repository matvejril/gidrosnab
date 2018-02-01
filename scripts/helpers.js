(function() {

    var accCatalogs = document.querySelector('.catalog-nav__head');
    var accCatalogsPDF = document.querySelector('.catalogs-pdf-nav__head');

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

    // $('.catalog-sub-nav').not($(this)).removeClass('catalog-nav__item_active');
    // $(this).addClass('catalog-nav__item_active');

}());
