/* eslint-env browser */
(function() {
  'use strict';
  document.addEventListener('DOMContentLoaded', function() {
    // Your custom JavaScript goes here

    // Flickity init
    var hero_slider = document.querySelector('.js-hero-slider');
    if (hero_slider) {
      new Flickity(hero_slider, {
        pageDots: false,
        autoPlay: true
      });
    }
  });
})();
