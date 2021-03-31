// conexión con la base de datos
const {pool,Client}= require("pg")
const connectionString="postgressql://juanc:juancamilo22@database3.cphvv1knh4lu.us-east-1.rds.amazonaws.com:5431/serverd>

const client = new Client({
    connectionString:connectionString
})

client.connect()

let arraypoly = [];
var latlngs = client.query('SELECT "latitud", "longitud" FROM public.geodatos where "time"::date between date \'2021-03->
console.log(err,res);
})


//      var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
