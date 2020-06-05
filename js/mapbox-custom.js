// Load API Key
mapboxgl.accessToken = 'pk.eyJ1IjoiY2JlcmNpayIsImEiOiJjazlxZjN3dGIwOHkxM21tcmppa2x2N2xpIn0.dtgTNF18iuCitp8EVYwpXA';

// Set Map Bounds
var maxBounds = [
    [-167.276413, 5.499550], // Southwest
    [-52.233040, 83.162102]  // Northeast

    /* Contiguous 48 States - affects button clickable area
	[-140.276413, 15.499550], // Southwest
	[-52.233040, 53.162102] // Northeast
    */
];

// Initialize Map
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [-98.5795, 39.8283],
    zoom: 3,
    minZoom: 2,
    maxBounds: maxBounds,
    attributionControl: false
});

// disable map rotation using right click + drag
map.dragRotate.disable();
// disable map rotation using touch rotation gesture
map.touchZoomRotate.disableRotation();

// Add full screen control to map
// map.addControl(new mapboxgl.FullscreenControl());
// Add zoom controls to the map
map.addControl(new mapboxgl.NavigationControl({
    // Hide rotation control.
    showCompass: false
}));

// Load GeoJSON Layer
map.on('load', function () {
    // Load Custom Icon
    map.loadImage(
        './icons/seagrass.png',
        function (error, image) {
            if (error) throw error;
            map.addImage('custom-marker', image);
        });
    // Load Location Data
    map.addSource('points', {
        'type': 'geojson',
        'data': './data/restoration.geojson'
    });
    // Add Location Points to Map
    map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': 'points',
        'layout': {
            'icon-image': 'custom-marker',
            'icon-size': ['interpolate', ['linear'], ['zoom'],3,0.8,7,1],
            'icon-allow-overlap': true,
        }
    });

    // Add Popups to Map
    map.on('click', 'points', function (e) {
        // Map Fly To Center
        map.flyTo({ center: e.features[0].geometry.coordinates, zoom: 7 });

        // Define Variables from GeoJSON
        var id = e.features[0].properties.id;
        var coordinates = e.features[0].geometry.coordinates.slice();
        var name = e.features[0].properties.Name;
        var description = e.features[0].properties.Description;
        var link = e.features[0].properties.Link;
        var ecosystem = e.features[0].properties.Ecosystem;
        var year = e.features[0].properties.Year;
        var institute = e.features[0].properties.Institute;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
        var popup = new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML('<div class="mt-2"><a href="#project' + id + '" class="popup-title" data-toggle="modal" data-target="#projectModal' + id + '" role="button">' + name + '</a></div><div class="ecosystem mt-1">' + ecosystem + '</div><div><a href="#project' + id + '" class="btn btn-outline-primary mt-3" data-toggle="modal" data-target="#projectModal' + id + '" role="button">Info</a></div>')
            .addTo(map);

        // Close open Cards on Popup close
        /*
        popup.on('close', function() {
            $('.collapse').collapse('hide');
        });
        */

        // Reset Map Button
        let resetmap = document.getElementById('reset');
        resetmap.addEventListener('click', function (e) {
            map.flyTo({center: [-98.5795, 39.8283],zoom: 3});
            popup.remove();
        }, false);
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
