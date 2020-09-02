window.addEventListener('DOMContentLoaded', (event) => {

	const mymap = L.map('mapid', {
		crs: L.CRS.Simple,
		minZoom: -2
	});

	const bounds = [[0,0], [1824, 2736]];
	const image = L.imageOverlay('gameMap.png', bounds).addTo(mymap);

	mymap.fitBounds(bounds);

});

				
//const gameMap = L.map('gameMap', {
//	crs: L.CRS.Simple,
//	minZoom: -5
//});
//
//L.tileLayer('gameMap.png', {
//    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(gameMap);
//
//const bounds = [[0,0], [1000,1000]];
//const image = L.imageOverlay('gameMap.png', bounds).addTo(gameMap);
//
//gameMap.fitBounds(bounds);
//
//
//const mark = L.latLng([ 145, 175.2 ]);
//L.marker(mark).addTo(map);
//map.setView( [70, 120], 1);