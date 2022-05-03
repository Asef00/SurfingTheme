/* eslint-env browser */
(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", function () {
    // Your custom JavaScript goes here

    // Hero Slider
    var $heroSlider = $(".js-hero-slider").flickity({
      pageDots: false,
      autoPlay: 5000,
      wrapAround: true,
      prevNextButtons: false,
    });
    var $index = $(".js-hero-index");
    var $total = $(".js-hero-total");
    var flkty = $heroSlider.data("flickity");
    $total.text(flkty.slides.length);

    function updateIndicator() {
      var cellNumber = flkty.selectedIndex + 1;
      $index.text(cellNumber);
    }
    updateIndicator();
    $heroSlider.on("select.flickity", updateIndicator);

    // Events
    $(".js-prev-btn").on("click", function () {
      $heroSlider.flickity("previous");
    });
    $(".js-next-btn").on("click", function () {
      $heroSlider.flickity("next");
    });

    // Shop Slider
    var $shopSlider = $(".js-shop-slider").flickity({
      pageDots: false,
      cellAlign: 'left',
      wrapAround: true,
      arrowShape: { 
        x0: 10,
        x1: 40, y1: 30,
        x2: 45, y2: 30,
        x3: 15
      }
    });
  });
})();
