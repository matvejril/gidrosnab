(function() {

    // Диалоговое окно в каталогах pdf
    var popupWrap = document.querySelector('.popup-wrap');
    var catalogDownloadBtn = document.querySelector('.catalogs-pdf-card__download');
    var callRequestIcon = document.querySelector('.call-request__icon');
    var callRequestBtn = document.querySelector('.call-request__btn');
    var closeCallBtn = document.querySelector('.mobile-popup__close');

    // var catalogPopup = document.querySelector('.popup-confidentiality');
    if (popupWrap && catalogDownloadBtn) {
        catalogDownloadBtn.addEventListener('click', showDialog);
        popupWrap.addEventListener('click', hideDialog);

        function showDialog() {
            popupWrap.style.display = 'block';
        }
        function hideDialog(e) {
            if (popupWrap.style.display === 'block' && e.target.className === popupWrap.className) {
                popupWrap.style.display = 'none';
            }
        }
    }

    // Диалоговое окно в header/footer
    if (popupWrap && callRequestIcon && callRequestBtn) {

        callBtn.addEventListener('click', showDialog);
        popupWrap.addEventListener('click', hideDialog);
        closeCallBtn.addEventListener('click', hideDialog);

        function showDialog() {
            popupWrap.style.display = 'block';
        }
        function hideDialog(e) {
            if (popupWrap.style.display === 'block' && e.target.className === popupWrap.className) {
                popupWrap.style.display = 'none';
            }
        }
    }


}());
