// Load API Key
mapboxgl.accessToken = 'pk.eyJ1IjoiY2JlcmNpayIsImEiOiJjazlxZjN3dGIwOHkxM21tcmppa2x2N2xpIn0.dtgTNF18iuCitp8EVYwpXA';

// Initialize Map
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
});