(function () {
    // console.log("hellp");

    // var newsItem = $('.news-item_sm').get(2);
    // console.log(newsItem);


    // $('.news__act-up').bind('click', function() {
    //     var newsItem = $('.news-item_sm');
    //     newsItem.css('top');
    //     // newsItem.each(function(indx, element) {
    //     //     var top = $(element).css('top');
    //     //     var newTop = top - 1;
    //     //     $(element).css('top', newTop)
    //     // });
    // });
    //
    // $('.news__act-down').bind('click', function() {
    //     var newsItem = $('.news-item_sm');
    //     newsItem.each(function(indx, element) {
    //         var top = $(element).css('top');
    //         console.log(element);
    //         var newTop = top + 1;
    //         $(element).css('top', newTop)
    //     });
    // });


    var newsItems = document.querySelectorAll('.news-item_sm');
    //
    var scrollUpBtn = document.querySelector('.news__act-up');
    var scrollDownBtn = document.querySelector('.news__act-down');
    //
    scrollUpBtn.addEventListener('click', scrollUp);
    scrollDownBtn.addEventListener('click', scrollDown);

    function scrollUp () {
        // console.log("alla")
        // for (var z = 0; z < newsItems.length; z++) {
        //     var topPos = newsItems[z].style.top;
        //     var newTop =  topPos - 5 + 'px';
        //     console.log(newTop);
        //     newsItems[z].style.top = newTop;
        // }
    }

    function scrollDown () {
        // console.log("alla")
        for (var z = 0; z < newsItems.length; z++) {
            var topPos = newsItems[z].style.top;
            console.log(topPos);
            // var newTop =  topPos + 5 + 'px';
            // console.log(newTop);
            // newsItems[z].style.top = newTop;
        }
    }

}());
