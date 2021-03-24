const express = require("express") 
var app = express()
var data
// fs es para manipular archivos en general (en este caso un txt)
const fs = require("fs")
app.listen(37778);

app.use(express.static("estatico"))  

// conexión con la base de datos
const {pool,Client}= require("pg")
const connectionString="postgressql://juanc:juancamilo22@database3.cphvv1knh4lu.us-east-1.rds.amazonaws.com:5431/serverdb"

const client = new Client({
    connectionString:connectionString
})

client.connect()

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
datos.on('message', (msg, rinfo) =>  {
//UTF8 es un estandar para leer los datos que me llegan
    msg = msg.toString()
    fs.writeFile('/var/www/taxis/TAXIS-web-server-2/proyectoweb1_/estatico/result.txt', msg, err => {
              if (err) throw err;
    })
    console.log(msg)
    data = msg.split("/")
    var lat = ("\'"+data[0]+"\'")
    var lon = ("\'"+data[1]+"\'")
    var tim = ("\'"+data[2]+"\'")
    console.log(lat)


    client.query('INSERT INTO public.geodatos("latitud","longitud","time")VALUES ('+lat+','+lon+','+tim+');', (err,res)=>{
       console.log(err,res);

   })

  });

  // Fijación del puerto UDP 
  datos.bind(37777);
