window.onload = function() {
  var distanceBetweenPoints = function(latlng1, latlng2){
    var line = new ol.geom.LineString([latlng1, latlng2]);
    return Math.round(line.getLength() * 100) / 100;
  };

  var formatDistance = function(length) {
      if (length >= 1000) {
          length = (Math.round(length / 1000 * 100) / 100) +
          ' ' + 'km';
      } else {
          length = Math.round(length) +
          ' ' + 'm';
      }
      return length;
  };

  var targetDest = [ 2340431.0421245047, 6836339.105912586 ];

  var marker = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([0, 0])),
    name: 'Syrenka'
  });

  var vectorSource = new ol.source.Vector({
    features: [marker]
  });

  var iconStyle = new ol.style.Style({
    image: new ol.style.Icon({
      anchor: [20, 65],
      anchorXUnits: 'pixels',
      anchorYUnits: 'pixels',
      // opacity: 0.75,
      src: 'marker.png'
    })
  });

  var vectorLayer = new ol.layer.Vector({
    source: vectorSource,
    style: iconStyle
  });

  var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM({})
      }),
      vectorLayer
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([21.008333, 52.232222]),
      zoom: 15
    })
  });

  map.on('click', function(evt) {
    var coordinates = evt.coordinate;
    console.log(coordinates);
    marker.getGeometry().setCoordinates(coordinates);
  });

  document.getElementById('go').addEventListener('click', function() {
    var dist = distanceBetweenPoints(targetDest, marker.getGeometry().getCoordinates());
    if (dist > 30) {
      alert('Pudło! Pomyliłeś się o ' + formatDistance(dist));
    } else {
      alert('Gratulacje! Znalazłeś syrenkę z dokładnością do ' + formatDistance(dist));
    }
  });
};
