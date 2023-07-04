import mysql from 'mysql2';
import {Router} from 'express';
const storageCampus = Router();
let con = undefined;

storageCampus.use((req,res,next)=>{
    
    let myConfig=JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
})

storageCampus.get("/", (req,res)=>{
    con.query(
        /*sql*/`SELECT * FROM tb_client`,
        (err,data,fil)=>{
            res.send(JSON.stringify(data));
        }
    );
})
/* storageCampus.post("/", (req,res)=>{
    res.send("soy post")
})
storageCampus.put("/", (req,res)=>{
    res.send("soy put")
})
storageCampus.delete("/", (req,res)=>{
    res.send("soy delete")
}) */
export default storageCampus;