window.onload = function() {
  var marker = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([21.008333, 52.232222])),
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
      zoom: 16
    })
  });
};
