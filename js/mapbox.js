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
		function(error, image) {
			if (error) throw error;
			map.addImage('custom-marker', image);
		});
	map.addSource('points', {
		'type': 'geojson',
		'data': {
			'type': 'FeatureCollection',
			'features': [{
					"type": "Feature",
					"geometry": {
						"type": "Point",
						"coordinates": [
							-118.4137,
							33.7459
						]
					},
					"properties": {
						"Name": "Palos Verdes Peninsula",
						"Institute": "Bay Foundation",
						"Year": "ongoing",
						"Ecosystem": "Kelp forest",
						"Description": "Restored 46 acres of kelp forest through reducing sea urchin density of the Palos Verdes Peninsula in Los Angeles County. Observed increase in ecosystem biomass and biodiversity of kelp, invertebrate, and fish populations in restoration sites. ",
						"Link": "https://www.santamonicabay.org/explore/in-the-ocean/kelp-forest-restoration/"
					}
				},
				{
					"type": "Feature",
					"geometry": {
						"type": "Point",
						"coordinates": [
							-75.8364,
							37.3685
						]
					},
					"properties": {
						"Name": "Atlantic side of Virginia’s Eastern Shore",
						"Institute": "Virginia Coastal Zone Management Program",
						"Year": "1998-present ",
						"Ecosystem": "Seagrass meadow",
						"Description": "Restoration project ongoing since 1998 on the Atlantic side of Virginia’s Eastern Shore. Seagrass restoration wass carried out by transplanting seeds in a process called “seed broadcasting” from healthy communities. By 2013, over five thousand acres of seagrass beds were restored. ",
						"Link": "https://www.deq.virginia.gov/Programs/CoastalZoneManagement/CZMIssuesInitiatives/SeaGrass.aspx"
					}
				},
				{
					"type": "Feature",
					"geometry": {
						"type": "Point",
						"coordinates": [
							-80.2455,
							25.5662
						]
					},
					"properties": {
						"Name": "eastern Florida, Biscayne Bay",
						"Institute": "Port of Miami Expansion Program",
						"Year": "1987",
						"Ecosystem": "Seagrass",
						"Description": "Four large scale attempts at seagrass restoration using three different species and three distinct planting techniques. All areas experienced successful growth and spreading of seagrass populations and observed rapid colonization by animals, including both fishery and other food web species. Estimated value of $9 million added by recovering productive bay area. ",
						"Link": "https://www.sciencedirect.com/science/article/abs/pii/0025326X87906217"
					}
				},
				{
					"type": "Feature",
					"geometry": {
						"type": "Point",
						"coordinates": [
							-94.9502,
							29.2631
						]
					},
					"properties": {
						"Name": "West Galveston Bay",
						"Institute": "Galveston Bay Foundation",
						"Year": "1994-1995",
						"Ecosystem": "Seagrass meadow",
						"Description": "One successful and one unsuccessful transplant of seagrass. Shallow and denser shoot plantings showed more success, with the healthy beds being able to be used for future projects as a donor site. ",
						"Link": "https://www.ser-rrc.org/project/usa-texas-west-galveston-bay-seagrass-restoration/"
					}
				},
				{
					"type": "Feature",
					"geometry": {
						"type": "Point",
						"coordinates": [
							-76.5826,
							38.1577
						]
					},
					"properties": {
						"Name": "Potomac River",
						"Institute": "Chesapeake Bay Program",
						"Year": "2003-2005",
						"Ecosystem": "Seagrass meadow",
						"Description": "Program used a variety of planting techniques as well as large quantities of seeds. Despite early indicators of success, by the summer of 2005 almost all plants were gone, due to limited light availability and higher water temperatures.",
						"Link": "https://www.ser-rrc.org/project/usa-maryland-potomac-river-eelgrass-restoration/"
					}
				},
				{
					"type": "Feature",
					"geometry": {
						"type": "Point",
						"coordinates": [
							-70.974,
							42.3367
						]
					},
					"properties": {
						"Name": "Boston harbor",
						"Institute": "Massachusetts Division of Marine Fisheries",
						"Year": "2004-2007",
						"Ecosystem": "Seagrass ",
						"Description": "Favorable results in seeding locations on island sites in Boston Harbor, mainland Boston Harbor locations were unsuitable for restoration during the project because of sediment quality issues related to organic loading. The study also tested advantages and disadvantages relating to hand- and frame-planting of seagrass. ",
						"Link": "https://www.ser-rrc.org/project/usa-massachusetts-boston-harbor-eelgrass-restoration/"
					}
				},
				{
					"type": "Feature",
					"geometry": {
						"type": "Point",
						"coordinates": [
							-117.3199,
							33.1414
						]
					},
					"properties": {
						"Name": "Agua hedionada lagoon",
						"Institute": "Southern California Caulerpa taxifolia Eradication Program",
						"Year": "2000-2005",
						"Ecosystem": "Invasive species removal",
						"Description": "Successful removal of invasive seaweed species, protecting native biodiversity and functioning ecosystems. Surveys have shown that the removal was complete.",
						"Link": "https://www.ser-rrc.org/project/usa-california-eradication-of-the-invasive-seaweed-caulerpa-taxifolia-from-agua-hedionda-lagoon-and-huntington-harbour/"
					}
				},
				{
					"type": "Feature",
					"geometry": {
						"type": "Point",
						"coordinates": [
							-82.5436,
							27.7633
						]
					},
					"properties": {
						"Name": "Tampa bay ",
						"Institute": "Tampa bay estuary program",
						"Year": "ongoing",
						"Ecosystem": "seagrass",
						"Description": "One thousand hectares of seagrass beds restored through water quality upgrades. Direct hand and mechanical planting failed. There are future plans for reconstruction of the longshore bar system.",
						"Link": "https://www.ser-rrc.org/project/usa-florida-restoration-of-the-tampa-bay-ecosystem/"
					}
				},
				{
					"type": "Feature",
					"geometry": {
						"type": "Point",
						"coordinates": [
							-122.1485,
							37.6096
						]
					},
					"properties": {
						"Name": "San Francisco Bay (Location 1: Hayward)",
						"Institute": "Coastal Conservancy",
						"Year": "2011-2017",
						"Ecosystem": "Seagrass and oyster habitat",
						"Description": "Planted combinations of eelgrass units and different oyster substrate units to assess biological and physical effects of treatment plots. Overall: Eelgrass transplanted from Point Molate was more successful than donors from Point San Pablo due to similar muddy conditions effects of treatment plots. Overall: Eelgrass transplanted from Point Molate was more successful than donors from Point San Pablo due to similar muddy conditios",
						"Link": "https://scc.ca.gov/webmaster/ftp/pdf/restore-shoreline/sfbay-living-shorline-project-052412.pdf"
					}
				},
				{
					"type": "Feature",
					"geometry": {
						"type": "Point",
						"coordinates": [
							-122.4937,
							37.9682
						]
					},
					"properties": {
						"Name": "San Francisco Bay (Location 2: San Rafael) ",
						"Institute": "Coastal Conservancy",
						"Year": "2011-2017",
						"Ecosystem": "Seagrass and oyster habitat",
						"Description": "Planted combinations of eelgrass units and different oyster substrate units to assess biological and physical",
						"Link": "https://scc.ca.gov/webmaster/ftp/pdf/restore-shoreline/sfbay-living-shorline-project-052412.pdf"
					}
				},
				{
					"type": "Feature",
					"geometry": {
						"type": "Point",
						"coordinates": [
							-75.0795,
							38.6292
						]
					},
					"properties": {
						"Name": "Delaware Inland Bays ",
						"Institute": "Virginia Institute of Marine Science",
						"Year": "1990",
						"Ecosystem": "Seagrass beds",
						"Description": "Two acres of eelgrass sanctuary/nursery was established within the Rehoboth and Indian River Bays. The seeds and rhizomes were collected from eelgrass beds in Virginia. ",
						"Link": "http://sagecoast.vims.edu/info/searchdetail.php?recid=DE01"
					}
				},
				{
					"type": "Feature",
					"geometry": {
						"type": "Point",
						"coordinates": [
							-72.1842,
							41.1888
						]
					},
					"properties": {
						"Name": "Eastern Long Island Sound",
						"Institute": "Cornell Cooperative Extension Marine Program",
						"Year": "2008-2010",
						"Ecosystem": "Seagrass beds",
						"Description": "Restoration activities conducted have proven that eelgrass plantings are possible and effective in establishing persistent meadows in Long Island Sound. ",
						"Link": "http://www.seagrassli.org/restoration/projects/nfwf.html"
					}
				},
				{
					"type": "Feature",
					"geometry": {
						"type": "Point",
						"coordinates": [
							-73.4128,
							40.9125
						]
					},
					"properties": {
						"Name": "Huntington Harbor",
						"Institute": "Town of Huntington and Cornell Cooperative Extension Marine Program",
						"Year": "2004-2006",
						"Ecosystem": "Eelgrass and bay scallops ",
						"Description": "Restoration of eelgrass and bay scallops at several different sites in the greater Huntington Northport Bay Complex using adult shoot transplant and seeding methods to improve their survival. ",
						"Link": "http://www.seagrassli.org/restoration/projects/hharbor.html "
					}
				},
				{
					"type": "Feature",
					"geometry": {
						"type": "Point",
						"coordinates": [
							-72.3206,
							41.0997
						]
					},
					"properties": {
						"Name": "Peconic Estuary",
						"Institute": "Town of Shelter Island  and Cornell Cooperative Extension Marine Program",
						"Year": "2004-2007",
						"Ecosystem": "Seagrass ",
						"Description": "Project involved transplanting adult shoots and using various densities to determine the most effective methods. Planting into circular 1m2  plots at a density of 200 shoots/m2 was shown to be the best method.  ",
						"Link": "http://www.seagrassli.org/restoration/projects/pe1.html"
					}
				},
				{
					"type": "Feature",
					"geometry": {
						"type": "Point",
						"coordinates": [
							-71.4436,
							41.5781
						]
					},
					"properties": {
						"Name": "Wickford Harbor (Rhode Island)",
						"Institute": "Save the Bay; University of Rhode Island",
						"Year": "",
						"Ecosystem": "Seagrass ",
						"Description": "Eelgrass transplant near an existing eelgrass bed in Wickford Harbor, Rhode Island. Aimed to raise public awareness and experiment with transplant methodology. ",
						"Link": "http://www.edc.uri.edu/restoration/html/intro/sea.htm"
					}
				},
				{
					"type": "Feature",
					"geometry": {
						"type": "Point",
						"coordinates": [
							-117.2317,
							32.7712
						]
					},
					"properties": {
						"Name": "Mission Bay (San Diego) ",
						"Institute": "Merkel & Associates, Inc; City of San Diego",
						"Year": "2016-",
						"Ecosystem": "Eelgrass",
						"Description": "Replanting eelgrass in order to mitigate negative impacts to eelgrass habitat from maintenance dredging. ",
						"Link": "https://www.sandiego.gov/sites/default/files/dsderp_pts520687_03.pdf"
					}
				}
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
			'text-field': ['get', 'Name'],
			'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
			'text-offset': [0, 0.6],
			'text-anchor': 'top'
		}
	});
});
