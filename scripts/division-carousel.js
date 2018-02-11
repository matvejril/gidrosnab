(function() {
    var divisionNavItems = document.querySelectorAll('.division-nav-item');
    var productionNavItems = document.querySelectorAll('.production-nav');
    for (var i = 0; i < divisionNavItems.length; i++) {
        divisionNavItems[i].addEventListener('click', changeSlide);
    }
    function changeSlide() {
        var clickedSlide = this;
        var clickedSlideAttr = clickedSlide.getAttribute('data-division-carousel-nav-item');
        var attrValueAdd = (5 - clickedSlideAttr);
        if (clickedSlideAttr) {
            for (var z = 0; z < divisionNavItems.length; z++) {
                var newAttrValue = attrValueAdd + Number(divisionNavItems[z].getAttribute('data-division-carousel-nav-item'));
                if (newAttrValue > 5) {
                    newAttrValue = newAttrValue - 5;
                }
                divisionNavItems[z].setAttribute('data-division-carousel-nav-item', newAttrValue);
                productionNavItems[z].setAttribute('data-division-carousel-content', newAttrValue);
            }
            changeProdNav();
        }
    }
    function changeProdNav() {
        for (var i = 0; i < productionNavItems.length; i++) {
            var productionNavItem = productionNavItems[i];
            var productionNavItemAttr = productionNavItems[i].getAttribute('data-division-carousel-content');
            productionNavItem.style.display = 'none';
            if (productionNavItemAttr === '5') {
                productionNavItem.style.display = 'flex';
            }
        }
    }
}());
