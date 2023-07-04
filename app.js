import dotenv from 'dotenv';
import express from 'express';//?importamos la libreria
import storageCampus from './routers/campus.js';
dotenv.config();
const appExpress = express();//?levanta todo el servicio

appExpress.use(express.json());
appExpress.use("/campus", storageCampus);//!intercepta y redireccione


const config =JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>console.log(`http://${config.hostname}:${config.port}`));//!aca levantamos el servidor