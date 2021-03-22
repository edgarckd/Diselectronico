const express = require("express") 
var app = express()
// fs es para manipular archivos en general (en este caso un txt)
const fs = require("fs")
app.listen(5000);

app.use(express.static("estatico"))  


// sniffer udp 
const dgram = require('dgram');
//ejecuto el metodo create socket para que me devuelva un objeto en la variable datos
const datos = dgram.createSocket('udp4');
//cacho error del socket
datos.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  datos.close();
});


//obtengo de datos el mensaje que envio desde la app
//SINFFER
datos.on('message', function(msg, rinfo) {
//UTF8 es un estandar para leer los datos que me llegan     
    var result= msg.toString('utf8')  
    fs.writeFile('C:/Users/salam/OneDrive/Escritorio/proyectoweb1/estatico/result.txt', result, err => {
              if (err) throw err;
    })
  });
  
  // Fijación del puerto UDP 
  datos.bind(37777);

