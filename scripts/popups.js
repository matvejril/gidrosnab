(function() {
    // Диалоговое окно в каталогах pdf

  var catalogDownloadBtn = document.querySelector('.catalogs-pdf-card__download');
  var popupWrap = document.querySelector('.popup-wrap');

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
}());
