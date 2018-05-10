const express = require('express');
const bodyParser = require('body-parser');
//Dependencia de configuración para separar los entornos de Dev de producción
const config = require('./config/config').getConfigByEnvironment(process.env.NODE_ENV);

const app = express();

global.__root   = __dirname + '/';
//Utiliza BodyParser para parsear todas los body de los request a json
app.use(bodyParser.json());


var HotelController = require(__root + 'controllers/HotelController');
app.use('/api/hotels', HotelController);

/*if(process.env.NODE_ENV === 'production'){
    const path = require('path');
    app.get('/*',(req,res)=>{
        res.sendfile(path.resolve(__dirname,'../client','build','index.html'))
    })
}*/


const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`SERVER ALMUNDO RUNNNING ON PORT ${port}`)
})
