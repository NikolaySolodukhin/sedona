var buttonChoose = document.querySelector('.promo__search');
var form = document.querySelector('.search-hotels');
document.getElementById('search').classList.add('search-hotels__hidden');
buttonChoose.onclick = function() {
  if (form.classList.contains('search-hotels__hidden')) {
    form.classList.remove('search-hotels__hidden');
  } else {
    form.classList.add('search-hotels__hidden');
  }
};

ymaps.ready(function () {
  var myMap = new ymaps.Map('map-canvas', {
    center: [59.938631, -111.763806],
    zoom: 12
  }, {
    searchControlProvider: 'yandex#search'
  }),
  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: 'Собственный значок метки',
    balloonContent: 'Это красивая метка'
  }, {
    iconLayout: 'default#image',
  });
  myMap.geoObjects.add(myPlacemark);
});
