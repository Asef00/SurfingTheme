/* eslint-env browser */
(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", function () {
    // Your custom JavaScript goes here

    // Flickity
    var $heroSlider = $(".js-hero-slider").flickity({
      pageDots: false,
      autoPlay: 5000,
      prevNextButtons: false,
    });
    var $index = $(".js-hero-index");
    var $total = $(".js-hero-total");
    var flkty = $heroSlider.data("flickity");
    $total.text(flkty.slides.length);

    function updateStatus() {
      var cellNumber = flkty.selectedIndex + 1;
      $index.text(cellNumber);
    }
    updateStatus();
    $heroSlider.on("select.flickity", updateStatus);

    // Events
    $(".js-prev-btn").on("click", function () {
      $heroSlider.flickity("previous");
    });
    $(".js-next-btn").on("click", function () {
      $heroSlider.flickity("next");
    });
  });
})();
