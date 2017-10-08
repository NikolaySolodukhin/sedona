'use strict';

window.utils = (function() {
  var buttonChoose = document.querySelector('.promo__search');
  var form = document.querySelector('.form');
  form.classList.add('form--hidden');

  buttonChoose.addEventListener('click', function() {
    if (form.classList.contains('form--hidden')) {
      form.classList.remove('form--hidden');
    } else {
      form.classList.add('form--hidden');
    }
  });
})();

ymaps.ready(function() {
  var myMap = new ymaps.Map('map-canvas', {
      center: [34.8697395, -111.7609896],
      zoom: 12
    }, {
      searchControlProvider: 'yandex#search'
    }),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      balloonContent: 'Sedona'
    }, {
      iconLayout: 'default#image',
    });

  myMap.geoObjects.add(myPlacemark);
});
