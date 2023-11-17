const map = L.map('map').setView([43.26271, -2.92528], 13)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution:
		'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map)

const marker = L.marker([43.262985, -2.935013]).addTo(map)
const marker2 = L.marker([43.262985, -2.235013]).addTo(map)
const marker3 = L.marker([43.162985, -2.235013]).addTo(map)

const circle = L.circle([43.262985, -2.935013], {
	color: 'blue',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 5000,
}).addTo(map)

marker2.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup()
circle.bindPopup('I am a circle.')

const popup = L.popup()
	.setLatLng([43.162985, -2.835013])
	.setContent('I am a standalone popup.')
	.openOn(map)

// function onMapClick(e) {
// 	alert('You clicked the map at ' + e.latlng)
// }

// map.on('click', onMapClick)

// const popup2 = L.popup()

// function onMapClick(e) {
// 	popup
// 		.setLatLng(e.latlng)
// 		.setContent('You clicked the map at ' + e.latlng.toString())
// 		.openOn(map)
// }

// map.on('click', onMapClick)

// const popup2 = L.popup()

const tourismData = data

for (let i = 0; i < tourismData.length; i++) {
	L.marker([tourismData[i].latwgs84, tourismData[i].lonwgs84])
		.addTo(map)
		.bindPopup(tourismData[i].documentName)
		.openPopup()
}

console.log('datos', tourismData[0].latwgs84)
