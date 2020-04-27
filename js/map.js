// Set Map Bounds
var maxBounds = [
    [5.499550, -167.276413], // Southwest
    [83.162102, -52.233040] // Northeast
];

// Initialize Map
var map = L.map('map', {
    'center': [39.8283, -98.5795],
    'zoom': 4,
    'maxBounds': maxBounds
});

// Map Layer
L.tileLayer(
    'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; OpenStreetMap contributors'
    }).addTo(map);

// Set Locations
var proj = [
	[33.7459, -118.4137],
	[37.3685, -75.8364],
	[25.5662, -80.2455],
	[29.2631, -94.9502],
	[38.1577, -76.5826],
	[42.3367, -70.974],
	[33.1414, -117.3199],
	[27.7633, -82.5436],
	[37.6096, -122.1485],
	[37.9682, -122.4937],
	[38.6292, -75.0795],
	[41.1888, -72.1842],
	[40.9125, -73.4128],
	[41.0997, -72.3206],
	[41.5781, -71.4436],
	[32.7712, -117.2317]
];

// Set Location Icon
var projicon = L.icon({
    // iconUrl: 'icons/eco2-alt.png',
    iconUrl: 'img/ioes-short-shade.svg',
    className: 'svg-icon',
    iconSize: [25, 25]
});

// Iterate Icon for each Location
for (var i = 0; i < proj.length; i++) {
    marker = new L.marker(proj[i], {
        icon: projicon
    }).addTo(map)
};