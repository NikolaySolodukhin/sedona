var buttonChoose = document.querySelector('.promo__search');
var form = document.querySelector('.search-hotels');
if (document.getElementById('search')){
form.classList.add('search-hotels__hidden');
};
buttonChoose.onclick = function() {
  if (form.classList.contains('search-hotels__hidden')) {
    form.classList.remove('search-hotels__hidden');
  } else {
    form.classList.add('search-hotels__hidden');
  }
};
ymaps.ready(function () {
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
