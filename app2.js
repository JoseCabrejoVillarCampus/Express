//appExpress.use((req,res,next)=>{//TODO: Middleware debe entrar antes que al otro metodo, next indica que siga desps del proceso
//})
appExpress.use(express.json());
appExpress.use(express.text());
appExpress.get('/campus/:id', (req,res)=>{
    //console.log(req.params);//?ver parametros de la consulta
    //console.log(req.query);
    //console.log(req.body);
    res.send("hola");
})