var map = L.map("map").setView([10.982088164553303,-74.78344818015789],16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom:18, minZoom:9,
}).addTo(map);

function obtenerdatos(){

	var cal1 = document.getElementById("calendario1").value;
	var cal2 = document.getElementById("calendario2").value;
	console.log(cal1)

	var split = cal1.split("T")
	fecha1 = split[0]
	hora1 = split[1]

	var split = cal2.split("T")
	fecha2 = split[0]
	hora2 = split[1]

	//document.form1.dato.value = fecha;

	//console.log("fecha2"+fecha2)

}
