window.onload = function() {
  var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM({})
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([21.008333, 52.232222]),
      zoom: 16
    })
  });
};
