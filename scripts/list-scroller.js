(function () {
    // var newsItems = $('.news-item_sm');
    // var newSm = document.querySelector('.news_sm');
    var newsList = document.querySelector('.news__list');

    if (newsList) {
        var newsItems = document.querySelectorAll('.news-item_sm');
        var totalHeight = 0;
        $(window).bind('resize init', function () {
            for (var k = 0; k < newsItems.length -3; k++) {
                var newItem = $(newsItems[k]);
                console.log(newItem);
                totalHeight += (Number(newItem.css('height').replace('px', '')) + Number(newItem.css('margin-bottom').replace('px', '')))/3;
            }
            console.log(totalHeight);
        });

        var newsTrack = $('.news__list-track');
        var scrollUpBtn = document.querySelector('.news__act-up');
        var scrollDownBtn = document.querySelector('.news__act-down');

        scrollUpBtn.addEventListener('click', scrollUp);
        scrollDownBtn.addEventListener('click', scrollDown);

        var stateList = 0;

        function scrollUp () {
            var currentItem = $('.news-item_sm').eq(stateList);
            var currentItemHeight = Number(currentItem.css('height').replace('px', '')) + Number(currentItem.css('margin-bottom').replace('px', ''));
            var posTop = Number(newsTrack.css('top').replace('px', '')) + currentItemHeight;
            if (posTop > 0) {
                newsTrack.css('top', '0px');
                scrollUpBtn.style.visibility = "hidden"
            } else {
                stateList -= 1 ;
                var newTop = String(posTop + 'px');
                newsTrack.css('top', newTop);
                scrollDownBtn.style.visibility = "visible";

            }
        }
        function scrollDown () {
            var currentItem = $('.news-item_sm').eq(stateList);
            var currentItemHeight = Number(currentItem.css('height').replace('px', '')) + Number(currentItem.css('margin-bottom').replace('px', ''));
            console.log(currentItemHeight);
            var posTop = Number(newsTrack.css('top').replace('px', '')) - currentItemHeight;
            if (posTop < -totalHeight) {
                newsTrack.css('top', String(-totalHeight));
                scrollDownBtn.style.visibility = "hidden"
            } else {
                stateList += 1;
                var newTop = String(posTop + 'px');
                newsTrack.css('top', newTop);
                scrollUpBtn.style.visibility = "visible"
            }
        }
    }

}());
