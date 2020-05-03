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
map.on('load', function() {
    map.loadImage(
        'https://drb326.github.io/cb-site/icons/eco2-alt.png',
        function (error, image) {
            if (error) throw error;
            map.addImage('custom-marker', image);
        });
    map.addSource('points', {
		'type': 'geojson',
		'data': {
			'type': 'FeatureCollection',
			'features': [
                
            ]
		}
	})
	map.addLayer({
		'id': 'points',
		'type': 'symbol',
		'source': 'points',
		'layout': {
			// get the icon name from the source's "icon" property
			// concatenate the name to get an icon from the style's sprite sheet
			'icon-image': 'custom-marker',
            'icon-size': 0.2,
			// get the title name from the source's "title" property
			'text-field': ['get', 'title'],
			'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
			'text-offset': [0, 0.6],
			'text-anchor': 'top'
		}
	});
});
