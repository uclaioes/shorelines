// Load API Key
mapboxgl.accessToken = 'pk.eyJ1IjoiY2JlcmNpayIsImEiOiJjazlxZjN3dGIwOHkxM21tcmppa2x2N2xpIn0.dtgTNF18iuCitp8EVYwpXA';

// Set Map Bounds
var maxBounds = [
	[-167.276413, 5.499550], // Southwest
	[-52.233040, 83.162102] // Northeast
];

// Initialize Map
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [-98.5795, 39.8283],
    zoom: 3,
    minZoom: 3,
    maxBounds: maxBounds
});

// Load GeoJSON Layer
map.on('load', function () {
    map.loadImage(
        'https://drb326.github.io/cb-site/icons/eco2-alt.png',
        function (error, image) {
            if (error) throw error;
            map.addImage('custom-marker', image);
        });
    map.addSource('points', {
        'type': 'geojson',
        'data': 'https://drb326.github.io/cb-site/data/restoration-map.geojson'
    })
    map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': 'points',
        'layout': {
            'icon-image': 'custom-marker',
            'icon-size': 0.2,
            'icon-allow-overlap': true,
        }
    });
    map.on('click', 'points', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var name = e.features[0].properties.Name;
        var description = e.features[0].properties.Description;
        var link = e.features[0].properties.Link;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML('<h6><a href="' + link + '" target="_blank">' + name + '</a></h6>' + description)
            .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'points', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'points', function () {
        map.getCanvas().style.cursor = '';
    });

});

// Load Project List
