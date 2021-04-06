var map = L.map("map").setView([10.982088164553303,-74.78344818015789],16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom:18, minZoom:9,
}).addTo(map);
var fecha1
var fecha2
var hora1
var hora2
var f1
var f2

function obtenerdatos(){

//	var cal1 = null
//	var cal2 = null
//	console.log(cal1)

	var cal1 = document.getElementById("calendario1").value;
	var cal2 = document.getElementById("calendario2").value;
//	console.log(cal1)

	var split = cal1.split("T")
	var split2 = cal2.split("T")

	fecha1 = split[0]
	fecha2 = split2[0]
	hora1 = split[1]
	hora2 = split2[1]
	// # de miliseg desde 00:00:00 abril 1970
	f1 = Date.parse(fecha1+","+hora1)
	f2 = Date.parse(fecha2+","+hora2)
	//

	console.log(f1+"/"+f2)

	// verificar:
	// 1. ¿el usuario realmente digitó todos los datos necesarios?

	if (cal1 == [] || cal2 == []) {
	alert("Ups! verifica tus datos")
	}

	// 2. ¿la fecha/hora final realmente ocurre después que la fecha/hora inicial?
	if (f1>f2) {
		alert("Ups! la fecha/hora inicial debe ocurrir antes que la final")
	}

	// 3. ¿la fecha/hora inicial y final son realmente menores a las del momento en 
	//    el que se realiza la consulta.

	// 4. ¿la fecha/hora consultada realmente está en la base de datos?


//	return [fecha1,hora1,fecha2,hora2]

}

//	module.exports.obtenerdatos = obtenerdatos
