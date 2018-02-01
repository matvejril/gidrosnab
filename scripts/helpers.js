(function() {

    // Аккордеон навигации каталогов
    $(document).ready(function() {
        //прикрепляем клик по заголовкам acc-head
        $('.catalog-nav__head').on('click', f_acc);
    });
    function f_acc(){
//скрываем все кроме того, что должны открыть
        $('.catalog-sub-nav').not($(this).next()).slideUp(200);
// открываем или скрываем блок под заголовком, по которому кликнули
        $(this).next().slideToggle(500);

        // $('.catalog-sub-nav').not($(this)).removeClass('catalog-nav__item_active');
        // $(this).addClass('catalog-nav__item_active');
    }


    // Аккордеон навигации кааталогов PDF
    $(document).ready(function() {
        //прикрепляем клик по заголовкам acc-head
        $('.catalogs-pdf-nav__head').on('click', f_acc);
    });
    function f_acc(){
//скрываем все кроме того, что должны открыть
        $('.catalogs-pdf-sub-nav').not($(this).next()).slideUp(200);
// открываем или скрываем блок под заголовком, по которому кликнули
        $(this).next().slideToggle(500);

        // $('.catalog-sub-nav').not($(this)).removeClass('catalog-nav__item_active');
        // $(this).addClass('catalog-nav__item_active');
    }
}());
