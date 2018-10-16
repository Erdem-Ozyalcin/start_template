// General Lightbox
//http://simplelightbox.com/
var lightbox = $('.gnrl-gallery a').simpleLightbox({
    history: false
});

//General Slider
//http://sachinchoolur.github.io/lightslider/index.html
$(document).ready(function() {
    $(".gnrl-slider").lightSlider({
        item: 1,
        slideMargin: 5,
    });
});