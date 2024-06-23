import express, { Application,Request,Response } from 'express'
const app:Application = express()
const PORT:number= 3001;

require("./model/index")

app.get("/",(req:Request,res:Response)=>{
    res.send("Hello w orld");
});
app.get("/about",(req:Request,res:Response)=>{
      res.send("About page");
});
app.listen(PORT,()=>{ 
    console.log("Server has started at port",PORT);
});