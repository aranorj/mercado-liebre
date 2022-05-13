const express = require('express'); //requiero express
const path = require('path'); //requiero path

//creo objeto app que ejecuta express
let app = express(); 

//defino que obtendré mis recursos estáticos desde la carpeta public
const publicPath = path.join(__dirname,'./public');
app.use(express.static(publicPath));

//defino el puerto
app.listen("3000", ()=>{
    console.log('Escuchando por el puerto 3000')
});

//defino el home vinculandolo con un html 
const homePath = path.join(__dirname, "./views/home.html")
app.get("/",(req, res)=>{
res.sendFile(homePath)
})
