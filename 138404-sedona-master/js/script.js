function initialize() {
  var mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(34.8653578, -110.8722688)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);
  var myLatLng = new google.maps.LatLng(34.8653578, -110.8722688);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
