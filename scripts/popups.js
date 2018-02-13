(function() {

    var popupMobile = document.querySelector('.popup-mobile');
    var popupConf = document.querySelector('.popup-conf');

    var catalogDownloadBtn = document.querySelector('.catalogs-pdf-card__download');
    var callRequestIcon = document.querySelectorAll('.call-request__icon');
    var callRequestBtn = document.querySelectorAll('.call-request__btn');

    var closeMobileBtn = document.querySelector('.popup-mobile__close');

    // Диалоговое окно в каталогах pdf
    if (catalogDownloadBtn) {
        catalogDownloadBtn.addEventListener('click', showConfDialog);
        popupConf.addEventListener('click', hideConfDialog);

        function showConfDialog() {
            popupConf.style.display = 'block';
        }
        function hideConfDialog(e) {
            if (e.target === popupConf) {
                popupConf.style.display = 'none';
            }
        }
    }

    // Диалоговое окно в header/footer
    if (callRequestIcon && callRequestBtn) {

        for (var i = 0; i < callRequestIcon.length; i++) {
            callRequestIcon[i].addEventListener('click', showMobileDialog);
        }
        for (var z = 0; z < callRequestBtn.length; z++) {
            callRequestBtn[z].addEventListener('click', showMobileDialog);
        }
        popupMobile.addEventListener('click', hideMobileDialog);
        closeMobileBtn.addEventListener('click', hideMobileDialog);

        function showMobileDialog() {
            popupMobile.style.display = 'block';
        }
        function hideMobileDialog(e) {
            if (e.target === popupMobile || this === closeMobileBtn) {
                popupMobile.style.display = 'none';
            }
        }
    }
}());
