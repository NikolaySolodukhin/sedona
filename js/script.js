ymaps.ready(function() {
  var myMap = new ymaps.Map('map-canvas', {
      center: [59.938631, -111.763806],
      zoom: 9
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
