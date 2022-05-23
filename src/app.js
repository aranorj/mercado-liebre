
const express = require('express'); //requiero express
const path = require('path'); //requiero path

//creo objeto app que ejecuta express
let app = express(); 

app.use(express.urlencoded({extended:false}));

//defino que obtendré mis recursos estáticos desde la carpeta public
const publicPath = path.join(__dirname,'../public');
app.use(express.static(publicPath));

const port = process.env.PORT || 3000
//defino el puerto
app.listen(port, ()=>{
    console.log(`Escuchando por el puerto ${port}`)
});

//defino el home vinculandolo con un html 
const homePath = path.join(__dirname, "/views/home.html")
app.get("/",(req, res)=>{
res.sendFile(homePath);
})

//defino el registro vinculandolo con un html 
const registerPath = path.join(__dirname, "/views/register.html")
app.get("/register",(req, res)=>{
res.sendFile(registerPath);
})

//la ruta a donde se enviarán los datos
app.post("/datos",(req, res)=>{
res.send(req.body);
})

