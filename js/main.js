'use strict'

$(document).ready(function(){
   
    
    /* Macht das nav-menu-sticky TODO: gucken, wie das bei umsprung über mediaqueries am besten geht. */
    var $mainNav = $("#nav-wrapper");
    let mainNavHeight = $mainNav.height();
    let bannerHeight = $('#banner').height();

    $(window).scroll(function () {
        if ($(this).scrollTop() >= bannerHeight) {
            document.body.style.paddingTop = mainNavHeight + 'px';
            $mainNav.addClass("sticky-nav");
        }else{
            document.body.style.paddingTop = 0;
            $mainNav.removeClass("sticky-nav");
        }
    });
});
    
