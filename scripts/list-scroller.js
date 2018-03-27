(function () {

    // var newsItems = document.querySelectorAll('.news-item_sm');
    // var newsTrack1 = document.querySelector('.news__list-track');

    var newsTrackHeightVal;

    var newSm = document.querySelector('.news_sm');
    if (newSm) {
        $(window).on('resize init', function () {
            var newsTrackHeight = newsTrack.css('height');
            newsTrackHeightVal = Number(newsTrackHeight.replace('px', ''));
        });

        var newsTrack = $('.news__list-track');
        var scrollUpBtn = document.querySelector('.news__act-up');
        var scrollDownBtn = document.querySelector('.news__act-down');

        scrollUpBtn.addEventListener('click', scrollUp);
        scrollDownBtn.addEventListener('click', scrollDown);

        function scrollUp () {
            var posTop = Number(newsTrack.css('top').replace('px', '')) + 80;
            if (posTop > 0) {
                newsTrack.css('top', '0px');
                scrollUpBtn.style.visibility = "hidden"
            } else {
                var newTop = String(posTop + 'px');
                newsTrack.css('top', newTop);
                scrollDownBtn.style.visibility = "visible"
            }
            // console.log(newTop);
        }
        function scrollDown () {
            var posTop = Number(newsTrack.css('top').replace('px', '')) - 80;
            if (posTop < -newsTrackHeightVal) {
                newsTrack.css('top', String(-newsTrackHeightVal));
                scrollDownBtn.style.visibility = "hidden"
            } else {
                var newTop = String(posTop + 'px');
                newsTrack.css('top', newTop);
                scrollUpBtn.style.visibility = "visible"
            }
            // console.log(newTop);
        }
    }
}());
