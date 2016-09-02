var link = document.querySelector(".promo__search");
var popup = document.querySelector(".search-hotels");
var open = documetn.querySelector(".search-hotels__hidden");
popup.classlist.add("search-hotels__hidden");
open.addeventlistener("click", function (event) {
  event.preventDefault();
  popup.classlist.remove("search-hotels__hidden");
});

ymaps.ready(function () {
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
